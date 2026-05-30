'use client';

import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroSwoosh from '@/components/shapes/HeroSwoosh';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import PhoneLink from '@/components/ui/PhoneLink';
import { CONTACT, COMPANY } from '@/lib/constants';

export default function Hero() {
  return (
    <section
      className="relative bg-pwss-gunmetal min-h-[75vh] flex items-center overflow-hidden"
      aria-label="Hero"
    >
      <HeroSwoosh />

      <Container className="relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          {/* Trust line */}
          <p className="text-pwss-aero text-sm font-semibold uppercase tracking-widest mb-4">
            Backed by Perth Waterproofing &amp; Silicone Solutions
          </p>

          {/* H1 — primary keyword */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Remedial Waterproofing{' '}
            <span className="text-pwss-mint">Perth</span>
          </h1>

          {/* Value proposition */}
          <p className="mt-5 text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
            Expert leak investigation and waterproofing failure repairs for
            residential, commercial, and strata properties across the Perth
            metro area.
          </p>

          {/* Trust stats */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/60">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pwss-mint" aria-hidden="true" />
              Licensed &amp; Certified
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pwss-mint" aria-hidden="true" />
              {COMPANY.tagline}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pwss-mint" aria-hidden="true" />
              Perth Metro Wide
            </span>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button variant="primary" href="#contact" showArrow fullWidth>
              Book a Free Inspection
            </Button>
            <Button variant="secondary" href="#services" showArrow fullWidth>
              Our Services
            </Button>
          </div>

          {/* Phone */}
          <PhoneLink className="mt-6 inline-flex items-center gap-2 text-pwss-aero hover:text-pwss-mint transition-colors duration-200">
            <Phone size={18} />
            <span className="font-semibold text-lg">{CONTACT.phone}</span>
          </PhoneLink>
        </motion.div>
      </Container>
    </section>
  );
}