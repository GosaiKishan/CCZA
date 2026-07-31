import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Maximize2, X, Sparkles, Image as ImageIcon } from "lucide-react";
import { handleDriveImageError } from "../utils/driveImage";

const galleryImages = [
  { id: 1, url: "https://lh3.googleusercontent.com/d/14hHypM89VYtdNdhe6xLI8_0TyixJu2wl", title: "Detailing Work Showcase 1" },
  { id: 2, url: "https://lh3.googleusercontent.com/d/1m4zd6FOYWXRcw_PvZ8xbkT-Lt3-QrDx_", title: "Detailing Work Showcase 2" },
  { id: 3, url: "https://lh3.googleusercontent.com/d/1-ZxpdXY5Tmv8D-9-CepV9p6iYEMWk7XW", title: "Detailing Work Showcase 3" },
  { id: 4, url: "https://lh3.googleusercontent.com/d/1ijEdzluib4yVqu_1qapoOHroYGDKslve", title: "Detailing Work Showcase 4" },
  { id: 5, url: "https://lh3.googleusercontent.com/d/19G_KGLRavvNQgFsALUvW41C-15MyVUdn", title: "Detailing Work Showcase 5" },
  { id: 6, url: "https://lh3.googleusercontent.com/d/1aXOJl4b60Oj94uqz767x5EEEwFVTHzE-", title: "Detailing Work Showcase 6" },
  { id: 7, url: "https://lh3.googleusercontent.com/d/1wiKO-IEQCqGxIlaFC5rCa7tD7mH3_a_c", title: "Detailing Work Showcase 7" },
  { id: 8, url: "https://lh3.googleusercontent.com/d/12xrE827wlVvMUu7IcHMb2xgUFIwcHbjA", title: "Detailing Work Showcase 8" },
  { id: 9, url: "https://lh3.googleusercontent.com/d/1s3A9TLyIZCrg_YuNoBUhQZsdjd79cKHx", title: "Detailing Work Showcase 9" },
  { id: 10, url: "https://lh3.googleusercontent.com/d/1ketDAL9OWc_SfYxC4gy9WR4SI0C8VHPh", title: "Detailing Work Showcase 10" },
  { id: 11, url: "https://lh3.googleusercontent.com/d/1RXqlCktM6Ie6lU6PZoRDMqylXlY8dJYe", title: "Detailing Work Showcase 11" },
  { id: 12, url: "https://lh3.googleusercontent.com/d/1RELc01KA6k8ZacYBih6oLtJK2rQE6RE_", title: "Detailing Work Showcase 12" },
  { id: 13, url: "https://lh3.googleusercontent.com/d/1iVsaYRk2FTB3LW0Wd1wGnocHo3q6w1_Q", title: "Detailing Work Showcase 13" },
  { id: 14, url: "https://lh3.googleusercontent.com/d/16r_TQ64L0f4jq_JiZIez6mZj-sPL5jzT", title: "Detailing Work Showcase 14" },
  { id: 15, url: "https://lh3.googleusercontent.com/d/1HI10bwsQHmNEKkMKRAKxFa-6VZmJ6mEO", title: "Detailing Work Showcase 15" },
  { id: 16, url: "https://lh3.googleusercontent.com/d/1T3Rw6oLghBZCe4WNABidJP7aEuszx3iO", title: "Detailing Work Showcase 16" },
  { id: 17, url: "https://lh3.googleusercontent.com/d/1AagzMfI6tW4hQGfxlmrZtiQJbqbS_OU-", title: "Detailing Work Showcase 17" },
  { id: 18, url: "https://lh3.googleusercontent.com/d/14iW64QVSBBYnjMvE8Ps50c2lBmviaG4V", title: "Detailing Work Showcase 18" },
  { id: 19, url: "https://lh3.googleusercontent.com/d/1U3ukkMJWVX8udy7T84AKDQ4BwlhIkav0", title: "Detailing Work Showcase 19" },
  { id: 22, url: "https://lh3.googleusercontent.com/d/1gX9TV54FYNxsBpCEXtEfMNAPBdwQH5xR", title: "Detailing Work Showcase 22" },
  { id: 20, url: "https://lh3.googleusercontent.com/d/1EK8IT9kiQrFNHu93Gubd4g2teiL0N6sC", title: "Detailing Work Showcase 20" },
  { id: 21, url: "https://lh3.googleusercontent.com/d/1SM7tFqcol5F2v3aWWHQB4Ti4OCTWlywz", title: "Detailing Work Showcase 21" },
];

