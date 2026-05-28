export default function Home() {
  return (
    <main>
      {/* Temporary dark hero block to see the nav against */}
      <section className="bg-pwss-gunmetal min-h-screen flex items-center justify-center">
        <h1 className="font-heading text-4xl font-extrabold text-white">
          Remedial Waterproofing <span className="text-pwss-mint">Perth</span>
        </h1>
      </section>

      {/* Light section for scroll contrast */}
      <section id="services" className="bg-pwss-white min-h-screen flex items-center justify-center">
        <h2 className="font-heading text-3xl font-bold text-pwss-gunmetal">Services Section</h2>
      </section>

      {/* Dark section */}
      <section id="contact" className="bg-pwss-gunmetal min-h-screen flex items-center justify-center">
        <h2 className="font-heading text-3xl font-bold text-white">Contact Section</h2>
      </section>
    </main>
  );
}