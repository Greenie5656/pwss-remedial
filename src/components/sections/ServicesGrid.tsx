'use client';

import {
  Search,
  Layers,
  Fence,
  CloudRain,
  Droplets,
  Syringe,
  HardHat,
  Shield,
  ArrowLeftRight,
  PaintBucket,
} from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { CONTACT } from '@/lib/constants';

const services = [
  {
    icon: Search,
    name: 'Leak Investigation',
    priority: 'primary' as const,
    description:
      'Systematic investigation to trace water ingress back to its source — not just where it appears. We use methodical testing to identify the exact failure point before any repair begins.',
  },
  {
    icon: Layers,
    name: 'Failed Membrane Replacement',
    priority: 'primary' as const,
    description:
      'Full removal and replacement of waterproofing membranes that have cracked, delaminated, or reached end of life in balconies, roofs, wet areas, and podiums.',
  },
  {
    icon: Fence,
    name: 'Balcony Waterproofing Repairs',
    priority: 'primary' as const,
    description:
      'Targeted repairs to leaking balconies including membrane replacement, tile re-bedding, drainage correction, and joint sealing across residential and strata properties.',
  },
  {
    icon: CloudRain,
    name: 'Roof Leak Rectification',
    priority: 'primary' as const,
    description:
      'Investigation and repair of roof waterproofing failures including failed flashings, deteriorated coatings, ponding water issues, and membrane breakdowns.',
  },
  {
    icon: Droplets,
    name: 'Water Ingress Repairs',
    priority: 'primary' as const,
    description:
      'Comprehensive repairs where water is entering through walls, windows, expansion joints, or below-ground structures. We solve the cause, not just the symptom.',
  },
  {
    icon: Syringe,
    name: 'Crack Injection',
    priority: 'secondary' as const,
    description:
      'High-pressure injection of polyurethane or epoxy resins into concrete cracks to seal active leaks and restore structural waterproofing integrity.',
  },
  {
    icon: HardHat,
    name: 'Concrete Remediation',
    priority: 'secondary' as const,
    description:
      'Repair of spalling, carbonation damage, and water-affected concrete including patching, resurfacing, and protective treatment to prevent further deterioration.',
  },
  {
    icon: Shield,
    name: 'Internal/External Waterproofing Repairs',
    priority: 'primary' as const,
    description:
      'Remedial waterproofing solutions for both internal wet areas and external building envelopes, including shower recesses, planter boxes, retaining walls, and facades.',
  },
  {
    icon: ArrowLeftRight,
    name: 'Expansion Joint Repairs',
    priority: 'secondary' as const,
    description:
      'Replacement and re-sealing of failed expansion joints in car parks, podiums, and building facades where movement has caused waterproofing breakdown.',
  },
  {
    icon: PaintBucket,
    name: 'Protective Coating Systems',
    priority: 'secondary' as const,
    description:
      'Application of high-performance protective coatings to concrete, steel, and masonry surfaces to prevent water penetration and extend asset life.',
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
};

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-pwss-gunmetal py-12 md:py-16 lg:py-20" aria-label="Our services">
      <Container>
        <article>
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight">
              Waterproofing Repair Services{' '}
              <span className="text-pwss-mint">Across Perth</span>
            </h2>
            <p className="mt-5 text-white/70 text-lg leading-relaxed">
              From initial leak investigation through to full membrane replacement,
              our remedial waterproofing services cover every stage of diagnosis
              and repair. We service residential homes, apartment complexes,
              commercial buildings, and strata properties in Perth, Joondalup,
              Osborne Park, Subiaco, Canning Vale, Fremantle, Rockingham,
              Mandurah, and Midland.
            </p>
          </div>

          {/* Services grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                className="group relative bg-pwss-gunmetal-400/30 border border-white/10 rounded-xl p-6 hover:border-pwss-mint/40 transition-all duration-300"
              >
                {/* Priority badge */}
                {service.priority === 'primary' && (
                  <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest font-semibold text-pwss-mint/60">
                    Core
                  </span>
                )}

                <div className="w-11 h-11 rounded-lg bg-pwss-mint/10 border border-pwss-mint/20 flex items-center justify-center mb-4 group-hover:bg-pwss-mint/20 transition-colors duration-300">
                  <service.icon size={22} className="text-pwss-mint" />
                </div>

                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  {service.name}
                </h3>

                <p className="text-sm text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <Button variant="primary" href="#contact" showArrow>
              Discuss Your Project
            </Button>
            <span className="text-white/40 text-sm">or call</span>
            <a
              href={CONTACT.phoneHref}
              className="text-pwss-aero hover:text-pwss-mint text-lg font-bold transition-colors duration-200"
            >
              {CONTACT.phone}
            </a>
          </div>
        </article>
      </Container>
    </section>
  );
}