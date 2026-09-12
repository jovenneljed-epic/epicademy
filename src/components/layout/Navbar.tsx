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
  LogOut
} from 'lucide-react';
import { signOutUser } from '../../lib/supabaseClient';

interface NavbarProps {
  currentPerspective: 'educator' | 'student';
  onTogglePerspective: (perspective: 'educator' | 'student') => void;
  onOpenAuth: (mode: 'signup' | 'signin') => void;
  onOpenCourseBuilder: () => void;
  onOpenTeacherSetup: () => void;
  onOpenApplyTenant?: () => void;
  currentUser?: { email?: string; role?: string } | null;
  onSignOut?: () => void;
}

export const Navbar = ({
  currentPerspective,
  onTogglePerspective,
  onOpenAuth,
  onOpenCourseBuilder,
  onOpenTeacherSetup,
  onOpenApplyTenant,
  currentUser,
  onSignOut,
}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tracksDropdownOpen, setTracksDropdownOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  ESKWELA
                </span>
              </span>
              <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase -mt-1">
                Eskwela ng Bayan • Zero to Hero
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

            <a href="#community-developers" className="px-3 py-2 text-sm font-bold text-slate-700 hover:text-blue-600 rounded-lg transition-colors flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Communities</span>
            </a>

            <a href="#community-developers" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-lg transition-colors">
              Events
            </a>

            <a href="#community" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-lg transition-colors">
              Community Hub
            </a>
            <a href="#pricing" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-lg transition-colors">
              Pricing
            </a>
            <a href="#faq" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-lg transition-colors">
              FAQ
            </a>
          </nav>

          {/* Right Action Area */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Perspective Switcher */}
            <div className="bg-slate-100 p-1 rounded-xl flex items-center text-xs font-medium border border-slate-200">
              <button
                onClick={() => onTogglePerspective('educator')}
                className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  currentPerspective === 'educator'
                    ? 'bg-white text-blue-600 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>👨‍🏫 Para sa Guro</span>
              </button>
              <button
                onClick={() => onTogglePerspective('student')}
                className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  currentPerspective === 'student'
                    ? 'bg-white text-blue-600 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>🎓 Para sa Mag-aaral</span>
              </button>
            </div>

            {/* Setup Teachers Button */}
            <button
              onClick={onOpenTeacherSetup}
              className="px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold rounded-xl border border-blue-200 transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Gabay ng Faculty & Pastor's Desk"
            >
              <User className="w-3.5 h-3.5 text-blue-600" />
              <span>🙏 Pastor & Faculty</span>
            </button>

            {/* Course Studio Button */}
            <button
              onClick={onOpenCourseBuilder}
              className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>+ Gumawa ng Kurso</span>
            </button>

            {/* Become Tenant Button */}
            {onOpenApplyTenant && (
              <button
                onClick={onOpenApplyTenant}
                className="px-3 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold rounded-xl border border-indigo-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Magbahagi ng Karunungan bilang Mentor"
              >
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span>+ Maging Mentor</span>
              </button>
            )}

            {/* User Session or Auth Buttons */}
            {currentUser ? (
              <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-blue-50/70 border border-blue-100 px-3 py-1.5 rounded-xl">
                  <User className="w-3.5 h-3.5 text-blue-600" />
                  <span className="max-w-[140px] truncate">Hello, {currentUser.email?.split('@')[0]}!</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg transition-colors cursor-pointer"
                  title="Mag-Sign Out"
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
                  Pumasok (Sign In)
                </button>
                <button
                  onClick={() => onOpenAuth('signup')}
                  className="px-4 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-500/20 transition-all cursor-pointer hover:scale-102"
                >
                  Simulan ng Libre
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenCourseBuilder}
              className="px-3 py-1.5 text-xs font-bold text-white bg-emerald-600 rounded-lg flex items-center gap-1"
            >
              <Plus className="w-3 h-3" /> Course
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTeacherSetup();
              }}
              className="w-full text-left px-3 py-2 text-base font-bold text-blue-700 hover:bg-blue-50 rounded-lg flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              <span>👨‍🏫 Faculty Accounts</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCourseBuilder();
              }}
              className="w-full text-left px-3 py-2 text-base font-bold text-emerald-600 hover:bg-emerald-50 rounded-lg flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>+ Build New Course</span>
            </button>
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
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                <span className="text-xs font-bold text-slate-800">{currentUser.email}</span>
                <button
                  onClick={handleLogout}
                  className="text-xs font-bold text-red-600"
                >
                  Sign Out
                </button>
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
