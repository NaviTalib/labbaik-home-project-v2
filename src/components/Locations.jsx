import React, { useState, useMemo } from 'react';
import { 
  MapPin, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Truck,
  Sparkles
} from 'lucide-react';

const COVERAGE_REGIONS = [
  {
    id: "noida",
    region: "Noida & Greater Noida",
    tagline: "Core Execution Territory",
    completedProjects: "120+",
    turnaround: "45-Day Delivery",
    sectors: [
      "Sector 150 & 137",
      "Noida-Greater Noida Expressway",
      "Greater Noida West (Noida Ext.)",
      "Gaur City & Knowledge Park",
      "Sector 74 to 79 Corridor",
      "Sector 50, 62 & 104"
    ]
  },
  {
    id: "gurugram",
    region: "Gurugram",
    tagline: "Luxury High-Rise & Villas",
    completedProjects: "85+",
    turnaround: "Premium Custom Fit",
    sectors: [
      "Golf Course & Ext. Road",
      "DLF Phase 1–5 & Cyber City",
      "Sohna Road Corridor",
      "New Gurgaon (Sec 82–95)",
      "Dwarka Expressway Sectors",
      "Southern Peripheral Road (SPR)"
    ]
  },
  {
    id: "delhi",
    region: "Delhi NCR Prime",
    tagline: "Bespoke Residences & Floors",
    completedProjects: "90+",
    turnaround: "Turnkey Renovation",
    sectors: [
      "South Extension, GK & Saket",
      "Vasant Kunj & Vasant Vihar",
      "Dwarka Sub-City Sectors",
      "Punjabi Bagh & Paschim Vihar",
      "Preet Vihar & Mayur Vihar",
      "Model Town & Civil Lines"
    ]
  },
  {
    id: "ghaziabad",
    region: "Ghaziabad & Faridabad",
    tagline: "High-Rise Residential",
    completedProjects: "110+",
    turnaround: "Fast-Track Modular",
    sectors: [
      "Indirapuram (All Blocks)",
      "Vaishali & Vasundhara",
      "Raj Nagar Extension",
      "Crossings Republik",
      "Faridabad (Sector 14–21)",
      "Neharpar & Greater Faridabad"
    ]
  }
];

const METRICS = [
  { icon: Clock, label: "On-Site Supervision", desc: "Dedicated daily site engineer" },
  { icon: Truck, label: "Direct Transit", desc: "Factory-to-flat insured transport" },
  { icon: ShieldCheck, label: "Society Permits", desc: "Gate & RWA clearance handled" },
];

export default function Locations() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter locations based on search query matching region name or any sector
  const filteredRegions = useMemo(() => {
    if (!searchQuery.trim()) return COVERAGE_REGIONS;
    const query = searchQuery.toLowerCase();

    return COVERAGE_REGIONS.map((region) => {
      const matchingSectors = region.sectors.filter((sec) =>
        sec.toLowerCase().includes(query)
      );
      const matchesRegionName = region.region.toLowerCase().includes(query);

      if (matchesRegionName || matchingSectors.length > 0) {
        return {
          ...region,
          sectors: matchesRegionName ? region.sectors : matchingSectors
        };
      }
      return null;
    }).filter(Boolean);
  }, [searchQuery]);

  return (
    <section id="locations" className="relative bg-stone-50 py-20 lg:py-28 text-stone-900 overflow-hidden">
      
      {/* Background Ambience */}
      <div 
        className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200/20 blur-3xl rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200/80 px-3.5 py-1 rounded-full text-xs text-amber-800 font-semibold tracking-wide">
            <Sparkles size={13} className="text-amber-600" />
            <span>Operational Zones</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
            Where We Deliver
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Full interior execution, modular joinery, and supervisor-managed turnkeys across all key high-rise sectors in Delhi NCR.
          </p>
        </div>

        {/* Search / Sector Verification Filter */}
        <div className="max-w-xl mx-auto mb-14">
          <div className="relative flex items-center shadow-xs bg-white rounded-2xl border border-stone-200 focus-within:border-amber-600 focus-within:ring-2 focus-within:ring-amber-500/20 transition-all">
            <Search size={18} className="absolute left-4 text-stone-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your sector, society, or locality (e.g. Sector 150, DLF, Indirapuram)..."
              className="w-full py-3.5 pl-11 pr-4 text-sm text-stone-800 placeholder-stone-400 bg-transparent rounded-2xl focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="mr-3 text-xs font-semibold text-stone-400 hover:text-stone-700 p-1"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Regions Grid */}
        {filteredRegions.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {filteredRegions.map((loc) => (
              <div
                key={loc.id}
                className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-xs hover:shadow-md hover:border-amber-300 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-2 pb-4 border-b border-stone-100">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50/80 px-2 py-0.5 rounded">
                        {loc.turnaround}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-stone-900 mt-2">
                        {loc.region}
                      </h3>
                      <p className="text-xs text-stone-500 mt-0.5">{loc.tagline}</p>
                    </div>
                    <span className="text-xs font-semibold text-stone-700 bg-stone-100 px-2 py-1 rounded-md shrink-0">
                      {loc.completedProjects} Sites
                    </span>
                  </div>

                  {/* Sectors Bulleted Grid */}
                  <div className="mt-5 space-y-2.5">
                    <p className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
                      Active Sectors & Clusters
                    </p>
                    <ul className="space-y-2">
                      {loc.sectors.map((sector, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs font-medium text-stone-700">
                          <CheckCircle2 size={13} className="text-amber-600 shrink-0" />
                          <span>{sector}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="mt-6 pt-4 border-t border-stone-100">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-stone-800 hover:text-amber-700 group transition-colors"
                  >
                    <span>Check site availability</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-stone-300 max-w-lg mx-auto">
            <MapPin size={28} className="mx-auto text-stone-400 mb-2" />
            <p className="text-sm font-semibold text-stone-800">No direct match for "{searchQuery}"</p>
            <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
              We execute throughout Delhi NCR. Reach out directly to verify your project coordinates.
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold bg-stone-900 text-white px-4 py-2 rounded-full hover:bg-amber-600 transition-colors"
            >
              Ask on WhatsApp
            </a>
          </div>
        )}

        {/* Standard Logistics & Execution Banner */}
        <div className="mt-14 bg-stone-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="grid sm:grid-cols-3 gap-6 w-full md:w-auto flex-1">
            {METRICS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-amber-400">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">{item.label}</h4>
                    <p className="text-xs text-stone-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <a
              href="#contact"
              className="inline-flex items-center justify-center w-full md:w-auto gap-2 bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold text-xs uppercase tracking-wider px-5 py-3 rounded-xl transition-colors shadow-xs"
            >
              <span>Schedule Site Visit</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}