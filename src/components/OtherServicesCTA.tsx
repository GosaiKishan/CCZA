import React from "react";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

interface OtherServicesCTAProps {
  onLearnMore: () => void;
}

export default function OtherServicesCTA({ onLearnMore }: OtherServicesCTAProps) {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#0b0b0d] border border-white/5 rounded-[3rem] p-8 md:p-16 relative overflow-hidden group">
          {/* Subtle animated border top */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="flex flex-col items-center text-center">
            <div className="space-y-6 max-w-2xl">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white uppercase tracking-tighter leading-[0.9]">
                Other Detailing <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Services We Offer
                </span>
              </h2>
              
              <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed mx-auto">
                Explore our comprehensive range of services. From high-end maintenance washes and surgical paint correction to self-healing Paint Protection Film (PPF) and nano ceramic coatings.
              </p>

              <div className="pt-4 flex justify-center">
                <button
                  onClick={onLearnMore}
                  className="group flex items-center gap-3 px-10 py-4 bg-white text-black rounded-full font-display font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl shadow-white/5"
                >
                  Explore All Packages
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
