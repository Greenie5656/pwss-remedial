interface CardClipProps {
  /** The accent colour for the diagonal strip */
  accentColor?: string;
  children: React.ReactNode;
  className?: string;
}

export default function CardClip({
  accentColor = 'var(--color-pwss-mint)',
  children,
  className = '',
}: CardClipProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Diagonal accent strip */}
      <div
        className="absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          background: accentColor,
          clipPath: 'polygon(0 0, 35% 0, 15% 100%, 0 100%)',
        }}
      />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}