import React, { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ShieldCheck, Check, Sparkles, Zap, ShieldAlert, Award, Compass } from "lucide-react";

interface PPFDetailsPageProps {
  onBack: () => void;
  onSelectService: (serviceName: string) => void;
}

export default function PPFDetailsPage({ onBack, onSelectService }: PPFDetailsPageProps) {
  // Ensure we scroll to the top of the page when this is loaded
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const packages = [
    {
      title: "Full Vehicle PPF",
      tagline: "Complete protection for every painted surface.",
      description: "The ultimate defence against stone chips, scratches, swirl marks, road debris and UV damage. Ideal for enthusiasts who want to preserve their vehicle's finish and maximise resale value while maintaining a flawless showroom appearance.",
      price: "R39,000"
    },
    {
      title: "Frontal PPF",
      tagline: "Protect the areas that take the most impact.",
      description: "Covers the front bumper, bonnet, front fenders and side mirrors to guard against stone chips, road debris and everyday wear. Perfect for daily-driven vehicles and highway use.",
      price: "R16,500"
    },
    {
      title: "Track Pack PPF",
      tagline: "Extended protection where it's needed most.",
      description: "Includes everything in the Frontal Package, plus side skirts, A-pillars, roof leading edge and rear wheel arch impact areas. Designed for spirited driving, track use and vehicles exposed to increased road debris.",
      price: "R18,500"
    },
    {
      title: "Windscreen PPF",
      tagline: "Heavy duty defensive film against highway rock strikes.",
      description: "A highly advanced, optically clear heavy-duty defensive film specifically engineered for windscreens. Absorbs the brutal impact of highway stone strikes, road gravel, and debris, significantly reducing the risk of glass chips, cracks, and expensive replacements.",
      price: "R4,000"
    },
    {
      title: "Headlight PPF",
      tagline: "Protect against road gravel, pitting, and oxidation.",
      description: "Shields your expensive headlight housings from sandblasting, highway gravel pitting, chemical yellowing, and oxidation under severe UV exposure. Maintains crystal clear optical transparency.",
      price: "R2,000"
    },
    {
      title: "Interior PPF",
      tagline: "Preserve glossy trim, screens, and consoles.",
      description: "Specifically cut and applied to vulnerable interior glossy surfaces such as center consoles, instrument clusters, infotainment screens, and piano black trim. Prevents scratching, dust smudging, and daily wear.",
      price: "R1,500"
    }
  ];

  const benefits = [
    "Self-healing technology",
    "High-gloss, virtually invisible finish",
    "Protects against stone chips and scratches",
    "UV and chemical resistant",
    "Hydrophobic surface for easier cleaning",
    "Helps preserve resale value",
    "Professional precision installation",
    "Up to 10 years of protection"
  ];

  return (
    <div className="min-h-screen bg-black text-[#f3f4f6] pt-24 pb-16 selection:bg-white selection:text-black">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full filter blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full filter blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation / Header */}
        <div className="mb-12">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-display font-bold uppercase tracking-widest bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </div>

        {/* Hero Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight uppercase leading-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent"
          >
            Paint Protection <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Film (PPF)</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed font-light"
          >
            The ultimate invisible armor for high-value vehicles. Discover our premium polyurethane film installations tailored to preserve your vehicle's pristine showroom look.
          </motion.p>
        </div>

        {/* Main Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {packages.map((pkg, i) => {
            return (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="relative group flex flex-col justify-between bg-[#111113]/40 border border-white/5 hover:border-white/10 rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/5 backdrop-blur-sm overflow-hidden"
              >
                {/* Visual Glow Layer */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="space-y-6">
                  {/* Text Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-tight">
                      {pkg.title}
                    </h3>
                    <p className="text-xs font-mono uppercase tracking-wider text-cyan-400/80">
                      {pkg.tagline}
                    </p>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                      {pkg.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Pricing & Inquire */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase text-zinc-500">Value Starts From</span>
                    <span className="text-sm font-display font-black text-white tracking-tight mt-0.5">{pkg.price}</span>
                  </div>

                  <button
                    onClick={() => onSelectService(pkg.title)}
                    className="text-sm font-display font-black tracking-tight text-cyan-400 hover:text-[#25D366] transition-colors flex items-center gap-1.5 cursor-pointer focus:outline-none"
                    title="Get a Quote on WhatsApp"
                  >
                    <span>Get a Quote</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-b from-[#111113]/60 to-black border border-white/5 rounded-3xl p-8 sm:p-12 backdrop-blur-md relative overflow-hidden"
        >
          {/* Subtle decoration lines */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side: Accent */}
            <div className="lg:col-span-4 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight leading-tight">
                Elite PPF Benefits
              </h2>
              <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed font-light">
                Why Lenasia's most discerning car collectors and supercar enthusiasts choose Cartel Clean's advanced paint protection.
              </p>
            </div>

            {/* Right side: Bullet List */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-3 bg-[#111113]/40 border border-white/5 rounded-2xl p-4 hover:border-white/10 transition-colors"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-zinc-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA block placeholder removed */}
      </div>
    </div>
  );
}
