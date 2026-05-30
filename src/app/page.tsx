import Hero from '@/components/sections/Hero';
import ProblemFraming from '@/components/sections/ProblemFraming';
import ServicesGrid from '@/components/sections/ServicesGrid';
import DiagonalDivider from '@/components/shapes/DiagonalDivider';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Container from '@/components/ui/Container';

export default function Home() {
  return (
    <main>
      <Hero />

      <DiagonalDivider direction="dark-to-light" variant="swoosh" />

      <ProblemFraming />

      <DiagonalDivider direction="light-to-dark" variant="v-cut" />

      <ServicesGrid />

      <DiagonalDivider direction="dark-to-light" variant="swoosh" />

      {/* Placeholder — CTA banner next */}
      <SectionWrapper theme="light">
        <Container>
          <h2 className="font-heading text-3xl font-bold text-pwss-gunmetal">
            CTA banner coming next
          </h2>
        </Container>
      </SectionWrapper>
    </main>
  );
}