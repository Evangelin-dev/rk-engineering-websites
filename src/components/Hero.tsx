import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';

interface HeroProps {
  onOpenRFQ: () => void;
  onExploreProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRFQ, onExploreProducts }) => {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200">
      {/* Background ambient subtle blueprint grid */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Kicker - Clean unboxed text with typographic separator (Red Accent) */}
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-red-600 mb-4">
          <span>Global Manufacturing & Export</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>India to Africa, USA & Worldwide</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>ISO 9001 / 14001 / 45001</span>
        </div>

        {/* Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
              Industrial Cable Tray Manufacturer & Exporter from India
            </h1>
            
            <p className="mt-4 text-lg sm:text-xl font-semibold text-blue-900 leading-snug">
              Reliable Cable Management and Galvanized Steel Solutions for Global Projects
            </p>

            <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              RK Engineering & Galvanizers Pvt. Ltd. manufactures hot-dip galvanized cable trays, GI cable trays, cable raceways, earthing materials, solar mounting structures, and industrial galvanized steel products. With in-house hot-dip galvanizing and established manufacturing capabilities, we support project enquiries from international buyers, EPC contractors, distributors, and industrial procurement teams across Africa, the USA, and other markets.
            </p>

            {/* CTAs (Primary Red, Secondary Blue) */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenRFQ}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded-md transition-all cursor-pointer shadow-md active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-red-600"
              >
                <span>Request an Export Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreProducts}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-blue-900 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-md transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-600"
              >
                <span>Explore Our Products</span>
              </button>
            </div>

            {/* Supporting line */}
            <div className="mt-7 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-slate-600">
              <span className="text-slate-900 font-semibold">Established in 2000</span>
              <span className="text-slate-300" aria-hidden="true">|</span>
              <span className="text-slate-900 font-semibold">12,000 MT Annual Cable Tray Capacity</span>
              <span className="text-slate-300" aria-hidden="true">|</span>
              <span className="text-slate-900 font-semibold">24,000 MT Annual Hot-Dip Galvanizing Capacity</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative flex flex-col justify-center">
            <div className="relative rounded-lg overflow-hidden border border-slate-200 bg-slate-100 shadow-xl group">
              <img
                src="/src/assets/images/hero_cable_tray_plant_1792669704557.jpg"
                alt="RK Engineering industrial hot-dip galvanized cable trays and ladder systems in infrastructure facility"
                className="w-full h-[340px] sm:h-[420px] lg:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

              {/* Technical Overlay Box in Light/Card Style */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg text-xs">
                <div className="flex items-center justify-between text-slate-900 mb-1 font-semibold">
                  <span className="flex items-center gap-1.5 text-red-600">
                    <Shield className="w-3.5 h-3.5" />
                    In-House Galvanizing Facility
                  </span>
                  <span className="font-mono text-blue-900 font-bold">IS 2629 / ASTM A123</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Controlled zinc kettle at 450°C providing 80–120 micron metallurgical alloy bond for 25+ years corrosion endurance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column KPI Trust Strip below hero split */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-blue-950 font-mono tabular-nums">2000</div>
            <div className="text-xs uppercase tracking-wider text-red-600 font-semibold">Established</div>
            <div className="text-xs text-slate-600">25+ Years continuous manufacturing</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-blue-950 font-mono tabular-nums">12,000 MT</div>
            <div className="text-xs uppercase tracking-wider text-red-600 font-semibold">Cable Tray Output</div>
            <div className="text-xs text-slate-600">Annual precision manufacturing capacity</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-blue-950 font-mono tabular-nums">24,000 MT</div>
            <div className="text-xs uppercase tracking-wider text-red-600 font-semibold">Hot-Dip Galvanizing</div>
            <div className="text-xs text-slate-600">Annual integrated surface treatment</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-blue-950 font-mono tabular-nums">ISO & CE</div>
            <div className="text-xs uppercase tracking-wider text-red-600 font-semibold">Global Quality</div>
            <div className="text-xs text-slate-600">ISO 9001, 14001, 45001 accredited</div>
          </div>
        </div>

      </div>
    </section>
  );
};
