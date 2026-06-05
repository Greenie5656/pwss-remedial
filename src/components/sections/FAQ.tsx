'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What is remedial waterproofing?',
    answer:
      'Remedial waterproofing is the process of diagnosing and repairing existing waterproofing failures in residential, commercial, and strata buildings. Unlike new-build waterproofing applied during construction, remedial work focuses on identifying the source of leaks, failed membranes, water ingress, and structural moisture issues - then implementing long-term repair solutions that address the root cause.',
  },
  {
    question: 'How much does remedial waterproofing cost in Perth?',
    answer:
      'Remedial waterproofing costs in Perth vary depending on the type of failure, the area affected, access requirements, and the repair system specified. A small balcony membrane replacement may start from a few thousand dollars, while a multi-level commercial project can be significantly more. We provide a detailed scope of works and fixed quote after a free on-site inspection - no surprises.',
  },
  {
    question: 'What are the signs of waterproofing failure?',
    answer:
      'The most common signs of waterproofing failure include water stains on ceilings or walls below wet areas, bubbling or peeling paint, damp or musty smells, cracked or lifting tiles on balconies, visible efflorescence (white salt deposits) on concrete, and pooling water that doesn\'t drain. If you notice any of these, the waterproofing membrane has likely failed and needs professional investigation.',
  },
  {
    question: 'Do you service my suburb?',
    answer:
      'Remedial Waterproofing Perth services the entire Perth metropolitan area including Perth CBD, Joondalup, Osborne Park, Subiaco, Canning Vale, Fremantle, Rockingham, Mandurah, and Midland. We also regularly work in surrounding suburbs. If you\'re unsure whether we cover your area, call us on 1300 271 425 and we\'ll confirm.',
  },
  {
    question: "What's the difference between new-build and remedial waterproofing?",
    answer:
      'New-build waterproofing is applied during construction before tiling and finishing - it\'s preventative. Remedial waterproofing is reactive: it diagnoses and repairs waterproofing that has already failed in an existing building. Remedial work is typically more complex because it involves removing finishes, identifying the failure point, and designing a repair system that works within the existing structure.',
  },
  {
    question: 'How long does a remedial waterproofing repair take?',
    answer:
      'Timeframes depend on the scope of the failure. A straightforward balcony re-membrane might take 3–5 days including curing time. Larger projects involving multiple areas, concrete remediation, or screed replacement can take several weeks. We provide a clear timeline in our scope of works so you know exactly what to expect before work begins.',
  },
  {
    question: 'Is remedial waterproofing covered by building insurance?',
    answer:
      'It depends on your policy and the cause of the failure. Some building insurance policies cover water damage resulting from sudden events, but gradual waterproofing failure due to age or poor original application is typically not covered. We recommend checking with your insurer. Our detailed investigation reports and photographic documentation can support insurance claims where applicable.',
  },
  {
    question: 'Who is behind Remedial Waterproofing Perth?',
    answer:
      'Remedial Waterproofing Perth is a division of Perth Waterproofing & Silicone Solutions (PWSS), a licensed and certified waterproofing contractor operating across the Perth metro area. PWSS has a proven track record delivering waterproofing solutions for projects ranging from the WA Hockey Stadium in Bentley to commercial strata properties in East Perth.',
  },
];

// FAQ schema for JSON-LD
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: 'easeOut' },
  }),
};

function FAQAccordionItem({ faq, index, isOpen, onToggle }: {
  faq: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-20px' }}
      variants={fadeUp}
      className="border border-pwss-white-400/50 rounded-xl overflow-hidden bg-white"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left hover:bg-pwss-white-700 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <h3 className="font-heading text-base md:text-lg font-bold text-pwss-gunmetal pr-4">
          {faq.question}
        </h3>
        <ChevronDown
          size={20}
          className={`text-pwss-mint flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Answer — always in DOM for crawlers, visually toggled */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
              <p className="text-pwss-gunmetal-600 leading-relaxed text-sm md:text-base">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden answer always in DOM for SEO crawlers */}
      {!isOpen && (
        <div className="sr-only" aria-hidden="true">
          <p>{faq.answer}</p>
        </div>
      )}
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-pwss-white texture-light py-12 md:py-16 lg:py-20" aria-label="Frequently asked questions">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Container>
        <article>
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-pwss-gunmetal leading-tight">
              Frequently Asked{' '}
              <span className="text-pwss-mint">Questions</span>
            </h2>
            <p className="mt-5 text-pwss-gunmetal-600 text-lg leading-relaxed">
              Common questions about remedial waterproofing, our process, costs,
              and service areas across Perth.
            </p>
          </div>

          {/* Accordion */}
          <div className="mt-10 max-w-3xl space-y-3">
            {faqs.map((faq, i) => (
              <FAQAccordionItem
                key={faq.question}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 max-w-3xl">
            <div className="bg-pwss-gunmetal rounded-xl p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
              <div className="flex-1">
                <h3 className="font-heading text-lg font-bold text-white mb-1">
                  Still have questions?
                </h3>
                <p className="text-white/60 text-sm">
                  Our team is happy to discuss your specific situation.
                </p>
              </div>
              <Button variant="primary" href="#contact" showArrow>
                Get in Touch
              </Button>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}