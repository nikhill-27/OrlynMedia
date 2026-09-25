import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Sparkles, Contrast } from 'lucide-react';
import { motion } from 'motion/react';

interface ThemeToggleProps {
  variant?: 'navbar' | 'compact' | 'button' | 'mobile';
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  variant = 'navbar',
  className = '',
  showLabel = false,
}) => {
  const { theme, isDark, toggleTheme } = useTheme();

  if (variant === 'compact') {
    return (
      <button
        type="button"
        role="switch"
        aria-checked={!isDark}
        aria-label={isDark ? 'Switch to High-Contrast Light Mode' : 'Switch to Dark Mode'}
        onClick={toggleTheme}
        title={isDark ? 'Switch to High-Contrast Light Mode' : 'Switch to Dark Mode'}
        className={`p-2 rounded-full border transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${
          isDark
            ? 'bg-white/[0.04] hover:bg-white/[0.1] border-white/10 text-zinc-300 hover:text-white'
            : 'bg-black/[0.06] hover:bg-black/[0.12] border-black/20 text-zinc-900 hover:text-black shadow-sm'
        } ${className}`}
      >
        <div className="relative w-4 h-4 flex items-center justify-center">
          <motion.div
            initial={false}
            animate={{
              scale: isDark ? 1 : 0,
              rotate: isDark ? 0 : 90,
              opacity: isDark ? 1 : 0,
            }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute"
          >
            <Moon className="w-4 h-4 text-purple-300" />
          </motion.div>
          <motion.div
            initial={false}
            animate={{
              scale: isDark ? 0 : 1,
              rotate: isDark ? -90 : 0,
              opacity: isDark ? 0 : 1,
            }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute"
          >
            <Sun className="w-4 h-4 text-amber-600 fill-amber-500/20" />
          </motion.div>
        </div>
      </button>
    );
  }

  if (variant === 'mobile') {
    return (
      <button
        type="button"
        role="switch"
        aria-checked={!isDark}
        onClick={toggleTheme}
        className={`w-full py-3 px-4 rounded-2xl border flex items-center justify-between text-sm font-medium transition-all duration-300 cursor-pointer ${
          isDark
            ? 'bg-white/[0.04] hover:bg-white/[0.08] border-white/10 text-white'
            : 'bg-zinc-100 hover:bg-zinc-200 border-zinc-300 text-zinc-900 shadow-sm'
        } ${className}`}
      >
        <div className="flex items-center gap-2.5">
          <div className={`p-1.5 rounded-lg ${isDark ? 'bg-purple-950/60 text-purple-300' : 'bg-amber-100 text-amber-800'}`}>
            {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </div>
          <span className="font-mono text-xs uppercase tracking-wider">
            {isDark ? 'Theme: Dark Studio' : 'Theme: High-Contrast Light'}
          </span>
        </div>

        <div className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${
          isDark
            ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
            : 'bg-black text-white'
        }`}>
          {isDark ? 'Switch to Light' : 'Switch to Dark'}
        </div>
      </button>
    );
  }

  // Default 'navbar' & 'button' variant: High-contrast architectural segmented pill toggle
  return (
    <div
      className={`inline-flex items-center p-1 rounded-full border transition-all duration-300 select-none ${
        isDark
          ? 'bg-black/40 border-white/15 shadow-inner'
          : 'bg-zinc-100 border-zinc-300/90 shadow-sm'
      } ${className}`}
      role="group"
      aria-label="Theme Mode Selection"
    >
      {/* Dark Theme Button */}
      <button
        type="button"
        aria-pressed={isDark}
        aria-label="Switch to Velvet Dark theme"
        onClick={() => isDark || toggleTheme()}
        className={`relative flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer focus:outline-none ${
          isDark
            ? 'text-white font-semibold shadow-sm'
            : 'text-zinc-500 hover:text-zinc-900'
        }`}
      >
        {isDark && (
          <motion.div
            layoutId="theme-active-indicator"
            className="absolute inset-0 rounded-full bg-white/15 border border-white/20"
            transition={{ type: 'spring', stiffness: 450, damping: 35 }}
          />
        )}
        <Moon className={`w-3.5 h-3.5 relative z-10 transition-colors ${isDark ? 'text-purple-300' : 'text-zinc-400'}`} />
        <span className="relative z-10 text-[11px] uppercase tracking-wider hidden lg:inline">
          Dark
        </span>
      </button>

      {/* Light Theme Button */}
      <button
        type="button"
        aria-pressed={!isDark}
        aria-label="Switch to High-Contrast Light theme"
        onClick={() => !isDark || toggleTheme()}
        className={`relative flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer focus:outline-none ${
          !isDark
            ? 'text-zinc-950 font-bold shadow-sm'
            : 'text-zinc-400 hover:text-white'
        }`}
      >
        {!isDark && (
          <motion.div
            layoutId="theme-active-indicator"
            className="absolute inset-0 rounded-full bg-white border border-zinc-300/80 shadow-sm"
            transition={{ type: 'spring', stiffness: 450, damping: 35 }}
          />
        )}
        <Sun className={`w-3.5 h-3.5 relative z-10 transition-colors ${!isDark ? 'text-amber-600 fill-amber-500/20' : 'text-zinc-400'}`} />
        <span className="relative z-10 text-[11px] uppercase tracking-wider hidden lg:inline">
          Light
        </span>
      </button>
    </div>
  );
};
