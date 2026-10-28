import React, { useEffect, useRef, useState } from 'react';
import { UPLOADED_PRODUCT_IMAGES } from '../data/productImages.ts';

const CAPABILITIES = [
  {
    id: 'established',
    title: 'Established in 2000',
    leftLabel: 'Established in 2000',
    description:
      'Established in 2000, RK Engineering has more than 25 years of continuous manufacturing experience in heavy steel fabrication, cable management, and surface protection.',
    metric: '25+ Years',
    image: UPLOADED_PRODUCT_IMAGES['63'],
    alt: 'RK Engineering steel product',
  },
  {
    id: 'certifications',
    title: 'ISO-Certified Operations',
    leftLabel: 'ISO-Certified Operations',
    description:
      'RK Engineering operates under certified quality, environmental, and safety management systems, supporting disciplined industrial production and supply control.',
    metric: 'ISO & CE',
    image: UPLOADED_PRODUCT_IMAGES['63'],
    alt: 'RK Engineering steel product',
  },
  {
    id: 'tray-capacity',
    title: 'Cable Tray Manufacturing — 12,000 MT',
    leftLabel: 'Cable Tray Manufacturing — 12,000 MT',
    description:
      'Our stated annual cable tray manufacturing capacity is 12,000 metric tonnes, supported by roll-forming, CNC perforation, and industrial fabrication operations.',
    metric: '12,000 MT',
    image: UPLOADED_PRODUCT_IMAGES['58'],
    alt: 'RK Engineering cable tray product',
  },
  {
    id: 'galvanizing-capacity',
    title: 'Hot-Dip Galvanizing — 24,000 MT',
    leftLabel: 'Hot-Dip Galvanizing — 24,000 MT',
    description:
      'RK Engineering supports a stated annual hot-dip galvanizing capacity of 24,000 metric tonnes for industrial and infrastructure steel products.',
    metric: '24,000 MT',
    image: UPLOADED_PRODUCT_IMAGES['63'],
    alt: 'RK Engineering hot-dip galvanized steel product',
  },
  {
    id: 'in-house-galvanizing',
    title: 'In-House Galvanizing Facility',
    leftLabel: 'In-House Galvanizing Facility',
    description:
      'Integrated manufacturing minimizes third-party handling and supports consistent coating thickness, zinc adherence, and smoother project execution.',
    metric: '100% In-House',
    image: UPLOADED_PRODUCT_IMAGES['63'],
    alt: 'RK Engineering galvanized steel product',
  },
  {
    id: 'custom',
    title: 'Custom Manufacturing',
    leftLabel: 'Custom Manufacturing',
    description:
      'Full engineering assessment supports custom widths, gauges, hole patterns, and fabrication requirements for product-specific industrial applications.',
    metric: 'Bespoke CAD',
    image: UPLOADED_PRODUCT_IMAGES['55'],
    alt: 'RK Engineering industrial steel product',
  },
  {
    id: 'exports',
    title: 'International Export Enquiries',
    leftLabel: 'International Export Enquiries',
    description:
      'We support global export enquiries with CFR, CIF, FOB quotations, port coordination, and seaworthy packing for international project procurement.',
    metric: 'Global Export',
    image: UPLOADED_PRODUCT_IMAGES['63'],
    alt: 'RK Engineering steel product for international enquiries',
  },
  {
    id: 'project-capabilities',
    title: 'Industrial Project Capabilities',
    leftLabel: 'Industrial Project Capabilities',
    description:
      'Our manufacturing focus spans power utilities, solar parks, petrochemical facilities, data centres, and industrial infrastructure where reliable material supply is essential.',
    metric: '500+ Projects',
    image: UPLOADED_PRODUCT_IMAGES['66'],
    alt: 'RK Engineering steel product for infrastructure projects',
  },
] as const;

export const Highlights: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(CAPABILITIES[0].id);
  const [contentVisible, setContentVisible] = useState(true);
  const contentFrameRef = useRef<number | undefined>(undefined);
  const activeCapability = CAPABILITIES.find((item) => item.id === activeId) ?? CAPABILITIES[0];

  useEffect(
    () => () => window.cancelAnimationFrame(contentFrameRef.current ?? 0),
    [],
  );

  const selectCapability = (id: string) => {
    window.cancelAnimationFrame(contentFrameRef.current ?? 0);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActiveId(id);
      setContentVisible(true);
      return;
    }
    setContentVisible(false);
    setActiveId(id);
    contentFrameRef.current = window.requestAnimationFrame(() => setContentVisible(true));
  };

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
                    onClick={() => selectCapability(item.id)}
                    className={`relative w-full rounded-lg border px-4 py-4 text-left transition-[color,background-color,border-color,box-shadow] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${
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

          <div className={`overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-opacity duration-200 motion-reduce:transition-none ${
            contentVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-slate-200">
              <img
                src={activeCapability.image}
                alt={activeCapability.alt}
                className="h-full w-full object-cover transition-transform duration-500 ease-out motion-reduce:transition-none"
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
