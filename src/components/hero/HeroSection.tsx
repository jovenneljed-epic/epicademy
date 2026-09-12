import { useState } from 'react';
import { ArrowRight, Star, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { InteractiveDashboardMockup } from './InteractiveDashboardMockup';

interface HeroSectionProps {
  onOpenAuth: (mode?: 'signup' | 'signin', email?: string) => void;
  perspective: 'educator' | 'student';
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAuth, perspective }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenAuth('signup', email);
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50/40">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-br from-blue-400/10 via-indigo-300/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline Block */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/80 text-blue-900 text-xs font-bold mb-6 shadow-2xs animate-in fade-in slide-in-from-bottom-2 duration-300">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span>Community Academy • "It's Never Too Late to Learn"</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.12]">
            Rise Up and Learn to Code: From{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Zero to Hero
            </span>{' '}
            Guided by Community
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Never be intimidated starting from scratch. Here at <strong>EPICADEMY</strong>, every learner has a home to master Web Development, Generative AI, and Mobile Applications alongside supportive mentors and fellow students.
          </p>

          {/* Inspirational Quote Card */}
          <div className="mt-5 max-w-2xl mx-auto p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-left text-xs text-amber-950 flex items-start gap-3 shadow-2xs">
            <span className="text-lg">💡</span>
            <div>
              <span className="font-extrabold uppercase tracking-wider block text-[10px] text-amber-900 mb-0.5">
                A Message of Hope from Mentor Joven Nel Jed:
              </span>
              <p className="italic text-amber-900 leading-relaxed">
                "There is hope for your future. Every line of code you write—no matter how challenging—is preparation for the opportunities ahead."
              </p>
            </div>
          </div>

          {/* Single-input Lead Capture */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 p-1.5 bg-white rounded-2xl shadow-xl shadow-blue-950/5 border border-slate-200 max-w-xl mx-auto mt-6">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="flex-1 px-4 py-3.5 text-sm sm:text-base rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-200 shadow-md shadow-blue-600/20 text-sm sm:text-base flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>{perspective === 'educator' ? 'Teach at Academy' : 'Join Community (Free)'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Micro Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-3 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Free Forever Plan
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> GCash & Card Payments Ready
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Guided by Senior Mentors
            </span>
          </div>

          {/* Social Proof & Rating Badge */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="flex -space-x-2 overflow-hidden">
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Educator" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Student" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80" alt="Educator" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" alt="Educator" />
            </div>

            <div className="flex items-center gap-1 text-slate-700 text-xs sm:text-sm">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-bold text-slate-900 ml-1">4.9/5</span>
              <span className="text-slate-500">from 14,000+ reviews</span>
            </div>
          </div>
        </div>

        {/* Live Interactive Platform Preview Mockup */}
        <div className="relative mx-auto max-w-5xl mt-12">
          <InteractiveDashboardMockup perspective={perspective} onOpenAuth={onOpenAuth} />
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200 text-center">
          <p className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-6">
            Trusted by Communities, Bootcamps, and Mentors in the Philippines
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            <span className="font-extrabold text-slate-800 text-sm sm:text-base tracking-wider">bossROD ACADEMY</span>
            <span className="font-extrabold text-slate-800 text-sm sm:text-base tracking-wider">ZAN COMMUNITY</span>
            <span className="font-extrabold text-slate-800 text-sm sm:text-base tracking-wider">MAHABI+</span>
            <span className="font-extrabold text-slate-800 text-sm sm:text-base tracking-wider">DEVCON PHILIPPINES</span>
            <span className="font-extrabold text-slate-800 text-sm sm:text-base tracking-wider">AWS USER GROUP PH</span>
          </div>
        </div>
      </div>
    </section>
  );
};