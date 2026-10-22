export interface ProcessStep {
  number: string;
  title: string;
  shortDesc: string;
  details: string;
  qaChecks: string[];
}

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  solutions: string[];
  specs: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'export' | 'manufacturing' | 'standards';
}

export const COMPANY_STATS = [
  { label: 'Established', value: '2000', context: '25+ Years Experience' },
  { label: 'Annual Cable Tray Capacity', value: '12,000 MT', context: 'Perforated, Ladder & Ducts' },
  { label: 'Annual Galvanizing Capacity', value: '24,000 MT', context: 'In-House Hot-Dip Zinc Kettle' },
  { label: 'Global Certifications', value: 'ISO & CE', context: 'ISO 9001, 14001, 45001' },
];

export const HIGHLIGHTS = [
  {
    title: 'Established in 2000',
    description: 'More than 25 years of continuous engineering experience in heavy steel fabrication, cable management, and surface protection.',
    metric: '25+ Years',
    badge: 'Track Record'
  },
  {
    title: 'ISO-Certified Operations',
    description: 'Triple-certified management systems covering Quality (ISO 9001:2015), Environmental (ISO 14001:2015), and Safety (ISO 45001:2018).',
    metric: 'ISO & CE',
    badge: 'Compliance'
  },
  {
    title: '12,000 MT Cable Tray Capacity',
    description: 'High-volume production facility with roll-forming lines, automated CNC perforations, and robotic welding stations.',
    metric: '12,000 MT',
    badge: 'Volume'
  },
  {
    title: '24,000 MT Galvanizing Capacity',
    description: 'Massive in-house hot-dip galvanizing plant with industrial molten zinc kettles supporting seamless quality control.',
    metric: '24,000 MT',
    badge: 'Integrated'
  },
  {
    title: 'In-House Hot-Dip Galvanizing',
    description: 'Integrated manufacturing eliminates third-party transport delays, ensuring uniform coating thickness and zinc adherence.',
    metric: '100% In-House',
    badge: 'Quality Control'
  },
  {
    title: 'Custom Manufacturing',
    description: 'Full engineering assessment against customer CAD drawings, non-standard widths, custom gauges, and tailored hole matrices.',
    metric: 'Bespoke CAD',
    badge: 'Engineering'
  },
  {
    title: 'International Enquiries',
    description: 'Dedicated export logistics desk providing CFR/CIF/FOB quotations, port clearance coordination, and seaworthy packing.',
    metric: 'Global Export',
    badge: 'Logistics'
  },
  {
    title: 'Industrial Project Focus',
    description: 'Mission-critical supply for power utilities, solar parks, petrochemical complexes, hyperscale data centres, and mining.',
    metric: '500+ Projects',
    badge: 'Sectors'
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Integrated Manufacturing & Galvanizing',
    description: 'Our in-house hot-dip galvanizing facility supports the production and surface treatment of applicable steel products under one roof, cutting lead times and eliminating transit handling damage.',
    points: ['No third-party galvanizing dependencies', 'Controlled molten zinc bath at 450°C', 'Consistent 80–120 micron coating thickness']
  },
  {
    title: 'Quality Management Systems',
    description: 'RK Engineering lists ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 management system certifications alongside CE marking for designated cable trays.',
    points: ['ISO 9001, 14001, and 45001 certified', 'Traceable heat-wise chemical test reports', 'CE-compliant structural assessments']
  },
  {
    title: 'Project-Specific Engineering',
    description: 'Submit your technical drawings, dimensions, material grades, coating requirements, and load deflection criteria for rapid manufacturing feasibility review.',
    points: ['Custom gauge thickness from 1.2mm to 3.5mm', 'Non-standard width & flange configurations', 'Bespoke coupler and bracket accessories']
  },
  {
    title: 'Industrial Production Capacity',
    description: 'With stated annual capacities of 12,000 MT for cable trays and 24,000 MT for hot-dip galvanizing, we accommodate massive utility and infrastructure tenders comfortably.',
    points: ['12,000 MT annual cable tray capacity', '24,000 MT annual hot-dip galvanizing', 'Multi-shift rapid dispatch scalability']
  },
  {
    title: 'Rigorous Inspection & Documentation',
    description: 'Quality checks and documentation aligned with agreed product specifications. We provide complete Mill Test Certificates (EN 10204 3.1) and welcome TPI.',
    points: ['Elcometer magnetic zinc thickness verification', 'Uniformity Preece test & knife adhesion check', 'Welcome TPI (SGS, TUV, Bureau Veritas)']
  },
  {
    title: 'Export Enquiry & Shipping Support',
    description: 'International buyers can coordinate ocean freight, custom container stuffing, phytosanitary fumigated wooden bundling, and destination documentation.',
    points: ['Export to USA, Africa & Middle East', 'Container optimization for 20ft/40ft HC', 'Clear Incoterms: FOB, CFR, CIF, DAP']
  },
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'power-generation',
    name: 'Power Generation & Distribution',
    tagline: 'High-voltage transmission and substation infrastructure',
    description: 'Cable routing and related galvanized steel products designed to handle massive cable weights, thermal fluctuations, and heavy electromagnetic loads in power plants and substations.',
    solutions: ['Heavy-duty ladder cable trays', 'GI earthing flats & grounding electrodes', 'Substation gantry steel hardware'],
    specs: 'Span load up to 250 kg/m at 3.0 m span · ASTM A123 / IS 2629'
  },
  {
    id: 'renewable-energy',
    name: 'Renewable Energy',
    tagline: 'Solar parks and wind farm balance-of-system solutions',
    description: 'Engineered cable management and galvanized steel mounting structures engineered for utility-scale solar farms and wind parks facing extreme desert and coastal UV exposure.',
    solutions: ['Ground-mounted solar racking purlins', 'Perforated trays with UV/dust covers', 'Copper-bonded earthing conductors'],
    specs: 'Wind load tested up to 180 km/h · 25-Year zinc longevity'
  },
  {
    id: 'oil-and-gas',
    name: 'Oil & Gas',
    tagline: 'Refinery, offshore, and petrochemical facilities',
    description: 'Heavy corrosion-resistant cable trays and structural supports designed for petrochemical plants and offshore marine atmospheres subject to sulfur, hydrocarbons, and salt spray.',
    solutions: ['Hot-dip galvanized ladder trays (120µm+)', 'SS 316 cable trays & brackets', 'Explosion-zone raceway trunking'],
    specs: 'BS EN ISO 1461 high-zinc density · Spark-free grounding'
  },
  {
    id: 'petrochemical-manufacturing',
    name: 'Petrochemical & Manufacturing',
    tagline: 'Process facilities, steel mills, and chemical plants',
    description: 'Robust cable management products engineered for aggressive industrial environments with continuous vibration, thermal cycling, and chemical fumes.',
    solutions: ['Perforated cable trays with snap-on covers', 'Heavy industrial cable ducts', 'Structural steel equipment brackets'],
    specs: 'Continuous side-rail stiffeners · Chemical resistant coatings'
  },
  {
    id: 'telecommunications',
    name: 'Telecommunications',
    tagline: 'Cell towers, exchange hubs, and fiber backbones',
    description: 'Cable routing systems and galvanized structural steel brackets for telecom towers, fiber distribution racks, and outdoor communication corridors.',
    solutions: ['Lightweight perforated trays', 'Vertical ladder cable risers', 'GI earthing strips for lightning protection'],
    specs: 'Pre-galvanized & powder-coated finishes · Rapid bolt assembly'
  },
  {
    id: 'commercial-buildings',
    name: 'Commercial & Industrial Buildings',
    tagline: 'Commercial high-rises, logistics hubs, and factories',
    description: 'Aesthetic, safe, and easily inspectable raceway and tray ducting systems for commercial complexes, shopping malls, and industrial warehouses.',
    solutions: ['Architectural cable raceways', 'Perforated trunking with screw covers', 'Suspended ceiling trapeze supports'],
    specs: 'IS 513 / IS 1079 · Clean aesthetic finish'
  },
  {
    id: 'infrastructure-railways',
    name: 'Infrastructure & Railways',
    tagline: 'High-speed rail, metro stations, bridges, and tunnels',
    description: 'Galvanized steel products and cable trays engineered to withstand train vibration, tunnel moisture, and strict flame-retardant electrical transit codes.',
    solutions: ['Heavy gauge galvanized cable ducts', 'Traction earthing materials', 'Tunnel side-wall cantilever supports'],
    specs: 'Zero halogen compatibility · Dynamic vibration endurance'
  },
  {
    id: 'data-centres',
    name: 'Data Centres',
    tagline: 'Hyperscale server halls and network rooms',
    description: 'High-density cable management systems for overhead and under-floor routing of power feeders and structured copper/fiber cabling with optimum airflow.',
    solutions: ['Overhead ladder grid systems', 'Divided wire & raceway channels', 'Precision earthing busbars'],
    specs: 'Anti-zinc whisker compliance · Smooth zero-burr edges'
  },
  {
    id: 'water-treatment',
    name: 'Water Treatment',
    tagline: 'Desalination plants and wastewater facilities',
    description: 'High-humidity and chemical corrosion-resistant cable tray solutions designed for wastewater aeration basins, pumping stations, and reverse osmosis plants.',
    solutions: ['Extra heavy HDG cable trays', 'Stainless steel SS304/SS316 trays', 'Corrosion-proof mounting clamps'],
    specs: 'Marine environment grade C4/C5 · Continuous immersion resilience'
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Raw Material Inspection',
    shortDesc: 'Verification of prime structural steel sheets and zinc ingots',
    details: 'Review incoming prime mild steel coils and plates (IS 2062 / IS 1079 / CRCA) against purchase orders. Zinc ingots verified for 99.995% purity. Heat-wise Mill Test Certificates (MTC) and chemical composition spectro-analysis are logged.',
    qaChecks: ['Spectrometer chemical analysis', 'Tensile & yield strength testing', 'Surface defect & thickness micrometry']
  },
  {
    number: '02',
    title: 'Precision Fabrication',
    shortDesc: 'CNC punching, shearing, roll forming, and structural welding',
    details: 'Precision cutting, CNC punching for uniform perforations, and cold roll forming of side channels. Rungs and structural members are welded or mechanically swaged following approved shop drawings and dimensional tolerance limits.',
    qaChecks: ['CNC dimensional tolerance check (±1mm)', 'Weld penetration & integrity inspection', 'Deburring & sharp edge elimination']
  },
  {
    number: '03',
    title: 'Hot-Dip Galvanizing',
    shortDesc: '7-tank chemical pre-treatment and 450°C molten zinc immersion',
    details: 'Automated 7-stage pre-treatment: Caustic degreasing, water rinse, hydrochloric acid pickling for scale removal, double rinse, fluxing (zinc ammonium chloride), and pre-heating. Steel is immersed into prime molten zinc at 450°C to create an intermetallic zinc-iron alloy bond.',
    qaChecks: ['Zinc bath temperature log at 450°C ± 5°C', 'Flux specific gravity & pH monitoring', 'Controlled withdrawal rate for uniform coating']
  },
  {
    number: '04',
    title: 'Quality Inspection',
    shortDesc: 'Elcometer coating thickness, Preece test, and bend adhesion',
    details: 'Every batch undergoes rigorous quality assurance: Digital Elcometer checks for 80–120 micron coating thickness, Preece test for coating uniformity, knife adhesion check, and full dimensional verification against client approval drawings.',
    qaChecks: ['Magnetic coating thickness (ASTM A123)', 'Preece test for zinc uniformity (IS 2633)', 'Visual inspection for dross & roughness']
  },
  {
    number: '05',
    title: 'Packing & Identification',
    shortDesc: 'Export-grade packaging with weatherproofing and tags',
    details: 'Products are bundled with heavy-duty steel strapping, edge corner guards, wooden separator battens, and moisture-barrier shrink wrapping. Each bundle is tagged with heat numbers, product size, piece count, project reference, and barcode labels.',
    qaChecks: ['Fumigated ISPM-15 wooden battens', 'Clear weatherproof labeling & batch tags', 'Bundle count and weight verification']
  },
  {
    number: '06',
    title: 'Dispatch & Export Coordination',
    shortDesc: 'Container stuffing, port customs clearance, and global ocean freight',
    details: 'Container stuffing optimization for 20ft and 40ft High Cube containers. Loading supervised to prevent transit damage. Complete export documentation prepared: Bill of Lading, Certificate of Origin, Packing List, Commercial Invoice, and Test Reports.',
    qaChecks: ['Container weight distribution check', 'Moisture desiccant bags placed inside', 'Seals logged with port dispatch manifest']
  },
];

