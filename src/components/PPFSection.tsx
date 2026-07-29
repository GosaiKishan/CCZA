import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Target, CheckCircle2 } from 'lucide-react';

export default function PPFSection({ onLearnMore }: { onLearnMore: () => void }) {
  return (
    <section className="py-24 bg-zinc-950 text-white scroll-mt-20" id="ppf-info">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-display font-black uppercase tracking-tight">
              Paint Protection Film <span className="text-cyan-400">(PPF)</span>
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed font-light">
              Paint Protection Film (PPF) is the ultimate defence for your vehicle's paintwork. This virtually invisible, high-gloss film protects against stone chips, scratches, road debris, bug splatter, and everyday wear while preserving your vehicle's factory finish. Our premium PPF features advanced self-healing technology, allowing light scratches and swirl marks to disappear with heat, while its hydrophobic surface repels water, dirt, and contaminants for easier cleaning and a longer-lasting shine. Whether you choose partial or full vehicle coverage, PPF is the best investment to preserve your vehicle's value and showroom finish.
            </p>
            
            <div className="flex items-center gap-4 bg-cyan-950/30 border border-cyan-900/50 p-4 rounded-xl">
              <Shield className="w-8 h-8 text-cyan-400" />
              <div>
                <p className="text-xl font-bold">10-YEAR WARRANTY</p>
                <p className="text-sm text-zinc-400">Industry-leading protection assurance</p>
              </div>
            </div>

            <button 
              onClick={onLearnMore}
              className="px-8 py-4 bg-white text-black font-display font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-zinc-200 transition-colors"
            >
              Learn More
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Zap, title: "Self-Healing Topcoat", desc: "Fine swirls and micro-scratches physically heal and disappear instantly under heat." },
              { icon: Target, title: "Extreme Impact Buffer", desc: "Cushions factory clearcoats from extreme highway gravel strikes and high-force scratching." },
              { icon: CheckCircle2, title: "True Invisible Fitment", desc: "Custom pattern-cut panels with deep hand-tucked edges guarantee seamless aesthetics." },
            ].map((feature, i) => (
              <div key={i} className="bg-zinc-900 p-6 rounded-2xl border border-white/5 space-y-4">
                <feature.icon className="w-8 h-8 text-cyan-400" />
                <h4 className="font-display font-bold uppercase text-sm tracking-wide">{feature.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
