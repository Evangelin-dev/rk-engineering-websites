import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  Box,
  Cable,
  Check,
  ClipboardCheck,
  Factory,
  Globe2,
  Layers3,
  ShieldCheck,
  SunMedium,
  TowerControl,
} from 'lucide-react';
import cableTrayImage from '../assets/images/products_cable_trays_1792669705857.jpg';
import exportImage from '../assets/images/global_export_shipping_1792669706316.jpg';
import galvanizingImage from '../assets/images/galvanizing_facility_1792669705362.jpg';
import heroImage from '../assets/images/hero_cable_tray_plant_1792669704557.jpg';

interface ServicesPageProps {
  onOpenRFQ: () => void;
}

const APPLICATIONS = [
  {
    title: 'Hot-Dip Galvanized Cable Trays',
    description: 'Corrosion-protected cable management for suitable electrical installations, industrial facilities, and infrastructure projects.',
    Icon: Cable,
  },
  {
    title: 'Ladder Cable Trays',
    description: 'Cable routing for suitable heavy-duty industrial and outdoor applications. Selection depends on cable loads, installation conditions, and project specifications.',
    Icon: Layers3,
  },
  {
    title: 'GI Earthing Strips and Products',
    description: 'Galvanized earthing strips and related products for specified electrical earthing applications.',
    Icon: TowerControl,
  },
  {
    title: 'Structural Steel Components',
    description: 'Suitable fabricated steel components galvanized for industrial, construction, and infrastructure applications.',
    Icon: Factory,
  },
  {
    title: 'Solar Mounting Components',
    description: 'Galvanized steel components for solar mounting applications where coating requirements and environmental conditions are suitable.',
    Icon: SunMedium,
  },
  {
    title: 'OEM Hot-Dip Galvanizing',
    description: 'Enquiries for suitable OEM steel parts and fabricated components, assessed by material, dimensions, design, quantity, and processing requirements.',
    Icon: Box,
  },
];

const BENEFITS = [
  {
    title: 'Corrosion resistance',
    description: 'A zinc coating helps protect steel from rust and corrosion caused by moisture and the surrounding environment.',
  },
  {
    title: 'Durable protection',
    description: 'The metallurgically bonded coating can provide durable protection when components are correctly designed, prepared, and galvanized.',
  },
  {
    title: 'Reduced maintenance',
    description: 'Depending on operating conditions, hot-dip galvanizing can reduce frequent repainting and corrosion-related maintenance.',
  },
  {
    title: 'Coverage on accessible surfaces',
    description: 'Accessible edges and recesses can be coated when component design, venting, drainage, and processing are appropriate.',
  },
];

const PROCESS_STEPS = [
  {
    title: 'Requirement Assessment',
    description: 'Review component type, material, dimensions, quantity, application, and required coating specification.',
  },
  {
    title: 'Surface Preparation',
    description: 'Prepare the steel surface using the appropriate stages for the component and process.',
  },
  {
    title: 'Hot-Dip Galvanizing',
    description: 'Process suitable components according to the agreed requirements and applicable specification.',
  },
  {
    title: 'Inspection',
    description: 'Carry out agreed checks for coating thickness, appearance, coverage, and acceptance criteria.',
  },
  {
    title: 'Packing and Dispatch',
    description: 'Confirm packaging, handling, documentation, and delivery arrangements for the order and destination.',
  },
];

const QUALITY_CHECKS = [
  'Review of material and component requirements',
  'Surface preparation checks',
  'Zinc coating thickness measurement',
  'Visual inspection of coating coverage and finish',
  'Identification of defects requiring correction',
  'Final verification against the agreed specification',
];

