import React, { useState } from 'react';
import { TRUSTED_CLIENTS, PROJECTS_DATA } from '../data/agencyData';
import { ScrollReveal } from './ScrollReveal';
import { Code2, Film, ArrowRight, Play, Check, Sparkles, ArrowUpRight, Zap, Clock, ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Project } from '../types';

export const TrustedStrip: React.FC = () => {
  return (
    <section className="py-8 border-y border-zinc-800/80 light:border-zinc-200 bg-black/40 light:bg-zinc-50 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <ScrollReveal direction="up" distance={15} duration={500}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 whitespace-nowrap">
              TRUSTED ACROSS ZURICH · NEW YORK · LONDON · MIAMI
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center">
              {TRUSTED_CLIENTS.map((client, idx) => (
                <div
                  key={client.name}
                  className="group flex flex-col cursor-default transition-all duration-300"
                >
                  <span className="text-sm font-bold tracking-wider text-zinc-400 group-hover:text-white light:text-zinc-600 light:group-hover:text-zinc-950 transition-colors font-display">
                    {client.logoText}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-600 group-hover:text-zinc-400 transition-colors truncate">
                    {client.city}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

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
            <div className="h-full rounded-3xl border border-white/10 light:border-black/10 bg-white/5 light:bg-black/5 backdrop-blur-xl p-8 sm:p-12 flex flex-col justify-between transition-all duration-500 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/20 shadow-xl shadow-black/50 group transform-gpu hover:-translate-y-2 hover:scale-[1.02] animate-float" style={{ animationDelay: '0s' }}>
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
            <div className="h-full rounded-3xl border border-white/10 light:border-black/10 bg-white/5 light:bg-black/5 backdrop-blur-xl p-8 sm:p-12 flex flex-col justify-between transition-all duration-500 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/20 shadow-xl shadow-black/50 group transform-gpu hover:-translate-y-2 hover:scale-[1.02] animate-float" style={{ animationDelay: '0.2s' }}>
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
          <div className="mt-12 rounded-3xl border border-white/10 light:border-black/10 bg-white/5 light:bg-black/5 backdrop-blur-xl p-6 sm:p-10 shadow-2xl transform-gpu transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-500/30 hover:-translate-y-1">
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

interface BoldWorkProps {
  onOpenVideoModal?: (project: Project) => void;
  onOpenInquiry?: (projectName?: string) => void;
}

export const BoldWorkSection: React.FC<BoldWorkProps> = ({
  onOpenVideoModal,
  onOpenInquiry,
}) => {
  const { isDark } = useTheme();
  const [filter, setFilter] = useState<'all' | 'web' | 'video'>('all');

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'web') return p.category === 'design' || p.category === 'development';
    if (filter === 'video') return p.category === 'video';
    return true;
  });

  return (
    <section id="work" className="py-24 md:py-32 relative z-10 border-t border-zinc-800/80 light:border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Simple, Bold Header */}
        <ScrollReveal direction="up" distance={25} duration={500}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-purple-400 light:text-purple-600 mb-3">
                02 · SELECTED WORK
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight font-display text-white light:text-zinc-950 leading-[1.05]">
                Engineered to Convert. <br />
                <span className="text-zinc-500 light:text-zinc-400 font-normal">Directed to Move.</span>
              </h2>
            </div>

            {/* Segmented Filter Control */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-zinc-900 light:bg-zinc-100 border border-zinc-800 light:border-zinc-300">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-colors cursor-pointer ${
                  filter === 'all'
                    ? 'bg-white text-zinc-950 font-bold shadow-sm'
                    : 'text-zinc-400 light:text-zinc-600 hover:text-white light:hover:text-black'
                }`}
              >
                All Commissions
              </button>
              <button
                type="button"
                onClick={() => setFilter('web')}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-colors cursor-pointer ${
                  filter === 'web'
                    ? 'bg-white text-zinc-950 font-bold shadow-sm'
                    : 'text-zinc-400 light:text-zinc-600 hover:text-white light:hover:text-black'
                }`}
              >
                Web Designing
              </button>
              <button
                type="button"
                onClick={() => setFilter('video')}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-colors cursor-pointer ${
                  filter === 'video'
                    ? 'bg-white text-zinc-950 font-bold shadow-sm'
                    : 'text-zinc-400 light:text-zinc-600 hover:text-white light:hover:text-black'
                }`}
              >
                Video Editing
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* High-Impact 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal
              key={project.id}
              direction="up"
              distance={30}
              delay={idx * 80}
              duration={550}
            >
              <div 
                className="group rounded-3xl border border-white/10 light:border-black/10 bg-white/5 light:bg-black/5 backdrop-blur-xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-purple-500/50 hover:shadow-purple-500/20 shadow-black/50 flex flex-col justify-between transform-gpu hover:-translate-y-2 hover:scale-[1.02] animate-float"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {/* Visual Image Stage */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                  <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Overlaid Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                    <span className="bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-white border border-white/10 uppercase tracking-wider text-[10px]">
                      {project.client}
                    </span>

                    {project.category === 'video' ? (
                      <span className="flex items-center gap-1.5 bg-purple-950/80 backdrop-blur-md px-3 py-1 rounded-full text-purple-300 border border-purple-500/40 text-[10px]">
                        <Film className="w-3 h-3" />
                        <span>Cinema 4K</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 bg-emerald-950/80 backdrop-blur-md px-3 py-1 rounded-full text-emerald-300 border border-emerald-500/40 text-[10px]">
                        <Code2 className="w-3 h-3" />
                        <span>Web 3D</span>
                      </span>
                    )}
                  </div>

                  {/* Quick Play Trigger */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.category === 'video' || onOpenVideoModal ? (
                      <button
                        type="button"
                        onClick={() => onOpenVideoModal && onOpenVideoModal(project)}
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-950 font-mono text-xs uppercase tracking-wider font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Watch 4K Cut</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => onOpenInquiry && onOpenInquiry(project.title)}
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-950 font-mono text-xs uppercase tracking-wider font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
                      >
                        <span>Inspect Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Bottom Image Stat */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-300 font-medium">Year: {project.year}</span>
                    <span className="text-emerald-400 font-bold bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
                      {project.resultStat} {project.resultLabel}
                    </span>
                  </div>
                </div>

                {/* Content Metadata */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-2xl font-bold font-display text-white light:text-zinc-950 tracking-tight mb-2 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-400 light:text-zinc-600 line-clamp-2 leading-relaxed mb-6">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-800/80 light:border-zinc-200 flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-500">{project.niche}</span>
                    <button
                      type="button"
                      onClick={() => onOpenInquiry && onOpenInquiry(project.title)}
                      className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 font-semibold cursor-pointer"
                    >
                      <span>Inquire Commission</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
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
              <div 
                className="h-full rounded-3xl border border-white/10 light:border-black/10 bg-white/5 light:bg-black/5 backdrop-blur-xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl transition-all duration-500 hover:border-purple-500/50 hover:shadow-purple-500/20 shadow-black/50 transform-gpu hover:-translate-y-2 hover:scale-[1.02] animate-float"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
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

export const BoldReputationSection: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section id="reputation" className="py-24 md:py-32 relative z-10 border-t border-zinc-800/80 light:border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Simple, Bold Header */}
        <ScrollReveal direction="up" distance={25} duration={500}>
          <div className="text-xs font-mono uppercase tracking-widest text-purple-400 light:text-purple-600 mb-3">
            04 · PROVEN OUTCOMES
          </div>
        </ScrollReveal>

        {/* Massive Bold Testimonial Feature Stage */}
        <ScrollReveal direction="up" distance={30} duration={600}>
          <div className="rounded-3xl border border-white/10 light:border-black/10 bg-white/5 light:bg-black/5 backdrop-blur-xl p-8 sm:p-14 lg:p-16 shadow-2xl transition-all duration-500 hover:border-purple-500/50 hover:shadow-purple-500/20 shadow-black/50 transform-gpu hover:-translate-y-2 hover:scale-[1.01] animate-float mb-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Massive Bold Quote Left */}
              <div className="lg:col-span-8">
                <blockquote className="text-2xl sm:text-4xl md:text-5xl font-semibold font-display text-white light:text-zinc-950 tracking-tight leading-[1.15] mb-8">
                  &ldquo;Orlyn Media unified our digital storefront and cinema storytelling in a single sprint. Our conversion rate surged 48% within 60 days.&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                    alt="Marcus Vance"
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border border-zinc-700"
                  />
                  <div>
                    <div className="text-base font-bold text-white light:text-zinc-950">
                      Marcus Vance
                    </div>
                    <div className="text-xs font-mono text-zinc-400 light:text-zinc-600">
                      Chief Marketing Officer · Solis Direct Global
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Big Metric Right */}
              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center border-t lg:border-t-0 lg:border-l border-zinc-800 light:border-zinc-200 pt-8 lg:pt-0 lg:pl-10">
                <div className="text-6xl sm:text-7xl font-mono font-bold text-white light:text-zinc-950 tracking-tight">
                  +48%
                </div>
                <div className="text-sm font-mono text-purple-400 font-semibold mt-1">
                  Verified Conversion Lift
                </div>
                <div className="mt-4 text-xs font-mono text-zinc-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Audited Revenue Impact</span>
                </div>
              </div>

            </div>

          </div>
        </ScrollReveal>

        {/* Client Roster Marquee / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center pt-8 border-t border-zinc-800/80 light:border-zinc-200">
          {TRUSTED_CLIENTS.map((client) => (
            <div key={client.name} className="flex flex-col">
              <span className="text-sm font-bold tracking-wider text-zinc-300 light:text-zinc-800 font-display">
                {client.logoText}
              </span>
              <span className="text-[10px] font-mono text-zinc-500 truncate mt-0.5">
                {client.city}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

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
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/5 light:bg-black/5 backdrop-blur-xl border border-white/10 light:border-black/10 mb-10 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform-gpu animate-float">
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
              className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full text-xs font-mono uppercase tracking-widest font-bold text-zinc-950 bg-white hover:bg-zinc-200 transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 cursor-pointer w-full sm:w-auto transform-gpu animate-float"
              style={{ animationDelay: '0.2s' }}
            >
              <span>Start 14-Day Sprint</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {onOpenChat && (
              <button
                type="button"
                onClick={onOpenChat}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-xs font-mono text-purple-300 light:text-purple-700 bg-purple-950/30 light:bg-purple-100 border border-purple-500/30 hover:bg-purple-900/40 hover:border-purple-500/60 transition-all duration-500 shadow-[0_0_20px_rgba(168,85,247,0.1)] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] cursor-pointer w-full sm:w-auto transform-gpu hover:scale-105 animate-float"
                style={{ animationDelay: '0.4s' }}
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


export const MainSections = ({ onOpenInquiry, onPlayReel, onOpenVideoModal, onOpenChat }: any) => {
  return (
    <>
      <TrustedStrip />
      <BoldCapabilitiesSection onOpenInquiry={onOpenInquiry} onPlayReel={onPlayReel} />
      <BoldWorkSection onOpenVideoModal={onOpenVideoModal} onOpenInquiry={onOpenInquiry} />
      <BoldSprintSection />
      <BoldReputationSection />
      <BoldCTASection onOpenInquiry={onOpenInquiry} onOpenChat={onOpenChat} />
    </>
  );
};
