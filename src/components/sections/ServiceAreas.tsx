'use client';

import { MapPin } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { SUBURBS } from '@/lib/constants';

const suburbDetails: Record<string, string> = {
  'Perth': 'CBD and inner suburbs including Northbridge, East Perth, and West Perth.',
  'Joondalup': 'Northern corridor covering Joondalup, Wanneroo, Clarkson, and surrounding suburbs.',
  'Osborne Park': 'Light industrial and commercial precincts across Osborne Park and Stirling.',
  'Subiaco': 'Inner western suburbs including Subiaco, Shenton Park, and Nedlands.',
  'Canning Vale': 'Southern corridor covering Canning Vale, Willetton, and Riverton.',
  'Fremantle': 'Port city and surrounds including South Fremantle, East Fremantle, and Cockburn.',
  'Rockingham': 'Coastal southern suburbs from Rockingham through to Baldivis and Warnbro.',
  'Mandurah': 'Southern reach covering Mandurah, Pinjarra, and the Peel region.',
  'Midland': 'Eastern corridor including Midland, Swan View, Guildford, and the hills district.',
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
};

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="bg-pwss-white bg-image-light py-12 md:py-16 lg:py-20" aria-label="Service areas">
      <Container>
        <article>
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-pwss-gunmetal leading-tight">
              Remedial Waterproofing{' '}
              <span className="text-pwss-mint">Across Perth</span>
            </h2>
            <p className="mt-5 text-pwss-gunmetal-600 text-lg leading-relaxed">
              Remedial Waterproofing Perth services residential, commercial, and
              strata properties throughout the Perth metropolitan area. From
              Joondalup in the north to Mandurah in the south, and from Fremantle
              on the coast to Midland in the east - our team covers the full metro
              region for leak investigations, membrane replacements, and all
              remedial waterproofing repairs.
            </p>
          </div>

          {/* Suburb grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SUBURBS.map((suburb, i) => (
              <motion.div
                key={suburb}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                variants={fadeUp}
                className="group flex items-start gap-4 bg-white rounded-xl p-5 border border-pwss-white-400/50 hover:border-pwss-mint/30 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-pwss-gunmetal flex items-center justify-center flex-shrink-0 group-hover:bg-pwss-mint transition-colors duration-300">
                  <MapPin size={18} className="text-pwss-mint group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-pwss-gunmetal mb-1">
                    {suburb}
                  </h3>
                  <p className="text-sm text-pwss-gunmetal-600 leading-relaxed">
                    {suburbDetails[suburb]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Coverage note */}
          <div className="mt-10 bg-pwss-gunmetal rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="flex-1">
              <h3 className="font-heading text-lg font-bold text-white mb-2">
                Don&apos;t see your suburb?
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                We regularly work outside these core areas. If you&apos;re in the
                greater Perth region, give us a call - we&apos;ll let you know if
                we can help.
              </p>
            </div>
            <Button variant="primary" href="#contact" showArrow>
              Check Availability
            </Button>
          </div>
        </article>
      </Container>
    </section>
  );
}