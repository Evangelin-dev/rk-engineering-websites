import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/images/hero_cable_tray_plant_1792669704557.jpg';

interface HeroProps {
  onOpenRFQ: () => void;
  onExploreProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRFQ, onExploreProducts }) => {
  const [videoUnavailable, setVideoUnavailable] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setPrefersReducedMotion(motionPreference.matches);

    updateMotionPreference();
    motionPreference.addEventListener('change', updateMotionPreference);
    return () => motionPreference.removeEventListener('change', updateMotionPreference);
  }, []);

  return (
    <section className="hero-viewport relative isolate flex flex-col overflow-hidden bg-blue-950 text-white">
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />

      {!videoUnavailable && !prefersReducedMotion && (
        <video
          src="/videos/industrial-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          onError={() => setVideoUnavailable(true)}
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
        />
      )}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-blue-950/95 via-blue-950/80 to-slate-950/45"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-slate-950/65 via-transparent to-blue-950/20"
      />

      <div className="relative z-[2] mx-auto flex w-[calc(100%-48px)] max-w-[1200px] flex-1 flex-col justify-between py-6 sm:py-14 lg:py-16">
        <div className="my-auto w-full max-w-[900px] py-4 sm:py-8">
          <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.2em] text-red-400 sm:mb-6 sm:text-sm">
            ESTABLISHED 2000 <span className="px-1.5">·</span> INDIA
          </p>

          <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
            Industrial Cable Tray Manufacturer &amp;{' '}
            <span className="text-red-500">Exporter from India</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg font-medium leading-relaxed text-white sm:mt-7 sm:text-xl">
            Reliable cable management, earthing materials, solar mounting structures and galvanized
            steel solutions for global industrial projects.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <button
              onClick={onOpenRFQ}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-red-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-[0.98] sm:min-h-14"
            >
              <span>REQUEST AN EXPORT QUOTE</span>
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>

            <button
              onClick={onExploreProducts}
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/60 bg-white/10 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:min-h-14"
            >
              EXPLORE OUR PRODUCTS
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 border-t border-white/30 pt-5 sm:grid-cols-3 sm:gap-0 sm:pt-6">
          <div className="flex flex-col gap-1 sm:pr-6">
            <span className="text-lg font-extrabold leading-tight text-white sm:text-xl">12,000 MT</span>
            <span className="text-xs font-semibold leading-snug text-white/85 sm:text-sm">Cable Tray Capacity</span>
          </div>
          <div className="flex flex-col gap-1 sm:border-l sm:border-white/30 sm:px-6">
            <span className="text-lg font-extrabold leading-tight text-white sm:text-xl">24,000 MT</span>
            <span className="text-xs font-semibold leading-snug text-white/85 sm:text-sm">Galvanizing Capacity</span>
          </div>
          <div className="flex flex-col gap-1 sm:border-l sm:border-white/30 sm:pl-6">
            <span className="text-lg font-extrabold leading-tight text-white sm:text-xl">Established in 2000</span>
          </div>
        </div>
      </div>
    </section>
  );
};
