import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Check, Zap, Code2, Film } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ScrollReveal } from './ScrollReveal';

interface BoldCTAProps {
  onOpenInquiry: (initialData?: any) => void;
  onOpenChat?: () => void;
}

export const BoldCTASection: React.FC<BoldCTAProps> = ({
  onOpenInquiry,
  onOpenChat,
}) => {
  const { isDark } = useTheme();
  const [selectedScope, setSelectedScope] = useState<'both' | 'web' | 'video'>('both');

  return (
    <section id="contact" className="py-24 md:py-36 relative z-10 border-t border-zinc-800/80 light:border-zinc-200">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
        
        {/* Simple, Bold Eyebrow */}
        <ScrollReveal direction="up" distance={20} duration={500}>
          <div className="text-xs font-mono uppercase tracking-widest text-purple-400 light:text-purple-600 mb-6">
            05 · DIRECT INTAKE
          </div>
        </ScrollReveal>

        {/* Massive Headline */}
        <ScrollReveal direction="up" distance={25} delay={100} duration={600}>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight font-display text-white light:text-zinc-950 mb-8 leading-[1.02]">
            Ready to build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-purple-300 light:from-purple-700 light:via-purple-900 light:to-indigo-800">
              something bold?
            </span>
          </h2>
        </ScrollReveal>

        {/* Concise Description */}
        <ScrollReveal direction="up" distance={20} delay={180} duration={600}>
          <p className="text-base sm:text-lg text-zinc-400 light:text-zinc-600 max-w-xl mx-auto mb-10 leading-relaxed">
            Reserve your 14-day sprint. Direct leadership access, rapid delivery, and zero agency bloat.
          </p>
        </ScrollReveal>

        {/* Quick Scope Selector Buttons */}
        <ScrollReveal direction="up" distance={20} delay={240} duration={600}>
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-zinc-900/80 light:bg-zinc-100 border border-zinc-800 light:border-zinc-300 mb-10">
            <button
              type="button"
              onClick={() => setSelectedScope('both')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                selectedScope === 'both'
                  ? 'bg-white text-zinc-950 font-bold shadow-md'
                  : 'text-zinc-400 light:text-zinc-600 hover:text-white'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-purple-400" />
              <span>Hybrid Web + Video</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedScope('web')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                selectedScope === 'web'
                  ? 'bg-white text-zinc-950 font-bold shadow-md'
                  : 'text-zinc-400 light:text-zinc-600 hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Web Designing</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedScope('video')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                selectedScope === 'video'
                  ? 'bg-white text-zinc-950 font-bold shadow-md'
                  : 'text-zinc-400 light:text-zinc-600 hover:text-white'
              }`}
            >
              <Film className="w-3.5 h-3.5 text-purple-400" />
              <span>Video Editing</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Primary Action Button */}
        <ScrollReveal direction="up" distance={20} delay={300} duration={600}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              type="button"
              onClick={() => onOpenInquiry({ discipline: selectedScope })}
              className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full text-xs font-mono uppercase tracking-widest font-bold text-zinc-950 bg-white hover:bg-zinc-200 transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 cursor-pointer w-full sm:w-auto"
            >
              <span>Start 14-Day Sprint</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {onOpenChat && (
              <button
                type="button"
                onClick={onOpenChat}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-xs font-mono text-purple-300 light:text-purple-700 bg-purple-950/30 light:bg-purple-100 border border-purple-500/30 hover:bg-purple-900/40 transition-all cursor-pointer w-full sm:w-auto"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Ask Gemini AI Director</span>
              </button>
            )}
          </div>

          {/* Guarantees Strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-500">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>14-Day Turnaround</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Direct Partner Access</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% IP &amp; Code Ownership</span>
            </span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
