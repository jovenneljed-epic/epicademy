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
  const [exploreDropdownOpen, setExploreDropdownOpen] = useState(false);
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
    <header className={`sticky top-0 z-40 transition-all duration-200 w-full ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5 sm:py-3' : 'bg-white py-3 sm:py-4 border-b border-slate-100'
    }`}>
      <div className="w-full max-w-7xl 2xl:max-w-[1536px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Brand & Logo */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform shrink-0">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 flex items-center gap-1.5 leading-none">
                EPICADEMY
                <span className="text-[10px] uppercase px-1.5 py-0.5 rounded font-bold bg-blue-100 text-blue-700 tracking-normal">
                  ACADEMY
                </span>
              </span>
              {/* Long subtext only shown on ultra-wide screens to prevent cramming laptops */}
              <span className="hidden 2xl:block text-[10px] text-slate-500 font-semibold tracking-wider uppercase mt-0.5">
                Zero to Hero Tech &amp; Vocational Hub
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 text-xs xl:text-sm font-medium">
            
            {/* Pathways / Roadmap Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setTracksDropdownOpen(true)}
              onMouseLeave={() => setTracksDropdownOpen(false)}
            >
              <button 
                className="px-2.5 py-2 text-slate-700 hover:text-blue-600 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                onClick={() => setTracksDropdownOpen(!tracksDropdownOpen)}
              >
                <span>Courses &amp; Roadmap</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${tracksDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {tracksDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 mt-1 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
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

            {/* Communities */}
            <a href="#community-developers" className="px-2.5 py-2 font-bold text-slate-700 hover:text-blue-600 rounded-lg transition-colors flex items-center gap-1.5 shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Communities</span>
            </a>

            {/* Direct items on wide 2xl displays */}
            <div className="hidden 2xl:flex items-center space-x-1">
              <a href="#community" className="px-2.5 py-2 text-slate-700 hover:text-blue-600 rounded-lg transition-colors">
                Community Hub
              </a>

              {onOpenTuition && (
                <button
                  onClick={onOpenTuition}
                  className="px-2.5 py-2 font-bold text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors cursor-pointer"
                >
                  💳 Tuition
                </button>
              )}

              {onOpenCredentials && (
                <button
                  onClick={onOpenCredentials}
                  className="px-2.5 py-2 font-bold text-amber-700 hover:bg-amber-50 rounded-lg transition-colors cursor-pointer"
                >
                  🎓 Credentials
                </button>
              )}

              {onOpenDossier && (
                <button
                  onClick={onOpenDossier}
                  className="px-2.5 py-2 font-bold text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors cursor-pointer"
                >
                  💼 Dossier
                </button>
              )}

              <a href="#pricing" className="px-2.5 py-2 text-slate-700 hover:text-blue-600 rounded-lg transition-colors">
                Pricing
              </a>
            </div>

            {/* Explore Dropdown for Laptop / Medium screens (lg to 2xl) to prevent cramming */}
            <div 
              className="relative 2xl:hidden"
              onMouseEnter={() => setExploreDropdownOpen(true)}
              onMouseLeave={() => setExploreDropdownOpen(false)}
            >
              <button 
                onClick={() => setExploreDropdownOpen(!exploreDropdownOpen)}
                className="px-2.5 py-2 text-slate-700 hover:text-blue-600 rounded-lg transition-colors flex items-center gap-1 cursor-pointer font-medium"
              >
                <span>Explore</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${exploreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {exploreDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150 space-y-1">
                  {canAccessFaculty && (
                    <button onClick={() => { setExploreDropdownOpen(false); onOpenTeacherSetup(); }} className="w-full text-left px-3 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-50 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5">
                      <span>👨‍🏫 Faculty Portal</span>
                    </button>
                  )}
                  <a href="#community" onClick={() => setExploreDropdownOpen(false)} className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors">
                    🌐 Community Hub
                  </a>
                  {onOpenTuition && (
                    <button onClick={() => { setExploreDropdownOpen(false); onOpenTuition(); }} className="w-full text-left px-3 py-2 text-xs font-semibold text-emerald-700 hover:bg-emerald-50 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5">
                      <span>💳 Tuition &amp; Plans</span>
                    </button>
                  )}
                  {onOpenCredentials && (
                    <button onClick={() => { setExploreDropdownOpen(false); onOpenCredentials(); }} className="w-full text-left px-3 py-2 text-xs font-semibold text-amber-700 hover:bg-amber-50 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5">
                      <span>🎓 Credentials &amp; Certs</span>
                    </button>
                  )}
                  {onOpenDossier && (
                    <button onClick={() => { setExploreDropdownOpen(false); onOpenDossier(); }} className="w-full text-left px-3 py-2 text-xs font-semibold text-indigo-700 hover:bg-indigo-50 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5">
                      <span>💼 Student Dossier</span>
                    </button>
                  )}
                  {onOpenApplyTenant && (
                    <button onClick={() => { setExploreDropdownOpen(false); onOpenApplyTenant(); }} className="w-full text-left px-3 py-2 text-xs font-semibold text-purple-700 hover:bg-purple-50 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5">
                      <span>✨ Become a Mentor</span>
                    </button>
                  )}
                  <a href="#pricing" onClick={() => setExploreDropdownOpen(false)} className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors">
                    🏷️ Pricing
                  </a>
                </div>
              )}
            </div>

          </nav>

          {/* Desktop Right Action Area */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 shrink-0">
            
            {/* Perspective Switcher (Educators & Admins) */}
            {canAccessFaculty && (
              <div className="bg-slate-100 p-0.5 rounded-xl flex items-center text-[11px] xl:text-xs font-medium border border-slate-200 shrink-0">
                <button
                  onClick={() => onTogglePerspective('educator')}
                  className={`px-2 py-1 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                    currentPerspective === 'educator'
                      ? 'bg-white text-blue-600 shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Teacher Perspective"
                >
                  <span>👨‍🏫 Teachers</span>
                </button>
                <button
                  onClick={() => onTogglePerspective('student')}
                  className={`px-2 py-1 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                    currentPerspective === 'student'
                      ? 'bg-white text-blue-600 shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Student Perspective"
                >
                  <span>🎓 Students</span>
                </button>
              </div>
            )}

            {/* Faculty Portal Button (Direct on wide 2xl displays; in Explore on laptops) */}
            {canAccessFaculty && (
              <button
                onClick={onOpenTeacherSetup}
                className="hidden 2xl:flex px-2.5 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold rounded-xl border border-blue-200 transition-colors items-center gap-1 cursor-pointer shrink-0"
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
                className="px-3 py-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xs font-black rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer hover:scale-105 shrink-0 border border-white/20 animate-in fade-in"
                title="Administrator Security &amp; User Accounts"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>⚙️ Accounts</span>
              </button>
            )}

            {/* Course Studio Button (Admin, Educator, Contributor) */}
            {canBuildCourse && (
              <button
                onClick={onOpenCourseBuilder}
                className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
                title="Create New Course"
              >
                <Plus className="w-3.5 h-3.5" />
                <span className="hidden 2xl:inline">+ Create Course</span>
                <span className="2xl:hidden">+ Course</span>
              </button>
            )}

            {/* Become Mentor button on wide displays */}
            {onOpenApplyTenant && (
              <button
                onClick={onOpenApplyTenant}
                className="hidden 2xl:flex px-2.5 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold rounded-xl border border-indigo-200 transition-colors items-center gap-1 cursor-pointer shrink-0"
                title="Share Knowledge as a Mentor"
              >
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span>+ Mentor</span>
              </button>
            )}

            {/* User Session or Auth Buttons */}
            {currentUser ? (
              <div className="relative flex items-center gap-1.5 pl-1.5 border-l border-slate-200">
                {/* Backdrop overlay for closing dropdown */}
                {roleSwitcherOpen && (
                  <div 
                    className="fixed inset-0 z-40 bg-transparent" 
                    onClick={() => setRoleSwitcherOpen(false)} 
                  />
                )}

                {/* User Pill with Role Badge */}
                <div className="flex items-center gap-1 bg-slate-100/90 border border-slate-200/90 pl-2 pr-1.5 py-1 rounded-xl">
                  <button
                    onClick={isAdmin && onOpenAccountSettings ? onOpenAccountSettings : () => setRoleSwitcherOpen(!roleSwitcherOpen)}
                    className="flex items-center gap-1 text-xs font-bold text-slate-800 hover:text-blue-600 transition-colors cursor-pointer"
                    title={isAdmin ? "Open Admin Account Settings" : "Switch Account Role"}
                  >
                    <User className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span className="max-w-[80px] xl:max-w-[110px] truncate">{currentUser.email?.split('@')[0]}</span>
                  </button>

                  {/* Colored Role Pill */}
                  <span className={`px-1.5 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1 border shrink-0 ${
                    isAdmin
                      ? 'bg-indigo-950 text-indigo-200 border-indigo-500/40'
                      : isEducator
                      ? 'bg-purple-950 text-purple-200 border-purple-500/40'
                      : isContributor
                      ? 'bg-amber-950 text-amber-200 border-amber-500/40'
                      : 'bg-blue-950 text-blue-200 border-blue-500/40'
                  }`}>
                    {isAdmin && '🛡️ Admin'}
                    {isEducator && '👨‍🏫 Edu'}
                    {isContributor && '✍️ Contrib'}
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
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${roleSwitcherOpen ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>

                {/* Role Switcher Menu - Safely anchored within viewport boundaries */}
                {roleSwitcherOpen && onSwitchRole && (
                  <div className="absolute right-0 top-full mt-2 w-60 max-w-[calc(100vw-1.5rem)] bg-slate-900/98 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 text-white">
                    <div className="px-3 py-1.5 text-[10px] uppercase font-black tracking-wider text-slate-400 border-b border-slate-800 flex items-center justify-between">
                      <span>⚡ Quick Role Switcher</span>
                      <span className="text-[9px] text-blue-400 font-mono">1-CLICK</span>
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

                    {/* Direct Admin Control Center shortcut */}
                    {isAdmin && onOpenAccountSettings && (
                      <div className="pt-1.5 mt-1 border-t border-slate-800">
                        <button
                          onClick={() => {
                            setRoleSwitcherOpen(false);
                            onOpenAccountSettings();
                          }}
                          className="w-full text-left px-3 py-2 rounded-xl text-xs font-black bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-between shadow-xs hover:from-blue-500 hover:to-purple-500 transition-all cursor-pointer"
                        >
                          <span className="flex items-center gap-1.5">
                            <Shield className="w-3.5 h-3.5" />
                            <span>⚙️ Open Account Settings</span>
                          </span>
                          <span>→</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Sign Out Button */}
                <button
                  onClick={handleLogout}
                  className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                  title="Sign Out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => onOpenAuth('signin')}
                  className="px-3.5 py-1.5 text-xs xl:text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Sign In
                </button>
                <button
                  onClick={() => onOpenAuth('signup')}
                  className="px-3.5 py-1.5 text-xs xl:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs transition-all cursor-pointer hover:scale-102"
                >
                  Get Started Free
                </button>
              </>
            )}
          </div>

          {/* Mobile & Tablet Bar (Below 1024px) */}
          <div className="flex items-center gap-1.5 lg:hidden">
            {/* Mobile User Role Badge */}
            {currentUser && (
              <span className={`px-2 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1 border shrink-0 ${
                isAdmin
                  ? 'bg-indigo-950 text-indigo-200 border-indigo-500/40'
                  : isEducator
                  ? 'bg-purple-950 text-purple-200 border-purple-500/40'
                  : isContributor
                  ? 'bg-amber-950 text-amber-200 border-amber-500/40'
                  : 'bg-blue-950 text-blue-200 border-blue-500/40'
              }`}>
                {isAdmin ? '🛡️ Admin' : isEducator ? '👨‍🏫 Edu' : isContributor ? '✍️ Contrib' : '🎓 Student'}
              </span>
            )}

            {/* Mobile Accounts Button - STRICTLY ADMIN ONLY */}
            {isAdmin && onOpenAccountSettings && (
              <button
                onClick={onOpenAccountSettings}
                className="px-2 py-1 text-xs font-black text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center gap-1 shadow-xs cursor-pointer border border-white/20 shrink-0"
                title="Admin Account Settings"
              >
                <Shield className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Accounts</span>
              </button>
            )}

            {/* Mobile Course Button (Non-student) */}
            {canBuildCourse && (
              <button
                onClick={onOpenCourseBuilder}
                className="hidden sm:flex px-2 py-1 text-xs font-bold text-white bg-emerald-600 rounded-lg items-center gap-1 shrink-0"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Course</span>
              </button>
            )}

            {/* Hamburger / Close Icon */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Clean, padded, adapted for phones & tablets) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto">
          
          {/* User Session Info Card & Instant Switcher */}
          {currentUser ? (
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 truncate">
                  <User className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="text-xs font-bold text-slate-800 truncate">{currentUser.email}</span>
                </div>
                <span className={`text-[10px] uppercase font-black px-2 py-0.5 rounded-full border shrink-0 ${
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

              {/* Mobile Quick Role Switcher Grid */}
              {onSwitchRole && (
                <div className="pt-2 border-t border-slate-200">
                  <div className="text-[10px] uppercase font-black text-slate-500 mb-1.5">
                    ⚡ Quick Test Role Switcher
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 text-xs font-bold">
                    <button
                      onClick={() => {
                        onSwitchRole('admin');
                        setMobileMenuOpen(false);
                      }}
                      className={`p-2 rounded-xl text-left cursor-pointer transition-colors ${
                        isAdmin ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                      }`}
                    >
                      🛡️ Admin
                    </button>
                    <button
                      onClick={() => {
                        onSwitchRole('educator');
                        setMobileMenuOpen(false);
                      }}
                      className={`p-2 rounded-xl text-left cursor-pointer transition-colors ${
                        isEducator ? 'bg-purple-600 text-white' : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
                      }`}
                    >
                      👨‍🏫 Educator
                    </button>
                    <button
                      onClick={() => {
                        onSwitchRole('contributor');
                        setMobileMenuOpen(false);
                      }}
                      className={`p-2 rounded-xl text-left cursor-pointer transition-colors ${
                        isContributor ? 'bg-amber-600 text-white' : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
                      }`}
                    >
                      ✍️ Contributor
                    </button>
                    <button
                      onClick={() => {
                        onSwitchRole('student');
                        setMobileMenuOpen(false);
                      }}
                      className={`p-2 rounded-xl text-left cursor-pointer transition-colors ${
                        isStudent ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                      }`}
                    >
                      🎓 Student
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('signin');
                }}
                className="w-full py-2.5 text-center text-xs font-bold text-slate-700 border border-slate-200 rounded-xl"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth('signup');
                }}
                className="w-full py-2.5 text-center text-xs font-bold text-white bg-blue-600 rounded-xl shadow-xs"
              >
                Get Started Free
              </button>
            </div>
          )}

          {/* Perspective Switcher on Mobile (If Faculty/Admin) */}
          {canAccessFaculty && (
            <div className="bg-slate-100 p-1 rounded-xl flex items-center justify-center text-xs font-medium border border-slate-200">
              <button
                onClick={() => onTogglePerspective('educator')}
                className={`flex-1 py-1.5 rounded-lg text-center ${
                  currentPerspective === 'educator' ? 'bg-white text-blue-600 shadow-xs font-bold' : 'text-slate-600'
                }`}
              >
                👨‍🏫 For Teachers
              </button>
              <button
                onClick={() => onTogglePerspective('student')}
                className={`flex-1 py-1.5 rounded-lg text-center ${
                  currentPerspective === 'student' ? 'bg-white text-blue-600 shadow-xs font-bold' : 'text-slate-600'
                }`}
              >
                🎓 For Students
              </button>
            </div>
          )}

          {/* Action Links */}
          <div className="space-y-1 text-sm font-semibold">
            {/* Admin Account Settings */}
            {isAdmin && onOpenAccountSettings && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAccountSettings();
                }}
                className="w-full text-left px-3 py-2.5 text-sm font-black text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <Shield className="w-4 h-4" />
                <span>⚙️ Account Settings (Admin Only)</span>
              </button>
            )}

            {/* Faculty Portal */}
            {canAccessFaculty && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTeacherSetup();
                }}
                className="w-full text-left px-3 py-2 text-blue-700 hover:bg-blue-50 rounded-xl flex items-center gap-2 cursor-pointer font-bold"
              >
                <User className="w-4 h-4" />
                <span>👨‍🏫 Faculty Portal</span>
              </button>
            )}

            {/* Course Studio */}
            {canBuildCourse && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCourseBuilder();
                }}
                className="w-full text-left px-3 py-2 text-emerald-600 hover:bg-emerald-50 rounded-xl flex items-center gap-2 cursor-pointer font-bold"
              >
                <Plus className="w-4 h-4" />
                <span>+ Build New Course</span>
              </button>
            )}

            {/* Tuition */}
            {onOpenTuition && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTuition();
                }}
                className="w-full text-left px-3 py-2 text-emerald-700 hover:bg-emerald-50 rounded-xl flex items-center gap-2 cursor-pointer"
              >
                <span>💳 Tuition &amp; Plans</span>
              </button>
            )}

            {/* Credentials */}
            {onOpenCredentials && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCredentials();
                }}
                className="w-full text-left px-3 py-2 text-amber-700 hover:bg-amber-50 rounded-xl flex items-center gap-2 cursor-pointer"
              >
                <span>🎓 Credentials &amp; Certs</span>
              </button>
            )}

            {/* Dossier */}
            {onOpenDossier && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDossier();
                }}
                className="w-full text-left px-3 py-2 text-indigo-700 hover:bg-indigo-50 rounded-xl flex items-center gap-2 cursor-pointer"
              >
                <span>💼 Student Dossier</span>
              </button>
            )}

            <a 
              href="#tracks" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-slate-700 hover:bg-blue-50 rounded-xl"
            >
              Courses &amp; Roadmap
            </a>
            <a 
              href="#community-developers" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 font-bold text-slate-700 hover:bg-blue-50 rounded-xl flex items-center justify-between"
            >
              <span>Developer Communities</span>
              <span className="text-[10px] uppercase font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">Active</span>
            </a>
            <a 
              href="#community" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-slate-700 hover:bg-blue-50 rounded-xl"
            >
              Community Hub
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-slate-700 hover:bg-blue-50 rounded-xl"
            >
              Pricing
            </a>

            {/* Sign Out on Mobile */}
            {currentUser && (
              <div className="pt-2 border-t border-slate-200">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleLogout();
                  }}
                  className="w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 rounded-xl flex items-center gap-2 font-bold cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            )}
          </div>

        </div>
      )}
    </header>
  );
};
