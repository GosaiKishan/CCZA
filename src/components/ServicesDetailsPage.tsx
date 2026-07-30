import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ChevronRight, X, ArrowLeft, Check, Smartphone, ChevronDown } from "lucide-react";
import { servicesData, ServiceItem } from "../data/services";

interface ServicesDetailsPageProps {
  onBack: () => void;
  onSelectService: (serviceName: string) => void;
}

export default function ServicesDetailsPage({ onBack, onSelectService }: ServicesDetailsPageProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedTierFilter, setSelectedTierFilter] = useState<string>("All");
  const [expandedTiers, setExpandedTiers] = useState<string[]>([]);
  const [expandedCards, setExpandedCards] = useState<string[]>([]);

  const [windowWidth, setWindowWidth] = useState<number>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }
    return 1024;
  });

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = windowWidth >= 861;
  const isTablet = windowWidth >= 561 && windowWidth <= 860;
  const isMobile = windowWidth <= 560;

  const tiers = ["All", "Wash & Maintenance", "Protect & Restore", "Correction & Detail"];

  const getServiceTier = (service: ServiceItem): string => {
    if (["wash-wax", "engine-detail", "interior-valet", "windscreen-polish"].includes(service.id)) {
      return "Wash & Maintenance";
    }
    if (["leather-booster", "headlight-restoration", "body-kit-installation", "color-change-wrap"].includes(service.id)) {
      return "Protect & Restore";
    }
    return "Correction & Detail";
  };

  const excludedIds = [
    "maintenance-wash",
    "full-vehicle-ppf",
    "windscreen-ppf",
    "frontal-ppf",
    "headlight-ppf",
    "windscreen-ceramic",
    "rim-ceramic"
  ];

  const filteredServices = servicesData.filter(s => !excludedIds.includes(s.id));

  const tierFilteredServices = selectedTierFilter === "All"
    ? filteredServices
    : filteredServices.filter(s => getServiceTier(s) === selectedTierFilter);

  const toggleTier = (tierName: string) => {
    setExpandedTiers(prev => 
      prev.includes(tierName) 
        ? prev.filter(t => t !== tierName) 
        : [...prev, tierName]
    );
  };

  const toggleCard = (e: React.MouseEvent, cardId: string) => {
    e.stopPropagation();
    setExpandedCards(prev =>
      prev.includes(cardId)
        ? prev.filter(id => id !== cardId)
        : [...prev, cardId]
    );
  };

  const handleWhatsApp = (serviceName: string) => {
    const message = `Hi Cartel Clean! I would like to book/inquire about your "${serviceName}" service package. Let me know your available schedule!`;
    window.open(`https://wa.me/27646568846?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-8 group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-mono uppercase tracking-widest">Back to Studio</span>
          </button>
          
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white uppercase tracking-tighter">
              Other Detailing <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Services We Offer
              </span>
            </h1>
            <p className="text-zinc-400 max-w-2xl text-sm sm:text-base font-light leading-relaxed">
              Explore our comprehensive range of services. From high-end maintenance washes and surgical paint correction to self-healing Paint Protection Film (PPF) and nano ceramic coatings.
            </p>
          </div>
        </div>

        {/* Filter Chips (Desktop/Tablet) */}
        {(isDesktop || isTablet) && (
          <div className="flex flex-wrap gap-3 mb-10">
            {tiers.map((tier) => (
              <button
                key={tier}
                onClick={() => setSelectedTierFilter(tier)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  selectedTierFilter === tier
                    ? "bg-cyan-500 text-black font-black shadow-[0_0_15px_rgba(6,182,212,0.3)] border border-cyan-400"
                    : "bg-white/5 text-zinc-400 border border-white/5 hover:border-white/20 hover:text-white"
                }`}
              >
                {tier}
              </button>
            ))}
          </div>
        )}

        {/* Desktop/Tablet Grid View */}
        {(isDesktop || isTablet) && (
          <div className={`grid gap-6 ${isDesktop ? "grid-cols-3" : "grid-cols-2"}`}>
            <AnimatePresence mode="popLayout">
              {tierFilteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-[#0b0b0d] border border-white/5 rounded-3xl p-6 hover:border-cyan-500/20 transition-all duration-500 overflow-hidden shadow-md"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="text-[40px] font-display font-black text-white italic tracking-tighter uppercase leading-none">
                      {service.category.split(' ')[0]}
                    </span>
                  </div>

                  <div className="relative z-10 space-y-4">
                    <div>
                      <h3 className="text-xl font-display font-black text-white uppercase tracking-tight group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-xs text-zinc-500 font-light mt-1.5 line-clamp-2 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                      <div>
                        {service.pricing.startingFrom === "Enquire Now" || service.pricing.startingFrom === "Get a Quote" ? (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleWhatsApp(service.name);
                            }}
                            className="flex flex-col text-left group/enquire cursor-pointer focus:outline-none"
                            title="Click to enquire on WhatsApp"
                          >
                            <p className="text-[9px] uppercase text-zinc-600 font-mono tracking-widest group-hover/enquire:text-[#25D366] transition-colors">Pricing</p>
                            <p className="text-lg font-display font-black text-cyan-400 group-hover/enquire:text-[#25D366] transition-colors flex items-center gap-1">
                              {service.pricing.startingFrom}
                              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-ping ml-0.5" />
                            </p>
                          </button>
                        ) : (
                          <>
                            <p className="text-[9px] uppercase text-zinc-600 font-mono tracking-widest">Starting from</p>
                            <p className="text-lg font-display font-black text-white">
                              {service.pricing.type === "tiered" ? service.pricing.tiers?.small : service.pricing.startingFrom}
                            </p>
                          </>
                        )}
                      </div>
                      <button
                        onClick={() => setSelectedService(service)}
                        className="flex items-center gap-2 text-[10px] font-display font-black uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors cursor-pointer"
                      >
                        Learn more <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Mobile Accordion View (Mobile Only) */}
        {isMobile && (
          <div className="space-y-4">
            {["Wash & Maintenance", "Protect & Restore", "Correction & Detail"].map((tierName) => {
              const servicesInTier = filteredServices.filter(s => getServiceTier(s) === tierName);
              const isExpanded = expandedTiers.includes(tierName);
              
              return (
                <div 
                  key={tierName}
                  className="border border-white/5 bg-[#08080a] rounded-2xl overflow-hidden shadow-lg"
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleTier(tierName)}
                    className="w-full px-5 py-4 flex items-center justify-between bg-white/[0.02] active:bg-white/[0.05] transition-colors cursor-pointer text-left"
                  >
                    <span className="text-sm font-display font-black text-white uppercase tracking-wider">
                      {tierName}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-zinc-400 transition-transform duration-200 ${
                        isExpanded ? "rotate-180 text-cyan-400" : "rotate-0"
                      }`}
                    />
                  </button>
                  
                  {/* Accordion Content with smooth transition */}
                  <div
                    className="transition-[max-height] duration-250 ease-out overflow-hidden"
                    style={{ maxHeight: isExpanded ? "2000px" : "0px" }}
                  >
                    <div className="p-4 space-y-4 border-t border-white/5">
                      {servicesInTier.map((service) => {
                        const isCardExpanded = expandedCards.includes(service.id);
                        return (
                          <div
                            key={service.id}
                            onClick={(e) => toggleCard(e, service.id)}
                            className="bg-[#0b0b0d] border border-white/10 rounded-xl p-4 flex flex-col w-full text-left cursor-pointer transition-colors duration-200 active:bg-white/[0.02]"
                            role="button"
                            tabIndex={0}
                            style={{ minHeight: "44px" }}
                          >
                            {/* Card Header Row */}
                            <div className="flex items-center justify-between gap-4">
                              <div className="flex-1">

                                <h4 className="text-sm font-display font-black text-white uppercase tracking-tight">
                                  {service.name}
                                </h4>
                              </div>
                              <div className="flex items-center gap-2.5">
                                <div className="text-right">
                                  {service.pricing.startingFrom === "Enquire Now" || service.pricing.startingFrom === "Get a Quote" ? (
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleWhatsApp(service.name);
                                      }}
                                      className="text-right focus:outline-none group/mobenq cursor-pointer"
                                    >
                                      <span className="text-[8px] uppercase text-zinc-600 font-mono tracking-widest block leading-none mb-0.5 group-hover/mobenq:text-[#25D366] transition-colors">Pricing</span>
                                      <span className="text-xs font-display font-black text-cyan-400 group-hover/mobenq:text-[#25D366] transition-colors flex items-center justify-end gap-1">
                                        {service.pricing.startingFrom}
                                        <span className="w-1 h-1 rounded-full bg-[#25D366] animate-pulse" />
                                      </span>
                                    </button>
                                  ) : (
                                    <>
                                      <span className="text-[8px] uppercase text-zinc-600 font-mono tracking-widest block leading-none mb-0.5">Starts from</span>
                                      <span className="text-xs font-display font-black text-cyan-400">
                                        {service.pricing.type === "tiered" ? service.pricing.tiers?.small : service.pricing.startingFrom}
                                      </span>
                                    </>
                                  )}
                                </div>
                                <ChevronDown 
                                  className={`w-4 h-4 text-zinc-500 transition-transform duration-200 ${
                                    isCardExpanded ? "rotate-180 text-cyan-400" : "rotate-0"
                                  }`}
                                />
                              </div>
                            </div>
                            
                            {/* Expandable Content (Description, Includes, CTA) */}
                            <div
                              className="transition-[max-height,opacity] duration-250 ease-out overflow-hidden"
                              style={{ 
                                maxHeight: isCardExpanded ? "800px" : "0px",
                                opacity: isCardExpanded ? 1 : 0
                              }}
                            >
                              <div className="mt-3 pt-3 border-t border-white/5 space-y-3.5">
                                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                                  {service.description}
                                </p>
                                
                                <div className="space-y-2">
                                  <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 block">Includes:</span>
                                  <ul className="grid grid-cols-1 gap-1.5 pl-1">
                                    {service.includes.map((inc, i) => (
                                      <li key={i} className="flex items-start gap-2 text-xs text-zinc-400 font-light leading-snug">
                                        <span className="text-cyan-400 mt-0.5 flex-shrink-0">•</span>
                                        <span>{inc}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                
                                <div className="pt-2 flex items-center justify-between gap-4 text-xs">
                                  <div className="flex flex-col">
                                    <span className="text-[8px] uppercase text-zinc-600 font-mono tracking-wider">Duration</span>
                                    <span className="text-zinc-300 font-medium text-[11px] uppercase">{service.duration}</span>
                                  </div>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleWhatsApp(service.name);
                                    }}
                                    className="px-4 py-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 active:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/30 font-display font-bold uppercase tracking-widest text-[9px] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                                  >
                                    <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-pulse" />
                                    Book/Inquire
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Modal Overlay */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-black/95 backdrop-blur-xl"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-4xl bg-[#0b0b0d] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto custom-scrollbar"
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all z-20 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="p-8 sm:p-12 space-y-12">
                  {/* Modal Header */}
                  <div className="space-y-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tighter">
                      {selectedService.name}
                    </h2>
                    <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
                      {selectedService.description}
                    </p>
                  </div>

                  {/* Modal Pricing */}
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

                  {/* Modal What's Included */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                      <span className="w-1.5 h-6 bg-cyan-500 rounded-full"></span>
                      <h3 className="text-base sm:text-lg font-display font-black text-white uppercase tracking-wider">Service Includes</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                      {selectedService.includes.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 group">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Modal Footer Actions */}
                  <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-2xl bg-white/5">
                        <Smartphone className="w-5 h-5 text-zinc-400" />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono uppercase text-zinc-500">Duration Estimate</p>
                        <p className="text-sm font-display font-bold text-white uppercase tracking-wider">{selectedService.duration}</p>
                      </div>
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
      </div>
    </div>
  );
}
