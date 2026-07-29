import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DiagonalDivider from "./DiagonalDivider";

const faqs = [
  {
    question: "How long does a full detail take?",
    answer: "A standard full detail typically takes 6 to 8 hours depending on the condition of the vehicle. For multi-stage paint correction or Concours prep, we may require the vehicle for 2 to 5 days."
  },
  {
    question: "What is a Ceramic Coating and why do I need it?",
    answer: "A ceramic coating is a liquid polymer that chemically bonds to your vehicle's factory paint, creating a layer of protection. It provides hydrophobic properties, making the car much easier to clean, and protects against UV damage, bird droppings, and minor chemical stains."
  },
  {
    question: "Does Paint Protection Film (PPF) damage the original paint?",
    answer: "No, high-quality PPF actually preserves and protects the original paint. When applied and removed by professionals, it leaves no residue and keeps the factory finish underneath pristine."
  },
  {
    question: "Do you offer mobile detailing services?",
    answer: "Yes, we offer convenient mobile detailing services for maintenance washes and interior care at your location. For specialized services like paint correction, ceramic coatings, and PPF installations, we highly recommend visiting our controlled Johannesburg studio to ensure absolute perfection free from environmental contaminants like dust or direct sunlight."
  },
  {
    question: "How often should I have my car detailed?",
    answer: "We recommend a full detail every 4-6 months to maintain the paint's health. For vehicles with ceramic coatings, a maintenance wash every few weeks is ideal to keep the coating performing at its best."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="pb-24 bg-black scroll-mt-20 relative overflow-hidden">
      <DiagonalDivider topBg="#000000" bottomBg="#000000" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12 md:pt-16">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Everything you need to know about our detailing and protection services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-[#111113] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <h3 className="text-white font-bold font-display text-sm sm:text-base">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-cyan-500 shrink-0 ml-4" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-zinc-400 text-sm font-light leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
