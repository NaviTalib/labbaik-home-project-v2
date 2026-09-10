import React from 'react';
import { FaInstagram, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa6';
import logo from '../assets/logot.png'; // Adjust path according to your folder structure

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 text-xs py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 items-start">
        <div className="space-y-4">
          
          {/* Logo with Stacked Brand Text */}
          <a href="#" className="flex items-center gap-3 group inline-flex">
            <img 
              src={logo} 
              alt="Labbaik Logo" 
              className="h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105" 
            />
            <div className="flex flex-col justify-center leading-tight">
              <span className="font-serif text-2xl font-bold tracking-wide text-white group-hover:text-amber-400 transition-colors">
                Labbaik
              </span>
              <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-amber-500">
                Home Project
              </span>
            </div>
          </a>

          <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
            Transforming residential & commercial spaces with high-end interior architecture, modular furniture, and end-to-end execution.
          </p>

          {/* React Icons Brand Row */}
          <div className="flex items-center gap-3 pt-2">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-400/50 transition-all"
              aria-label="Instagram"
            >
              <FaInstagram className="text-sm" />
            </a>
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-emerald-400 hover:border-emerald-400/50 transition-all"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-sm" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-400/50 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-sm" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-white font-semibold text-sm mb-4">Quick Links</h4>
          <ul className="space-y-2.5">
            <li><a href="#services" className="hover:text-amber-400 transition-colors">Our Services</a></li>
            <li><a href="#portfolio" className="hover:text-amber-400 transition-colors">Project Portfolio</a></li>
            <li><a href="#plans" className="hover:text-amber-400 transition-colors">Pricing Packages</a></li>
            <li><a href="#process" className="hover:text-amber-400 transition-colors">Working Process</a></li>
            <li><a href="#locations" className="hover:text-amber-400 transition-colors">Service Areas</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-white font-semibold text-sm mb-4">Popular Services</h4>
          <ul className="space-y-2.5">
            <li>Modular Kitchen Design</li>
            <li>Master Bedroom Interiors</li>
            <li>False Ceiling & Lighting</li>
            <li>Living Room Panelling</li>
            <li>Commercial Office Fitouts</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-white font-semibold text-sm mb-4">Contact Info</h4>
          <p className="leading-relaxed mb-2">Sector 143, Noida, Uttar Pradesh, India</p>
          <p className="text-white font-medium mb-1">+91 93133 10786</p>
          <p className="text-amber-400">contact@labbaikproject.com</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-stone-500">
        <p>© {new Date().getFullYear()} Labbaik Home Project. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-stone-300">Privacy Policy</a>
          <a href="#" className="hover:text-stone-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}