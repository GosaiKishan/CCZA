import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { handleDriveImageError } from '../utils/driveImage';
import { VEHICLE_BRANDING_IMAGES } from '../data/vehicleBrandingData';

interface VehicleBrandingProps {
  onSelectService: (serviceName: string) => void;
}

export default function VehicleBranding({ onSelectService }: VehicleBrandingProps) {
  const [showMore, setShowMore] = useState(false);

  const brandingServices = [
    "Full Vehicle Branding",
    "Partial Vehicle Branding",
    "Fleet Branding",
    "Custom Decals & Graphics",
    "Commercial Vehicle Signage",
    "Design, Printing & Professional Installation"
  ];

  const highlights = [
    {
      title: "Tailored Graphic Design",
      description: "Our team drafts high-impact visual concepts crafted specifically to match your vehicle's physical lines."
    },
    {
      title: "Premium Grade Cast Vinyl",
      description: "We use only top-tier cast vinyl substrates featuring air-release channels for zero bubbles and residue-free removal."
    },
    {
      title: "UV & Weather Shielding",
      description: "All prints are finished with a premium protective laminate to guard against harsh sun exposure, washing, and minor abrasions."
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="vehicle-branding">
      {/* Subtle radial glow behind branding section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Overview */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight leading-none">
            Vehicle <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Branding Solutions</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
            Transform your vehicle into a powerful marketing tool with our professional vehicle branding solutions. Whether for a single company vehicle or an entire fleet, we provide high-quality graphics designed to enhance brand visibility while maintaining a clean, professional appearance. Using premium materials and precision installation techniques, our branding is durable, weather-resistant and tailored to your business requirements.
          </p>
        </div>

        {/* Highlights Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {highlights.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-[#111113]/40 border border-white/5 hover:border-cyan-500/10 transition-all duration-300"
              >
                <h4 className="text-sm font-display font-black text-white uppercase tracking-wider mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* View More / View Less Toggle Button */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <button
            onClick={() => setShowMore(!showMore)}
            className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-black hover:bg-cyan-400 font-display font-black uppercase tracking-widest text-xs transition-all duration-300 cursor-pointer shadow-lg shadow-white/5 hover:shadow-cyan-400/20 hover:scale-105"
            title={showMore ? "Show Less Services" : "View More Services & Quote"}
          >
            <span>{showMore ? "Show Less" : "View More"}</span>
            {showMore ? (
              <ChevronUp className="w-4 h-4 text-black group-hover:-translate-y-0.5 transition-transform duration-300" />
            ) : (
              <ChevronDown className="w-4 h-4 text-black group-hover:translate-y-0.5 transition-transform duration-300" />
            )}
          </button>
        </motion.div>

        {/* Expandable Showcase, Services Include & Get a Quote Card */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="max-w-4xl mx-auto overflow-hidden"
            >
              <div className="p-6 sm:p-10 rounded-3xl bg-[#0b0b0d]/90 border border-white/10 relative overflow-hidden shadow-2xl flex flex-col gap-10 my-4">
                {/* Glossy top highlight */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
                
                {/* Showcase Showcase Header */}
                <div className="border-b border-white/10 pb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-[11px] font-mono uppercase tracking-widest text-white">
                      Car Branding
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-tight">
                    Militia Defense — Vehicle Branding
                  </h3>
                </div>

                {/* Design Concept Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-cyan-500 rounded-full" />
                    <h4 className="text-xs sm:text-sm font-display font-black text-white uppercase tracking-wider">
                      Design Concept
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {VEHICLE_BRANDING_IMAGES.designConcepts.map((item) => (
                      <div key={item.id} className="relative group w-full overflow-hidden rounded-xl bg-black/40 flex items-center justify-center">
                        <img
                          src={item.url}
                          alt={item.alt}
                          className="w-full h-auto max-h-[500px] lg:max-h-[360px] object-contain group-hover:scale-101 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          onError={(e) => {
                            if (item.driveFallbackUrl) {
                              handleDriveImageError(e, item.driveFallbackUrl);
                            } else {
                              handleDriveImageError(e);
                            }
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Final Install Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-cyan-500 rounded-full" />
                    <h4 className="text-xs sm:text-sm font-display font-black text-white uppercase tracking-wider">
                      Final Install
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {VEHICLE_BRANDING_IMAGES.finalInstalls.map((item) => (
                      <div key={item.id} className="relative group w-full overflow-hidden rounded-xl bg-black/40 flex items-center justify-center">
                        <img
                          src={item.url}
                          alt={item.alt}
                          className="w-full h-auto max-h-[500px] lg:max-h-[360px] object-contain group-hover:scale-101 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          onError={(e) => {
                            if (item.driveFallbackUrl) {
                              handleDriveImageError(e, item.driveFallbackUrl);
                            } else {
                              handleDriveImageError(e);
                            }
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services Include Section */}
                <div className="space-y-6 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-cyan-500 rounded-full" />
                    <h3 className="text-base sm:text-lg font-display font-black text-white uppercase tracking-wider">
                      Services Include
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                    {brandingServices.map((service, index) => (
                      <div key={index} className="flex items-start gap-3 group">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center mt-0.5 group-hover:bg-cyan-500/25 transition-all">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-xs sm:text-sm text-zinc-300 font-light leading-normal group-hover:text-white transition-colors duration-200">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Integrated Get a Quote Action Area */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-cyan-950/20 via-transparent to-transparent p-5 sm:p-6 rounded-2xl border border-white/5">
                  <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-lg text-center sm:text-left">
                    All branding options are fully customized. We provide highly accurate, scaled digital concept mock-ups prior to raw film production and installation.
                  </p>
                  <button
                    onClick={() => onSelectService("Vehicle Branding & Decals")}
                    className="shrink-0 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-display font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer focus:outline-none shadow-lg shadow-cyan-500/20 hover:scale-105"
                    title="Get a Quote"
                  >
                    <span>Get a Quote</span>
                    <ChevronRight className="w-4 h-4 text-black" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
