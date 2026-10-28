import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Droplet,
  Factory,
  Fuel,
  Pause,
  Play,
  Radio,
  Server,
  SunMedium,
  Train,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { INDUSTRIES } from '../data/company.ts';
import { UPLOADED_PRODUCT_IMAGES } from '../data/productImages.ts';

const SECTOR_ICONS: Record<string, LucideIcon> = {
  'power-generation': Zap,
  'renewable-energy': SunMedium,
  'oil-and-gas': Fuel,
  'petrochemical-manufacturing': Factory,
  telecommunications: Radio,
  'commercial-buildings': Building,
  'infrastructure-railways': Train,
  'data-centres': Server,
  'water-treatment': Droplet,
};

const SECTOR_IMAGES: Record<string, { src: string; alt: string }> = {
  'power-generation': {
    src: UPLOADED_PRODUCT_IMAGES['54'],
    alt: 'Galvanized cable tray and ladder products',
  },
  'renewable-energy': {
    src: UPLOADED_PRODUCT_IMAGES['64'],
    alt: 'Steel products for renewable energy infrastructure',
  },
  'oil-and-gas': {
    src: UPLOADED_PRODUCT_IMAGES['63'],
    alt: 'Steel products for oil and gas infrastructure',
  },
  'petrochemical-manufacturing': {
    src: UPLOADED_PRODUCT_IMAGES['63'],
    alt: 'Steel products for industrial infrastructure',
  },
  telecommunications: {
    src: UPLOADED_PRODUCT_IMAGES['55'],
    alt: 'Galvanized cable tray products',
  },
  'commercial-buildings': {
    src: UPLOADED_PRODUCT_IMAGES['58'],
    alt: 'Cable routing systems installed in an industrial facility',
  },
  'infrastructure-railways': {
    src: UPLOADED_PRODUCT_IMAGES['66'],
    alt: 'Fabricated steel components at a galvanizing facility',
  },
  'data-centres': {
    src: UPLOADED_PRODUCT_IMAGES['59'],
    alt: 'Cable routing systems installed in an industrial facility',
  },
  'water-treatment': {
    src: UPLOADED_PRODUCT_IMAGES['60'],
    alt: 'Galvanized cable tray products',
  },
};

