import { useEffect, useState } from 'react';

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'p' | 'span';
}

/** Texte visible par défaut, animation blur optionnelle si JS actif */
export default function BlurText({
  text,
  className = '',
  delay = 40,
  as: Tag = 'h1',
}: BlurTextProps) {
  const [visibleCount, setVisibleCount] = useState(text.length);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    setAnimate(true);
    setVisibleCount(0);

    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setVisibleCount(i);
      if (i >= text.length) window.clearInterval(id);
    }, delay);

    return () => window.clearInterval(id);
  }, [text, delay]);

  if (!animate) {
    return (
      <Tag className={className}>
        {text}
      </Tag>
    );
  }

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
