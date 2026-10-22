import React from 'react';
import { HIGHLIGHTS } from '../data/company.ts';
import { 
  Building2, 
  Award, 
  Layers, 
  Flame, 
  Sparkles, 
  FileCode2, 
  Globe2, 
  Cpu 
} from 'lucide-react';

const ICON_MAP = [
  Building2,
  Award,
  Layers,
  Flame,
  Sparkles,
  FileCode2,
  Globe2,
  Cpu,
];

export const Highlights: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-red-600 mb-2">
            Company Highlights
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Manufacturing Capabilities for International Buyers
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            RK Engineering combines integrated fabrication with in-house hot-dip galvanizing to provide international buyers and EPC contractors with complete, defect-free supply execution.
          </p>
        </div>

        {/* 8-Card Grid with clean hairline borders and single-elevation depth */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HIGHLIGHTS.map((item, index) => {
            const Icon = ICON_MAP[index % ICON_MAP.length];
            return (
              <div 
                key={item.title}
                className="p-5 sm:p-6 rounded-lg bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2.5 rounded-md bg-blue-50 text-blue-700 border border-blue-100 group-hover:bg-red-50 group-hover:text-red-600 group-hover:border-red-100 transition-colors">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-xs font-mono font-bold text-blue-900 tabular-nums">
                      {item.metric}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 tracking-tight group-hover:text-blue-900 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="text-slate-700 font-medium">{item.badge}</span>
                  <span className="text-red-600 font-semibold">RK Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
