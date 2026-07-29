import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onExploreServices: () => void;
  onBookNow: () => void;
}

const heroData = {
  title: "Reflect Unmatched Perfection",
  highlight: "Perfection",
  desc: "PPF, PAINT CORRECTION & CERAMIC COATING DETAILING SERVICES IN JOHANNESBURG"
};

export default function Hero({ onExploreServices, onBookNow }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);
  const [heroImageSrc, setHeroImageSrc] = useState("https://lh3.googleusercontent.com/d/1YNwXw443olMUIu6cMaFAYf0cRCbEu4Ew");
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayText(heroData.title.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === heroData.title.length) {
        clearInterval(interval);
      }
    }, 75);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" className="relative flex items-center justify-center overflow-hidden bg-black py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Background with subtle hero image overlay & ambient glow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 h-[120%] w-full bg-black"
          style={{ 
            y: scrollY * 0.12
          }}
        >
          {/* Subtle background image texture */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20 filter blur-[2px] mix-blend-luminosity"
            style={{ backgroundImage: `url(${heroImageSrc})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black" />

          {/* White elegant ambient glow */}
          <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          
          {/* Text and Actions */}
          <div className="w-full max-w-3xl space-y-6 text-center flex flex-col items-center">
            <div className="space-y-4 sm:space-y-6 text-center flex flex-col items-center">
              {/* Cinematic Title Entrance with slight scale-up & slide-up */}
              <motion.h2 
                initial={{ opacity: 0, y: 35, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                onClick={() => {
                  const element = document.getElementById("hero");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-black tracking-tight text-white leading-[1.05] uppercase cursor-pointer transition-colors select-none group text-center"
                title="Scroll to top"
              >
                {displayText.split(" ").map((word, i) => {
                  if (word.includes(heroData.highlight)) {
                    return <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 block sm:inline"> {word} </span>;
                  }
                  return <span key={i} className="group-hover:text-zinc-200 transition-colors"> {word}</span>;
                })}
              </motion.h2>

              {/* Cinematic Description Fade-in */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed text-center"
              >
                {heroData.desc}
              </motion.p>
            </div>

            {/* CTA Buttons Row with subtle cinematic scale-up */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4 pt-2 justify-center items-center w-full sm:w-auto"
            >
              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto bg-white hover:bg-zinc-200 text-black font-display font-bold uppercase tracking-widest px-8 py-3.5 rounded-xl text-xs transition-all duration-300 shadow-xl shadow-white/5 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore Packages</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 text-black" />
              </button>
              
              <button
                onClick={onBookNow}
                className="w-full sm:w-auto bg-[#111113] hover:bg-[#161619] text-white border border-white/20 hover:border-white font-display uppercase tracking-widest font-bold px-8 py-3.5 rounded-xl text-xs transition-all duration-300 shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Call now</span>
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
