import React, { useState } from 'react';
import type { FormEvent } from 'react';
import { 
  GraduationCap, 
  Shield, 
  Sparkles, 
  ArrowRight, 
  Lock, 
  Mail, 
  User as UserIcon, 
  CheckCircle2, 
  AlertCircle, 
  Terminal, 
  Briefcase, 
  Code2, 
  RefreshCw,
  Eye,
  EyeOff
} from 'lucide-react';
import { signInUser, signUpUser, getUserRoleByEmail } from '../../lib/supabaseClient';
import type { UserRole } from '../../types';

interface LoginPageProps {
  onAuthSuccess: (email: string, role: string) => void;
  onExploreAsGuest?: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({
  onAuthSuccess,
  onExploreAsGuest,
}) => {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  // Sign Up Extra Fields
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState<UserRole>('student');
  const [specialty, setSpecialty] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleInstantSignIn = async (targetEmail: string, targetRole: UserRole) => {
    setIsLoading(true);
    setErrorMessage(null);
    setEmail(targetEmail);
    setPassword('password123');
    setRole(targetRole);

    try {
      const { data, error } = await signInUser(targetEmail, 'password123');
      if (error) {
        setErrorMessage(error.message);
      } else {
        const resolvedRole = getUserRoleByEmail(targetEmail) || data.user?.user_metadata?.role || targetRole;
        setSuccessMessage(`Welcome back! Unlocking platform as ${resolvedRole.toUpperCase()}...`);
        setTimeout(() => {
          onAuthSuccess(targetEmail, resolvedRole);
        }, 300);
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Unexpected login error.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    const cleanEmail = email.toLowerCase().trim();

    if (!cleanEmail || !password.trim()) {
      setErrorMessage('Please enter both email and password.');
      setIsLoading(false);
      return;
    }

    try {
      if (mode === 'signup') {
        const { error } = await signUpUser(cleanEmail, password, role);
        if (error) {
          setErrorMessage(error.message);
        } else {
          setSuccessMessage(`Account created successfully! Unlocking as ${role.toUpperCase()}...`);
          setTimeout(() => {
            onAuthSuccess(cleanEmail, role);
          }, 400);
        }
      } else {
        const { data, error } = await signInUser(cleanEmail, password);
        if (error) {
          setErrorMessage(error.message);
        } else {
          const resolvedRole = getUserRoleByEmail(cleanEmail) || data.user?.user_metadata?.role || 'student';
          setSuccessMessage(`Signed in! Unlocking learning hub as ${resolvedRole.toUpperCase()}...`);
          setTimeout(() => {
            onAuthSuccess(cleanEmail, resolvedRole);
          }, 400);
        }
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Authentication failed. Please verify credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-center relative overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none translate-y-1/3" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      {/* Top Brand Bar */}
      <header className="relative z-10 max-w-7xl mx-auto w-full px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/20">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-black tracking-tight text-white">EPICADEMY</span>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                Hub Gate
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
              Zero to Hero Tech &amp; Vocational Academy
            </p>
          </div>
        </div>

        {onExploreAsGuest && (
          <button
            onClick={onExploreAsGuest}
            className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 transition-colors cursor-pointer"
          >
            Preview as Guest →
          </button>
        )}
      </header>

      {/* Main Content Grid */}
      <main className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Hero & Role Capabilities Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Multi-Tier Role-Based Access Control</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Unlock Your Learning &amp; Teaching Hub.
              </h1>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
                Sign in or create your personalized account. Your permissions, classroom tools, and administrative powers configure automatically based on your authenticated role.
              </p>
            </div>

            {/* 4 Roles Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-900/70 border border-slate-800/90 rounded-2xl p-3.5 space-y-1.5 hover:border-indigo-500/40 transition-colors">
                <div className="flex items-center gap-2 text-indigo-400">
                  <Shield className="w-4 h-4" />
                  <h4 className="text-xs font-black uppercase tracking-wider">🛡️ Administrator</h4>
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Exclusive access to Account Settings, user provisioning, role promotion, and full academy management.
                </p>
              </div>

              <div className="bg-slate-900/70 border border-slate-800/90 rounded-2xl p-3.5 space-y-1.5 hover:border-purple-500/40 transition-colors">
                <div className="flex items-center gap-2 text-purple-400">
                  <Briefcase className="w-4 h-4" />
                  <h4 className="text-xs font-black uppercase tracking-wider">👨‍🏫 Educator / Faculty</h4>
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Course Studio, student evaluation, career dossiers, and mentorship tools.
                </p>
              </div>

              <div className="bg-slate-900/70 border border-slate-800/90 rounded-2xl p-3.5 space-y-1.5 hover:border-amber-500/40 transition-colors">
                <div className="flex items-center gap-2 text-amber-400">
                  <Code2 className="w-4 h-4" />
                  <h4 className="text-xs font-black uppercase tracking-wider">✍️ Contributor</h4>
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Author and propose new courses, practical exercises, and interactive coding challenges.
                </p>
              </div>

              <div className="bg-slate-900/70 border border-slate-800/90 rounded-2xl p-3.5 space-y-1.5 hover:border-blue-500/40 transition-colors">
                <div className="flex items-center gap-2 text-blue-400">
                  <Terminal className="w-4 h-4" />
                  <h4 className="text-xs font-black uppercase tracking-wider">🎓 Student / Trainee</h4>
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Vocational tracks, Kezjed AI mentor, Live Code Sandbox IDE, and Trainee Record Book (TRB).
                </p>
              </div>
            </div>

            {/* Platform Trust Highlights */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-semibold text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" /> 100% Free TESDA CSS NC II
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-blue-400">
                <CheckCircle2 className="w-3.5 h-3.5" /> Live In-Browser IDE
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-purple-400">
                <CheckCircle2 className="w-3.5 h-3.5" /> Kezjed AI Mentor
              </span>
            </div>
          </div>

          {/* Right Authentication Form Column */}
          <div className="lg:col-span-6 w-full max-w-md mx-auto">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative">
              
              {/* Mode Switcher Tabs */}
              <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-950/80 rounded-2xl mb-5 border border-slate-800">
                <button
                  type="button"
                  onClick={() => {
                    setMode('signin');
                    setErrorMessage(null);
                    setSuccessMessage(null);
                  }}
                  className={`py-2 text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                    mode === 'signin'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMode('signup');
                    setErrorMessage(null);
                    setSuccessMessage(null);
                  }}
                  className={`py-2 text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                    mode === 'signup'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Create Account
                </button>
              </div>

              {/* ⚡ 1-Click Instant Test Accounts */}
              <div className="mb-5 p-3.5 bg-slate-950/90 border border-slate-800/90 rounded-2xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-black tracking-wider text-slate-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>⚡ 1-Click Test Roles</span>
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">Instant Unlock</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5 text-xs font-bold">
                  <button
                    type="button"
                    disabled={isLoading}
                    onClick={() => handleInstantSignIn('admin@epicademy.com', 'admin')}
                    className="p-2 rounded-xl bg-indigo-950/70 hover:bg-indigo-900/90 border border-indigo-500/40 text-indigo-200 flex items-center justify-between cursor-pointer transition-all hover:scale-[1.02] active:scale-98 text-left"
                    title="Sign in as Superadmin (Only role with Account Settings)"
                  >
                    <span>🛡️ Admin</span>
                    <span className="text-[9px] text-indigo-400 font-mono">Full</span>
                  </button>
                  <button
                    type="button"
                    disabled={isLoading}
                    onClick={() => handleInstantSignIn('educator@epicademy.com', 'educator')}
                    className="p-2 rounded-xl bg-purple-950/70 hover:bg-purple-900/90 border border-purple-500/40 text-purple-200 flex items-center justify-between cursor-pointer transition-all hover:scale-[1.02] active:scale-98 text-left"
                    title="Sign in as Educator (Course Builder & Faculty)"
                  >
                    <span>👨‍🏫 Educator</span>
                    <span className="text-[9px] text-purple-400 font-mono">Teach</span>
                  </button>
                  <button
                    type="button"
                    disabled={isLoading}
                    onClick={() => handleInstantSignIn('contributor@epicademy.com', 'contributor')}
                    className="p-2 rounded-xl bg-amber-950/70 hover:bg-amber-900/90 border border-amber-500/40 text-amber-200 flex items-center justify-between cursor-pointer transition-all hover:scale-[1.02] active:scale-98 text-left"
                    title="Sign in as Contributor (Course Authoring)"
                  >
                    <span>✍️ Contributor</span>
                    <span className="text-[9px] text-amber-400 font-mono">Author</span>
                  </button>
                  <button
                    type="button"
                    disabled={isLoading}
                    onClick={() => handleInstantSignIn('student@epicademy.com', 'student')}
                    className="p-2 rounded-xl bg-blue-950/70 hover:bg-blue-900/90 border border-blue-500/40 text-blue-200 flex items-center justify-between cursor-pointer transition-all hover:scale-[1.02] active:scale-98 text-left"
                    title="Sign in as Student (Classroom, Sandbox, AI Mentor)"
                  >
                    <span>🎓 Student</span>
                    <span className="text-[9px] text-blue-400 font-mono">Learn</span>
                  </button>
                </div>
              </div>

              {/* Alert Feedback */}
              {errorMessage && (
                <div className="mb-4 p-3 bg-rose-950/60 border border-rose-500/40 rounded-xl text-xs text-rose-300 flex items-start gap-2 animate-in fade-in duration-150">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {successMessage && (
                <div className="mb-4 p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-xs text-emerald-300 flex items-start gap-2 animate-in fade-in duration-150">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                  <span>{successMessage}</span>
                </div>
              )}

              {/* Authentication Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {/* Full Name for Sign Up */}
                {mode === 'signup' && (
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Your Full Name</label>
                    <div className="relative">
                      <UserIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                      <input
                        type="text"
                        required={mode === 'signup'}
                        placeholder="e.g. Maria Santos"
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                )}

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Password with View Toggle */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Password</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      minLength={6}
                      placeholder="At least 6 characters"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      className="w-full pl-9 pr-10 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Role Selector for Sign Up */}
                {mode === 'signup' && (
                  <div className="space-y-1.5 pt-1">
                    <label className="block text-xs font-bold text-slate-300">Choose Your Account Role</label>
                    <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-950 rounded-2xl border border-slate-800 text-xs font-semibold">
                      <button
                        type="button"
                        onClick={() => setRole('student')}
                        className={`py-2 px-2.5 rounded-xl transition-all cursor-pointer text-left flex items-center gap-1.5 ${
                          role === 'student' ? 'bg-blue-600 text-white shadow font-bold' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        <span>🎓 Student</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setRole('contributor')}
                        className={`py-2 px-2.5 rounded-xl transition-all cursor-pointer text-left flex items-center gap-1.5 ${
                          role === 'contributor' ? 'bg-amber-600 text-white shadow font-bold' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        <span>✍️ Contributor</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setRole('educator')}
                        className={`py-2 px-2.5 rounded-xl transition-all cursor-pointer text-left flex items-center gap-1.5 ${
                          role === 'educator' ? 'bg-purple-600 text-white shadow font-bold' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        <span>👨‍🏫 Educator</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setRole('admin')}
                        className={`py-2 px-2.5 rounded-xl transition-all cursor-pointer text-left flex items-center gap-1.5 ${
                          role === 'admin' ? 'bg-indigo-600 text-white shadow font-bold' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        <span>🛡️ Admin</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Specialty / Department for Sign Up */}
                {mode === 'signup' && (
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Specialty / Interest (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. Computer Systems Servicing, Full-Stack, Music"
                      value={specialty}
                      onChange={e => setSpecialty(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                )}

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:opacity-60 text-white font-black text-sm rounded-xl shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-98 mt-3"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Authenticating...</span>
                    </>
                  ) : (
                    <>
                      <span>{mode === 'signin' ? 'Unlock Learning Hub' : 'Register & Enter Platform'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Mode switch helper link */}
              <div className="mt-4 pt-3 border-t border-slate-800 text-center text-xs text-slate-400">
                {mode === 'signin' ? (
                  <p>
                    New to Epicademy?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setMode('signup');
                        setErrorMessage(null);
                      }}
                      className="text-blue-400 font-bold hover:underline cursor-pointer"
                    >
                      Sign up for a free account
                    </button>
                  </p>
                ) : (
                  <p>
                    Already have an account?{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setMode('signin');
                        setErrorMessage(null);
                      }}
                      className="text-blue-400 font-bold hover:underline cursor-pointer"
                    >
                      Sign in here
                    </button>
                  </p>
                )}
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 max-w-7xl mx-auto w-full px-6 py-4 text-center text-xs text-slate-500 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>© 2026 Epicademy. Developed by Ronnel M. Aviguetero, CEO &amp; FOUNDER of KEZJED SOLUTIONS.</span>
        <span className="text-slate-600 font-mono text-[11px]">Autonomous Agentic Learning OS</span>
      </footer>
    </div>
  );
};
