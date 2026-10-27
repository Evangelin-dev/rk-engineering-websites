import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FinalCTA } from '../components/FinalCTA.tsx';
import { Highlights } from '../components/Highlights.tsx';
import { Hero } from '../components/Hero.tsx';
import { IndustriesSection } from '../components/IndustriesSection.tsx';
import { FAQSection } from '../components/FAQSection.tsx';
import { PRODUCTS } from '../data/products.ts';
import cableTrayImage from '../assets/images/products_cable_trays_1792669705857.jpg';
import fabricationImage from '../assets/images/hero_cable_tray_plant_1792669704557.jpg';
import galvanizingImage from '../assets/images/galvanizing_facility_1792669705362.jpg';

interface HomePageProps {
  onOpenRFQ: () => void;
  onExploreProducts: () => void;
}

const PROCESS_STEPS = [
  {
    title: 'Requirement Review',
    detail: 'We review the requested product, technical specifications, drawings, quantities, and expected schedule.',
  },
  {
    title: 'Material and Specification Confirmation',
    detail: 'Applicable material grades, dimensions, fabrication details, and coating requirements are identified according to approved documentation.',
  },
  {
    title: 'Manufacturing and Fabrication',
    detail: 'Products are manufactured according to the agreed scope and confirmed production requirements.',
  },
  {
    title: 'Hot-Dip Galvanizing',
    detail: 'Applicable products undergo galvanizing according to the confirmed process and coating specifications.',
  },
  {
    title: 'Quality Checks',
    detail: 'Required dimensional, coating, and other inspection activities are performed according to agreed quality requirements.',
  },
  {
    title: 'Packing and Dispatch Coordination',
    detail: 'Packing, product identification, documentation, and shipping arrangements are coordinated according to the order and destination requirements.',
  },
] as const;

const CABLE_TRAY_CTA_CARDS = [
  {
    label: 'Industrial projects',
    region: 'Africa',
    title: 'Cable Tray Solutions for African Projects',
    description:
      'Explore cable tray types, industrial applications, galvanizing capabilities, manufacturing capacity, and the export enquiry process.',
    action: 'Explore Industrial Solutions',
    path: '/cable-tray-manufacturer-africa',
  },
  {
    label: 'Importers & distributors',
    region: 'Africa',
    title: 'Cable Tray Exporter from India to Africa',
    description:
      'Review bulk order requirements, destination information, quotation requirements, and how to enquire about importing cable trays from India.',
    action: 'Explore Export Options',
    path: '/cable-tray-exporter-india-africa',
  },
  {
    label: 'Corrosion protection',
    region: 'Africa',
    title: 'Hot Dip Galvanized Cable Trays',
    description:
      'Review coating considerations, industrial applications, buyer requirements, and galvanized tray export enquiries.',
    action: 'Explore Galvanized Solutions',
    path: '/hot-dip-galvanized-cable-tray-africa',
  },
  {
    label: 'Industrial cable management',
    region: 'Africa',
    title: 'Perforated Cable Trays',
    description:
      'Explore perforated tray applications, selection considerations, and project-based requirements for African markets.',
    action: 'Explore Perforated Trays',
    path: '/perforated-cable-tray-manufacturer-africa',
  },
  {
    label: 'Power infrastructure',
    region: 'Africa',
    title: 'Ladder Cable Trays for Power Projects',
    description:
      'Review ladder tray applications, engineering considerations, and quotation information for power projects.',
    action: 'Explore Ladder Trays',
    path: '/ladder-cable-tray-supplier-africa',
  },
  {
    label: 'Oil & gas',
    region: 'Africa',
    title: 'Oil & Gas Cable Tray Solutions — Africa',
    description:
      'Review cable management applications for refineries, petrochemical facilities, terminals, pipelines, and coastal sites.',
    action: 'Explore Oil & Gas Solutions',
    path: '/cable-tray-oil-gas-projects-africa',
  },
  {
    label: 'Power & energy',
    region: 'Africa',
    title: 'Power & Energy Cable Tray Solutions — Africa',
    description:
      'Explore tray categories and requirements for power generation, substations, transmission, distribution, and renewables.',
    action: 'Explore Power Solutions',
    path: '/cable-tray-power-energy-projects-africa',
  },
  {
    label: 'Industrial projects',
    region: 'United States',
    title: 'Industrial Cable Tray Manufacturer — USA',
    description:
      'Review product categories, sourcing from India, technical requirements, packaging, and US buyer enquiries.',
    action: 'Explore US Industrial Solutions',
    path: '/cable-tray-manufacturer-usa',
  },
  {
    label: 'Importers',
    region: 'United States',
    title: 'Cable Tray Exporter from India to the USA',
    description:
      'Explore US import considerations, export documents, packaging, shipping terms, and cable tray quotation details.',
    action: 'Explore Export Options',
    path: '/cable-tray-exporter-india-usa',
  },
  {
    label: 'Galvanized products',
    region: 'United States',
    title: 'Hot Dip Galvanized Cable Trays — USA',
    description:
      'Review galvanized tray types, industrial applications, coating specifications, and US compliance confirmation.',
    action: 'Explore Galvanized Solutions',
    path: '/hot-dip-galvanized-cable-tray-usa',
  },
] as const;

