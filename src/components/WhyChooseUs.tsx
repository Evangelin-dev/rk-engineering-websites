import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import {
  Factory,
  ShieldCheck,
  FileCheck2,
  Scale,
  Microscope,
  PlaneTakeoff,
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/company.ts';

const ICONS = [Factory, ShieldCheck, FileCheck2, Scale, Microscope, PlaneTakeoff];
const AUTOPLAY_INTERVAL = 4000;

export const WhyChooseUs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1024px)');
    const tabletQuery = window.matchMedia('(min-width: 768px)');
    const updateVisibleSlides = () => {
      setVisibleSlides(desktopQuery.matches ? 3 : tabletQuery.matches ? 2 : 1);
    };

    updateVisibleSlides();
    desktopQuery.addEventListener('change', updateVisibleSlides);
    tabletQuery.addEventListener('change', updateVisibleSlides);
    window.addEventListener('resize', updateVisibleSlides);
    return () => {
      desktopQuery.removeEventListener('change', updateVisibleSlides);
      tabletQuery.removeEventListener('change', updateVisibleSlides);
      window.removeEventListener('resize', updateVisibleSlides);
    };
  }, []);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setPrefersReducedMotion(motionQuery.matches);

    updateMotionPreference();
    motionQuery.addEventListener('change', updateMotionPreference);
    return () => motionQuery.removeEventListener('change', updateMotionPreference);
  }, []);

  const lastPageIndex = Math.max(0, WHY_CHOOSE_US.length - visibleSlides);

  useEffect(() => {
    setActiveIndex((index) => Math.min(index, lastPageIndex));
  }, [lastPageIndex]);

  useEffect(() => {
    if (prefersReducedMotion || isHovered || isFocused || WHY_CHOOSE_US.length <= visibleSlides) return;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index >= lastPageIndex ? 0 : index + 1));
    }, AUTOPLAY_INTERVAL);

    return () => window.clearInterval(timer);
  }, [isFocused, isHovered, lastPageIndex, prefersReducedMotion, visibleSlides]);

  const goToPrevious = () => {
    setActiveIndex((index) => (index <= 0 ? lastPageIndex : index - 1));
  };

  const goToNext = () => {
    setActiveIndex((index) => (index >= lastPageIndex ? 0 : index + 1));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goToPrevious();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      goToNext();
    }
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null) return;

    const touchDistance = touchStartX.current - event.changedTouches[0].clientX;
    if (Math.abs(touchDistance) > 50) {
      if (touchDistance > 0) goToNext();
      else goToPrevious();
    }
    touchStartX.current = null;
  };

  return (
    <section className="border-b border-slate-200 bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <div className="mb-2 text-xs font-bold uppercase tracking-wider text-red-600">
              Competitive Edge · Operational Reliability
            </div>
            <h2 className="text-balance text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Why Choose RK Engineering?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Manufacturing Capabilities Built Around Industrial Requirements. From raw coil slit
              verification to precision CNC punching and in-house galvanizing, every stage is
              optimized for international EPC expectations.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Show previous capabilities"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-blue-900 shadow-sm transition-colors hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Show next capabilities"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-blue-900 shadow-sm transition-colors hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Why choose RK Engineering capabilities"
          tabIndex={0}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsFocused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setIsFocused(false);
            }
          }}
          onKeyDown={handleKeyDown}
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0].clientX;
          }}
          onTouchEnd={handleTouchEnd}
          className="overflow-hidden outline-none focus-visible:rounded-lg focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-50"
        >
          <div
            className={`grid ${
              prefersReducedMotion ? '' : 'transition-transform duration-500 ease-out'
            }`}
            style={{
              width: `${(WHY_CHOOSE_US.length / visibleSlides) * 100}%`,
              transform: `translateX(-${(activeIndex * 100) / WHY_CHOOSE_US.length}%)`,
              gridTemplateColumns: `repeat(${WHY_CHOOSE_US.length}, minmax(0, 1fr))`,
            }}
          >
            {WHY_CHOOSE_US.map((pillar, index) => {
              const Icon = ICONS[index % ICONS.length];
              return (
                <div
                  key={pillar.title}
                  className="min-w-0 px-2 pb-2"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Pillar ${index + 1} of ${WHY_CHOOSE_US.length}: ${pillar.title}`}
                >
                  <article className="group grid h-full min-h-[420px] grid-rows-[auto_auto_1fr_auto] rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-blue-300 hover:shadow-md sm:min-h-[400px] sm:p-6">
                    <div className="mb-5 flex items-center gap-3">
                      <span className="rounded-md border border-blue-100 bg-blue-50 p-2.5 text-blue-700 transition-colors group-hover:border-red-100 group-hover:bg-red-50 group-hover:text-red-600">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-bold text-slate-500">
                        Pillar {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold leading-snug tracking-tight text-slate-900">
                      {pillar.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {pillar.description}
                    </p>

                    <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                      {pillar.points.map((point) => (
                        <div key={point} className="flex items-start gap-2 text-xs leading-relaxed text-slate-700">
                          <Check aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-600" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2" aria-label="Choose a capability slide">
          {Array.from({ length: lastPageIndex + 1 }, (_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to capability slide ${index + 1} of ${lastPageIndex + 1}`}
              aria-current={activeIndex === index ? 'true' : undefined}
              className={`h-2.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${
                activeIndex === index ? 'w-7 bg-red-600' : 'w-2.5 bg-slate-300 hover:bg-blue-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
