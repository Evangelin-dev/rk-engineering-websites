import React from 'react';
import { ArrowRight, ShieldCheck, Mail, Phone } from 'lucide-react';

interface FinalCTAProps {
  onOpenRFQ: () => void;
  onExploreProducts: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenRFQ, onExploreProducts }) => {
  return (
    <section className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Decorative ambient subtle wash */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-slate-50 to-red-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 lg:p-16 rounded-xl bg-blue-950 text-white border border-blue-900 shadow-xl text-center max-w-4xl mx-auto">
          
          <div className="text-xs font-semibold tracking-wider uppercase text-red-400 mb-3 font-bold">
            Manufacturing Partner For Global EPCs
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight text-balance">
            Source Industrial Cable Trays and Galvanized Products from India
          </h2>

          <p className="mt-4 text-sm sm:text-base text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Whether you are procuring cable management systems, earthing materials, solar mounting structures, or galvanized steel products, RK Engineering welcomes enquiries from international industrial buyers and project teams. Share your specifications and destination details to discuss a suitable supply arrangement for your project.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenRFQ}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-[color,background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:translate-y-0 active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none"
            >
              <span>Request an Export Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreProducts}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-xs font-semibold font-bold uppercase tracking-wider text-blue-950 shadow-sm transition-[color,background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none"
            >
              <span>Explore Products</span>
            </button>
          </div>

          <div className="mt-10 pt-6 border-t border-blue-900 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-blue-200 font-mono">
            <span>info@rkenggindia.com</span>
            <span aria-hidden="true" className="text-blue-400">·</span>
            <span>+91 84220 44452</span>
            <span aria-hidden="true" className="text-blue-400">·</span>
            <span>12,000 MT Cable Tray Cap</span>
            <span aria-hidden="true" className="text-blue-400">·</span>
            <span>24,000 MT HDG Cap</span>
          </div>

        </div>
      </div>
    </section>
  );
};
