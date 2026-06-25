import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

/** Inspiré de React Bits CountUp */
export default function CountUp({
  value,
  suffix = '',
  duration = 1500,
  className = '',
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(`0${suffix}`);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(`${value}${suffix}`);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(`${Math.round(value * eased)}${suffix}`);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
