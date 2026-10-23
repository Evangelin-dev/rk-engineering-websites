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
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-red-600 mb-2 font-bold">
            Target Applications · Critical Infrastructure
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Industries We Serve
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            RK Engineering's cable management and galvanized steel product range serves a variety of industrial and infrastructure applications. Product suitability, environmental conditions, and applicable standards should be confirmed for each application.
          </p>
        </div>

        {/* Interactive Industry Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sector Selector List */}
          <div className="lg:col-span-5 space-y-2">
            {INDUSTRIES.map((sector) => {
              const Icon = SECTOR_ICONS[sector.id] || Zap;
              const isActive = sector.id === activeSectorId;
              return (
                <button
                  key={sector.id}
                  onClick={() => setActiveSectorId(sector.id)}
                  className={`w-full text-left p-3.5 rounded-lg border transition-all flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-blue-900 border-blue-900 text-white shadow-md'
                      : 'bg-slate-50 border-slate-200 hover:border-blue-300 text-slate-700 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`p-2 rounded ${isActive ? 'bg-red-600 text-white' : 'bg-white text-blue-900 border border-slate-200'}`}>
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="text-xs sm:text-sm font-semibold tracking-tight">
                      {sector.name}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-red-400 translate-x-1' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Detailed Sector Spotlight Card (Light) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-lg bg-slate-50 border border-slate-200 space-y-6 shadow-sm">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
              <span className="p-3 rounded-lg bg-red-600 text-white shadow-sm">
                <ActiveIcon className="w-6 h-6" />
              </span>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-red-600 font-bold block">
                  Application Profile
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {selectedSector.name}
                </h3>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {selectedSector.description}
            </p>

            <div className="p-4 rounded-md bg-white border border-slate-200 shadow-sm">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-1">
                Engineering Specification & Design Parameter
              </span>
              <span className="text-xs sm:text-sm font-mono text-blue-900 font-bold">
                {selectedSector.specs}
              </span>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block mb-3">
                Tailored Cable Management & Steel Solutions:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedSector.solutions.map((sol, sIdx) => (
                  <div key={sIdx} className="p-3 rounded-md bg-white border border-slate-200 flex items-start gap-2.5 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700">{sol}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Need a project-specific solution for this application?</span>
              <Link to="/contact" className="text-blue-700 hover:text-blue-900 font-semibold">
                Discuss your requirements &rarr;
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
