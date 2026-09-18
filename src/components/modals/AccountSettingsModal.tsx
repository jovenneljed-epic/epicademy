import React, { useState, useEffect, useMemo } from 'react';
import { 
  X, 
  Search, 
  UserPlus, 
  UserX, 
  UserCheck, 
  Trash2, 
  Shield, 
  GraduationCap, 
  CheckCircle2, 
  AlertTriangle, 
  RefreshCw, 
  Lock, 
  Mail, 
  User as UserIcon,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { 
  fetchAllUserProfiles, 
  createUserAccount, 
  deleteUserAccount, 
  toggleUserAccountStatus, 
  updateUserRole,
  type UserProfileItem 
} from '../../lib/supabaseClient';

interface AccountSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUserEmail?: string | null;
}

export const AccountSettingsModal: React.FC<AccountSettingsModalProps> = ({
  isOpen,
  onClose,
  currentUserEmail,
}) => {
  const [profiles, setProfiles] = useState<UserProfileItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'disabled' | 'student' | 'educator'>('all');
  
  // Add Account Form State
  const [showAddForm, setShowAddForm] = useState<boolean>(false);
  const [newFullName, setNewFullName] = useState<string>('');
  const [newEmail, setNewEmail] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [newRole, setNewRole] = useState<'student' | 'educator'>('student');
  const [newSpecialty, setNewSpecialty] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [feedbackMsg, setFeedbackMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Deletion Confirmation State
  const [deleteTarget, setDeleteTarget] = useState<UserProfileItem | null>(null);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  // Action Loading by User ID
  const [actionLoadingId, setActionLoadingId] = useState<string | null>(null);

  const loadProfiles = async () => {
    setIsLoading(true);
    try {
      const { profiles: data } = await fetchAllUserProfiles();
      setProfiles(data);
    } catch (err) {
      console.error('Failed to load user profiles:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadProfiles();
      setFeedbackMsg(null);
      setDeleteTarget(null);
    }
  }, [isOpen]);

  // Computed Metrics
  const metrics = useMemo(() => {
    const total = profiles.length;
    const active = profiles.filter(p => !p.isDisabled).length;
    const disabled = profiles.filter(p => p.isDisabled).length;
    const educators = profiles.filter(p => p.role === 'educator').length;
    const students = profiles.filter(p => p.role === 'student').length;
    return { total, active, disabled, educators, students };
  }, [profiles]);

  // Filtered profiles
  const filteredProfiles = useMemo(() => {
    return profiles.filter(p => {
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery = !query || 
        p.email.toLowerCase().includes(query) || 
        p.fullName.toLowerCase().includes(query) ||
        (p.specialty && p.specialty.toLowerCase().includes(query));

      if (!matchesQuery) return false;

      if (statusFilter === 'active') return !p.isDisabled;
      if (statusFilter === 'disabled') return p.isDisabled;
      if (statusFilter === 'student') return p.role === 'student';
      if (statusFilter === 'educator') return p.role === 'educator';
      return true;
    });
  }, [profiles, searchQuery, statusFilter]);

  const handleCreateAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackMsg(null);

    if (!newEmail.trim() || !newPassword.trim()) {
      setFeedbackMsg({ type: 'error', text: 'Email and password are required.' });
      return;
    }
    if (newPassword.length < 6) {
      setFeedbackMsg({ type: 'error', text: 'Password must be at least 6 characters.' });
      return;
    }

    setIsSubmitting(true);
    try {
      const { profile, error } = await createUserAccount({
        fullName: newFullName.trim() || newEmail.split('@')[0],
        email: newEmail.trim(),
        password: newPassword,
        role: newRole,
        specialty: newSpecialty.trim() || (newRole === 'educator' ? 'General Disciplines' : 'Student Learner'),
      });

      if (error) {
        setFeedbackMsg({ type: 'error', text: error.message || 'Failed to create account.' });
      } else if (profile) {
        setFeedbackMsg({ type: 'success', text: `Account for ${profile.email} created successfully!` });
        setNewFullName('');
        setNewEmail('');
        setNewPassword('');
        setNewSpecialty('');
        setShowAddForm(false);
        await loadProfiles();
      }
    } catch (err: any) {
      setFeedbackMsg({ type: 'error', text: err.message || 'Unexpected error creating account.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleToggleStatus = async (user: UserProfileItem) => {
    const targetStatus = !user.isDisabled;
    const confirmMsg = targetStatus
      ? `Are you sure you want to disable ${user.email}? They will not be able to log in.`
      : `Re-enable account access for ${user.email}?`;

    if (!window.confirm(confirmMsg)) return;

    setActionLoadingId(user.id);
    try {
      const { success, error } = await toggleUserAccountStatus(user.id, user.email, targetStatus);
      if (success) {
        setProfiles(prev => prev.map(p => {
          if (p.id === user.id || p.email.toLowerCase() === user.email.toLowerCase()) {
            return { ...p, isDisabled: targetStatus, isVerified: !targetStatus };
          }
          return p;
        }));
        setFeedbackMsg({ 
          type: 'success', 
          text: targetStatus ? `Account ${user.email} disabled.` : `Account ${user.email} re-enabled.` 
        });
      } else {
        setFeedbackMsg({ type: 'error', text: error?.message || 'Failed to update account status.' });
      }
    } catch (err: any) {
      setFeedbackMsg({ type: 'error', text: err.message || 'Error updating account status.' });
    } finally {
      setActionLoadingId(null);
    }
  };

  const handleDeleteUser = async () => {
    if (!deleteTarget) return;
    setIsDeleting(true);
    try {
      const { success, error } = await deleteUserAccount(deleteTarget.id, deleteTarget.email);
      if (success) {
        setProfiles(prev => prev.filter(p => p.id !== deleteTarget.id && p.email.toLowerCase() !== deleteTarget.email.toLowerCase()));
        setFeedbackMsg({ type: 'success', text: `Account ${deleteTarget.email} deleted permanently.` });
        setDeleteTarget(null);
      } else {
        setFeedbackMsg({ type: 'error', text: error?.message || 'Failed to delete account.' });
      }
    } catch (err: any) {
      setFeedbackMsg({ type: 'error', text: err.message || 'Error deleting account.' });
    } finally {
      setIsDeleting(false);
    }
  };

  const handleRoleChange = async (user: UserProfileItem, newRole: 'student' | 'educator') => {
    setActionLoadingId(user.id);
    try {
      const { success } = await updateUserRole(user.id, user.email, newRole);
      if (success) {
        setProfiles(prev => prev.map(p => {
          if (p.id === user.id || p.email.toLowerCase() === user.email.toLowerCase()) {
            return { ...p, role: newRole };
          }
          return p;
        }));
      }
    } finally {
      setActionLoadingId(null);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-slate-900/90 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black tracking-tight text-white">Account Settings &amp; Access Center</h3>
                <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  Admin Portal
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Create new accounts, disable access, delete profiles, and manage student and educator permissions.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 p-5 bg-slate-950/40 border-b border-slate-800/80 shrink-0">
          <div className="bg-slate-800/50 border border-slate-800 rounded-2xl p-3 flex flex-col">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Accounts</span>
            <span className="text-2xl font-black text-white mt-1">{metrics.total}</span>
          </div>
          <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-2xl p-3 flex flex-col">
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Active
            </span>
            <span className="text-2xl font-black text-emerald-400 mt-1">{metrics.active}</span>
          </div>
          <div className="bg-rose-950/30 border border-rose-500/30 rounded-2xl p-3 flex flex-col">
            <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1">
              <UserX className="w-3 h-3" /> Disabled
            </span>
            <span className="text-2xl font-black text-rose-400 mt-1">{metrics.disabled}</span>
          </div>
          <div className="bg-purple-950/30 border border-purple-500/30 rounded-2xl p-3 flex flex-col">
            <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1">
              <GraduationCap className="w-3 h-3" /> Educators
            </span>
            <span className="text-2xl font-black text-purple-300 mt-1">{metrics.educators}</span>
          </div>
          <div className="bg-blue-950/30 border border-blue-500/30 rounded-2xl p-3 flex flex-col col-span-2 sm:col-span-1">
            <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1">
              <UserIcon className="w-3 h-3" /> Students
            </span>
            <span className="text-2xl font-black text-blue-300 mt-1">{metrics.students}</span>
          </div>
        </div>

        {/* Feedback Alert */}
        {feedbackMsg && (
          <div className={`mx-6 mt-4 p-3.5 rounded-2xl text-xs font-semibold flex items-center justify-between border ${
            feedbackMsg.type === 'success'
              ? 'bg-emerald-950/50 border-emerald-500/40 text-emerald-300'
              : 'bg-rose-950/50 border-rose-500/40 text-rose-300'
          }`}>
            <div className="flex items-center gap-2">
              {feedbackMsg.type === 'success' ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <AlertTriangle className="w-4 h-4 text-rose-400" />}
              <span>{feedbackMsg.text}</span>
            </div>
            <button 
              onClick={() => setFeedbackMsg(null)}
              className="text-slate-400 hover:text-white cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}

        {/* Main Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">

          {/* Action Toolbar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Search accounts by name, email, or specialty..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-950/70 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              <button
                onClick={() => setStatusFilter('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                  statusFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                All ({profiles.length})
              </button>
              <button
                onClick={() => setStatusFilter('active')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                  statusFilter === 'active' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                Active ({metrics.active})
              </button>
              <button
                onClick={() => setStatusFilter('disabled')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                  statusFilter === 'disabled' ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                Disabled ({metrics.disabled})
              </button>
              <button
                onClick={() => setStatusFilter('educator')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                  statusFilter === 'educator' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                Educators ({metrics.educators})
              </button>
              <button
                onClick={() => setStatusFilter('student')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                  statusFilter === 'student' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                Students ({metrics.students})
              </button>

              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="ml-2 px-3.5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-black rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1.5 shrink-0"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>{showAddForm ? 'Hide Form' : '+ Add Account'}</span>
              </button>

              <button
                onClick={loadProfiles}
                disabled={isLoading}
                title="Refresh Accounts"
                className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer shrink-0 disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>

          {/* Add Account Panel Form */}
          {showAddForm && (
            <div className="bg-slate-950/80 border border-blue-500/30 rounded-3xl p-5 sm:p-6 shadow-xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <UserPlus className="w-5 h-5 text-blue-400" />
                  <h4 className="font-black text-sm text-white uppercase tracking-wider">Create New User Account</h4>
                </div>
                <span className="text-[11px] text-slate-400">Account will be immediately active for login</span>
              </div>

              <form onSubmit={handleCreateAccount} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Full Name</label>
                  <div className="relative">
                    <UserIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="text"
                      placeholder="e.g. Maria Santos"
                      value={newFullName}
                      onChange={e => setNewFullName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="email"
                      required
                      placeholder="name@epicademy.ph"
                      value={newEmail}
                      onChange={e => setNewEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Password *</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="password"
                      required
                      placeholder="Min. 6 characters"
                      value={newPassword}
                      onChange={e => setNewPassword(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Account Role</label>
                  <select
                    value={newRole}
                    onChange={e => setNewRole(e.target.value as 'student' | 'educator')}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="student">🎓 Student (Learner)</option>
                    <option value="educator">👨‍🏫 Educator / Faculty Member</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-300 mb-1">Specialty or Department (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Full-Stack Web, TESDA CSS NC II, Keyboard Masterclass, Church Worship"
                    value={newSpecialty}
                    onChange={e => setNewSpecialty(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div className="sm:col-span-2 flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-black rounded-xl shadow-lg transition-all cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Creating Account...</span>
                      </>
                    ) : (
                      <>
                        <UserPlus className="w-3.5 h-3.5" />
                        <span>Confirm &amp; Register Account</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Account Table / Cards */}
          <div className="bg-slate-950/60 border border-slate-800 rounded-3xl overflow-hidden">
            {isLoading ? (
              <div className="p-12 text-center text-slate-400 space-y-3">
                <RefreshCw className="w-8 h-8 mx-auto animate-spin text-blue-500" />
                <p className="font-bold text-sm text-white">Loading registered accounts...</p>
              </div>
            ) : filteredProfiles.length === 0 ? (
              <div className="p-12 text-center text-slate-400 space-y-2">
                <UserX className="w-8 h-8 mx-auto text-slate-600" />
                <p className="font-bold text-white text-sm">No accounts found.</p>
                <p className="text-xs text-slate-500">
                  {searchQuery ? 'Try adjusting your search filter.' : 'Click "+ Add Account" to create your first managed user.'}
                </p>
              </div>
            ) : (
              <div className="divide-y divide-slate-800/80">
                {filteredProfiles.map(user => {
                  const isCurrent = currentUserEmail?.toLowerCase() === user.email.toLowerCase();
                  const isBusy = actionLoadingId === user.id;

                  return (
                    <div 
                      key={user.id || user.email}
                      className={`p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors ${
                        user.isDisabled ? 'bg-rose-950/10 opacity-75' : 'hover:bg-slate-900/50'
                      }`}
                    >
                      {/* Left: Avatar & User Info */}
                      <div className="flex items-center gap-3.5">
                        <div className="relative">
                          <img
                            src={user.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'}
                            alt={user.fullName}
                            className={`w-11 h-11 rounded-2xl object-cover border-2 ${
                              user.isDisabled ? 'border-rose-500/50 grayscale' : 'border-slate-700'
                            }`}
                          />
                          <span className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-slate-900 flex items-center justify-center text-[8px] ${
                            user.isDisabled ? 'bg-rose-500 text-white' : 'bg-emerald-500 text-white'
                          }`}>
                            {user.isDisabled ? '✕' : '✓'}
                          </span>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-sm text-white">{user.fullName}</span>
                            
                            {/* Role Badge with Dropdown */}
                            <div className="relative inline-block">
                              <select
                                value={user.role}
                                onChange={e => handleRoleChange(user, e.target.value as 'student' | 'educator')}
                                disabled={isBusy}
                                className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full border cursor-pointer focus:outline-none appearance-none pr-4 ${
                                  user.role === 'educator'
                                    ? 'bg-purple-950 text-purple-300 border-purple-500/30'
                                    : 'bg-blue-950 text-blue-300 border-blue-500/30'
                                }`}
                              >
                                <option value="student">Student</option>
                                <option value="educator">Educator</option>
                              </select>
                              <ChevronDown className="w-2.5 h-2.5 absolute right-1 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                            </div>

                            {/* Status Pill */}
                            <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full border ${
                              user.isDisabled
                                ? 'bg-rose-950 text-rose-300 border-rose-500/40'
                                : 'bg-emerald-950 text-emerald-300 border-emerald-500/40'
                            }`}>
                              {user.isDisabled ? 'Disabled' : 'Active'}
                            </span>

                            {isCurrent && (
                              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                                You (Current)
                              </span>
                            )}
                          </div>

                          <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1.5 flex-wrap">
                            <span className="text-slate-300 font-mono">{user.email}</span>
                            {user.specialty && (
                              <>
                                <span className="text-slate-600">•</span>
                                <span className="text-slate-400">{user.specialty}</span>
                              </>
                            )}
                            {user.createdAt && (
                              <>
                                <span className="text-slate-600">•</span>
                                <span className="text-slate-500">Joined {new Date(user.createdAt).toLocaleDateString()}</span>
                              </>
                            )}
                          </p>
                        </div>
                      </div>

                      {/* Right: Actions */}
                      <div className="flex items-center gap-2 self-end sm:self-center">
                        {/* Toggle Disable / Enable Button */}
                        <button
                          onClick={() => handleToggleStatus(user)}
                          disabled={isBusy}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${
                            user.isDisabled
                              ? 'bg-emerald-950/60 hover:bg-emerald-900 border-emerald-500/40 text-emerald-300'
                              : 'bg-rose-950/60 hover:bg-rose-900 border-rose-500/40 text-rose-300'
                          }`}
                          title={user.isDisabled ? 'Enable account login' : 'Disable account login'}
                        >
                          {user.isDisabled ? (
                            <>
                              <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Enable</span>
                            </>
                          ) : (
                            <>
                              <UserX className="w-3.5 h-3.5 text-rose-400" />
                              <span>Disable</span>
                            </>
                          )}
                        </button>

                        {/* Delete Account Button */}
                        <button
                          onClick={() => setDeleteTarget(user)}
                          disabled={isBusy}
                          className="p-2 text-slate-400 hover:text-rose-400 hover:bg-rose-950/40 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-rose-500/30"
                          title="Delete Account Permanently"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Epicademy Multi-Tenant User Management Protocol</span>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

        {/* Delete Confirmation Modal Overlay */}
        {deleteTarget && (
          <div className="absolute inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-6 animate-in fade-in duration-150">
            <div className="bg-slate-900 border border-rose-500/40 rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div className="text-center space-y-1">
                <h4 className="text-base font-black text-white">Delete User Account?</h4>
                <p className="text-xs text-slate-400">
                  Are you sure you want to permanently delete <span className="font-mono text-white font-bold">{deleteTarget.email}</span>?
                </p>
                <p className="text-[11px] text-rose-400 font-semibold pt-1">
                  This action cannot be undone. All profile settings and student progress references will be removed.
                </p>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setDeleteTarget(null)}
                  disabled={isDeleting}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleDeleteUser}
                  disabled={isDeleting}
                  className="px-5 py-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-black rounded-xl shadow-lg transition-all cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
                >
                  {isDeleting ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Deleting...</span>
                    </>
                  ) : (
                    <>
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Permanently Delete</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
