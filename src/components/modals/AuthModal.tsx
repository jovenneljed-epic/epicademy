import { useState } from 'react';
import type { FormEvent } from 'react';
import { X, CheckCircle2, GraduationCap, ArrowRight, ShieldCheck, Sparkles, AlertCircle, Database } from 'lucide-react';
import { signUpUser, signInUser, getUserRoleByEmail } from '../../lib/supabaseClient';
import type { UserRole } from '../../types';

interface AuthModalProps {
  isOpen: boolean;
  initialMode: 'signup' | 'signin';
  initialEmail?: string;
  selectedPlanId?: string;
  onClose: () => void;
  onAuthSuccess?: (userEmail: string, role: string) => void;
}

export const AuthModal = ({
  isOpen,
  initialMode,
  initialEmail = '',
  selectedPlanId,
  onClose,
  onAuthSuccess,
}: AuthModalProps) => {
  const [mode, setMode] = useState<'signup' | 'signin'>(initialMode);
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('student');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      if (mode === 'signup') {
        const { data, error } = await signUpUser(email, password, role);
        if (error) {
          setErrorMessage(error.message);
        } else {
          setIsSuccess(true);
          const msg = data.user?.identities && data.user.identities.length === 0
            ? 'An account with this email already exists. Try signing in!'
            : `Account created successfully! Role: ${role.toUpperCase()}. Welcome to Epicademy.`;
          setSuccessMessage(msg);
          if (onAuthSuccess) onAuthSuccess(email, role);
        }
      } else {
        const { data, error } = await signInUser(email, password);
        if (error) {
          setErrorMessage(error.message);
        } else {
          const userRole = getUserRoleByEmail(email) || data.user?.user_metadata?.role || 'student';
          setIsSuccess(true);
          setSuccessMessage(`Welcome back! Signed in with role: ${userRole.toUpperCase()}.`);
          if (onAuthSuccess) onAuthSuccess(email, userRole);
        }
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'An unexpected connection error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setErrorMessage(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">
              {mode === 'signup' ? 'Welcome to Epicademy!' : 'Signed in successfully!'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
              {successMessage}
            </p>
            <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-800 font-medium flex items-center justify-center gap-1.5">
              <Database className="w-4 h-4 text-emerald-600" />
              <span>Synced directly with your Supabase database</span>
            </div>
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md cursor-pointer transition-all"
              >
                Continue to Learning Hub
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center mx-auto mb-3 shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                {mode === 'signup' ? 'Create Your Free Account' : 'Welcome Back'}
              </h3>
              
              {/* Live Database Badge */}
              <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                <Database className="w-3 h-3 text-emerald-600" /> Live Supabase Database Connected
              </div>

              {selectedPlanId && mode === 'signup' && (
                <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full">
                  <Sparkles className="w-3 h-3" /> Selected Plan: {selectedPlanId.toUpperCase()}
                </div>
              )}
            </div>

            {/* Error Message Alert */}
            {errorMessage && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-start gap-2 animate-in fade-in duration-150">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Quick Demo Test Accounts Bar */}
            <div className="mb-4 p-3 bg-slate-900 border border-slate-800 rounded-2xl text-white">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase font-black tracking-wider text-slate-400">
                  ⚡ 1-Click Test Accounts
                </span>
                <span className="text-[10px] text-slate-500 font-mono">Instant Fill</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => {
                    setEmail('admin@epicademy.com');
                    setPassword('password123');
                    setRole('admin');
                  }}
                  className="px-2 py-1.5 rounded-xl bg-indigo-950/80 hover:bg-indigo-900 border border-indigo-500/40 text-indigo-200 flex items-center justify-between cursor-pointer transition-colors"
                >
                  <span>🛡️ Admin</span>
                  <span className="text-[9px] text-indigo-400 font-mono">Full</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEmail('educator@epicademy.com');
                    setPassword('password123');
                    setRole('educator');
                  }}
                  className="px-2 py-1.5 rounded-xl bg-purple-950/80 hover:bg-purple-900 border border-purple-500/40 text-purple-200 flex items-center justify-between cursor-pointer transition-colors"
                >
                  <span>👨‍🏫 Educator</span>
                  <span className="text-[9px] text-purple-400 font-mono">Teach</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEmail('contributor@epicademy.com');
                    setPassword('password123');
                    setRole('contributor');
                  }}
                  className="px-2 py-1.5 rounded-xl bg-amber-950/80 hover:bg-amber-900 border border-amber-500/40 text-amber-200 flex items-center justify-between cursor-pointer transition-colors"
                >
                  <span>✍️ Contributor</span>
                  <span className="text-[9px] text-amber-400 font-mono">Author</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEmail('student@epicademy.com');
                    setPassword('password123');
                    setRole('student');
                  }}
                  className="px-2 py-1.5 rounded-xl bg-blue-950/80 hover:bg-blue-900 border border-blue-500/40 text-blue-200 flex items-center justify-between cursor-pointer transition-colors"
                >
                  <span>🎓 Student</span>
                  <span className="text-[9px] text-blue-400 font-mono">Learn</span>
                </button>
              </div>
            </div>

            {/* Role Selection (Signup only) */}
            {mode === 'signup' && (
              <div className="mb-4">
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Select Account Role</label>
                <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-100 rounded-xl text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setRole('student')}
                    className={`py-2 px-2.5 rounded-lg transition-all cursor-pointer text-left flex items-center gap-1.5 ${
                      role === 'student' ? 'bg-white text-blue-700 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>🎓 Student</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('contributor')}
                    className={`py-2 px-2.5 rounded-lg transition-all cursor-pointer text-left flex items-center gap-1.5 ${
                      role === 'contributor' ? 'bg-white text-amber-700 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>✍️ Contributor</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('educator')}
                    className={`py-2 px-2.5 rounded-lg transition-all cursor-pointer text-left flex items-center gap-1.5 ${
                      role === 'educator' ? 'bg-white text-purple-700 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>👨‍🏫 Educator</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('admin')}
                    className={`py-2 px-2.5 rounded-lg transition-all cursor-pointer text-left flex items-center gap-1.5 ${
                      role === 'admin' ? 'bg-white text-indigo-700 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>🛡️ Administrator</span>
                  </button>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Work or Personal Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Password</label>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <span>
                  {isLoading
                    ? 'Connecting to Supabase...'
                    : mode === 'signup'
                    ? 'Get Started Free (No Credit Card)'
                    : 'Sign In'}
                </span>
                {!isLoading && <ArrowRight className="w-4 h-4" />}
              </button>
            </form>

            {/* Switch Mode */}
            <div className="mt-5 text-center pt-4 border-t border-slate-100 text-xs text-slate-600">
              {mode === 'signup' ? (
                <p>
                  Already have an account?{' '}
                  <button
                    onClick={() => {
                      setMode('signin');
                      setErrorMessage(null);
                    }}
                    className="text-blue-600 font-bold hover:underline cursor-pointer"
                  >
                    Sign In here
                  </button>
                </p>
              ) : (
                <p>
                  Don't have an account yet?{' '}
                  <button
                    onClick={() => {
                      setMode('signup');
                      setErrorMessage(null);
                    }}
                    className="text-blue-600 font-bold hover:underline cursor-pointer"
                  >
                    Create Free Account
                  </button>
                </p>
              )}
            </div>

            {/* Micro guarantee */}
            <div className="flex items-center justify-center gap-2 mt-4 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Real Supabase PostgreSQL Database • 256-Bit SSL</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
