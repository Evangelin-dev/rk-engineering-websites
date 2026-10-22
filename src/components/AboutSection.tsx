import React from 'react';
import { TIMELINE_MILESTONES, COMPANY_STATS } from '../data/company.ts';
import { Building, ShieldCheck, Target, Compass, Award, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenRFQ: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenRFQ }) => {
  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-red-600 mb-2 font-bold">
            Company Heritage · 25+ Years
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Industrial Manufacturing & Galvanizing Expertise Since 2000
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            RK Engineering & Galvanizers Pvt. Ltd. is an Indian industrial manufacturing company specialising in cable management systems, hot-dip galvanized products, earthing materials, solar mounting structures, and steel fabrication solutions.
          </p>
        </div>

        {/* Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-start">
          
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-slate-600 leading-relaxed">
            <p>
              Established in 2000, we combine manufacturing experience with in-house hot-dip galvanizing capabilities to support industrial, electrical, energy, and infrastructure requirements. We welcome enquiries from international buyers, EPC contractors, engineering companies, distributors, and procurement teams seeking an Indian manufacturing partner for project-based requirements.
            </p>
            <p>
              With a focus on manufacturing capability, product specifications, quality management, and customer requirements, we aim to build long-term business relationships across India and international markets, including Africa and the USA.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-white border border-slate-200 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block mb-1">
                  Our Leadership Values
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Guided by manufacturing responsibility, clear technical communication, and predictable delivery coordination between plant engineers and international procurement teams.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white border border-slate-200 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block mb-1">
                  Vision for the Future
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Continually expanding automated roll-forming and high-efficiency hot-dip galvanizing lines while expanding direct export corridors across Africa, the USA, and worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {COMPANY_STATS.map((stat) => (
              <div key={stat.label} className="p-5 rounded-lg bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {stat.label}
                </div>
                <div className="my-2 text-2xl sm:text-3xl font-bold font-mono text-blue-950 tabular-nums">
                  {stat.value}
                </div>
                <div className="text-[11px] text-red-600 font-bold">
                  {stat.context}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* 25-Year Journey Interactive Timeline (Light Box) */}
        <div className="p-6 sm:p-8 rounded-lg bg-white border border-slate-200 shadow-sm">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-red-600 font-bold block mb-1">
              Historic Progression
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Our Journey: From Manufacturing Experience to International Markets
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {TIMELINE_MILESTONES.map((milestone, idx) => (
              <div key={milestone.year} className="relative flex flex-col justify-between space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold font-mono text-blue-900">
                    {milestone.year}
                  </span>
                  <div className="h-px bg-slate-200 flex-1 hidden md:block" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                    {milestone.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              For new international enquiries: Product availability, technical compliance, and destination-specific supply arrangements are assessed for each project.
            </span>
            <button
              onClick={onOpenRFQ}
              className="inline-flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-700 cursor-pointer"
            >
              <span>Partner With RK Engineering</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
