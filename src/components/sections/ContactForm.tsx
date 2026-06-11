'use client';

import { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Upload, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import Container from '@/components/ui/Container';
import PhoneLink from '@/components/ui/PhoneLink';
import { CONTACT } from '@/lib/constants';

const propertyTypes = [
  { value: '', label: 'Select property type' },
  { value: 'residential', label: 'Residential' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'strata', label: 'Strata / Body Corporate' },
  { value: 'government', label: 'Government / Public' },
  { value: 'other', label: 'Other' },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function ContactForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles].slice(0, 5));
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

const handleSubmit = async (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const form = document.querySelector('#contact-form') as HTMLFormElement;
    if (!form.checkValidity()) {
      form.reportValidity();
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch('https://formspree.io/f/mzdqawpz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: new FormData(form).get('name'),
          phone: new FormData(form).get('phone'),
          email: new FormData(form).get('email'),
          'property-type': new FormData(form).get('property-type'),
          suburb: new FormData(form).get('suburb'),
          description: new FormData(form).get('description'),
          'photos-attached': files.length > 0 ? `${files.length} photo(s) uploaded — request photos from client` : 'None',
        }),
      });

      if (!res.ok) throw new Error('Failed to send');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please call us directly or try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-pwss-gunmetal py-12 md:py-16 lg:py-20" aria-label="Contact us">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">

          {/* Left column — info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-2"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight">
              Get a Free{' '}
              <span className="text-pwss-mint">Assessment</span>
            </h2>
            <p className="mt-5 text-white/70 text-lg leading-relaxed">
              Tell us about your waterproofing issue and we&apos;ll get back to you
              within one business day with next steps. Or call us now to speak
              with someone directly.
            </p>

            {/* Contact details */}
            <div className="mt-8 space-y-5">
              <PhoneLink className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-lg bg-pwss-mint/10 border border-pwss-mint/20 flex items-center justify-center group-hover:bg-pwss-mint/20 transition-colors duration-300">
                  <Phone size={20} className="text-pwss-mint" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-0.5">Call us</p>
                  <p className="text-white font-bold text-lg group-hover:text-pwss-mint transition-colors duration-200">
                    {CONTACT.phone}
                  </p>
                </div>
              </PhoneLink>
              <a
              
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-lg bg-pwss-mint/10 border border-pwss-mint/20 flex items-center justify-center group-hover:bg-pwss-mint/20 transition-colors duration-300">
                  <Mail size={20} className="text-pwss-mint" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-0.5">Email us</p>
                  <p className="text-white font-semibold group-hover:text-pwss-mint transition-colors duration-200">
                    {CONTACT.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-pwss-mint/10 border border-pwss-mint/20 flex items-center justify-center">
                  <Clock size={20} className="text-pwss-mint" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-0.5">Hours</p>
                  <p className="text-white/80 font-medium">{CONTACT.hours}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-pwss-mint/10 border border-pwss-mint/20 flex items-center justify-center">
                  <MapPin size={20} className="text-pwss-mint" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-0.5">Service area</p>
                  <p className="text-white/80 font-medium">{CONTACT.address}</p>
                  <p className="text-white/50 text-sm">Covering the full Perth metro region</p>
                </div>
              </div>
            </div>

            {/* Trust note */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-white/40 text-sm leading-relaxed">
                Remedial Waterproofing Perth is a division of Perth Waterproofing
                &amp; Silicone Solutions. Licensed, certified, and insured.
              </p>
            </div>
          </motion.div>

          {/* Right column — form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 md:p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-pwss-mint/20 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={32} className="text-pwss-mint" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-3">
                  Thanks - we&apos;ve received your enquiry
                </h3>
                <p className="text-white/60 max-w-md mx-auto">
                  Our team will review your details and get back to you within
                  one business day. For urgent leaks, call us directly on{' '}
                  <PhoneLink className="text-pwss-aero hover:text-pwss-mint font-semibold transition-colors duration-200">
                    {CONTACT.phone}
                  </PhoneLink>
                </p>
              </div>
            ) : (
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8">
                <h3 className="font-heading text-xl font-bold text-white mb-6">
                  Request a Quote
                </h3>

                <form id="contact-form" onSubmit={handleSubmit}>
                  <div className="space-y-5">
                    {/* Name + Phone row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-1.5">
                          Your name <span className="text-pwss-mint">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-pwss-mint focus:ring-1 focus:ring-pwss-mint transition-colors duration-200"
                          placeholder="Full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-white/60 mb-1.5">
                          Phone number <span className="text-pwss-mint">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-pwss-mint focus:ring-1 focus:ring-pwss-mint transition-colors duration-200"
                          placeholder="04XX XXX XXX"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-1.5">
                        Email address <span className="text-pwss-mint">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-pwss-mint focus:ring-1 focus:ring-pwss-mint transition-colors duration-200"
                        placeholder="you@example.com"
                      />
                    </div>

                    {/* Property type + Suburb row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="property-type" className="block text-sm font-medium text-white/60 mb-1.5">
                          Property type
                        </label>
                        <select
                          id="property-type"
                          name="property-type"
                          className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pwss-mint focus:ring-1 focus:ring-pwss-mint transition-colors duration-200 appearance-none"
                          defaultValue=""
                        >
                          {propertyTypes.map((type) => (
                            <option key={type.value} value={type.value} className="bg-pwss-gunmetal text-white">
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="suburb" className="block text-sm font-medium text-white/60 mb-1.5">
                          Suburb
                        </label>
                        <input
                          type="text"
                          id="suburb"
                          name="suburb"
                          className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-pwss-mint focus:ring-1 focus:ring-pwss-mint transition-colors duration-200"
                          placeholder="e.g. Fremantle"
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-white/60 mb-1.5">
                        Describe the issue <span className="text-pwss-mint">*</span>
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        required
                        rows={4}
                        className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-pwss-mint focus:ring-1 focus:ring-pwss-mint transition-colors duration-200 resize-y"
                        placeholder="Where is the leak? How long has it been happening? Any previous repair attempts?"
                      />
                    </div>

                    {/* File upload */}
                    <div>
                      <label className="block text-sm font-medium text-white/60 mb-1.5">
                        Upload photos of the damage (optional, max 5)
                      </label>
                      <label
                        htmlFor="file-upload"
                        className="flex items-center justify-center gap-3 w-full border-2 border-dashed border-white/15 rounded-lg px-4 py-5 cursor-pointer hover:border-pwss-mint/40 transition-colors duration-200"
                      >
                        <Upload size={20} className="text-white/30" />
                        <span className="text-sm text-white/40">
                          Click to upload or drag photos here
                        </span>
                        <input
                          type="file"
                          id="file-upload"
                          name="files"
                          multiple
                          accept="image/*,.pdf"
                          onChange={handleFileChange}
                          className="sr-only"
                        />
                      </label>

                      {/* File list */}
                      {files.length > 0 && (
                        <ul className="mt-3 space-y-2">
                          {files.map((file, i) => (
                            <li key={`${file.name}-${i}`} className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2">
                              <span className="text-sm text-white/60 truncate mr-3">{file.name}</span>
                              <button
                                type="button"
                                onClick={() => removeFile(i)}
                                className="text-white/30 hover:text-red-400 text-xs flex-shrink-0 transition-colors duration-200"
                              >
                                Remove
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-pwss-mint hover:bg-pwss-cyan disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded px-8 py-3.5 uppercase tracking-wider text-sm transition-colors duration-200"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                    </button>

                    {error && (
                      <p className="text-red-400 text-sm">{error}</p>
                    )}

                    <p className="text-white/30 text-xs">
                      <AlertCircle size={12} className="inline mr-1 -mt-0.5" />
                      We&apos;ll respond within one business day. Your details are
                      only used to assess your project - we don&apos;t share your
                      information.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}