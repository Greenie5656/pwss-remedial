interface HeroSwooshProps {
  className?: string;
}

export default function HeroSwoosh({ className = '' }: HeroSwooshProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 L520,0 Q480,300 380,500 Q280,700 0,800 Z"
          fill="var(--color-pwss-white)"
          opacity="0.07"
        />
        <path
          d="M0,0 L420,0 Q380,250 300,450 Q220,650 0,750 Z"
          fill="var(--color-pwss-white)"
          opacity="0.05"
        />
      </svg>
    </div>
  );
}