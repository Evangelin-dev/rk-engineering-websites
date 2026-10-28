import React, { useState } from 'react';
import { UPLOADED_PRODUCT_IMAGES } from '../data/productImages.ts';
import { PROCESS_STEPS } from '../data/company.ts';
import { 
  CheckCircle, 
  Flame, 
  ShieldCheck, 
  ChevronRight, 
  Layers, 
  Truck 
} from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(2); // Default to Hot-Dip Galvanizing (03)

  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-red-600 mb-2 font-bold">
            Standard Operating Procedure · Quality Assurance
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Manufacturing Process: From Material Selection to Dispatch
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Our manufacturing process is organised around material verification, fabrication, galvanizing where applicable, quality checks, and packing. Every step is logged to ensure full heat-wise traceability.
          </p>
        </div>

        {/* Process Stepper Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-10">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3 rounded-lg border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-blue-900 border-blue-900 text-white shadow-md'
                    : 'bg-white border-slate-200 hover:border-blue-300 text-slate-600'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-red-400' : 'text-blue-900'}`}>
                    {step.number}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-red-400" />}
                </div>
                <div className={`text-xs font-semibold leading-tight line-clamp-2 ${isActive ? 'text-white' : 'text-slate-900'}`}>
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Showcase (Light Card) */}
        <div className="rounded-lg overflow-hidden border border-slate-200 bg-white grid grid-cols-1 lg:grid-cols-12 items-stretch shadow-sm">
          
          {/* Visual Side: Galvanizing & Plant Photo */}
          <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full">
            <img
              src={UPLOADED_PRODUCT_IMAGES['63']}
              alt="RK Engineering hot-dip galvanized steel product"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900/60 via-transparent to-transparent" />
            <div className="absolute top-4 left-4 p-2.5 rounded-md bg-blue-950/90 backdrop-blur-md border border-blue-800 text-xs font-mono text-white font-bold">
              In-House Zinc Kettle · 450°C
            </div>
          </div>

          {/* Details Side */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl font-bold font-mono text-red-600">
                  {activeStep.number}.
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {activeStep.title}
                </h3>
              </div>

              <div className="text-xs font-semibold text-blue-800 mb-4">
                {activeStep.shortDesc}
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {activeStep.details}
              </p>

              {/* QA Checks Checklist */}
              <div className="mt-6 pt-5 border-t border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block mb-3">
                  Key Quality Control Verifications:
                </span>
                <div className="space-y-2.5">
                  {activeStep.qaChecks.map((check, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-red-600 shrink-0" />
                      <span>{check}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stepper Navigation Buttons */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
              <button
                type="button"
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                className="px-3.5 py-1.5 rounded bg-slate-100 border border-slate-300 text-slate-700 hover:text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                &larr; Previous Stage
              </button>
              <span className="font-mono text-slate-500">
                Stage {activeStepIndex + 1} of {PROCESS_STEPS.length}
              </span>
              <button
                type="button"
                disabled={activeStepIndex === PROCESS_STEPS.length - 1}
                onClick={() => setActiveStepIndex((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                className="px-3.5 py-1.5 rounded bg-blue-700 text-white hover:bg-blue-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer font-medium"
              >
                Next Stage &rarr;
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
