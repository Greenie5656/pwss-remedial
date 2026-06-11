import { Phone } from 'lucide-react';
import Container from '@/components/ui/Container';
import PhoneLink from '@/components/ui/PhoneLink';
import Button from '@/components/ui/Button';
import { CONTACT } from '@/lib/constants';

interface CTABannerProps {
  heading?: string;
  subtext?: string;
}

export default function CTABanner({
  heading = 'Not sure where the leak is coming from?',
  subtext = 'Our team will investigate the source, not just treat the symptom.',
}: CTABannerProps) {
  return (
    <section className="bg-pwss-gunmetal py-10 md:py-14" aria-label="Call to action">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left — brand wordmark + question */}
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="flex-shrink-0">
              <p className="font-heading text-2xl font-extrabold text-pwss-white tracking-tight leading-none">
                PWSS Remedial
              </p>
              <p className="font-heading text-xs font-medium text-pwss-aero uppercase tracking-widest mt-1">
                Perth Waterproofing &amp; Silicone Solutions
              </p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20" aria-hidden="true" />
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-pwss-mint">
                {heading}
              </h2>
              <p className="mt-2 text-white/60 text-sm md:text-base">
                {subtext}
              </p>
            </div>
          </div>

          {/* Right — CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button variant="primary" href="#contact" showArrow>
              Book a Free Inspection
            </Button>
            <PhoneLink className="flex items-center gap-3 text-white hover:text-pwss-mint transition-colors duration-200">
              <Phone size={20} className="text-pwss-aero" />
              <span className="text-lg font-bold">{CONTACT.phone}</span>
            </PhoneLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
