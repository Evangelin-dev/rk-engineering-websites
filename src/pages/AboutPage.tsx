import React, { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Cable,
  ChevronDown,
  Factory,
  Globe2,
  Layers3,
  ShieldCheck,
  SunMedium,
  TowerControl,
  Wrench,
} from 'lucide-react';
import certificateCeImage from '../assets/images/c1.jpg';
import certificateQualityImage from '../assets/images/c2.jpg';
import certificateEnvironmentImage from '../assets/images/c3.jpg';
import certificateSafetyImage from '../assets/images/c4.jpg';
import { UPLOADED_PRODUCT_IMAGES } from '../data/productImages.ts';

const heroImage = UPLOADED_PRODUCT_IMAGES['56'];
const companyOverviewImage = UPLOADED_PRODUCT_IMAGES['54'];
const exportImage = UPLOADED_PRODUCT_IMAGES['60'];

interface AboutPageProps {
  onOpenRFQ: () => void;
}

const JOURNEY = [
  {
    year: '2000',
    title: 'Company Established',
    description: 'RK Engineering began its journey with a focus on steel fabrication and industrial manufacturing.',
  },
  {
    year: '2007',
    title: 'Cable Tray Manufacturing Expansion',
    description: 'The company expanded its cable tray manufacturing operations to address growing demand for cable management products.',
  },
  {
    year: '2015',
    title: 'Management System Certifications',
    description: 'The company obtained ISO 9001, ISO 14001, and ISO 45001 certifications, as listed on its website, covering quality, environmental management, and occupational health and safety management systems.',
  },
  {
    year: '2020',
    title: 'Export Expansion',
    description: "The company's published history records international shipment expansion into Middle Eastern and African markets.",
  },
  {
    year: 'Today',
    title: 'Manufacturing for Industrial and Infrastructure Requirements',
    description: 'RK Engineering continues to serve industrial requirements through its cable tray range, galvanizing capabilities, earthing products, solar mounting structures, and other steel products.',
  },
];

const CAPABILITIES = [
  {
    title: 'Cable Tray Manufacturing',
    description: 'Perforated cable trays, ladder cable trays, raceway systems, and cable tray ducts for electrical and industrial installations. Material, dimensions, thickness, finish, accessories, and quantities can be specified during quotation.',
    image: UPLOADED_PRODUCT_IMAGES['59'],
    alt: 'Perforated and ladder cable trays for electrical installations',
    Icon: Cable,
  },
  {
    title: 'In-House Hot-Dip Galvanizing',
    description: 'Corrosion-protection treatment for applicable steel products. Coating requirements and inspection criteria should be confirmed against product specifications and project standards.',
    image: UPLOADED_PRODUCT_IMAGES['63'],
    alt: 'Hot-dip galvanized steel products',
    Icon: ShieldCheck,
  },
  {
    title: 'Industrial Steel Fabrication',
    description: 'Fabrication support for specified steel components and industrial products. Enquiries can include drawings, material grades, dimensional requirements, finishing details, and quantities.',
    image: UPLOADED_PRODUCT_IMAGES['61'],
    alt: 'RK Engineering industrial steel product',
    Icon: Wrench,
  },
  {
    title: 'Earthing Materials',
    description: 'Earthing flats, electrodes, junction boxes, GI wire, and copper earthing strips for applicable electrical grounding and infrastructure installations.',
    image: UPLOADED_PRODUCT_IMAGES['62'],
    alt: 'RK Engineering steel product for electrical infrastructure',
    Icon: TowerControl,
  },
  {
    title: 'Solar Mounting Structures',
    description: 'Products for specified rooftop and ground-mounted applications. Structural requirements, project drawings, installation conditions, and material specifications should be confirmed for each enquiry.',
    image: UPLOADED_PRODUCT_IMAGES['64'],
    alt: 'RK Engineering product for solar mounting applications',
    Icon: SunMedium,
  },
];

