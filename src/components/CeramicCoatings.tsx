import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface CeramicCoatingsProps {
  onLearnMore: () => void;
}

export default function CeramicCoatings({ onLearnMore }: CeramicCoatingsProps) {
  const highlightPoints = [
    {
      title: "Up to 7 Years Durability",
      description: "State-of-the-art Italian nanotechnology forming a semi-permanent ceramic barrier."
    },
    {
      title: "Intense Deep Mirror Gloss",
      description: "Significantly elevates color depth, saturation, and three-dimensional reflectivity."
    },
    {
      title: "Ultra-Hydrophobic Surface",
      description: "Repels water, dust, grease, road grime and bird fallout, making maintenance effortless."
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="ceramic-coatings">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full filter blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight leading-tight">
                Labocosmetica <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Ceramic Coatings</span>
              </h2>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
                Protect your vehicle with our professional Labocosmetica ceramic coating range. Each coating forms a durable protective layer that enhances gloss and colour depth while protecting against UV rays, chemical contaminants, oxidation, bird droppings and environmental fallout.
              </p>
              
              <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed font-light">
                The ultra-hydrophobic finish repels water and dirt, making maintenance easier and keeping your vehicle looking its best. Explore our range of 2, 3, 5, and 7-year protection options.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="pt-4"
            >
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-xs font-display font-bold uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:scale-[1.02] transition-all duration-300 cursor-pointer shadow-lg shadow-cyan-500/10 group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Visual highlights list */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-4">
            {highlightPoints.map((point, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-[#111113]/50 border border-white/5 hover:border-cyan-500/10 hover:bg-[#121215] transition-all duration-300 group cursor-pointer space-y-2"
                  onClick={onLearnMore}
                >
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-display font-black text-white uppercase tracking-wider group-hover:text-cyan-400 transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-light">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}


