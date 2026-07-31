import React, { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Check, Sparkles, Award, Shield, Zap, Flame } from "lucide-react";

interface CeramicCoatingsDetailsPageProps {
  onBack: () => void;
  onSelectService: (serviceName: string) => void;
}

export default function CeramicCoatingsDetailsPage({ onBack, onSelectService }: CeramicCoatingsDetailsPageProps) {
  // Ensure we scroll to the top of the page when this is loaded
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const coatings = [
    {
      title: "HPC",
      duration: "2 Year Protection",
      tagline: "High-Performance Coating",
      description: "A high-performance ceramic coating offering up to 2 years of protection. HPC delivers outstanding gloss, exceptional hydrophobic properties and resistance to UV rays, chemicals and environmental contaminants, while making routine maintenance effortless.",
      price: "R4,500",
      icon: Shield,
      glow: "from-cyan-500/10 to-transparent",
      accent: "cyan"
    },
    {
      title: "SAM",
      duration: "3 Year Protection",
      tagline: "Daily-Drive Shield",
      description: "Designed for daily-driven vehicles, SAM provides up to 3 years of durable paint protection. It enhances gloss and colour depth while protecting against UV exposure, oxidation and everyday contaminants with excellent water-repellent performance.",
      price: "Get a Quote",
      icon: Sparkles,
      glow: "from-blue-500/10 to-transparent",
      accent: "blue"
    },
    {
      title: "STC",
      duration: "5 Year Protection",
      tagline: "Advanced Paint Armor",
      description: "A premium ceramic coating offering up to 5 years of advanced protection. STC provides exceptional resistance to scratches, road salt, tar, acid rain, air pollution and UV rays while delivering a deep, three-dimensional gloss and an easy-to-maintain finish.",
      price: "Get a Quote",
      icon: Zap,
      glow: "from-indigo-500/10 to-transparent",
      accent: "indigo"
    },
    {
      title: "BLINDO Plus",
      duration: "7 Year Protection",
      tagline: "The Flagship Barrier",
      description: "Our flagship ceramic coating, delivering up to 7 years of premium protection. BLINDO Plus forms an extremely durable, high-gloss barrier with superior resistance to scratches, chemicals, UV exposure and environmental contaminants, providing the ultimate finish and long-term paint preservation.",
      price: "Get a Quote",
      icon: Award,
      glow: "from-purple-500/20 to-transparent",
      accent: "purple",
      featured: true
    }
  ];

  const coreBenefits = [
    "Durable protective layer shielding against environmental fallout",
    "Enhanced deep wet-look gloss and colour vibrancy",
    "Exceptional water-repellent (hydrophobic) self-cleaning surface",
    "Guaranteed defense against harsh UV rays, oxidation, and bird droppings",
    "Chemical resistant formulation from pH 2 to pH 12",
    "Saves significant time during washing and maintenance sessions"
  ];

  return (
    <div className="min-h-screen bg-black text-[#f3f4f6] pt-24 pb-16 selection:bg-white selection:text-black">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full filter blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full filter blur-[150px]" />
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
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight uppercase leading-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent"
          >
            Labocosmetica <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Ceramic Coatings</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed font-light"
          >
            Uncompromising paint protection technology. Each advanced formulation creates an ultra-hard, highly reflective sacrificial barrier to lock in a flawless, glassy showroom shine.
          </motion.p>
        </div>

        {/* Coatings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {coatings.map((coating, i) => {
            const Icon = coating.icon;
            return (
              <motion.div
                key={coating.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative group flex flex-col justify-between p-6 rounded-3xl border transition-all duration-300 backdrop-blur-sm overflow-hidden ${
                  coating.featured
                    ? "bg-[#121215] border-cyan-500/30 shadow-2xl shadow-cyan-500/5 hover:border-cyan-400/50"
                    : "bg-[#111113]/60 border-white/5 hover:border-white/15"
                }`}
              >
                {/* Accent line for BLINDO Plus */}
                {coating.featured && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-t-3xl" />
                )}

                {/* Ambient glow behind card */}
                <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${coating.glow} rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="space-y-6">
                  {/* Duration Header */}
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                      {coating.duration}
                    </span>
                    {coating.featured && (
                      <span className="text-[9px] font-mono uppercase tracking-widest text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 px-2 py-0.5 rounded-md">
                        Flagship
                      </span>
                    )}
                  </div>

                  {/* Title & Info */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-black text-white uppercase tracking-tight">
                      {coating.title}
                    </h3>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-cyan-400/80">
                      {coating.tagline}
                    </p>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                      {coating.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Pricing & Inquire */}
                <div className={`pt-6 mt-6 border-t border-white/5 flex items-center ${coating.price === "Get a Quote" ? "justify-end" : "justify-between"}`}>
                  {coating.price !== "Get a Quote" && (
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono uppercase text-zinc-500">
                        Value Starts From
                      </span>
                      <span className="text-sm font-display font-black tracking-tight text-white mt-0.5">
                        {coating.price}
                      </span>
                    </div>
                  )}

                  <button
                    onClick={() => onSelectService(`Labocosmetica ${coating.title} Ceramic Coating`)}
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

        {/* Specialty Ceramic Treatments Images Showcase */}
        <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { url: "https://lh3.googleusercontent.com/d/1v_rkcUZunVP49dHbnfSohmIiwpc2bYlj", title: "Specialty Ceramic Treatment 1" },
            { url: "https://lh3.googleusercontent.com/d/19FoJ7wD4qcFFmbQF5QhWf6vcqJnlIIk4", title: "Specialty Ceramic Treatment 2" },
            { url: "https://lh3.googleusercontent.com/d/1-QxM6thl3O3oT-qIMWSSg_B5PlcDhZ0-", title: "Specialty Ceramic Treatment 3" },
            { url: "https://lh3.googleusercontent.com/d/1JBJCwmj1ZJwXRqDtxt4YLMgLK2EDMyLX", title: "Specialty Ceramic Treatment 4" }
          ].map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-white/10 bg-[#111113]"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

            </motion.div>
          ))}
        </div>

        {/* Specialty Ceramic Treatments */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full inline-block">
              Specialist Protection
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tight">
              Specialty Ceramic Treatments
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
              Targeted protective barriers engineered for the extreme environmental demands of specialized exterior substrates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Windscreen Ceramic Coating */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-[#0b0b0d]/90 border border-white/5 relative overflow-hidden flex flex-col justify-between shadow-2xl"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-display font-black text-white uppercase tracking-tight">
                    Windscreen Ceramic Coating
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1.5 font-light">
                    Hydrophobic shield for extreme wet weather visibility
                  </p>
                </div>

                {/* Pricing Box */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Service Pricing</h4>
                    <p className="text-xs text-zinc-300 font-light mt-0.5">Value Starts From</p>
                    <p className="text-[10px] text-zinc-500 font-light italic">Price depends on glass surface condition.</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <h4 className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">Starting From</h4>
                    <p className="text-xl font-display font-black text-white tracking-tight">R800</p>
                    <button
                      onClick={() => onSelectService("Windscreen Ceramic Coating")}
                      className="mt-1 text-xs font-display font-black text-cyan-400 hover:text-[#25D366] transition-colors flex items-center gap-1 sm:justify-end cursor-pointer"
                      title="Get a Quote on WhatsApp"
                    >
                      <span>Get a Quote</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                    </button>
                  </div>
                </div>


                {/* What's Included */}
                <div className="space-y-3">
                  <h4 className="text-xs font-display font-black text-white uppercase tracking-wider">What's Included:</h4>
                  <div className="space-y-2.5">
                    {[
                      "Mechanical glass decontamination to remove road film & mineral spots",
                      "Glass polishing for absolute optical flat clarity",
                      "Isopropyl alcohol preparation wipe down",
                      "Application of dual-layer professional glass ceramic coating",
                      "Controlled curation of the hydrophobic film"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300 font-light leading-relaxed">
                        <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal For callout */}
                <div className="p-4 rounded-2xl bg-cyan-950/10 border border-cyan-500/10">
                  <p className="text-[10px] font-mono uppercase text-cyan-400 mb-1">Ideal For</p>
                  <p className="text-xs text-zinc-300 font-light leading-relaxed">
                    Enhancing safety and clear sightlines during heavy seasonal rainstorms. Water beads off the screen automatically.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Rim Ceramic Coating */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-3xl bg-[#0b0b0d]/90 border border-white/5 relative overflow-hidden flex flex-col justify-between shadow-2xl"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-display font-black text-white uppercase tracking-tight">
                    Rim Ceramic Coating
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1.5 font-light">
                    Extreme temperature barrier protecting custom wheels
                  </p>
                </div>

                {/* Pricing Box */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <h4 className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Service Pricing</h4>
                    <p className="text-xs text-zinc-300 font-light mt-0.5">Value Starts From</p>
                    <p className="text-[10px] text-zinc-500 font-light italic">Price depends on wheel dimension & spoke design.</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <h4 className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">Starting From</h4>
                    <p className="text-xl font-display font-black text-white tracking-tight">R1200</p>
                    <button
                      onClick={() => onSelectService("Rim Ceramic Coating")}
                      className="mt-1 text-xs font-display font-black text-cyan-400 hover:text-[#25D366] transition-colors flex items-center gap-1 sm:justify-end cursor-pointer"
                      title="Get a Quote on WhatsApp"
                    >
                      <span>Get a Quote</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                    </button>
                  </div>
                </div>


                {/* What's Included */}
                <div className="space-y-3">
                  <h4 className="text-xs font-display font-black text-white uppercase tracking-wider">What's Included:</h4>
                  <div className="space-y-2.5">
                    {[
                      "Wheel-off full inner barrel and face decontamination",
                      "Iron and tar spot chemical fallout removal",
                      "Rim faces light polishing to clear micro-swirls",
                      "Isopropyl panel prep wipe down",
                      "Application of specialized high-temperature rim ceramic coating"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300 font-light leading-relaxed">
                        <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal For callout */}
                <div className="p-4 rounded-2xl bg-cyan-950/10 border border-cyan-500/10">
                  <p className="text-[10px] font-mono uppercase text-cyan-400 mb-1">Ideal For</p>
                  <p className="text-xs text-zinc-300 font-light leading-relaxed">
                    Vehicles with performance brake pads or custom gloss alloys. Prevents corrosive brake dust from embedding.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Benefits Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-b from-[#111113]/60 to-black border border-white/5 rounded-3xl p-8 sm:p-12 backdrop-blur-md relative overflow-hidden"
        >
          {/* Subtle decoration lines */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side: Accent */}
            <div className="lg:col-span-4 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight leading-tight">
                Why Labocosmetica?
              </h2>
              <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed font-light">
                Developed and produced in Italy, Labocosmetica stands at the pinnacle of detailing chemistry. These certified ceramic systems provide incredible resistance, rich depth, and unrivaled gloss longevity.
              </p>
            </div>

            {/* Right side: Bullet List */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreBenefits.map((benefit, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3 bg-[#111113]/40 border border-white/5 rounded-2xl p-4 hover:border-white/10 transition-colors"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-zinc-300 leading-normal">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>



      </div>
    </div>
  );
}
