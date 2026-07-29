import React, { useState, useRef } from "react";

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
  { id: 20, url: "https://lh3.googleusercontent.com/d/1EK8IT9kiQrFNHu93Gubd4g2teiL0N6sC", title: "Detailing Work Showcase 20" },
  { id: 21, url: "https://lh3.googleusercontent.com/d/1SM7tFqcol5F2v3aWWHQB4Ti4OCTWlywz", title: "Detailing Work Showcase 21" },
];

// Duplicate gallery for smooth infinite 100% loop
const infiniteGallery = [...galleryImages, ...galleryImages];

export default function WorkGalleryShowcase() {
  const [isPausedTouch, setIsPausedTouch] = useState(false);
  const touchTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Handle touch events to pause auto-scroll briefly on mobile
  const handleTouchStart = () => {
    setIsPausedTouch(true);
    if (touchTimerRef.current) clearTimeout(touchTimerRef.current);
  };

  const handleTouchEnd = () => {
    if (touchTimerRef.current) clearTimeout(touchTimerRef.current);
    touchTimerRef.current = setTimeout(() => {
      setIsPausedTouch(false);
    }, 3500); // Resume auto scroll after 3.5s of touch inactivity
  };

  return (
    <section
      className="w-full relative bg-black overflow-hidden py-0 my-0 select-none"
      id="work-gallery"
    >
      {/* Dynamic Keyframe style for continuous smooth marquee */}
      <style>{`
        @keyframes galleryMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-gallery-marquee {
          animation: galleryMarquee 150s linear infinite;
          will-change: transform;
        }
        .paused-marquee {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* Full Width Edge-to-Edge Container */}
      <div
        className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden bg-black group py-1"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Continuous Infinite Marquee Strip */}
        <div
          className={`flex w-max items-center gap-3 sm:gap-3.5 animate-gallery-marquee group-hover:paused-marquee ${
            isPausedTouch ? "paused-marquee" : ""
          }`}
        >
          {infiniteGallery.map((item, index) => {
            const originalIndex = index % galleryImages.length;
            return (
              <div
                key={`${item.id}-${index}`}
                className="relative shrink-0 w-[100vw] sm:w-[50vw] lg:w-[33.333vw] h-[320px] sm:h-[420px] md:h-[480px] lg:h-[540px] overflow-hidden border-none p-0 bg-zinc-950"
              >
                <img
                  src={item.url}
                  alt={`Detailing Work Showcase ${originalIndex + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-center rounded-none border-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
