'use client';

import { Shield, Search, FileCheck, Users, Wrench, Award } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import PhoneLink from '@/components/ui/PhoneLink';
import { CONTACT } from '@/lib/constants';

const reasons = [
  {
    icon: Search,
    title: 'Investigation-Led Approach',
    text: 'We trace every leak back to its source before recommending any repair. No guesswork, no band-aid fixes - just methodical diagnosis that solves the problem the first time.',
  },
  {
    icon: FileCheck,
    title: 'Documented Scope Reports',
    text: 'Every project receives a detailed scope of works with photographic evidence, product specifications, and clear pricing. Ideal for strata managers needing committee approval.',
  },
{
    icon: Shield,
    title: 'Backed by PWSS',
    text: 'Remedial Waterproofing Perth is a division of Perth Waterproofing & Silicone Solutions - operating for over 8 years and trusted by some of Western Australia\'s largest builders, contractors, and home builders.',
  },
  {
    icon: Wrench,
    title: 'Quality Products & Systems',
    text: 'We use high-performance membrane systems from trusted manufacturers including Rimseal, Deckpro, and WPA - specified for each project\'s unique conditions.',
  },
  {
    icon: Users,
    title: 'Direct Communication',
    text: 'You deal directly with the people doing the work. No project managers relaying messages - our team is on-site, accessible, and accountable from start to finish.',
  },
  {
    icon: Award,
    title: 'A Reputation for Quality and Detail',
    text: 'From WA Hockey Stadium to East Perth commercial properties, our work speaks for itself. We build long-term relationships with clients who value precision.',
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

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-pwss-gunmetal py-12 md:py-16 lg:py-20" aria-label="Why choose us">
      <Container>
        <article>
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight">
              Why Perth Property Owners{' '}
              <span className="text-pwss-mint">Choose PWSS</span>
            </h2>
            <p className="mt-5 text-white/70 text-lg leading-relaxed">
              When waterproofing fails, you need a team that diagnoses the cause
              - not one that patches the symptom. Here&apos;s what sets us apart
              from general builders and maintenance contractors.
            </p>
          </div>

          {/* Reasons grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                className="relative group"
              >
                {/* Card */}
                <div className="h-full bg-white/5 border border-white/10 rounded-xl p-6 hover:border-pwss-mint/30 transition-all duration-300">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-pwss-mint/10 border border-pwss-mint/20 flex items-center justify-center mb-5 group-hover:bg-pwss-mint/20 transition-colors duration-300">
                    <reason.icon size={24} className="text-pwss-mint" />
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white mb-3">
                    {reason.title}
                  </h3>

                  <p className="text-sm text-white/60 leading-relaxed">
                    {reason.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button variant="primary" href="#contact" showArrow>
              Book a Free Inspection
            </Button>
            <span className="text-white/40 text-sm">or call</span>
            <PhoneLink className="text-pwss-aero hover:text-pwss-mint text-lg font-bold transition-colors duration-200">
              {CONTACT.phone}
            </PhoneLink>
          </div>
        </article>
      </Container>
    </section>
  );
}