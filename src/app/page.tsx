import HeroSwoosh from '@/components/shapes/HeroSwoosh';
import DiagonalDivider from '@/components/shapes/DiagonalDivider';
import CardClip from '@/components/shapes/CardClip';

export default function Home() {
  return (
    <main>
      {/* Hero with swoosh */}
      <section className="relative bg-pwss-gunmetal min-h-[75vh] flex items-center justify-center">
        <HeroSwoosh />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white">
            Remedial Waterproofing <span className="text-pwss-mint">Perth</span>
          </h1>
          <p className="mt-4 text-white/70 text-lg">Shape components test page</p>
        </div>
      </section>

      {/* Swoosh divider — dark to light */}
      <DiagonalDivider direction="dark-to-light" variant="swoosh" />

      {/* Light section */}
      <section className="bg-pwss-white py-20 flex items-center justify-center">
        <h2 className="font-heading text-3xl font-bold text-pwss-gunmetal">Light Section (swoosh above)</h2>
      </section>

      {/* V-cut divider — light to dark */}
      <DiagonalDivider direction="light-to-dark" variant="v-cut" />

      {/* Dark CTA banner */}
      <section className="bg-pwss-gunmetal py-16 flex items-center justify-center">
        <h2 className="font-heading text-2xl font-bold text-pwss-mint">CTA Banner (V-cut above)</h2>
      </section>

      {/* Angle divider — dark to light */}
      <DiagonalDivider direction="dark-to-light" variant="angle" />

      {/* Light section with card clips */}
      <section className="bg-pwss-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-pwss-gunmetal mb-8">Card Clip Test (angle above)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CardClip accentColor="var(--color-pwss-mint)" className="bg-pwss-gunmetal rounded-xl h-48 flex items-center justify-center">
              <p className="text-white font-semibold">Mint diagonal strip</p>
            </CardClip>
            <CardClip accentColor="var(--color-pwss-aero)" className="bg-pwss-gunmetal rounded-xl h-48 flex items-center justify-center">
              <p className="text-white font-semibold">Aero diagonal strip</p>
            </CardClip>
          </div>
        </div>
      </section>
    </main>
  );
}