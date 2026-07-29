import React, { useState } from "react";
import { ArrowRight, HelpCircle, RefreshCw } from "lucide-react";
import { motion } from "motion/react";
import DiagonalDivider from "./DiagonalDivider";
import { handleDriveImageError } from "../utils/driveImage";

interface PaintProtectionFilmProps {
  onSelectService: (serviceName: string) => void;
  onLearnMore: () => void;
}

interface PPFCardProps {
  key?: string;
  number: string;
  title: string;
  description: string;
  imageUrl: string;
}

function PPFCard({ number, title, description, imageUrl }: PPFCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      className="relative w-full h-[320px] cursor-pointer group"
      style={{ perspective: "1500px" }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        {/* Front Side */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#111113]/80 to-[#0b0b0c]/90 border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl transition-colors duration-300 group-hover:border-cyan-500/30"
        >
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-mono text-xs text-cyan-400 font-bold bg-white/5 border border-white/10 w-8 h-8 rounded-lg flex items-center justify-center">
                {number}
              </span>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1 group-hover:text-cyan-400/80 transition-colors">
                <RefreshCw className="w-3 h-3 animate-spin-slow" />
                Flip
              </span>
            </div>
            
            <h4 className="text-lg sm:text-xl font-display font-black text-white uppercase tracking-wider">
              {title}
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
              {description}
            </p>
          </div>

          <div className="pt-4 border-t border-white/5 flex items-center justify-end text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            <ArrowRight className="w-3.5 h-3.5 text-cyan-500/80 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Back Side (The image) */}
        <div
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="absolute inset-0 w-full h-full bg-[#111113] border border-cyan-500/20 rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Main Process Image */}
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={(e) => handleDriveImageError(e)}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function PaintProtectionFilm({ onSelectService, onLearnMore }: PaintProtectionFilmProps) {
  const processSteps = [
    {
      number: "01",
      title: "Self-Healing Topcoat",
      description: "Fine swirls and micro-scratches physically heal and disappear instantly under engine/ambient heat or hot water, maintaining a perfect mirror gloss.",
      imageUrl: "https://lh3.googleusercontent.com/d/1a0bgp-C1injIEHOkb042N-qkTLTXIzMS"
    },
    {
      number: "02",
      title: "Extreme Impact Buffer",
      description: "Cushions factory clearcoats from extreme highway gravel strikes, high-force scratching, and physical keys, absorbing impact force dynamically.",
      imageUrl: "https://lh3.googleusercontent.com/d/16qVeqmEEbg47GHFgzcU8Hllxcrdn2b2A"
    },
    {
      number: "03",
      title: "True Invisible Fitment",
      description: "Applied on specialized, custom pattern-cut panels with deep hand-tucked secure edge folds to guarantee individual seams remain entirely seamless.",
      imageUrl: "https://lh3.googleusercontent.com/d/1WNfuNc8nX4JmPskMCvHzYfdBEwV8Mno4"
    }
  ];

  return (
    <section id="ppf" className="pb-24 bg-black scroll-mt-20">
      <DiagonalDivider topBg="#000000" bottomBg="#000000" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16">
        
        {/* Title Block */}
        <div className="mb-16">
          <div className="space-y-6 max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
              Paint Protection Film (PPF)
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Paint Protection Film (PPF) is a virtually invisible, high-performance polyurethane film applied to your vehicle's painted surfaces to protect against stone chips, scratches, road debris, bug splatter and UV damage. Featuring self-healing technology, a hydrophobic surface for easier maintenance, and UV resistance to prevent fading, our premium PPF keeps your vehicle looking newer for longer. Every PPF installation is backed by a 10-year manufacturer's warranty, giving you complete confidence and long-term protection.
            </p>
            <div className="pt-2">
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-display font-bold uppercase tracking-widest bg-white text-black border border-white hover:bg-transparent hover:text-white transition-all duration-300 cursor-pointer shadow-lg shadow-white/5 group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive 3D Flip Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {processSteps.map((step) => (
            <PPFCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              imageUrl={step.imageUrl}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
