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
  ChevronDown,
  Sliders,
  Eye
} from 'lucide-react';
import { 
  fetchAllUserProfiles, 
  createUserAccount, 
  deleteUserAccount, 
  toggleUserAccountStatus, 
  updateUserRole,
  type UserProfileItem 
} from '../../lib/supabaseClient';
import type { UserRole } from '../../types';

interface AccountSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUserEmail?: string | null;
  currentUserRole?: string | null;
  onSwitchToAdmin?: () => void;
}

export const AccountSettingsModal: React.FC<AccountSettingsModalProps> = ({
  isOpen,
  onClose,
  currentUserEmail,
  currentUserRole,
  onSwitchToAdmin,
}) => {
  const [profiles, setProfiles] = useState<UserProfileItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'admin' | 'educator' | 'contributor' | 'student' | 'guest' | 'active' | 'disabled'>('all');
  const [activeView, setActiveView] = useState<'accounts' | 'matrix'>('accounts');
  
  // Add Account Form State
  const [showAddForm, setShowAddForm] = useState<boolean>(false);
  const [newFullName, setNewFullName] = useState<string>('');
  const [newEmail, setNewEmail] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [newRole, setNewRole] = useState<UserRole>('student');
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
    const admins = profiles.filter(p => p.role === 'admin').length;
    const educators = profiles.filter(p => p.role === 'educator').length;
    const contributors = profiles.filter(p => p.role === 'contributor').length;
    const students = profiles.filter(p => p.role === 'student').length;
    const guests = profiles.filter(p => p.role === 'guest').length;
    return { total, active, disabled, admins, educators, contributors, students, guests };
  }, [profiles]);

  // Helper for role permissions display tags
  const getRolePermissionPills = (role: UserRole) => {
    switch (role) {
      case 'admin':
        return [
          { text: '🛡️ Full Platform Bypass', color: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30' },
          { text: '👥 User & Role RBAC', color: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30' },
          { text: '🔨 Course Studio & Creator', color: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30' },
          { text: '👨‍🏫 Faculty Portal & Gradebook', color: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30' },
        ];
      case 'educator':
        return [
          { text: '👨‍🏫 Teacher Permissions', color: 'bg-purple-500/15 text-purple-300 border-purple-500/30' },
          { text: '🔨 Create & Edit Courses', color: 'bg-purple-500/15 text-purple-300 border-purple-500/30' },
          { text: '📊 Faculty Gradebook & Roster', color: 'bg-purple-500/15 text-purple-300 border-purple-500/30' },
          { text: '📚 Access All Courses', color: 'bg-purple-500/15 text-purple-300 border-purple-500/30' },
        ];
      case 'contributor':
        return [
          { text: '✍️ Course Author Features', color: 'bg-amber-500/15 text-amber-300 border-amber-500/30' },
          { text: '🔨 Create & Draft Courses', color: 'bg-amber-500/15 text-amber-300 border-amber-500/30' },
          { text: '📝 Lesson & Activity Suite', color: 'bg-amber-500/15 text-amber-300 border-amber-500/30' },
          { text: '🚫 No Faculty/Admin Access', color: 'bg-slate-800 text-slate-400 border-slate-700' },
        ];
      case 'student':
        return [
          { text: '🎓 Student Learner', color: 'bg-blue-500/15 text-blue-300 border-blue-500/30' },
          { text: '📚 Course Access Only', color: 'bg-blue-500/15 text-blue-300 border-blue-500/30' },
          { text: '💻 Interactive Quizzes & Labs', color: 'bg-blue-500/15 text-blue-300 border-blue-500/30' },
          { text: '🚫 No Course Creation', color: 'bg-rose-500/10 text-rose-300/80 border-rose-500/20' },
        ];
      case 'guest':
        return [
          { text: '👀 View Only', color: 'bg-slate-800 text-slate-300 border-slate-600' },
          { text: '🗺️ Curriculum Preview Only', color: 'bg-slate-800 text-slate-300 border-slate-600' },
          { text: '🚫 No Course Access', color: 'bg-rose-500/15 text-rose-300 border-rose-500/30' },
          { text: '🚫 No Course Creation', color: 'bg-rose-500/15 text-rose-300 border-rose-500/30' },
        ];
      default:
        return [];
    }
  };

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
      if (statusFilter === 'admin') return p.role === 'admin';
      if (statusFilter === 'educator') return p.role === 'educator';
      if (statusFilter === 'contributor') return p.role === 'contributor';
      if (statusFilter === 'student') return p.role === 'student';
      if (statusFilter === 'guest') return p.role === 'guest';
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

  const handleRoleChange = async (user: UserProfileItem, newRole: UserRole) => {
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

  const isAdmin = currentUserRole === 'admin';

  // SECURITY GUARD: Only Admin can access Account Settings
  if (!isAdmin) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
        <div className="relative w-full max-w-md bg-slate-900 border border-rose-500/40 rounded-3xl shadow-2xl p-6 sm:p-8 text-center space-y-5 text-white">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-16 h-16 rounded-3xl bg-rose-500/20 border border-rose-500/40 text-rose-400 flex items-center justify-center mx-auto shadow-lg shadow-rose-500/10">
            <Lock className="w-8 h-8" />
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-widest font-black text-rose-400 bg-rose-950/80 border border-rose-500/30 px-3 py-1 rounded-full">
              Access Restricted
            </span>
            <h3 className="text-xl font-black text-white mt-3">Administrator Privileges Required</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              Only platform administrators are authorized to access the Account Settings and Security Center.
            </p>
            <div className="mt-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs text-left space-y-1">
              <div className="text-slate-500 text-[11px] font-bold uppercase">Current Session:</div>
              <div className="text-slate-200 font-mono font-bold truncate">
                {currentUserEmail || 'Anonymous Guest'}
              </div>
              <div className="text-amber-400 text-xs font-semibold">
                Role: <span className="uppercase font-bold">{currentUserRole || 'Guest'}</span> (Requires: ADMIN)
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
            {onSwitchToAdmin && (
              <button
                type="button"
                onClick={() => {
                  onSwitchToAdmin();
                  loadProfiles();
                }}
                className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xs font-black rounded-xl shadow-lg cursor-pointer transition-all flex items-center justify-center gap-2"
              >
                <Shield className="w-4 h-4" />
                <span>Switch to Admin Account</span>
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-xl cursor-pointer transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

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

        {/* Navigation Tabs Bar */}
        <div className="flex items-center gap-2 px-6 pt-3 pb-2 border-b border-slate-800 bg-slate-900/60 shrink-0">
          <button
            onClick={() => setActiveView('accounts')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeView === 'accounts'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>Managed Accounts &amp; Role Assignment ({profiles.length})</span>
          </button>
          <button
            onClick={() => setActiveView('matrix')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeView === 'matrix'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Sliders className="w-4 h-4 text-amber-400" />
            <span>Roles &amp; Permissions Matrix</span>
            <span className="text-[10px] uppercase font-black px-1.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">
              RBAC System
            </span>
          </button>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 p-3 bg-slate-950/40 border-b border-slate-800/80 shrink-0">
          <div className="bg-slate-800/50 border border-slate-800 rounded-xl p-2 flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total</span>
            <span className="text-lg font-black text-white mt-0.5">{metrics.total}</span>
          </div>
          <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-2 flex flex-col">
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Active
            </span>
            <span className="text-lg font-black text-emerald-400 mt-0.5">{metrics.active}</span>
          </div>
          <div className="bg-rose-950/30 border border-rose-500/30 rounded-xl p-2 flex flex-col">
            <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1">
              <UserX className="w-3 h-3" /> Disabled
            </span>
            <span className="text-lg font-black text-rose-400 mt-0.5">{metrics.disabled}</span>
          </div>
          <div className="bg-indigo-950/30 border border-indigo-500/30 rounded-xl p-2 flex flex-col">
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1">
              <Shield className="w-3 h-3" /> Admins
            </span>
            <span className="text-lg font-black text-indigo-300 mt-0.5">{metrics.admins}</span>
          </div>
          <div className="bg-purple-950/30 border border-purple-500/30 rounded-xl p-2 flex flex-col">
            <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1">
              <GraduationCap className="w-3 h-3" /> Educators
            </span>
            <span className="text-lg font-black text-purple-300 mt-0.5">{metrics.educators}</span>
          </div>
          <div className="bg-amber-950/30 border border-amber-500/30 rounded-xl p-2 flex flex-col">
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Contributors
            </span>
            <span className="text-lg font-black text-amber-300 mt-0.5">{metrics.contributors}</span>
          </div>
          <div className="bg-blue-950/30 border border-blue-500/30 rounded-xl p-2 flex flex-col">
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1">
              <UserIcon className="w-3 h-3" /> Students
            </span>
            <span className="text-lg font-black text-blue-300 mt-0.5">{metrics.students}</span>
          </div>
          <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-2 flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <Eye className="w-3 h-3" /> Guests
            </span>
            <span className="text-lg font-black text-slate-300 mt-0.5">{metrics.guests}</span>
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

          {activeView === 'accounts' ? (
            <>
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
                onClick={() => setStatusFilter('admin')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                  statusFilter === 'admin' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                Admins ({metrics.admins})
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
                onClick={() => setStatusFilter('contributor')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                  statusFilter === 'contributor' ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                Contributors ({metrics.contributors})
              </button>
              <button
                onClick={() => setStatusFilter('student')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                  statusFilter === 'student' ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                Students ({metrics.students})
              </button>
              <button
                onClick={() => setStatusFilter('guest')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0 ${
                  statusFilter === 'guest' ? 'bg-slate-700 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                Guests ({metrics.guests})
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
                    onChange={e => setNewRole(e.target.value as UserRole)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white focus:outline-none focus:border-blue-500 cursor-pointer"
                  >
                    <option value="student">🎓 Student (Course Access Only)</option>
                    <option value="contributor">✍️ Contributor (Can Create Courses)</option>
                    <option value="educator">👨‍🏫 Educator (Teacher Permissions &amp; Gradebook)</option>
                    <option value="admin">🛡️ Admin (Superuser - Full RBAC)</option>
                    <option value="guest">👀 Guest (Preview / View Only)</option>
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
                                onChange={e => handleRoleChange(user, e.target.value as UserRole)}
                                disabled={isBusy}
                                className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full border cursor-pointer focus:outline-none appearance-none pr-4 ${
                                  user.role === 'admin'
                                    ? 'bg-indigo-950 text-indigo-300 border-indigo-500/40 font-black'
                                    : user.role === 'educator'
                                    ? 'bg-purple-950 text-purple-300 border-purple-500/40'
                                    : user.role === 'contributor'
                                    ? 'bg-amber-950 text-amber-300 border-amber-500/40'
                                    : user.role === 'student'
                                    ? 'bg-blue-950 text-blue-300 border-blue-500/40'
                                    : 'bg-slate-800 text-slate-300 border-slate-600'
                                }`}
                              >
                                <option value="admin">🛡️ Admin (Superuser)</option>
                                <option value="educator">👨‍🏫 Educator (Teacher Permissions)</option>
                                <option value="contributor">✍️ Contributor (Course Author)</option>
                                <option value="student">🎓 Student (Course Access Only)</option>
                                <option value="guest">👀 Guest (View Only)</option>
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

                          {/* Active Granted Permissions Tags */}
                          <div className="flex items-center gap-1.5 flex-wrap mt-2">
                            {getRolePermissionPills(user.role).map((pill, idx) => (
                              <span key={idx} className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${pill.color}`}>
                                {pill.text}
                              </span>
                            ))}
                          </div>
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
        </>
      ) : (
        /* Roles & Permissions Matrix View */
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Architecture Info Banner */}
          <div className="bg-gradient-to-r from-indigo-950/60 via-slate-900 to-purple-950/60 border border-indigo-500/30 rounded-3xl p-6 text-white space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shadow-lg shadow-indigo-500/10 shrink-0">
                  <Sliders className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base sm:text-lg font-black text-white">Institutional Roles &amp; Permissions Matrix</h4>
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Active Security
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Guaranteed role separation: Guests view only, Students access courses, Contributors create courses, Teachers manage faculty &amp; gradebooks, Admins govern accounts.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveView('accounts')}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-black rounded-xl shadow-lg transition-all cursor-pointer flex items-center gap-2 shrink-0"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Assign Roles to Users</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs text-slate-300">
              <div className="bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800 space-y-1">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-indigo-400" />
                  <span>Supabase Source of Truth</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Every user session pulls directly from <code className="text-indigo-300 bg-indigo-950/60 px-1 py-0.5 rounded border border-indigo-500/20">profiles.role</code>. No browser tampering can elevate permissions.
                </p>
              </div>
              <div className="bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800 space-y-1">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  <span>Zero Guest Course Creation</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Guests and students are strictly blocked from Course Studio. Course authoring requires verified Contributor, Educator, or Admin role.
                </p>
              </div>
              <div className="bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800 space-y-1">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Instant Admin RBAC Delegation</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Admins can promote or demote any registered account in real time. Changes sync instantly across all devices.
                </p>
              </div>
            </div>
          </div>

          {/* Capability Comparison Matrix Table */}
          <div className="bg-slate-950/60 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h5 className="font-black text-sm text-white">Role Permission Comparison Matrix</h5>
                <p className="text-xs text-slate-400">Strict permission boundaries enforced across all components and API layers</p>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700">
                5 Distinct Profiles
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400 uppercase tracking-wider text-[10px]">
                    <th className="py-3.5 px-4 font-bold">Platform Capability / Security Boundary</th>
                    <th className="py-3.5 px-3 font-bold text-center">👀 Guest</th>
                    <th className="py-3.5 px-3 font-bold text-center">🎓 Student</th>
                    <th className="py-3.5 px-3 font-bold text-center">✍️ Contributor</th>
                    <th className="py-3.5 px-3 font-bold text-center">👨‍🏫 Teacher</th>
                    <th className="py-3.5 px-3 font-bold text-center">🛡️ Admin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-900/30">
                    <td className="py-3.5 px-4 font-medium text-slate-300">
                      <span className="font-bold text-white block">Browse Curriculum Catalog &amp; Roadmaps</span>
                      <span className="text-[11px] text-slate-500">Public syllabus, level pathways &amp; track details</span>
                    </td>
                    <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">✓ Granted</td>
                    <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">✓ Granted</td>
                    <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">✓ Granted</td>
                    <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">✓ Granted</td>
                    <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">✓ Full Bypass</td>
                  </tr>

                  <tr className="hover:bg-slate-900/30">
                    <td className="py-3.5 px-4 font-medium text-slate-300">
                      <span className="font-bold text-white block">Access Interactive Classrooms &amp; Video Lessons</span>
                      <span className="text-[11px] text-slate-500">Video player, lecture notes &amp; modular curriculum</span>
                    </td>
                    <td className="py-3.5 px-3 text-center text-rose-400 font-semibold">✕ Blocked</td>
                    <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">✓ Granted</td>
                    <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">✓ Granted</td>
                    <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">✓ Granted</td>
                    <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">✓ Full Bypass</td>
                  </tr>

                  <tr className="hover:bg-slate-900/30">
                    <td className="py-3.5 px-4 font-medium text-slate-300">
                      <span className="font-bold text-white block">Take Modular Exams &amp; Coding Sandboxes</span>
                      <span className="text-[11px] text-slate-500">Submit assessments and run live programming tests</span>
                    </td>
                    <td className="py-3.5 px-3 text-center text-rose-400 font-semibold">✕ Blocked</td>
                    <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">✓ Granted</td>
                    <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">✓ Granted</td>
                    <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">✓ Granted</td>
                    <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">✓ Full Bypass</td>
                  </tr>

                  <tr className="hover:bg-slate-900/30">
                    <td className="py-3.5 px-4 font-medium text-slate-300">
                      <span className="font-bold text-white block">Create &amp; Draft Courses in Course Studio</span>
                      <span className="text-[11px] text-slate-500">Access builder, define modules &amp; author lessons</span>
                    </td>
                    <td className="py-3.5 px-3 text-center text-rose-400 font-semibold">✕ Blocked</td>
                    <td className="py-3.5 px-3 text-center text-rose-400 font-semibold">✕ Blocked</td>
                    <td className="py-3.5 px-3 text-center text-amber-400 font-bold">✓ Granted</td>
                    <td className="py-3.5 px-3 text-center text-purple-400 font-bold">✓ Granted</td>
                    <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">✓ Full Access</td>
                  </tr>

                  <tr className="hover:bg-slate-900/30">
                    <td className="py-3.5 px-4 font-medium text-slate-300">
                      <span className="font-bold text-white block">Curriculum Modular Suite &amp; Quiz Editor</span>
                      <span className="text-[11px] text-slate-500">Build multiple choice tests, scoring rubrics &amp; labs</span>
                    </td>
                    <td className="py-3.5 px-3 text-center text-rose-400 font-semibold">✕ Blocked</td>
                    <td className="py-3.5 px-3 text-center text-rose-400 font-semibold">✕ Blocked</td>
                    <td className="py-3.5 px-3 text-center text-amber-400 font-bold">✓ Granted</td>
                    <td className="py-3.5 px-3 text-center text-purple-400 font-bold">✓ Granted</td>
                    <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">✓ Full Access</td>
                  </tr>

                  <tr className="hover:bg-slate-900/30">
                    <td className="py-3.5 px-4 font-medium text-slate-300">
                      <span className="font-bold text-white block">Faculty Portal &amp; Teacher Setup</span>
                      <span className="text-[11px] text-slate-500">Manage institution faculty bio, departments &amp; profiles</span>
                    </td>
                    <td className="py-3.5 px-3 text-center text-rose-400 font-semibold">✕ Blocked</td>
                    <td className="py-3.5 px-3 text-center text-rose-400 font-semibold">✕ Blocked</td>
                    <td className="py-3.5 px-3 text-center text-rose-400 font-semibold">✕ Blocked</td>
                    <td className="py-3.5 px-3 text-center text-purple-400 font-bold">✓ Granted</td>
                    <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">✓ Full Access</td>
                  </tr>

                  <tr className="hover:bg-slate-900/30">
                    <td className="py-3.5 px-4 font-medium text-slate-300">
                      <span className="font-bold text-white block">Institutional Student Gradebook &amp; Cohort Roster</span>
                      <span className="text-[11px] text-slate-500">Inspect cohort marks, attendance &amp; export CSV data</span>
                    </td>
                    <td className="py-3.5 px-3 text-center text-rose-400 font-semibold">✕ Blocked</td>
                    <td className="py-3.5 px-3 text-center text-rose-400 font-semibold">✕ Blocked</td>
                    <td className="py-3.5 px-3 text-center text-rose-400 font-semibold">✕ Blocked</td>
                    <td className="py-3.5 px-3 text-center text-purple-400 font-bold">✓ Granted</td>
                    <td className="py-3.5 px-3 text-center text-emerald-400 font-bold">✓ Full Access</td>
                  </tr>

                  <tr className="hover:bg-slate-900/30">
                    <td className="py-3.5 px-4 font-medium text-slate-300">
                      <span className="font-bold text-white block">Account Settings &amp; Role Management (RBAC)</span>
                      <span className="text-[11px] text-slate-500">Assign roles, create accounts, disable &amp; delete profiles</span>
                    </td>
                    <td className="py-3.5 px-3 text-center text-rose-400 font-semibold">✕ Blocked</td>
                    <td className="py-3.5 px-3 text-center text-rose-400 font-semibold">✕ Blocked</td>
                    <td className="py-3.5 px-3 text-center text-rose-400 font-semibold">✕ Blocked</td>
                    <td className="py-3.5 px-3 text-center text-rose-400 font-semibold">✕ Blocked</td>
                    <td className="py-3.5 px-3 text-center text-indigo-400 font-black">✓ Superuser Only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 5 Distinct Role Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* 1. Guest */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-3xl p-5 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xl">👀</span>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    View Only
                  </span>
                </div>
                <div>
                  <h5 className="font-black text-sm text-white">Guest Account</h5>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Strictly view-only access. Guests can preview course catalogs, curriculum outlines, and roadmaps without an active account.
                  </p>
                </div>
                <div className="space-y-1.5 text-xs pt-1">
                  <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span>✓</span> Public catalog &amp; roadmaps
                  </div>
                  <div className="text-rose-400 font-semibold flex items-center gap-1.5">
                    <span>✕</span> Cannot create courses
                  </div>
                  <div className="text-rose-400 font-semibold flex items-center gap-1.5">
                    <span>✕</span> Cannot open classrooms or labs
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  setStatusFilter('guest');
                  setActiveView('accounts');
                }}
                className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Filter Guests ({metrics.guests})
              </button>
            </div>

            {/* 2. Student */}
            <div className="bg-slate-950/70 border border-blue-500/20 rounded-3xl p-5 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xl">🎓</span>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-950 text-blue-300 border border-blue-500/40">
                    Course Access Only
                  </span>
                </div>
                <div>
                  <h5 className="font-black text-sm text-white">Student Account</h5>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Full student learner permissions. Can enroll in courses, view video lectures, complete interactive worksheets, take modular exams, and earn certificates.
                  </p>
                </div>
                <div className="space-y-1.5 text-xs pt-1">
                  <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span>✓</span> Full classroom &amp; course access
                  </div>
                  <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span>✓</span> Interactive labs &amp; coding sandboxes
                  </div>
                  <div className="text-rose-400 font-semibold flex items-center gap-1.5">
                    <span>✕</span> Cannot create or author courses
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  setStatusFilter('student');
                  setActiveView('accounts');
                }}
                className="w-full py-2 bg-blue-900/40 hover:bg-blue-800/60 text-blue-200 border border-blue-500/30 text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Filter Students ({metrics.students})
              </button>
            </div>

            {/* 3. Contributor */}
            <div className="bg-slate-950/70 border border-amber-500/20 rounded-3xl p-5 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xl">✍️</span>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-500/40">
                    Create Course Features
                  </span>
                </div>
                <div>
                  <h5 className="font-black text-sm text-white">Contributor Account</h5>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Curriculum authoring privileges. Can launch the Course Studio / Builder, create and draft new tracks, build subject modules, and author lessons and quizzes.
                  </p>
                </div>
                <div className="space-y-1.5 text-xs pt-1">
                  <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span>✓</span> Course Studio &amp; authoring tools
                  </div>
                  <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span>✓</span> Create modules, exams &amp; exercises
                  </div>
                  <div className="text-rose-400 font-semibold flex items-center gap-1.5">
                    <span>✕</span> No Faculty Gradebook or Account Admin
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  setStatusFilter('contributor');
                  setActiveView('accounts');
                }}
                className="w-full py-2 bg-amber-900/40 hover:bg-amber-800/60 text-amber-200 border border-amber-500/30 text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Filter Contributors ({metrics.contributors})
              </button>
            </div>

            {/* 4. Teacher / Educator */}
            <div className="bg-slate-950/70 border border-purple-500/20 rounded-3xl p-5 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xl">👨‍🏫</span>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-500/40">
                    Teacher Permissions
                  </span>
                </div>
                <div>
                  <h5 className="font-black text-sm text-white">Teacher / Educator Account</h5>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Institutional academic faculty. In addition to course creation, teachers can access the Faculty Portal, Teacher Setup, and the Student Gradebook with cohort grading.
                  </p>
                </div>
                <div className="space-y-1.5 text-xs pt-1">
                  <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span>✓</span> Create courses &amp; author curricula
                  </div>
                  <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span>✓</span> Faculty Portal &amp; Teacher Setup
                  </div>
                  <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span>✓</span> Student Gradebook &amp; CSV Export
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  setStatusFilter('educator');
                  setActiveView('accounts');
                }}
                className="w-full py-2 bg-purple-900/40 hover:bg-purple-800/60 text-purple-200 border border-purple-500/30 text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Filter Teachers ({metrics.educators})
              </button>
            </div>

            {/* 5. Administrator */}
            <div className="bg-slate-950/70 border border-indigo-500/30 rounded-3xl p-5 flex flex-col justify-between space-y-4 md:col-span-2 lg:col-span-2">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🛡️</span>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-500/40">
                      Superuser &amp; Role Management
                    </span>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-bold">Superuser Authority</span>
                </div>
                <div>
                  <h5 className="font-black text-sm text-white">System Administrator</h5>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Complete platform governance. Has access to the Account Settings &amp; Security Center, can create staff accounts, instantly assign and reconfigure permissions for any registered user, enable or disable logins, and bypass course paywalls.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                  <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span>✓</span> Assign roles &amp; permissions to all accounts
                  </div>
                  <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span>✓</span> Add, disable &amp; permanently delete accounts
                  </div>
                  <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span>✓</span> Full bypass of free &amp; paid course tracks
                  </div>
                  <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span>✓</span> Live Supabase database synchronization
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  setStatusFilter('admin');
                  setActiveView('accounts');
                }}
                className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-black rounded-xl shadow-md transition-all cursor-pointer"
              >
                Filter Admins ({metrics.admins})
              </button>
            </div>
          </div>
        </div>
      )}
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
