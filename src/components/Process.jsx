import React, { useState } from 'react';
import { Sparkles, MapPin, Box, Factory, Wrench, CheckCircle2, Clock } from 'lucide-react';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      title: "Site Visit & Brief",
      tagline: "Understanding Your Vision",
      timeframe: "Days 1–3",
      icon: MapPin,
      desc: "We measure your space, listen to your requirements, and analyze layout options to set clear aesthetic and functional parameters.",
      deliverable: "Site Measurement Sheet & Concept Brief"
    },
    {
      step: "02",
      title: "3D Design & Estimates",
      tagline: "Realistic Visualizations",
      timeframe: "Days 4–12",
      icon: Box,
      desc: "Get photorealistic 3D visual renders, sample material swatches, and a transparent itemized cost breakdown prior to approval.",
      deliverable: "3D Renders & Itemized Quote"
    },
    {
      step: "03",
      title: "Factory Production",
      tagline: "Precision Manufacturing",
      timeframe: "Days 13–35",
      icon: Factory,
      desc: "High-precision automated factory manufacturing of modular panels, wardrobe units, and kitchens with zero site hassle.",
      deliverable: "Quality Check & Material Dispatch"
    },
    {
      step: "04",
      title: "On-site Installation",
      tagline: "Flawless Handover",
      timeframe: "Days 36–45",
      icon: Wrench,
      desc: "On-site assembly, electrical integration, deep cleaning, and final walkthrough before handing over your completed keys.",
      deliverable: "45-Day Handover & Warranty Card"
    }
  ];

  return (
    <section id="process" className="relative bg-stone-950 py-24 text-white overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full text-xs text-amber-400 font-semibold backdrop-blur-md">
            <Sparkles size={14} className="text-amber-400 animate-pulse" />
            <span>45-Day Execution Guarantee</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            How We Bring Ideas to Life
          </h2>

          <p className="text-stone-400 text-sm sm:text-base font-normal leading-relaxed">
            A structured, stress-free workflow engineered to take your home from raw site measurements to move-in condition.
          </p>
        </div>

        {/* Process Cards with Progressive Connector Line */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-stone-800 z-0">
            <div
              className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 transition-all duration-500"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          {steps.map((proc, index) => {
            const Icon = proc.icon;
            const isActive = activeStep === index;
            const isCompleted = index < activeStep;

            return (
              <div
                key={proc.step}
                onClick={() => setActiveStep(index)}
                className={`relative z-10 rounded-3xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-500 ${
                  isActive
                    ? 'bg-gradient-to-b from-stone-900 to-stone-900/90 border border-amber-500/60 shadow-xl shadow-amber-500/10 lg:-translate-y-2'
                    : 'bg-stone-900/40 border border-stone-800/80 hover:border-stone-700 hover:bg-stone-900/80'
                }`}
              >
                <div>
                  {/* Step Top Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/30 ring-4 ring-amber-500/20'
                        : isCompleted
                        ? 'bg-stone-800 text-amber-400 border border-amber-500/30'
                        : 'bg-stone-800/80 text-stone-400 border border-stone-700/50'
                    }`}>
                      <Icon size={20} />
                    </div>

                    <span className={`font-serif text-2xl font-bold transition-colors ${
                      isActive ? 'text-amber-400' : 'text-stone-600'
                    }`}>
                      {proc.step}
                    </span>
                  </div>

                  {/* Timeframe Tag */}
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-stone-400 bg-stone-800/60 border border-stone-700/50 px-2.5 py-1 rounded-md mb-3">
                    <Clock size={12} className="text-amber-400" />
                    <span>{proc.timeframe}</span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-serif text-xl font-bold text-white mb-1">
                    {proc.title}
                  </h3>
                  <p className="text-xs text-amber-400/90 font-medium mb-3">
                    {proc.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-stone-400 text-xs leading-relaxed font-light mb-6">
                    {proc.desc}
                  </p>
                </div>

                {/* Deliverable Footer */}
                <div className="pt-4 border-t border-stone-800/80 flex items-center gap-2 text-[11px] font-medium text-stone-300">
                  <CheckCircle2 size={14} className={isActive ? 'text-amber-400' : 'text-stone-500'} />
                  <span>{proc.deliverable}</span>
                </div>

                {/* Active Indicator Line */}
                {isActive && (
                  <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full" />
                )}
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Card Below */}
        <div className="mt-12 bg-stone-900/60 border border-stone-800 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
            <p className="text-xs sm:text-sm text-stone-300">
              Selected Phase: <strong className="text-amber-400 font-semibold">{steps[activeStep].title}</strong> ({steps[activeStep].timeframe})
            </p>
          </div>
          
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all shadow-md shadow-amber-500/10"
          >
            <span>Book Phase 1 Consultation</span>
          </a>
        </div>

      </div>
    </section>
  );
}