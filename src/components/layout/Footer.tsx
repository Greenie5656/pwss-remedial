import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';
import { CONTACT, LINKS, COMPANY, SERVICES } from '@/lib/constants';
import PhoneLink from '@/components/ui/PhoneLink';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pwss-gunmetal text-white/80">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1 — Brand */}
          <div className="space-y-4">
            <a href="/">
              <Image
                src="/images/pwss-logo-transparent.png"
                alt="PWSS Remedial Waterproofing Perth"
                width={160}
                height={48}
                className="h-10 w-auto"
              />
            </a>
            <p className="text-sm leading-relaxed">
              <strong className="text-white">Remedial Waterproofing Perth </strong> is a division
              of Perth Waterproofing &amp; Silicone Solutions, specialising in waterproofing
              failure investigations and long-term repair solutions.
            </p>
            <a
              href={LINKS.mainSite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-pwss-aero hover:text-pwss-mint text-sm transition-colors duration-200"
            >
              Part of {COMPANY.shortName}
              <ChevronRight size={14} />
            </a>
          </div>

          {/* Column 2 — Services */}
          <div className="space-y-4">
            <h3 className="font-heading text-base font-bold text-white uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.name}>
                  <a
                    href="#services"
                    className="text-sm hover:text-pwss-mint transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-base font-bold text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-sm hover:text-pwss-mint transition-colors duration-200">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-sm hover:text-pwss-mint transition-colors duration-200">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-sm hover:text-pwss-mint transition-colors duration-200">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#service-areas" className="text-sm hover:text-pwss-mint transition-colors duration-200">
                  Service Areas
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm hover:text-pwss-mint transition-colors duration-200">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm hover:text-pwss-mint transition-colors duration-200">
                  Request a Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div className="space-y-4">
            <h3 className="font-heading text-base font-bold text-white uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <PhoneLink className="flex items-start gap-3 hover:text-pwss-mint transition-colors duration-200">
                  <Phone size={16} className="mt-0.5 flex-shrink-0 text-pwss-aero" />
                  <span className="text-sm font-semibold text-white">{CONTACT.phone}</span>
                </PhoneLink>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-start gap-3 hover:text-pwss-mint transition-colors duration-200"
                >
                  <Mail size={16} className="mt-0.5 flex-shrink-0 text-pwss-aero" />
                  <span className="text-sm">{CONTACT.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-pwss-aero" />
                <span className="text-sm">{CONTACT.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="mt-0.5 flex-shrink-0 text-pwss-aero" />
                <span className="text-sm">{CONTACT.hours}</span>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex gap-3 pt-2">
              <a
                href={LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-pwss-aero hover:border-pwss-aero transition-colors duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-pwss-aero hover:border-pwss-aero transition-colors duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Accreditation bar — placeholder for logos */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs text-white/40 text-center">
            {/* Replace with actual logo images when provided */}
            Members of the Australian Institute of Waterproofing &amp; Master Builders Association
          </p>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40">
            &copy; {currentYear} {COMPANY.legalName}. All rights reserved.
          </p>
         <a 
            href="#contact"
            className="flex items-center gap-2 text-pwss-mint hover:text-pwss-cyan text-xs font-semibold uppercase tracking-wider transition-colors duration-200"
          >
            Request a Quote
            <ChevronRight size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}