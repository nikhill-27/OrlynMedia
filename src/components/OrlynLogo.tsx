import React from 'react';

interface OrlynLogoProps {
  size?: number;
  className?: string;
  showWordmark?: boolean;
  showTagline?: boolean;
  animated?: boolean;
}

export const OrlynLogo: React.FC<OrlynLogoProps> = ({
  size = 36,
  className = '',
  showWordmark = true,
  showTagline = false,
  animated = false,
}) => {
  // 8 distinct blade angles radiating from center with custom curvature and rounded corners
  // One blade (index 3, ~top-left) uses the purple-to-magenta gradient, the rest use blue-to-cyan
  const blades = [
    { id: 0, angle: 0, isAccent: false },
    { id: 1, angle: 45, isAccent: false },
    { id: 2, angle: 90, isAccent: false },
    { id: 3, angle: 135, isAccent: false },
    { id: 4, angle: 180, isAccent: false },
    { id: 5, angle: 225, isAccent: true }, // The purple-magenta blade
    { id: 6, angle: 270, isAccent: false },
    { id: 7, angle: 315, isAccent: false },
  ];

  return (
    <div className={`inline-flex items-center gap-3.5 group select-none ${className}`}>
      {/* SVG Aperture Mark */}
      <div className="relative flex items-center justify-center">
        <svg
          width={size}
          height={size}
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-700 ease-out ${
            animated ? 'group-hover:rotate-45' : ''
          }`}
        >
          <defs>
            {/* Blue to Cyan Gradient (Primary Brand) */}
            <linearGradient id="orlynBlueCyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00B8FF" />
              <stop offset="100%" stopColor="#1479FF" />
            </linearGradient>

            {/* Cyan Accent */}
            <linearGradient id="orlynCyanBlueAlt" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="50%" stopColor="#00B8FF" />
              <stop offset="100%" stopColor="#1479FF" />
            </linearGradient>

            {/* Purple to Magenta Gradient (Logo Accent Blade) */}
            <linearGradient id="orlynMagentaPurple" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B2FE0" />
              <stop offset="100%" stopColor="#C61FDB" />
            </linearGradient>

            {/* Subtle glow filter */}
            <filter id="orlynGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background subtle radial aura */}
          <circle cx="60" cy="60" r="48" fill="#1479FF" fillOpacity="0.04" />

          {/* 8 radiating aperture blades */}
          <g transform="translate(60, 60)">
            {blades.map((blade) => {
              const isMagenta = blade.isAccent;
              return (
                <g key={blade.id} transform={`rotate(${blade.angle})`}>
                  {/* Blade shape: rounded triangular wedge radiating outward with an aperture curve */}
                  <path
                    d="M 12 -4 
                       C 24 -9, 44 -16, 52 -11
                       C 56 -8, 56 3, 50 8
                       C 42 12, 22 8, 12 4
                       C 8 2, 8 -2, 12 -4 Z"
                    fill={isMagenta ? 'url(#orlynMagentaPurple)' : 'url(#orlynBlueCyan)'}
                    className="transition-all duration-300"
                    filter={isMagenta ? 'drop-shadow(0 0 6px rgba(198, 31, 219, 0.45))' : 'drop-shadow(0 0 4px rgba(0, 184, 255, 0.3))'}
                  />
                </g>
              );
            })}
            {/* Center aperture core */}
            <circle cx="0" cy="0" r="7" fill="#080B12" />
          </g>
        </svg>
      </div>

      {/* Wordmark and Tagline */}
      {showWordmark && (
        <div className="flex flex-col">
          <div className="flex items-baseline tracking-tight">
            <span className="font-bold text-xl tracking-[-0.03em] font-['Plus_Jakarta_Sans',sans-serif] text-white orlyn-brand-title">
              Orlyn
            </span>
            <span className="font-normal text-xl ml-1 tracking-[-0.03em] font-['Plus_Jakarta_Sans',sans-serif] opacity-90 text-white orlyn-brand-subtitle">
              Media
            </span>
          </div>

          {showTagline && (
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="h-[2px] w-3 rounded-full bg-gradient-to-r from-[#00B8FF] via-[#1479FF] to-[#C61FDB]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#8B95A5] orlyn-tagline">
                Somewhere Between Light &amp; Logic
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
