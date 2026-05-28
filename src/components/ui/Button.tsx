import { ChevronRight } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  href?: string;
  showArrow?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

export default function Button({
  variant = 'primary',
  href,
  showArrow = false,
  fullWidth = false,
  children,
  className = '',
  type = 'button',
  onClick,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-body font-semibold rounded transition-colors duration-200 uppercase tracking-wider text-sm px-6 py-3';

  const variants = {
    primary: 'bg-pwss-mint hover:bg-pwss-cyan text-white',
    secondary: 'border border-white/60 hover:border-pwss-mint text-white hover:text-pwss-mint bg-transparent',
  };

  const width = fullWidth ? 'w-full sm:w-auto' : '';

  const classes = `${base} ${variants[variant]} ${width} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && <ChevronRight size={16} />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}