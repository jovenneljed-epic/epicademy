import { 
  BookOpen, 
  Users, 
  Video, 
  Mail, 
  Award, 
  CreditCard, 
  Check, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface AllInOneGridProps {
  onOpenAuth: (mode: 'signup' | 'signin') => void;
}

export const AllInOneGrid = ({ onOpenAuth }: AllInOneGridProps) => {
  const tools = [
    {
      title: 'Course Hosting & LMS',
      replaces: 'Replaces Kajabi & Teachable',
      savedCost: '$149/mo',
      icon: BookOpen,
      color: 'bg-blue-100 text-blue-600',
      description: 'Host unlimited video lessons, structured modular tracks, interactive quizzes, and downloadable resources with zero bandwidth fees.',
      highlights: ['Unlimited video hosting', 'Multi-discipline tracks', 'Drip scheduling', 'Student progress tracker'],
    },
    {
      title: 'Community Circles & Forums',
      replaces: 'Replaces Circle.so & Skool',
      savedCost: '$99/mo',
      icon: Users,
      color: 'bg-emerald-100 text-emerald-600',
      description: 'Keep your students engaged without redirecting them to Facebook groups or Discord. Topic channels, direct messaging, and study cohorts.',
      highlights: ['Custom topic channels', 'Peer upvoting & badges', 'Member directory', 'Direct instructor messaging'],
    },
    {
      title: 'Live Stages & Interactive Webinars',
      replaces: 'Replaces Zoom Pro & WebinarJam',
      savedCost: '$80/mo',
      icon: Video,
      color: 'bg-red-100 text-red-600',
      description: 'Broadcast high-definition live workshops directly in the student browser. Breakout study pods, live screen markup, and automated replay archives.',
      highlights: ['Zero software downloads', 'Automated cloud recordings', 'Breakout study rooms', 'Real-time live Q&A'],
    },
    {
      title: 'Email Marketing & Automation',
      replaces: 'Replaces Mailchimp & ConvertKit',
      savedCost: '$69/mo',
      icon: Mail,
      color: 'bg-purple-100 text-purple-600',
      description: 'Send unlimited email newsletters, welcome onboarding sequences, and weekly cohort reminders with 99.4% inbox deliverability.',
      highlights: ['Unlimited email broadcasts', 'Automated trigger sequences', 'Visual email builder', 'Tag-based segmentation'],
    },
    {
      title: 'Accredited Certificates & Badges',
      replaces: 'Replaces Accredible & Credly',
      savedCost: '$45/mo',
      icon: Award,
      color: 'bg-amber-100 text-amber-600',
      description: 'Issue cryptographic, verifiable completion certificates with unique serials and LinkedIn 1-click sharing when students finish a track.',
      highlights: ['Custom branded certificates', 'Verifiable credential URLs', 'Automated milestone triggers', 'LinkedIn 1-click share'],
    },
    {
      title: 'Checkouts, Bundles & Affiliates',
      replaces: 'Replaces SamCart & Teachable Fees',
      savedCost: '$79/mo',
      icon: CreditCard,
      color: 'bg-cyan-100 text-cyan-600',
      description: 'Collect payments via Stripe & PayPal with 0% platform transaction fees. Create subscription passes, coupons, and student affiliate programs.',
      highlights: ['0% platform fee', 'Direct Stripe/PayPal integration', 'Tiered subscription passes', 'Built-in affiliate engine'],
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100/60 px-3 py-1 rounded-full border border-blue-200">
            Unified Teaching Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Replace 6 Costly Tools with 1 Simple Platform
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            Stop stitching together five different logins and spending hundreds every month. Epicademy gives you every tool required to teach, engage, and monetize.
          </p>

          {/* Cost Savings Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mt-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Average creator saves $521/month switching to Epicademy</span>
          </div>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:bg-white hover:shadow-xl hover:border-blue-300 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${tool.color} flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Saves</span>
                      <span className="text-xs font-extrabold text-emerald-600 bg-emerald-100/80 px-2 py-0.5 rounded-md">
                        {tool.savedCost}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {tool.title}
                  </h3>
                  <span className="text-xs font-semibold text-slate-500 block mb-3">
                    {tool.replaces}
                  </span>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {tool.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 space-y-2">
                  {tool.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar below grid */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenAuth('signup')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all text-sm sm:text-base cursor-pointer"
          >
            <span>Consolidate Your Academy Today — 100% Free</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
