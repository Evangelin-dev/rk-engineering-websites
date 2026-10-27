import React from 'react';
import { ArrowRight, Check, ClipboardList, Factory, Globe2, PackageCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import cableTrayImage from '../assets/images/products_cable_trays_1792669705857.jpg';
import manufacturingImage from '../assets/images/hero_cable_tray_plant_1792669704557.jpg';

interface AfricanExportPageProps {
  onRequestQuote: (specs: string, cableTrayType?: string) => void;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const LANDING_PAGE_PATHS = {
  industrial: '/cable-tray-manufacturer-africa',
  export: '/cable-tray-exporter-india-africa',
  galvanized: '/hot-dip-galvanized-cable-tray-africa',
  perforated: '/perforated-cable-tray-manufacturer-africa',
  ladder: '/ladder-cable-tray-supplier-africa',
  oilGasAfrica: '/cable-tray-oil-gas-projects-africa',
  powerEnergyAfrica: '/cable-tray-power-energy-projects-africa',
  manufacturerUsa: '/cable-tray-manufacturer-usa',
  exporterUsa: '/cable-tray-exporter-india-usa',
  galvanizedUsa: '/hot-dip-galvanized-cable-tray-usa',
} as const;

export const LANDING_PAGE_TITLES: Record<string, string> = {
  [LANDING_PAGE_PATHS.industrial]: 'Cable Tray Manufacturer for African Projects',
  [LANDING_PAGE_PATHS.export]: 'Cable Tray Export from India to Africa',
  [LANDING_PAGE_PATHS.galvanized]: 'Hot Dip Galvanized Cable Trays',
  [LANDING_PAGE_PATHS.perforated]: 'Perforated Cable Trays',
  [LANDING_PAGE_PATHS.ladder]: 'Ladder Cable Trays for Power Projects',
  [LANDING_PAGE_PATHS.oilGasAfrica]: 'Oil and Gas Cable Tray Projects in Africa',
  [LANDING_PAGE_PATHS.powerEnergyAfrica]: 'Power and Energy Cable Tray Projects in Africa',
  [LANDING_PAGE_PATHS.manufacturerUsa]: 'Industrial Cable Tray Manufacturing for US Projects',
  [LANDING_PAGE_PATHS.exporterUsa]: 'Cable Tray Export from India to the USA',
  [LANDING_PAGE_PATHS.galvanizedUsa]: 'Hot-Dip Galvanized Cable Trays for US Industry',
};

const PRODUCTION_ORIGIN = 'https://rkenggindia.com';

export const LandingBreadcrumb: React.FC<{ path: string }> = ({ path }) => {
  const title = LANDING_PAGE_TITLES[path];
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${PRODUCTION_ORIGIN}/` },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${PRODUCTION_ORIGIN}/products` },
      { '@type': 'ListItem', position: 3, name: title, item: `${PRODUCTION_ORIGIN}${path}` },
    ],
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="border-b border-slate-200 bg-white">
        <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-3 text-xs text-slate-500 sm:px-6 lg:px-8">
          <li><Link to="/" className="transition-colors hover:text-blue-900">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link to="/products" className="transition-colors hover:text-blue-900">Products</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="font-semibold text-slate-800">{title}</li>
        </ol>
      </nav>
      <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
    </>
  );
};

export const RelatedLandingPages: React.FC<{ currentPath: string }> = ({ currentPath }) => (
  <section className="border-b border-slate-200 bg-slate-50 py-10">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-lg font-bold text-slate-900">Related cable tray solutions</h2>
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
        {Object.entries(LANDING_PAGE_TITLES)
          .filter(([path]) => path !== currentPath)
          .map(([path, title]) => (
            <Link key={path} to={path} className="text-sm font-semibold text-blue-900 transition-colors hover:text-red-600">
              {title}
            </Link>
          ))}
        <Link to="/contact" className="text-sm font-semibold text-blue-900 transition-colors hover:text-red-600">
          Contact and enquiry form
        </Link>
      </div>
    </div>
  </section>
);

export const PRODUCT_TYPES = [
  {
    name: 'Perforated Cable Tray',
    description: 'Supports organized cable routing in suitable industrial, commercial, and electrical installations.',
    slug: 'perforated-cable-trays',
  },
  {
    name: 'Ladder Type Cable Tray',
    description: 'A cable support option for many industrial and power infrastructure installations.',
    slug: 'ladder-cable-trays',
  },
  {
    name: 'Raceway Cable Tray',
    description: 'Provides a structured cable route for commercial and industrial electrical systems.',
    slug: 'raceway-cable-trays',
  },
  {
    name: 'Cable Tray Duct',
    description: 'Offers a defined cable management route for suitable electrical and infrastructure applications.',
    slug: 'cable-tray-ducts',
  },
] as const;

const AFRICAN_MARKETS = ['Kenya', 'Tanzania', 'Uganda', 'South Africa', 'Nigeria', 'Ghana', 'Zambia', 'Botswana'];

const INDUSTRIES = [
  ['Power and energy', 'Cable routing for suitable electrical infrastructure projects.'],
  ['Oil and gas', 'Cable management for industrial facilities and related infrastructure.'],
  ['Manufacturing', 'Cable tray systems for factories and production facilities.'],
  ['Renewable energy', 'Cable routing for suitable solar and renewable energy installations.'],
  ['Construction', 'Cable management for commercial and industrial buildings.'],
  ['Telecommunications', 'Cable routing for suitable communication infrastructure.'],
] as const;

const WHY_RK = [
  ['25+ years of experience', 'Established manufacturing experience since 2000.'],
  ['In-house hot-dip galvanizing', 'Integrated galvanizing capabilities for suitable steel products.'],
  ['Multiple cable tray types', 'Perforated, ladder, raceway, and cable tray duct options.'],
  ['Manufacturing capacity', 'Stated cable tray manufacturing capacity of 12,000 MT per year.'],
  ['Project-based requirements', 'Enquiries can include drawings, BOQs, and product specifications.'],
  ['International enquiries', 'Discuss export requirements, packaging, documentation, and destination-specific shipping arrangements.'],
] as const;

