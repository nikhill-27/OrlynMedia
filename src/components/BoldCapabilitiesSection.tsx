import React, { useState } from 'react';
import { Code2, Film, ArrowRight, Play, Check, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ScrollReveal } from './ScrollReveal';

interface BoldCapabilitiesProps {
  onOpenInquiry: (topic?: string) => void;
  onPlayReel?: () => void;
}

export const BoldCapabilitiesSection: React.FC<BoldCapabilitiesProps> = ({
  onOpenInquiry,
  onPlayReel,
}) => {
  const { isDark } = useTheme();
  const [colorGradeSplit, setColorGradeSplit] = useState(55);
  const [activeTab, setActiveTab] = useState<'both' | 'web' | 'video'>('both');

  return (
    <section id="capabilities" className="py-24 md:py-32 relative z-10 border-t border-zinc-800/80 light:border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Simple, Bold Header */}
        <ScrollReveal direction="up" distance={25} duration={500}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-purple-400 light:text-purple-600 mb-3">
                01 · CAPABILITIES
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight font-display text-white light:text-zinc-950 leading-[1.05]">
                Two Disciplines. <br />
                <span className="text-zinc-500 light:text-zinc-400 font-normal">One Focused Velocity.</span>
              </h2>
            </div>
            
            <p className="text-base text-zinc-400 light:text-zinc-600 max-w-sm leading-relaxed">
              We design sub-second web flagships and produce cinema-grade video under one roof with zero handoff friction.
            </p>
          </div>
        </ScrollReveal>

        {/* Two Bold, High-Impact Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Pillar 1: Web Designing */}
          <ScrollReveal direction="up" distance={30} duration={600} className="h-full">
            <div className="h-full rounded-3xl border border-zinc-800/80 light:border-zinc-200 bg-[#08090D] light:bg-white p-8 sm:p-12 flex flex-col justify-between transition-all duration-300 hover:border-zinc-700 shadow-xl group">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 light:bg-purple-50 border border-purple-500/20 flex items-center justify-center text-purple-400 light:text-purple-600">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-bold tracking-wider uppercase">
                    100 / 100 Speed
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold font-display text-white light:text-zinc-950 tracking-tight mb-4">
                  Web Designing &amp; Systems
                </h3>

                <p className="text-base text-zinc-400 light:text-zinc-600 leading-relaxed mb-8">
                  We engineer bespoke digital flagships, 3D WebGL portals, and headless commerce platforms tuned for conversion and mathematical speed.
                </p>

                {/* Bold deliverable highlights */}
                <div className="space-y-3 mb-10 pt-6 border-t border-zinc-800/80 light:border-zinc-200">
                  {[
                    'Interactive 3D WebGL & Canvas Experiences',
                    'Headless Shopify Plus & Next.js 15 Stacks',
                    'Sub-second Edge Deployment & Zero Layout Shift',
                    'Conversion-Engineered Design Systems in Figma',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm font-medium text-zinc-300 light:text-zinc-800">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-800/80 light:border-zinc-200 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500 uppercase">Turnaround: 14 Days</span>
                <button
                  type="button"
                  onClick={() => onOpenInquiry('Web Designing Sprint')}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white light:text-zinc-950 hover:text-purple-400 transition-colors cursor-pointer group-hover:translate-x-1"
                >
                  <span>Commission Web Sprint</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Pillar 2: Video Production */}
          <ScrollReveal direction="up" distance={30} delay={150} duration={600} className="h-full">
            <div className="h-full rounded-3xl border border-zinc-800/80 light:border-zinc-200 bg-[#08090D] light:bg-white p-8 sm:p-12 flex flex-col justify-between transition-all duration-300 hover:border-zinc-700 shadow-xl group">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 light:bg-purple-50 border border-purple-500/20 flex items-center justify-center text-purple-400 light:text-purple-600">
                    <Film className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-purple-400 font-bold tracking-wider uppercase">
                    4K ProRes Master
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold font-display text-white light:text-zinc-950 tracking-tight mb-4">
                  Video Editing &amp; Cinema VFX
                </h3>

                <p className="text-base text-zinc-400 light:text-zinc-600 leading-relaxed mb-8">
                  Director-grade video editing, DaVinci Resolve ACES color grading, kinetic motion graphics, and high-retention commercial cuts.
                </p>

                {/* Bold deliverable highlights */}
                <div className="space-y-3 mb-10 pt-6 border-t border-zinc-800/80 light:border-zinc-200">
                  {[
                    'Commercial Brand Anthems & Hero Product Films',
                    'DaVinci Resolve ACES Hollywood Color Grading',
                    'High-Retention 9:16 Kinetic Cutdowns for Social',
                    'Multi-Stem Spatial Sound Design & Master Foley',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm font-medium text-zinc-300 light:text-zinc-800">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-800/80 light:border-zinc-200 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500 uppercase">Format: 16:9 &amp; 9:16</span>
                <button
                  type="button"
                  onClick={() => onOpenInquiry('Video Editing Sprint')}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white light:text-zinc-950 hover:text-purple-400 transition-colors cursor-pointer group-hover:translate-x-1"
                >
                  <span>Commission Video Sprint</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Interactive DaVinci Resolve Color Grade Demonstration (Tactile & Simple) */}
        <ScrollReveal direction="up" distance={25} delay={200} duration={600}>
          <div className="mt-12 rounded-3xl border border-zinc-800/80 light:border-zinc-200 bg-[#08090D] light:bg-white p-6 sm:p-10 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold block mb-1">
                  Interactive Precision Demo
                </span>
                <h4 className="text-xl sm:text-2xl font-bold font-display text-white light:text-zinc-950">
                  DaVinci Resolve ACES Color Pipeline
                </h4>
              </div>
              <div className="text-xs font-mono text-zinc-400">
                Drag slider to inspect RAW Log vs. Hollywood Grade ⇔
              </div>
            </div>

            {/* Split Screen Slider */}
            <div className="relative aspect-[21/9] sm:aspect-[2.39/1] rounded-2xl overflow-hidden border border-zinc-800 light:border-zinc-200 select-none">
              {/* RAW Log S-Log3 Left */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-zinc-700 via-zinc-800 to-zinc-700 flex items-center justify-center filter contrast-75 brightness-110"
                style={{ clipPath: `inset(0 ${100 - colorGradeSplit}% 0 0)` }}
              >
                <div className="text-center p-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-300 bg-black/70 px-4 py-1.5 rounded-full border border-white/10">
                    RAW Log (Flat Cinema Profile)
                  </span>
                </div>
              </div>

              {/* DaVinci ACES Color Grade Right */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-[#2a1352] via-[#0d163a] to-[#040817] flex items-center justify-center"
                style={{ clipPath: `inset(0 0 0 ${colorGradeSplit}%)` }}
              >
                <div className="text-center p-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-purple-200 bg-purple-950/80 px-4 py-1.5 rounded-full border border-purple-500/40 shadow-xl shadow-purple-500/30">
                    DaVinci Resolve ACES Master Grade
                  </span>
                </div>
              </div>

              {/* Scrubber divider handle */}
              <div 
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_15px_rgba(255,255,255,0.9)] cursor-ew-resize z-20 pointer-events-none"
                style={{ left: `${colorGradeSplit}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-black font-bold flex items-center justify-center shadow-xl text-xs">
                  ⇔
                </div>
              </div>

              {/* Slider Input */}
              <input
                type="range"
                min="5"
                max="95"
                value={colorGradeSplit}
                onChange={(e) => setColorGradeSplit(Number(e.target.value))}
                className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
                aria-label="Color grade comparison slider"
              />
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
