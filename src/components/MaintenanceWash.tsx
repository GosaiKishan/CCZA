import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

interface MaintenanceWashProps {
  onSelectService: (serviceName: string) => void;
}

const washImage = {
  url: "https://lh3.googleusercontent.com/d/1MQGdyZEy84rnYuL-6zyEpBz5dUELHRcA",
  alt: "Maintenance Wash Service"
};

export default function MaintenanceWash({ onSelectService }: MaintenanceWashProps) {
  const includesList = [
    "Safe pre-wash and hand wash",
    "Wheels, tyres and wheel arches thoroughly cleaned",
    "Door jambs cleaned",
    "Exterior dried using premium microfiber towels",
    "Tyres dressed",
    "Interior vacuum",
    "Dashboard and interior surfaces wiped down",
    "Interior and exterior glass cleaned",
    "Final quality inspection"
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="maintenance-wash">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Title, Paragraph, and Service Includes */}
          <div className="lg:col-span-7 space-y-8 lg:text-left flex flex-col lg:items-start order-1">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight leading-none">
                Maintenance <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Wash Service</span>
              </h2>
            </div>
            
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
              Our Maintenance Wash is a professional detailing service designed to safely maintain the appearance and condition of your vehicle. Suitable for all vehicles, whether ceramic coated, PPF protected or unprotected, this service utilises premium products and safe wash methods to minimise the risk of swirl marks while effectively removing dirt, road grime and environmental contaminants. Regular maintenance washing helps preserve your vehicle's finish, enhances its appearance and protects its long-term value.
            </p>

            {/* Service Includes Section aligned with paragraph */}
            <div className="w-full space-y-8 pt-10 border-t border-white/5">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-6 bg-cyan-500 rounded-full"></span>
                <h3 className="text-base sm:text-lg font-display font-black text-white uppercase tracking-wider">
                  Service Includes:
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
                {includesList.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center mt-0.5 group-hover:bg-cyan-500/25 transition-all">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-xs sm:text-sm text-zinc-300 font-light leading-normal group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-zinc-500 font-light leading-relaxed pt-2">
                * Rates vary depending on vehicle size and condition. Available as a drop-off service at our studio.
              </p>
            </div>
          </div>

          {/* Right Column: Static Featured Image */}
          <div className="lg:col-span-5 order-2 lg:mt-16 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-3 sm:p-4 rounded-[2.5rem] bg-[#0b0b0d] border border-white/10 flex flex-col justify-center relative overflow-hidden shadow-2xl min-h-[380px] sm:min-h-[440px]"
            >
              <div className="relative z-10 h-full w-full min-h-[360px] sm:min-h-[410px] rounded-3xl overflow-hidden bg-black flex items-center justify-center">
                <img 
                  src={washImage.url} 
                  alt={washImage.alt} 
                  className="w-full h-full object-cover rounded-3xl"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle dark vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
              </div>

              {/* Decorative background ambient glow */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}

