import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppFAB() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  // Show a welcoming visual tooltip after 3 seconds, unless already dismissed
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasDismissed) {
        setShowTooltip(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [hasDismissed]);

  const whatsappUrl = "https://wa.me/27646568846?text=Hi%20Cartel%20Clean%21%20I%20would%20like%20to%20enquire%20about%20your%20detailing%20and%20vehicle%20enhancement%20services.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Dynamic Welcome Tooltip Card */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="pointer-events-auto bg-[#111113] border border-white/10 text-white rounded-xl p-3.5 pr-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)] max-w-[240px] text-xs relative flex flex-col gap-1 select-none backdrop-blur-md"
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
                setHasDismissed(true);
              }}
              className="absolute top-2 right-2 p-0.5 text-zinc-400 hover:text-white rounded-full hover:bg-white/5 transition-all cursor-pointer"
              aria-label="Close message"
            >
              <X className="w-3 h-3" />
            </button>

            <p className="text-zinc-300 font-light leading-relaxed">
              Have questions? Inquiry live via Whatsapp for immediate responses.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Pulse & Floating Button Area */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.8, type: "spring", damping: 15 }}
        className="pointer-events-auto relative group"
        onMouseEnter={() => {
          if (!hasDismissed) {
            setShowTooltip(true);
          }
        }}
      >
        {/* Pulsating background circle representing radio status radar */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/25 blur-[4px] scale-110 group-hover:scale-125 animate-ping opacity-60 transition-all pointer-events-none" />

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_32px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.55)] transform hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer select-none border border-white/10"
          aria-label="Direct WhatsApp Inquiry"
        >
          <i className="fa-brands fa-whatsapp text-2xl"></i>
        </a>
      </motion.div>

    </div>
  );
}
