import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/agencyData';
import { ArrowUpRight, Play, Film, Code2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ScrollReveal } from './ScrollReveal';

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
                className="group rounded-3xl border border-zinc-800/80 light:border-zinc-200 bg-[#08090D] light:bg-white overflow-hidden shadow-xl transition-all duration-500 hover:border-purple-500/50 flex flex-col justify-between"
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
