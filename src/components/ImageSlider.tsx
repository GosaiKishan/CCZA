import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const images = [
  'https://lh3.googleusercontent.com/d/1YNwXw443olMUIu6cMaFAYf0cRCbEu4Ew',
  'https://lh3.googleusercontent.com/d/1KUt_tPdgifQY4tuXOPaWNArK1GKwwx_u',
  'https://lh3.googleusercontent.com/d/1lxAjx4UDLmOtZKzFGNdLD61u78W12dh5',
  'https://lh3.googleusercontent.com/d/18rer-ZIL81iru54-QXVjqgJiG_OXqsc4',
  'https://lh3.googleusercontent.com/d/15V1lJ8mTfz3rjcBLWa5DvCad0vCB67PE',
  'https://lh3.googleusercontent.com/d/1o3ZORFzDE90pA9FFG05_xRRa0yhdCYH2',
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-[#111113]">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt="Studio Work"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="w-full h-auto object-contain"
        />
      </AnimatePresence>
    </div>
  );
}
