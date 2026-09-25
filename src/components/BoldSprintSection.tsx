import React from 'react';
import { ArrowRight, Check, Zap, Clock, ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ScrollReveal } from './ScrollReveal';

export const BoldSprintSection: React.FC = () => {
  const { isDark } = useTheme();

  const phases = [
    {
      num: '01',
      title: 'Spec & Direction',
      timeline: 'Days 01–03',
      summary: 'Figma component systems, conversion flows, and cinema storyboards. Eliminating guesswork before building.',
      output: 'Master Design Token System & Film Treatment',
    },
    {
      num: '02',
      title: '3D Code & Cinema Cut',
      timeline: 'Days 04–11',
      summary: 'Production React 19 / Next.js implementation, Three.js shaders, DaVinci Resolve ACES color grading, and spatial audio.',
      output: 'Live Staging Sandbox & 4K ProRes Master',
    },
    {
      num: '03',
      title: 'Launch & Delivery',
      timeline: 'Days 12–14',
      summary: 'Global edge deployment with 100/100 Core Web Vitals, conversion pixel wiring, and full intellectual property transfer.',
      output: 'Live Production Release & Master Asset Vault',
    },
  ];

  return (
    <section id="process" className="py-24 md:py-32 relative z-10 border-t border-zinc-800/80 light:border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Simple, Bold Header */}
        <ScrollReveal direction="up" distance={25} duration={500}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-purple-400 light:text-purple-600 mb-3">
                03 · SPRINT VELOCITY
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight font-display text-white light:text-zinc-950 leading-[1.05]">
                14-Day Delivery. <br />
                <span className="text-zinc-500 light:text-zinc-400 font-normal">Zero Agency Bureaucracy.</span>
              </h2>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 light:text-zinc-600 bg-zinc-900/60 light:bg-zinc-100 p-3 rounded-xl border border-zinc-800 light:border-zinc-300">
              <Clock className="w-4 h-4 text-purple-400" />
              <span>Sprint Commitment: Discovery to Global Launch in 14 Days</span>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Bold Horizontal Phase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase, idx) => (
            <ScrollReveal
              key={phase.num}
              direction="up"
              distance={30}
              delay={idx * 100}
              duration={600}
            >
              <div className="h-full rounded-3xl border border-zinc-800/80 light:border-zinc-200 bg-[#08090D] light:bg-white p-8 sm:p-10 flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-zinc-700">
                <div>
                  <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-zinc-800/80 light:border-zinc-200">
                    <span className="text-4xl sm:text-5xl font-mono font-bold text-white light:text-zinc-950">
                      {phase.num}
                    </span>
                    <span className="text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold">
                      {phase.timeline}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-display text-white light:text-zinc-950 tracking-tight mb-3">
                    {phase.title}
                  </h3>

                  <p className="text-sm text-zinc-400 light:text-zinc-600 leading-relaxed mb-8">
                    {phase.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-zinc-800/80 light:border-zinc-200">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">
                    Deliverable Artifact:
                  </div>
                  <div className="text-xs font-mono font-semibold text-zinc-200 light:text-zinc-900">
                    {phase.output}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
