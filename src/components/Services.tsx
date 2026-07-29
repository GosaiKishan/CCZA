import React, { useState } from "react";
import { 
  ChevronRight, 
  X, 
  Check, 
  Clock, 
  Car, 
  Shield, 
  Info,
  Search
} from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { servicesData, categories, ServiceItem } from "../data/services";

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

// Category style helper
const getCategoryDetails = (category: string) => {
  return {
    accent: "text-cyan-400",
    bgAccent: "bg-cyan-500/10",
    borderAccent: "border-cyan-500/20",
    hoverBorder: "hover:border-cyan-500/30"
  };
};

interface ServiceCardProps {
  key?: string | number;
  service: ServiceItem;
  onClick: () => void;
}

function ServiceCard({ service, onClick }: ServiceCardProps) {
  const styles = getCategoryDetails(service.category);
  
  // Track mouse coordinates relative to the card element
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth coordinates transition using a fine-tuned spring
  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 18 });
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 18 });

  // Map normalized coordinate ranges [-0.5, 0.5] to a subtle, classy 3D tilt range [-10deg, 10deg]
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalized position from 0 to 1
    const mouseX = (event.clientX - rect.left) / width;
    const mouseY = (event.clientY - rect.top) / height;

    // Shift origin to center [-0.5, 0.5]
    x.set(mouseX - 0.5);
    y.set(mouseY - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: "1000px" }} className="w-full h-full">
      <motion.div
        layout
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        className={`group cursor-pointer rounded-2xl bg-[#111113] border border-white/5 overflow-hidden flex flex-col justify-between transition-all duration-300 ${styles.hoverBorder} hover:shadow-2xl hover:shadow-white/5 p-6 relative w-full h-full`}
      >
        <div 
          style={{ transform: "translateZ(25px)" }} 
          className="space-y-4 z-10 relative transition-transform duration-300"
        >
          <div>
            <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-zinc-300 transition-colors">
              {service.name}
            </h3>
            <p className="text-xs text-zinc-400 font-light leading-relaxed line-clamp-2">
              {service.subtitle}
            </p>
          </div>
        </div>

        <div 
          style={{ transform: "translateZ(15px)" }} 
          className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-all duration-300 z-10 relative"
        >
          <span className="text-[10px] font-mono font-medium text-white">
            {service.pricing.type === "tiered" 
              ? `From ${service.pricing.tiers?.small}` 
              : (service.pricing.startingFrom === "Enquire Now" || service.pricing.startingFrom === "Get a Quote"
                ? service.pricing.startingFrom
                : `From ${service.pricing.startingFrom}`)}
          </span>
          <div className="flex items-center gap-1">
            <span>Learn more</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        <div className={`absolute -bottom-24 -right-24 w-48 h-48 ${styles.bgAccent} rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
      </motion.div>
    </div>
  );
}

export default function Services({ onSelectService }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleBookNow = (serviceName: string) => {
    setSelectedService(null);
    onSelectService(serviceName);
  };

  const handleWhatsApp = (serviceName: string) => {
    window.open(
      `https://wa.me/27646568846?text=${encodeURIComponent(
        `Hi Cartel Clean 🇿🇦! I'm interested in booking the ${serviceName} service.`
      )}`,
      "_blank"
    );
  };

  // Filter logic
  const excludedIds = [
    "maintenance-wash",
    "headlight-ppf",
    "full-vehicle-ppf",
    "frontal-ppf",
    "windscreen-ppf",
    "windscreen-ceramic",
    "rim-ceramic"
  ];

  const filteredServices = servicesData.filter((service) => {
    if (excludedIds.includes(service.id)) return false;
    
    const matchesTab = activeTab === "all" || service.category === activeTab;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section id="services" className="py-24 bg-black scroll-mt-20 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12 md:pt-16">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="space-y-4 max-w-2xl">
            <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-500 font-bold block bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-full w-fit shadow-[0_0_10px_rgba(34,211,238,0.1)]">
              Accredited Studio Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
              Bespoke Detailing & Protection
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
              Explore our comprehensive range of services. From high-end maintenance washes and 
              surgical paint correction to self-healing Paint Protection Film (PPF) and nano ceramic coatings.
            </p>
          </div>
          

        </div>

        {/* Search and Tabs Controller */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-[#111113]/80 backdrop-blur-md p-4 rounded-2xl border border-white/5 mb-10">
          {/* Tabs */}
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto md:flex-wrap pb-2 md:pb-0 scrollbar-none -mx-2 px-2 md:mx-0 md:px-0 whitespace-nowrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-display font-bold uppercase tracking-wider transition-all duration-300 shrink-0 ${
                  activeTab === cat.id
                    ? "bg-white text-black shadow-lg"
                    : "bg-[#161619] text-zinc-400 border border-white/5 hover:text-white hover:border-white/10"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <Search className="h-4 w-4 text-zinc-500" />
            </span>
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#161619] border border-white/5 hover:border-white/10 focus:border-cyan-500/50 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder-zinc-500 focus:outline-none transition-all font-light"
            />
          </div>
        </div>

        {/* Services Grid (4-4-4-4-3 services per a row on large screen) */}
        {filteredServices.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex"
              >
                <ServiceCard
                  service={service}
                  onClick={() => setSelectedService(service)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#111113] rounded-3xl border border-white/5">
            <p className="text-zinc-500 font-light">No services found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm" 
              onClick={() => setSelectedService(null)}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl bg-[#111113] rounded-3xl border border-white/10 shadow-2xl overflow-hidden my-auto flex flex-col max-h-[90vh]"
            >
              
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto overflow-x-hidden p-6 sm:p-10 space-y-10">
                
                {/* Modal Section 1: Header */}
                <div className="flex flex-col gap-3">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-display font-black text-white leading-tight">{selectedService.name}</h2>
                    <p className="text-zinc-400 text-sm mt-1 font-light">{selectedService.subtitle}</p>
                  </div>
                </div>

                {/* Modal Section 2: Pricing */}
                <div className="space-y-4">
                  <div className="max-w-md mx-auto bg-[#161619] border border-white/20 rounded-2xl p-6 text-center shadow-[0_0_30px_rgba(255,255,255,0.02)]">
                    <span className="text-[10px] uppercase text-zinc-500 tracking-widest font-mono">
                      {selectedService.pricing.startingFrom === "Enquire Now" || selectedService.pricing.startingFrom === "Get a Quote" 
                        ? "Pricing & Booking" 
                        : (selectedService.pricing.type === "tiered" ? "Starting Price Point" : "Bespoke Treatment Price")}
                    </span>
                    <p className="text-[10px] text-zinc-400 mt-1 mb-4 font-light">
                      Final pricing depends on vehicle size, condition, and any additional requirement.
                    </p>
                    <div className="pt-4 border-t border-white/5">
                      {selectedService.pricing.startingFrom === "Enquire Now" || selectedService.pricing.startingFrom === "Get a Quote" ? (
                        <button
                          onClick={() => handleWhatsApp(selectedService.name)}
                          className="w-full text-center group/enq block cursor-pointer focus:outline-none"
                          title="Click to enquire on WhatsApp"
                        >
                          <p className="text-4xl font-display font-black text-cyan-400 group-hover/enq:text-[#25D366] transition-all duration-300">
                            {selectedService.pricing.startingFrom}
                          </p>
                          <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-zinc-500 mt-2 group-hover/enq:text-[#25D366]/80 transition-colors">
                            Click to Chat on WhatsApp
                            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                          </span>
                        </button>
                      ) : (
                        <>
                          <span className="text-[9px] uppercase text-zinc-500 tracking-wider font-mono">Starting from</span>
                          <p className="text-4xl font-display font-black text-white mt-1.5">
                            {selectedService.pricing.type === "tiered" 
                              ? selectedService.pricing.tiers?.small 
                              : selectedService.pricing.startingFrom}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Modal Section 3: What's Included */}
                <div className="space-y-4">
                  <h3 className="text-xs font-display font-bold text-white uppercase tracking-widest border-b border-white/5 pb-4">What's Included</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedService.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300 font-light">
                        <span className={`mt-0.5 p-0.5 rounded-full ${getCategoryDetails(selectedService.category).bgAccent} ${getCategoryDetails(selectedService.category).accent} shrink-0`}>
                          <Check className="w-3 h-3" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modal Section 4: Service Details Row */}
                <div className="bg-[#161619] border border-white/5 rounded-2xl p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
                  <div className="flex flex-col items-center text-center gap-2 pt-4 sm:pt-0 first:pt-0">
                    <Clock className="w-5 h-5 text-zinc-500" />
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-zinc-500 mb-0.5 font-mono">Duration</p>
                      <p className="text-sm font-bold text-white">{selectedService.duration}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2 pt-4 sm:pt-0">
                    <Car className="w-5 h-5 text-zinc-500" />
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-zinc-500 mb-0.5 font-mono">Finish</p>
                      <p className="text-sm font-bold text-white">{selectedService.finish}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2 pt-4 sm:pt-0">
                    <Shield className="w-5 h-5 text-zinc-500" />
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-zinc-500 mb-0.5 font-mono">Warranty</p>
                      <p className="text-sm font-bold text-white">{selectedService.warranty}</p>
                    </div>
                  </div>
                </div>

                {/* Modal Section 5: Ideal For */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-white" />
                    <h3 className="text-xs font-display font-bold text-white uppercase tracking-widest">Ideal For</h3>
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed font-light">
                    {selectedService.idealFor}
                  </p>
                </div>

                {/* Modal Section 6: CTA Footer */}
                <div className="pt-8 border-t border-white/5 flex flex-col items-center text-center space-y-6">
                  <div>
                    <h3 className="text-xl font-display font-black text-white uppercase mb-2">Ready to Book?</h3>
                    <p className="text-zinc-400 text-xs sm:text-sm font-light">Contact our accredited studio to reserve your booking slot for {selectedService.name}.</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button 
                      onClick={() => handleWhatsApp(selectedService.name)}
                      className="w-full sm:w-auto px-8 py-4 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 font-display font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-[#25D366]/20 transition-colors flex justify-center items-center gap-2 cursor-pointer"
                    >
                      <span className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse" />
                      WhatsApp Us
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