const INDUSTRIES = [
  { title: 'Power and electrical infrastructure', Icon: TowerControl },
  { title: 'Renewable energy', Icon: SunMedium },
  { title: 'Oil and gas', Icon: Factory },
  { title: 'Telecommunications', Icon: Globe2 },
  { title: 'Petrochemical and manufacturing', Icon: Factory },
  { title: 'Commercial and industrial buildings', Icon: Layers3 },
  { title: 'Infrastructure and utilities', Icon: Wrench },
  { title: 'Data centres', Icon: Cable },
];

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
];

const FAQS = [
  {
    question: 'What does RK Engineering manufacture?',
    answer: 'RK Engineering lists perforated cable trays, ladder cable trays, raceway systems, cable tray ducts, earthing materials, solar mounting structures, and hot-dip galvanized steel products.',
  },
  {
    question: 'When was RK Engineering established?',
    answer: 'RK Engineering was established in 2000 and has more than 25 years of company experience.',
  },
  {
    question: 'Does RK Engineering have an in-house hot-dip galvanizing facility?',
    answer: 'Yes. The company lists an in-house hot-dip galvanizing facility. The applicable process and coating requirements should be confirmed for the product being procured.',
  },
  {
    question: "What is RK Engineering's annual manufacturing capacity?",
    answer: 'The company states an annual cable tray capacity of 12,000 MT and annual hot-dip galvanizing capacity of 24,000 MT. Current production availability should be confirmed when requesting a quotation.',
  },
  {
    question: 'Which certifications does RK Engineering hold?',
    answer: 'The company lists ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 management system certifications. Its website also displays a CE certificate for specified cable tray products. Buyers should verify certificate validity and scope.',
  },
];

