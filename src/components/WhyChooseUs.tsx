import React from 'react';
import { WHY_CHOOSE_US } from '../data/company.ts';
import { 
  Factory, 
  ShieldCheck, 
  FileCheck2, 
  Scale, 
  Microscope, 
  PlaneTakeoff, 
  Check 
} from 'lucide-react';

const ICONS = [
  Factory,
  ShieldCheck,
  FileCheck2,
  Scale,
  Microscope,
  PlaneTakeoff,
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-red-600 mb-2 font-bold">
            Competitive Edge · Operational Reliability
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Why Choose RK Engineering?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Manufacturing Capabilities Built Around Industrial Requirements. From raw coil slit verification to precision CNC punching and in-house galvanizing, every stage is optimized for international EPC expectations.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((pillar, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-lg bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="p-2.5 rounded-md bg-blue-50 text-blue-700 border border-blue-100 group-hover:bg-red-50 group-hover:text-red-600 group-hover:border-red-100 transition-colors">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-bold">
                      Pillar 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-blue-900 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                  {pillar.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
