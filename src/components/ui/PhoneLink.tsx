'use client';

import { sendGAEvent } from '@next/third-parties/google';
import { CONTACT } from '@/lib/constants';

interface PhoneLinkProps {
  className?: string;
  children?: React.ReactNode;
}

export default function PhoneLink({ className = '', children }: PhoneLinkProps) {
  return (
    <a
      href={CONTACT.phoneHref}
      className={className}
      aria-label={`Call ${CONTACT.phone}`}
      onClick={() => sendGAEvent('event', 'phone_click', { phone_number: CONTACT.phone })}
    >
      {children || CONTACT.phone}
    </a>
  );
}