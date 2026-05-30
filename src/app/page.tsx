import Hero from '@/components/sections/Hero';
import DiagonalDivider from '@/components/shapes/DiagonalDivider';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Container from '@/components/ui/Container';

export default function Home() {
  return (
    <main>
      <Hero />

      <DiagonalDivider direction="dark-to-light" variant="swoosh" />

      {/* Placeholder — next section goes here */}
      <SectionWrapper theme="light" id="services">
        <Container>
          <h2 className="font-heading text-3xl font-bold text-pwss-gunmetal">
            Services section coming next
          </h2>
        </Container>
      </SectionWrapper>
    </main>
  );
}