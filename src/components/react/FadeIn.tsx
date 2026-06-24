import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  duration?: number;
}

const offsets: Record<Direction, string> = {
  up: 'translateY(28px)',
  down: 'translateY(-28px)',
  left: 'translateX(28px)',
  right: 'translateX(-28px)',
  none: 'none',
};

/** Inspiré de React Bits FadeContent / AnimatedContent */
export default function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 600,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        window.setTimeout(() => setVisible(true), delay);
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const style: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : offsets[direction],
    transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
    willChange: visible ? 'auto' : 'opacity, transform',
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
