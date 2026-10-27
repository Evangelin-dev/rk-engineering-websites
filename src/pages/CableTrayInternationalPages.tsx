import React from 'react';
import { ArrowRight, FileText, Globe2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import cableTrayImage from '../assets/images/products_cable_trays_1792669705857.jpg';
import manufacturingImage from '../assets/images/hero_cable_tray_plant_1792669704557.jpg';
import {
  ExportHero,
  FaqSection,
  FocusedFinalCta,
  LANDING_PAGE_PATHS,
  Checklist,
  LandingBreadcrumb,
  PRODUCT_TYPES,
  QuoteButton,
  RelatedLandingPages,
  RequirementCards,
  SectionHeading,
  type FaqItem,
} from './CableTrayAfricaPages.tsx';

interface InternationalLandingPageProps {
  onRequestQuote: (specs: string, cableTrayType?: string, enquiryType?: string) => void;
}

const MARKETS = ['Kenya', 'Tanzania', 'Uganda', 'South Africa', 'Nigeria', 'Ghana', 'Zambia', 'Botswana'];

const AFRICAN_MARKETS_NOTE =
  'These are enquiry markets, not guaranteed shipping destinations. Supply availability and shipping arrangements must be confirmed with RK Engineering for the intended destination.';

const marketPanel = (intro: string) => (
  <div className="rounded-xl bg-blue-950 p-6 text-white sm:p-8">
    <Globe2 aria-hidden="true" className="h-8 w-8 text-red-400" />
    <h3 className="mt-4 text-xl font-extrabold">African project enquiries</h3>
    <p className="mt-3 text-sm leading-relaxed text-blue-100">{intro}</p>
    <ul className="mt-5 grid grid-cols-2 gap-2 text-sm font-semibold">
      {MARKETS.map((market) => <li key={market} className="rounded-md bg-white/10 px-3 py-2">{market}</li>)}
    </ul>
    <p className="mt-5 text-xs leading-relaxed text-blue-200">{AFRICAN_MARKETS_NOTE}</p>
  </div>
);

const UsImportNote = () => (
  <p className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">
    US-specific compliance, import requirements, documentation, supply feasibility, and delivery arrangements must be
    confirmed for the specific product and order. Do not assume a product meets a particular US standard unless verified.
  </p>
);

const pageQuote = (
  onRequestQuote: InternationalLandingPageProps['onRequestQuote'],
  specs: string,
  cableTrayType: string,
  enquiryType: string,
) => () => onRequestQuote(specs, cableTrayType, enquiryType);

const OIL_GAS_FAQS: FaqItem[] = [
  {
    question: 'What types of cable trays are used in oil and gas facilities?',
    answer: 'Perforated, ladder, raceway, and duct-type cable trays may be used depending on the electrical layout, cable requirements, installation environment, and project specifications.',
  },
  {
    question: 'Are galvanized cable trays suitable for oil and gas projects?',
    answer: 'They may be suitable where the selected coating and product meet project environmental and engineering requirements. Confirm specifications for actual site conditions.',
  },
  {
    question: 'Can I request cable trays for refinery or petrochemical projects?',
    answer: 'Submit technical specifications, drawings, quantity, and destination for review.',
  },
  {
    question: 'What is the minimum order quantity?',
    answer: 'The minimum order quantity for cable tray enquiries is 500 metres.',
  },
  {
    question: 'Can RK Engineering review project drawings and BOQs?',
    answer: 'You can submit drawings and BOQs to communicate dimensions, quantities, and technical requirements for review.',
  },
  {
    question: 'Does RK Engineering accept enquiries for African oil and gas projects?',
    answer: 'African buyers and project procurement teams can submit enquiries. Supply availability and shipping arrangements must be confirmed for the intended destination.',
  },
  {
    question: 'How can I request a quotation?',
    answer: 'Email info@rkenggindia.com with product specifications, quantity, coating requirements, and delivery destination, or use the website enquiry form.',
  },
];

const POWER_FAQS: FaqItem[] = [
  {
    question: 'Which cable trays are suitable for power projects?',
    answer: 'Perforated, ladder, raceway, and duct-type cable trays may be suitable depending on electrical layout, cable loading, installation conditions, and project specifications.',
  },
  {
    question: 'Can cable trays be used in electrical substations?',
    answer: 'They can be used in suitable substation installations where the product configuration and routing comply with the approved electrical design.',
  },
  {
    question: 'Does RK Engineering supply cable trays for renewable energy projects?',
    answer: 'Buyers can submit requirements for solar and other renewable energy installations to confirm suitable products and supply arrangements.',
  },
  {
    question: 'What is the minimum order quantity?',
    answer: 'The minimum order quantity for cable tray enquiries is 500 metres.',
  },
  {
    question: 'Can I submit a bill of quantities for a power project?',
    answer: 'You can submit your BOQ, technical drawings, dimensions, and specifications for review.',
  },
  {
    question: 'Does RK Engineering accept enquiries from African buyers?',
    answer: 'African project buyers can contact RK Engineering to discuss requirements and confirm destination-specific supply arrangements.',
  },
  {
    question: 'How can I request a quotation?',
    answer: 'Email info@rkenggindia.com with product specifications, required quantity, and destination details, or submit the website enquiry form.',
  },
];

const USA_MANUFACTURER_FAQS: FaqItem[] = [
  {
    question: 'Does RK Engineering manufacture cable trays for industrial applications?',
    answer: 'RK Engineering manufactures cable tray products for industrial and electrical applications, including perforated, ladder, raceway, and duct-type cable trays.',
  },
  {
    question: 'Can US companies enquire about sourcing cable trays from India?',
    answer: 'US buyers can submit specifications, quantity, and delivery location to discuss manufacturing and international supply feasibility.',
  },
  {
    question: 'What is the minimum order quantity?',
    answer: 'The minimum order quantity for cable tray enquiries is 500 metres.',
  },
  {
    question: 'Can cable trays be supplied according to US project specifications?',
    answer: 'Buyers can submit project drawings and required standards for review. Applicable US-specific compliance and documentation must be confirmed before ordering.',
  },
  {
    question: 'What information is required for a quotation?',
    answer: 'Provide cable tray type, dimensions, material thickness, finish, quantity, applicable standards, and delivery location.',
  },
  {
    question: 'Does RK Engineering offer galvanized cable trays?',
    answer: 'RK Engineering has in-house hot-dip galvanizing capabilities for suitable steel products. Specify the required finish and coating standard for review.',
  },
];

const USA_EXPORT_FAQS: FaqItem[] = [
  {
    question: 'Can I import cable trays from India to the USA?',
    answer: 'US buyers can enquire about cable tray manufacturing and international supply. Product compliance, import requirements, and shipping feasibility must be confirmed for each order.',
  },
  {
    question: 'What is the minimum order quantity?',
    answer: 'The minimum order quantity for cable tray enquiries is 500 metres.',
  },
  {
    question: 'What types of cable trays can I request?',
    answer: 'Enquiries can cover perforated cable trays, ladder type cable trays, raceway cable trays, and cable tray ducts.',
  },
  {
    question: 'What documents should I confirm before importing?',
    answer: 'Depending on the shipment, buyers may need commercial invoices, packing lists, transport documents, and other applicable import or product documentation. Confirm exact requirements with your customs broker.',
  },
  {
    question: 'Can I send a BOQ or technical drawing?',
    answer: 'Provide your BOQ, drawings, required dimensions, coating specifications, and applicable standards so the requirements can be reviewed.',
  },
  {
    question: 'Can RK Engineering arrange shipping to the USA?',
    answer: 'Shipping arrangements and delivery terms must be discussed and confirmed with RK Engineering for the specific order and destination.',
  },
  {
    question: 'How can I request an export quotation?',
    answer: 'Email info@rkenggindia.com with cable tray specifications, quantity, and destination details, or submit the website enquiry form.',
  },
];

const USA_GALVANIZED_FAQS: FaqItem[] = [
  {
    question: 'What is a hot-dip galvanized cable tray?',
    answer: 'It is a steel cable support product protected with a zinc coating applied through a hot-dip galvanizing process to help resist corrosion.',
  },
  {
    question: 'Are galvanized cable trays suitable for outdoor industrial use?',
    answer: 'They can be suitable when coating, material, and product design meet the environmental conditions and engineering requirements of the installation.',
  },
  {
    question: 'What types of galvanized cable trays can I enquire about?',
    answer: 'You can enquire about perforated, ladder, raceway, and duct-type cable trays, subject to confirmation of the required product specification.',
  },
  {
    question: 'What is the minimum order quantity?',
    answer: 'The minimum order quantity for cable tray enquiries is 500 metres.',
  },
  {
    question: 'Can I request a specific galvanizing standard?',
    answer: 'Provide the required standard, coating thickness, and inspection criteria so the specifications can be reviewed.',
  },
  {
    question: 'Does RK Engineering supply products for US projects?',
    answer: 'US buyers can submit enquiries. Product compliance, availability, import requirements, and shipping arrangements must be confirmed for each order.',
  },
];

const ProductCategoryLinks: React.FC<{ description?: string }> = ({ description }) => (
  <>
    {description && <p className="mb-5 max-w-3xl text-sm leading-relaxed text-slate-600">{description}</p>}
    <div className="grid gap-3 sm:grid-cols-2">
      {PRODUCT_TYPES.map((product) => (
        <Link
          key={product.slug}
          to={`/products/${product.slug}`}
          className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold text-blue-950 transition-colors hover:border-blue-300 hover:bg-blue-50"
        >
          {product.name}
          <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-red-600" />
        </Link>
      ))}
    </div>
  </>
);

const BuyerQuoteSection: React.FC<{
  heading: string;
  description: string;
  items: readonly string[];
  onRequestQuote: () => void;
}> = ({ heading, description, items, onRequestQuote }) => (
  <section className="border-b border-slate-200 bg-blue-50 py-12 sm:py-14">
    <div className="mx-auto grid max-w-7xl gap-7 px-4 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-600">Minimum Order Quantity: 500 Metres</p>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">{heading}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">{description}</p>
        <Checklist items={items} />
      </div>
      <QuoteButton onClick={onRequestQuote}>Submit Your Requirements</QuoteButton>
    </div>
  </section>
);

export const OilGasCableTrayAfricaPage: React.FC<InternationalLandingPageProps> = ({ onRequestQuote }) => {
  const requestQuote = pageQuote(
    onRequestQuote,
    'Oil and gas project cable tray enquiry. Include facility type and location, tray type and dimensions, cable loading and support spacing, material and coating requirements, fittings, project drawings or BOQ, quantity in metres, and destination country.',
    'Not sure / Other',
    'Oil and Gas Project Enquiry',
  );

  return (
    <>
      <LandingBreadcrumb path={LANDING_PAGE_PATHS.oilGasAfrica} />
      <ExportHero
        label="Oil, Gas & Petrochemical Infrastructure"
        title="Cable Tray Systems for Oil and Gas Infrastructure"
        image={manufacturingImage}
        imageAlt="Industrial cable tray manufacturing facility for oil and gas project enquiries"
        onRequestQuote={requestQuote}
      >
        <p>
          Oil and gas facilities require carefully planned electrical cable routing for instrumentation, control
          systems, power distribution, and plant operations. RK Engineering manufactures cable tray products for
          industrial electrical installations and welcomes enquiries for projects across African markets.
        </p>
        <p>
          We support project-based enquiries from EPC contractors, oil and gas engineering companies, electrical
          contractors, and industrial procurement teams seeking products manufactured in India. Minimum order: 500 metres.
        </p>
      </ExportHero>

      <section className="border-b border-slate-200 bg-slate-50 py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Oil & Gas Applications">
            Cable Management for Refineries and Petrochemical Facilities
          </SectionHeading>
          <p className="mb-6 max-w-4xl text-sm leading-relaxed text-slate-600">
            Refineries, petrochemical plants, processing facilities, and related infrastructure use electrical systems
            throughout their operations. A suitable cable tray arrangement helps establish organized routes for power,
            control, and instrumentation cables according to the approved engineering design.
          </p>
          <RequirementCards
            items={[
              ['Oil and gas processing plants', 'Structured routes for electrical and control cables serving equipment, utility systems, and plant facilities.'],
              ['Refineries and petrochemical plants', 'Cable support may be incorporated into electrical layouts for processing units and control infrastructure, subject to engineering requirements.'],
              ['Oil storage and terminal facilities', 'Cable routes for storage terminals and related facilities, selected for the specific operating environment.'],
              ['Pipeline and pumping infrastructure', 'Pumping stations and pipeline facilities may require engineered electrical and instrumentation cable support.'],
              ['Offshore and coastal facilities', 'Marine and coastal exposure calls for particular attention to corrosion protection, material compatibility, and engineering specifications.'],
            ]}
          />
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div>
            <SectionHeading eyebrow="Project Selection">Selecting Cable Trays for Oil and Gas Environments</SectionHeading>
            <Checklist
              items={[
                'Environmental exposure: moisture, coastal conditions, chemical exposure, and site-specific factors',
                'Material and coating: steel material, protective finish, and coating standard from project documents',
                'Cable loading: cable arrangement, anticipated loading, and engineer-confirmed support spacing',
                'Tray configuration: perforated, ladder, raceway, or duct-type tray according to installation design',
                'Project requirements: applicable standards, drawings, and inspection requirements',
              ]}
            />
            <p className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">
              For hazardous or classified areas, cable tray selection alone does not establish suitability for the
              entire electrical installation. The overall design must meet the project’s applicable safety and electrical requirements.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Corrosion Protection">Hot-Dip Galvanizing for Industrial Cable Tray Applications</SectionHeading>
            <p className="text-sm leading-relaxed text-slate-600">
              Hot-dip galvanizing applies a zinc coating to suitable steel products to help protect them against
              corrosion. RK Engineering has in-house hot-dip galvanizing capabilities. Specify the required coating
              standard and installation conditions so requirements can be reviewed before quotation.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              The appropriate finish depends on the operating environment, project specifications, and applicable standards.
            </p>
            <Link to="/hot-dip-galvanized-cable-tray-africa" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-900 hover:text-red-600">
              Galvanized cable tray selection <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          {marketPanel('We welcome enquiries from companies involved in petroleum, refinery, petrochemical, and industrial infrastructure projects. Potential enquiry markets include Nigeria, Angola, Ghana, South Africa, Kenya, Tanzania, and other African countries.')}
          <div>
            <SectionHeading eyebrow="Why Choose RK Engineering">Cable Tray Supply for African Oil and Gas Projects</SectionHeading>
            <RequirementCards
              items={[
                ['Established in 2000', 'Experience in cable tray and galvanized steel product manufacturing.'],
                ['Multiple tray categories', 'Perforated, ladder, raceway, and cable tray duct options.'],
                ['In-house galvanizing', 'Hot-dip galvanizing capabilities for suitable steel products.'],
                ['Project documents', 'Submit technical drawings, BOQs, and required specifications for review.'],
                ['Bulk procurement', 'Cable tray enquiries start at 500 metres minimum.'],
                ['International enquiries', 'Discuss destination-specific supply arrangements with the team.'],
              ]}
            />
          </div>
        </div>
      </section>

      <BuyerQuoteSection
        heading="Minimum Order Quantity for Cable Trays: 500 Metres"
        description="For a project quotation, share the installation location, cable tray type, dimensions, material and coating requirements, quantity, and delivery destination."
        items={[
          'Cable tray type and required dimensions',
          'Steel thickness and material specification',
          'Galvanizing or coating requirements',
          'Total quantity in metres and required fittings',
          'Project drawings or BOQ, if available',
          'Destination country and delivery location',
        ]}
        onRequestQuote={requestQuote}
      />
      <RelatedLandingPages currentPath={LANDING_PAGE_PATHS.oilGasAfrica} />
      <FaqSection items={OIL_GAS_FAQS} title="Oil and Gas Cable Tray Questions" />
      <FocusedFinalCta
        title="Request a Cable Tray Quote for Your Oil and Gas Project"
        description="Planning a refinery, petrochemical, petroleum infrastructure, or oil and gas facility project in Africa? Contact RK Engineering to discuss your requirements. Availability and delivery arrangements must be confirmed for each destination."
        onRequestQuote={requestQuote}
      />
    </>
  );
};

export const PowerEnergyCableTrayAfricaPage: React.FC<InternationalLandingPageProps> = ({ onRequestQuote }) => {
  const requestQuote = pageQuote(
    onRequestQuote,
    'Power and energy project cable tray enquiry. Include routing layout, cable tray category, required width, side height, length and material thickness, cable loading and support spans, finish or coating, fittings, applicable standards, drawings or BOQ, quantity in metres, and destination country.',
    'Not sure / Other',
    'Power and Energy Project Enquiry',
  );

  return (
    <>
      <LandingBreadcrumb path={LANDING_PAGE_PATHS.powerEnergyAfrica} />
      <ExportHero
        label="Power Generation & Electrical Infrastructure"
        title="Cable Tray Systems for Africa’s Power and Energy Infrastructure"
        image={manufacturingImage}
        imageAlt="Cable tray manufacturing for power generation and energy infrastructure enquiries"
        onRequestQuote={requestQuote}
      >
        <p>
          Reliable cable routing is an important part of power generation and electrical infrastructure projects.
          RK Engineering manufactures cable trays for electrical and industrial applications and welcomes enquiries
          from power sector companies, EPC contractors, electrical contractors, and infrastructure procurement teams.
        </p>
        <p>Product range supports project requirements where organized cable routing and suitable cable support systems are needed. Minimum order: 500 metres.</p>
      </ExportHero>

      <section className="border-b border-slate-200 bg-slate-50 py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Power Generation & Distribution">
            Cable Tray Applications in Power and Energy Projects
          </SectionHeading>
          <RequirementCards
            items={[
              ['Power generation facilities', 'Cable tray systems can support suitable power, control, and auxiliary cable routes.'],
              ['Electrical substations', 'Substation projects may require cable support for control cables, protection systems, and other services according to approved design.'],
              ['Transmission and distribution infrastructure', 'Suitable facilities and supporting installations may require structured cable routing.'],
              ['Solar and renewable energy projects', 'Cable support for electrical connections and equipment should match installation design and environmental conditions.'],
              ['Industrial power distribution', 'Cable trays can organize routes connecting equipment, control systems, and power distribution components.'],
            ]}
          />
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Product Categories" description="The final selection should be based on cable loading, dimensions, support spacing, exposure, and project specifications.">
            Cable Tray Options for Power Sector Requirements
          </SectionHeading>
          <ProductCategoryLinks />
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div>
            <SectionHeading eyebrow="Technical Procurement">What Power Project Buyers Should Specify</SectionHeading>
            <p className="text-sm leading-relaxed text-slate-600">Complete technical information helps procurement teams obtain quotations that match project requirements.</p>
            <Checklist
              items={[
                'Cable routing layout and approximate installation areas',
                'Tray width, side height, length, and material thickness',
                'Cable loading and support spans per engineering design',
                'Required surface finish or galvanizing specification',
                'Bends, tees, connectors, reducers, covers, and supports',
                'Applicable standards, drawings, and inspection requirements',
              ]}
            />
          </div>
          {marketPanel('We welcome enquiries from companies involved in power generation, electrical infrastructure, renewable energy, and industrial development across African markets.')}
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Manufacturing Partner">Why Choose RK Engineering for Cable Tray Requirements?</SectionHeading>
          <RequirementCards
            items={[
              ['Established in 2000', 'Manufacturing experience in cable trays and galvanized steel products.'],
              ['Multiple product categories', 'Perforated, ladder, raceway, and duct-type cable trays.'],
              ['In-house hot-dip galvanizing', 'Galvanizing capabilities for suitable steel products.'],
              ['Project-based enquiries', 'Technical drawings and bills of quantities can be submitted for review.'],
              ['Bulk procurement', 'Minimum cable tray order quantity of 500 metres.'],
              ['International enquiry support', 'Discuss destination-specific supply and delivery arrangements.'],
            ]}
          />
        </div>
      </section>

      <BuyerQuoteSection
        heading="Minimum Order Quantity for Power Projects: 500 Metres"
        description="For a quotation, share the technical specifications and destination details for a new facility, infrastructure upgrade, or planned industrial installation."
        items={[
          'Required cable tray type',
          'Dimensions and material thickness',
          'Required finish or galvanizing specification',
          'Total quantity in metres',
          'Project drawings or bill of quantities',
          'Destination country and delivery location',
        ]}
        onRequestQuote={requestQuote}
      />
      <RelatedLandingPages currentPath={LANDING_PAGE_PATHS.powerEnergyAfrica} />
      <FaqSection items={POWER_FAQS} title="Power and Energy Cable Tray Questions" />
      <FocusedFinalCta
        title="Request a Cable Tray Quote for Your Power Project"
        description="Planning a power generation, electrical distribution, or renewable energy project in Africa? Discuss your cable tray requirements with RK Engineering and confirm destination-specific supply arrangements."
        onRequestQuote={requestQuote}
      />
    </>
  );
};

export const CableTrayManufacturerUsaPage: React.FC<InternationalLandingPageProps> = ({ onRequestQuote }) => {
  const requestQuote = pageQuote(
    onRequestQuote,
    'US industrial cable tray manufacturing enquiry. Include product category, dimensions, construction and material thickness, cable load and support span, finish, accessories, applicable project standards, testing or inspection documents, packaging, US delivery location, quantity in metres, and drawings or BOQ.',
    'Not sure / Other',
    'US Industrial Manufacturing Enquiry',
  );

  return (
    <>
      <LandingBreadcrumb path={LANDING_PAGE_PATHS.manufacturerUsa} />
      <ExportHero
        label="Industrial Manufacturing Enquiries — United States"
        title="Industrial Cable Tray Manufacturing for US Project Requirements"
        image={manufacturingImage}
        imageAlt="RK Engineering industrial manufacturing facility in India"
        onRequestQuote={requestQuote}
      >
        <p>
          Sourcing industrial cable trays for a project in the United States? RK Engineering &amp; Galvanizers Pvt. Ltd.
          manufactures cable tray products in India for industrial electrical installations and infrastructure applications.
        </p>
        <p>
          US-based industrial buyers, electrical contractors, equipment manufacturers, distributors, and procurement
          companies can submit requirements to discuss manufacturing and international supply. Minimum order: 500 metres.
        </p>
      </ExportHero>

      <section className="border-b border-slate-200 bg-slate-50 py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div>
            <SectionHeading eyebrow="US Industrial Facilities">Cable Tray Solutions for American Industrial Facilities</SectionHeading>
            <p className="text-sm leading-relaxed text-slate-600">
              Industrial facilities depend on organized cable routes connecting machinery, production equipment,
              control systems, and utility infrastructure. Product selection should follow the project design and
              intended application.
            </p>
            <Checklist
              items={[
                'Manufacturing plants and production facilities',
                'Warehouses and distribution centres',
                'Industrial machinery and equipment installations',
                'Commercial and industrial buildings',
                'Power distribution facilities',
                'Renewable energy installations',
                'Industrial infrastructure projects',
              ]}
            />
          </div>
          <img src={cableTrayImage} alt="Cable trays for industrial electrical cable routing" className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg" />
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Industrial Procurement" description="Product categories are considered according to the specified design and application. Share product details to discuss requirements.">
            Cable Tray Products for Industrial Procurement
          </SectionHeading>
          <RequirementCards
            items={[
              ['Perforated cable trays', 'Structured support with base openings for ventilation and drainage where appropriate for the design.'],
              ['Ladder cable trays', 'Side rails and cross members for suitable cable routing after loading and support spacing are evaluated.'],
              ['Raceway cable trays', 'A defined route for cable management that matches project layout and cable requirements.'],
              ['Cable tray ducts', 'A duct-style cable management option for installations requiring a defined pathway.'],
            ]}
          />
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div>
            <SectionHeading eyebrow="Sourcing from India">Technical Requirements for US Industrial Cable Tray Orders</SectionHeading>
            <Checklist
              items={[
                'Tray width, side height, length, thickness, and construction details',
                'Cable loading and support-span requirements from the project engineer',
                'Required material, surface finish, and corrosion protection',
                'Bends, tees, reducers, connectors, covers, and supports',
                'Applicable project standards, drawings, testing, and inspection documents',
                'Packaging, destination, freight arrangements, and delivery terms',
              ]}
            />
            <UsImportNote />
          </div>
          <div>
            <SectionHeading eyebrow="Manufacturing Capabilities">Why Consider RK Engineering?</SectionHeading>
            <RequirementCards
              items={[
                ['Established in 2000', 'More than 25 years of manufacturing experience.'],
                ['Cable tray manufacturing', 'Perforated, ladder, raceway, and duct-type cable trays.'],
                ['In-house hot-dip galvanizing', 'Capabilities for suitable steel products.'],
                ['Annual stated capacity', '12,000 MT cable tray manufacturing capacity, as stated by RK Engineering.'],
                ['Project-based enquiries', 'Buyers can provide drawings, BOQs, and technical specifications for review.'],
                ['Bulk orders', 'Cable tray enquiries start at 500 metres minimum.'],
              ]}
            />
          </div>
        </div>
      </section>

      <BuyerQuoteSection
        heading="US Buyer Enquiry Process"
        description="US buyers can share specifications and estimated order quantity to begin the quotation process. Supply feasibility, technical compliance, pricing, and delivery arrangements must be confirmed for each order."
        items={[
          'Cable tray type, dimensions, and material thickness',
          'Surface finish, coating, and accessories',
          'Applicable technical standards and documents',
          'Total quantity in metres and delivery location',
          'Drawings or BOQ, if available',
        ]}
        onRequestQuote={requestQuote}
      />
      <RelatedLandingPages currentPath={LANDING_PAGE_PATHS.manufacturerUsa} />
      <FaqSection items={USA_MANUFACTURER_FAQS} title="US Industrial Cable Tray Questions" />
      <FocusedFinalCta
        title="Request a Cable Tray Manufacturing Quote"
        description="Contact RK Engineering to discuss product specifications, bulk requirements, and international sourcing needs. Minimum order quantity: 500 metres."
        onRequestQuote={requestQuote}
      />
    </>
  );
};

export const CableTrayExporterUsaPage: React.FC<InternationalLandingPageProps> = ({ onRequestQuote }) => {
  const requestQuote = pageQuote(
    onRequestQuote,
    'US cable tray import/export enquiry. Include company and contact details, cable tray type, dimensions, material thickness, surface finish, quantity in metres, drawings or BOQ, destination port or US delivery location, packaging, required documents, and delivery schedule.',
    'Not sure / Other',
    'US Export / Import Enquiry',
  );

  return (
    <>
      <LandingBreadcrumb path={LANDING_PAGE_PATHS.exporterUsa} />
      <ExportHero
        label="International Cable Tray Procurement"
        title="Cable Tray Exporter from India to the USA"
        image={cableTrayImage}
        imageAlt="Cable tray products for international procurement enquiries from the USA"
        onRequestQuote={requestQuote}
      >
        <p>
          Looking to source cable trays from India for a US business or project? RK Engineering manufactures industrial
          cable tray systems and welcomes enquiries from international buyers seeking a manufacturing partner for bulk requirements.
        </p>
        <p>
          Product specifications, order quantities, packaging, shipping terms, and documentation requirements can be
          discussed and confirmed before an order. Minimum order: 500 metres.
        </p>
      </ExportHero>

      <section className="border-b border-slate-200 bg-slate-50 py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div>
            <SectionHeading eyebrow="International Procurement">Cable Tray Products for Export Enquiries</SectionHeading>
            <p className="mb-5 text-sm leading-relaxed text-slate-600">
              US importers, industrial distributors, electrical procurement companies, and project buyers can share
              product types and technical details for review.
            </p>
            <ProductCategoryLinks />
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <FileText aria-hidden="true" className="h-8 w-8 text-red-600" />
            <h2 className="mt-4 text-xl font-extrabold text-blue-950">What US Buyers Should Know Before Importing</h2>
            <div className="mt-5 space-y-4">
              {[
                ['Product specifications', 'Confirm dimensions, material thickness, finish, fittings, and applicable project standards.'],
                ['Import requirements', 'Confirm applicable US import regulations, tariff classification, duties, and product documentation with your customs broker or import adviser.'],
                ['Export documentation', 'Agree on commercial invoice, packing list, transport documents, certificate of origin if required, and other shipment documents.'],
                ['Shipping terms', 'Discuss destination, port, freight responsibilities, insurance, and agreed Incoterms.'],
                ['Order quantity and packaging', 'Confirm the 500 metre minimum and packaging for safe handling and international transport.'],
              ].map(([title, detail]) => (
                <article key={title}>
                  <h3 className="text-sm font-bold text-slate-900">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{detail}</p>
                </article>
              ))}
            </div>
            <UsImportNote />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div>
            <SectionHeading eyebrow="Manufacturing Partner">Why Source Cable Trays from RK Engineering?</SectionHeading>
            <RequirementCards
              items={[
                ['Indian manufacturing', 'Cable trays manufactured by RK Engineering & Galvanizers Pvt. Ltd. in India.'],
                ['Established in 2000', 'More than 25 years of manufacturing experience.'],
                ['Multiple product categories', 'Perforated, ladder, raceway, and duct-type cable trays.'],
                ['In-house galvanizing', 'Capabilities for suitable steel products.'],
                ['Stated manufacturing capacity', '12,000 MT annual cable tray manufacturing capacity.'],
                ['Export enquiry support', 'Discuss packaging, documentation, commercial terms, and shipping requirements.'],
              ]}
            />
          </div>
          <div>
            <SectionHeading eyebrow="Request Export Pricing">Information for a US Export Quotation</SectionHeading>
            <p className="text-sm leading-relaxed text-slate-600">For a useful quotation, include the following details in your enquiry:</p>
            <Checklist
              items={[
                'Company name and business contact details',
                'Cable tray type, dimensions, and material thickness',
                'Surface finish or coating specification',
                'Total quantity in metres',
                'Technical drawings or BOQ, if available',
                'US delivery location or destination port',
                'Required delivery schedule',
              ]}
            />
            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              The team can review the information and confirm whether requested specifications and delivery arrangements can be supported.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-blue-50 py-12 sm:py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-600">Minimum Order: 500 Metres</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">Submit Your Import Requirement</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
              Share your specifications, packaging needs, documentation expectations, shipping terms, quantity, and US destination.
              Applicable import requirements and delivery arrangements must be confirmed before ordering.
            </p>
          </div>
          <QuoteButton onClick={requestQuote}>Request an Export Quote</QuoteButton>
        </div>
      </section>
      <RelatedLandingPages currentPath={LANDING_PAGE_PATHS.exporterUsa} />
      <FaqSection items={USA_EXPORT_FAQS} title="US Cable Tray Import Questions" />
      <FocusedFinalCta
        title="Start Your Cable Tray Import Enquiry"
        description="Contact RK Engineering to discuss industrial cable tray specifications, bulk requirements, and export arrangements from India. Minimum order quantity: 500 metres."
        onRequestQuote={requestQuote}
      />
    </>
  );
};

export const GalvanizedCableTrayUsaPage: React.FC<InternationalLandingPageProps> = ({ onRequestQuote }) => {
  const requestQuote = pageQuote(
    onRequestQuote,
    'US galvanized cable tray enquiry. Include cable tray type and dimensions, steel thickness and material, galvanizing standard and coating thickness, cable loading and support spacing, environmental conditions, required standards and documentation, quantity in metres, drawings or BOQ, and US delivery location.',
    'Not sure / Other',
    'US Galvanized Cable Tray Enquiry',
  );

  return (
    <>
      <LandingBreadcrumb path={LANDING_PAGE_PATHS.galvanizedUsa} />
      <ExportHero
        label="Corrosion Protection for US Industrial Enquiries"
        title="Hot Dip Galvanized Cable Tray for US Industrial Applications"
        image={cableTrayImage}
        imageAlt="Galvanized cable tray products for industrial application enquiries"
        onRequestQuote={requestQuote}
      >
        <p>
          Selecting the right cable tray finish is important for industrial electrical installations, particularly
          where steel may be exposed to moisture, outdoor conditions, or industrial pollutants.
        </p>
        <p>
          RK Engineering manufactures cable trays and has in-house hot-dip galvanizing capabilities for suitable steel
          products. US buyers can submit requirements for review. Minimum order: 500 metres.
        </p>
      </ExportHero>

      <section className="border-b border-slate-200 bg-slate-50 py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div>
            <SectionHeading eyebrow="Corrosion Protection">Why Specify Hot-Dip Galvanized Cable Trays?</SectionHeading>
            <p className="text-sm leading-relaxed text-slate-600">
              Hot-dip galvanizing applies a zinc coating to steel to help protect it against corrosion. When properly
              specified for operating conditions, galvanized steel cable trays can be suitable for a range of industrial installations.
            </p>
            <Checklist
              items={[
                'Corrosion protection in suitable service conditions',
                'Coating selection for outdoor exposure to rain and moisture',
                'Industrial use in factories, utility areas, and infrastructure',
                'Material and coating choices as part of maintenance planning',
                'Project-specific coating requirements and engineering standards',
              ]}
            />
            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              Actual performance depends on environment, coating specification, installation conditions, and maintenance practices.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <ShieldCheck aria-hidden="true" className="h-8 w-8 text-red-600" />
            <h2 className="mt-4 text-xl font-extrabold text-blue-950">Galvanized Cable Tray Options</h2>
            <div className="mt-5 space-y-4">
              {[
                ['Hot-dip galvanized perforated cable tray', 'Openings along the tray base for suitable routing; specify project dimensions, thickness, and coating.'],
                ['Hot-dip galvanized ladder cable tray', 'Side rails and cross members for suitable cable runs after loading and span criteria are evaluated.'],
                ['Galvanized raceway cable tray', 'A structured electrical cable route configured to match the installation layout.'],
                ['Galvanized cable tray duct', 'A duct-style cable management option for a defined cable pathway.'],
              ].map(([title, detail]) => (
                <article key={title}>
                  <h3 className="text-sm font-bold text-slate-900">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{detail}</p>
                </article>
              ))}
            </div>
            <p className="mt-5 border-t border-slate-100 pt-4 text-xs leading-relaxed text-slate-500">
              Product availability, material finish, and coating specifications should be confirmed before ordering.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Industrial Applications">Applications in US Industrial Facilities</SectionHeading>
          <RequirementCards
            items={[
              ['Manufacturing plants', 'Organized cable routing around machinery, production equipment, and industrial utility systems.'],
              ['Warehouses and distribution centres', 'Cable trays may be used for suitable power, lighting, and building service installations.'],
              ['Outdoor industrial installations', 'Consider moisture exposure, environmental conditions, and the appropriate corrosion protection specification.'],
              ['Energy and utility facilities', 'Cable support for routing where the selected product meets project design requirements.'],
              ['Commercial and industrial buildings', 'Cable management for suitable building electrical systems.'],
            ]}
          />
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div>
            <SectionHeading eyebrow="Technical Procurement">Specifications US Buyers Should Confirm</SectionHeading>
            <Checklist
              items={[
                'Tray width, side height, length, and construction',
                'Steel thickness and project mechanical requirements',
                'Coating thickness, applicable galvanizing standard, and inspection criteria',
                'Expected cable loading and support spacing',
                'Indoor/outdoor use, moisture exposure, and corrosive conditions',
                'Applicable US project standards, documents, and required product certifications',
              ]}
            />
            <UsImportNote />
          </div>
          <div>
            <SectionHeading eyebrow="Manufacturing Partner">Why Work with RK Engineering?</SectionHeading>
            <RequirementCards
              items={[
                ['Established in 2000', 'More than 25 years of manufacturing experience.'],
                ['Multiple cable tray types', 'Perforated, ladder, raceway, and duct-type cable trays.'],
                ['In-house galvanizing', 'Integrated capabilities for suitable steel products.'],
                ['Stated annual capacity', '12,000 MT annual cable tray manufacturing capacity.'],
                ['Technical enquiry support', 'Submit specifications, drawings, and BOQs for review.'],
                ['Bulk orders', 'Cable tray enquiries start at a 500 metre minimum.'],
              ]}
            />
          </div>
        </div>
      </section>

      <BuyerQuoteSection
        heading="Request Pricing for Galvanized Cable Trays"
        description="Share technical and commercial requirements so the requested product configuration and US delivery location can be reviewed. Supply feasibility must be confirmed."
        items={[
          'Cable tray type and dimensions',
          'Steel thickness and material requirements',
          'Galvanizing standard and coating thickness',
          'Quantity in metres and project drawings or BOQ',
          'Required technical standards and documentation',
          'US delivery location',
        ]}
        onRequestQuote={requestQuote}
      />
      <RelatedLandingPages currentPath={LANDING_PAGE_PATHS.galvanizedUsa} />
      <FaqSection items={USA_GALVANIZED_FAQS} title="US Galvanized Cable Tray Questions" />
      <FocusedFinalCta
        title="Get a Quote for Hot-Dip Galvanized Cable Trays"
        description="Discuss specifications and bulk requirements for a US industrial facility or infrastructure project. Confirm product compliance, import requirements, availability, and shipping arrangements for each order."
        onRequestQuote={requestQuote}
      />
    </>
  );
};
