import React from 'react';
import { ArrowRight } from 'lucide-react';
import exportImage from '../assets/images/global_export_shipping_1792669706316.jpg';

interface FinalCTAProps {
  onOpenRFQ: () => void;
  onExploreProducts: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenRFQ, onExploreProducts }) => {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-18 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-50 via-slate-50 to-red-50" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-xl bg-blue-950 text-white shadow-xl">
          <div className="grid md:grid-cols-5">
            <div className="min-h-56 md:col-span-2 md:min-h-64">
              <img
                src={exportImage}
                alt="Industrial products packed for international shipment"
                className="h-full min-h-56 w-full object-cover md:min-h-64"
              />
            </div>
            <div className="p-6 sm:p-9 md:col-span-3 lg:p-11">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-red-400">
                Manufacturing Partner For Global EPCs
              </p>

              <h2 className="text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
                Source Industrial Cable Trays and Galvanized Products from India
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-blue-100 sm:text-base">
                Whether you are procuring cable management systems, earthing materials, solar mounting structures, or galvanized steel products, RK Engineering welcomes enquiries from international industrial buyers and project teams. Share your specifications and destination details to discuss a suitable supply arrangement for your project.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={onOpenRFQ}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Request an Export Quote <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={onExploreProducts}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-blue-950 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Explore Products
                </button>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-blue-900 pt-5 font-mono text-xs text-blue-200">
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
        </div>
      </div>
    </section>
  );
};