export default function WorkGalleryShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "Escape" && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, isLightboxOpen]);

  // Scroll active thumbnail into center view
  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const activeThumb = thumbnailContainerRef.current.children[currentIndex] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [currentIndex]);

  // Touch / Drag swipe threshold handling
  const isDraggingRef = useRef(false);

  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number; y: number }; velocity: { x: number; y: number } }
  ) => {
    const swipeThreshold = 40;
    const velocityThreshold = 200;

    if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
      goToNext();
    } else if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
      goToPrev();
    }

    setTimeout(() => {
      isDraggingRef.current = false;
    }, 100);
  };

  const currentImage = galleryImages[currentIndex];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.98,
    }),
  };

  return (
    <section
      className="w-full relative bg-black py-8 md:py-12 text-white overflow-hidden"
      id="work-gallery"
    >
      {/* Background Accent Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Interactive Slideshow Frame */}
        <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl group">
          <div
            className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] max-h-[620px] overflow-hidden cursor-grab active:cursor-grabbing select-none"
            onClick={() => {
              if (!isDraggingRef.current) {
                setIsLightboxOpen(true);
              }
            }}
          >
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.img
                key={currentIndex}
                src={currentImage.url}
                alt=""
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                dragSnapToOrigin={true}
                onDragStart={() => {
                  isDraggingRef.current = true;
                }}
                onDragEnd={handleDragEnd}
                className="w-full h-full object-cover object-center touch-pan-y"
                referrerPolicy="no-referrer"
                onError={(e) => handleDriveImageError(e)}
              />
            </AnimatePresence>

            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />

            {/* Top Right Action: Lightbox View */}
            <div className="absolute top-4 right-4 z-20">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLightboxOpen(true);
                }}
                aria-label="View Fullscreen"
                id="gallery-fullscreen-btn"
                className="p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white/80 hover:text-white hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all shadow-lg"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>

            {/* On-Image Side Arrow Buttons for Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              aria-label="Previous Image"
              id="gallery-prev-btn"
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-2xl bg-black/50 hover:bg-amber-500 text-white hover:text-black border border-white/10 hover:border-amber-500 backdrop-blur-md transition-all duration-200 z-20 shadow-xl opacity-90 sm:opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              aria-label="Next Image"
              id="gallery-next-btn"
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-2xl bg-black/50 hover:bg-amber-500 text-white hover:text-black border border-white/10 hover:border-amber-500 backdrop-blur-md transition-all duration-200 z-20 shadow-xl opacity-90 sm:opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Picture Thumbnail Carousel */}
        <div className="mt-4">
          <div
            ref={thumbnailContainerRef}
            className="flex gap-2.5 overflow-x-auto pb-3 pt-2 px-4 sm:px-6 scrollbar-thin scrollbar-thumb-amber-500/30 scrollbar-track-zinc-900 scroll-smooth"
            style={{ scrollbarWidth: "thin", WebkitOverflowScrolling: "touch" }}
          >
            {galleryImages.map((img, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={img.id}
                  onClick={() => goToSlide(idx)}
                  id={`gallery-thumb-${idx}`}
                  aria-label={`Image ${idx + 1}`}
                  className={`relative shrink-0 w-20 sm:w-28 aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all duration-200 bg-zinc-900 ${
                    isActive
                      ? "border-amber-500 ring-2 ring-amber-500/40 scale-105 z-10 shadow-lg shadow-amber-500/20"
                      : "border-white/10 opacity-60 hover:opacity-100 hover:border-white/30"
                  }`}
                >
                  <img
                    src={img.url}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => handleDriveImageError(e)}
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-amber-500/10 pointer-events-none" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Modal Top Controls (Close X) */}
            <div
              className="flex items-center justify-end z-20 w-full max-w-7xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsLightboxOpen(false)}
                aria-label="Close Lightbox"
                id="gallery-lightbox-close"
                className="p-3 rounded-full bg-zinc-900 border border-white/20 text-white hover:bg-amber-500 hover:text-black transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Main Image */}
            <div
              className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.img
                  key={currentIndex}
                  src={currentImage.url}
                  alt=""
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="max-w-full max-h-[85vh] object-contain rounded-xl border border-white/10 shadow-2xl"
                  referrerPolicy="no-referrer"
                  onError={(e) => handleDriveImageError(e)}
                />
              </AnimatePresence>

              {/* Lightbox Nav Buttons */}
              <button
                onClick={goToPrev}
                aria-label="Previous"
                className="absolute left-2 sm:left-6 p-4 rounded-full bg-black/70 border border-white/20 text-white hover:bg-amber-500 hover:text-black transition-all shadow-2xl"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button
                onClick={goToNext}
                aria-label="Next"
                className="absolute right-2 sm:right-6 p-4 rounded-full bg-black/70 border border-white/20 text-white hover:bg-amber-500 hover:text-black transition-all shadow-2xl"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </div>

            {/* Modal Footer Thumbnails */}
            <div
              className="w-full max-w-4xl mx-auto flex gap-2 overflow-x-auto py-2 justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {galleryImages.map((img, idx) => (
                <button
                  key={`modal-thumb-${img.id}`}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Image ${idx + 1}`}
                  className={`w-14 h-10 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    idx === currentIndex
                      ? "border-amber-500 scale-110"
                      : "border-white/10 opacity-50 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img.url}
                    alt=""
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => handleDriveImageError(e)}
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

