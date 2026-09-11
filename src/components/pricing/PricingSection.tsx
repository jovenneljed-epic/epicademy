import { useState } from 'react';
import { PRICING_TIERS } from '../../data/pricingData';
import type { PricingTier } from '../../types';
import { Check, Sparkles, ShieldCheck } from 'lucide-react';

interface PricingSectionProps {
  onOpenAuth: (mode: 'signup' | 'signin', initialEmail?: string, planId?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenAuth }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('annually');

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading (Systeme.io transparent pricing tone) */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100/60 px-3 py-1 rounded-full border border-blue-200">
            Simple, Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Choose Your Plan — Or Start 100% Free
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            Zero hidden charges. Zero transaction fees. Upgrade as your student community grows, or stay on the free plan forever.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-sm font-semibold ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annually' : 'monthly')}
              className="w-14 h-8 bg-blue-600 rounded-full p-1 transition-colors relative cursor-pointer"
              aria-label="Toggle billing cycle"
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transition-transform transform ${
                  billingCycle === 'annually' ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-semibold ${billingCycle === 'annually' ? 'text-slate-900' : 'text-slate-500'}`}>
                Annual Billing
              </span>
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                Save 30%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_TIERS.map((tier: PricingTier) => {
            const price = billingCycle === 'annually' ? tier.priceAnnually : tier.priceMonthly;
            const isFree = tier.id === 'free';

            return (
              <div
                key={tier.id}
                className={`rounded-3xl p-6 flex flex-col justify-between transition-all relative ${
                  tier.highlighted
                    ? 'bg-white border-2 border-blue-600 shadow-2xl shadow-blue-500/15 -translate-y-2'
                    : 'bg-slate-50/70 border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300'
                }`}
              >
                {/* Popular Badge */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    {tier.badge}
                  </div>
                )}

                <div>
                  {/* Tier Title */}
                  <div className="mb-4">
                    <h3 className="text-xl font-extrabold text-slate-900">{tier.name}</h3>
                    <p className="text-xs text-slate-500 mt-1 min-h-[32px]">{tier.tagline}</p>
                  </div>

                  {/* Price display */}
                  <div className="py-4 border-y border-slate-200/80 mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-slate-900">${price}</span>
                      <span className="text-xs font-semibold text-slate-500">
                        {isFree ? '/ forever' : '/ month'}
                      </span>
                    </div>
                    {billingCycle === 'annually' && !isFree && (
                      <p className="text-[11px] text-emerald-600 font-semibold mt-1">
                        Billed annually (${price * 12}/yr)
                      </p>
                    )}
                    {isFree && (
                      <p className="text-[11px] text-slate-500 font-semibold mt-1">
                        No credit card needed
                      </p>
                    )}
                  </div>

                  {/* Features list */}
                  <div className="space-y-3 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Included Features:
                    </span>
                    {tier.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        {feature.included ? (
                          <div className={`rounded-full p-0.5 shrink-0 ${feature.highlight ? 'bg-blue-600 text-white' : 'bg-emerald-100 text-emerald-600'}`}>
                            <Check className="w-3 h-3" />
                          </div>
                        ) : (
                          <span className="w-4 h-4 text-slate-300 shrink-0 text-center font-bold">—</span>
                        )}
                        <span className={`${feature.included ? (feature.highlight ? 'font-bold text-slate-900' : '') : 'text-slate-400'}`}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <button
                    onClick={() => onOpenAuth('signup', undefined, tier.id)}
                    className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                      tier.highlighted
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/30'
                        : 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-300'
                    }`}
                  >
                    {tier.ctaText}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Zero Transaction Fees Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">0% Transaction Fees Across All Plans</h4>
              <p className="text-xs text-slate-600">Connect your Stripe or PayPal account. Epicademy takes zero percentage cuts from your course or subscription revenue.</p>
            </div>
          </div>
          <a href="#faq" className="text-xs font-bold text-blue-600 hover:underline shrink-0">
            Read fee transparency FAQ →
          </a>
        </div>

      </div>
    </section>
  );
};
