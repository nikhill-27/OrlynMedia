import React, { useEffect, useRef, useState } from 'react';

export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  distance?: number;
  duration?: number;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof React.JSX.IntrinsicElements;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  distance = 36,
  duration = 800,
  delay = 0,
  threshold = 0.12,
  rootMargin = '0px 0px -50px 0px',
  once = true,
  className = '',
  style = {},
  as: Component = 'div',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Gracefully handle environments without IntersectionObserver or with reduced motion
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  // Compute initial transform based on direction
  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0)`;
      case 'scale':
        return 'scale(0.96)';
      case 'fade':
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  const dynamicStyle: React.CSSProperties = {
    ...style,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate3d(0, 0, 0) scale(1)' : getInitialTransform(),
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: 'opacity, transform',
  };

  const ElementTag = Component as any;

  return (
    <ElementTag
      ref={elementRef}
      className={className}
      style={dynamicStyle}
    >
      {children}
    </ElementTag>
  );
};

/**
 * Custom hook to use IntersectionObserver directly on any DOM element
 */
export function useScrollReveal(options: {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
} = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -50px 0px', once = true } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsIntersecting(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isIntersecting };
}
