import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  GraduationCap, 
  Sparkles, 
  Users, 
  BookOpen, 
  Layers,
  Plus,
  User,
  LogOut,
  Shield
} from 'lucide-react';
import { signOutUser } from '../../lib/supabaseClient';
import type { UserRole } from '../../types';

interface NavbarProps {
  currentPerspective: 'educator' | 'student';
  onTogglePerspective: (perspective: 'educator' | 'student') => void;
  onOpenAuth: (mode: 'signup' | 'signin') => void;
  onOpenCourseBuilder: () => void;
  onOpenTeacherSetup: () => void;
  onOpenApplyTenant?: () => void;
  onOpenCredentials?: () => void;
  onOpenDossier?: () => void;
  onOpenTuition?: () => void;
  onOpenAccountSettings?: () => void;
  currentUser?: { email?: string; role?: string } | null;
  onSignOut?: () => void;
  onSwitchRole?: (role: UserRole) => void;
}

export const Navbar = ({
  currentPerspective,
  onTogglePerspective,
  onOpenAuth,
  onOpenCourseBuilder,
  onOpenTeacherSetup,
  onOpenApplyTenant,
  onOpenCredentials,
  onOpenDossier,
  onOpenTuition,
  onOpenAccountSettings,
  currentUser,
  onSignOut,
  onSwitchRole,
}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tracksDropdownOpen, setTracksDropdownOpen] = useState(false);
  const [roleSwitcherOpen, setRoleSwitcherOpen] = useState(false);

  const role = (currentUser?.role || '').toLowerCase();
  const isAdmin = role === 'admin';
  const isEducator = role === 'educator';
  const isContributor = role === 'contributor';
  const isStudent = role === 'student';

  const canBuildCourse = !currentUser || isAdmin || isEducator || isContributor;
  const canAccessFaculty = isAdmin || isEducator;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    await signOutUser();
    if (onSignOut) onSignOut();
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-200 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3' : 'bg-white py-4 border-b border-slate-100'
    }`}>
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 flex items-center gap-1.5">
                EPICADEMY
                <span className="text-xs uppercase px-1.5 py-0.5 rounded font-bold bg-blue-100 text-blue-700 tracking-normal">
                  ACADEMY
                </span>
              </span>
              <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase -mt-1">
                Zero to Hero Tech &amp; Vocational Hub
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            
            {/* Tracks Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setTracksDropdownOpen(true)}
              onMouseLeave={() => setTracksDropdownOpen(false)}
            >
              <button 
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-lg transition-colors flex items-center gap-1"
                onClick={() => setTracksDropdownOpen(!tracksDropdownOpen)}
              >
                <span>Courses &amp; Roadmap</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${tracksDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {tracksDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 mt-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
                    Learning Pathways
                  </div>
                  <a href="#tracks" onClick={() => setTracksDropdownOpen(false)} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-blue-50/60 transition-colors group">
                    <div className="p-2 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">STEM &amp; Artificial Intelligence</p>
                      <p className="text-[11px] text-slate-500">Full-stack, LLMs, AI Prompting &amp; Cloud</p>
                    </div>
                  </a>
                  <a href="#tracks" onClick={() => setTracksDropdownOpen(false)} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-emerald-50/60 transition-colors group">
                    <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">Business &amp; Freelancing</p>
                      <p className="text-[11px] text-slate-500">Online clients, funnels, and career growth</p>
                    </div>
                  </a>
                  <a href="#tracks" onClick={() => setTracksDropdownOpen(false)} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50/60 transition-colors group">
                    <div className="p-2 rounded-lg bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">UI/UX Design &amp; Malasakit</p>
                      <p className="text-[11px] text-slate-500">MAHABI+ Design systems and mobile</p>
                    </div>
                  </a>
                  <a href="#tracks" onClick={() => setTracksDropdownOpen(false)} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-amber-50/60 transition-colors group">
                    <div className="p-2 rounded-lg bg-amber-100 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">Leadership &amp; Mindset</p>
                      <p className="text-[11px] text-slate-500">Servant leadership and dev character</p>
                    </div>
                  </a>
                </div>
              )}
            </div>

            <a href="#community-developers" className="px-2.5 py-2 text-xs xl:text-sm font-bold text-slate-700 hover:text-blue-600 rounded-lg transition-colors flex items-center gap-1.5 shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Communities</span>
            </a>

            <a href="#community" className="px-2.5 py-2 text-xs xl:text-sm font-medium text-slate-700 hover:text-blue-600 rounded-lg transition-colors shrink-0">
              Community Hub
            </a>

            {onOpenTuition && (
              <button
                onClick={onOpenTuition}
                className="hidden xl:flex px-2.5 py-2 text-xs xl:text-sm font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors items-center gap-1 cursor-pointer shrink-0"
              >
                <span>💳 Tuition &amp; Plans</span>
              </button>
            )}

            {onOpenCredentials && (
              <button
                onClick={onOpenCredentials}
                className="hidden 2xl:flex px-2.5 py-2 text-xs xl:text-sm font-bold text-amber-700 hover:text-amber-800 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors items-center gap-1 cursor-pointer shrink-0"
              >
                <span>🎓 Credentials</span>
              </button>
            )}

            {onOpenDossier && (
              <button
                onClick={onOpenDossier}
                className="hidden 2xl:flex px-2.5 py-2 text-xs xl:text-sm font-bold text-indigo-700 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors items-center gap-1 cursor-pointer shrink-0"
              >
                <span>💼 Dossier</span>
              </button>
            )}

            <a href="#pricing" className="hidden xl:inline-block px-2.5 py-2 text-xs xl:text-sm font-medium text-slate-700 hover:text-blue-600 rounded-lg transition-colors shrink-0">
              Pricing
            </a>
          </nav>

          {/* Right Action Area */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            
            {/* Perspective Switcher */}
            <div className="bg-slate-100 p-1 rounded-xl flex items-center text-xs font-medium border border-slate-200 shrink-0">
              <button
                onClick={() => onTogglePerspective('educator')}
                className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                  currentPerspective === 'educator'
                    ? 'bg-white text-blue-600 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>👨‍🏫 Teachers</span>
              </button>
              <button
                onClick={() => onTogglePerspective('student')}
                className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                  currentPerspective === 'student'
                    ? 'bg-white text-blue-600 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>🎓 Students</span>
              </button>
            </div>

            {/* Setup Teachers Button (Admins & Educators only) */}
            {canAccessFaculty && (
              <button
                onClick={onOpenTeacherSetup}
                className="px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold rounded-xl border border-blue-200 transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
                title="Faculty &amp; Mentorship Portal"
              >
                <User className="w-3.5 h-3.5 text-blue-600" />
                <span>Faculty</span>
              </button>
            )}

            {/* Account Settings Button - STRICTLY ADMIN ONLY */}
            {isAdmin && onOpenAccountSettings && (
              <button
                onClick={onOpenAccountSettings}
                className="px-3.5 py-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xs font-black rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer hover:scale-105 shrink-0 border border-white/20 animate-in fade-in"
                title="Administrator Security &amp; User Accounts"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>⚙️ Accounts</span>
              </button>
            )}

            {/* Course Studio Button (Admin, Educator, Contributor only) */}
            {canBuildCourse && (
              <button
                onClick={onOpenCourseBuilder}
                className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ Create Course</span>
              </button>
            )}

            {/* Become Tenant Button */}
            {onOpenApplyTenant && (
              <button
                onClick={onOpenApplyTenant}
                className="px-3 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold rounded-xl border border-indigo-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Share Knowledge as a Mentor"
              >
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span>+ Become a Mentor</span>
              </button>
            )}

            {/* User Session or Auth Buttons */}
            {currentUser ? (
              <div className="flex items-center gap-2 pl-2 border-l border-slate-200 relative">
                {/* User Pill with Role Badge */}
                <div className="flex items-center gap-1 bg-slate-100/90 border border-slate-200/90 pl-2 pr-1.5 py-1 rounded-xl">
                  <button
                    onClick={isAdmin && onOpenAccountSettings ? onOpenAccountSettings : () => setRoleSwitcherOpen(!roleSwitcherOpen)}
                    className="flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-blue-600 transition-colors cursor-pointer"
                    title={isAdmin ? "Open Admin Account Settings" : "Switch Account Role"}
                  >
                    <User className="w-3.5 h-3.5 text-blue-600" />
                    <span className="max-w-[110px] truncate">{currentUser.email?.split('@')[0]}</span>
                  </button>

                  {/* Colored Role Pill */}
                  <span className={`px-2 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1 border ${
                    isAdmin
                      ? 'bg-indigo-950 text-indigo-200 border-indigo-500/40'
                      : isEducator
                      ? 'bg-purple-950 text-purple-200 border-purple-500/40'
                      : isContributor
                      ? 'bg-amber-950 text-amber-200 border-amber-500/40'
                      : 'bg-blue-950 text-blue-200 border-blue-500/40'
                  }`}>
                    {isAdmin && '🛡️ Admin'}
                    {isEducator && '👨‍🏫 Educator'}
                    {isContributor && '✍️ Contributor'}
                    {isStudent && '🎓 Student'}
                    {!isAdmin && !isEducator && !isContributor && !isStudent && (currentUser.role || 'User')}
                  </span>

                  {/* Switch Role Dropdown Trigger */}
                  {onSwitchRole && (
                    <button
                      onClick={() => setRoleSwitcherOpen(!roleSwitcherOpen)}
                      className="p-1 hover:bg-slate-200 text-slate-500 hover:text-slate-900 rounded-lg transition-colors cursor-pointer ml-0.5"
                      title="Quick Switch Account Role"
                    >
                      <ChevronDown className="w-3 h-3" />
                    </button>
                  )}
                </div>

                {/* Role Switcher Menu */}
                {roleSwitcherOpen && onSwitchRole && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 text-white">
                    <div className="px-3 py-1.5 text-[10px] uppercase font-black tracking-wider text-slate-400 border-b border-slate-800">
                      ⚡ Quick Test Roles
                    </div>
                    <div className="space-y-1 mt-1">
                      <button
                        onClick={() => {
                          onSwitchRole('admin');
                          setRoleSwitcherOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between transition-colors cursor-pointer ${
                          isAdmin ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 text-slate-300'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>🛡️</span>
                          <span>Admin (Full Control)</span>
                        </span>
                        {isAdmin && <span>✓</span>}
                      </button>
                      <button
                        onClick={() => {
                          onSwitchRole('educator');
                          setRoleSwitcherOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between transition-colors cursor-pointer ${
                          isEducator ? 'bg-purple-600 text-white' : 'hover:bg-slate-800 text-slate-300'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>👨‍🏫</span>
                          <span>Educator</span>
                        </span>
                        {isEducator && <span>✓</span>}
                      </button>
                      <button
                        onClick={() => {
                          onSwitchRole('contributor');
                          setRoleSwitcherOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between transition-colors cursor-pointer ${
                          isContributor ? 'bg-amber-600 text-white' : 'hover:bg-slate-800 text-slate-300'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>✍️</span>
                          <span>Contributor</span>
                        </span>
                        {isContributor && <span>✓</span>}
                      </button>
                      <button
                        onClick={() => {
                          onSwitchRole('student');
                          setRoleSwitcherOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between transition-colors cursor-pointer ${
                          isStudent ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 text-slate-300'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>🎓</span>
                          <span>Student</span>
                        </span>
                        {isStudent && <span>✓</span>}
                      </button>
                    </div>
                  </div>
                )}

                <button
                  onClick={handleLogout}
                  className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg transition-colors cursor-pointer"
                  title="Sign Out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => onOpenAuth('signin')}
                  className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Sign In
                </button>
                <button
                  onClick={() => onOpenAuth('signup')}
                  className="px-4 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-500/20 transition-all cursor-pointer hover:scale-102"
                >
                  Get Started Free
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu & Quick Actions */}
          <div className="flex items-center gap-1.5 lg:hidden">
            {/* Mobile Accounts button - STRICTLY ADMIN ONLY */}
            {isAdmin && onOpenAccountSettings && (
              <button
                onClick={onOpenAccountSettings}
                className="px-2.5 py-1.5 text-xs font-black text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg flex items-center gap-1 shadow-sm cursor-pointer border border-white/20 shrink-0"
                title="Admin Account Settings"
              >
                <Shield className="w-3 h-3" />
                <span>⚙️ Accounts</span>
              </button>
            )}
            {canBuildCourse && (
              <button
                onClick={onOpenCourseBuilder}
                className="px-2.5 py-1.5 text-xs font-bold text-white bg-emerald-600 rounded-lg flex items-center gap-1 shrink-0"
              >
                <Plus className="w-3 h-3" /> Course
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="bg-slate-100 p-1 rounded-xl flex items-center justify-center text-xs font-medium border border-slate-200">
            <button
              onClick={() => onTogglePerspective('educator')}
              className={`flex-1 py-1.5 rounded-lg text-center ${
                currentPerspective === 'educator' ? 'bg-white text-blue-600 shadow-sm font-bold' : 'text-slate-600'
              }`}
            >
              👨‍🏫 For Teachers
            </button>
            <button
              onClick={() => onTogglePerspective('student')}
              className={`flex-1 py-1.5 rounded-lg text-center ${
                currentPerspective === 'student' ? 'bg-white text-blue-600 shadow-sm font-bold' : 'text-slate-600'
              }`}
            >
              🎓 For Students
            </button>
          </div>

          <div className="space-y-1">
            {canAccessFaculty && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTeacherSetup();
                }}
                className="w-full text-left px-3 py-2 text-base font-bold text-blue-700 hover:bg-blue-50 rounded-lg flex items-center gap-2 cursor-pointer"
              >
                <User className="w-4 h-4" />
                <span>👨‍🏫 Faculty Accounts</span>
              </button>
            )}
            {/* Mobile Drawer Account Settings - STRICTLY ADMIN ONLY */}
            {isAdmin && onOpenAccountSettings && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAccountSettings();
                }}
                className="w-full text-left px-3 py-2 text-base font-bold text-purple-700 hover:bg-purple-50 rounded-lg flex items-center gap-2 cursor-pointer"
              >
                <Shield className="w-4 h-4 text-purple-600" />
                <span>⚙️ Account Settings (Admin)</span>
              </button>
            )}
            {canBuildCourse && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCourseBuilder();
                }}
                className="w-full text-left px-3 py-2 text-base font-bold text-emerald-600 hover:bg-emerald-50 rounded-lg flex items-center gap-2 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>+ Build New Course</span>
              </button>
            )}
            {onOpenTuition && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTuition();
                }}
                className="w-full text-left px-3 py-2 text-base font-bold text-emerald-700 hover:bg-emerald-50 rounded-lg flex items-center gap-2 cursor-pointer"
              >
                <span>💳 Tuition &amp; Plans</span>
              </button>
            )}
            <a 
              href="#tracks" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-700 hover:bg-blue-50 rounded-lg"
            >
              Teaching Tracks
            </a>
            <a 
              href="#community-developers" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-bold text-slate-700 hover:bg-blue-50 rounded-lg flex items-center justify-between"
            >
              <span>Developer Tenants</span>
              <span className="text-[10px] uppercase font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">New</span>
            </a>
            <a 
              href="#community" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-700 hover:bg-blue-50 rounded-lg"
            >
              Community Hub
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-700 hover:bg-blue-50 rounded-lg"
            >
              Pricing
            </a>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            {currentUser ? (
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 truncate">
                    <User className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-xs font-bold text-slate-800 truncate">{currentUser.email}</span>
                  </div>
                  <span className={`text-[10px] uppercase font-black px-2 py-0.5 rounded-full border ${
                    isAdmin
                      ? 'bg-indigo-950 text-indigo-200 border-indigo-500/40'
                      : isEducator
                      ? 'bg-purple-950 text-purple-200 border-purple-500/40'
                      : isContributor
                      ? 'bg-amber-950 text-amber-200 border-amber-500/40'
                      : 'bg-blue-950 text-blue-200 border-blue-500/40'
                  }`}>
                    {isAdmin ? '🛡️ Admin' : isEducator ? '👨‍🏫 Educator' : isContributor ? '✍️ Contributor' : '🎓 Student'}
                  </span>
                </div>

                {/* Mobile Quick Role Switcher */}
                {onSwitchRole && (
                  <div className="pt-1.5 border-t border-slate-200 grid grid-cols-2 gap-1 text-[11px] font-bold">
                    <button
                      onClick={() => {
                        onSwitchRole('admin');
                        setMobileMenuOpen(false);
                      }}
                      className="px-2 py-1 rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 text-left cursor-pointer"
                    >
                      🛡️ Test Admin
                    </button>
                    <button
                      onClick={() => {
                        onSwitchRole('educator');
                        setMobileMenuOpen(false);
                      }}
                      className="px-2 py-1 rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 text-left cursor-pointer"
                    >
                      👨‍🏫 Test Educator
                    </button>
                    <button
                      onClick={() => {
                        onSwitchRole('contributor');
                        setMobileMenuOpen(false);
                      }}
                      className="px-2 py-1 rounded-lg bg-amber-50 text-amber-700 hover:bg-amber-100 text-left cursor-pointer"
                    >
                      ✍️ Test Contributor
                    </button>
                    <button
                      onClick={() => {
                        onSwitchRole('student');
                        setMobileMenuOpen(false);
                      }}
                      className="px-2 py-1 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 text-left cursor-pointer"
                    >
                      🎓 Test Student
                    </button>
                  </div>
                )}

                <div className="pt-1 flex justify-end">
                  <button
                    onClick={handleLogout}
                    className="text-xs font-bold text-red-600 hover:text-red-700 cursor-pointer"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth('signin');
                  }}
                  className="w-full py-2.5 text-center text-sm font-semibold text-slate-700 border border-slate-200 rounded-xl"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuth('signup');
                  }}
                  className="w-full py-2.5 text-center text-sm font-bold text-white bg-blue-600 rounded-xl shadow-md"
                >
                  Get Started Free
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
