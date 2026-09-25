import React, { useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';

export const ParticleBackground: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { isDark } = useTheme();

  // Generate deterministic subtle starfield particles
  const stars = useMemo(() => {
    return Array.from({ length: 48 }).map((_, i) => {
      // Deterministic pseudorandom values based on index
      const top = ((i * 37 + 13) % 94);
      const left = ((i * 53 + 27) % 96);
      const size = (i % 5 === 0) ? 2 : (i % 3 === 0) ? 1.5 : 1;
      const opacity = 0.2 + ((i * 19) % 65) / 100;
      const delay = (i * 0.4) % 4;
      const duration = 3 + (i % 3) * 2;
      return { id: i, top, left, size, opacity, delay, duration };
    });
  }, []);

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-0 overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-[#090812]' : 'bg-[#FAFAFC]'
      } ${className}`}
      aria-hidden="true"
    >
      {/* 1. Atmospheric Purple Nebula Glow */}
      <div
        className={`absolute -top-24 left-[5%] md:left-[15%] w-[650px] md:w-[900px] h-[550px] md:h-[750px] rounded-full blur-[120px] transition-opacity duration-500 ${
          isDark
            ? 'bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.14)_0%,rgba(109,40,217,0.06)_45%,transparent_75%)] opacity-100'
            : 'bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.08)_0%,rgba(99,102,241,0.04)_50%,transparent_70%)] opacity-80'
        }`}
      />

      {/* 2. Secondary ambient haze in upper right */}
      <div
        className={`absolute top-10 right-[-10%] w-[500px] h-[500px] rounded-full blur-[130px] transition-opacity duration-500 ${
          isDark
            ? 'bg-[radial-gradient(circle,rgba(99,102,241,0.06)_0%,transparent_70%)] opacity-100'
            : 'bg-[radial-gradient(circle,rgba(139,92,246,0.05)_0%,transparent_70%)] opacity-70'
        }`}
      />

      {/* 3. High-Contrast Light Mode subtle technical grid */}
      {!isDark && (
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
      )}

      {/* 4. Subtle particles matching the theme */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <span
            key={star.id}
            className={`absolute rounded-full transition-all duration-500 ${
              isDark ? 'bg-white' : 'bg-zinc-800'
            }`}
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: isDark ? star.opacity : star.opacity * 0.45,
              boxShadow: isDark && star.size > 1.2 ? '0 0 4px rgba(255, 255, 255, 0.8)' : 'none',
              animation: `pulse ${star.duration}s ease-in-out infinite ${star.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
