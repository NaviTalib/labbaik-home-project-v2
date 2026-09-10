import React from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';

export default function GalleryBento() {
  const projects = [
    // --- ROW 1 & 2 TOP ---
    {
      id: 1,
      title: "Luxury Parallel Quartz Kitchen",
      category: "Modular Kitchen",
      location: "Sector 150, Noida",
      span: "md:col-span-2 md:row-span-2", // Hero Top-Left (Col 1 & 2, Rows 1 & 2)
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: 2,
      title: "Fluted TV Unit & Ambient Cove",
      category: "Living Room",
      location: "DLF Phase 5, Gurugram",
      span: "md:col-span-1 md:row-span-1", // Top Right Row 1
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "Master Suite & Glass Wardrobe",
      category: "Master Bedroom",
      location: "Indirapuram, Ghaziabad",
      span: "md:col-span-1 md:row-span-1", // Top Right Row 2
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=800",
    },

    // --- ROW 3 FULL (3 IMAGES IN ROW 3) ---
    {
      id: 4,
      title: "Peripheral Gyproc Ceiling",
      category: "Lighting & Ceiling",
      location: "Vasant Kunj, Delhi",
      span: "md:col-span-1 md:row-span-1", // Row 3 - Column 1
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      title: "Minimalist Handleless Pantry",
      category: "Modular Kitchen",
      location: "Greater Noida West",
      span: "md:col-span-1 md:row-span-1", // Row 3 - Column 2
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 6,
      title: "Modular Crockery & Bar Unit", // <-- 3RD IMAGE FOR ROW 3
      category: "Dining & Bar",
      location: "Sector 128, Noida",
      span: "md:col-span-1 md:row-span-1", // Row 3 - Column 3
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    },

    // --- ROW 4 & 5 BOTTOM ---
    {
      id: 7,
      title: "Modern Minimalist Dining Lounge",
      category: "Dining & Living",
      location: "Golf Course Road, Gurugram",
      span: "md:col-span-2 md:row-span-2", // Hero Bottom-Left (Col 1 & 2, Rows 4 & 5)
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: 8,
      title: "Executive Corporate Suite",
      category: "Commercial Interior",
      location: "Sector 62, Noida",
      span: "md:col-span-1 md:row-span-1", // Bottom Right Row 4
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 9,
      title: "Bespoke Italian Marble Bath",
      category: "Luxury Bathroom",
      location: "Sector 75, Noida",
      span: "md:col-span-1 md:row-span-1", // Bottom Right Row 5
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full inline-block">
            Project Portfolio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Featured Interior Showcase
          </h2>
          <p className="text-stone-400 text-xs sm:text-sm font-light">
            Symmetrically balanced execution highlights from our latest client turnkeys.
          </p>
        </div>

        {/* 100% Solid Rectangular Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[240px]">
          {projects.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-3xl overflow-hidden bg-stone-800 border border-stone-700/60 shadow-xl transition-all duration-500 hover:border-amber-500/50 ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-stone-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/30">
                  {item.category}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between">
                <div className="space-y-1">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white leading-tight group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-stone-300 font-light">
                    <MapPin size={13} className="text-amber-400 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-stone-900/80 border border-stone-700 text-amber-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}