export const TIMELINE_MILESTONES = [
  {
    year: '2000',
    title: 'Company Established',
    description: 'RK Engineering began its journey with a strong foundation in structural steel fabrication and precision industrial engineering in India.'
  },
  {
    year: '2007',
    title: 'Cable Tray Manufacturing Expansion',
    description: 'Commissioned specialized roll-forming lines and automated punching presses to address growing domestic and international demand for cable management systems.'
  },
  {
    year: '2015',
    title: 'Integrated ISO Certifications',
    description: 'Attained triple management system certifications: ISO 9001 (Quality), ISO 14001 (Environment), and ISO 45001 (Occupational Health & Safety), standardizing plant QA.'
  },
  {
    year: '2020',
    title: 'Export Expansion into Africa & Middle East',
    description: 'Expanded global export supply chain, delivering high-volume cable trays and galvanizing contracts for major EPC infrastructure projects in Africa and the Middle East.'
  },
  {
    year: 'Today',
    title: 'Global Manufacturing Partner',
    description: '12,000 MT annual cable tray capacity and 24,000 MT hot-dip galvanizing capacity, serving global EPC contractors, power utilities, and industrial buyers worldwide.'
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'What industrial products does RK Engineering manufacture?',
    answer: 'RK Engineering lists perforated cable trays, ladder cable trays, raceway systems, cable tray ducts, earthing materials, solar mounting structures, and hot-dip galvanized steel products.'
  },
  {
    id: 'faq-2',
    category: 'export',
    question: 'Does RK Engineering accept international export enquiries?',
    answer: 'Yes. International buyers can submit enquiries for all listed products. Product availability, quantities, destination, shipping arrangements, and commercial terms (FOB, CFR, CIF) are confirmed for each order.'
  },
  {
    id: 'faq-3',
    category: 'export',
    question: 'Can I request a quotation for delivery to Africa?',
    answer: 'You can submit a project enquiry specifying the African destination country, product requirements, quantities, and delivery location. We regularly supply EPC contractors and distributors across African markets including Kenya, Nigeria, Ghana, Tanzania, and South Africa.'
  },
  {
    id: 'faq-4',
    category: 'export',
    question: 'Can US buyers enquire about cable trays manufactured in India?',
    answer: 'Yes. US buyers can submit their requirements for assessment. Product specifications, applicable US project standards (such as NEMA VE-1 and ASTM A123), import requirements, and ocean shipping arrangements should be verified before ordering.'
  },
  {
    id: 'faq-5',
    category: 'manufacturing',
    question: 'Can products be manufactured to customer drawings?',
    answer: 'You can submit drawings and technical specifications for review. Manufacturing feasibility, accepted tolerances, material grades, coating requirements, and responsibilities are assessed and agreed before production.'
  },
  {
    id: 'faq-6',
    category: 'manufacturing',
    question: 'What are RK Engineering\'s stated annual production capacities?',
    answer: 'The company states an annual cable tray capacity of 12,000 MT and a hot-dip galvanizing capacity of 24,000 MT. Confirm current availability and production scheduling for your specific order volume.'
  },
  {
    id: 'faq-7',
    category: 'standards',
    question: 'Which certifications does RK Engineering list?',
    answer: 'The website lists ISO 9001:2015 (Quality), ISO 14001:2015 (Environment), and ISO 45001:2018 (Safety) management system certifications, and displays a CE certificate relating to specified cable tray products.'
  },
  {
    id: 'faq-8',
    category: 'export',
    question: 'What information is required for an export quotation?',
    answer: 'Provide the product name, drawings or specifications, dimensions (width, height, thickness), material and finish requirements, order quantity, destination country, delivery port/location, and expected delivery schedule.'
  },
  {
    id: 'faq-9',
    category: 'manufacturing',
    question: 'Can RK Engineering provide hot-dip galvanized products?',
    answer: 'Yes. Hot-dip galvanized products are a core capability. The company operates an in-house hot-dip galvanizing facility with 24,000 MT annual capacity, ensuring full quality control and rapid turnaround.'
  },
  {
    id: 'faq-10',
    category: 'general',
    question: 'How can I contact RK Engineering for an international order?',
    answer: 'Send your requirements directly to info@rkenggindia.com, call +91 84220 44452, or use our interactive Request an Export Quote form on this website.'
  },
];