const INDUSTRIAL_FAQS: FaqItem[] = [
  {
    question: 'Does RK Engineering export cable trays from India to African countries?',
    answer: 'RK Engineering welcomes enquiries from African project buyers. Contact the team to confirm product availability and shipping arrangements for your destination.',
  },
  {
    question: 'What is the minimum order quantity for cable tray exports?',
    answer: 'The minimum order quantity for cable tray enquiries is 500 metres.',
  },
  {
    question: 'What types of cable trays can I enquire about?',
    answer: 'You can enquire about perforated cable trays, ladder type cable trays, raceway cable trays, and cable tray ducts.',
  },
  {
    question: 'Can I request hot-dip galvanized cable trays?',
    answer: 'RK Engineering has in-house hot-dip galvanizing capabilities. Share your coating specifications and intended application so the suitable configuration can be reviewed.',
  },
  {
    question: 'Which African countries can enquire about cable tray exports?',
    answer: 'Buyers and project teams from countries such as Kenya, Tanzania, Uganda, Nigeria, Ghana, Botswana, Zambia, and South Africa can submit enquiries. Confirm delivery availability with RK Engineering for your specific destination.',
  },
  {
    question: 'Can cable trays be manufactured according to project specifications?',
    answer: 'You can submit drawings, BOQs, dimensions, and technical specifications for review. Final customization options depend on the product and manufacturing requirements.',
  },
  {
    question: 'How can I request an export quotation?',
    answer: 'Contact RK Engineering through the website enquiry form or email info@rkenggindia.com. Include your destination country, cable tray type, required quantity, and project details.',
  },
];

const IMPORTER_FAQS: FaqItem[] = [
  {
    question: 'Can I import cable trays from India for my African business?',
    answer: 'You can submit an enquiry to RK Engineering with your destination country, required product, and quantity to confirm supply availability and shipping arrangements.',
  },
  {
    question: 'What is the minimum quantity for a cable tray export order?',
    answer: 'The minimum order quantity is 500 metres.',
  },
  {
    question: 'What details should I provide to get export pricing?',
    answer: 'Provide the product type, dimensions, quantity, material and coating requirements, destination country, and delivery details.',
  },
  {
    question: 'Can distributors and importers request bulk quotations?',
    answer: 'Importers and distributors can submit their commercial requirements for review, subject to the 500 metre minimum order quantity.',
  },
  {
    question: 'Can I submit my own cable tray drawings?',
    answer: 'You can share drawings, technical specifications, or a bill of quantities so the requirements can be reviewed.',
  },
  {
    question: 'Does RK Engineering ship to every African country?',
    answer: 'Shipping availability and delivery arrangements must be confirmed directly with RK Engineering for the intended destination.',
  },
];

const quoteSpecs = (page: 'industrial projects' | 'import pricing') =>
  `Cable tray export enquiry for ${page}. Please confirm destination country, cable tray type, required quantity in metres, dimensions, material and coating requirements, and project specifications or drawings.`;

export const SectionHeading: React.FC<{ eyebrow: string; children: React.ReactNode; description?: string }> = ({
  eyebrow,
  children,
  description,
}) => (
  <div className="mb-9 max-w-3xl">
    <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600">{eyebrow}</p>
    <h2 className="text-balance text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">{children}</h2>
    {description && <p className="mt-4 text-base leading-relaxed text-slate-600">{description}</p>}
  </div>
);

export const QuoteButton: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
  >
    {children}
    <ArrowRight aria-hidden="true" className="h-4 w-4" />
  </button>
);

