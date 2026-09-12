import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Clock, Award, ChevronLeft, ChevronRight } from 'lucide-react';

const sliderImages = [
  {
    url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000',
    title: 'Luxury Living Space',
    subtitle: 'Modern aesthetic with custom ambient lighting',
  },
  {
    url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1000',
    title: 'Modular Kitchen Concept',
    subtitle: 'High-gloss acrylic finish with smart storage solutions',
  },
  {
    url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=1000',
    title: 'Master Bedroom Suite',
    subtitle: 'Custom upholstered headboard & integrated wardrobe',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-stone-950 text-white min-h-[90vh] flex items-center py-16 md:py-24 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 opacity-25">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000"
          alt="Interior Showcase"
          className="w-full h-full object-cover scale-105 transition-transform duration-1000"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-stone-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/60" />

      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Hero Content */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-stone-900/90 border border-amber-500/30 backdrop-blur-md px-4 py-2 rounded-full text-xs text-amber-400 font-medium shadow-sm">
            <Sparkles size={14} className="text-amber-400 animate-pulse" /> 
            <span>Premier Interior & Renovation Specialists</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight">
            Transforming Houses Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">Masterpieces</span>.
          </h1>

          {/* Subtext */}
          <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            At <strong className="text-white font-medium">Labbaik Interior</strong>, we blend architectural design, premium craftsmanship, and end-to-end execution to build spaces you love coming home to.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#contact"
              className="group bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-medium px-8 py-4 rounded-full flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-amber-600/25 hover:shadow-amber-500/40 hover:-translate-y-0.5"
            >
              Book Free Site Visit 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#plans"
              className="bg-stone-900/80 hover:bg-stone-800 text-stone-200 border border-stone-700/80 hover:border-stone-600 font-medium px-8 py-4 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            >
              Explore Pricing Plans
            </a>
          </div>

          {/* Key Metrics / Highlights */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-stone-800/80">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                <Award size={14} /> Completed
              </div>
              <p className="font-serif text-2xl sm:text-3xl font-bold text-white">1000+</p>
              <p className="text-xs text-stone-400">Projects Delivered</p>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck size={14} /> Assurance
              </div>
              <p className="font-serif text-2xl sm:text-3xl font-bold text-white">10 Year</p>
              <p className="text-xs text-stone-400">Material Warranty</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                <Clock size={14} /> Express
              </div>
              <p className="font-serif text-2xl sm:text-3xl font-bold text-white">45 Days</p>
              <p className="text-xs text-stone-400">Guaranteed Move-In</p>
            </div>
          </div>

        </div>

        {/* Right Column: Visual Image Slider */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden border border-stone-800 bg-stone-900/60 backdrop-blur-md p-3 shadow-2xl">
            <div className="relative h-[380px] sm:h-[420px] rounded-2xl overflow-hidden group">
              
              {/* Slides Container */}
              {sliderImages.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img
                    src={slide.url}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                  
                  {/* Overlay Title & Subtitle */}
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <div className="bg-stone-900/90 backdrop-blur-md border border-stone-700/60 p-4 rounded-xl">
                      <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                        Featured Design
                      </p>
                      <h4 className="text-base font-serif font-bold text-white mt-0.5">
                        {slide.title}
                      </h4>
                      <p className="text-xs text-stone-300 mt-1">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Slider Controls (Prev / Next Buttons) */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-stone-950/70 hover:bg-amber-600 text-white flex items-center justify-center backdrop-blur-sm border border-stone-700/50 transition-all opacity-80 group-hover:opacity-100"
                aria-label="Previous Slide"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-stone-950/70 hover:bg-amber-600 text-white flex items-center justify-center backdrop-blur-sm border border-stone-700/50 transition-all opacity-80 group-hover:opacity-100"
                aria-label="Next Slide"
              >
                <ChevronRight size={18} />
              </button>

              {/* Slider Dots / Indicators */}
              <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 bg-stone-950/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-700/50">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === currentSlide ? 'w-5 bg-amber-400' : 'w-1.5 bg-stone-500 hover:bg-stone-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}