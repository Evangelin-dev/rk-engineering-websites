import React, { useRef, useState } from 'react';
import { ArrowRight, Check, ChevronDown, Globe2 } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import galvanizedImage from '../assets/images/galvanizing_facility_1792669705362.jpg';
import exportImage from '../assets/images/global_export_shipping_1792669706316.jpg';
import heroImage from '../assets/images/hero_cable_tray_plant_1792669704557.jpg';
import cableTrayImage from '../assets/images/products_cable_trays_1792669705857.jpg';

interface ProductsSectionProps {
  onRequestQuote: (productName: string) => void;
}

interface ProductCategory {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  products: { name: string; slug: string }[];
  considerations: string[];
}

const CATEGORIES: ProductCategory[] = [
  {
    id: 'all',
    label: 'All Products',
    eyebrow: 'Industrial Product Range',
    title: 'Industrial Steel Products for Project Requirements',
    description: 'RK Engineering manufactures and supplies industrial steel products for electrical infrastructure, renewable energy, construction, power transmission, and industrial applications.',
    image: heroImage,
    imageAlt: 'RK Engineering industrial steel manufacturing facility',
    products: [
      { name: 'Cable trays and ducts', slug: 'cable-trays' },
      { name: 'Earthing materials', slug: 'earthing-materials' },
      { name: 'Solar mounting structures', slug: 'solar-mounting-structures' },
      { name: 'Hot-dip galvanized steel products', slug: 'hot-dip-galvanized-steel-products' },
      { name: 'Towers and power infrastructure structures', slug: 'towers-power-infrastructure' },
    ],
    considerations: ['Product availability and specifications are confirmed for each order.', 'International enquiries are assessed for destination, project, and shipping requirements.'],
  },
  {
    id: 'cable-trays',
    label: 'Cable Trays & Ducts',
    eyebrow: 'Cable Management',
    title: 'Cable Trays and Ducts',
    description: 'Cable tray solutions organise and support electrical cables in factories, commercial buildings, power plants, and infrastructure projects.',
    image: cableTrayImage,
    imageAlt: 'Perforated and ladder cable trays for electrical cable management',
    products: [
      { name: 'Perforated cable trays', slug: 'perforated-cable-trays' },
      { name: 'Ladder cable trays', slug: 'ladder-cable-trays' },
      { name: 'Raceway cable trays', slug: 'raceway-cable-trays' },
      { name: 'Cable tray ducts', slug: 'cable-tray-ducts' },
    ],
    considerations: ['Select according to cable loads, installation conditions, and project specifications.'],
  },
  {
    id: 'earthing',
    label: 'Earthing Materials',
    eyebrow: 'Electrical Grounding',
    title: 'Earthing Materials',
    description: 'Products for suitable electrical grounding, bonding, and infrastructure applications, subject to project specifications.',
    image: galvanizedImage,
    imageAlt: 'Industrial galvanizing facility for steel products',
    products: [
      { name: 'Earthing flats', slug: 'earthing-flats' },
      { name: 'Earthing electrodes', slug: 'earthing-electrodes' },
      { name: 'Junction boxes', slug: 'junction-boxes' },
      { name: 'GI wire', slug: 'gi-wire' },
      { name: 'Copper earthing strips', slug: 'copper-earthing-strips' },
    ],
    considerations: ['Selection depends on the intended grounding application and project specifications.'],
  },
  {
    id: 'solar',
    label: 'Solar Mounting Structures',
    eyebrow: 'Renewable Energy',
    title: 'Solar Mounting Structures',
    description: 'Structure solutions for ground-mounted and rooftop solar installations, trackers, car parking structures, and walkways.',
    image: heroImage,
    imageAlt: 'Industrial steel manufacturing facility supporting solar structure enquiries',
    products: [
      { name: 'Ground-mounted structures', slug: 'ground-mounted-solar-structures' },
      { name: 'Rooftop structures', slug: 'rooftop-solar-structures' },
      { name: 'Solar tracker structures', slug: 'solar-tracker-structures' },
      { name: 'Car parking structures', slug: 'solar-car-parking-structures' },
      { name: 'Walkway structures', slug: 'solar-walkway-structures' },
    ],
    considerations: ['Suitability depends on site conditions, structural loading, installation requirements, and project design.'],
  },
  {
    id: 'galvanized-steel',
    label: 'Hot-Dip Galvanized Products',
    eyebrow: 'Steel Products and Corrosion Protection',
    title: 'Hot-Dip Galvanized Steel Products',
    description: 'Hot-dip galvanizing applies a protective zinc coating to suitable steel components to help reduce corrosion. Specifications and coating requirements are assessed for the intended application and project standards.',
    image: galvanizedImage,
    imageAlt: 'Steel components at a hot-dip galvanizing facility',
    products: [{ name: 'Hot-dip galvanized steel products', slug: 'hot-dip-galvanized-steel-products' }],
    considerations: ['Product specifications and coating requirements depend on the intended application and project standards.'],
  },
  {
    id: 'towers',
    label: 'Towers & Power Infrastructure',
    eyebrow: 'Power Transmission and Infrastructure',
    title: 'Transmission Towers and Power Infrastructure',
    description: 'Transmission towers support overhead power lines and are an important part of electricity transmission and distribution infrastructure.',
    image: exportImage,
    imageAlt: 'Industrial products packed for shipment; tower product imagery is not currently available',
    products: [
      { name: 'Transmission towers', slug: 'transmission-towers' },
      { name: 'Towers and power infrastructure structures', slug: 'towers-power-infrastructure' },
    ],
    considerations: ['Project review includes voltage requirements, structural loading, tower configuration, material grades, corrosion protection, and engineering standards.', 'Specifications and approvals depend on the individual project.'],
  },
];