const CERTIFICATIONS = [
  {
    code: 'CE Certificate',
    title: 'Specified hot-dip galvanized and perforated cable tray products',
    image: certificateCeImage,
    alt: 'CE certificate for specified RK Engineering cable tray products',
  },
  {
    code: 'ISO 9001:2015',
    title: 'Quality Management',
    image: certificateQualityImage,
    alt: 'ISO 9001:2015 quality management system certificate',
  },
  {
    code: 'ISO 14001:2015',
    title: 'Environmental Management',
    image: certificateEnvironmentImage,
    alt: 'ISO 14001:2015 environmental management system certificate',
  },
  {
    code: 'ISO 45001:2018',
    title: 'Occupational Health and Safety Management',
    image: certificateSafetyImage,
    alt: 'ISO 45001:2018 occupational health and safety management system certificate',
  },
];

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenRFQ }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const pageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const page = pageRef.current;
    if (!page || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      return;
    }

    const sections = page.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.remove('opacity-0', 'translate-y-5');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -32px 0px' },
    );

    sections.forEach((section) => {
      section.classList.add('transform', 'transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-5');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={pageRef}>
      <section className="border-b border-slate-200 bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-red-600">About RK Engineering</p>
            <h1 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.8rem]">
              Industrial Manufacturing and Galvanizing Expertise Since 2000
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              RK Engineering &amp; Galvanizers Pvt. Ltd. is an Indian industrial manufacturer of cable management systems, hot-dip galvanized products, earthing materials, solar mounting structures, and steel fabrication solutions.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Established in 2000, we combine manufacturing experience with in-house hot-dip galvanizing capabilities to support industrial, electrical, energy, and infrastructure requirements.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/products"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-blue-950 px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
              >
                Explore Our Products <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={onOpenRFQ}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition-colors hover:border-red-300 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                Request an International Quotation
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImage}
              alt="RK Engineering industrial steel product"
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-md"
            />
            <div className="absolute bottom-4 left-4 rounded-md border border-white/30 bg-blue-950/90 px-4 py-3 text-white shadow-md">
              <span className="block text-xs font-medium text-blue-100">Company established</span>
              <span className="mt-0.5 block text-xl font-bold">2000</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-14 sm:py-18 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm lg:col-span-5">
            <img
              src={companyOverviewImage}
              alt="Cable tray products manufactured for industrial and infrastructure projects"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="space-y-4 lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-600">Company Overview</p>
            <h2 className="text-balance text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              An Indian Manufacturing Partner for Industrial and Infrastructure Projects
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              RK Engineering manufactures cable tray systems and supplies galvanized steel products for electrical installations, industrial facilities, infrastructure development, and renewable energy applications.
            </p>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Our product portfolio includes perforated and ladder cable trays, raceway systems, cable tray ducts, earthing materials, solar mounting structures, and other hot-dip galvanized steel products.
            </p>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              Our in-house hot-dip galvanizing facility supports surface treatment of applicable steel components. Enquiries can be assessed using customer drawings, material specifications, coating requirements, order quantities, applicable standards, destination, and expected delivery schedule.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-14 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600">Company Journey</p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              From Manufacturing Experience to International Markets
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              RK Engineering&apos;s development reflects a continuing focus on manufacturing capability, product quality, and industrial requirements.
            </p>
          </div>
          <ol className="grid gap-0 md:grid-cols-5">
            {JOURNEY.map((milestone, index) => (
              <li key={milestone.year} className="relative border-l border-slate-200 pb-8 pl-6 last:pb-0 md:border-l-0 md:border-t md:pb-0 md:pl-0 md:pr-5 md:pt-7 md:last:pr-0">
                <span className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-red-600 ring-4 ring-white md:left-0 md:-top-[5px]" aria-hidden="true" />
                <span className="font-mono text-xl font-bold text-blue-900">{milestone.year}</span>
                <h3 className="mt-2 text-base font-bold leading-snug text-slate-900">{milestone.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{milestone.description}</p>
                {index < JOURNEY.length - 1 && <span className="sr-only">Next milestone follows.</span>}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-14 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 max-w-3xl">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600">Manufacturing Capabilities</p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Products and Capabilities for Project Requirements</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map(({ title, description, image, alt, Icon }) => (
              <article key={title} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                <img src={image} alt={alt} className="aspect-[16/9] w-full object-cover" />
                <div className="p-5 sm:p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-md border border-blue-100 bg-blue-50 p-2 text-blue-800">
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <h3 className="text-base font-bold text-slate-900">{title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-blue-950 py-14 text-white sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-red-400">Manufacturing Capacity and Infrastructure</p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Stated Annual Capacities</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-lg border border-blue-800 bg-blue-800 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: '12,000 MT', label: 'Annual Cable Tray Capacity' },
              { value: '24,000 MT', label: 'Annual Hot-Dip Galvanizing Capacity' },
              { value: '2000', label: 'Established' },
              { value: 'In-House', label: 'Galvanizing Facility' },
            ].map((stat) => (
              <div key={stat.label} className="min-h-32 bg-blue-950 p-5 sm:p-6">
                <div className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">{stat.value}</div>
                <div className="mt-2 text-sm leading-relaxed text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-5 max-w-4xl text-xs leading-relaxed text-blue-100 sm:text-sm">
            Actual production availability and delivery schedules depend on product specifications, order quantities, existing commitments, and project requirements.
          </p>
        </div>
      </section>

      <section id="certifications" className="scroll-mt-24 border-b border-slate-200 bg-white py-14 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CERTIFICATIONS.map((certification) => (
              <div key={certification.code} className="overflow-hidden border border-slate-300 bg-white p-2.5 shadow-sm">
                <a
                  href={certification.image}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open full-size ${certification.code}`}
                  className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
                >
                  <img
                    src={certification.image}
                    alt={certification.alt}
                    loading="lazy"
                    className="aspect-[3/4] w-full bg-white object-contain"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-14 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600">Industries We Serve</p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Industrial and Infrastructure Applications</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Our product portfolio supports a range of applications, subject to the technical suitability of each product.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map(({ title, Icon }) => (
              <li key={title} className="flex min-h-16 items-center gap-3 rounded-md border border-slate-200 bg-white px-4 py-3">
                <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-blue-800" />
                <span className="text-sm font-semibold text-slate-800">{title}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-slate-600">
            Product selection should be based on project design, environmental conditions, technical specifications, and applicable standards.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-14 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 max-w-3xl">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600">Manufacturing and Supply Process</p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">From Requirement Review to Dispatch Coordination</h2>
          </div>
          <ol className="grid gap-0 md:grid-cols-3 lg:grid-cols-6">
            {PROCESS_STEPS.map((step, index) => (
              <li key={step.title} className="relative border-l border-slate-200 pb-7 pl-6 last:pb-0 md:border-l-0 md:border-t md:pb-0 md:pl-0 md:pr-4 md:pt-6">
                <span className="absolute -left-[5px] top-0 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-red-600 text-[0px] ring-4 ring-white md:-top-[5px]" aria-hidden="true">
                  {index + 1}
                </span>
                <span className="font-mono text-xs font-bold text-red-600">0{index + 1}</span>
                <h3 className="mt-2 text-sm font-bold leading-snug text-slate-900">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">{step.detail}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 border-t border-slate-100 pt-4 text-sm leading-relaxed text-slate-600">
            The actual process, inspection scope, and delivery schedule are confirmed for each order.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-14 sm:py-18 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <article className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-red-600">Our Leadership and Values</p>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">Building Long-Term Industrial Partnerships</h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
              <p>Our approach is guided by manufacturing responsibility, customer requirements, continuous improvement, and long-term business relationships.</p>
              <p>Our leadership and team focus on developing manufacturing capabilities, supporting industrial customers, and maintaining quality and safety practices across operations.</p>
              <p>We value clear communication, technically defined requirements, and practical coordination between manufacturing and procurement teams.</p>
            </div>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-red-600">Our Vision for the Future</p>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">Expanding Manufacturing Capabilities for Global Markets</h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
              <p>Our vision is to strengthen our industrial manufacturing and galvanizing capabilities while responding to evolving infrastructure and engineering requirements.</p>
              <p>We continue to focus on cable management systems, galvanized steel products, earthing materials, solar mounting structures, and other specified industrial structures.</p>
              <p>We aim to build business relationships with buyers who value clear specifications, quality processes, dependable communication, and transparent procurement arrangements.</p>
            </div>
          </article>
        </div>
      </section>

      <section id="about-faq" className="border-b border-slate-200 bg-white py-14 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600">Buyer Information</p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              const answerId = `about-faq-answer-${index}`;
              return (
                <div key={faq.question} className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex min-h-14 w-full items-center justify-between gap-4 px-4 py-4 text-left focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-blue-700 sm:px-5"
                    >
                      <span className="flex items-start gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                        <span className="font-mono text-xs font-bold text-red-600">0{index + 1}</span>
                        {faq.question}
                      </span>
                      <ChevronDown aria-hidden="true" className={`h-4 w-4 shrink-0 text-blue-800 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </h3>
                  {isOpen && (
                    <div id={answerId} className="border-t border-slate-200 bg-white px-4 py-4 text-sm leading-relaxed text-slate-600 sm:px-5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-14 sm:py-18 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-50 via-slate-50 to-red-50" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-xl bg-blue-950 text-white shadow-xl">
            <div className="grid md:grid-cols-5">
              <div className="hidden md:col-span-2 md:block">
                <img src={exportImage} alt="RK Engineering steel product for international enquiries" className="h-full min-h-64 w-full object-cover" />
              </div>
              <div className="p-6 sm:p-9 md:col-span-3 lg:p-11">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-red-400">Project Enquiries</p>
                <h2 className="text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
                  Partner with RK Engineering for Your Industrial Requirements
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-blue-100 sm:text-base">
                  Looking for an Indian manufacturer for cable trays, earthing materials, solar mounting structures, or galvanized steel products? Share your technical requirements and destination details to discuss manufacturing feasibility, product specifications, and a project-specific quotation.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={onOpenRFQ}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Request a Quote <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </button>
                  <Link
                    to="/products"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-blue-950 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Explore Our Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
