import React from "react";
import { motion } from "motion/react";
import DiagonalDivider from "./DiagonalDivider";
import ImageSlider from "./ImageSlider";

export default function AboutUs() {
  return (
    <section id="about" className="pb-24 bg-black relative overflow-hidden scroll-mt-20">
      
      {/* Dynamic ambient backlights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-600/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 md:pt-24 lg:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* Creative Left Side: Cinematic Story */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white uppercase tracking-tight leading-none">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Pure Dedication</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">To Paintwork Perfection.</span>
              </h2>
            </div>

            <div className="space-y-6 text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
              <p>
                Founded in <strong className="text-white font-semibold">2023</strong>, CartelClean began as a passion-driven mobile detailing service with a commitment to delivering exceptional results and premium vehicle care.
              </p>
              <p>
                Through dedication, attention to detail, and a growing reputation for quality workmanship, CartelClean expanded into a dedicated detailing facility in <strong className="text-white font-semibold">2025</strong>, allowing us to offer an even higher standard of service and protection for our clients' vehicles.
              </p>
              <p>
                As a <strong className="text-cyan-400 font-semibold">Labocosmetica Accredited Detailing Centre</strong>, we combine industry-leading products, professional techniques, and meticulous attention to detail to restore, protect, and maintain vehicles to the highest standard.
              </p>
              <p>
                Whether it's a maintenance wash, paint correction, ceramic coating, paint protection film, or a complete vehicle transformation, our goal remains the same: delivering results that exceed expectations.
              </p>
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-md border border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.05)]">RESTORE</span>
                <span className="h-1 w-1 rounded-full bg-zinc-700" />
                <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-md border border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.05)]">PROTECT</span>
                <span className="h-1 w-1 rounded-full bg-zinc-700" />
                <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 bg-cyan-500/10 px-3.5 py-1.5 rounded-md border border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.05)]">MAINTAIN</span>
              </div>
            </div>
          </div>

          {/* Elegant Right Side: Value Pillars */}
          <div className="lg:col-span-6 lg:ml-12">
            <ImageSlider />
          </div>

        </div>
      </div>
    </section>
  );
}
