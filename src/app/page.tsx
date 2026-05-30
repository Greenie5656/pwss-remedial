import Hero from '@/components/sections/Hero';
import ProblemFraming from '@/components/sections/ProblemFraming';
import ServicesGrid from '@/components/sections/ServicesGrid';
import CTABanner from '@/components/sections/CTABanner';
import CaseStudies from '@/components/sections/CaseStudies';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import DiagonalDivider from '@/components/shapes/DiagonalDivider';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Container from '@/components/ui/Container';

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

      {/* Light — Service Areas placeholder */}
      <SectionWrapper theme="light" id="service-areas">
        <Container>
          <h2 className="font-heading text-3xl font-bold text-pwss-gunmetal">
            Service Areas coming next
          </h2>
        </Container>
      </SectionWrapper>
      <DiagonalDivider direction="light-to-dark" variant="angle" />

      {/* Dark — CTA (moved here, between light sections) */}
      <CTABanner />
      <DiagonalDivider direction="dark-to-light" variant="v-cut" />

      {/* Light — FAQ placeholder */}
      <SectionWrapper theme="light" id="faq">
        <Container>
          <h2 className="font-heading text-3xl font-bold text-pwss-gunmetal">
            FAQ coming next
          </h2>
        </Container>
      </SectionWrapper>
    </main>
  );
}