const FAQS = [
  {
    question: 'What industrial products does RK Engineering offer?',
    answer: 'RK Engineering offers cable trays, earthing materials, solar mounting structures, hot-dip galvanized steel products, and tower structures for electrical infrastructure, renewable energy, construction, and industrial applications.',
  },
  {
    question: 'Does RK Engineering export industrial steel products to Africa?',
    answer: 'RK Engineering welcomes export enquiries for industrial steel products intended for African projects. Product availability, destination coverage, technical specifications, and shipping arrangements should be confirmed for each order.',
  },
  {
    question: 'Can I enquire about steel product exports to the USA?',
    answer: 'Yes. US importers, distributors, contractors, and industrial buyers can enquire about suitable products, including cable trays, galvanized steel components, solar mounting structures, and tower products. Applicable standards and import requirements must be verified for each product.',
  },
  {
    question: 'Which cable tray products are available?',
    answer: 'The cable tray range includes perforated type cable trays, ladder type cable trays, raceway cable trays, and cable tray ducts. Selection depends on cable loads, installation conditions, and project specifications.',
  },
  {
    question: 'What types of earthing materials are available?',
    answer: 'The earthing materials range includes earthing flats, earthing electrodes, junction boxes, GI wire, and copper earthing strips. Product specifications should match the intended electrical grounding application.',
  },
  {
    question: 'What types of solar mounting structures do you offer?',
    answer: 'The range includes ground-mounted structures, rooftop structures, solar trackers, car parking structures, and walkway structures. Suitability depends on site conditions, structural loading, and project design.',
  },
  {
    question: 'What hot-dip galvanized steel products are available?',
    answer: 'The listed range includes steel angles, construction channels, high mast poles, pipes, H-beams, crash barriers, handrails, solar mounting channels, gratings, fabricated beams, tor rods, and chequered plates.',
  },
  {
    question: 'What tower and power infrastructure products are available?',
    answer: 'The tower range includes transmission towers, telecom towers, transmission monopoles, power distribution poles, and substation structures. Engineering specifications and approvals depend on the individual project.',
  },
  {
    question: 'Can I request bulk quantities or customized product specifications?',
    answer: 'You can submit enquiries with your required quantities, dimensions, drawings, material specifications, and intended application. Customization and bulk order feasibility should be confirmed by RK Engineering for the specific requirement.',
  },
  {
    question: 'What information is needed for an export quotation?',
    answer: 'Provide your company name, destination country, product type, estimated quantity, dimensions, technical drawings, required standards, and delivery requirements. This information helps the team assess your enquiry.',
  },
  {
    question: 'Do export products need to meet destination-country standards?',
    answer: 'Applicable product standards, technical requirements, import regulations, and documentation can vary by product and destination. Buyers should confirm the requirements for their specific project before placing an order.',
  },
  {
    question: 'How can I request a quotation from RK Engineering?',
    answer: 'Use the website’s enquiry form or contact the company directly. Include your product requirements, quantity, destination country, and any available technical specifications to support the quotation process.',
  },
];

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onRequestQuote }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedCategory = searchParams.get('category');
  const [activeCategoryId, setActiveCategoryId] = useState(
    CATEGORIES.some(({ id }) => id === requestedCategory) ? requestedCategory ?? 'all' : 'all',
  );
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeCategory = CATEGORIES.find(({ id }) => id === activeCategoryId) ?? CATEGORIES[0];

  React.useEffect(() => {
    const nextCategoryId = CATEGORIES.some(({ id }) => id === requestedCategory) ? requestedCategory ?? 'all' : 'all';
    setActiveCategoryId(nextCategoryId);
  }, [requestedCategory]);

  const selectCategory = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    const nextParams = new URLSearchParams(searchParams);
    if (categoryId === 'all') {
      nextParams.delete('category');
    } else {
      nextParams.set('category', categoryId);
    }
    setSearchParams(nextParams, { replace: true });
  };

  return (
    <>
      <section className="relative isolate overflow-hidden bg-blue-950 text-white">
        <div className="absolute inset-0 -z-10">
          <img src={heroImage} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-950/45" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-red-400">Industrial Product Range</p>
            <h1 className="text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Industrial Steel Products Manufacturer &amp; Exporter in India
            </h1>
            <p className="mt-5 text-base leading-relaxed text-blue-100 sm:text-lg">
              RK Engineering manufactures and supplies industrial steel products for electrical infrastructure, renewable energy, construction, power transmission, and industrial applications.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#product-categories" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Explore Products <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
              <button type="button" onClick={() => onRequestQuote('Export Enquiry')} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/40 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Request an Export Quote <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="product-categories" className="scroll-mt-24 border-b border-slate-200 bg-white py-14 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-7 max-w-3xl">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600">Explore Our Products</p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Product Categories</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Select a category to review the relevant product range and project considerations.
            </p>
          </div>

          <div role="tablist" aria-label="Product categories" className="-mx-4 mb-6 flex max-w-full gap-1 overflow-x-auto border-b border-slate-200 px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
            {CATEGORIES.map((category, index) => {
              const isActive = category.id === activeCategoryId;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  id={`product-tab-${category.id}`}
                  aria-selected={isActive}
                  aria-controls="featured-product"
                  tabIndex={isActive ? 0 : -1}
                  ref={(element) => { tabRefs.current[index] = element; }}
                  onClick={() => selectCategory(category.id)}
                  onKeyDown={(event) => {
                    let nextIndex: number | undefined;
                    if (event.key === 'ArrowRight') nextIndex = (index + 1) % CATEGORIES.length;
                    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + CATEGORIES.length) % CATEGORIES.length;
                    if (event.key === 'Home') nextIndex = 0;
                    if (event.key === 'End') nextIndex = CATEGORIES.length - 1;
                    if (nextIndex !== undefined) {
                      event.preventDefault();
                      selectCategory(CATEGORIES[nextIndex].id);
                      tabRefs.current[nextIndex]?.focus();
                    }
                  }}
                  className={`shrink-0 rounded-md px-3.5 py-2.5 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 sm:text-sm ${
                    isActive ? 'bg-blue-950 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <div id="featured-product" role="tabpanel" aria-labelledby={`product-tab-${activeCategory.id}`} className="grid overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm transition-colors duration-200 lg:grid-cols-2">
            <Link to={`/products/${activeCategory.products[0].slug}`} aria-label={`View ${activeCategory.products[0].name} details`} className="group relative block min-h-[260px] overflow-hidden focus-visible:outline-4 focus-visible:outline-blue-700 sm:min-h-[360px] lg:min-h-[480px]">
              <img key={activeCategory.id} src={activeCategory.image} alt={activeCategory.imageAlt} className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
              <span className="absolute bottom-4 right-4 rounded-md bg-blue-950/90 px-3 py-2 text-xs font-bold text-white shadow transition-colors group-hover:bg-red-600">
                View product details
              </span>
            </Link>
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-600">{activeCategory.eyebrow}</p>
              <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">{activeCategory.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">{activeCategory.description}</p>

              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Products in this category</h4>
                <ul id="category-product-list" className="mt-3 grid gap-2 sm:grid-cols-2">
                  {activeCategory.products.map((product) => (
                    <li key={product.slug}>
                      <Link to={`/products/${product.slug}`} className="group flex h-full min-h-12 items-center justify-between gap-2 rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold text-blue-900 transition-colors hover:border-blue-300 hover:text-red-600 focus-visible:outline-2 focus-visible:outline-blue-700">
                        <span className="flex items-start gap-2">
                          <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-blue-800" />
                          {product.name}
                        </span>
                        <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-md border-l-2 border-red-600 bg-white px-4 py-3">
                <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Project considerations</h4>
                <ul className="mt-2 space-y-2">
                  {activeCategory.considerations.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-slate-700">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-slate-200 pt-5">
                <a href="#category-product-list" className="inline-flex min-h-10 items-center gap-2 rounded-md border border-blue-950 px-4 py-2 text-sm font-semibold text-blue-950 transition-colors hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">
                  View Products
                </a>
                <button type="button" onClick={() => onRequestQuote(activeCategory.title)} className="inline-flex min-h-10 items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700">
                  Request a Quote <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-14 sm:py-18 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600">International Project Enquiries</p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Export Enquiries for Africa and the USA</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              RK Engineering welcomes enquiries from importers, distributors, EPC contractors, manufacturers, and infrastructure developers seeking industrial steel products from India. Product availability, destination coverage, technical requirements, and shipping arrangements should be confirmed for each order.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {['Company name', 'Destination country', 'Product category', 'Estimated quantity', 'Dimensions or drawings, if available', 'Applicable standards', 'Delivery requirements'].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-blue-800" />
                  {item}
                </li>
              ))}
            </ul>
            <button type="button" onClick={() => onRequestQuote('Export Enquiry')} className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-blue-950 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950">
              Send an Export Enquiry <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>
          <div className="overflow-hidden rounded-lg border border-slate-200 shadow-sm">
            <img src={exportImage} alt="Industrial products packed for international export shipment" className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
      </section>

      <section id="product-faq" className="border-b border-slate-200 bg-white py-14 sm:py-18 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600">Buyer Information</p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              const answerId = `product-faq-answer-${index}`;
              return (
                <div key={faq.question} className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                  <h3>
                    <button type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenFaq(isOpen ? null : index)} className="flex min-h-14 w-full items-center justify-between gap-4 px-4 py-4 text-left focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-blue-700 sm:px-5">
                      <span className="flex items-start gap-3 text-sm font-semibold text-slate-900 sm:text-base">
                        <span className="font-mono text-xs font-bold text-red-600">{String(index + 1).padStart(2, '0')}</span>
                        {faq.question}
                      </span>
                      <ChevronDown aria-hidden="true" className={`h-4 w-4 shrink-0 text-blue-800 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </h3>
                  <div id={answerId} hidden={!isOpen} className="border-t border-slate-200 bg-white px-4 py-4 text-sm leading-relaxed text-slate-600 sm:px-5">
                    {faq.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 rounded-xl bg-blue-950 p-6 text-white shadow-lg sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-red-400">Project Enquiries</p>
              <h2 className="text-xl font-bold sm:text-2xl">Discuss Your Industrial Product Requirements</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-blue-100">
                Share your product category, quantity, destination, and available technical information for review.
              </p>
            </div>
            <Link to="/contact" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Contact Us <Globe2 aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
