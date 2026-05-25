import { PLANS } from '../data';
import { SubscriptionPlan } from '../types';
import { Check, ShieldCheck, Ticket } from 'lucide-react';

interface PricingSectionProps {
  onOpenCheckout: (planId: string) => void;
}

export default function PricingSection({ onOpenCheckout }: PricingSectionProps) {
  return (
    <section
      id="pricing"
      className="bg-neutral-950 py-12 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-neutral-800 relative"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-red-950/30 blur-[120px] pointer-events-none" />

      {/* Headings */}
      <div className="text-center space-y-4 mb-10 sm:mb-20">
        <div className="inline-flex items-center gap-1.5 bg-black border border-neutral-700 rounded-full px-3 py-1 text-amber-400 backdrop-blur-md shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
          <span className="font-mono text-[9px] uppercase tracking-widest">Transparency Pledge: No Hidden Surcharges</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl text-white tracking-wide uppercase">
          Transparent UK IPTV Subscriptions
        </h2>
        <p className="font-sans text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto leading-relaxed">
          Choose a term that suits you. Single one-off payment with zero monthly contracts, no auto-billing, and immediate setup support.
        </p>
      </div>

      {/* Plans Grid */}
      <div
        id="plans-container-grid"
        className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 items-stretch relative z-10"
      >
        {PLANS.map((plan: SubscriptionPlan) => {
          return (
            <div
              key={plan.id}
              id={`plan-card-${plan.id}`}
              className={`group relative rounded-2xl p-5 sm:p-8 border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                plan.recommended
                  ? 'bg-neutral-900 border-red-700 shadow-2xl shadow-red-950/40 md:scale-[1.05] z-10'
                  : 'bg-neutral-900 border-neutral-800 hover:border-neutral-600 shadow-sm hover:shadow-md'
              }`}
            >
              {plan.gradientAccent && (
                <div
                  id="gradient-glow-mesh"
                  className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-r from-red-900 via-amber-900 to-red-900 blur-[50px] opacity-20 group-hover:opacity-35 transition-opacity duration-300 pointer-events-none z-0"
                />
              )}

              <div className="relative z-10 text-left">
                <div className="flex items-center justify-between gap-2 mb-4 sm:mb-6">
                  <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                    {plan.name}
                  </span>
                  {plan.recommended && (
                    <span className="font-sans text-[9px] font-bold bg-red-700 text-white px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}
                </div>

                <div className="mb-2 flex items-baseline gap-1.5 shrink-0">
                  <span className="font-sans font-bold text-4xl sm:text-5xl text-white tracking-tighter">
                    {plan.price}
                  </span>
                  <span className="font-sans text-xs text-neutral-400 tracking-normal font-normal">
                    {plan.period}
                  </span>
                </div>

                <div className="text-left py-1 mb-6 border-b border-neutral-700">
                  <p className="font-sans text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    {plan.savings}
                  </p>
                </div>

                <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider mb-4">Includes:</p>
                <ul className="space-y-2.5 mb-5 sm:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2.5 text-xs text-neutral-300 leading-relaxed font-sans"
                    >
                      <Check className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 text-left pt-3 border-t border-neutral-800">
                <p className="font-mono text-[9px] text-neutral-600 mb-4 tracking-normal uppercase">
                  {plan.billingTerm}
                </p>

                <button
                  id={`btn-checkout-${plan.id}`}
                  onClick={() => onOpenCheckout(plan.id)}
                  className={`w-full py-3.5 rounded-xl text-xs font-sans font-semibold transition-all select-none flex items-center justify-center gap-2 ${
                    plan.recommended
                      ? 'bg-red-700 hover:bg-red-600 text-white shadow-lg shadow-red-950/40 active:scale-95'
                      : 'bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-900 text-neutral-300 border border-neutral-700'
                  }`}
                >
                  <Ticket className="w-4 h-4" />
                  Select {plan.name}
                </button>
              </div>

              <div className="absolute top-0 right-0 h-4 w-[1px] bg-red-700/50" />
              <div className="absolute top-0 right-0 w-4 h-[1px] bg-red-700/50" />
            </div>
          );
        })}
      </div>

      {/* Transparency Block */}
      <div className="mt-8 sm:mt-16 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-left shadow-sm">
        <div>
          <h4 className="font-sans font-bold text-white text-xs mb-1">Instant Delivery Guarantee</h4>
          <p className="font-sans text-[11px] text-neutral-400 leading-relaxed">Activation occurs within 15 minutes of payment clearing. Configuration script parameters load instantly over Email & WhatsApp.</p>
        </div>
        <div>
          <h4 className="font-sans font-bold text-white text-xs mb-1">Total Pricing Safety</h4>
          <p className="font-sans text-[11px] text-neutral-400 leading-relaxed">Absolutely no recurring subscriptions. You always pay a flat one-off charge. No contracts, zero Auto-payment renewals.</p>
        </div>
        <div>
          <h4 className="font-sans font-bold text-white text-xs mb-1">Stable Peering</h4>
          <p className="font-sans text-[11px] text-neutral-400 leading-relaxed">We stream only raw, local broadcast segments with double redundancy systems. If a server acts up, our protocol flips dynamically.</p>
        </div>
      </div>
    </section>
  );
}
