import React, { useState, useEffect } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { Project } from '../types';
import { X, Play, Pause, Volume2, VolumeX, Film } from 'lucide-react';

interface VideoModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ project, isOpen, onClose }) => {
  const { t } = useI18n();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    if (!isOpen) return;
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 99 ? 0 : prev + 1));
    }, 400);
    return () => clearInterval(timer);
  }, [isOpen, isPlaying]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      <div className="relative w-full max-w-4xl bg-[#0C0D11] border border-white/15 rounded-2xl overflow-hidden shadow-2xl z-10 my-8">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-black/50">
          <div className="flex items-center gap-3">
            <span className="p-1.5 rounded-lg bg-white/[0.05] text-white">
              <Film className="w-4 h-4" />
            </span>
            <div>
              <div className="text-sm font-bold text-white font-display">{project.title}</div>
              <div className="text-[11px] font-mono text-zinc-400">
                {project.client} &bull; {t.videoModal.masterTitle}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/[0.05] text-zinc-300 border border-white/10">
              {t.videoModal.badge}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/[0.04] text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Video Canvas Container */}
        <div className="relative aspect-video w-full bg-black overflow-hidden group">
          <img
            src={project.videoPreviewUrl || project.thumbnailUrl}
            alt={project.title}
            className="w-full h-full object-cover opacity-90 scale-100 group-hover:scale-102 transition-transform duration-700"
          />

          {/* Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

          {/* Center Play Overlay Toggle */}
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-current" />
            ) : (
              <Play className="w-6 h-6 fill-current translate-x-0.5" />
            )}
          </button>

          {/* Bottom Player Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            {/* Scrubber Bar */}
            <div className="w-full h-1 bg-white/20 rounded-full mb-3 cursor-pointer overflow-hidden">
              <div
                className="h-full bg-white"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-zinc-300">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  type="button"
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="text-[11px] text-zinc-500">
                  00:{progress < 10 ? `0${progress}` : progress} / 01:24
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] text-zinc-500">{t.videoModal.colorGrade}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Info Footer */}
        <div className="p-6 bg-black/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/[0.08]">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">{t.videoModal.resultLabel}</div>
            <div className="text-lg font-bold text-white font-mono">
              {project.resultStat}{' '}
              <span className="text-xs font-normal text-zinc-400 font-sans">
                {project.resultLabel}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-white/[0.04] text-[11px] font-mono text-zinc-300 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
