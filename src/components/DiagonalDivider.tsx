import React from "react";

interface DiagonalDividerProps {
  topBg?: string;    // Background color of the preceding section, e.g. "#0a0a0b" or "#0d0d0f"
  bottomBg?: string; // Background color of the current section, e.g. "#0a0a0b" or "#0d0d0f"
  className?: string;
}

export default function DiagonalDivider({
  topBg = "#000000",
  bottomBg = "#000000",
  className = "",
}: DiagonalDividerProps) {
  const gradientId = React.useId();

  return (
    <div className={`w-full relative h-10 md:h-16 select-none pointer-events-none overflow-hidden z-20 ${className}`}>
      <svg
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="w-full h-full block"
      >
        <defs>
          {/* Precise industrial linear glow gradient running parallel to the race-slant */}
          <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="25%" stopColor="#06b6d4" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#2563eb" stopOpacity="0.15" />
            <stop offset="75%" stopColor="#06b6d4" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 1. Fill the top-left triangle with the preceding section's background */}
        <polygon
          points="0,0 1000,0 0,100"
          fill={topBg}
        />

        {/* 2. Fill the bottom-right triangle with the current section's background */}
        <polygon
          points="1000,0 1000,100 0,100"
          fill={bottomBg}
        />

        {/* 3. The precise hairline diagonal cut matching the racing angle */}
        <line
          x1="0"
          y1="100"
          x2="1000"
          y2="0"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
        />

        {/* 4. Sleek cyan-blue premium accent glow along the hairline slash */}
        <line
          x1="0"
          y1="100"
          x2="1000"
          y2="0"
          stroke={`url(#${gradientId})`}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          className="opacity-60"
        />
      </svg>
    </div>
  );
}
