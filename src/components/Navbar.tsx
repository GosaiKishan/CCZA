import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, Instagram, MapPin, Menu, X, Check, ChevronDown } from "lucide-react";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoHasError, setLogoHasError] = useState(false);
  const [logoSrc, setLogoSrc] = useState("https://lh3.googleusercontent.com/d/1womKO9xZ4DmMFHYLwhnH7bPkvAkgml_a");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About Us", id: "about" },
    { label: "Paint Protection Film", id: "ppf" },
    { label: "Our Services", id: "services" },
    { label: "Contact Us", id: "contact" },
  ];

  const serviceItems = [
    { label: "Paint Protection (PPF)", id: "ppf", description: "Self-healing ultra-gloss armor shielding" },
    { label: "Ceramic Coatings", id: "ceramic", description: "Labocosmetica dual-layer high gloss barriers" },
    { label: "Maintenance Wash", id: "maintenance-wash", description: "Hygienic dual-bucket touchless exterior care" },
    { label: "Vehicle Branding", id: "vehicle-branding", description: "High-impact custom business fleet graphics" },
    { label: "Detailing Packages", id: "services", description: "Stage-polishing & interior valet suites" }
  ];

  const isServiceActive = ["services", "ppf", "ceramic", "maintenance-wash", "vehicle-branding"].includes(activeSection);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      {/* Top Banner Contact Info */}
      <div className="hidden md:flex bg-black border-b border-white/5 text-[11px] py-2 px-6 text-zinc-400 justify-end items-center relative z-50">
        <div className="flex items-center space-x-4">
          <a
            href="https://www.instagram.com/cartelclean_za/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-white transition-colors uppercase tracking-wider"
          >
            <Instagram className="w-3.5 h-3.5 text-white/50" />
            @cartelclean_za
          </a>
        </div>
      </div>

      {/* Main Bar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-md border-b border-white/10 pt-4 pb-4 md:pt-1 md:pb-2 shadow-[0_4px_30px_rgba(0,0,0,0.85)]"
            : "bg-transparent pt-6 pb-6 md:pt-2 md:pb-4"
        }`}
      >
        <div className="max-w-full mx-auto px-4 md:px-6 lg:px-8 xl:px-12 flex justify-between items-center relative">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 focus:outline-none z-50"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo - Placeholder for PNG Logo */}
          <button
            onClick={() => handleNavClick("hero")}
            className="flex items-center group cursor-pointer focus:outline-none absolute left-1/2 -translate-x-1/2 md:relative md:left-auto md:translate-x-0 md:-ml-10 lg:-ml-14 xl:-ml-18 z-10"
            id="nav-logo-btn"
          >
            {!logoHasError ? (
              <img 
                src={logoSrc} 
                alt="Cartel Clean Logo" 
                referrerPolicy="no-referrer"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="h-auto w-[210px] sm:w-[260px] md:w-[320px] lg:w-[360px] xl:w-[410px] max-h-18 sm:max-h-22 md:max-h-28 lg:max-h-32 xl:max-h-36 object-contain transition-all duration-300 group-hover:scale-[1.03] filter brightness-[1.2] contrast-[1.15] select-none pointer-events-none drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]"
                style={{ mixBlendMode: "screen" }}
                onError={() => {
                  if (logoSrc.includes("googleusercontent.com")) {
                    setLogoSrc("https://drive.google.com/thumbnail?id=1womKO9xZ4DmMFHYLwhnH7bPkvAkgml_a&sz=w1000");
                  } else if (logoSrc.includes("thumbnail")) {
                    setLogoSrc("https://docs.google.com/uc?export=view&id=1womKO9xZ4DmMFHYLwhnH7bPkvAkgml_a");
                  } else {
                    setLogoHasError(true);
                  }
                }}
              />
            ) : (
              <div className="text-left pl-2">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-display font-extrabold tracking-[0.25em] uppercase text-white flex items-center gap-1">
                  Cartel <span className="font-black italic text-cyan-400 shrink-0">Clean</span>
                </h1>
              </div>
            )}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center ml-auto space-x-2 lg:space-x-5 xl:space-x-7">
            {navItems.map((item) => {
              const isActive = item.id === 'services' ? isServiceActive : activeSection === item.id;

              if (item.id === 'services') {
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`group px-3 py-2.5 rounded-md text-[11px] lg:text-xs xl:text-[13px] uppercase tracking-[0.18em] lg:tracking-[0.22em] font-black transition-all flex items-center gap-1.5 cursor-pointer focus:outline-none relative ${
                        isServiceActive
                          ? "text-white"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      <span className="relative">
                        {item.label}
                        <span className={`absolute -bottom-1 left-0 right-0 h-[2px] bg-cyan-400 origin-left transition-transform duration-300 ${
                          isServiceActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`} />
                      </span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${dropdownOpen ? "rotate-180 text-white" : "text-zinc-400"}`} />
                    </button>
                    
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-1/2 -translate-x-1/2 mt-1 w-72 bg-black border border-white/10 rounded-2xl p-3 shadow-[0_10px_40px_rgba(0,0,0,0.95)] z-50 text-left"
                        >
                          <div className="space-y-1">
                            {serviceItems.map((subItem) => (
                              <button
                                key={subItem.id}
                                onClick={() => {
                                  setDropdownOpen(false);
                                  handleNavClick(subItem.id);
                                }}
                                className="w-full text-left p-2 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer"
                              >
                                <p className="text-xs font-display font-black uppercase tracking-wider text-white group-hover:text-cyan-400 transition-colors">
                                  {subItem.label}
                                </p>
                                <p className="text-[10px] text-zinc-400 font-light mt-0.5 line-clamp-1">
                                  {subItem.description}
                                </p>
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              if (item.id === 'contact') {
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-5 py-2.5 rounded-lg font-display text-[11px] lg:text-xs xl:text-[13px] uppercase tracking-[0.18em] lg:tracking-[0.22em] font-black transition-all duration-300 cursor-pointer border ${
                      activeSection === 'contact'
                        ? "border-cyan-500 bg-cyan-500/15 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.25)]"
                        : "border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`group px-3 py-2.5 rounded-md text-[11px] lg:text-xs xl:text-[13px] uppercase tracking-[0.18em] lg:tracking-[0.22em] font-black transition-all cursor-pointer focus:outline-none relative ${
                    isActive
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <span className="relative">
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 right-0 h-[2px] bg-cyan-400 origin-left transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`} />
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Spacer for mobile layout alignment */}
          <div className="w-10 md:hidden pointer-events-none" />
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-black border-b border-white/10"
            >
              <div className="px-4 py-5 space-y-3">
                {navItems.map((item) => {
                  if (item.id === 'services') {
                    return (
                      <div key={item.id} className="space-y-1">
                        <button
                          onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                          className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-lg text-base sm:text-lg font-bold uppercase tracking-wider transition-colors ${
                            isServiceActive
                              ? "text-white bg-white/10 border-l-2 border-white"
                              : "text-zinc-400 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <span>{item.label}</span>
                          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileDropdownOpen ? "rotate-180" : ""}`} />
                        </button>
                        
                        <AnimatePresence>
                          {mobileDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 pr-2 py-1 space-y-1 overflow-hidden"
                            >
                              {serviceItems.map((subItem) => (
                                <button
                                  key={subItem.id}
                                  onClick={() => {
                                    setMobileDropdownOpen(false);
                                    handleNavClick(subItem.id);
                                  }}
                                  className="block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium uppercase tracking-wider text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
                                >
                                  {subItem.label}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`block w-full text-left px-4 py-3 rounded-lg text-base sm:text-lg font-bold uppercase tracking-wider transition-colors ${
                        item.id === 'contact'
                          ? "border border-white/20 bg-white/10 text-white"
                          : activeSection === item.id
                            ? "text-white bg-white/10 border-l-2 border-white"
                            : "text-zinc-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
