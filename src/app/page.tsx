import Hero from '@/components/sections/Hero';
import ProblemFraming from '@/components/sections/ProblemFraming';
import ServicesGrid from '@/components/sections/ServicesGrid';
import CTABanner from '@/components/sections/CTABanner';
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

      {/* Light — case studies */}
      <SectionWrapper theme="light" id="case-studies">
        <Container>
          <h2 className="font-heading text-3xl font-bold text-pwss-gunmetal">
            Case studies coming next
          </h2>
        </Container>
      </SectionWrapper>
      <DiagonalDivider direction="light-to-dark" variant="v-cut" />

      {/* Dark — CTA */}
      <CTABanner />
      <DiagonalDivider direction="dark-to-light" variant="swoosh" />

      {/* Light — placeholder for remaining sections */}
      <SectionWrapper theme="light">
        <Container>
          <h2 className="font-heading text-3xl font-bold text-pwss-gunmetal">
            More sections coming
          </h2>
        </Container>
      </SectionWrapper>
    </main>
  );
}