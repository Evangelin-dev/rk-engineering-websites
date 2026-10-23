import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { INDUSTRIES, IndustryItem } from '../data/company.ts';
import { 
  Zap, 
  SunMedium, 
  Fuel, 
  Factory, 
  Radio, 
  Building, 
  Train, 
  Server, 
  Droplet,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

const SECTOR_ICONS: Record<string, React.ElementType> = {
  'power-generation': Zap,
  'renewable-energy': SunMedium,
  'oil-and-gas': Fuel,
  'petrochemical-manufacturing': Factory,
  'telecommunications': Radio,
  'commercial-buildings': Building,
  'infrastructure-railways': Train,
  'data-centres': Server,
  'water-treatment': Droplet,
};

export const IndustriesSection: React.FC = () => {
  const [activeSectorId, setActiveSectorId] = useState<string>('water-treatment');

  const selectedSector = INDUSTRIES.find((i) => i.id === activeSectorId) || INDUSTRIES[0];
  const ActiveIcon = SECTOR_ICONS[selectedSector.id] || Zap;

  return (
    <section className="relative isolate overflow-hidden border-b border-blue-900 bg-blue-950 py-16 text-white sm:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-40 h-[32rem] w-[32rem] rounded-full border border-white/5" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-24 h-[24rem] w-[24rem] rounded-full border border-white/5" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-5 lg:mb-12 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-red-400">
              Applications Across Industries
            </p>
            <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              Industries We Serve
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-blue-100 sm:text-base lg:justify-self-end">
            RK Engineering&apos;s cable management and galvanized steel product range serves a variety of industrial and infrastructure applications. Product suitability, environmental conditions, and applicable standards should be confirmed for each application.
          </p>
        </div>

        <div className="grid items-start gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:gap-7">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {INDUSTRIES.map((sector) => {
              const Icon = SECTOR_ICONS[sector.id] || Zap;
              const isActive = sector.id === activeSectorId;
              return (
                <button
                  key={sector.id}
                  type="button"
                  onClick={() => setActiveSectorId(sector.id)}
                  aria-pressed={isActive}
                  className={`group flex min-h-[58px] w-full cursor-pointer items-center justify-between gap-3 rounded-lg border px-3.5 py-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    isActive
                      ? 'border-red-500/70 bg-white text-blue-950 shadow-lg'
                      : 'border-white/10 bg-white/[0.04] text-blue-50 hover:border-white/25 hover:bg-white/[0.09]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md ${
                      isActive ? 'bg-red-600 text-white' : 'border border-white/10 bg-blue-900/70 text-blue-200'
                    }`}>
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-semibold tracking-tight">
                      {sector.name}
                    </span>
                  </div>
                  <ChevronRight aria-hidden="true" className={`h-4 w-4 shrink-0 transition-transform ${isActive ? 'translate-x-1 text-red-600' : 'text-blue-300 group-hover:translate-x-1'}`} />
                </button>
              );
            })}
          </div>

          <article className="space-y-5 rounded-xl border border-slate-200 bg-white p-5 text-slate-900 shadow-xl sm:space-y-6 sm:p-7 lg:p-8">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-600 text-white shadow-sm">
                <ActiveIcon aria-hidden="true" className="h-6 w-6" />
              </span>
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-red-600">
                  Application Profile
                </span>
                <h3 className="mt-1 text-xl font-extrabold tracking-tight sm:text-2xl">
                  {selectedSector.name}
                </h3>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              {selectedSector.description}
            </p>

            <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3.5">
              <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:text-xs">
                Engineering Specification & Design Parameter
              </span>
              <span className="font-mono text-xs font-bold leading-relaxed text-blue-900 sm:text-sm">
                {selectedSector.specs}
              </span>
            </div>

            <div>
              <span className="mb-3 block text-xs font-bold uppercase tracking-wider text-slate-900">
                Tailored Cable Management & Steel Solutions:
              </span>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {selectedSector.solutions.map((solution) => (
                  <div key={solution} className="flex items-start gap-2.5 rounded-lg border border-slate-200 bg-white p-3">
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                    <span className="text-sm leading-snug text-slate-700">{solution}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-slate-200 pt-4 text-sm sm:flex-row sm:items-center sm:justify-between">
              <span className="text-slate-500">Need a project-specific solution for this application?</span>
              <Link to="/contact" className="shrink-0 font-semibold text-blue-800 transition-colors hover:text-red-600">
                Discuss your requirements <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
