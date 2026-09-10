import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const PHONE_NUMBER = '+91 93133 10786';
const PHONE_HREF = 'tel:+919313310786';
const WHATSAPP_HREF = 'https://wa.me/919313310786?text=Hi%20Labbaik%20Home%20Project,%20I%20would%20like%20to%20inquire%20about%20interior%20services.';

export default function FloatingActions() {
  return (
    <aside
      aria-label="Contact actions"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex flex-col items-end gap-2.5"
    >
      {/* Direct Phone Call Button */}
      <a
        href={PHONE_HREF}
        className="group flex items-center justify-center p-3 sm:p-3.5 bg-blue-500 hover:bg-amber-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label={`Call us at ${PHONE_NUMBER}`}
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-semibold tracking-wide pr-0 group-hover:max-w-xs group-hover:pr-2.5 transition-all duration-300 ease-out hidden sm:inline-block">
          Call Now
        </span>
        <Phone size={20} className="shrink-0" />
      </a>

      {/* WhatsApp Action Button */}
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center p-3 sm:p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        {/* Subtle Pulse Animation Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none opacity-75" />

        <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-semibold tracking-wide pr-0 group-hover:max-w-xs group-hover:pr-2.5 transition-all duration-300 ease-out hidden sm:inline-block">
          WhatsApp
        </span>
        <MessageCircle size={20} className="shrink-0 relative z-10" />
      </a>
    </aside>
  );
}