type CtaRegionFilter = 'All' | (typeof CABLE_TRAY_CTA_CARDS)[number]['region'];

interface TimelineLine {
  horizontal: boolean;
  left: number;
  top: number;
  length: number;
  progress: number;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenRFQ, onExploreProducts }) => {
  const pageRef = useRef<HTMLDivElement>(null);
  const productsSectionRef = useRef<HTMLElement>(null);
  const [productsVisible, setProductsVisible] = useState(
    () =>
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window),
  );
  const [activeProcessStep, setActiveProcessStep] = useState<number | null>(null);
  const [ctaRegionFilter, setCtaRegionFilter] = useState<CtaRegionFilter>('All');
  const [timelineLine, setTimelineLine] = useState<TimelineLine>({
    horizontal: false,
    left: 0,
    top: 0,
    length: 0,
    progress: 0,
  });
  const processTimelineRef = useRef<HTMLDivElement>(null);
  const processStepRefs = useRef<Array<HTMLLIElement | null>>([]);
  const processDotRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useLayoutEffect(() => {
    const page = pageRef.current;
    if (!page || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      return;
    }

    const sections = page.querySelectorAll<HTMLElement>('section:not(.hero-viewport)');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.remove('opacity-0', 'translate-y-4');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -24px 0px' },
    );

    sections.forEach((section) => {
      section.classList.add(
        'transform',
        'transition-[opacity,transform]',
        'duration-700',
        'ease-[cubic-bezier(0.22,1,0.36,1)]',
        'opacity-0',
        'translate-y-4',
      );
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = productsSectionRef.current;
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setProductsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setProductsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.15 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const timeline = processTimelineRef.current;
    if (!timeline) return;

    const updateTimelineLine = () => {
      const timelineBounds = timeline.getBoundingClientRect();
      const dots = processDotRefs.current.map((dot) => dot?.getBoundingClientRect());
      const firstDot = dots[0];
      const lastDot = dots[PROCESS_STEPS.length - 1];
      const activeDot = dots[activeProcessStep ?? 0];
      if (!firstDot || !lastDot || !activeDot) return;

      const horizontal = window.matchMedia('(min-width: 1024px)').matches;
      const center = (rect: DOMRect) => ({
        x: rect.left + rect.width / 2 - timelineBounds.left,
        y: rect.top + rect.height / 2 - timelineBounds.top,
      });
      const firstCenter = center(firstDot);
      const lastCenter = center(lastDot);
      const activeCenter = center(activeDot);
      const start = horizontal ? firstCenter.x : firstCenter.y;
      const end = horizontal ? lastCenter.x : lastCenter.y;
      const activeEnd = horizontal ? activeCenter.x : activeCenter.y;

      setTimelineLine({
        horizontal,
        left: firstCenter.x,
        top: firstCenter.y,
        length: Math.abs(end - start),
        progress: activeProcessStep === null ? 0 : Math.abs(activeEnd - start),
      });
    };

    updateTimelineLine();
    const resizeObserver = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(updateTimelineLine);
    resizeObserver?.observe(timeline);
    processStepRefs.current.forEach((step) => {
      if (step) resizeObserver?.observe(step);
    });
    window.addEventListener('resize', updateTimelineLine);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener('resize', updateTimelineLine);
    };
  }, [activeProcessStep]);

  const productImages = [cableTrayImage, fabricationImage, galvanizingImage];
  const productImageAlts = [
    'Hot-dip galvanized perforated cable tray products',
    'Industrial cable tray manufacturing and fabrication facility',
    'Steel components at a hot-dip galvanizing facility',
  ];

  return (
    <div ref={pageRef}>
      <Hero onOpenRFQ={onOpenRFQ} onExploreProducts={onExploreProducts} />
      <Highlights />
      <section className="overflow-hidden border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-9 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div className="relative">
            <img
              src={fabricationImage}
              alt="RK Engineering industrial steel manufacturing facility"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg"
            />
            <div className="absolute -bottom-4 right-4 rounded-lg border border-white/20 bg-blue-950 px-5 py-4 text-white shadow-xl sm:right-6">
              <span className="block text-xs font-medium text-blue-100">Manufacturing experience</span>
              <span className="mt-1 block text-2xl font-extrabold">Since 2000</span>
            </div>
          </div>
          <div className="pt-2 lg:py-4">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.17em] text-red-600">About RK Engineering</p>
            <h2 className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              An Indian Manufacturing Partner for Industrial Projects
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Established in 2000, RK Engineering manufactures cable tray systems and supplies galvanized steel products for electrical installations, industrial facilities, infrastructure development, and renewable energy applications.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Our product range includes perforated and ladder cable trays, raceway systems, cable tray ducts, earthing materials, solar mounting structures, and other hot-dip galvanized steel products. In-house galvanizing supports surface treatment of suitable steel components.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <span className="text-lg font-extrabold text-blue-950">12,000 MT</span>
                <p className="mt-1 text-sm text-slate-600">Stated annual cable tray capacity</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <span className="text-lg font-extrabold text-blue-950">24,000 MT</span>
                <p className="mt-1 text-sm text-slate-600">Stated annual galvanizing capacity</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Enquiries are assessed against customer drawings, material and coating requirements, quantities, applicable standards, destination, and expected delivery schedule.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-blue-950 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
              >
                Learn About Us
              </Link>
              <button
                type="button"
                onClick={onOpenRFQ}
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition-colors hover:border-red-300 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
              >
                Discuss a Project
              </button>
            </div>
          </div>
        </div>
      </section>
      <section ref={productsSectionRef} className="border-b border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-red-600">Product Range</p>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Industrial Products</h2>
            </div>
            <Link to="/products" className="text-sm font-semibold text-blue-800 transition-colors hover:text-red-600">
              Explore all products &rarr;
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.slice(0, 3).map((product, index) => (
              <Link
                key={product.id}
                to="/products"
                className={`group overflow-hidden rounded-lg border border-slate-200 bg-slate-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 motion-reduce:transform-none motion-reduce:transition-none ${
                  productsVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                }`}
                style={{ transitionDelay: productsVisible ? `${index * 100}ms` : '0ms' }}
              >
                <div className="overflow-hidden">
                  <img
                    src={productImages[index]}
                    alt={productImageAlts[index]}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-900">{product.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{product.description}</p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-blue-800">
                    View products <span aria-hidden="true" className="ml-1 transition-transform group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none">&rarr;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="border-b border-slate-200 bg-slate-50 py-14 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-6 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600">Cable Tray Enquiries</p>
              <h2 className="text-balance text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                Cable Tray Export &amp; Industrial Solutions
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Find project and sourcing information by market. Select a guide to review products, requirements, and enquiry details.
              </p>
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter cable tray guides by market">
              {(['All', 'Africa', 'United States'] as const).map((region) => {
                const count = region === 'All'
                  ? CABLE_TRAY_CTA_CARDS.length
                  : CABLE_TRAY_CTA_CARDS.filter((card) => card.region === region).length;
                const isSelected = ctaRegionFilter === region;
                return (
                  <button
                    key={region}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setCtaRegionFilter(region)}
                    className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 ${
                      isSelected
                        ? 'border-blue-950 bg-blue-950 text-white'
                        : 'border-slate-300 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-950'
                    }`}
                  >
                    {region === 'All' ? 'All guides' : region}
                    <span className={`rounded-full px-2 py-0.5 text-xs ${isSelected ? 'bg-white/15 text-white' : 'bg-slate-100 text-slate-600'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          <p className="sr-only" aria-live="polite">
            Showing {ctaRegionFilter === 'All' ? CABLE_TRAY_CTA_CARDS.length : CABLE_TRAY_CTA_CARDS.filter((card) => card.region === ctaRegionFilter).length}
            {' '}cable tray {ctaRegionFilter === 'All' ? 'guides' : `guides for ${ctaRegionFilter}`}.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3" aria-label="Cable tray solution guides">
            {CABLE_TRAY_CTA_CARDS
              .filter((card) => ctaRegionFilter === 'All' || card.region === ctaRegionFilter)
              .map((card) => (
                <Link
                  key={card.path}
                  to={card.path}
                  className="group flex min-h-full flex-col rounded-xl border border-slate-200 border-t-4 border-t-blue-950 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:border-t-red-600 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 motion-reduce:transform-none motion-reduce:transition-none sm:p-6"
                  aria-label={`${card.action}: ${card.title}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-bold uppercase tracking-[0.13em] text-blue-900">{card.label}</span>
                    <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                      {card.region}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-extrabold leading-snug tracking-tight text-slate-900 transition-colors group-hover:text-blue-900 sm:text-xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{card.description}</p>
                  <span className="mt-6 inline-flex min-h-11 w-full items-center justify-between gap-3 rounded-lg bg-blue-950 px-4 py-3 text-sm font-bold text-white transition-colors group-hover:bg-red-600">
                    <span>{card.action}</span>
                    <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
      <IndustriesSection />
      <section className="border-b border-slate-200 bg-white py-14 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 max-w-3xl">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600">Manufacturing and Supply Process</p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              From Requirement Review to Dispatch Coordination
            </h2>
          </div>
          <div
            ref={processTimelineRef}
            className="relative"
            onPointerLeave={(event) => {
              if (event.pointerType !== 'touch') setActiveProcessStep(null);
            }}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setActiveProcessStep(null);
              }
            }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute z-0 rounded-full bg-slate-200"
              style={{
                left: timelineLine.left,
                top: timelineLine.top,
                width: timelineLine.horizontal ? timelineLine.length : 2,
                height: timelineLine.horizontal ? 2 : timelineLine.length,
                transform: timelineLine.horizontal
                  ? `translateY(-50%) scaleX(${timelineLine.length ? timelineLine.progress / timelineLine.length : 0})`
                  : `translateX(-50%) scaleY(${timelineLine.length ? timelineLine.progress / timelineLine.length : 0})`,
                transformOrigin: timelineLine.horizontal ? 'left center' : 'center top',
              }}
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute z-0 rounded-full bg-red-600 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
              style={{
                left: timelineLine.left,
                top: timelineLine.top,
                width: timelineLine.horizontal ? timelineLine.length : 2,
                height: timelineLine.horizontal ? 2 : timelineLine.length,
                transform: timelineLine.horizontal
                  ? `translateY(-50%) scaleX(${timelineLine.length ? timelineLine.progress / timelineLine.length : 0})`
                  : `translateX(-50%) scaleY(${timelineLine.length ? timelineLine.progress / timelineLine.length : 0})`,
                transformOrigin: timelineLine.horizontal ? 'left center' : 'center top',
              }}
            />
            <ol className="relative grid gap-0 pl-1 lg:grid-cols-6">
              {PROCESS_STEPS.map((step, index) => {
                const isActive = activeProcessStep === index;
                const isPrevious = activeProcessStep !== null && index < activeProcessStep;

                return (
                  <li
                    key={step.title}
                    ref={(element) => {
                      processStepRefs.current[index] = element;
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Step ${index + 1}: ${step.title}`}
                    aria-pressed={isActive}
                    onPointerEnter={(event) => {
                      if (event.pointerType !== 'touch') setActiveProcessStep(index);
                    }}
                    onFocus={() => setActiveProcessStep(index)}
                    onClick={() => setActiveProcessStep(index)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        setActiveProcessStep(index);
                      }
                    }}
                    className="relative z-10 cursor-pointer border-l border-transparent pb-7 pl-6 last:pb-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 lg:border-l-0 lg:border-t lg:pb-0 lg:pl-0 lg:pr-4 lg:pt-6"
                  >
                    <span
                      ref={(element) => {
                        processDotRefs.current[index] = element;
                      }}
                      className={`absolute -left-[5px] top-0 z-10 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-red-600 text-[0px] ring-4 ring-white transition-[transform,box-shadow,background-color] duration-300 ease-out motion-reduce:scale-100 motion-reduce:transition-none lg:-top-[5px] lg:left-1/2 lg:-translate-x-1/2 ${
                        isActive
                          ? 'scale-[1.3] bg-red-700 shadow-[0_0_0_5px_rgba(220,38,38,0.16)]'
                          : isPrevious
                            ? 'scale-110 bg-red-700 shadow-[0_0_0_3px_rgba(220,38,38,0.12)]'
                            : ''
                      }`}
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    <span className="font-mono text-xs font-bold text-red-600">0{index + 1}</span>
                    <h3 className={`mt-2 text-sm font-bold leading-snug transition-colors duration-200 motion-reduce:transition-none ${
                      isActive ? 'text-red-700' : 'text-slate-900'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {step.detail}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
          <p className="mt-6 border-t border-slate-100 pt-4 text-sm leading-relaxed text-slate-600">
            The actual process, inspection scope, and delivery schedule are confirmed for each order.
          </p>
        </div>
      </section>
      <FAQSection />
      <FinalCTA onOpenRFQ={onOpenRFQ} onExploreProducts={onExploreProducts} />
    </div>
  );
};
