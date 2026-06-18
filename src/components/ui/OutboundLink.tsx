'use client';

import { sendGAEvent } from '@next/third-parties/google';

interface OutboundLinkProps {
  href: string;
  className?: string;
  target?: string;
  rel?: string;
  'aria-label'?: string;
  children: React.ReactNode;
}

export default function OutboundLink({
  href,
  className = '',
  target,
  rel,
  'aria-label': ariaLabel,
  children,
}: OutboundLinkProps) {
  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      onClick={() => sendGAEvent('event', 'outbound_click', { destination_url: href })}
    >
      {children}
    </a>
  );
}
