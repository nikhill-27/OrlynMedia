import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

interface GeminiChatFloatingButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export const GeminiChatFloatingButton: React.FC<GeminiChatFloatingButtonProps> = ({
  onClick,
  isOpen,
}) => {
  const { isDark } = useTheme();
  if (isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="button"
        onClick={onClick}
        className={`group relative flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full backdrop-blur-xl transition-all duration-300 cursor-pointer ${
          isDark
            ? 'bg-[#161226]/90 hover:bg-[#201a38] text-white border border-purple-500/40 shadow-[0_10px_35px_rgba(147,51,234,0.35)]'
            : 'bg-white hover:bg-zinc-50 text-zinc-950 border border-purple-400 shadow-[0_10px_30px_rgba(124,58,237,0.18)]'
        }`}
        aria-label="Open AI Creative Director Chat"
      >
        {/* Glowing pulse ring */}
        <span
          className={`absolute -inset-0.5 rounded-full transition-opacity ${
            isDark
              ? 'bg-gradient-to-r from-purple-500 to-indigo-500 opacity-30 group-hover:opacity-60 blur-sm'
              : 'bg-gradient-to-r from-purple-400 to-indigo-400 opacity-20 group-hover:opacity-45 blur-sm'
          }`}
        />

        {/* Icon & Ping */}
        <div
          className={`relative flex items-center justify-center w-7 h-7 rounded-full border ${
            isDark
              ? 'bg-purple-600/40 text-purple-300 border-purple-400/30'
              : 'bg-purple-100 text-purple-700 border-purple-300'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500" />
        </div>

        {/* Label */}
        <div className="relative flex flex-col text-left">
          <div
            className={`flex items-center gap-1.5 font-display text-xs sm:text-sm font-bold tracking-wide ${
              isDark ? 'text-white' : 'text-zinc-950'
            }`}
          >
            <span>AI Creative Director</span>
          </div>
          <span
            className={`text-[10px] font-mono hidden sm:inline ${
              isDark ? 'text-purple-300' : 'text-purple-700 font-semibold'
            }`}
          >
            Web &amp; Video Estimator
          </span>
        </div>
      </motion.button>
    </div>
  );
};
