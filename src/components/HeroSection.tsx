import React from 'react';
import { HeroVisual3D } from './HeroVisual3D';
import { ArrowUpRight, Sparkles, Play, Code2, Film } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

interface HeroSectionProps {
  onOpenInquiry: (topic?: string) => void;
  onExploreWork?: () => void;
  onPlayReel?: () => void;
  onOpenChat?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenInquiry,
  onExploreWork,
  onPlayReel,
  onOpenChat,
}) => {
  const { isDark } = useTheme();

  return (
    <section className="relative min-h-screen w-full pt-32 sm:pt-36 md:pt-40 pb-0 overflow-hidden flex flex-col justify-between bg-transparent">
      
      {/* 1. Header & Text Content (Reflecting Video Editing & Web Designing) */}
      <div className="max-w-4xl mx-auto px-6 text-center relative z-20">
        
        {/* Monospace Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono mb-6 backdrop-blur-md transition-colors ${
            isDark
              ? 'bg-white/[0.04] border border-white/10 text-zinc-300'
              : 'bg-zinc-100/90 border border-zinc-300/80 text-zinc-800 shadow-sm'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          <span className="font-semibold tracking-wider">HYBRID CREATIVE STUDIO · WEB DESIGNING &amp; VIDEO EDITING</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className={`text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-semibold tracking-[-0.03em] leading-[1.08] font-['Plus_Jakarta_Sans',sans-serif] ${
            isDark ? 'text-white' : 'text-zinc-950'
          }`}
        >
          Web Designing. <br />
          <span
            className={`text-transparent bg-clip-text bg-gradient-to-r ${
              isDark
                ? 'from-purple-300 via-white to-purple-400'
                : 'from-purple-800 via-purple-600 to-indigo-700'
            }`}
          >
            Video Editing.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className={`mt-6 text-base sm:text-lg md:text-xl max-w-xl mx-auto leading-relaxed font-normal ${
            isDark ? 'text-zinc-300' : 'text-zinc-700'
          }`}
        >
          We architect sub-second 3D web flagships and produce cinema-grade commercial films for industry leaders.
        </motion.p>

        {/* Center CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          className="mt-8 relative z-30 flex flex-wrap items-center justify-center gap-3.5"
        >
          {/* Primary CTA */}
          <button
            id="hero-start-project-btn"
            type="button"
            onClick={() => onOpenInquiry('New Web & Video Commission')}
            className={`inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${
              isDark
                ? 'text-zinc-950 bg-white hover:bg-zinc-100 shadow-xl shadow-black/40'
                : 'text-white bg-zinc-950 hover:bg-zinc-800 shadow-xl shadow-zinc-900/20'
            }`}
          >
            <span>Book Discovery Sprint</span>
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </button>

          {/* Gemini AI Consultant Button */}
          {onOpenChat && (
            <button
              id="hero-ai-chat-btn"
              type="button"
              onClick={onOpenChat}
              className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${
                isDark
                  ? 'text-white bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/40 shadow-lg shadow-purple-500/20'
                  : 'text-purple-950 bg-purple-100 hover:bg-purple-200 border border-purple-300 shadow-sm'
              }`}
            >
              <Sparkles className={`w-4 h-4 ${isDark ? 'text-purple-300' : 'text-purple-700'}`} />
              <span>Ask Gemini AI Director</span>
            </button>
          )}

          {/* Watch Showreel */}
          {onPlayReel && (
            <button
              type="button"
              onClick={onPlayReel}
              className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm transition-all cursor-pointer ${
                isDark
                  ? 'text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10'
                  : 'text-zinc-900 hover:text-black bg-zinc-100 hover:bg-zinc-200 border border-zinc-300/80 shadow-sm'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>2026 Showreel</span>
            </button>
          )}
        </motion.div>
      </div>

      {/* 2. Massive 3D Liquid Element & Floating Cards Stage */}
      <div className="relative w-full h-[480px] sm:h-[540px] md:h-[620px] lg:h-[680px] mt-[-30px] sm:mt-[-50px] z-10 pointer-events-none">
        
        {/* Three.js Liquid Metal Wave Visualizer */}
        <div className="absolute inset-0 flex items-end justify-center pointer-events-auto">
          <HeroVisual3D className="w-full h-full" />
        </div>

        {/* Floating Glassmorphic Cards showcasing Web Design and Video Editing */}
        
        {/* Left Floating Card: "Web Designing - Interactive 3D & Headless Systems" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="absolute bottom-[24%] sm:bottom-[28%] md:bottom-[32%] left-[4%] sm:left-[8%] lg:left-[12%] pointer-events-auto z-20"
        >
          <div 
            onClick={() => onOpenInquiry('Web Designing & Interactive 3D')}
            className={`w-60 sm:w-68 p-4 sm:p-5 rounded-2xl backdrop-blur-2xl transition-all duration-300 group cursor-pointer ${
              isDark
                ? 'bg-black/50 border border-white/[0.12] shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-purple-500/40'
                : 'bg-white/95 border border-zinc-300/90 shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:border-purple-500/60'
            }`}
          >
            {/* Top row */}
            <div className="flex items-center justify-between">
              <span className={`flex items-center gap-1.5 text-xs font-semibold ${isDark ? 'text-purple-300' : 'text-purple-700'}`}>
                <Code2 className="w-3.5 h-3.5" />
                <span>Web Designing</span>
              </span>
              <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-colors ${
                isDark ? 'bg-white/10 group-hover:bg-white/20 text-white' : 'bg-zinc-100 group-hover:bg-zinc-200 text-zinc-900 border border-zinc-200'
              }`}>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Headline */}
            <div className={`mt-2 text-sm sm:text-base font-semibold leading-snug tracking-tight ${isDark ? 'text-white' : 'text-zinc-950'}`}>
              Interactive 3D &amp; <br />
              Headless Systems
            </div>

            {/* Bottom metric */}
            <div className="mt-2 sm:mt-3 flex items-center justify-between">
              <span className={`text-[11px] font-mono ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Core Web Vitals</span>
              <span className="text-xs text-emerald-500 font-mono font-bold">
                99.8 / 100
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Floating Card: "Video Editing - Cinema 4K & Motion VFX" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="absolute bottom-[14%] sm:bottom-[18%] md:bottom-[20%] right-[4%] sm:right-[8%] lg:right-[12%] pointer-events-auto z-20"
        >
          <div 
            onClick={() => onOpenInquiry('Video Editing & Commercial Post-Production')}
            className={`w-60 sm:w-68 p-4 sm:p-5 rounded-2xl backdrop-blur-2xl transition-all duration-300 group cursor-pointer ${
              isDark
                ? 'bg-black/50 border border-white/[0.12] shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-purple-500/40'
                : 'bg-white/95 border border-zinc-300/90 shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:border-purple-500/60'
            }`}
          >
            {/* Top row */}
            <div className="flex items-center justify-between">
              <span className={`flex items-center gap-1.5 text-xs font-semibold ${isDark ? 'text-purple-300' : 'text-purple-700'}`}>
                <Film className="w-3.5 h-3.5" />
                <span>Video Editing</span>
              </span>
              <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-colors ${
                isDark ? 'bg-white/10 group-hover:bg-white/20 text-white' : 'bg-zinc-100 group-hover:bg-zinc-200 text-zinc-900 border border-zinc-200'
              }`}>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Large 94% stat */}
            <div className="mt-1 flex items-baseline justify-between">
              <span className={`text-sm sm:text-base font-semibold leading-snug ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                Cinema 4K &amp; Motion VFX
              </span>
              <span className={`text-xl sm:text-2xl font-bold tracking-tight font-mono ml-2 ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                94%
              </span>
            </div>

            {/* Bottom metric */}
            <div className="mt-2 sm:mt-3 flex items-center justify-between">
              <span className={`text-[11px] font-mono ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>Retention Lift</span>
              <span className="text-xs text-purple-500 font-mono font-bold">
                DaVinci Resolve HDR
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
