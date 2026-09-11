import { TESTIMONIALS } from '../../data/testimonialsData';
import { Star, TrendingUp, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100/60 px-3 py-1 rounded-full border border-blue-200">
            Proven Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Real Stories From Top Educators & Academies
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            See how boutique educators and global institutes transitioned to Epicademy to slash software overhead and dramatically increase student retention.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Metric pill */}
                <div className="bg-blue-50/80 border border-blue-100 rounded-2xl p-3.5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-sm shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-lg font-black text-blue-950 block leading-tight">{t.stats.value}</span>
                    <span className="text-[11px] text-slate-500 font-medium">{t.stats.label}</span>
                  </div>
                </div>

                {/* Rating stars */}
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-slate-100"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate flex items-center gap-1">
                    {t.name}
                    <CheckCircle className="w-3.5 h-3.5 text-blue-600 inline" />
                  </h4>
                  <p className="text-[11px] text-slate-500 truncate">{t.role}</p>
                  <p className="text-[10px] text-blue-600 font-semibold truncate">{t.track}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Global Impact Numbers Counter */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <span className="text-3xl sm:text-4xl font-black text-slate-900 block tracking-tight">350,000+</span>
            <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1 block">Active Students</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-black text-blue-600 block tracking-tight">12,500+</span>
            <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1 block">Courses & Tracks</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-black text-emerald-600 block tracking-tight">$42M+</span>
            <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1 block">Paid to Educators</span>
          </div>
          <div>
            <span className="text-3xl sm:text-4xl font-black text-slate-900 block tracking-tight">99.98%</span>
            <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1 block">Platform Uptime</span>
          </div>
        </div>

      </div>
    </section>
  );
};
