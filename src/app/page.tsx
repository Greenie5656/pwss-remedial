import Hero from '@/components/sections/Hero';
import ProblemFraming from '@/components/sections/ProblemFraming';
import ServicesGrid from '@/components/sections/ServicesGrid';
import CTABanner from '@/components/sections/CTABanner';
import CaseStudies from '@/components/sections/CaseStudies';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ServiceAreas from '@/components/sections/ServiceAreas';
import FAQ from '@/components/sections/FAQ';
import ContactForm from '@/components/sections/ContactForm';
import DiagonalDivider from '@/components/shapes/DiagonalDivider';

export default function Home() {
  return (
    <main>
      {/* Dark */}
      <Hero />
      <DiagonalDivider direction="dark-to-light" variant="swoosh" />

      {/* Light */}
      <ProblemFraming />
      <DiagonalDivider direction="light-to-dark" variant="v-cut" />

      {/* Dark */}
      <ServicesGrid />
      <DiagonalDivider direction="dark-to-light" variant="angle" />

      {/* Light */}
      <CaseStudies />
      <DiagonalDivider direction="light-to-dark" variant="v-cut" />

      {/* Dark */}
      <WhyChooseUs />
      <DiagonalDivider direction="dark-to-light" variant="swoosh" />

      {/* Light */}
      <ServiceAreas />
      <DiagonalDivider direction="light-to-dark" variant="angle" />

      {/* Dark — CTA */}
      <CTABanner
        heading="Water damage won't wait. Neither should you."
        subtext="Call now for a free site assessment anywhere in the Perth metro area."
      />
      <DiagonalDivider direction="dark-to-light" variant="v-cut" />

      {/* Light */}
      <FAQ />
      <DiagonalDivider direction="light-to-dark" variant="swoosh" />

      {/* Dark */}
      <ContactForm />

      {/* Contact / Footer divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-pwss-mint/40 to-transparent" aria-hidden="true" />
      
    </main>
  );
}