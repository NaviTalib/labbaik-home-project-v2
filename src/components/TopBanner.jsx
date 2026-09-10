import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

export default function TopBanner() {
  return (
    <div className="bg-stone-900 text-stone-300 text-xs py-2 px-6 flex justify-between items-center border-b border-stone-800">
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-1.5"><Phone size={13} className="text-amber-400" /> +91 93133 10786</span>
        <span className="hidden sm:flex items-center gap-1.5"><Mail size={13} className="text-amber-400" /> contact@labbaikproject.com</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1"><Clock size={13} className="text-amber-400" /> Mon - Sat: 10 AM - 7 PM</span>
      </div>
    </div>
  );
}