const ProductLinks: React.FC = () => (
  <div className="grid gap-5 sm:grid-cols-2">
    {PRODUCT_TYPES.map((product) => (
      <article key={product.slug} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <h3 className="text-lg font-bold text-blue-950">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{product.description}</p>
        <Link
          to={`/products/${product.slug}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-900 transition-colors hover:text-red-600"
        >
          View product details <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </article>
    ))}
  </div>
);

export const FaqSection: React.FC<{ items: FaqItem[]; title?: string }> = ({ items, title = 'Cable Tray Export Enquiries' }) => (
  <section className="border-b border-slate-200 bg-white py-14 sm:py-18">
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Frequently Asked Questions">{title}</SectionHeading>
      <div className="divide-y divide-slate-200 border-y border-slate-200">
        {items.map((item) => (
          <article key={item.question} className="py-5">
            <h3 className="text-base font-bold text-slate-900">{item.question}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.answer}</p>
          </article>
        ))}
      </div>
    </div>
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      })}
    </script>
  </section>
);

export const ExportHero: React.FC<{
  label: string;
  title: string;
  children: React.ReactNode;
  imageAlt: string;
  image: string;
  onRequestQuote: () => void;
}> = ({ label, title, children, imageAlt, image, onRequestQuote }) => (
  <section className="overflow-hidden border-b border-slate-200 bg-white">
    <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-16">
      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.17em] text-red-600">{label}</p>
        <h1 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <div className="mt-5 space-y-3 text-base leading-relaxed text-slate-600">{children}</div>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <QuoteButton onClick={onRequestQuote}>Request an Export Quote</QuoteButton>
          <Link
            to="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800 transition-colors hover:border-blue-900 hover:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
          >
            Contact RK Engineering
          </Link>
        </div>
        <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold text-blue-950">
          <span className="rounded-full bg-blue-50 px-4 py-2">Minimum order: 500 metres</span>
          <span className="rounded-full bg-blue-50 px-4 py-2">12,000 MT stated annual cable tray capacity</span>
        </div>
      </div>
      <div className="relative">
        <img src={image} alt={imageAlt} className="aspect-[4/3] w-full rounded-xl object-cover shadow-xl" />
        <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-lg bg-blue-950/95 px-4 py-3 text-white shadow-lg sm:bottom-6 sm:left-6">
          <Factory aria-hidden="true" className="h-6 w-6 text-red-400" />
          <span className="text-sm font-bold">Manufacturing in India</span>
        </div>
      </div>
    </div>
  </section>
);

const ProductList: React.FC = () => (
  <div className="grid gap-3 sm:grid-cols-2">
    {PRODUCT_TYPES.map((product) => (
      <Link
        key={product.slug}
        to={`/products/${product.slug}`}
        className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold text-blue-950 transition-colors hover:border-blue-300 hover:bg-blue-50"
      >
        <Check aria-hidden="true" className="h-4 w-4 shrink-0 text-red-600" />
        {product.name}
      </Link>
    ))}
  </div>
);

const PrimaryFinalCta: React.FC<{ onRequestQuote: () => void; importer?: boolean }> = ({
  onRequestQuote,
  importer = false,
}) => (
  <section className="bg-blue-950 py-14 text-white sm:py-18">
    <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-7 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-300">Minimum Order Quantity: 500 Metres</p>
        <h2 className="mt-3 text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
          {importer ? 'Start Your Cable Tray Import Enquiry' : 'Looking for a Cable Tray Exporter from India to Africa?'}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-blue-100 sm:text-base">
          {importer
            ? 'Contact RK Engineering to discuss cable tray export requirements from India. Product availability and shipping arrangements must be confirmed for your destination.'
            : 'Share your project specifications and destination details with RK Engineering to discuss industrial cable tray manufacturing and export requirements.'}
        </p>
      </div>
      <QuoteButton onClick={onRequestQuote}> {importer ? 'Get an Export Quote' : 'Request an Export Quote'}</QuoteButton>
    </div>
  </section>
);

export const CableTrayManufacturerAfricaPage: React.FC<AfricanExportPageProps> = ({ onRequestQuote }) => {
  const requestQuote = () => onRequestQuote(quoteSpecs('industrial projects'), 'Not sure / Other');

  return (
    <>
      <LandingBreadcrumb path={LANDING_PAGE_PATHS.industrial} />
      <ExportHero
        label="Industrial Cable Tray Manufacturing & Export"
        title="Cable Tray Exporter from India to African Countries"
        image={manufacturingImage}
        imageAlt="Industrial cable tray manufacturing facility in India"
        onRequestQuote={requestQuote}
      >
        <p>
          RK Engineering &amp; Galvanizers Pvt. Ltd. manufactures cable trays in India for electrical, power,
          infrastructure, and industrial projects. With manufacturing experience since 2000, in-house hot-dip
          galvanizing, and project-based production capabilities, we welcome enquiries from African buyers.
        </p>
        <p>Perforated, ladder, raceway, and duct-type cable trays can be reviewed against your project requirements.</p>
      </ExportHero>

      <section className="border-b border-slate-200 bg-slate-50 py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Cable Tray Products"
            description="Cable tray selection depends on the cable arrangement, installation conditions, and project specifications. Explore the available product types and share the relevant requirements for review."
          >
            Cable Tray Products Available for Export
          </SectionHeading>
          <ProductLinks />
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl items-center gap-9 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <img
            src={cableTrayImage}
            alt="Hot-dip galvanized cable tray products for industrial cable management"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg"
          />
          <div>
            <SectionHeading eyebrow="Corrosion Protection">Hot-Dip Galvanized Cable Trays for African Projects</SectionHeading>
            <p className="text-base leading-relaxed text-slate-600">
              Hot-dip galvanizing applies a zinc coating to suitable steel components to help protect them against
              corrosion. It can be an important consideration for outdoor installations and industrial environments.
              RK Engineering has an in-house hot-dip galvanizing facility for suitable steel products.
            </p>
            <h3 className="mt-6 text-base font-bold text-slate-900">Include these details in your enquiry:</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {[
                'Cable tray type and dimensions',
                'Steel thickness and material requirements',
                'Galvanizing or coating specifications',
                'Installation environment and project standards',
                'Total quantity and destination country',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Project Applications">
            Industries We Serve
          </SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map(([industry, detail]) => (
              <article key={industry} className="rounded-lg border border-slate-200 bg-white p-5">
                <h3 className="font-bold text-blue-950">{industry}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{detail}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-sm text-slate-500">Product selection should be based on the requirements and specifications of each project.</p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Your Manufacturing Partner">
            Why Choose RK Engineering as Your Cable Tray Exporter?
          </SectionHeading>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_RK.map(([title, detail]) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-bold text-blue-950">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{detail}</p>
              </article>
            ))}
          </div>
          <Link to="/products" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-900 hover:text-red-600">
            Explore the wider product range <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-blue-50 py-12 sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-7 px-4 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-600">Bulk Cable Tray Orders</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">Minimum Order: 500 Metres</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
              African importers, distributors, contractors, and project procurement teams can submit bulk requirements.
              Please include the product type, dimensions, coating requirements, total quantity, destination country,
              and expected delivery schedule. Product availability, pricing, and shipping arrangements are confirmed for
              each enquiry.
            </p>
          </div>
          <QuoteButton onClick={requestQuote}>Get a Bulk Cable Tray Quote</QuoteButton>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="How It Works">Export Enquiry Process</SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Submit your requirements', 'Specify cable tray type, quantity, dimensions, and destination.'],
              ['Share technical documents', 'Attach or describe your BOQ, drawings, or project specifications.'],
              ['Review the quotation', 'Discuss pricing, product specifications, packaging, and export arrangements.'],
              ['Confirm the order', 'Finalize approved specifications, quantity, and delivery terms before production and dispatch.'],
            ].map(([title, detail], index) => (
              <article key={title} className="rounded-lg border border-slate-200 p-5">
                <span className="font-mono text-xs font-bold text-red-600">0{index + 1}</span>
                <h3 className="mt-2 font-bold text-blue-950">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{detail}</p>
              </article>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {PRODUCT_TYPES.map((product) => (
              <Link key={product.slug} to={`/products/${product.slug}`} className="font-semibold text-blue-900 hover:text-red-600">
                {product.name}
              </Link>
            ))}
            <Link to="/contact" className="font-semibold text-blue-900 hover:text-red-600">Contact enquiry form</Link>
          </div>
        </div>
      </section>
      <RelatedLandingPages currentPath={LANDING_PAGE_PATHS.industrial} />
      <FaqSection items={INDUSTRIAL_FAQS} />
      <PrimaryFinalCta onRequestQuote={requestQuote} />
    </>
  );
};

export const CableTrayExporterIndiaAfricaPage: React.FC<AfricanExportPageProps> = ({ onRequestQuote }) => {
  const requestQuote = () => onRequestQuote(quoteSpecs('import pricing'), 'Not sure / Other');

  return (
    <>
      <LandingBreadcrumb path={LANDING_PAGE_PATHS.export} />
      <ExportHero
        label="Importers, Distributors & Project Buyers"
        title="Source Cable Trays from India for Your African Projects"
        image={cableTrayImage}
        imageAlt="Cable tray products available for export enquiry from India"
        onRequestQuote={requestQuote}
      >
        <p>
          Looking for a cable tray exporter from India? RK Engineering &amp; Galvanizers Pvt. Ltd. welcomes export
          enquiries from importers, electrical distributors, procurement companies, and EPC contractors across African
          markets.
        </p>
        <p>Share your specifications, order quantity, and destination to discuss pricing and export arrangements.</p>
      </ExportHero>

      <section className="border-b border-slate-200 bg-slate-50 py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="For Importers & Distributors"
            description="Whether you are purchasing for distribution or a specific project, select products according to your technical requirements. Buyers can submit dimensions, material specifications, thickness, coating requirements, and drawings for review."
          >
            Export Cable Tray Products for Your Business
          </SectionHeading>
          <ProductList />
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-8">
          <div className="rounded-xl bg-blue-950 p-6 text-white sm:p-8">
            <Globe2 aria-hidden="true" className="h-8 w-8 text-red-400" />
            <h2 className="mt-4 text-2xl font-extrabold">Cable Tray Export from India to African Markets</h2>
            <p className="mt-3 text-sm leading-relaxed text-blue-100">
              We welcome enquiries from buyers and project procurement teams in these markets:
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-2 text-sm font-semibold">
              {AFRICAN_MARKETS.map((country) => (
                <li key={country} className="rounded-md bg-white/10 px-3 py-2">{country}</li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-blue-200">
              These are enquiry markets, not guaranteed shipping destinations. Supply availability, shipping options,
              and delivery arrangements must be confirmed with RK Engineering for the specific destination.
            </p>
          </div>
          <div className="self-center">
            <SectionHeading eyebrow="Bulk Order Requirements">
              Bulk Cable Tray Orders for Importers and Distributors
            </SectionHeading>
            <p className="text-sm leading-relaxed text-slate-600">
              RK Engineering accepts cable tray enquiries starting at a minimum order quantity of 500 metres. Clear
              specifications and order details help our team review your requirement and prepare a relevant quotation.
            </p>
            <h3 className="mt-5 font-bold text-slate-900">Please provide:</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {[
                'Company name and country',
                'Cable tray type and required dimensions',
                'Total quantity in metres',
                'Material and surface-finish requirements',
                'Port of destination or delivery location',
                'Drawings or bill of quantities, if available',
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-slate-600">
                  <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <QuoteButton onClick={requestQuote}>Submit Your Bulk Requirement</QuoteButton>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why RK Engineering">
            Why Choose RK Engineering as Your Cable Tray Exporter?
          </SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_RK.map(([title, detail]) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-white p-5">
                <h3 className="font-bold text-blue-950">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{detail}</p>
              </article>
            ))}
          </div>
          <Link to="/products" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-900 hover:text-red-600">
            Explore other products <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="International Procurement">
            What to Confirm Before Importing Cable Trays
          </SectionHeading>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ['Product specifications', 'Verify dimensions, thickness, material, finish, and any project-specific standards.'],
              ['Order quantity', 'Confirm that the required quantity meets the supplier’s minimum order requirement.'],
              ['Packaging', 'Discuss packaging suitable for handling, transportation, and the intended shipping method.'],
              ['Export documentation', 'Confirm which commercial and shipping documents will be provided for the order.'],
              ['Shipping and delivery', 'Agree on destination, applicable shipping terms, freight responsibilities, and expected dispatch schedule before confirming the purchase.'],
            ].map(([title, detail]) => (
              <article key={title} className="flex gap-4 rounded-lg border border-slate-200 bg-slate-50 p-5">
                <PackageCheck aria-hidden="true" className="h-5 w-5 shrink-0 text-red-600" />
                <div>
                  <h3 className="font-bold text-blue-950">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-blue-50 py-12 sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-600">Request Export Pricing</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">Share Your Bulk Requirement</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
              Send your product specifications and destination details to RK Engineering. Our team can review your
              requirements and discuss next steps. Minimum order quantity: 500 metres.
            </p>
            <a href="mailto:info@rkenggindia.com" className="mt-3 inline-flex text-sm font-semibold text-blue-900 hover:text-red-600">
              info@rkenggindia.com
            </a>
          </div>
          <QuoteButton onClick={requestQuote}>Get an Export Quote</QuoteButton>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <ClipboardList aria-hidden="true" className="h-6 w-6 text-red-600" />
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">Prepare an Import Enquiry</h2>
          </div>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
            Use the enquiry form to provide your company name, contact details, destination country, product type,
            quantity in metres, dimensions, coating or material requirements, and project specifications. You can also
            link to the specific cable tray product details below.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {PRODUCT_TYPES.map((product) => (
              <Link key={product.slug} to={`/products/${product.slug}`} className="font-semibold text-blue-900 hover:text-red-600">
                {product.name}
              </Link>
            ))}
            <Link to="/contact" className="font-semibold text-blue-900 hover:text-red-600">Contact enquiry form</Link>
          </div>
        </div>
      </section>
      <RelatedLandingPages currentPath={LANDING_PAGE_PATHS.export} />
      <FaqSection items={IMPORTER_FAQS} />
      <PrimaryFinalCta onRequestQuote={requestQuote} importer />
    </>
  );
};

const GALVANIZED_FAQS: FaqItem[] = [
  {
    question: 'Why choose a hot-dip galvanized cable tray?',
    answer: 'Hot-dip galvanizing provides a zinc coating that helps protect steel against corrosion. The appropriate specification depends on the installation environment and project requirements.',
  },
  {
    question: 'Is galvanized cable tray suitable for outdoor installations?',
    answer: 'It can be suitable for many outdoor applications when the coating, material, and product design meet the environmental and engineering requirements.',
  },
  {
    question: 'What coating information should I include in my enquiry?',
    answer: 'Provide the required galvanizing standard, coating thickness, environmental conditions, and any project-specific requirements.',
  },
  {
    question: 'What is the minimum order quantity?',
    answer: 'RK Engineering’s minimum order quantity for cable tray enquiries is 500 metres.',
  },
  {
    question: 'Can I submit technical drawings for review?',
    answer: 'Share your drawings, dimensions, bill of quantities, and relevant specifications for review.',
  },
  {
    question: 'How do I request pricing for an African project?',
    answer: 'Email info@rkenggindia.com with your cable tray specifications, quantity, and destination details, or use the website enquiry form.',
  },
];

const PERFORATED_FAQS: FaqItem[] = [
  {
    question: 'What is a perforated cable tray used for?',
    answer: 'Perforated cable trays support and organize electrical cables in suitable industrial, commercial, and infrastructure installations.',
  },
  {
    question: 'What is the difference between perforated and ladder cable trays?',
    answer: 'Perforated cable trays have openings along the tray base, while ladder cable trays use side rails connected by cross members. The appropriate option depends on cable type, loading, installation conditions, and project requirements.',
  },
  {
    question: 'Can perforated cable trays be supplied for African projects?',
    answer: 'African buyers can submit enquiries to RK Engineering with product specifications, quantity, and destination country to confirm supply arrangements.',
  },
  {
    question: 'What is the minimum order quantity?',
    answer: 'The minimum order quantity for cable tray enquiries is 500 metres.',
  },
  {
    question: 'Can I request a specific tray size or material thickness?',
    answer: 'Submit your required dimensions, material thickness, drawings, and project specifications for review.',
  },
  {
    question: 'Are galvanized perforated cable trays available?',
    answer: 'RK Engineering has in-house hot-dip galvanizing capabilities. Specify the required finish and coating standard so availability and suitability can be confirmed.',
  },
  {
    question: 'How can I get a quotation?',
    answer: 'Email info@rkenggindia.com with your required dimensions, quantity, finish, and delivery destination, or submit an enquiry through the website.',
  },
];

const LADDER_FAQS: FaqItem[] = [
  {
    question: 'What is a ladder cable tray used for?',
    answer: 'A ladder cable tray supports suitable power and control cable routes in industrial facilities, power plants, substations, and other electrical installations.',
  },
  {
    question: 'Is a ladder cable tray suitable for power projects?',
    answer: 'It can be suitable for many power infrastructure applications when the tray design, loading, support spacing, and installation comply with project requirements.',
  },
  {
    question: 'What information is needed for a ladder cable tray quotation?',
    answer: 'Provide required dimensions, material, thickness, finish, quantity, destination, and project drawings or BOQ where available.',
  },
  {
    question: 'What is the minimum order quantity?',
    answer: 'The minimum order quantity for cable tray enquiries is 500 metres.',
  },
  {
    question: 'Can ladder cable trays be specified for outdoor installations?',
    answer: 'They may be suitable where the selected product and protective finish meet the project’s environmental and engineering requirements.',
  },
  {
    question: 'Can African EPC contractors submit project enquiries?',
    answer: 'EPC contractors and electrical procurement teams can submit their requirements for review and confirmation of supply arrangements.',
  },
  {
    question: 'How can I request pricing from RK Engineering?',
    answer: 'Email info@rkenggindia.com with your product specifications, quantity, and destination country, or use the website enquiry form.',
  },
];

const africanMarkets = ['Kenya', 'Tanzania', 'Uganda', 'South Africa', 'Nigeria', 'Ghana', 'Zambia', 'Botswana'];

const MarketsPanel: React.FC<{ description: string }> = ({ description }) => (
  <div className="rounded-xl bg-blue-950 p-6 text-white sm:p-8">
    <Globe2 aria-hidden="true" className="h-8 w-8 text-red-400" />
    <h3 className="mt-4 text-xl font-extrabold">African project enquiries</h3>
    <p className="mt-3 text-sm leading-relaxed text-blue-100">{description}</p>
    <ul className="mt-5 grid grid-cols-2 gap-2 text-sm font-semibold">
      {africanMarkets.map((country) => (
        <li key={country} className="rounded-md bg-white/10 px-3 py-2">{country}</li>
      ))}
    </ul>
    <p className="mt-5 text-xs leading-relaxed text-blue-200">
      These are enquiry markets, not guaranteed shipping destinations. Availability and shipping arrangements must be
      confirmed with RK Engineering for the intended destination.
    </p>
  </div>
);

export const RequirementCards: React.FC<{ items: readonly (readonly [string, string])[] }> = ({ items }) => (
  <div className="grid gap-4 sm:grid-cols-2">
    {items.map(([title, detail]) => (
      <article key={title} className="rounded-lg border border-slate-200 bg-white p-5">
        <h3 className="font-bold text-blue-950">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{detail}</p>
      </article>
    ))}
  </div>
);

export const Checklist: React.FC<{ items: readonly string[] }> = ({ items }) => (
  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-slate-600">
        <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
        {item}
      </li>
    ))}
  </ul>
);

export const FocusedFinalCta: React.FC<{ title: string; description: string; onRequestQuote: () => void }> = ({
  title,
  description,
  onRequestQuote,
}) => (
  <section className="bg-blue-950 py-14 text-white sm:py-18">
    <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-7 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-300">Minimum Order: 500 Metres</p>
        <h2 className="mt-3 text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">{title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-blue-100 sm:text-base">{description}</p>
      </div>
      <QuoteButton onClick={onRequestQuote}>Request a Project Quote</QuoteButton>
    </div>
  </section>
);

export const GalvanizedCableTrayAfricaPage: React.FC<AfricanExportPageProps> = ({ onRequestQuote }) => {
  const requestQuote = () =>
    onRequestQuote(
      'Galvanized cable tray export enquiry. Please share cable tray design, dimensions, steel grade and thickness, required galvanizing standard and coating thickness, quantity in metres, project drawings, and destination country.',
      'Not sure / Other',
    );

  return (
    <>
      <LandingBreadcrumb path={LANDING_PAGE_PATHS.galvanized} />
      <ExportHero
        label="Corrosion Protection for Project Cable Management"
        title="Hot Dip Galvanized Cable Tray Supplier for African Markets"
        image={cableTrayImage}
        imageAlt="Cable trays for industrial cable management and galvanizing requirements"
        onRequestQuote={requestQuote}
      >
        <p>
          Choosing the right cable tray finish is an important decision for industrial electrical installations.
          RK Engineering manufactures cable trays and provides in-house hot-dip galvanizing for suitable steel
          products, helping buyers address corrosion-protection requirements.
        </p>
        <p>
          For African projects, assess the installation environment, required service life, and project specifications
          before selecting a galvanized cable tray.
        </p>
      </ExportHero>

      <section className="border-b border-slate-200 bg-slate-50 py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div>
            <SectionHeading eyebrow="Corrosion Protection">Why Hot-Dip Galvanizing Matters for Cable Trays</SectionHeading>
            <p className="text-base leading-relaxed text-slate-600">
              Steel cable trays may be exposed to moisture, humidity, rain, and industrial pollutants depending on
              their installation location. An appropriate protective coating helps reduce corrosion and supports the
              long-term performance of steel components.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Hot-dip galvanizing applies a zinc coating to steel. Suitability depends on the environment, coating
              specification, fabrication details, and maintenance conditions. Evaluate coating requirements alongside
              the mechanical and dimensional specifications.
            </p>
            <Link
              to="/services"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-900 hover:text-red-600"
            >
              Learn about hot-dip galvanizing services <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-lg font-bold text-blue-950">Selecting the Right Galvanized Cable Tray</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Different installations call for different configurations. Include these considerations in your enquiry:
            </p>
            <Checklist
              items={[
                'Installation environment: indoor, outdoor, coastal, or industrial',
                'Cable loading and required support spacing per project design',
                'Tray width, side height, thickness, and routing requirements',
                'Required galvanizing standard and coating thickness',
                'Bends, tees, reducers, connectors, covers, and supports',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Industrial & Infrastructure Applications">
            Cable Tray Applications Across African Industrial Markets
          </SectionHeading>
          <RequirementCards
            items={[
              ['Coastal and port infrastructure', 'Coastal environments may require particular attention to corrosion exposure when selecting steel cable management systems.'],
              ['Mining and processing facilities', 'Dust, moisture, and other site-specific conditions can influence material and coating selection.'],
              ['Power infrastructure', 'Cable support arrangements should meet specified loading, routing, and installation requirements.'],
              ['Industrial plants', 'Factories and processing facilities use cable management systems to organize cables across production and utility areas.'],
            ]}
          />
          <p className="mt-5 text-sm text-slate-500">Product selection should follow actual project conditions and engineering specifications.</p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div>
            <SectionHeading eyebrow="Technical Procurement">What Buyers Should Check Before Ordering</SectionHeading>
            <Checklist
              items={[
                'Technical drawings and dimensional tolerances',
                'Steel grade and material thickness',
                'Required galvanizing standard and coating thickness',
                'Applicable quality inspection requirements',
                'Required accessories and fittings',
                'Packing requirements for international transportation',
                'Quantity, destination, and agreed commercial terms',
              ]}
            />
            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              For projects with defined specifications, provide the relevant drawings and documentation during the enquiry stage.
            </p>
            <Link
              to="/products/perforated-cable-trays"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-900 hover:text-red-600"
            >
              View cable tray product details <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <div>
            <SectionHeading eyebrow="Manufacturing Capabilities">Why Work with RK Engineering?</SectionHeading>
            <RequirementCards
              items={[
                ['Established in 2000', 'Manufacturing experience in cable trays and galvanized steel products.'],
                ['In-house galvanizing', 'Integrated hot-dip galvanizing capabilities for suitable steel products.'],
                ['Annual cable tray capacity', '12,000 MT per year, as stated by RK Engineering.'],
                ['Wide product range', 'Perforated, ladder, raceway, and cable tray duct options.'],
                ['Project-based review', 'Requirements can be reviewed against drawings and technical specifications.'],
                ['International enquiries', 'Enquiries are welcomed; destination-specific supply and shipping must be confirmed.'],
              ]}
            />
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-blue-100 bg-blue-50 p-5">
            <h3 className="font-bold text-blue-950">Quality Management Certifications</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              RK Engineering lists ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018. Review certificate scope,
              validity, and applicability for project requirements.
            </p>
            <Link to="/about#certifications" className="mt-3 inline-flex text-sm font-bold text-blue-900 hover:text-red-600">
              Review certifications and quality systems
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-blue-50 py-12 sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-7 px-4 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-600">Minimum Order Quantity: 500 Metres</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">Request a Galvanized Cable Tray Quotation</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
              RK Engineering welcomes enquiries from industrial buyers, electrical contractors, distributors, and
              project procurement teams. Share your preferred tray design, dimensions, coating specification, quantity,
              and destination country.
            </p>
          </div>
          <QuoteButton onClick={requestQuote}>Request Technical and Commercial Details</QuoteButton>
        </div>
      </section>
      <RelatedLandingPages currentPath={LANDING_PAGE_PATHS.galvanized} />
      <FaqSection items={GALVANIZED_FAQS} title="Galvanized Cable Tray Questions" />
      <FocusedFinalCta
        title="Discuss Your Galvanized Cable Tray Requirements"
        description="Contact RK Engineering to discuss your technical requirements and request a quotation. Product availability and shipping arrangements must be confirmed for your destination."
        onRequestQuote={requestQuote}
      />
    </>
  );
};

export const PerforatedCableTrayAfricaPage: React.FC<AfricanExportPageProps> = ({ onRequestQuote }) => {
  const requestQuote = () =>
    onRequestQuote(
      'Perforated cable tray quotation enquiry. Please share required tray width, side height, material and thickness, finish or galvanizing standard, cable loading and support spacing requirements, fittings, quantity in metres, drawings or BOQ, and destination country.',
      'Perforated Cable Tray',
    );

  return (
    <>
      <LandingBreadcrumb path={LANDING_PAGE_PATHS.perforated} />
      <ExportHero
        label="Cable Management for Industrial Electrical Installations"
        title="Perforated Cable Tray Manufacturer for African Industrial Projects"
        image={cableTrayImage}
        imageAlt="Perforated cable tray for industrial electrical cable management"
        onRequestQuote={requestQuote}
      >
        <p>
          RK Engineering &amp; Galvanizers Pvt. Ltd. manufactures cable tray products for electrical installations,
          factories, commercial facilities, and infrastructure projects. Perforated cable trays provide a structured
          support system; buyers can submit project specifications to discuss dimensions, materials, and availability.
        </p>
        <p>Minimum order quantity: 500 metres. Supply availability and destination-specific shipping must be confirmed.</p>
      </ExportHero>

      <section className="border-b border-slate-200 bg-slate-50 py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div>
            <SectionHeading eyebrow="Product Overview">What Is a Perforated Cable Tray?</SectionHeading>
            <p className="text-base leading-relaxed text-slate-600">
              A perforated cable tray is a cable support system featuring openings along its base. Depending on the
              design and installation conditions, these openings can help with ventilation and drainage.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Perforated cable trays are commonly considered for electrical cable routing in manufacturing facilities,
              commercial buildings, industrial plants, and infrastructure projects. Selection depends on cable type,
              cable loading, installation environment, support spacing, and project specifications.
            </p>
            <Link
              to="/products/perforated-cable-trays"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-900 hover:text-red-600"
            >
              View perforated cable tray product details <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <img
            src={cableTrayImage}
            alt="Perforated cable tray products manufactured for electrical installations"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg"
          />
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Project Applications">
            Perforated Cable Tray for Industrial Applications in Africa
          </SectionHeading>
          <p className="mb-6 max-w-3xl text-sm leading-relaxed text-slate-600">
            Industrial electrical installations need cable routes that are organized, accessible, and suitable for
            their operating environment. Perforated cable trays can provide a structured pathway in a range of facilities.
          </p>
          <RequirementCards
            items={[
              ['Manufacturing and processing plants', 'Support organized cable routing around production equipment, utility systems, and electrical installations.'],
              ['Commercial and industrial buildings', 'Provide cable support for electrical distribution and building services where the specified design is appropriate.'],
              ['Power and electrical infrastructure', 'Help organize cable runs within suitable electrical facilities and supporting infrastructure.'],
              ['Warehouses and logistics facilities', 'Support cable routing for lighting, power distribution, and other electrical systems.'],
              ['Renewable energy installations', 'Provide cable support for suitable solar and renewable energy installations, subject to project design requirements.'],
            ]}
          />
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div>
            <SectionHeading eyebrow="Technical Selection">How to Select the Right Perforated Cable Tray</SectionHeading>
            <Checklist
              items={[
                'Tray width and side height for cable size and arrangement',
                'Material thickness for specified loading and mechanical requirements',
                'Surface finish for indoor or outdoor use and exposure',
                'Cable loading and support spacing per project engineer',
                'Bends, tees, reducers, connectors, covers, and supports',
                'Applicable standards and project specifications',
              ]}
            />
          </div>
          <div>
            <SectionHeading eyebrow="Manufacturing Requirements">Perforated Cable Tray for Project Specifications</SectionHeading>
            <p className="text-sm leading-relaxed text-slate-600">
              Different projects have different cable routing and installation needs. Share dimensions, material
              specifications, finish, and project drawings to clarify the required configuration before quotation.
              Specify the desired coating and applicable standard; do not assume every product has the same finish.
            </p>
            <div className="mt-6 rounded-lg border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-blue-950">Why choose RK Engineering?</h3>
              <Checklist
                items={[
                  'Manufacturing experience since 2000',
                  'Perforated, ladder, raceway, and duct-type tray categories',
                  'In-house galvanizing for suitable steel products',
                  'Review of drawings, BOQs, dimensions, and project specifications',
                  'Cable tray enquiries from a 500 metre minimum',
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <MarketsPanel description="RK Engineering welcomes enquiries from industrial buyers, electrical contractors, EPC companies, distributors, and procurement teams sourcing perforated cable trays for African projects." />
          <div>
            <SectionHeading eyebrow="Bulk Project Enquiries">Minimum Order Quantity for Perforated Cable Trays</SectionHeading>
            <p className="text-sm leading-relaxed text-slate-600">
              The minimum order quantity for cable tray enquiries is 500 metres. Include the required tray width and
              side height, material thickness and finish, total quantity, fittings, drawings or BOQ, destination country,
              and delivery details.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              African countries listed are enquiry markets only. Supply availability and shipping arrangements must be
              confirmed for each destination.
            </p>
            <div className="mt-6">
              <QuoteButton onClick={requestQuote}>Get a Bulk Order Quote</QuoteButton>
            </div>
          </div>
        </div>
      </section>
      <RelatedLandingPages currentPath={LANDING_PAGE_PATHS.perforated} />
      <FaqSection items={PERFORATED_FAQS} title="Perforated Cable Tray Questions" />
      <FocusedFinalCta
        title="Request a Quote for Perforated Cable Trays"
        description="Planning an industrial electrical installation in Africa? Contact RK Engineering to discuss your perforated cable tray requirements. Product availability and shipping arrangements are confirmed for each destination."
        onRequestQuote={requestQuote}
      />
    </>
  );
};

export const LadderCableTrayAfricaPage: React.FC<AfricanExportPageProps> = ({ onRequestQuote }) => {
  const requestQuote = () =>
    onRequestQuote(
      'Ladder cable tray project quotation. Please share cable quantity, weight and arrangement, required tray width and side rail height, material and thickness, loading and support span, finish, fittings, project drawings or BOQ, quantity in metres, and destination country.',
      'Ladder Type Cable Tray',
    );

  return (
    <>
      <LandingBreadcrumb path={LANDING_PAGE_PATHS.ladder} />
      <ExportHero
        label="Cable Support for Power Infrastructure"
        title="Ladder Cable Tray Supplier for Power Projects in Africa"
        image={manufacturingImage}
        imageAlt="Industrial cable tray manufacturing facility for power project requirements"
        onRequestQuote={requestQuote}
      >
        <p>
          Power infrastructure projects need cable support systems designed around electrical layouts, cable loads,
          installation conditions, and maintenance access. RK Engineering &amp; Galvanizers Pvt. Ltd. manufactures ladder
          type cable trays for industrial and electrical applications.
        </p>
        <p>
          We welcome enquiries from power project developers, electrical contractors, EPC companies, and procurement
          teams. Minimum order quantity: 500 metres.
        </p>
      </ExportHero>

      <section className="border-b border-slate-200 bg-slate-50 py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div>
            <SectionHeading eyebrow="Power Plants & Substations">
              Ladder Type Cable Trays for Power Infrastructure
            </SectionHeading>
            <p className="text-base leading-relaxed text-slate-600">
              Ladder cable trays consist of two side rails connected by cross members. This construction provides a
              structured support route for suitable power and control cables, depending on the installation design.
            </p>
            <Checklist
              items={[
                'Power generation facilities',
                'Electrical substations',
                'Industrial power distribution systems',
                'Utility and infrastructure projects',
                'Renewable energy facilities',
                'Electrical rooms and industrial service areas',
              ]}
            />
            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              Final configuration should follow cable loading, support spacing, environmental conditions, and project engineering specifications.
            </p>
            <Link
              to="/products/ladder-cable-trays"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-900 hover:text-red-600"
            >
              View ladder cable tray product details <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <img
            src={cableTrayImage}
            alt="Ladder cable tray products for electrical and power infrastructure applications"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg"
          />
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Contractors & EPC Procurement">
            Cable Tray Requirements for Electrical Contractors and EPC Companies
          </SectionHeading>
          <p className="-mt-5 mb-6 max-w-3xl text-sm leading-relaxed text-slate-600">
            Cable support products should align with approved drawings, installation layouts, and procurement schedules.
            Share these engineering considerations so the required configuration can be reviewed:
          </p>
          <RequirementCards
            items={[
              ['Cable load and span', 'Confirm required load capacity and support spacing with the project engineer.'],
              ['Tray dimensions', 'Specify required width, side rail height, and overall length.'],
              ['Material and finish', 'Identify steel material, surface finish, and corrosion-protection specification.'],
              ['Installation accessories', 'List required bends, tees, reducers, connectors, and support arrangements.'],
              ['Project compliance', 'Share applicable standards and technical documents before ordering.'],
            ]}
          />
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div>
            <SectionHeading eyebrow="Engineering Considerations">Choosing the Right Ladder Cable Tray</SectionHeading>
            <Checklist
              items={[
                'Cable quantity, weight, and arrangement',
                'Required tray width and side rail height',
                'Material thickness and loading requirements',
                'Support span and installation method',
                'Indoor or outdoor installation conditions',
                'Required finish and applicable project standards',
                'Project drawings and bill of quantities',
              ]}
            />
            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              For outdoor or corrosive environments, specify the protective coating based on actual site conditions and engineering requirements.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Manufacturing Partner">Why Work with RK Engineering?</SectionHeading>
            <RequirementCards
              items={[
                ['Established since 2000', 'Manufacturing experience for industrial and electrical applications.'],
                ['Multiple tray categories', 'Ladder, perforated, raceway, and duct-type cable trays.'],
                ['In-house galvanizing', 'Capabilities for suitable steel products.'],
                ['Project specification review', 'Submit technical drawings, BOQs, and product requirements.'],
                ['Bulk enquiry support', 'Cable tray enquiries start at 500 metres minimum.'],
                ['International procurement', 'Discuss requirements and destination-specific supply arrangements.'],
              ]}
            />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <MarketsPanel description="RK Engineering welcomes enquiries from power sector buyers, EPC contractors, electrical contractors, and industrial procurement teams sourcing ladder cable trays for African projects." />
          <div>
            <SectionHeading eyebrow="Minimum Order: 500 Metres">Project Quotation Requirements</SectionHeading>
            <p className="text-sm leading-relaxed text-slate-600">
              Enquiries may include projects in the listed African markets, but supply availability and shipping
              arrangements must be confirmed for the intended destination. To help review your requirement, provide:
            </p>
            <Checklist
              items={[
                'Ladder tray dimensions, material, and thickness',
                'Required surface finish',
                'Total quantity in metres',
                'Fittings and accessories',
                'Technical drawings or BOQ, if available',
                'Destination country and delivery location',
              ]}
            />
            <div className="mt-6">
              <QuoteButton onClick={requestQuote}>Get a Bulk Order Quote</QuoteButton>
            </div>
          </div>
        </div>
      </section>
      <RelatedLandingPages currentPath={LANDING_PAGE_PATHS.ladder} />
      <FaqSection items={LADDER_FAQS} title="Ladder Cable Tray Questions" />
      <FocusedFinalCta
        title="Request a Ladder Cable Tray Quote"
        description="Planning an electrical infrastructure or power project in Africa? Contact RK Engineering to discuss your ladder cable tray requirements. Confirm product availability and shipping arrangements for your destination."
        onRequestQuote={requestQuote}
      />
    </>
  );
};
