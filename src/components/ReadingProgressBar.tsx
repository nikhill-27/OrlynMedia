import React, { useState, useEffect } from 'react';

export const ReadingProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      if (scrollHeight > 0) {
        const progress = Math.min(Math.max(scrollTop / scrollHeight, 0), 1);
        setScrollProgress(progress);
        setIsVisible(scrollTop > 10);
      } else {
        setScrollProgress(0);
        setIsVisible(false);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Initial check
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[100] h-[2.5px] pointer-events-none transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Background track (ultra faint) */}
      <div className="absolute inset-0 bg-white/[0.04]" />

      {/* Dynamic progress bar with smooth GPU-accelerated scaleX */}
      <div
        className="h-full w-full bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#C4B5FD] origin-left shadow-[0_0_10px_rgba(139,92,246,0.65)] transition-transform duration-75 ease-out will-change-transform"
        style={{
          transform: `scaleX(${scrollProgress})`,
        }}
      />
    </div>
  );
};
