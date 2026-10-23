import React, { useState } from 'react';
import heroImage from '../assets/images/hero_cable_tray_plant_1792669704557.jpg';
import productsImage from '../assets/images/products_cable_trays_1792669705857.jpg';
import galvanizingImage from '../assets/images/galvanizing_facility_1792669705362.jpg';
import exportImage from '../assets/images/global_export_shipping_1792669706316.jpg';

const CAPABILITIES = [
  {
    id: 'established',
    title: 'Established in 2000',
    leftLabel: 'Established in 2000',
    description:
      'Established in 2000, RK Engineering has more than 25 years of continuous manufacturing experience in heavy steel fabrication, cable management, and surface protection.',
    metric: '25+ Years',
    image: heroImage,
    alt: 'Industrial cable tray plant and production facility',
  },
  {
    id: 'certifications',
    title: 'ISO-Certified Operations',
    leftLabel: 'ISO-Certified Operations',
    description:
      'RK Engineering operates under certified quality, environmental, and safety management systems, supporting disciplined industrial production and supply control.',
    metric: 'ISO & CE',
    image: productsImage,
    alt: 'Industrial quality inspection and manufacturing output',
  },
  {
    id: 'tray-capacity',
    title: 'Cable Tray Manufacturing — 12,000 MT',
    leftLabel: 'Cable Tray Manufacturing — 12,000 MT',
    description:
      'Our stated annual cable tray manufacturing capacity is 12,000 metric tonnes, supported by roll-forming, CNC perforation, and industrial fabrication operations.',
    metric: '12,000 MT',
    image: productsImage,
    alt: 'Cable tray production and fabrication activity',
  },
  {
    id: 'galvanizing-capacity',
    title: 'Hot-Dip Galvanizing — 24,000 MT',
    leftLabel: 'Hot-Dip Galvanizing — 24,000 MT',
    description:
      'RK Engineering supports a stated annual hot-dip galvanizing capacity of 24,000 metric tonnes for industrial and infrastructure steel products.',
    metric: '24,000 MT',
    image: galvanizingImage,
    alt: 'In-house hot-dip galvanizing facility and zinc bath',
  },
  {
    id: 'in-house-galvanizing',
    title: 'In-House Galvanizing Facility',
    leftLabel: 'In-House Galvanizing Facility',
    description:
      'Integrated manufacturing minimizes third-party handling and supports consistent coating thickness, zinc adherence, and smoother project execution.',
    metric: '100% In-House',
    image: galvanizingImage,
    alt: 'Close-up of galvanizing process and zinc coating operation',
  },
  {
    id: 'custom',
    title: 'Custom Manufacturing',
    leftLabel: 'Custom Manufacturing',
    description:
      'Full engineering assessment supports custom widths, gauges, hole patterns, and fabrication requirements for product-specific industrial applications.',
    metric: 'Bespoke CAD',
    image: heroImage,
    alt: 'Custom fabrication and engineering work for industrial steel components',
  },
  {
    id: 'exports',
    title: 'International Export Enquiries',
    leftLabel: 'International Export Enquiries',
    description:
      'We support global export enquiries with CFR, CIF, FOB quotations, port coordination, and seaworthy packing for international project procurement.',
    metric: 'Global Export',
    image: exportImage,
    alt: 'Export packing and shipping logistics for industrial goods',
  },
  {
    id: 'project-capabilities',
    title: 'Industrial Project Capabilities',
    leftLabel: 'Industrial Project Capabilities',
    description:
      'Our manufacturing focus spans power utilities, solar parks, petrochemical facilities, data centres, and industrial infrastructure where reliable material supply is essential.',
    metric: '500+ Projects',
    image: heroImage,
    alt: 'Industrial infrastructure project installation and steel application',
  },
] as const;

export const Highlights: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(CAPABILITIES[0].id);
  const activeCapability = CAPABILITIES.find((item) => item.id === activeId) ?? CAPABILITIES[0];

  return (
    <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-red-600">
            Our Capabilities
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Manufacturing Strength. Global Reach.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Explore our manufacturing, quality and export capabilities.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[40%_60%] lg:gap-8">
          <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <div className="space-y-1">
              {CAPABILITIES.map((item) => {
                const isActive = item.id === activeId;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={`relative w-full rounded-lg border px-4 py-4 text-left transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${
                      isActive
                        ? 'border-blue-200 bg-blue-50 text-blue-950 shadow-sm'
                        : 'border-transparent bg-transparent text-slate-700 hover:border-slate-200 hover:bg-slate-50'
                    }`}
                    aria-pressed={isActive}
                  >
                    {isActive && (
                      <span className="absolute inset-y-2 left-0 w-1 rounded-full bg-red-600" aria-hidden="true" />
                    )}
                    <span className={`block pl-3 text-base font-semibold leading-snug ${isActive ? 'text-blue-950' : 'text-slate-700'}`}>
                      {item.leftLabel}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-slate-200">
              <img
                src={activeCapability.image}
                alt={activeCapability.alt}
                className="h-full w-full object-cover transition-all duration-300 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                {activeCapability.metric}
              </span>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-[2rem]">
                {activeCapability.title}
              </h3>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base">
                {activeCapability.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
