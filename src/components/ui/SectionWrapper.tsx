interface SectionWrapperProps {
  /** 'dark' = gunmetal background, light text. 'light' = anti-flash-white background, dark text. */
  theme?: 'dark' | 'light';
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function SectionWrapper({
  theme = 'light',
  id,
  className = '',
  children,
}: SectionWrapperProps) {
  const themes = {
    dark: 'bg-pwss-gunmetal text-white/80',
    light: 'bg-pwss-white text-pwss-gunmetal-600',
  };

  return (
    <section
      id={id}
      className={`py-12 md:py-16 lg:py-20 ${themes[theme]} ${className}`}
    >
      {children}
    </section>
  );
}