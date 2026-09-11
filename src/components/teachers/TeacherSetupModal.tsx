import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import { 
  X, 
  UserCheck, 
  GraduationCap, 
  CheckCircle2, 
  AlertCircle, 
  Users, 
  Sparkles, 
  ShieldCheck,
  Plus
} from 'lucide-react';
import { registerTeacherAccount, fetchTeachersFromDB } from '../../lib/supabaseClient';
import type { TeacherProfile, RegisterTeacherInput } from '../../types';

interface TeacherSetupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTeacherCreated?: (teacher: TeacherProfile) => void;
}

const PRESET_AVATARS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&auto=format&fit=crop&q=80',
];

export const TeacherSetupModal = ({
  isOpen,
  onClose,
  onTeacherCreated,
}: TeacherSetupModalProps) => {
  const [activeTab, setActiveTab] = useState<'create' | 'list'>('create');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [specialty, setSpecialty] = useState('STEM & Artificial Intelligence');
  const [credentials, setCredentials] = useState('Lead Instructor & Curriculum Specialist');
  const [bio, setBio] = useState('');
  const [avatarUrl, setAvatarUrl] = useState(PRESET_AVATARS[0]);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // List of existing teachers from Supabase
  const [teachers, setTeachers] = useState<TeacherProfile[]>([]);
  const [loadingTeachers, setLoadingTeachers] = useState(false);

  useEffect(() => {
    if (isOpen) {
      loadTeachers();
    }
  }, [isOpen]);

  const loadTeachers = async () => {
    setLoadingTeachers(true);
    const { teachers: dbTeachers } = await fetchTeachersFromDB();
    if (dbTeachers) {
      setTeachers(dbTeachers);
    }
    setLoadingTeachers(false);
  };

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    const input: RegisterTeacherInput = {
      email,
      password,
      fullName,
      specialty,
      credentials,
      bio: bio || `Educator specializing in ${specialty} at Epicademy.`,
      avatarUrl,
    };

    const { user, error } = await registerTeacherAccount(input);

    if (error) {
      setErrorMessage(error.message || 'Failed to create teacher account in Supabase.');
      setIsLoading(false);
    } else if (user) {
      const newTeacher: TeacherProfile = {
        id: user.id,
        email,
        fullName,
        role: 'educator',
        specialty,
        credentials,
        bio: bio || `Educator specializing in ${specialty}.`,
        avatarUrl,
        isVerified: true,
      };

      setSuccessMessage(`🎉 Teacher account for ${fullName} (${email}) has been successfully created and verified in Supabase!`);
      setIsLoading(false);
      loadTeachers();

      if (onTeacherCreated) {
        onTeacherCreated(newTeacher);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-2xl max-h-[92vh] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col relative animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white backdrop-blur-sm">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-black flex items-center gap-2">
                Teacher & Faculty Setup
                <span className="text-xs bg-emerald-400 text-emerald-950 px-2 py-0.5 rounded-full font-bold uppercase">
                  Supabase Live
                </span>
              </h3>
              <p className="text-xs text-blue-100">
                Register certified instructors who will teach and publish courses.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Toggle */}
        <div className="flex items-center px-6 pt-4 pb-2 border-b border-slate-100 gap-2 bg-slate-50 text-xs font-bold">
          <button
            onClick={() => {
              setActiveTab('create');
              setErrorMessage(null);
            }}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'create'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Setup New Teacher Account</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('list');
              loadTeachers();
            }}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'list'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Active Instructors ({teachers.length})</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {activeTab === 'create' ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-2xl text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {successMessage && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs text-emerald-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>{successMessage}</span>
                </div>
              )}

              {/* Avatar Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-2">
                  Teacher Avatar / Profile Photo
                </label>
                <div className="flex items-center gap-3">
                  <img
                    src={avatarUrl}
                    alt="Selected avatar"
                    className="w-14 h-14 rounded-2xl object-cover ring-2 ring-blue-600 shadow-md shrink-0"
                  />
                  <div className="space-y-1.5 flex-1">
                    <span className="text-[11px] text-slate-500 font-medium block">Choose a preset or paste photo URL:</span>
                    <div className="flex items-center gap-2">
                      {PRESET_AVATARS.map((url, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setAvatarUrl(url)}
                          className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-transform cursor-pointer ${
                            avatarUrl === url ? 'border-blue-600 scale-110' : 'border-transparent opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img src={url} alt={`Preset ${idx + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5">
                <div className="sm:col-span-6">
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Teacher Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Dr. Marcus Vance"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                <div className="sm:col-span-6">
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Discipline / Specialty
                  </label>
                  <select
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer"
                  >
                    <option value="STEM & Artificial Intelligence">STEM & Artificial Intelligence</option>
                    <option value="Business & Venture Building">Business & Venture Building</option>
                    <option value="Creative Arts & Spatial UI/UX">Creative Arts & Spatial UI/UX</option>
                    <option value="Languages & Classical Humanities">Languages & Classical Humanities</option>
                    <option value="Health, Science & Neuroscience">Health, Science & Neuroscience</option>
                    <option value="General Educational Academy">General Educational Academy</option>
                  </select>
                </div>

                <div className="sm:col-span-6">
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Teacher Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="teacher@epicademy.io"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                <div className="sm:col-span-6">
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Login Password *
                  </label>
                  <input
                    type="password"
                    required
                    minLength={6}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min 6 characters"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                <div className="sm:col-span-12">
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Professional Title & Credentials
                  </label>
                  <input
                    type="text"
                    value={credentials}
                    onChange={(e) => setCredentials(e.target.value)}
                    placeholder="e.g. Ph.D. Computer Science (Stanford) • Ex-DeepMind Lead"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                <div className="sm:col-span-12">
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Instructor Bio & Teaching Philosophy
                  </label>
                  <textarea
                    rows={3}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Share what makes this instructor's teaching approach unique and memorable..."
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Saved directly to Supabase Auth & Profiles
                </span>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>{isLoading ? 'Creating in Supabase...' : 'Save & Register Teacher'}</span>
                </button>
              </div>
            </form>
          ) : (
            /* Active Teachers List */
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 pb-1 border-b border-slate-100">
                <span>Registered Faculty Members</span>
                <span className="text-emerald-600 flex items-center gap-1 font-mono">
                  <Sparkles className="w-3.5 h-3.5" /> Verified in Supabase
                </span>
              </div>

              {loadingTeachers ? (
                <div className="py-8 text-center text-xs text-slate-500">
                  Loading faculty from Supabase profiles...
                </div>
              ) : teachers.length > 0 ? (
                <div className="space-y-3">
                  {teachers.map((t) => (
                    <div
                      key={t.id}
                      className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex items-center gap-4 hover:border-blue-300 transition-colors"
                    >
                      <img
                        src={t.avatarUrl}
                        alt={t.fullName}
                        className="w-12 h-12 rounded-xl object-cover ring-2 ring-white shadow-sm shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-sm text-slate-900 truncate">{t.fullName}</h4>
                          <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">
                            Verified Teacher
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 truncate">{t.credentials}</p>
                        <p className="text-[11px] text-blue-600 font-semibold">{t.specialty}</p>
                      </div>
                      <div className="text-right text-xs text-slate-400 font-mono shrink-0">
                        {t.email}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-xs text-slate-500 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
                  No teachers registered yet. Switch to the <strong>"Setup New Teacher Account"</strong> tab above to create your first teacher!
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
