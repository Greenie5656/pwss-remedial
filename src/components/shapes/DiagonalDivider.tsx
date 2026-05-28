interface DiagonalDividerProps {
  /** 'dark-to-light' = gunmetal section above, light below. 'light-to-dark' = opposite. */
  direction?: 'dark-to-light' | 'light-to-dark';
  /** 'swoosh' = gentle curve. 'v-cut' = pointed V shape. 'angle' = single diagonal. */
  variant?: 'swoosh' | 'v-cut' | 'angle';
  className?: string;
}

export default function DiagonalDivider({
  direction = 'dark-to-light',
  variant = 'swoosh',
  className = '',
}: DiagonalDividerProps) {
  const darkColor = 'var(--color-pwss-gunmetal)';
  const lightColor = 'var(--color-pwss-white)';

  // The fill is the colour of the section ABOVE — it extends down into the divider
  const fillColor = direction === 'dark-to-light' ? darkColor : lightColor;

  const paths: Record<string, string> = {
    swoosh: 'M0,0 L1440,0 L1440,20 Q720,120 0,40 Z',
    'v-cut': 'M0,0 L1440,0 L1440,20 L720,100 L0,20 Z',
    angle: 'M0,0 L1440,0 L1440,80 L0,20 Z',
  };

  return (
    <div className={`relative w-full overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full h-auto"
        preserveAspectRatio="none"
        style={{ display: 'block', marginBottom: '-1px' }}
      >
        <path d={paths[variant]} fill={fillColor} />
      </svg>
    </div>
  );
}