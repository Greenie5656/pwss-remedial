export default function Home() {
  return (
    <main className="p-8 space-y-8">
      <h1 className="font-heading text-4xl font-extrabold text-pwss-gunmetal">
        PWSS Colour & Font Test
      </h1>
      <p className="font-body text-lg text-pwss-gunmetal-600">
        Body text in gunmetal-600 using Inter. If you can read this clearly, fonts are working.
      </p>

      {/* Colour swatches */}
      <div className="grid grid-cols-5 gap-4">
        <div className="h-24 rounded-lg bg-pwss-white border border-pwss-white-400 flex items-end p-2">
          <span className="text-xs text-pwss-gunmetal">Anti-flash White</span>
        </div>
        <div className="h-24 rounded-lg bg-pwss-gunmetal flex items-end p-2">
          <span className="text-xs text-white">Gunmetal</span>
        </div>
        <div className="h-24 rounded-lg bg-pwss-mint flex items-end p-2">
          <span className="text-xs text-white">Mint</span>
        </div>
        <div className="h-24 rounded-lg bg-pwss-aero flex items-end p-2">
          <span className="text-xs text-white">Aero</span>
        </div>
        <div className="h-24 rounded-lg bg-pwss-cyan flex items-end p-2">
          <span className="text-xs text-white">Dark Cyan</span>
        </div>
      </div>

      {/* Dark section test */}
      <section className="bg-pwss-gunmetal rounded-xl p-8 space-y-4">
        <h2 className="font-heading text-2xl font-bold text-white">
          Dark Section — <span className="text-pwss-mint">Mint Accent</span>
        </h2>
        <p className="text-pwss-white/80">
          Body text on dark background using rgba white. 
          <span className="text-pwss-aero"> Aero link colour.</span>
        </p>
        <button className="bg-pwss-mint hover:bg-pwss-cyan text-white font-body font-semibold px-6 py-3 rounded transition-colors duration-200">
          CTA Button (mint → cyan hover)
        </button>
      </section>

      {/* Light section test */}
      <section className="bg-pwss-white rounded-xl p-8 space-y-4">
        <h2 className="font-heading text-2xl font-bold text-pwss-gunmetal">
          Light Section Heading
        </h2>
        <p className="text-pwss-gunmetal-600">
          Body copy on light background in gunmetal-600. This should be easy to read with good contrast.
        </p>
      </section>

      {/* Shade strips */}
      <div className="space-y-2">
        <p className="text-sm font-semibold text-pwss-gunmetal">Gunmetal shades (100–900):</p>
        <div className="flex gap-1">
          {['bg-pwss-gunmetal-100','bg-pwss-gunmetal-200','bg-pwss-gunmetal-300','bg-pwss-gunmetal-400','bg-pwss-gunmetal-500','bg-pwss-gunmetal-600','bg-pwss-gunmetal-700','bg-pwss-gunmetal-800','bg-pwss-gunmetal-900'].map((c) => (
            <div key={c} className={`${c} h-10 flex-1 rounded`} />
          ))}
        </div>
        <p className="text-sm font-semibold text-pwss-gunmetal">Mint shades (100–900):</p>
        <div className="flex gap-1">
          {['bg-pwss-mint-100','bg-pwss-mint-200','bg-pwss-mint-300','bg-pwss-mint-400','bg-pwss-mint-500','bg-pwss-mint-600','bg-pwss-mint-700','bg-pwss-mint-800','bg-pwss-mint-900'].map((c) => (
            <div key={c} className={`${c} h-10 flex-1 rounded`} />
          ))}
        </div>
      </div>
    </main>
  );
}