export const IndustriesSection: React.FC = () => {
  const [activeSectorId, setActiveSectorId] = useState<string | null>(null);
  const [detailVisible, setDetailVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollTimerRef = useRef<number | undefined>(undefined);
  const detailFrameRef = useRef<number | undefined>(undefined);
  const selectedSector = INDUSTRIES.find((industry) => industry.id === activeSectorId);
  const ActiveIcon = selectedSector ? SECTOR_ICONS[selectedSector.id] ?? Zap : null;
  const lastIndex = Math.max(0, INDUSTRIES.length - visibleSlides);

  useEffect(() => {
    const updateVisibleSlides = () => {
      const width = window.innerWidth;
      setVisibleSlides(width >= 1280 ? 4 : width >= 1024 ? 3 : width >= 640 ? 2 : 1);
    };

    updateVisibleSlides();
    window.addEventListener('resize', updateVisibleSlides);
    return () => window.removeEventListener('resize', updateVisibleSlides);
  }, []);

  useEffect(
    () => () => {
      window.clearTimeout(scrollTimerRef.current);
      window.cancelAnimationFrame(detailFrameRef.current ?? 0);
    },
    [],
  );

  useEffect(() => {
    setCurrentIndex((index) => Math.min(index, lastIndex));
  }, [lastIndex]);

  useEffect(() => {
    const carousel = carouselRef.current;
    const target = carousel?.children[currentIndex] as HTMLElement | undefined;
    if (!carousel || !target) return;

    carousel.scrollTo({
      left:
        carousel.scrollLeft +
        target.getBoundingClientRect().left -
        carousel.getBoundingClientRect().left,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  }, [currentIndex]);

  useEffect(() => {
    if (!isPlaying || isHovered || isFocused || selectedSector) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = window.setInterval(() => {
      setCurrentIndex((index) => (index >= lastIndex ? 0 : index + 1));
    }, 5000);
    return () => window.clearInterval(timer);
  }, [isPlaying, isHovered, isFocused, selectedSector, lastIndex]);

  const handleCarouselScroll = () => {
    window.clearTimeout(scrollTimerRef.current);
    scrollTimerRef.current = window.setTimeout(() => {
      const carousel = carouselRef.current;
      if (!carousel) return;

      const slides = Array.from(carousel.children) as HTMLElement[];
      const nearestIndex = slides.reduce(
        (nearest, slide, index) => {
          const distance = Math.abs(
            slide.getBoundingClientRect().left - carousel.getBoundingClientRect().left,
          );
          return distance < nearest.distance ? { index, distance } : nearest;
        },
        { index: 0, distance: Number.POSITIVE_INFINITY },
      ).index;
      setCurrentIndex(nearestIndex);
    }, 150);
  };

  const moveCarousel = (direction: -1 | 1) => {
    setCurrentIndex((index) => {
      if (direction === 1) return index >= lastIndex ? 0 : index + 1;
      return index <= 0 ? lastIndex : index - 1;
    });
  };

  const toggleSectorDetails = (sectorId: string) => {
    window.cancelAnimationFrame(detailFrameRef.current ?? 0);
    if (sectorId === activeSectorId) {
      setDetailVisible(false);
      setActiveSectorId(null);
      return;
    }

    setDetailVisible(false);
    setActiveSectorId(sectorId);
    detailFrameRef.current = window.requestAnimationFrame(() => setDetailVisible(true));
  };

  return (
    <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-9 max-w-3xl sm:mb-11">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-red-600">
            Industries We Support
          </p>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Engineered for Demanding Industries
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            RK Engineering supplies cable management and galvanized steel solutions for a broad range of industrial and infrastructure applications. Explore how our product range supports your sector.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocusCapture={() => setIsFocused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsFocused(false);
          }}
        >
          <div
            ref={carouselRef}
            onScroll={handleCarouselScroll}
            role="region"
            aria-roledescription="carousel"
            aria-label="Industries we support"
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {INDUSTRIES.map((sector) => {
              const Icon = SECTOR_ICONS[sector.id] ?? Zap;
              const image = SECTOR_IMAGES[sector.id];
              const isActive = sector.id === activeSectorId;

              return (
                <button
                  key={sector.id}
                  type="button"
                  onClick={() => toggleSectorDetails(sector.id)}
                  aria-expanded={isActive}
                  aria-controls="industry-details"
                  aria-roledescription="slide"
                  aria-label={`${sector.name} industry`}
                  className={`group flex min-h-[286px] w-full shrink-0 basis-full snap-start flex-col overflow-hidden rounded-xl border bg-white text-left shadow-sm transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 motion-reduce:transform-none motion-reduce:transition-none sm:basis-[calc((100%-1rem)/2)] lg:basis-[calc((100%-2rem)/3)] xl:basis-[calc((100%-3rem)/4)] ${
                    isActive
                      ? 'border-red-500 ring-1 ring-red-500/20'
                      : 'border-slate-200 hover:border-blue-300'
                  }`}
                >
                  <div className="relative h-32 w-full shrink-0 overflow-hidden bg-blue-950">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
                    />
                    <span className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white text-red-600 shadow-sm">
                      <Icon aria-hidden="true" className="h-[18px] w-[18px]" />
                    </span>
                  </div>

                  <span className="flex flex-1 flex-col p-4 sm:p-5">
                    <span className="text-base font-bold leading-snug tracking-tight text-slate-900">
                      {sector.name}
                    </span>
                    <span className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">
                      {sector.tagline}
                    </span>
                    <span className="mt-auto flex items-center gap-2 pt-5 text-xs font-bold uppercase tracking-wide text-blue-900">
                      {isActive ? 'Close Details' : 'Explore Applications'}
                      <ArrowRight aria-hidden="true" className={`h-4 w-4 transition-transform motion-reduce:transition-none ${isActive ? '-rotate-45' : 'group-hover:translate-x-1 motion-reduce:transform-none'}`} />
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
          <div className="mt-5 flex items-center justify-between gap-4">
            <span className="text-xs font-semibold tabular-nums text-slate-500" aria-live="polite">
              {String(currentIndex + 1).padStart(2, '0')} / {String(INDUSTRIES.length).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => moveCarousel(-1)}
                aria-label="Previous industries"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 bg-white text-blue-950 transition-[color,background-color,border-color,transform] duration-200 hover:border-blue-300 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 active:scale-95 motion-reduce:transition-none motion-reduce:active:scale-100"
              >
                <ChevronLeft aria-hidden="true" className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setIsPlaying((playing) => !playing)}
                aria-label={isPlaying ? 'Pause automatic carousel' : 'Play automatic carousel'}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 bg-white text-blue-950 transition-[color,background-color,border-color,transform] duration-200 hover:border-blue-300 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 active:scale-95 motion-reduce:transition-none motion-reduce:active:scale-100"
              >
                {isPlaying ? <Pause aria-hidden="true" className="h-4 w-4" /> : <Play aria-hidden="true" className="h-4 w-4" />}
              </button>
              <button
                type="button"
                onClick={() => moveCarousel(1)}
                aria-label="Next industries"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 bg-white text-blue-950 transition-[color,background-color,border-color,transform] duration-200 hover:border-blue-300 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 active:scale-95 motion-reduce:transition-none motion-reduce:active:scale-100"
              >
                <ChevronRight aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div
          id="industry-details"
          aria-live="polite"
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
            selectedSector ? 'mt-6 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            {selectedSector && ActiveIcon && (
              <article className={`rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-none sm:p-7 lg:p-8 ${
                detailVisible ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'
              }`}>
                <div className="flex items-start gap-4 border-b border-slate-200 pb-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-600 text-white">
                    <ActiveIcon aria-hidden="true" className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-600">
                      Application Profile
                    </p>
                    <h3 className="mt-1 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                      {selectedSector.name}
                    </h3>
                  </div>
                </div>

                <p className="mt-5 max-w-4xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  {selectedSector.description}
                </p>

                <div className="mt-6">
                  <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-900">
                    Relevant product solutions
                  </h4>
                  <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                    {selectedSector.solutions.map((solution) => (
                      <li key={solution} className="flex items-start gap-2.5 rounded-lg border border-slate-200 bg-slate-50 p-3">
                        <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                        <span className="text-sm leading-snug text-slate-700">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-slate-600">
                    Need a project-specific solution for this application?
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-md bg-blue-950 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950 sm:self-auto"
                  >
                    Discuss Your Requirements
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
