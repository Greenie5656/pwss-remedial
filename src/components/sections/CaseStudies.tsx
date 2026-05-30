'use client';

import Image from 'next/image';
import { MapPin, CheckCircle, Clock } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

interface CaseStudyPhoto {
  src: string;
  alt: string;
  label: string;
}

interface CaseStudy {
  title: string;
  location: string;
  photos: CaseStudyPhoto[];
  scope: string[];
  summary: string;
  result: string;
  accentColor: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: 'WA Hockey Stadium',
    location: 'Bentley, WA',
    photos: [
      {
        src: '/images/case-studies/hockey-stadium-before.jpg',
        alt: 'WA Hockey Stadium grandstand before waterproofing — bare concrete substrate',
        label: 'Before',
      },
      {
        src: '/images/case-studies/hockey-stadium-applying.jpg',
        alt: 'PWSS team applying waterproof membrane to stadium grandstand seating area',
        label: 'Applying',
      },
      {
        src: '/images/case-studies/hockey-stadium-detail.jpg',
        alt: 'Close-up detail of membrane and anti-slip coating application on grandstand steps',
        label: 'Detail',
      },
      {
        src: '/images/case-studies/hockey-stadium-finished.jpg',
        alt: 'Completed waterproof membrane and anti-slip coating on WA Hockey Stadium grandstand',
        label: 'Finished',
      },
    ],
    scope: [
      'Grandstand waterproof membrane',
      'Anti-slip coating system',
      'UV-stable protective top coat',
      'Concrete substrate preparation',
    ],
    summary:
      'PWSS delivered a full waterproofing and anti-slip coating system for the grandstand at WA Hockey Stadium. The project involved meticulous substrate grinding to expose bare concrete pores, application of Adflex WBE primer, Rimseal 170 UV-stable membrane, and two coats of Deckpro 80 non-slip top coat - ensuring the venue is safe for public foot traffic and protected against Perth\'s intense UV exposure.',
    result:
      'High-performance waterproofing with a durable, non-slip, trafficable finish ready for top-level competition. Delivered on time with full client satisfaction.',
    accentColor: 'var(--color-pwss-mint)',
  },
  {
    title: '2 Goderich Street',
    location: 'East Perth, WA',
    photos: [
      {
        src: '/images/case-studies/hockey-stadium-applying.jpg',
        alt: 'Remedial waterproofing works at 2 Goderich Street commercial property in East Perth',
        label: 'Overview',
      },
    ],
    scope: [
      'Common walkway waterproofing',
      'Balcony membrane replacement',
      'Bin area concrete remediation',
      'Roof plant waterproofing',
      'Screed and ramp installation',
    ],
    summary:
      'A multi-area remedial waterproofing project across a commercial property in East Perth. PWSS identified that the existing topping screed could not be waterproofed over, requiring full epoxy screed replacement. Steps were converted to ramps, and a 5-coat over-tile system was proposed for the balcony areas - saving the client approximately $30,000 compared to full screed removal.',
    result:
      'Comprehensive waterproofing across walkways, balconies, bin stores, and roof plant. PWSS installed additional screeds at their own cost where ponding water was discovered during the works.',
    accentColor: 'var(--color-pwss-aero)',
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function PhotoGrid({ photos }: { photos: CaseStudyPhoto[] }) {
  if (photos.length === 1) {
    return (
      <div className="relative aspect-[16/10] rounded-lg overflow-hidden ring-2 ring-white/60">
        <Image
          src={photos[0].src}
          alt={photos[0].alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      {photos.map((photo) => (
        <div key={photo.label} className="relative group">
          <div className="relative overflow-hidden rounded-lg aspect-[4/3] ring-2 ring-white/60">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 25vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
              <span className="text-white text-xs font-semibold uppercase tracking-wider">
                {photo.label}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-pwss-white py-12 md:py-16 lg:py-20" aria-label="Case studies">
      <Container>
        <article>
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-pwss-gunmetal leading-tight">
              Trusted Across{' '}
              <span className="text-pwss-mint">Perth</span>
            </h2>
            <p className="mt-5 text-pwss-gunmetal-600 text-lg leading-relaxed">
              From state-level sporting venues to commercial strata properties,
              our remedial waterproofing work is backed by Perth Waterproofing
              &amp; Silicone Solutions&apos; track record of delivering projects
              that last.
            </p>
          </div>

          {/* Case study cards */}
          <div className="mt-12 space-y-10">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                className="relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Card background — gunmetal */}
                <div className="absolute inset-0 bg-pwss-gunmetal" aria-hidden="true" />

{/* Accent strip — top bar on mobile, diagonal on desktop */}
                <div
                  className="absolute inset-0 z-[1]"
                  aria-hidden="true"
                  style={{ background: study.accentColor }}
                >
                  {/* Mobile: thin top bar */}
                  <div className="absolute inset-0 bg-pwss-gunmetal lg:hidden" style={{ marginTop: '8px' }} />
                  {/* Desktop: diagonal cut reveals accent behind */}
                  <div
                    className="absolute inset-0 bg-pwss-gunmetal hidden lg:block"
                    style={{
                      clipPath:
                        index % 2 === 0
                          ? 'polygon(38% 0, 100% 0, 100% 100%, 18% 100%)'
                          : 'polygon(0 0, 62% 0, 82% 100%, 0 100%)',
                    }}
                  />
                </div>

                {/* Desktop only: secondary glow strip */}
                <div
                  className="absolute inset-0 z-[1] opacity-30 hidden lg:block"
                  aria-hidden="true"
                  style={{
                    background: study.accentColor,
                    clipPath:
                      index % 2 === 0
                        ? 'polygon(0 0, 42% 0, 22% 100%, 0 100%)'
                        : 'polygon(58% 0, 100% 0, 100% 100%, 78% 100%)',
                  }}
                />

                {/* Content layer */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Photo side */}
                  <div className={`p-4 md:p-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <PhotoGrid photos={study.photos} />
                  </div>

                  {/* Content side */}
                  <div className={`p-6 md:p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-2 text-sm text-white/60 mb-3">
                      <MapPin size={14} className="text-pwss-aero" />
                      <span>{study.location}</span>
                    </div>

                    <h3 className="font-heading text-2xl font-bold text-white mb-4">
                      {study.title}
                    </h3>

                    <p className="text-white/70 leading-relaxed mb-5 text-sm md:text-base">
                      {study.summary}
                    </p>

                    {/* Scope list */}
                    <div className="mb-5">
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">
                        Scope of Works
                      </h4>
                      <ul className="space-y-2">
                        {study.scope.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                            <CheckCircle size={14} className="text-pwss-mint mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Result */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">
                        Result
                      </h4>
                      <p className="text-sm text-white/80 leading-relaxed">
                        {study.result}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Placeholder — third case study */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              className="bg-white rounded-xl border-2 border-dashed border-pwss-white-400 p-8 md:p-12 text-center"
            >
              <Clock size={32} className="text-pwss-white-300 mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold text-pwss-gunmetal-600/40 mb-2">
                More Projects Coming Soon
              </h3>
              <p className="text-sm text-pwss-gunmetal-600/40 max-w-md mx-auto">
                We&apos;re currently documenting additional case studies from recent
                remedial waterproofing projects across Perth.
              </p>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-pwss-gunmetal-600 mb-5">
              Have a similar project? We&apos;ll inspect it for free and provide a
              detailed scope of works.
            </p>
            <Button variant="primary" href="#contact" showArrow>
              Discuss Your Project
            </Button>
          </div>
        </article>
      </Container>
    </section>
  );
}