'use client';

import { Droplets, AlertTriangle, SearchCheck, ShieldCheck } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import Container from '@/components/ui/Container';

const painPoints = [
  {
    icon: Droplets,
    title: 'Water Where It Shouldn\'t Be',
    text: 'Persistent leaks through balconies, roofs, walls, or podiums that keep coming back after surface-level fixes.',
  },
  {
    icon: AlertTriangle,
    title: 'Previous Repairs That Failed',
    text: 'Silicone patches, paint-over jobs, or band-aid fixes that never addressed the root cause of the failure.',
  },
  {
    icon: SearchCheck,
    title: 'No Clear Diagnosis',
    text: 'Water appearing far from the actual entry point, making it difficult to pinpoint where the waterproofing has broken down.',
  },
  {
    icon: ShieldCheck,
    title: 'Strata & Compliance Pressure',
    text: 'Building managers and strata bodies needing documented investigations, scope reports, and certified repair solutions.',
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function ProblemFraming() {
  return (
    <section id="what-is-remedial" className="bg-pwss-white texture-light bg-branded-texture py-12 md:py-16 lg:py-20" aria-label="What is remedial waterproofing">
      <Container>
        <article>
          {/* Definition — front-loaded for AI extraction */}
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-pwss-gunmetal leading-tight">
              What Is Remedial{' '}
              <span className="text-pwss-mint">Waterproofing?</span>
            </h2>
            <p className="mt-5 text-pwss-gunmetal-600 text-lg leading-relaxed">
              Remedial waterproofing is the process of diagnosing and repairing
              existing waterproofing failures in buildings. Unlike new-build
              waterproofing applied during construction, remedial work targets
              problems that have developed over time - failed membranes, cracked
              joints, deteriorated coatings, and water ingress through walls,
              balconies, roofs, and podiums.
            </p>
            <p className="mt-4 text-pwss-gunmetal-600 leading-relaxed">
              Remedial Waterproofing Perth is a division of Perth Waterproofing
              &amp; Silicone Solutions, delivering investigation-led repair
              solutions across residential, commercial, and strata properties
              in Perth, Joondalup, Fremantle, Rockingham, and the wider metro area.
            </p>
          </div>

          {/* Pain point cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((point, i) => (
              <motion.div
                key={point.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                className="bg-white rounded-xl p-6 shadow-sm border border-pwss-white-400/50 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-pwss-gunmetal flex items-center justify-center mb-4">
                  <point.icon size={22} className="text-pwss-mint" />
                </div>
                <h3 className="font-heading text-base font-bold text-pwss-gunmetal mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-pwss-gunmetal-600 leading-relaxed">
                  {point.text}
                </p>
              </motion.div>
            ))}
          </div>
        </article>
      </Container>
    </section>
  );
}