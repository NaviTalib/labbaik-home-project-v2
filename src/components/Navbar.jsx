import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight, Sparkles } from 'lucide-react';
import logo from '../assets/logot.png';

const NAV_LINKS = [
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Packages', href: '#plans' },
  { name: 'How We Work', href: '#process' },
  { name: 'Locations', href: '#locations' },
  { name: 'About', href: '#about' }
];

const PHONE_NUMBER = '+91 93133 10786';
const PHONE_HREF = 'tel:+919313310786';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-amber-50/90 backdrop-blur-md shadow-xs border-b border-amber-200/60 shadow-amber-500/5'
          : 'bg-amber-50/50 backdrop-blur-xs border-b border-amber-100/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 sm:h-20">
          
          {/* Brand Logo with Golden Gradient Text */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <img
              src={logo}
              alt="Labbaik Interior"
              className="h-12 sm:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]"
            />
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 bg-clip-text text-transparent transition-all">
                Labbaik
              </span>
              <span className="text-[18px] font-bold tracking-widest uppercase bg-gradient-to-r from-amber-500 via-yellow-600 to-amber-700 bg-clip-text text-transparent mt-1">
                Interior
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 text-sm font-medium text-stone-600">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 rounded-full hover:text-stone-900 hover:bg-amber-100/60 transition-all duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 text-xs font-semibold text-stone-700 hover:text-amber-700 px-3 py-2 rounded-full hover:bg-amber-100/60 transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-amber-200/80 flex items-center justify-center text-amber-800">
                <Phone size={12} />
              </div>
              <span>{PHONE_NUMBER}</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-stone-900 hover:bg-amber-600 active:scale-95 text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all duration-200 shadow-xs hover:shadow-md group"
            >
              <span>Get Free Estimate</span>
              <ArrowUpRight
                size={14}
                className="text-stone-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </a>
          </div>

          {/* Mobile Actions & Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={PHONE_HREF}
              className="p-2.5 text-stone-700 bg-amber-100/70 hover:bg-amber-200 hover:text-amber-800 rounded-full transition-colors"
              aria-label="Call Direct Support"
            >
              <Phone size={16} />
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-xl text-stone-700 hover:text-stone-950 hover:bg-amber-100/70 transition-colors focus-visible:outline-2 focus-visible:outline-amber-600"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 top-[72px] sm:top-[80px] bg-stone-950/40 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed top-[72px] sm:top-[80px] inset-x-0 bg-amber-50/95 backdrop-blur-md border-b border-amber-200/80 shadow-xl transition-all duration-300 ease-out origin-top ${
          isMenuOpen
            ? 'opacity-100 scale-y-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="max-w-lg mx-auto px-5 py-5 space-y-4 max-h-[calc(100dvh-80px)] overflow-y-auto">
          <div className="flex items-center justify-between pb-2 border-b border-amber-200/60">
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
              Navigation
            </span>
            <div className="inline-flex items-center gap-1.5 text-[11px] text-amber-800 bg-amber-200/70 px-2.5 py-1 rounded-full font-medium">
              <Sparkles size={11} className="text-amber-700" />
              <span>Delhi NCR Execution</span>
            </div>
          </div>

          <div className="grid gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl text-sm font-medium text-stone-800 hover:text-amber-700 hover:bg-amber-100/60 transition-colors flex items-center justify-between group"
              >
                <span>{link.name}</span>
                <ArrowUpRight
                  size={15}
                  className="text-stone-400 group-hover:text-amber-600 transition-colors"
                />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-amber-200/60 space-y-3">
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full bg-stone-900 hover:bg-amber-600 active:scale-[0.98] text-white font-medium text-center py-3 rounded-xl text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Book Free Consultation</span>
              <ArrowUpRight size={16} />
            </a>

            <div className="flex items-center justify-between py-1 px-1 text-xs text-stone-600">
              <span>Direct Support</span>
              <a
                href={PHONE_HREF}
                className="font-semibold text-stone-900 hover:text-amber-600 transition-colors"
              >
                {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}