import { useEffect, useState } from 'react';

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'p' | 'span';
}

/** Inspiré de React Bits BlurText — révélation caractère par caractère */
export default function BlurText({
  text,
  className = '',
  delay = 40,
  as: Tag = 'h1',
}: BlurTextProps) {
  const [visibleCount, setVisibleCount] = useState(0);
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (reduced) {
      setVisibleCount(text.length);
      return;
    }

    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setVisibleCount(i);
      if (i >= text.length) window.clearInterval(id);
    }, delay);

    return () => window.clearInterval(id);
  }, [text, delay, reduced]);

  return (
    <Tag className={className} aria-label={text}>
      {text.split('').map((char, index) => (
        <span
          key={`${char}-${index}`}
          aria-hidden="true"
          style={{
            display: 'inline-block',
            opacity: index < visibleCount ? 1 : 0,
            filter: index < visibleCount ? 'blur(0)' : 'blur(8px)',
            transform: index < visibleCount ? 'translateY(0)' : 'translateY(6px)',
            transition: 'opacity 0.35s ease, filter 0.35s ease, transform 0.35s ease',
            whiteSpace: char === ' ' ? 'pre' : undefined,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Tag>
  );
}