const ENQUIRY_STEPS = [
  'Share component details, drawings, material grade, dimensions, quantity, and destination.',
  'Review galvanizing suitability, coating requirements, standards, and project conditions.',
  'Discuss pricing, estimated turnaround, packaging, and delivery arrangements.',
  'Agree inspection criteria and documentation before processing and dispatch.',
  'Confirm shipping terms, export documentation, logistics, and expected delivery schedule.',
];

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenRFQ }) => (
  <>
    <section className="relative isolate overflow-hidden bg-blue-950 text-white">
      <div className="absolute inset-0 -z-10">
        <img src={heroImage} alt="" className="h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/95 to-blue-950/55" />
      </div>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:px-8 lg:py-24">
        <div className="max-w-3xl lg:col-span-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-red-400">Industrial Services</p>
          <h1 className="text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Industrial Hot-Dip Galvanizing Services for Long-Lasting Steel Protection
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
            Protect suitable steel components with galvanizing services from RK Engineering &amp; Galvanizers Pvt. Ltd. Requirements can include mild steel components, cable tray systems, structural steel, earthing products, and suitable OEM-fabricated parts.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-blue-100/90 sm:text-base">
            We welcome enquiries from manufacturers, EPC contractors, fabricators, importers, distributors, and project procurement teams in India and international markets.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onOpenRFQ}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Request a Quote <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>
            <a
              href="#service-applications"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/35 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explore Services <ArrowDown aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="hidden lg:col-span-4 lg:block">
          <div className="rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
            <p className="text-sm font-semibold text-blue-100">Requirements assessed for each order</p>
            <ul className="mt-5 space-y-3">
              {['Material and component dimensions', 'Coating requirements and applicable standards', 'Quantity, inspection, and destination'].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white">
                  <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="border-b border-slate-200 bg-white py-14 sm:py-18 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-9 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div className="overflow-hidden rounded-lg border border-slate-200 shadow-sm">
          <img src={galvanizingImage} alt="Steel components at an industrial hot-dip galvanizing facility" className="aspect-[4/3] w-full object-cover" />
        </div>
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600">About Our Hot-Dip Galvanizing Services</p>
          <h2 className="text-balance text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Built for Industrial Applications. Designed for Durability.</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Hot-dip galvanizing involves preparing steel components and immersing them in molten zinc to form a protective coating. It helps reduce corrosion and can extend service life, depending on exposure and coating specifications.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Requirements are reviewed against material specifications, component dimensions, coating requirements, order quantity, and project conditions. The process and technical acceptance criteria are confirmed for each order.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Cable tray systems', 'Structural steel', 'Earthing products', 'Suitable OEM components'].map((item) => (
              <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section id="service-applications" className="scroll-mt-24 border-b border-slate-200 bg-slate-50 py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-3xl">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600">Service Applications</p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Galvanizing for Steel Products and Components</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Suitability is assessed based on component material, dimensions, design, processing requirements, and intended application.
            </p>
          </div>
          <button type="button" onClick={onOpenRFQ} className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-md border border-blue-950 px-4 py-2.5 text-sm font-bold text-blue-950 transition-colors hover:bg-blue-950 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950 sm:self-auto">
            Discuss Your Requirement <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {APPLICATIONS.map(({ title, description, Icon }, index) => (
            <article key={title} className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-blue-50 text-blue-900">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs font-semibold text-slate-400">0{index + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{description}</p>
              <button type="button" onClick={onOpenRFQ} className="mt-5 inline-flex items-center gap-2 self-start text-sm font-bold text-blue-900 transition-colors hover:text-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900">
                Enquire about this service <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="border-b border-slate-200 bg-white py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600">Why Hot-Dip Galvanizing?</p>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Protective Coating for Specified Steel Applications</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            Outcomes depend on coating thickness, environment, installation, maintenance, and component design.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ title, description }) => (
            <article key={title} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <ShieldCheck aria-hidden="true" className="h-5 w-5 text-blue-900" />
              <h3 className="mt-4 text-base font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="border-b border-slate-200 bg-slate-50 py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-9 max-w-3xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600">Our Galvanizing Process</p>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">From Requirement Assessment to Dispatch</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">Process stages and acceptance requirements are agreed for the component and order.</p>
        </div>
        <ol className="grid gap-0 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS_STEPS.map((step, index) => (
            <li key={step.title} className="relative border-l border-slate-200 pb-7 pl-6 last:pb-0 sm:pr-5 lg:border-l-0 lg:border-t lg:pb-0 lg:pl-0 lg:pt-6">
              <span className="absolute -left-[5px] top-0 flex h-2.5 w-2.5 rounded-full bg-red-600 ring-4 ring-slate-50 lg:-top-[5px]" aria-hidden="true" />
              <span className="font-mono text-xs font-bold text-red-600">0{index + 1}</span>
              <h3 className="mt-2 text-sm font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section className="border-b border-slate-200 bg-white py-14 sm:py-18 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600">Quality and Requirements</p>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Inspection Scope Agreed for Each Order</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Inspection is established according to product specification, applicable standard, and customer requirements. Relevant inspection records and reports can be discussed during quotation, subject to the agreed scope and available services.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {QUALITY_CHECKS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-slate-700">
                <ClipboardCheck aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-blue-800" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-blue-100 text-blue-900">
              <ClipboardCheck aria-hidden="true" className="h-5 w-5" />
            </span>
            <h3 className="text-lg font-bold text-slate-900">Standards and Coating Requirements</h3>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            ISO 1461 and ASTM A123/A123M may be relevant to specified fabricated steel products. The correct standard, coating thickness, acceptance criteria, inspection method, and documentation must be confirmed for each product and project.
          </p>
          <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-700">
            No single standard is assumed for every product or destination.
          </p>
        </div>
      </div>
    </section>

    <section className="border-b border-slate-200 bg-slate-50 py-14 sm:py-18 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-9 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600">Export Coordination</p>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Enquiries for Africa, the USA, and Other Markets</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            International buyers can share technical requirements for review. Destination coverage, product suitability, export feasibility, lead times, documentation, and delivery arrangements are confirmed before order acceptance.
          </p>
          <ol className="mt-6 space-y-3">
            {ENQUIRY_STEPS.map((step, index) => (
              <li key={step} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-950 text-xs font-bold text-white">{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
          <button type="button" onClick={onOpenRFQ} className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-blue-950 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950">
            Send an Export Enquiry <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
        <div className="overflow-hidden rounded-lg border border-slate-200 shadow-sm">
          <img src={exportImage} alt="Industrial products packed for international shipment" className="aspect-[4/3] w-full object-cover" />
        </div>
      </div>
    </section>

    <section className="bg-white py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-xl bg-blue-950 text-white shadow-lg">
          <div className="grid md:grid-cols-5">
            <div className="hidden md:col-span-2 md:block">
              <img src={cableTrayImage} alt="Cable tray components for industrial and infrastructure requirements" className="h-full min-h-64 w-full object-cover" />
            </div>
            <div className="p-6 sm:p-9 md:col-span-3 lg:p-11">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-red-400">Discuss Your Project</p>
              <h2 className="text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">Looking for an Industrial Galvanizing Partner in India?</h2>
              <p className="mt-4 text-sm leading-relaxed text-blue-100 sm:text-base">
                Share your component drawings, material grade, dimensions, estimated quantity, required standard, and delivery destination to help us assess the enquiry and discuss a project-specific quotation.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button type="button" onClick={onOpenRFQ} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Request a Quote <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </button>
                <Link to="/products" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-blue-950 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Explore Products
                </Link>
                <Link to="/contact" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/40 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Contact Us <Globe2 aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
