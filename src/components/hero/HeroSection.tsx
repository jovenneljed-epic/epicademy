import { useState } from 'react';
import type { FormEvent } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Sparkles
} from 'lucide-react';
import { InteractiveDashboardMockup } from './InteractiveDashboardMockup';

interface HeroSectionProps {
  perspective: 'educator' | 'student';
  onOpenAuth: (mode: 'signup' | 'signin', initialEmail?: string) => void;
}

export const HeroSection = ({ perspective, onOpenAuth }: HeroSectionProps) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onOpenAuth('signup', email);
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50/40">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-br from-blue-400/10 via-indigo-300/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Hero Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-xs hover:border-blue-300 transition-colors">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold text-blue-800 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Eskwela ng Bayan • "Hindi ka huli, kapatid! (You're Not Behind)"</span>
            </span>
          </div>
        </div>

        {/* Dynamic Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight leading-[1.12]">
            Bumangon at Matutong Mag-Code: Mula{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              Zero Patungong Hero
            </span>{' '}
            sa Gabay ng Komunidad
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Kapatid, huwag kang matakot kung nagsisimula ka sa wala. Dito sa <strong>EPICADEMY Eskwela</strong>, bawat Pilipino ay may puwang matutong mag-program ng Web Development, Generative AI, at Mobile Apps. Sama-sama tayong aahon at magiging pagpapala sa pamilya sa gabay ng ating mga tapat na mentor at kapwa mag-aaral.
          </p>

          {/* Pastoral Word of Encouragement Card */}
          <div className="max-w-2xl mx-auto mt-6 p-3.5 sm:p-4 rounded-2xl bg-amber-50/90 border border-amber-200/80 text-left flex items-start gap-3 shadow-xs">
            <span className="text-2xl mt-0.5">🕊️</span>
            <div>
              <p className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                <span>Salita ng Pag-asa mula kay Pastor Joven Nel Jed (Kuya Jed):</span>
              </p>
              <p className="text-xs sm:text-sm text-amber-800 italic mt-0.5 leading-relaxed">
                "Sapagkat may pag-asa ang iyong kinabukasan. Ang bawat linyang isinusulat mo—kahit gaano man kahirap—ay paghahanda sa biyayang nakalaan para sa iyong kinabukasan."
              </p>
            </div>
          </div>
        </div>

        {/* Lead Capture Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 p-1.5 bg-white rounded-2xl shadow-xl shadow-blue-950/5 border border-slate-200">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ilagay ang iyong email address, kapatid..."
              className="flex-1 px-4 py-3.5 text-sm sm:text-base rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-md shadow-blue-600/30 hover:shadow-blue-600/40 transition-all flex items-center justify-center gap-2 group cursor-pointer whitespace-nowrap"
            >
              <span>{perspective === 'educator' ? 'Magturo sa Eskwela' : 'Sumali sa Komunidad (Libre)'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Micro Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-3 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              100% Libreng Simula
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              GCash at GoTyme Bank Ready
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              May Gabay ng mga Kuya at Ate
            </span>
          </div>
        </div>

        {/* Social Proof & Rating Badge */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <div className="flex -space-x-2 overflow-hidden">
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Educator" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Student" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80" alt="Educator" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" alt="Educator" />
            <div className="inline-flex h-8 w-8 rounded-full bg-blue-600 ring-2 ring-white text-[11px] font-bold text-white items-center justify-center">
              +25k
            </div>
          </div>

          <div className="flex items-center gap-1 text-slate-700 text-xs sm:text-sm">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-slate-900 ml-1">4.9/5</span>
            <span className="text-slate-500">from 14,000+ reviews</span>
          </div>
        </div>

        {/* Live Interactive Platform Preview Mockup */}
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-[32px] blur-lg opacity-25"></div>
          <InteractiveDashboardMockup perspective={perspective} />
        </div>

        {/* Social Proof Institutions Banner */}
        <div className="mt-16 pt-8 border-t border-slate-200 text-center">
          <p className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-6">
            Pinagkakatiwalaan ng mga Komunidad, Bootcamps at Mentors sa Pilipinas
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
