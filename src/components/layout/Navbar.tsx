'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, Phone, ChevronRight } from 'lucide-react';
import { NAV_ITEMS, CONTACT, LINKS } from '@/lib/constants';
import PhoneLink from '@/components/ui/PhoneLink';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          isScrolled
            ? 'bg-pwss-gunmetal/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo — symbol on mobile, full logo on desktop */}
            <a href="/" className="flex-shrink-0">
              {/* Symbol: mobile only */}
              <Image
                src="/Symbol-logo.png"
                alt="PWSS Remedial Waterproofing Perth"
                width={40}
                height={40}
                className="h-10 w-auto block lg:hidden"
                priority
              />
              {/* Full logo: desktop only */}
              <Image
                src="/pwss-logo.png"
                alt="PWSS Remedial Waterproofing Perth"
                width={160}
                height={48}
                className="h-10 lg:h-12 w-auto hidden lg:block"
                priority
              />
            </a>

            {/* Desktop nav — centre */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {NAV_ITEMS.map((item, i) => (
                <div key={item.href} className="flex items-center">
                  <a
                    href={item.href}
                    className="px-3 py-2 text-white/80 hover:text-pwss-mint uppercase tracking-widest text-xs font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                  {i < NAV_ITEMS.length - 1 && (
                    <span className="text-white/20 text-xs select-none" aria-hidden="true">|</span>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side — CTA + socials + phone */}
            <div className="hidden lg:flex items-center gap-4">
              <PhoneLink className="flex items-center gap-2 text-pwss-aero hover:text-pwss-mint transition-colors duration-200">
                <Phone size={16} />
                <span className="text-sm font-semibold">{CONTACT.phone}</span>
              </PhoneLink>

              {/* Social icons */}
              <div className="flex gap-2">
                <a
                  href={LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-pwss-aero hover:border-pwss-aero transition-colors duration-200"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-pwss-aero hover:border-pwss-aero transition-colors duration-200"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>

              {/* CTA button */}
              <a
                href="#contact"
                className="flex items-center gap-2 border border-white/60 hover:border-pwss-mint text-white hover:text-pwss-mint px-4 py-2 rounded uppercase tracking-wider text-xs font-semibold transition-colors duration-200"
              >
                Request a Quote
                <ChevronRight size={14} />
              </a>
            </div>

            {/* Mobile — phone + hamburger */}
            <div className="flex lg:hidden items-center gap-3">
              <PhoneLink className="text-pwss-aero hover:text-pwss-mint transition-colors duration-200">
                <Phone size={22} />
              </PhoneLink>
              <button
                onClick={() => setIsMobileOpen(true)}
                className="text-white/80 hover:text-white p-1"
                aria-label="Open menu"
              >
                <Menu size={26} />
              </button>
            </div>

          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}