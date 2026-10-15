'use client';

import { sendGAEvent } from '@next/third-parties/google';

interface EmailLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  location?: string;
}

export default function EmailLink({ href, className = '', children, location = 'unspecified' }: EmailLinkProps) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => sendGAEvent('event', 'email_click', { email_address: href.replace('mailto:', ''), location })}
    >
      {children}
    </a>
  );
}
