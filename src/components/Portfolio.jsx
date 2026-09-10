import React, { useState } from 'react';
import { Sparkles, Eye, X, ArrowUpRight, MapPin } from 'lucide-react';

export default function Portfolio() {
  const [portfolioFilter, setPortfolioFilter] = useState('All');
  const [activeImage, setActiveImage] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'Modern Minimalist Living Area',
      category: 'Living Room',
      location: 'South Delhi, Delhi',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
      description: 'Open-concept layout featuring custom ambient LED trough lighting, Italian marble floor polishing, and custom veneer accent wall.'
    },
    {
      id: 2,
      title: 'Italian Finish Modular Kitchen',
      category: 'Kitchen',
      location: 'Gurugram, HR',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200',
      description: 'Handleless anti-fingerprint acrylic cabinets with Blum soft-close mechanics and quartz countertop setup.'
    },
    {
      id: 3,
      title: 'Luxury Master Bedroom Suite',
      category: 'Bedroom',
      location: 'Noida, UP',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=1200',
      description: 'Custom fluted paneling backdrop with integrated warm lighting, upholstered King headboard, and floor-to-ceiling wardrobes.'
    },
    {
      id: 4,
      title: 'Corporate Lounge & Executive Office',
      category: 'Commercial',
      location: 'DLF CyberCity, HR',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
      description: 'Contemporary reception workspace engineered with acoustic wood ceiling baffles and glass partition systems.'
    },
    {
      id: 5,
      title: 'Open Concept Dining Space',
      category: 'Living Room',
      location: 'Greater Noida, UP',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=1200',
      description: 'Spacious dining layout with bespoke 8-seater marble table, custom bar counter, and architectural false ceiling.'
    },
    {
      id: 6,
      title: 'Custom Walk-In Closet Solution',
      category: 'Bedroom',
      location: 'Vasant Kunj, Delhi',
      image: 'https://images.unsplash.com/photo-1558882224-dda166733046?auto=format&fit=crop&q=80&w=1200',
      description: 'Tinted glass sliding doors with automated internal strip lighting and dedicated watch & jewelry display drawers.'
    },
  ];

  const categories = ['All', 'Living Room', 'Kitchen', 'Bedroom', 'Commercial'];

  const filteredPortfolio = portfolioFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === portfolioFilter);

  return (
    <section id="portfolio" className="relative bg-stone-50 py-24 text-stone-900 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-100/50 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 px-4 py-1.5 rounded-full text-xs text-amber-800 font-semibold shadow-xs">
              <Sparkles size={14} className="text-amber-600 animate-pulse" />
              <span>Our Executed Work</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
              Recent Transformations
            </h2>
            
            <p className="text-stone-600 text-sm sm:text-base font-normal leading-relaxed">
              Explore our curated showcase of completed residential and commercial spaces across the region.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap gap-2 self-start lg:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setPortfolioFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 transform active:scale-95 ${
                  portfolioFilter === cat
                    ? 'bg-stone-900 text-amber-400 shadow-lg shadow-stone-900/20 ring-1 ring-stone-900'
                    : 'bg-white text-stone-600 border border-stone-200/90 hover:border-amber-400 hover:text-stone-900 hover:shadow-md'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative overflow-hidden rounded-3xl bg-stone-200/60 border border-stone-200/80 aspect-[4/3] cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
            >
              {/* Image with Zoom Animation */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Default Floating Top Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-stone-950/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] font-medium text-amber-300">
                <MapPin size={12} className="text-amber-400" />
                <span>{item.location}</span>
              </div>

              {/* Hover Overlay with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col justify-end text-white">
                
                {/* Expand Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Eye size={18} />
                </div>

                <span className="text-[11px] font-bold tracking-wider text-amber-400 uppercase">
                  {item.category}
                </span>

                <h4 className="font-serif text-xl font-bold mt-1 text-white group-hover:text-amber-200 transition-colors">
                  {item.title}
                </h4>

                <div className="mt-3 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-stone-300">
                  <span>Click to view details</span>
                  <ArrowUpRight size={16} className="text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal for Image Inspection */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 transition-all duration-300 animate-fadeIn"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative bg-stone-900 border border-stone-800 rounded-3xl overflow-hidden max-w-4xl w-full text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-stone-950/80 hover:bg-amber-600 text-white flex items-center justify-center backdrop-blur-md border border-stone-700/60 transition-colors"
              aria-label="Close Preview"
            >
              <X size={20} />
            </button>

            {/* Modal Image */}
            <div className="relative h-[320px] sm:h-[450px] w-full overflow-hidden bg-black">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent" />
            </div>

            {/* Modal Details */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold tracking-wider text-amber-400 uppercase bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                  {activeImage.category}
                </span>
                <span className="text-xs text-stone-400 flex items-center gap-1">
                  <MapPin size={13} className="text-amber-400" />
                  {activeImage.location}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {activeImage.title}
              </h3>

              <p className="text-stone-300 text-sm leading-relaxed font-light">
                {activeImage.description}
              </p>

              <div className="pt-4 flex justify-end">
                <a
                  href="#contact"
                  onClick={() => setActiveImage(null)}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-semibold px-6 py-3 rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-amber-500/20"
                >
                  <span>Book Free Consult For Similar Design</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}