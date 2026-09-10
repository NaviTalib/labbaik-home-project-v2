import React, { useState } from 'react';
import { CheckCircle2, Sparkles, ArrowRight, ShieldCheck, Zap, Crown } from 'lucide-react';

export default function PricingPlans() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const plans = [
    {
      id: "essential",
      name: "Essential Package",
      badgeIcon: Zap,
      badgeText: "Budget Friendly",
      subtitle: "Ideal for rental properties or quick modern updates",
      price: "₹3.5 Lakhs",
      priceNote: "Starting price *",
      features: [
        "Modular Kitchen (Commercial Ply)",
        "Master Bedroom Wardrobe",
        "Basic Gypsum False Ceiling",
        "OBD Wall Painting",
        "Standard Hardware & Accessories",
        "1 Year Service Warranty"
      ],
      ctaText: "Get Started",
      recommended: false
    },
    {
      id: "premium",
      name: "Premium Package",
      badgeIcon: Sparkles,
      badgeText: "Most Popular choice",
      subtitle: "Our signature plan engineered for complete new home moves",
      price: "₹7.5 Lakhs",
      priceNote: "Starting price *",
      features: [
        "BWP Marine Ply Modular Kitchen",
        "2 Bedroom Full Height Wardrobes",
        "Designer Ambient False Ceiling",
        "Royale Emulsion Paint Finish",
        "TV Unit & Foyer Design",
        "Soft-close Hettich / Blum Fittings",
        "5 Year Material Warranty"
      ],
      ctaText: "Book Premium Plan",
      recommended: true
    },
    {
      id: "luxury",
      name: "Luxury Package",
      badgeIcon: Crown,
      badgeText: "Bespoke & Elite",
      subtitle: "High-end bespoke finishes, imported fittings & personal designer",
      price: "Custom Quote",
      priceNote: "Tailored to scope",
      features: [
        "Acrylic / Lacquered Glass Kitchen",
        "Walk-in Closet & Veneer Wardrobes",
        "Italian Marble / Wooden Flooring",
        "Smart Home Lighting Integration",
        "Custom Italian Leather Furniture",
        "10 Year Comprehensive Warranty",
        "Dedicated Project Manager"
      ],
      ctaText: "Request Custom Quote",
      recommended: false
    }
  ];

  return (
    <section id="plans" className="relative bg-stone-100/90 py-24 text-stone-900 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-200/40 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 px-4 py-1.5 rounded-full text-xs text-amber-800 font-semibold shadow-xs">
            <Sparkles size={14} className="text-amber-600 animate-pulse" />
            <span>Transparent Pricing Plans</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
            Interior Design Packages
          </h2>

          <p className="text-stone-600 text-sm sm:text-base font-normal leading-relaxed">
            Choose a package that fits your lifestyle, functional requirements, and budget scale.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const BadgeIcon = plan.badgeIcon;
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={plan.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 ${
                  plan.recommended
                    ? 'bg-gradient-to-b from-stone-900 via-stone-900 to-stone-950 text-white shadow-2xl lg:-translate-y-2 border border-amber-500/50 ring-2 ring-amber-500/20'
                    : 'bg-white border border-stone-200/90 text-stone-900 shadow-md hover:shadow-xl hover:border-amber-400 hover:-translate-y-1'
                }`}
              >
                {/* Top Badge */}
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Sparkles size={13} className="text-stone-950 fill-stone-950" />
                    <span>{plan.badgeText}</span>
                  </div>
                )}

                <div>
                  {/* Card Sub-Badge for non-recommended */}
                  {!plan.recommended && (
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md mb-3">
                      <BadgeIcon size={12} className="text-amber-600" />
                      <span>{plan.badgeText}</span>
                    </div>
                  )}

                  <h3 className={`font-serif text-2xl font-bold ${plan.recommended ? 'text-white' : 'text-stone-900'}`}>
                    {plan.name}
                  </h3>
                  
                  <p className={`text-xs mt-1.5 min-h-[36px] leading-relaxed ${plan.recommended ? 'text-stone-300' : 'text-stone-500'}`}>
                    {plan.subtitle}
                  </p>

                  {/* Pricing Display */}
                  <div className="my-6 pb-6 border-b border-stone-200/20">
                    <div className="flex items-baseline gap-2">
                      <span className={`font-serif text-3xl sm:text-4xl font-bold ${plan.recommended ? 'text-amber-400' : 'text-stone-900'}`}>
                        {plan.price}
                      </span>
                    </div>
                    <span className={`text-[11px] ${plan.recommended ? 'text-stone-400' : 'text-stone-400'}`}>
                      {plan.priceNote}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs font-medium">
                        <CheckCircle2
                          size={16}
                          className={`shrink-0 mt-0.5 ${plan.recommended ? 'text-amber-400' : 'text-amber-600'}`}
                        />
                        <span className={plan.recommended ? 'text-stone-200' : 'text-stone-700'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call to Action Button */}
                <a
                  href="#contact"
                  className={`group w-full py-3.5 px-6 rounded-xl font-semibold text-xs tracking-wide uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 shadow-lg shadow-amber-500/20'
                      : 'bg-stone-900 hover:bg-stone-800 text-white shadow-sm'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Top Border Accent Glow on Hover */}
                {!plan.recommended && (
                  <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 to-amber-600 rounded-t-3xl transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
                )}
              </div>
            );
          })}
        </div>

        {/* Footnote Assurance */}
        <p className="text-center text-xs text-stone-500 mt-12 flex items-center justify-center gap-1.5">
          <ShieldCheck size={14} className="text-amber-600" />
          <span>All packages include 3D designs, site supervision, material inspection, and post-installation support.</span>
        </p>

      </div>
    </section>
  );
}