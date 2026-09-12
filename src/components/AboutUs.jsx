import React, { useState } from 'react';
import { Award, ShieldCheck, Users, Sparkles, CheckCircle, ArrowUpRight, Quote } from 'lucide-react';

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState('vision');

  const stats = [
    { value: "2006", label: "Year Established", detail: "Serving Delhi NCR" },
    { value: "20+", label: "Years Experience", detail: "Master Craftsmanship" },
    { value: "100%", label: "On-Time Execution", detail: "45-Day Handover Guarantee" },
    { value: "1000+", label: "Completed Spaces", detail: "Homes & Commercial Projects" }
  ];

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-stone-50/80 text-stone-900 border-t border-stone-200/80 overflow-hidden">
      {/* Background Decor Ambient Glows */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-amber-200/40 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-amber-100/60 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 border border-amber-300/80 px-4 py-1.5 rounded-full text-xs text-amber-900 font-semibold shadow-xs">
            <Sparkles size={14} className="text-amber-600 animate-pulse" />
            <span>Our Craftsmanship Legacy</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            About Labbaik Interior
          </h2>

          <p className="text-stone-600 text-sm sm:text-base font-normal leading-relaxed">
            Delivering bespoke interior design and precision-driven execution across Delhi NCR since 2006.
          </p>
        </div>

        {/* Founder & Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Founder Image Card Container */}
          <div className="lg:col-span-5 relative group pb-10 sm:pb-0">
            
            {/* Main Portrait Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-stone-200 border border-stone-200/80 transition-transform duration-500 group-hover:scale-[1.01]">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                alt="Idrish Ahmad - Founder & Chief Craftsman"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Gradient Overlay with increased height for high contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
              
              {/* Founder Tag - Raised padding to clear the floating badge */}
              <div className="absolute bottom-6 sm:bottom-8 left-6 right-6 text-white space-y-1 z-10">
                <div className="inline-flex items-center gap-1.5 bg-amber-500/20 backdrop-blur-md border border-amber-400/30 px-3 py-1 rounded-md text-[11px] font-bold text-amber-300 uppercase tracking-wider mb-1">
                  <Quote size={12} className="text-amber-400" />
                  <span>Founder & Master Craftsman</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Idrish Ahmad
                </h3>
                <p className="text-stone-300 text-xs font-light">
                  Directly supervising design accuracy & site execution since 2006.
                </p>
              </div>
            </div>

            {/* Experience Badge - Positioned cleanly in the corner without obscuring text */}
            <div className="absolute -bottom-4 right-2 sm:right-[-20px] bg-stone-900 text-white p-4 sm:p-5 rounded-2xl shadow-2xl border border-amber-500/30 transition-all duration-300 hover:scale-105 hover:border-amber-400 z-20">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <p className="font-serif text-xl sm:text-2xl font-bold text-amber-400 leading-none">20+ Years</p>
                  <p className="text-[11px] text-stone-300 font-medium mt-1">Field Expertise</p>
                </div>
              </div>
            </div>

            {/* Background Decorative Frame Line */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-amber-500/20 rounded-3xl -z-10 hidden sm:block" />
          </div>

          {/* Founder Bio / Vision Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-amber-100/80 border border-amber-300/70 text-amber-900 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
              <span>Established 2006 in Delhi NCR</span>
            </div>
            
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 leading-snug">
              20+ Years of Craftsmanship, Structural Precision, & Unwavering Trust.
            </h3>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
              Founded in 2006 by <strong>Idrish Ahmad</strong>, <strong>Labbaik Interior</strong> was established on a commitment to uncompromised material quality, honest pricing, and fine finishing. Over two decades, Idrish Ahmad has personally guided the firm from bespoke carpentry and site management into an all-inclusive interior execution agency.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
              We bridge traditional woodworking precision with modern automated factory technology, delivering custom modular kitchens, wardrobes, and living transformations that stand the test of time.
            </p>

            {/* Interactive Tabbed Focus */}
            <div className="pt-2">
              <div className="flex border-b border-stone-200 mb-4 gap-6">
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`pb-2 text-xs font-bold uppercase tracking-wider transition-all relative ${
                    activeTab === 'vision' ? 'text-amber-700' : 'text-stone-400 hover:text-stone-700'
                  }`}
                >
                  Our Philosophy
                  {activeTab === 'vision' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600 rounded-full" />}
                </button>

                <button
                  onClick={() => setActiveTab('quality')}
                  className={`pb-2 text-xs font-bold uppercase tracking-wider transition-all relative ${
                    activeTab === 'quality' ? 'text-amber-700' : 'text-stone-400 hover:text-stone-700'
                  }`}
                >
                  Quality Standard
                  {activeTab === 'quality' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600 rounded-full" />}
                </button>
              </div>

              {activeTab === 'vision' ? (
                <p className="text-xs sm:text-sm text-stone-600 bg-amber-50/60 p-4 rounded-2xl border border-amber-200/60 leading-relaxed">
                  "Every residential square foot should combine functional utility with refined elegance. We aim for zero-rework handovers within guaranteed timelines."
                </p>
              ) : (
                <p className="text-xs sm:text-sm text-stone-600 bg-amber-50/60 p-4 rounded-2xl border border-amber-200/60 leading-relaxed">
                  "We exclusively work with BWP Marine Ply, acrylic laminates, and Blum/Hettich anti-rust hardware to guarantee multi-year durability."
                </p>
              )}
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:border-amber-400 transition-colors">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <ShieldCheck size={20} className="text-amber-600 shrink-0" />
                  <h4 className="font-bold text-stone-900 text-sm">Quality Assurance</h4>
                </div>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Material inspection at delivery with branded hardware certifications.
                </p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-stone-200/90 shadow-xs hover:border-amber-400 transition-colors">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <Users size={20} className="text-amber-600 shrink-0" />
                  <h4 className="font-bold text-stone-900 text-sm">Client-Centric Pricing</h4>
                </div>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Fully itemized BOQs with fixed quotes and no hidden mid-project costs.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Quick Company Stats Bar */}
        <div className="bg-gradient-to-br from-stone-900 via-stone-900 to-stone-950 text-white rounded-3xl p-8 lg:p-10 border border-amber-500/30 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-stone-800">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`text-center space-y-1 ${idx !== 0 ? 'pt-6 lg:pt-0' : ''}`}
              >
                <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-400 tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-stone-200">
                  {stat.label}
                </p>
                <p className="text-[11px] text-stone-400 font-light">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Action Strip inside Stats Card */}
          <div className="relative z-10 mt-8 pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2 text-xs text-stone-300">
              <CheckCircle size={16} className="text-amber-400 shrink-0" />
              <span>Full site supervision across Noida, Gurugram, Delhi & Ghaziabad.</span>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider transition-colors group"
            >
              <span>Schedule Experience Visit</span>
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}