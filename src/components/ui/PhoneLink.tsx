import { CONTACT } from '@/lib/constants';

interface PhoneLinkProps {
  className?: string;
  children?: React.ReactNode;
}

export default function PhoneLink({ className = '', children }: PhoneLinkProps) {
  return (
    <a href={CONTACT.phoneHref} className={className} aria-label={`Call ${CONTACT.phone}`}>
      {children || CONTACT.phone}
    </a>
  );
}