import React from 'react';
import { OrlynLogo } from './OrlynLogo';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSelector } from './LanguageSelector';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  onOpenInquiry: (topic?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  const { isDark } = useTheme();

  const handleScrollTo = (id: string) => {
    let element = document.getElementById(id);
    if (!element && (id === 'services' || id === 'capabilities')) {
      element = document.getElementById('capabilities') || document.getElementById('services');
    }
    if (!element && (id === 'testimonials' || id === 'reputation')) {
      element = document.getElementById('reputation') || document.getElementById('testimonials');
    }
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#FFFFFF] text-[#0A0B0E] relative z-20 overflow-hidden select-none border-t border-zinc-200">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 flex flex-col justify-between min-h-[640px] sm:min-h-[720px] lg:min-h-[820px]">
        
        {/* Top Header & Links Row (Exactly matching Antigravity) */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 lg:gap-16">
          
          {/* Left Title */}
          <div className="max-w-md">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-[-0.02em] text-[#0A0B0E] font-['Plus_Jakarta_Sans',sans-serif]">
              Experience liftoff
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-500 font-normal max-w-sm">
              Architecting sub-second 3D web flagships and cinema-grade commercial films.
            </p>
          </div>

          {/* Right Navigation Columns */}
          <div className="grid grid-cols-2 gap-12 sm:gap-20 lg:gap-24 text-sm">
            
            {/* Column 1: Product / Disciplines */}
            <div className="flex flex-col space-y-3.5">
              <div className="text-xs font-semibold text-zinc-900 tracking-tight mb-1">
                Product
              </div>
              <button
                type="button"
                onClick={() => onOpenInquiry('Web Designing Sprint')}
                className="text-left text-sm text-zinc-600 hover:text-black transition-colors cursor-pointer"
              >
                Web Designing
              </button>
              <button
                type="button"
                onClick={() => onOpenInquiry('Video Editing Sprint')}
                className="text-left text-sm text-zinc-600 hover:text-black transition-colors cursor-pointer"
              >
                Video Editing
              </button>
              <button
                type="button"
                onClick={() => handleScrollTo('capabilities')}
                className="text-left text-sm text-zinc-600 hover:text-black transition-colors cursor-pointer"
              >
                3D Interactive Systems
              </button>
              <button
                type="button"
                onClick={() => handleScrollTo('capabilities')}
                className="text-left text-sm text-zinc-600 hover:text-black transition-colors cursor-pointer"
              >
                DaVinci ACES Color
              </button>
              <button
                type="button"
                onClick={() => handleScrollTo('process')}
                className="text-left text-sm text-zinc-600 hover:text-black transition-colors cursor-pointer"
              >
                14-Day Changelog
              </button>
              <button
                type="button"
                onClick={() => onOpenInquiry('Press & Media Commission')}
                className="text-left text-sm text-zinc-600 hover:text-black transition-colors cursor-pointer"
              >
                Releases
              </button>
            </div>

            {/* Column 2: Resources */}
            <div className="flex flex-col space-y-3.5">
              <div className="text-xs font-semibold text-zinc-900 tracking-tight mb-1">
                Resources
              </div>
              <button
                type="button"
                onClick={() => handleScrollTo('work')}
                className="text-left text-sm text-zinc-600 hover:text-black transition-colors cursor-pointer"
              >
                Selected Work
              </button>
              <button
                type="button"
                onClick={() => handleScrollTo('process')}
                className="text-left text-sm text-zinc-600 hover:text-black transition-colors cursor-pointer"
              >
                Sprint Pricing
              </button>
              <button
                type="button"
                onClick={() => handleScrollTo('reputation')}
                className="text-left text-sm text-zinc-600 hover:text-black transition-colors cursor-pointer"
              >
                Use Cases
              </button>
              <button
                type="button"
                onClick={() => handleScrollTo('reputation')}
                className="text-left text-sm text-zinc-600 hover:text-black transition-colors cursor-pointer"
              >
                Client Ledger
              </button>
              <button
                type="button"
                onClick={() => onOpenInquiry('New Studio Commission')}
                className="text-left text-sm text-zinc-600 hover:text-black transition-colors cursor-pointer"
              >
                Book Sprint
              </button>
            </div>

          </div>

        </div>

        {/* Massive Screen-Spanning Brand Wordmark (Antigravity Style) */}
        <div className="w-full my-auto pt-14 pb-8 sm:pt-20 sm:pb-12 overflow-hidden flex items-center justify-center">
          <h1 className="text-[20vw] sm:text-[21vw] font-bold tracking-[-0.05em] leading-[0.82] text-[#111215] select-none font-['Plus_Jakarta_Sans',sans-serif] text-center w-full transform hover:scale-[1.005] transition-transform duration-500">
            Orlyn
          </h1>
        </div>

        {/* Bottom Sub-Bar (Matching the Google Bar at the bottom of the screenshot) */}
        <div className="pt-6 border-t border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs sm:text-sm text-zinc-600">
          
          {/* Bottom Left: Clean Brand Wordmark */}
          <div className="flex items-center gap-2.5">
            <span className="text-base sm:text-lg font-bold tracking-tight text-[#0A0B0E] font-['Plus_Jakarta_Sans',sans-serif]">
              Orlyn
            </span>
            <span className="text-zinc-400 font-normal">Media</span>
          </div>

          {/* Bottom Right: Clean Horizontal Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 font-normal text-zinc-600">
            <button
              type="button"
              onClick={() => handleScrollTo('capabilities')}
              className="hover:text-black transition-colors cursor-pointer"
            >
              About Orlyn
            </button>
            <button
              type="button"
              onClick={() => handleScrollTo('work')}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Studio Work
            </button>
            <button
              type="button"
              onClick={() => onOpenInquiry('Privacy Policy Inquiry')}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Privacy
            </button>
            <button
              type="button"
              onClick={() => onOpenInquiry('Terms of Service Inquiry')}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Terms
            </button>

            {/* Subtle Controls */}
            <div className="flex items-center gap-3 pl-2 border-l border-zinc-200">
              <ThemeToggle variant="navbar" />
              <LanguageSelector variant="navbar" />
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};
