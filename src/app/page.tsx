import HeroSwoosh from '@/components/shapes/HeroSwoosh';
import DiagonalDivider from '@/components/shapes/DiagonalDivider';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import PhoneLink from '@/components/ui/PhoneLink';
import { CONTACT } from '@/lib/constants';
import { Phone } from 'lucide-react';

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-pwss-gunmetal min-h-[75vh] flex items-center">
        <HeroSwoosh />
        <Container className="relative z-10 pt-20">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-3xl">
            Remedial Waterproofing{' '}
            <span className="text-pwss-mint">Perth</span>
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-xl">
            Expert leak investigation and waterproofing repairs across residential
            and commercial properties throughout Perth.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button variant="primary" href="#contact" showArrow fullWidth>
              Request a Quote
            </Button>
            <Button variant="secondary" href="#services" showArrow fullWidth>
              Our Services
            </Button>
          </div>
          <PhoneLink className="mt-6 inline-flex items-center gap-2 text-pwss-aero hover:text-pwss-mint transition-colors duration-200">
            <Phone size={18} />
            <span className="font-semibold">{CONTACT.phone}</span>
          </PhoneLink>
        </Container>
      </section>

      <DiagonalDivider direction="dark-to-light" variant="swoosh" />

      {/* Light section */}
      <SectionWrapper theme="light" id="services">
        <Container>
          <h2 className="font-heading text-3xl font-bold text-pwss-gunmetal">
            Our <span className="text-pwss-mint">Services</span>
          </h2>
          <p className="mt-4 max-w-2xl">
            Remedial waterproofing involves diagnosing and repairing existing
            waterproofing failures in residential, commercial, and strata buildings.
          </p>
        </Container>
      </SectionWrapper>

      <DiagonalDivider direction="light-to-dark" variant="v-cut" />

      {/* Dark CTA banner */}
      <SectionWrapper theme="dark">
        <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="font-heading text-2xl font-bold text-pwss-mint">
            Not sure where the leak is coming from?
          </h2>
          <PhoneLink className="flex items-center gap-3 text-white hover:text-pwss-mint transition-colors duration-200">
            <Phone size={22} className="text-pwss-aero" />
            <span className="text-xl font-bold">{CONTACT.phone}</span>
          </PhoneLink>
        </Container>
      </SectionWrapper>

      <DiagonalDivider direction="dark-to-light" variant="swoosh" />

      {/* Light section */}
      <SectionWrapper theme="light" id="contact">
        <Container className="text-center">
          <h2 className="font-heading text-3xl font-bold text-pwss-gunmetal">
            Get a Free <span className="text-pwss-mint">Assessment</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto">
            Contact form will go here.
          </p>
          <div className="mt-8">
            <Button variant="primary" href="tel:1300271425" showArrow>
              Call {CONTACT.phone}
            </Button>
          </div>
        </Container>
      </SectionWrapper>
    </main>
  );
}