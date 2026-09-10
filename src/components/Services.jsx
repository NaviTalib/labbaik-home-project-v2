import React, { useState } from 'react';
import { Home, Compass, ShieldCheck, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const servicesList = [
    {
      id: "full-home",
      icon: Home,
      title: "Full Home Interiors",
      subtitle: "End-to-End Space Transformation",
      desc: "Complete luxury interior execution designed to reflect your lifestyle, including false ceilings, bespoke furniture, wall panelling, ambient lighting, and hardwood/marble flooring.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
      features: ["3D Layout Rendering", "Bespoke Furniture", "Custom Lighting"]
    },
    {
      id: "modular-kitchen",
      icon: Compass,
      title: "Modular Kitchens & Wardrobes",
      subtitle: "Ergonomic & Space-Optimized Design",
      desc: "Custom modular setups built with premium marine ply and high-grade finishes (Acrylic, Laminate, PU). Integrated with soft-close Blum & Hettich German hardware.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
      features: ["Blum/Hettich Fittings", "Anti-Scratch Acrylic", "10-Year Warranty"]
    },
    {
      id: "turnkey-renovation",
      icon: ShieldCheck,
      title: "Turnkey Civil & Renovation",
      subtitle: "Hassle-Free Structural & Utility Care",
      desc: "Complete civil space remodeling with dedicated site supervision covering electrical wiring, plumbing overhauls, high-precision tiling, painting, and structural changes.",
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800",
      features: ["Dedicated Supervisor", "On-Time Guarantee", "Zero Hidden Costs"]
    }
  ];

  return (
    <section id="services" className="relative bg-stone-50 py-24 text-stone-900 overflow-hidden">
      {/* Soft Light Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-amber-100/60 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 border border-amber-300 px-4 py-1.5 rounded-full text-xs text-amber-800 font-semibold shadow-xs">
            <Sparkles size={14} className="text-amber-600 animate-pulse" />
            <span>Craftsmanship Meets Precision</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
            Comprehensive Interior Services
          </h2>
          
          <p className="text-stone-600 text-sm sm:text-base font-normal leading-relaxed">
            From spatial design and custom material selection to full turnkey execution, we manage every step with absolute perfection.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative bg-white border border-stone-200/90 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:border-amber-400 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Visual Image Preview Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute bottom-4 left-6 bg-white border border-stone-200 p-3 rounded-2xl text-amber-600 shadow-lg group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                    <IconComponent size={24} />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-[11px] font-bold tracking-wider text-amber-700 uppercase">
                      {service.subtitle}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mt-1 group-hover:text-amber-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed mt-3 font-normal">
                      {service.desc}
                    </p>
                  </div>

                  {/* Feature Bullets */}
                  <div className="space-y-2 pt-4 border-t border-stone-100">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-stone-700">
                        <CheckCircle2 size={15} className="text-amber-600 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Footer Link */}
                  <div className="pt-2">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors"
                    >
                      <span>Explore Options & Consult</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                    </a>
                  </div>
                </div>

                {/* Subtle Top Border Highlight on Hover */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}