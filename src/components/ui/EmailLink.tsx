'use client';

import { sendGAEvent } from '@next/third-parties/google';

interface EmailLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function EmailLink({ href, className = '', children }: EmailLinkProps) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => sendGAEvent('event', 'email_click', { email_address: href.replace('mailto:', '') })}
    >
      {children}
    </a>
  );
}
