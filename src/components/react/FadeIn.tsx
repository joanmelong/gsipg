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

/** Contenu visible par défaut (SSR + no-JS), animation si React charge */
export default function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 600,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;

    if (!inView) {
      setVisible(false);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        window.setTimeout(() => setVisible(true), delay);
        observer.disconnect();
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' },
    );

    observer.observe(el);

    if (inView) {
      window.setTimeout(() => setVisible(true), delay);
      observer.disconnect();
    }

    return () => observer.disconnect();
  }, [delay]);

  const style: CSSProperties = visible
    ? { opacity: 1, transform: 'none' }
    : {
        opacity: 0,
        transform: offsets[direction],
        transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
        willChange: 'opacity, transform',
      };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
