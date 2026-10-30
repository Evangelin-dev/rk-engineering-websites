import type { ProductImage } from './productImages.ts';

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface ProductDetail {
  slug: string;
  name: string;
  group: string;
  navigationLabel?: string;
  image: ProductImage;
  imageAlt?: string;
  description: string;
  overview: string;
  applications: string[];
  requirements: string[];
  technicalSpecifications?: string[];
  variants?: string[];
  faqs: ProductFaq[];
  related: string[];
}

export interface ProductGroup {
  id: string;
  title: string;
  overview: string;
  exportText: string;
  exportRequirements: string[];
}

export interface ProductNavigationCategory {
  id: string;
  label: string;
  backLabel: string;
  group: string;
  productSlugs: string[];
  landingPages?: { label: string; path: string }[];
}

export const PRODUCT_NAVIGATION_CATEGORIES: ProductNavigationCategory[] = [
  {
    id: 'cable-trays',
    label: 'Cable Tray',
    backLabel: 'Cable Tray & Duct Products',
    group: 'cable',
    productSlugs: ['perforated-cable-trays', 'ladder-cable-trays', 'raceway-cable-trays', 'cable-tray-ducts'],
    landingPages: [{ label: 'Powder Coated Cable Tray', path: '/powder-coated-cable-tray/' }],
  },
  {
    id: 'earthing',
    label: 'Earthing Materials',
    backLabel: 'Earthing Materials',
    group: 'earthing',
    productSlugs: ['earthing-flats', 'earthing-electrodes', 'junction-boxes', 'gi-wire', 'copper-earthing-strips'],
  },
  {
    id: 'solar',
    label: 'Solar Mounting Structure',
    backLabel: 'Solar Mounting Structures',
    group: 'solar',
    productSlugs: [
      'ground-mounted-solar-structures',
      'rooftop-solar-structures',
      'solar-tracker-structures',
      'solar-car-parking-structures',
      'solar-walkway-structures',
    ],
  },
  {
    id: 'galvanized-steel',
    label: 'Hot Dip Galvanizing',
    backLabel: 'Hot-Dip Galvanized Products',
    group: 'galvanized',
    productSlugs: [
      'galvanized-steel-angles',
      'galvanized-construction-channels',
      'galvanized-high-mast-poles',
      'galvanized-pipes',
      'galvanized-h-beams',
      'galvanized-crash-barriers',
      'galvanized-handrails',
      'solar-mounting-channels',
      'galvanized-steel-gratings',
      'galvanized-fabricated-beams',
      'galvanized-tor-rods',
      'galvanized-chequered-plates',
    ],
    landingPages: [{ label: 'Pre-Galvanized Steel Products', path: '/pre-galvanized-steel-products/' }],
  },
  {
    id: 'towers',
    label: 'Towers',
    backLabel: 'Towers & Power Infrastructure',
    group: 'towers',
    productSlugs: [
      'transmission-towers',
      'telecom-towers',
      'transmission-monopoles',
      'power-distribution-poles',
      'substation-structures',
    ],
  },
];

export const getProductNavigationCategory = (group: string): ProductNavigationCategory | undefined =>
  PRODUCT_NAVIGATION_CATEGORIES.find((category) => category.group === group);

export const PRODUCT_GROUPS: Record<string, ProductGroup> = {
  cable: {
    id: 'cable',
    title: 'Cable tray systems for electrical infrastructure',
    overview:
      'Cable tray systems support and organize power, control, instrumentation, and communication cables across industrial and commercial installations. Selection is based on installation conditions, cable arrangements, material specifications, and project drawings.',
    exportText:
      'RK Engineering welcomes cable tray enquiries from electrical contractors, EPC companies, industrial distributors, project procurement managers, and infrastructure developers sourcing products from India for projects in Africa and the USA. Destination coverage, product suitability, and shipping arrangements should be confirmed for each order.',
    exportRequirements: [
      'Tray type, dimensions, material, and coating requirements',
      'Route drawings, fittings, cable loading, and support spans',
      'Applicable project standards and destination',
    ],
  },
  earthing: {
    id: 'earthing',
    title: 'Earthing components for project-specific grounding systems',
    overview:
      'Earthing materials are conductive components used to establish grounding and bonding connections in electrical installations. System performance depends on the complete grounding design, connection quality, soil conditions, corrosion exposure, installation, and project requirements.',
    exportText:
      'The source document welcomes enquiries from electrical EPC contractors, substation contractors, industrial procurement teams, MEP consultants, utility projects, and international distributors. Destination-specific availability, documentation, and shipping arrangements should be confirmed directly for each order.',
    exportRequirements: [
      'Product type, material, dimensions, and surface finish',
      'Grounding design, site conditions, and connection requirements',
      'Quantity, destination, drawings, and inspection documentation',
    ],
  },
  solar: {
    id: 'solar',
    title: 'Solar mounting structures designed around project requirements',
    overview:
      'A solar mounting structure supports photovoltaic modules and transfers their loads to a roof, foundation, or other approved support system. The configuration varies by installation type, module arrangement, site conditions, and approved structural design.',
    exportText:
      'RK Engineering welcomes enquiries from solar EPC contractors, photovoltaic project developers, structural consultants, procurement managers, and installation companies for projects in India and international markets, including Africa and the USA. Technical compliance, production scope, export feasibility, and delivery schedules should be confirmed for each order.',
    exportRequirements: [
      'Site layout, module dimensions, and installation type',
      'Design loads, foundation or roof information, and drawings',
      'Material, corrosion protection, destination, and delivery requirements',
    ],
  },
  galvanized: {
    id: 'galvanized',
    title: 'Hot-dip galvanized steel products',
    overview:
      'Hot-dip galvanizing applies a zinc coating to suitable steel components to help reduce corrosion. Product specifications, coating requirements, and inspection criteria should be confirmed against the intended application and project requirements.',
    exportText:
      'RK Engineering welcomes enquiries from industrial buyers, steel fabricators, contractors, importers, and distributors seeking galvanized steel products for international projects. Product availability, applicable requirements, shipping arrangements, and destination coverage should be confirmed before order acceptance.',
    exportRequirements: [
      'Product type, material, dimensions, and intended application',
      'Applicable coating specification and inspection requirements',
      'Quantity, packaging, destination, and delivery schedule',
    ],
  },
  towers: {
    id: 'towers',
    title: 'Tower and power infrastructure structures',
    overview:
      'Tower structures support suitable power transmission, electricity distribution, telecommunications, and electrical infrastructure projects. Product specifications, engineering approvals, and manufacturing feasibility depend on the requirements of the individual project.',
    exportText:
      'The source product content welcomes enquiries from power utilities, EPC contractors, infrastructure developers, telecommunications companies, and procurement teams seeking tower structures from India for international projects. Project location, technical requirements, export feasibility, and approvals must be reviewed for each enquiry.',
    exportRequirements: [
      'Project location, voltage level, and tower configuration',
      'Drawings, loading criteria, material requirements, and standards',
      'Corrosion protection, quantity, approvals, and delivery destination',
    ],
  },
};

const faq = (question: string, answer: string): ProductFaq => ({ question, answer });

export const PRODUCT_DETAILS: ProductDetail[] = [
  {
    slug: 'cable-trays',
    name: 'Industrial Cable Trays',
    group: 'cable',
    image: '54',
    imageAlt: 'Industrial cable tray systems for electrical cable routing',
    description:
      'Industrial cable tray systems for routing power, control, instrumentation, and communication cables in industrial and infrastructure projects.',
    overview:
      'RK Engineering manufactures perforated cable trays, ladder cable trays, raceway cable trays, and cable tray ducts. Galvanized steel options are available for suitable applications, subject to the project specification.',
    applications: ['Power plants', 'Industrial facilities', 'Commercial buildings', 'Infrastructure projects'],
    requirements: [
      'Tray configuration, dimensions, material, and finish',
      'Cable schedule, route drawings, loading criteria, and support spacing',
      'Fittings, accessories, coating specification, and inspection requirements',
    ],
    faqs: [
      faq(
        'What types of cable tray systems are listed?',
        'The documented range includes perforated cable trays, ladder cable trays, raceway cable trays, and cable tray ducts. Associated fittings and accessories are subject to product availability and project requirements.',
      ),
      faq(
        'What information should I provide for a cable tray quotation?',
        'Share tray type and dimensions, material and coating requirements, route drawings, cable loading and support spans, fittings schedule, applicable standards, and destination.',
      ),
    ],
    related: ['perforated-cable-trays', 'ladder-cable-trays', 'raceway-cable-trays', 'cable-tray-ducts'],
  },
  {
    slug: 'perforated-cable-trays',
    name: 'Perforated Cable Trays',
    navigationLabel: 'Perforated Type Cable Tray',
    group: 'cable',
    image: '55',
    imageAlt: 'Perforated cable tray for organized industrial cable routing',
    description:
      'Perforated cable trays support organized cable routing and provide openings for ventilation and cable fastening where the design permits.',
    overview:
      'Perforated cable trays are commonly considered for control cables, instrumentation cables, and other electrical installations. Cable quantity, weight, support span, installation environment, material compatibility, and project requirements inform selection.',
    applications: ['Industrial electrical installations', 'Commercial buildings', 'Power distribution projects', 'Infrastructure developments'],
    requirements: [
      'Tray width, side height, base and sidewall thickness',
      'Perforation pattern, section lengths, bends, tees, reducers, and fittings',
      'Support spacing, loading, material grade, finish, and galvanizing requirements',
    ],
    faqs: [
      faq(
        'What does the perforated tray design provide?',
        'Openings in the tray base support ventilation and provide access points for cable fastening, inspection, and maintenance. Actual load capacity depends on the complete system design and installation.',
      ),
      faq(
        'Which material or finish should be specified?',
        'The source lists mild steel, stainless steel, and aluminium material options and several surface finishes. Confirm the available material-finish combination and project specification before ordering.',
      ),
    ],
    related: ['cable-trays', 'ladder-cable-trays', 'raceway-cable-trays', 'cable-tray-ducts'],
  },
  {
    slug: 'ladder-cable-trays',
    name: 'Ladder Cable Trays',
    navigationLabel: 'Ladder Type Cable Tray',
    group: 'cable',
    image: '58',
    imageAlt: 'Ladder cable tray with side rails and cross rungs',
    description:
      'Ladder cable trays use side rails connected by rungs to support cables and provide access for installation and maintenance.',
    overview:
      'They may be specified for power distribution, industrial facilities, and outdoor cable routes when the selected configuration meets the required cable loads and installation conditions.',
    applications: ['Power distribution', 'Industrial facilities', 'Outdoor cable routes'],
    requirements: [
      'Tray width, side rail height, rail and rung material thickness, and rung spacing',
      'Cable loading, support span, straight lengths, and connection details',
      'Bends, tees, crosses, reducers, splice plates, material grade, and corrosion protection',
    ],
    faqs: [
      faq(
        'How is a ladder cable tray constructed?',
        'The documented design consists of side rails connected by rungs. The open arrangement supports cable access; selection depends on the required loading and installation conditions.',
      ),
      faq(
        'What project information helps define the configuration?',
        'Provide the cable schedule, route drawings, support arrangement, loading information, dimensions, material requirements, fittings, and corrosion-protection requirements.',
      ),
    ],
    related: ['cable-trays', 'perforated-cable-trays', 'raceway-cable-trays'],
  },
  {
    slug: 'raceway-cable-trays',
    name: 'Raceway Cable Trays',
    navigationLabel: 'Raceway Cable Tray',
    group: 'cable',
    image: '59',
    imageAlt: 'Raceway cable tray system for structured cable routing',
    description:
      'Raceway cable trays provide a defined route for organizing power, control, and communication cables in industrial and commercial installations.',
    overview:
      'Depending on its configuration, a raceway may use a covered or enclosed metal body. Dimensions, material, thickness, finish, and accessories can be evaluated against installation conditions and project drawings.',
    applications: ['Industrial plants', 'Commercial buildings', 'Infrastructure projects', 'Electrical and communication installations'],
    requirements: [
      'Raceway dimensions, section configuration, material grade, and thickness',
      'Cover requirements, fittings, joints, connections, and support arrangements',
      'Finish, coating specification, installation environment, and project standards',
    ],
    faqs: [
      faq(
        'What is a raceway cable tray?',
        'It is a cable-management system that provides a defined route for electrical, control, and communication cables. A cover may be included depending on the selected configuration.',
      ),
      faq(
        'What determines the raceway configuration?',
        'Configuration depends on the installation environment, cable arrangement, access requirements, and the level of physical protection specified for the application.',
      ),
    ],
    related: ['cable-trays', 'perforated-cable-trays', 'cable-tray-ducts'],
  },
  {
    slug: 'cable-tray-ducts',
    name: 'Cable Tray Ducts',
    navigationLabel: 'Cable Tray Duct',
    group: 'cable',
    image: '60',
    imageAlt: 'Cable tray duct for organized industrial cable management',
    description:
      'Cable tray ducts provide a duct-style arrangement for organizing electrical cables in specified industrial, commercial, and infrastructure installations.',
    overview:
      'Selection should consider cable quantity, route layout, installation access, enclosure or cover requirements, and environmental exposure. The appropriate configuration should be confirmed against project drawings.',
    applications: ['Industrial installations', 'Commercial buildings', 'Infrastructure projects', 'Electrical cable routes'],
    requirements: [
      'Duct width, height, section length, sheet thickness, and material',
      'Cover configuration, cable fill, bends, joints, tees, and transitions',
      'Mounting arrangement, support spacing, finish, and coating specification',
    ],
    faqs: [
      faq(
        'What are cable tray ducts used for?',
        'They provide a duct-style arrangement for organizing electrical cables in specified installations. Select the configuration based on cable routing and project requirements.',
      ),
      faq(
        'What details should be included in a duct enquiry?',
        'Include dimensions, material, thickness, cover configuration, cable routing requirements, fittings, supports, finish, and the intended installation environment.',
      ),
    ],
    related: ['cable-trays', 'perforated-cable-trays', 'raceway-cable-trays'],
  },
  {
    slug: 'earthing-materials',
    name: 'Earthing Materials',
    group: 'earthing',
    image: '57',
    description:
      'Conductive grounding and bonding components for electrical installations, utility projects, industrial facilities, and infrastructure.',
    overview:
      'The documented range includes earthing flats, earthing electrodes, junction boxes, GI wire, and copper earthing strips. Material, dimensions, connections, and finish must suit the grounding design and installation environment.',
    applications: [
      'Power plants and substations',
      'Industrial manufacturing facilities',
      'Telecom towers and communication infrastructure',
      'Commercial buildings',
      'Renewable energy projects',
      'Infrastructure and utility projects',
    ],
    requirements: [
      'Grounding design, conductor material, dimensions, and connection compatibility',
      'Soil conditions, corrosion exposure, installation method, and project standards',
      'Quantity, drawings, inspection, and documentation requirements',
    ],
    faqs: [
      faq(
        'Which earthing materials are listed?',
        'The product range includes earthing flats, earthing electrodes, junction boxes, GI wire, and copper earthing strips.',
      ),
      faq(
        'How should earthing materials be selected?',
        'Selection should consider grounding design, conductor dimensions, electrical requirements, soil conditions, corrosion exposure, connection compatibility, installation method, and applicable project standards.',
      ),
    ],
    related: ['earthing-flats', 'earthing-electrodes', 'junction-boxes', 'gi-wire', 'copper-earthing-strips'],
  },
  {
    slug: 'earthing-flats',
    name: 'Earthing Flats',
    navigationLabel: 'Earthing Flats',
    group: 'earthing',
    image: '58',
    description:
      'Strip-shaped conductors used in grounding networks to connect equipment, structures, and earthing-system components.',
    overview:
      'Material, width, thickness, and surface finish should be specified according to the electrical design and installation environment. The source document lists MS, copper, and aluminium options; confirm the available material and finish combination before ordering.',
    applications: ['Grounding networks', 'Power and utility projects', 'Industrial and infrastructure installations'],
    requirements: [
      'Material, width, thickness, and surface finish',
      'Electrical design, connection details, and installation environment',
      'Approved drawings, project standards, quantity, and inspection requirements',
    ],
    faqs: [
      faq(
        'What are earthing flats?',
        'Earthing flats are strip-shaped conductors used to connect equipment, structures, and components within a grounding network.',
      ),
      faq(
        'What dimensions are listed for earthing flats?',
        'The source document lists widths from 25 mm to 100 mm and thicknesses from 3 mm to 12 mm. Confirm the required product specification before ordering.',
      ),
    ],
    related: ['earthing-materials', 'copper-earthing-strips', 'earthing-electrodes'],
  },
  {
    slug: 'earthing-electrodes',
    name: 'Earthing Electrodes',
    navigationLabel: 'Earthing Electrode',
    group: 'earthing',
    image: '59',
    description:
      'Grounding components installed in soil to establish an electrical connection as part of an earthing system.',
    overview:
      'Electrode selection depends on soil conditions, installation depth, corrosion exposure, grounding design, and required performance. The project electrical engineer should confirm the appropriate specification.',
    applications: ['Power plants and substations', 'Industrial facilities', 'Renewable energy projects', 'Utility infrastructure'],
    requirements: [
      'Soil conditions, installation depth, and corrosion exposure',
      'Grounding design, electrode configuration, and connection details',
      'Project dimensions, material requirements, and applicable standards',
    ],
    faqs: [
      faq(
        'What do earthing electrodes do?',
        'Earthing electrodes establish an electrical connection with the surrounding soil as part of a grounding system.',
      ),
      faq(
        'What determines electrode selection?',
        'Selection depends on soil conditions, installation depth, corrosion exposure, the grounding design, and required performance.',
      ),
    ],
    related: ['earthing-materials', 'earthing-flats', 'gi-wire'],
  },
  {
    slug: 'junction-boxes',
    name: 'Junction Boxes',
    navigationLabel: 'Junction Box',
    group: 'earthing',
    image: '60',
    description:
      'Enclosures for suitable electrical connections and terminations within specified grounding and electrical installations.',
    overview:
      'Junction box enclosure design, material, dimensions, and environmental protection requirements should be matched to the intended installation and project specification.',
    applications: ['Electrical installations', 'Industrial facilities', 'Infrastructure projects'],
    requirements: [
      'Enclosure design, material, and dimensions',
      'Connection and termination requirements',
      'Environmental protection and installation conditions',
    ],
    faqs: [
      faq(
        'What are junction boxes used for?',
        'Junction boxes provide an enclosure for suitable electrical connections and terminations.',
      ),
      faq(
        'What should be specified for a junction box?',
        'Confirm the enclosure design, material, dimensions, connection requirements, environmental protection, and intended installation.',
      ),
    ],
    related: ['earthing-materials', 'earthing-flats', 'gi-wire'],
  },
  {
    slug: 'gi-wire',
    name: 'GI Wire',
    navigationLabel: 'GI Wire',
    group: 'earthing',
    image: '61',
    description:
      'Galvanized iron wire for suitable electrical and grounding applications where its properties meet project requirements.',
    overview:
      'Dimensions, coating, mechanical properties, and intended function should be matched to the project specification. Selection should consider the grounding design and installation environment.',
    applications: ['Suitable grounding applications', 'Electrical installations', 'Infrastructure projects'],
    requirements: [
      'Wire dimensions and mechanical requirements',
      'Coating requirements and intended function',
      'Grounding design, installation conditions, and project specification',
    ],
    faqs: [
      faq(
        'Where can GI wire be used?',
        'GI wire can be used in suitable electrical and grounding applications when its dimensions, coating, mechanical properties, and intended function meet project requirements.',
      ),
      faq(
        'What information helps assess a GI wire enquiry?',
        'Provide the required dimensions, coating, mechanical properties, intended function, quantity, and applicable project requirements.',
      ),
    ],
    related: ['earthing-materials', 'earthing-flats', 'copper-earthing-strips'],
  },
  {
    slug: 'copper-earthing-strips',
    name: 'Copper Earthing Strips',
    navigationLabel: 'Copper Earthing Strips',
    group: 'earthing',
    image: '62',
    description:
      'Conductive copper components for grounding networks where copper conductivity and compatibility with the system design are required.',
    overview:
      'Selection should account for conductor dimensions, connection methods, corrosion conditions, and compatibility with connected metals. Confirm the material requirements against the grounding design.',
    applications: ['Electrical grounding networks', 'Power and utility projects', 'Industrial installations'],
    requirements: [
      'Conductor dimensions and connection methods',
      'Compatibility with connected metals and corrosion conditions',
      'Grounding design, quantity, and project specifications',
    ],
    faqs: [
      faq(
        'When are copper earthing strips specified?',
        'Copper earthing strips are used where copper conductivity and compatibility with the overall grounding design are important.',
      ),
      faq(
        'What should be confirmed before ordering?',
        'Confirm conductor dimensions, connection methods, corrosion conditions, and compatibility with connected metals against the project design.',
      ),
    ],
    related: ['earthing-materials', 'earthing-flats', 'earthing-electrodes'],
  },
  {
    slug: 'solar-mounting-structures',
    name: 'Solar Mounting Structures',
    group: 'solar',
    image: '63',
    description:
      'Project-specific frameworks that support photovoltaic modules and transfer loads to an approved roof, foundation, or support system.',
    overview:
      'Configurations include ground-mounted, rooftop, tracker, car parking, and walkway structures. Design depends on project drawings, site conditions, panel layout, structural requirements, and approved engineering.',
    applications: [
      'Utility-scale solar farms',
      'Industrial and commercial rooftops',
      'Solar carports and walkways',
      'Tracker-based solar plants',
      'Renewable energy infrastructure',
    ],
    requirements: [
      'Site layout, panel dimensions, orientation, and installation type',
      'Wind and other applicable loads, roof or foundation information',
      'Structural sections, connections, corrosion protection, and project standards',
    ],
    faqs: [
      faq(
        'What types of solar mounting structures are listed?',
        'The source lists ground-mounted, rooftop, solar tracker, solar car parking, and solar walkway structures.',
      ),
      faq(
        'What determines a solar structure design?',
        'Design depends on installation type, site conditions, module arrangement, structural loads, foundation or roof conditions, and approved engineering requirements.',
      ),
    ],
    related: ['ground-mounted-solar-structures', 'rooftop-solar-structures', 'solar-tracker-structures', 'solar-car-parking-structures', 'solar-walkway-structures'],
  },
  {
    slug: 'ground-mounted-solar-structures',
    name: 'Ground-Mounted Solar Structures',
    navigationLabel: 'Ground Mounted Structure',
    group: 'solar',
    image: '64',
    description:
      'Support structures for photovoltaic modules installed on prepared ground or engineered foundations.',
    overview:
      'The structural arrangement may include columns, rafters, purlins, bracing, base plates, and foundation connections. Sections and member spacing depend on panel layout, wind loading, soil conditions, foundation design, and structural calculations.',
    applications: ['Solar farms', 'Utility-scale power plants', 'Industrial solar projects', 'Large renewable energy installations'],
    requirements: [
      'Site-specific loads, soil investigation, and foundation criteria',
      'Panel dimensions, orientation, tilt angle, and row spacing',
      'Steel sections, connection details, corrosion protection, and installation access',
    ],
    faqs: [
      faq(
        'Where are ground-mounted solar structures used?',
        'They support PV modules installed on prepared ground or engineered foundations, including solar farms, utility-scale plants, and industrial solar projects.',
      ),
      faq(
        'What information is needed for a project enquiry?',
        'Provide the site layout, panel specifications, design loads, foundation criteria, project quantities, and delivery destination.',
      ),
    ],
    related: ['solar-mounting-structures', 'solar-tracker-structures', 'solar-car-parking-structures'],
  },
  {
    slug: 'rooftop-solar-structures',
    name: 'Rooftop Solar Mounting Structures',
    navigationLabel: 'Rooftop Structure',
    group: 'solar',
    image: '65',
    description:
      'Structures supporting PV modules on suitable industrial sheds, commercial buildings, warehouses, and other roofs.',
    overview:
      'The structure must transfer solar-system loads to the building without exceeding the roof’s allowable capacity. Attachment and waterproofing requirements vary with roof construction and the approved project design.',
    applications: ['Industrial sheds', 'Commercial buildings', 'Warehouses', 'Other suitable roofs'],
    requirements: [
      'Existing roof construction, profile, slope, and load-bearing capacity',
      'Dead loads, wind uplift, fixing points, and waterproofing',
      'Module layout, mounting hardware compatibility, access, and safety',
    ],
    faqs: [
      faq(
        'Which buildings may use rooftop solar structures?',
        'The source describes suitable industrial sheds, commercial buildings, warehouses, and other roofs, subject to an assessment of the building and project.',
      ),
      faq(
        'What should be checked before selecting a rooftop structure?',
        'Assess the existing roof capacity, construction, fixing points, applicable loads, waterproofing, module layout, and mounting hardware compatibility.',
      ),
    ],
    related: ['solar-mounting-structures', 'ground-mounted-solar-structures', 'solar-car-parking-structures'],
  },
  {
    slug: 'solar-tracker-structures',
    name: 'Solar Tracker Structures',
    navigationLabel: 'Solar Tracker',
    group: 'solar',
    image: '66',
    description:
      'Structures designed to move PV modules along a defined tracking path, subject to the selected tracker technology and engineering scope.',
    overview:
      'Tracker systems may use single-axis or dual-axis arrangements and involve mechanical and control requirements. The source advises coordinating tracker projects with the designated tracker system provider and structural engineering team.',
    applications: ['Tracker-based solar plants', 'Large-scale solar projects'],
    requirements: [
      'Tracker technology, movement range, and system-provider requirements',
      'Module dimensions, weight, drive components, wind loads, and stow requirements',
      'Foundation alignment, site grading, tolerances, corrosion protection, and maintenance access',
    ],
    faqs: [
      faq(
        'What types of solar tracker arrangements are described?',
        'The source describes single-axis and dual-axis tracker arrangements, depending on the selected system.',
      ),
      faq(
        'Can a complete tracker assembly be assumed?',
        'No. The source says manufacturing of particular tracker components or complete assemblies must be confirmed against the drawings and scope of supply.',
      ),
    ],
    related: ['solar-mounting-structures', 'ground-mounted-solar-structures', 'rooftop-solar-structures'],
  },
  {
    slug: 'solar-car-parking-structures',
    name: 'Solar Car Parking Structures',
    navigationLabel: 'Car Parking Structure',
    group: 'solar',
    image: '67',
    description:
      'Solar carports combine vehicle parking areas with overhead photovoltaic modules in a structure designed for site and vehicle requirements.',
    overview:
      'The structure provides required vehicle clearance while supporting modules and transferring loads to foundations. Drainage, column placement, access routes, and vehicle movement are considered alongside the solar layout.',
    applications: ['Commercial properties', 'Industrial campuses', 'Offices', 'Educational facilities', 'Transport locations'],
    requirements: [
      'Parking-bay dimensions, vehicle clearance, and circulation routes',
      'Roof span, structural depth, support arrangement, and foundation design',
      'Wind loads, drainage, module layout, cable routing, and maintenance access',
    ],
    faqs: [
      faq(
        'What is a solar car parking structure?',
        'It is a parking structure with overhead PV modules, designed around vehicle clearance, structural support, foundations, and site circulation.',
      ),
      faq(
        'What details should a carport enquiry include?',
        'Provide the site layout, parking-bay dimensions, required vehicle clearance, module layout, and relevant structural and foundation requirements.',
      ),
    ],
    related: ['solar-mounting-structures', 'rooftop-solar-structures', 'solar-walkway-structures'],
  },
  {
    slug: 'solar-walkway-structures',
    name: 'Solar Walkway Structures',
    navigationLabel: 'Walkway Structure',
    group: 'solar',
    image: '68',
    description:
      'Structures that support PV modules above designated pedestrian routes or covered walkways.',
    overview:
      'Project drawings should define dimensions, support arrangements, clearances, load requirements, and interfaces with surrounding infrastructure. Site conditions and access requirements inform design coordination.',
    applications: ['Pedestrian routes', 'Institutional and campus projects', 'Commercial and industrial sites'],
    requirements: [
      'Walkway dimensions, clearances, and pedestrian access',
      'Support arrangement, design loads, foundation and mounting connections',
      'Cable routing, drainage, maintenance access, and corrosion protection',
    ],
    faqs: [
      faq(
        'What do solar walkway structures support?',
        'They support PV modules above designated pedestrian routes or covered walkways.',
      ),
      faq(
        'What should approved walkway drawings define?',
        'Drawings should define dimensions, support arrangement, clearances, load requirements, and interfaces with surrounding infrastructure.',
      ),
    ],
    related: ['solar-mounting-structures', 'solar-car-parking-structures', 'rooftop-solar-structures'],
  },
  {
    slug: 'hot-dip-galvanized-steel-products',
    name: 'Hot-Dip Galvanized Steel Products',
    group: 'galvanized',
    image: '69',
    imageAlt: 'Hot-dip galvanized steel products',
    description:
      'Galvanized steel products and suitable fabricated components for industrial, construction, and infrastructure applications.',
    overview:
      'The listed range includes steel angles, construction channels, high mast poles, pipes, H-beams, crash barriers, handrails, solar mounting channels, gratings, fabricated beams, tor rods, and chequered plates. A zinc coating helps reduce corrosion; requirements vary by application.',
    applications: ['Industrial applications', 'Construction projects', 'Infrastructure projects', 'Electrical and solar installations'],
    requirements: [
      'Product type, dimensions, material, and fabrication details',
      'Applicable coating specification, inspection, and acceptance criteria',
      'Intended environment, quantity, packaging, and destination requirements',
    ],
    technicalSpecifications: [
      'Hot-dip galvanizing is specified for suitable iron and steel components after surface preparation.',
      'Coating suitability and coverage depend on the base material, component geometry, fabrication, venting, drainage, environment, and inspection criteria.',
      'Confirm the applicable coating standard and edition against the product type and project specification.',
    ],
    faqs: [
      faq(
        'Which galvanized steel products are listed?',
        'The listed range includes steel angles, construction channels, high mast poles, pipes, H-beams, crash barriers, handrails, solar mounting channels, gratings, fabricated beams, tor rods, and chequered plates.',
      ),
      faq(
        'What does hot-dip galvanizing do?',
        'It applies a protective zinc coating to suitable steel components to help reduce corrosion. The required coating and inspection criteria must be confirmed for the product and project.',
      ),
    ],
    related: ['galvanized-steel-angles', 'galvanized-construction-channels', 'galvanized-high-mast-poles'],
  },
  {
    slug: 'galvanized-steel-angles',
    name: 'Hot Dip Galvanized Steel Angles',
    navigationLabel: 'Steel Angles',
    group: 'galvanized',
    image: '70',
    imageAlt: 'Hot-dip galvanized steel product',
    description:
      'Hot dip galvanized L-shaped steel angles for structural frameworks, electrical supports, solar mounting systems, cable tray supports, industrial platforms, and general fabrication.',
    overview:
      'Equal- and unequal-leg angles can be specified for support frames, bracing, equipment structures, and fabricated assemblies. Suitable angles may be cut, drilled, or fabricated before galvanizing when the design supports effective processing. Section, steel grade, dimensions, connections, and coating requirements are project-specific.',
    applications: [
      'Structural steel frameworks and fabricated assemblies',
      'Electrical transmission, distribution, and utility supports',
      'Cable tray support systems',
      'Solar mounting structures',
      'Industrial equipment supports and platforms',
      'Fencing, construction, telecommunications, and general fabrication',
    ],
    requirements: [
      'Equal or unequal angle section, steel grade, leg dimensions, thickness, and cut lengths',
      'Approved drawings, connection details, fabrication or hole requirements, and quantity',
      'Coating standard, environmental exposure, inspection documents, packing, and destination',
    ],
    technicalSpecifications: [
      'Section designation, leg widths, thickness, length, and dimensional tolerances',
      'Steel grade, material standard, structural loading, and connection requirements',
      'Galvanizing specification and coating acceptance criteria; ISO 1461 or ASTM A123/A123M may be relevant to suitable fabricated articles, subject to project confirmation',
      'Material certificates, inspection, packaging, and delivery requirements',
    ],
    variants: ['Equal-leg steel angles', 'Unequal-leg steel angles'],
    faqs: [
      faq(
        'What is the difference between equal and unequal steel angles?',
        'Equal angles have two legs of the same nominal width; unequal angles have legs of different widths. Selection depends on the structural design and connection geometry.',
      ),
      faq(
        'Can steel angles be customized?',
        'Dimensions, lengths, hole arrangements, and fabrication details may be specified on project drawings, subject to available material sizes and confirmed manufacturing capability.',
      ),
      faq(
        'Which galvanizing standards can apply to steel angles?',
        'ISO 1461 and ASTM A123/A123M may be relevant references for batch hot-dip galvanized fabricated steel articles. Confirm the applicable standard and edition for the product and project.',
      ),
    ],
    related: ['galvanized-fabricated-beams', 'galvanized-h-beams', 'galvanized-construction-channels'],
  },
  {
    slug: 'galvanized-construction-channels',
    name: 'Hot Dip Galvanized Construction Channels',
    navigationLabel: 'Construction Channel',
    group: 'galvanized',
    image: '71',
    imageAlt: 'Hot-dip galvanized steel product',
    description:
      'Hot dip galvanized construction channels for industrial frameworks, equipment supports, electrical and cable support systems, construction, and infrastructure projects.',
    overview:
      'Construction channels are steel sections with a web and two flanges, commonly forming a C- or U-shaped profile. They are used in support frames, structural assemblies, equipment mounting, and customized fabrication. Section size, material, connections, loading, and coating are selected for the specific design.',
    applications: [
      'Industrial structural frameworks and equipment supports',
      'Electrical and cable tray support systems',
      'Solar mounting assemblies where specified',
      'Utility, infrastructure, warehouse, and construction projects',
      'Equipment brackets, platforms, and general steel fabrication',
    ],
    requirements: [
      'Channel profile, section designation, overall depth, flange width, and web/flange thickness',
      'Steel grade, required length, loading, connection details, and fabrication or hole patterns',
      'Galvanizing standard, coating acceptance, inspection documents, packing, and destination',
    ],
    technicalSpecifications: [
      'C- or U-shaped profile and section dimensions',
      'Web and flange thickness, length, steel grade, and material standard',
      'Approved drawings, bill of quantities, structural loading, hole patterns, and connection requirements',
      'Coating specification and inspection criteria; applicable requirements depend on product and processing method',
    ],
    variants: ['C-shaped channel profiles', 'U-shaped channel profiles'],
    faqs: [
      faq(
        'What is a construction channel?',
        'It is a steel section with a web and two flanges, generally forming a C-shaped or U-shaped profile, used in supports, framing, brackets, and fabricated assemblies.',
      ),
      faq(
        'What affects the load capacity of a construction channel?',
        'Capacity depends on section dimensions, steel properties, member length, support conditions, load type, orientation, and connection design. The responsible engineer should establish the design capacity.',
      ),
      faq(
        'Can construction channels be drilled or welded before galvanizing?',
        'Suitable channels may be fabricated before galvanizing. Fabrication details should be coordinated so the design allows effective cleaning, zinc coverage, venting, drainage, and safe processing.',
      ),
    ],
    related: ['galvanized-steel-angles', 'galvanized-fabricated-beams', 'galvanized-h-beams'],
  },
  {
    slug: 'galvanized-high-mast-poles',
    name: 'Hot Dip Galvanized High Mast Poles',
    navigationLabel: 'High Mast Pole',
    group: 'galvanized',
    image: '69',
    imageAlt: 'Hot-dip galvanized steel product',
    description:
      'Hot dip galvanized high mast poles are structural supports for lighting installations over highways, ports, airports, industrial facilities, logistics areas, and other large outdoor spaces.',
    overview:
      'Pole height, shaft configuration, luminaire arrangement, wind loading, foundation interface, and any lowering equipment depend on the lighting layout and project design. A complete enquiry should identify the required pole and accessory scope and applicable structural and coating specifications.',
    applications: [
      'Highways, expressways, interchanges, and toll plazas',
      'Airports, seaports, harbours, and container terminals',
      'Industrial plants, warehouses, and logistics parks',
      'Railway yards, transport terminals, sports grounds, and large parking areas',
      'Power, renewable energy, and public infrastructure projects',
    ],
    requirements: [
      'Pole quantity, height, project location, design code, wind speed, and approved drawings',
      'Luminaire number, type, weight, mounting configuration, and projected area',
      'Base plate, anchor bolts, foundation interface, coating, inspection, and accessory scope',
    ],
    technicalSpecifications: [
      'Pole height, structural configuration, material grade, design loads, and applicable standard',
      'Luminaire ring or carriage, lowering mechanism, winch, wire ropes, and safety features when specified',
      'Base plate drawings, anchor bolt arrangement, and foundation interface',
      'Galvanizing standard, coastal or industrial exposure, coating inspection, and delivery constraints',
    ],
    faqs: [
      faq(
        'What is the standard height of a high mast pole?',
        'There is no single universal height. The required height depends on the illumination area, luminaire type, lighting layout, structural design, and project specification.',
      ),
      faq(
        'Can a high mast pole include a lowering system?',
        'A lowering system may be specified as part of a compatible assembly. Confirm whether the pole, luminaire carriage or ring, winch, wire ropes, and safety features are included in the supply scope.',
      ),
      faq(
        'Which standards apply to high mast poles?',
        'Requirements depend on the project and destination. Confirm the applicable structural and galvanizing standards, design code, and approval requirements rather than assuming one standard applies universally.',
      ),
    ],
    related: ['transmission-towers', 'galvanized-steel-angles', 'galvanized-crash-barriers'],
  },
  {
    slug: 'galvanized-pipes',
    name: 'Hot Dip Galvanized Pipes',
    navigationLabel: 'Pipes',
    group: 'galvanized',
    image: '70',
    imageAlt: 'Hot-dip galvanized steel product',
    description:
      'Hot dip galvanized steel pipes for suitable structural supports, outdoor frameworks, construction, utility installations, fencing, agriculture, and industrial fabrication.',
    overview:
      'Pipe selection depends on its intended service, not nominal diameter alone. Structural supports, water conveyance, fire protection, and other pressure-related uses can require different product standards and mechanical properties. Confirm the product specification and intended use before procurement.',
    applications: [
      'Construction frameworks and structural supports',
      'Industrial fabrication and equipment structures',
      'Fencing, boundary frameworks, and security systems',
      'Agricultural structures and greenhouses',
      'Utility supports, warehouses, and logistics facilities',
    ],
    requirements: [
      'Pipe diameter, wall thickness, length, steel grade, and manufacturing specification',
      'Intended service, connection or end preparation, and installation conditions',
      'Coating specification, inspection, quantity, packing, and delivery destination',
    ],
    technicalSpecifications: [
      'Nominal diameter, wall thickness, length, dimensional tolerances, and end preparation',
      'Steel grade, pipe manufacturing standard, mechanical properties, and connection type',
      'Intended service and environmental exposure, including soil, moisture, chemicals, or fertilizers',
      'Galvanizing specification, inspection tests, and any required coating repair after fabrication',
    ],
    faqs: [
      faq(
        'Which sizes and steel grades are available for galvanized pipes?',
        'Pipe sizes and grades must be confirmed for the order. Specify the required diameter, wall thickness, product standard, and intended application for a project-specific review.',
      ),
      faq(
        'Can galvanized pipes be used for water conveyance or pressure service?',
        'Only when the selected pipe meets the applicable product and service requirements. Structural pipe and pressure-related pipe are not automatically interchangeable.',
      ),
      faq(
        'Can galvanized pipes be cut, welded, or threaded?',
        'These operations depend on the pipe type and specification and require appropriate procedures. Fabrication can damage the zinc coating, so any required coating repair should be addressed.',
      ),
    ],
    related: ['galvanized-steel-angles', 'galvanized-construction-channels', 'galvanized-handrails'],
  },
  {
    slug: 'galvanized-h-beams',
    name: 'Hot Dip Galvanized H-Beams',
    navigationLabel: 'H-Beams',
    group: 'galvanized',
    image: '71',
    imageAlt: 'Hot-dip galvanized steel product',
    description:
      'Hot dip galvanized H-beams for suitable industrial buildings, structural frameworks, warehouses, equipment supports, platforms, utility infrastructure, and fabricated steel assemblies.',
    overview:
      'An H-beam has a central web and two flanges. Its performance depends on section dimensions, steel grade, unbraced length, support conditions, loading, and connections. Specify the required rolled section or fabricated assembly and use approved structural design information for selection.',
    applications: [
      'Industrial buildings, factory structures, and warehouses',
      'Structural columns, beams, floor framing, and platforms',
      'Power and electrical infrastructure supports',
      'Solar and renewable energy projects where designed',
      'Equipment supports and outdoor corrosion-exposed structures',
    ],
    requirements: [
      'Section designation, dimensions, steel grade, required length, and quantity',
      'Structural drawings, loads, support conditions, connections, and fabrication scope',
      'Galvanizing specification, coating inspection, documentation, and destination',
    ],
    technicalSpecifications: [
      'Section depth, flange width, web and flange thickness, and tolerances',
      'Steel grade, material standard, length, and whether the section is rolled or part of a fabricated assembly',
      'Loading arrangement, unbraced length, support conditions, connection details, and design code',
      'Corrosion-protection standard, coating acceptance, inspection records, and delivery requirements',
    ],
    variants: ['Rolled H-beam sections', 'H-beams incorporated into fabricated assemblies'],
    faqs: [
      faq(
        'What is the difference between an H-beam and an I-beam?',
        'The profiles differ in their web and flange proportions. The appropriate section is determined by the structural design and applicable section designation, not by the name alone.',
      ),
      faq(
        'What H-beam dimensions and steel grades are available?',
        'Dimensions and grades should be specified by section designation and project material standard. Confirm availability and suitability for the required design before ordering.',
      ),
      faq(
        'What determines an H-beam’s load capacity?',
        'Capacity depends on section dimensions, steel grade, unbraced length, support conditions, loading arrangement, and connection design. It should be established through project structural calculations.',
      ),
    ],
    related: ['galvanized-fabricated-beams', 'galvanized-construction-channels', 'galvanized-steel-angles'],
  },
  {
    slug: 'galvanized-crash-barriers',
    name: 'Hot Dip Galvanized Crash Barriers',
    navigationLabel: 'Crash Barrier',
    group: 'galvanized',
    image: '69',
    imageAlt: 'Hot-dip galvanized steel product',
    description:
      'Hot dip galvanized steel crash barrier components for road and transport projects, specified as part of an engineered and approved roadside safety system.',
    overview:
      'Crash barriers are vehicle-restraint systems designed to contain or redirect vehicles under defined impact conditions. Safety performance depends on the tested system configuration and its installation; galvanizing provides corrosion protection but does not establish crash-test performance or compliance.',
    applications: [
      'Highways, expressways, and selected roadside hazards',
      'Road embankments, hilly roads, bridges, and flyover approaches',
      'Median protection where required by the road safety design',
      'Industrial roads, logistics facilities, ports, and airport access roads',
      'Urban roads where the authority identifies a vehicle-restraint need',
    ],
    requirements: [
      'Approved barrier system, tested designation, required performance criteria, and road authority requirements',
      'Rail profile and thickness, steel grade, post type and spacing, terminals, transitions, and fasteners',
      'Galvanizing, inspection evidence, installation details, quantities, and delivery destination',
    ],
    technicalSpecifications: [
      'W-beam, thrie-beam, or other explicitly approved system configuration',
      'Rail geometry, material grade, post spacing, spacer blocks, fasteners, terminals, and transitions',
      'Test reports and applicable MASH, AASHTO, or project-owner requirements as specified by the road authority',
      'Galvanizing specification, coating acceptance, working width, deflection, and site clearances',
    ],
    variants: ['W-beam systems', 'Thrie-beam systems'],
    faqs: [
      faq(
        'What is the difference between a W-beam and a thrie-beam crash barrier?',
        'They have different rail profiles and system configurations. The required type must match the tested and approved system for the project.',
      ),
      faq(
        'Does hot dip galvanizing make a crash barrier crash-tested?',
        'No. Galvanizing concerns corrosion protection. Crash performance depends on documented testing of the complete barrier configuration and its installation.',
      ),
      faq(
        'Which components are needed for a complete crash barrier system?',
        'The project may specify rails, posts, spacers, fasteners, terminals, transitions, and other system components. Confirm the bill of quantities and tested configuration.',
      ),
    ],
    related: ['galvanized-handrails', 'galvanized-high-mast-poles', 'transmission-towers'],
  },
  {
    slug: 'galvanized-handrails',
    name: 'Hot Dip Galvanized Steel Handrails',
    navigationLabel: 'Handrail',
    group: 'galvanized',
    image: '70',
    description:
      'Hot dip galvanized steel handrails and railing components for industrial stairs, platforms, walkways, ramps, access routes, and infrastructure projects.',
    overview:
      'A handrail provides a graspable support along an access route, while a guardrail helps protect people from exposed edges. Depending on the design, a railing assembly may include top and intermediate rails, posts, base plates, brackets, toe boards, and mounting accessories. Configuration must meet the applicable safety and project requirements.',
    applications: [
      'Industrial plants, manufacturing facilities, and maintenance platforms',
      'Warehouses, logistics parks, and loading platforms',
      'Power plants, utility facilities, and process industries',
      'Commercial buildings, stairs, ramps, and accessible routes',
      'Bridges, walkways, solar facilities, ports, and outdoor infrastructure',
    ],
    requirements: [
      'Intended use, railing configuration, dimensions, loads, and applicable code',
      'Rail and post profiles, spacing, base plates, anchors, supporting substrate, and connections',
      'Infill or toe boards where required, coating, inspection, and destination',
    ],
    technicalSpecifications: [
      'Handrail, guardrail, or combined system and required rail height/profile',
      'Rail and post profiles, dimensions, wall thickness, material grade, post spacing, design loads, and connection details',
      'Base plates, anchors, supporting substrate, intermediate rails, infill, and toe boards where specified',
      'Steel pipes, hollow sections, bars, plates, or other specified materials; applicable safety, building, accessibility, galvanizing, and project requirements',
      'For US projects, the specified OSHA, building-code, accessibility, or owner requirements; OSHA 29 CFR 1910.29 and 29 CFR 1926.502 address different applications',
      'Venting, drainage, coating buildup, and potential distortion for suitable fabricated assemblies galvanized after fabrication',
    ],
    faqs: [
      faq(
        'What is the difference between a handrail and a guardrail?',
        'A handrail provides a graspable surface to support people moving along stairs or access routes. A guardrail helps protect people from falling from an exposed edge. Some installations combine both functions, but the complete system must meet applicable requirements.',
      ),
      faq(
        'What materials are used for industrial handrails?',
        'Industrial handrails may be fabricated from steel pipes, hollow sections, bars, plates, or other specified materials. Selection depends on the application, loads, environmental exposure, finish, and applicable standards.',
      ),
      faq(
        'Why choose hot-dip galvanized steel handrails?',
        'Hot-dip galvanizing provides a zinc coating that helps protect steel against atmospheric corrosion. It can suit outdoor and industrial applications when the coating and product specification are appropriate.',
      ),
      faq(
        'What is the standard height of a handrail?',
        'There is no single height for every handrail installation. Requirements depend on the governing code and whether the product is a stair handrail, guardrail, ramp handrail, or another system. Confirm the applicable requirements before finalizing dimensions.',
      ),
      faq(
        'Are galvanized handrails suitable for outdoor industrial environments?',
        'They can suit many outdoor environments, subject to coating requirements and exposure conditions. Coastal, chemical, and highly corrosive environments may need additional assessment and maintenance planning.',
      ),
      faq(
        'Can steel handrails be customized according to drawings?',
        'Project requirements can be reviewed against approved drawings, dimensions, material specifications, connection details, and manufacturing scope. Confirm availability before ordering.',
      ),
      faq(
        'What standards apply to handrails in the USA?',
        'Requirements depend on the application. OSHA 29 CFR 1910.29 addresses handrails and stair rail systems in general industry, while OSHA 29 CFR 1926.502 addresses guardrail systems in construction fall protection. Building codes, accessibility requirements, and owner specifications may also apply.',
      ),
      faq(
        'Can handrails be hot-dip galvanized after fabrication?',
        'Suitable assemblies may be galvanized after fabrication when their geometry and processing requirements permit it. Hollow sections need appropriate venting and drainage, and the design should account for coating buildup and potential distortion.',
      ),
      faq(
        'Can RK Engineering supply handrails for Africa and the USA?',
        'Export enquiries can be submitted for review. Specify the destination, product design, applicable code, dimensions, coating requirements, quantity, and documentation needs.',
      ),
      faq(
        'How do I request a handrail quotation?',
        'Share the application, drawings, dimensions, material grade, finish, quantity, required standards, and delivery destination so the product and supply scope can be reviewed.',
      ),
    ],
    related: ['galvanized-crash-barriers', 'galvanized-construction-channels', 'galvanized-steel-angles'],
  },
  {
    slug: 'solar-mounting-channels',
    name: 'Hot Dip Galvanized Solar Mounting Channels',
    navigationLabel: 'Solar Mounting Channel',
    group: 'galvanized',
    image: '71',
    description:
      'Hot dip galvanized steel channels for photovoltaic mounting structures, manufactured to project drawings and requirements for suitable rooftop, ground-mounted, commercial, and industrial solar installations.',
    overview:
      'Solar mounting channels can function as rails, purlins, support members, or connection components within a larger PV mounting assembly. Profile, dimensions, hole pattern, steel grade, loading, and coating must be coordinated with the approved structure and installation conditions.',
    applications: [
      'Ground-mounted solar power plants and utility-scale solar farms',
      'Rooftop systems on suitable industrial, warehouse, and commercial buildings',
      'Commercial and industrial PV projects',
      'Solar car parking and walkway structures',
      'Renewable energy infrastructure',
    ],
    requirements: [
      'Approved drawings, channel profile, dimensions, hole pattern, steel grade, and thickness',
      'Module layout, span, wind loads, roof or foundation conditions, and mounting interfaces',
      'Coating, inspection, quantity, packaging, delivery schedule, and destination',
    ],
    technicalSpecifications: [
      'Channel profile, section dimensions, thickness, length, and hole positions',
      'Steel grade, material documentation, tolerances, and interfaces with brackets, rails, clamps, or other components',
      'Structural loads, module layout, span, wind and snow loading where applicable, foundation or roof details, attachment, and waterproofing',
      'Galvanizing specification and exposure conditions, including coastal environments',
      'Applicable material, structural-design, dimensional-tolerance, and galvanizing standards; confirm governing standards and editions for the project',
      'For US projects, confirm project-specific design requirements, which may reference applicable building codes and ASCE/SEI 7 loading criteria',
    ],
    variants: ['Rails or purlins', 'Support or connection members'],
    faqs: [
      faq(
        'What is a solar mounting channel?',
        'It is a steel component used within a photovoltaic mounting system as a rail, purlin, support member, or connection component, depending on the approved design.',
      ),
      faq(
        'Where are solar mounting channels used?',
        'They may be used in suitable rooftop solar systems, ground-mounted solar plants, commercial and industrial PV projects, solar car parks, and solar walkway structures.',
      ),
      faq(
        'Are solar mounting channels available with hot-dip galvanizing?',
        'The source document identifies hot-dip galvanized finishing for these channels. Confirm the coating specification and availability for the required product.',
      ),
      faq(
        'Can solar mounting channels be manufactured according to customer drawings?',
        'The source identifies customized fabrication to customer drawings, dimensions, and hole patterns, subject to confirmation of the required specification and manufacturing scope.',
      ),
      faq(
        'Which steel grade is used for solar mounting channels?',
        'The grade depends on the mounting-system design, required mechanical properties, material standard, and project specification. Specify the required grade for review.',
      ),
      faq(
        'How is the correct channel thickness selected?',
        'Thickness should follow the structural design, taking account of the channel profile, material grade, span, support spacing, wind loading, connection details, and applicable requirements. It should not be selected from module weight alone.',
      ),
      faq(
        'Are galvanized solar mounting channels suitable for coastal projects?',
        'They may be suitable when the coating system is selected for the environmental exposure. Assess coastal corrosion conditions, coating requirements, maintenance, and compatibility with other mounting components.',
      ),
      faq(
        'Which standards apply to solar mounting channels?',
        'Applicable standards depend on the product and destination. Material, structural design, dimensional tolerances, and galvanizing may be governed by different standards; confirm the standards and editions in the approved project specification.',
      ),
      faq(
        'Does RK Engineering supply solar mounting channels for Africa and the USA?',
        'International enquiries can be submitted for review. Provide the destination, drawings, channel specifications, quantities, coating requirements, and any required compliance documentation.',
      ),
      faq(
        'What information is needed to request a quote?',
        'Share the channel profile, dimensions, material grade, hole pattern, length, quantity, finish, project location, approved drawings, structural requirements, and delivery details.',
      ),
    ],
    related: ['solar-mounting-structures', 'galvanized-steel-angles', 'galvanized-construction-channels'],
  },
  {
    slug: 'galvanized-steel-gratings',
    name: 'Hot Dip Galvanized Steel Gratings',
    navigationLabel: 'Gratings',
    group: 'galvanized',
    image: '69',
    description:
      'Hot dip galvanized open-grid steel grating panels for industrial flooring, access walkways, maintenance platforms, drainage channels, cable trenches, and stairways.',
    overview:
      'Steel gratings use load-bearing bars joined by cross bars or another specified arrangement. The open surface can allow water and air to pass through. Configuration and capacity depend on bar dimensions and spacing, panel size, span, supports, imposed loads, and project safety requirements.',
    applications: [
      'Industrial floors, factory platforms, and maintenance walkways',
      'Power plants and electrical infrastructure',
      'Oil, gas, petrochemical, water, and wastewater facilities',
      'Warehouses, manufacturing units, and solar projects',
      'Drainage channels, cable trenches, access platforms, and stairways',
    ],
    requirements: [
      'Panel layout, dimensions, bearing-bar size and spacing, and cross-bar arrangement',
      'Design loads, clear span, support spacing, connections, and permitted deflection',
      'Steel grade, galvanizing standard, inspection, packing, and delivery requirements',
    ],
    technicalSpecifications: [
      'Bearing-bar and cross-bar configuration, dimensions, spacing, and joining arrangement',
      'Panel sizes, clear span, support conditions, connection details, and opening dimensions',
      'Uniform, concentrated, wheel, or other applicable loads and permitted deflection',
      'Steel grade, surface treatment, galvanizing standard, inspection records, and panel identification',
      'ISO 1461:2022 may apply to fabricated iron and steel articles galvanized by immersion; confirm the governing product or project standard and edition',
      'Custom panel dimensions and cut-outs are subject to drawing review and confirmed manufacturing capabilities',
    ],
    faqs: [
      faq(
        'What are steel gratings used for?',
        'Steel gratings are used for industrial flooring, maintenance platforms, walkways, stair treads, drainage channels, cable trenches, and access areas in industrial and infrastructure projects.',
      ),
      faq(
        'What is a hot-dip galvanized steel grating?',
        'It is a fabricated steel grating that receives a zinc coating through hot-dip galvanizing to help protect the steel against corrosion.',
      ),
      faq(
        'How do I select the correct grating load capacity?',
        'Selection depends on bearing-bar dimensions, clear span, bar spacing, material properties, support conditions, and imposed loading. Use applicable manufacturer load data or approved engineering calculations for the proposed configuration.',
      ),
      faq(
        'Can steel gratings be manufactured to custom dimensions?',
        'Project-specific dimensions and cut-outs can be evaluated against customer drawings and manufacturing capabilities. Confirm the configuration and quantities before ordering.',
      ),
      faq(
        'Which galvanizing standard should be specified?',
        'The correct standard depends on the product, manufacturing process, and contract. ISO 1461:2022 may apply to fabricated iron and steel articles galvanized by immersion, while another product-specific or project requirement may govern. Confirm the applicable standard and edition.',
      ),
      faq(
        'Are galvanized steel gratings suitable for outdoor use?',
        'They are commonly used outdoors because zinc coatings help protect steel against corrosion. Suitability depends on environmental exposure, coating requirements, drainage, installation, and maintenance conditions.',
      ),
      faq(
        'What information is needed for a grating quotation?',
        'Provide drawings, panel dimensions, quantities, load requirements, support spacing, material grade, surface finish, applicable standards, inspection needs, and delivery location.',
      ),
      faq(
        'Can RK Engineering support export enquiries for Africa and the USA?',
        'International enquiries can be submitted for review. Share the destination, technical specification, quantities, packing requirements, and required documentation.',
      ),
    ],
    related: ['galvanized-chequered-plates', 'galvanized-handrails', 'galvanized-fabricated-beams'],
  },
  {
    slug: 'galvanized-fabricated-beams',
    name: 'Hot Dip Galvanized Fabricated Beams',
    navigationLabel: 'Fabricated Beams',
    group: 'galvanized',
    image: '70',
    description:
      'Project-specific fabricated steel beams for industrial structures, equipment supports, utility projects, and customized assemblies, with hot dip galvanizing where specified and suitable.',
    overview:
      'Fabricated beams are assembled from steel sections and plates to meet project dimensions and connection requirements. Unlike a standard rolled section, a fabricated beam is built to a defined drawing. Structural design, weld details, inspection, and galvanizing suitability must be reviewed for the complete assembly.',
    applications: [
      'Industrial structures and structural frameworks',
      'Equipment supports and platforms',
      'Utility and infrastructure projects',
      'Customized steel assemblies and EPC projects',
    ],
    requirements: [
      'Approved drawings, section and plate dimensions, steel grade, and quantity',
      'Structural loads, connection design, weld details, fabrication tolerances, and inspection scope',
      'Galvanizing suitability, coating criteria, material traceability, and delivery destination',
    ],
    technicalSpecifications: [
      'Beam dimensions, constituent sections and plates, material grades, and tolerances',
      'Design loads, support conditions, connection details, weld requirements, and approved drawings',
      'Fabrication and dimensional checks, material verification, inspection records, and documentation',
      'Venting, drainage, processing suitability, galvanizing specification, and coating inspection',
      'Beam configuration may include web and flange plates, stiffeners, end plates, and connection plates as defined by the approved design',
      'ISO 1461:2022 may be relevant to hot-dip galvanized fabricated steel articles; confirm the governing standard and edition in the project documents',
    ],
    faqs: [
      faq(
        'What are fabricated steel beams?',
        'They are structural members made by cutting, assembling, and joining steel plates or sections to achieve the dimensions and configuration required by an engineering design.',
      ),
      faq(
        'What is the difference between a fabricated beam and a rolled beam?',
        'A rolled beam is formed through rolling into a standard section profile. A fabricated beam is assembled from steel plates or sections for project-specific geometry. The suitable choice depends on design, availability, fabrication requirements, and cost.',
      ),
      faq(
        'Can fabricated beams be manufactured to custom drawings?',
        'Custom fabrication can be evaluated against approved drawings, required dimensions, connection details, and project specifications. Confirm the design and manufacturing scope before ordering.',
      ),
      faq(
        'Can fabricated steel beams be hot dip galvanized?',
        'Suitable fabricated beams may be hot-dip galvanized for corrosion protection. Review the beam geometry, material, dimensions, venting, and drainage for process suitability.',
      ),
      faq(
        'Which information is needed to calculate a fabricated beam’s load capacity?',
        'Assessment typically requires the beam cross-section, steel grade, span, support conditions, load combinations, restraint arrangement, and applicable design criteria. Establish capacity through appropriate engineering calculations.',
      ),
      faq(
        'What quality checks are important for fabricated beams?',
        'Depending on the specification, checks may include material verification, dimensions, alignment, weld inspection, connection-hole accuracy, coating inspection, and final documentation.',
      ),
      faq(
        'Which galvanizing standard should be specified?',
        'The applicable standard depends on the product, project, and contract. ISO 1461:2022 may be relevant to hot-dip galvanized coatings on fabricated steel articles, but confirm the governing standard and edition in the project documents.',
      ),
      faq(
        'Does RK Engineering accept fabricated beam enquiries from Africa and the USA?',
        'International enquiries can be submitted for review. Provide drawings, quantities, material and coating requirements, documentation needs, and destination details.',
      ),
    ],
    related: ['galvanized-h-beams', 'galvanized-construction-channels', 'galvanized-steel-gratings'],
  },
  {
    slug: 'galvanized-tor-rods',
    name: 'Hot Dip Galvanized TOR Rods',
    navigationLabel: 'Tor Rod',
    group: 'galvanized',
    image: '71',
    description:
      'TOR rods are listed for reinforced-concrete applications. Confirm the actual reinforcement type, grade, dimensions, availability, and any specifically approved galvanizing requirement against the project specification.',
    overview:
      'TOR is a traditional term associated with cold-twisted deformed reinforcement bars and does not automatically mean a modern TMT bar. Reinforcement selection must follow structural drawings and the governing material standard. The source lists galvanized TOR rods, but galvanizing suitability should be assessed for the specific reinforcement, concrete application, and project requirements.',
    applications: [
      'Reinforced-concrete buildings and foundations',
      'Industrial structures and equipment bases',
      'Roads, bridges, flyovers, and other infrastructure',
      'Water-retaining structures and civil works',
    ],
    requirements: [
      'Actual bar type, grade, nominal diameter, quantity, and required length',
      'Approved structural drawings, bar-bending schedule, and applicable material standard',
      'Test certificates, inspection, delivery requirements, and any specifically approved galvanizing scope',
    ],
    technicalSpecifications: [
      'Bar type, specified grade, nominal diameter, length, and material standard',
      'Mechanical properties, test requirements, markings, and material traceability',
      'Bar-bending schedule and fabrication requirements approved by the project engineer',
      'Any galvanizing requirement must be evaluated against the reinforcement specification and concrete application',
      'IS 1786 is a relevant Indian reference for high-strength deformed reinforcement bars; ASTM A615/A615M may be relevant to some US projects. Confirm the applicable specification, edition, and grade',
    ],
    faqs: [
      faq(
        'What is a TOR rod?',
        'TOR rod is a traditional term associated with cold-twisted deformed steel reinforcement bars. Verify the actual product type and grade because TOR/CTD bars are not automatically equivalent to modern TMT reinforcement bars.',
      ),
      faq(
        'What are TOR rods used for?',
        'Historically, TOR rods have been used as reinforcement in concrete construction. Current material selection should follow the structural design, approved bar type, and applicable standard.',
      ),
      faq(
        'What is the difference between TOR rods and TMT bars?',
        'TOR or CTD bars are associated with cold twisting, while TMT bars are produced through thermo-mechanical treatment. Their properties can differ, so they should not be substituted without engineering approval.',
      ),
      faq(
        'Which standard applies to reinforcement bars in India?',
        'IS 1786 is a relevant Indian Standard for high-strength deformed steel bars and wires for concrete reinforcement. Confirm the applicable edition, amendments, and specified grade.',
      ),
      faq(
        'Which standard may apply to reinforcement bars in the USA?',
        'ASTM A615/A615M is one relevant specification for deformed and plain carbon-steel bars for concrete reinforcement. Other requirements may apply depending on the project and product.',
      ),
      faq(
        'What details are needed to order reinforcement bars?',
        'Provide the bar type, grade, nominal diameter, quantity, required length, material standard, testing requirements, and delivery location.',
      ),
      faq(
        'Can reinforcement bars be welded or heated for bending?',
        'Only when permitted by the applicable material specification, design requirements, and approved procedure. Confirm weldability and follow approved bar-bending instructions; do not assume every reinforcement product is suitable for welding or heating.',
      ),
      faq(
        'Does RK Engineering supply TOR rods for Africa and the USA?',
        'International supply of TOR rods or other reinforcement bars must be confirmed directly. Verify availability, applicable standards, documentation, and export requirements before placing an order.',
      ),
    ],
    related: ['galvanized-steel-angles', 'galvanized-fabricated-beams', 'galvanized-steel-gratings'],
  },
  {
    slug: 'galvanized-chequered-plates',
    name: 'Hot Dip Galvanized Chequered Plates',
    navigationLabel: 'Chequered Plate',
    group: 'galvanized',
    image: '69',
    description:
      'Hot dip galvanized steel chequered plates for suitable industrial platforms, walkways, equipment access areas, stairs, maintenance spaces, and fabrication projects.',
    overview:
      'Chequered plates, also called checker plates, checkered plates, or tread plates, have a raised surface pattern that can improve traction in suitable access applications. Plate grade, thickness, dimensions, support arrangement, loading, surface condition, and coating requirements should be selected for the project. A patterned surface should not be treated as a guarantee of slip resistance.',
    applications: [
      'Industrial platforms and walkways',
      'Equipment access areas and maintenance spaces',
      'Stairs and fabrication projects',
      'Industrial and infrastructure installations exposed to weather',
    ],
    requirements: [
      'Plate dimensions, thickness, steel grade, pattern, and quantity',
      'Support conditions, loading, fabrication details, and intended access application',
      'Galvanizing or other specified finish, inspection, packaging, and delivery destination',
    ],
    technicalSpecifications: [
      'Plate length, width, thickness, material grade, and raised-pattern requirements',
      'Support spacing, loading, connections, cut-outs, and fabrication details',
      'Surface condition and traction requirements for the intended application',
      'Applicable product and galvanizing standards, coating inspection, and delivery documentation',
      'ASTM A786/A786M may be relevant to certain hot-rolled steel floor plates; confirm the governing material specification and edition for the project',
      'Evaluate material, unsupported span, loading, deflection, connection details, and operating environment as part of the design',
    ],
    faqs: [
      faq(
        'What is a chequered plate used for?',
        'Chequered plates are used for industrial flooring, walkways, ramps, stair treads, access platforms, transportation flooring, and selected fabrication applications where a raised-pattern steel surface is required.',
      ),
      faq(
        'What is the difference between a chequered plate and a plain steel plate?',
        'A chequered plate has raised projections on one surface, while a plain plate has a comparatively flat surface. The raised pattern can improve traction in suitable conditions, but actual slip performance depends on the environment and surface condition.',
      ),
      faq(
        'What is the difference between a chequered plate and a steel grating?',
        'Chequered plates provide a solid steel surface with a raised pattern. Steel gratings have open spaces between load-bearing members, allowing drainage and airflow. The choice depends on application, loading, drainage, and access requirements.',
      ),
      faq(
        'Which standard applies to steel chequered plates?',
        'ASTM A786/A786M is a relevant specification for certain hot-rolled steel floor plates. Other material or national standards may apply; confirm the governing specification and edition for the project.',
      ),
      faq(
        'Are chequered plates slip-proof?',
        'No. Raised patterns may improve traction, but oil, grease, water, dust, and other contaminants can reduce slip resistance. Assess actual operating conditions and applicable safety requirements.',
      ),
      faq(
        'How do I choose the correct chequered plate thickness?',
        'Selection depends on steel grade, support spacing, applied loads, plate dimensions, deflection limits, and installation details. Do not select thickness based only on appearance or general rules of thumb.',
      ),
      faq(
        'Can chequered plates be galvanized?',
        'Galvanizing may be possible for suitable steel plates or fabricated components. Confirm product dimensions, surface condition, process suitability, and coating specification before ordering.',
      ),
      faq(
        'Does RK Engineering supply chequered plates to Africa and the USA?',
        'International enquiries can be discussed, but availability and export scope must be confirmed. Provide the product specification, quantity, and destination for review.',
      ),
    ],
    related: ['galvanized-steel-gratings', 'galvanized-handrails', 'galvanized-fabricated-beams'],
  },
  {
    slug: 'transmission-towers',
    name: 'Transmission Towers',
    navigationLabel: 'Transmission Towers',
    group: 'towers',
    image: '66',
    description:
      'Transmission structures that support overhead power lines as part of electricity transmission and distribution infrastructure.',
    overview:
      'Transmission tower specifications depend on voltage requirements, structural loading, tower configuration, material grades, corrosion protection, and project engineering standards. Technical requirements and approvals are established for each project.',
    applications: ['Power transmission networks', 'Electricity distribution projects', 'Industrial and regional power infrastructure'],
    requirements: [
      'Project location, voltage level, tower drawings, and configuration',
      'Structural loading, material grades, and corrosion protection',
      'Applicable engineering standards, inspection criteria, and project approvals',
    ],
    faqs: [
      faq(
        'What information is needed for a transmission tower enquiry?',
        'Share the project location, voltage level, tower drawings, estimated quantity, applicable standards, and technical specifications.',
      ),
      faq(
        'What determines tower specifications?',
        'Specifications depend on voltage requirements, structural loading, tower configuration, material grades, corrosion protection, and project engineering standards.',
      ),
    ],
    related: ['telecom-towers', 'transmission-monopoles', 'substation-structures'],
  },
  {
    slug: 'telecom-towers',
    name: 'Telecom Towers',
    navigationLabel: 'Telecom Towers',
    group: 'towers',
    image: '67',
    description:
      'Tower structures for telecommunications infrastructure, with configuration and project requirements subject to the applicable design and approvals.',
    overview:
      'Telecom tower specifications depend on the project configuration, structural loading, material requirements, corrosion protection, engineering standards, and approvals. Confirm the proposed scope against project drawings and requirements.',
    applications: ['Telecommunications infrastructure', 'Communication networks'],
    requirements: [
      'Project location, tower configuration, drawings, and intended installation',
      'Structural loading, material requirements, and corrosion protection',
      'Applicable engineering standards, inspection criteria, approvals, and delivery destination',
    ],
    faqs: [
      faq(
        'What information should be included in a telecom tower enquiry?',
        'Provide the project location, tower configuration, drawings, structural loading criteria, material and corrosion-protection requirements, applicable standards, quantity, and required approvals.',
      ),
      faq(
        'Are telecom tower specifications the same for every project?',
        'No. Specifications and approvals depend on the individual project design, loading conditions, material requirements, engineering standards, and site conditions.',
      ),
    ],
    related: ['transmission-towers', 'transmission-monopoles', 'power-distribution-poles'],
  },
  {
    slug: 'transmission-monopoles',
    name: 'Transmission Monopoles',
    navigationLabel: 'Transmission Monopoles',
    group: 'towers',
    image: '54',
    description:
      'Monopole structures for suitable electricity transmission and distribution infrastructure projects, subject to project-specific design requirements.',
    overview:
      'Monopole configuration and suitability depend on the project drawings, structural loading, material requirements, corrosion protection, applicable engineering standards, and approvals. Requirements must be reviewed for each project.',
    applications: ['Electricity transmission infrastructure', 'Electricity distribution projects'],
    requirements: [
      'Project location, monopole configuration, drawings, and intended use',
      'Structural loading, material requirements, and corrosion protection',
      'Applicable engineering standards, inspection criteria, approvals, and delivery destination',
    ],
    faqs: [
      faq(
        'What determines transmission monopole specifications?',
        'Specifications depend on the project configuration, structural loading, material requirements, corrosion protection, engineering standards, and approvals.',
      ),
      faq(
        'What should I provide for a monopole quotation?',
        'Share the project location, drawings, configuration, loading criteria, material and coating requirements, quantity, applicable standards, and delivery destination.',
      ),
    ],
    related: ['transmission-towers', 'power-distribution-poles', 'substation-structures'],
  },
  {
    slug: 'power-distribution-poles',
    name: 'Power Distribution Poles',
    navigationLabel: 'Power Distribution Poles',
    group: 'towers',
    image: '55',
    description:
      'Pole structures for suitable electricity distribution infrastructure, with requirements established by project design and applicable approvals.',
    overview:
      'Power distribution pole specifications depend on the installation, structural loading, configuration, material requirements, corrosion protection, engineering standards, and project approvals.',
    applications: ['Electricity distribution networks', 'Utility infrastructure'],
    requirements: [
      'Project location, pole configuration, drawings, and installation requirements',
      'Structural loading, material requirements, and corrosion protection',
      'Applicable engineering standards, inspection criteria, approvals, and delivery destination',
    ],
    faqs: [
      faq(
        'What information is needed for a power distribution pole enquiry?',
        'Provide the project location, pole configuration, drawings, structural loading, material and corrosion-protection requirements, applicable standards, quantity, and delivery destination.',
      ),
      faq(
        'Are power distribution poles available to one standard specification?',
        'The required specification depends on the project design, loading conditions, material requirements, applicable engineering standards, and approvals.',
      ),
    ],
    related: ['transmission-towers', 'transmission-monopoles', 'substation-structures'],
  },
  {
    slug: 'substation-structures',
    name: 'Substation Structures',
    navigationLabel: 'Substation Structures',
    group: 'towers',
    image: '56',
    description:
      'Structures for suitable electrical substation infrastructure, with configuration and specifications defined by the project requirements.',
    overview:
      'Substation structure requirements depend on the project drawings, structural loading, configuration, material requirements, corrosion protection, engineering standards, and approvals. Confirm the required scope for each project.',
    applications: ['Electrical substations', 'Power and utility infrastructure'],
    requirements: [
      'Project location, structure configuration, drawings, and intended installation',
      'Structural loading, material requirements, and corrosion protection',
      'Applicable engineering standards, inspection criteria, approvals, and delivery destination',
    ],
    faqs: [
      faq(
        'What determines a substation structure specification?',
        'Specifications depend on the project design, configuration, structural loading, material requirements, corrosion protection, applicable standards, and approvals.',
      ),
      faq(
        'What should be included in a substation structure enquiry?',
        'Share project drawings, location, configuration, loading criteria, material and coating requirements, quantity, standards, inspection requirements, and approvals.',
      ),
    ],
    related: ['transmission-towers', 'transmission-monopoles', 'power-distribution-poles'],
  },
  {
    slug: 'towers-power-infrastructure',
    name: 'Towers and Power Infrastructure Structures',
    navigationLabel: 'Towers & Power Infrastructure',
    group: 'towers',
    image: '57',
    description:
      'Structures for suitable power transmission, electricity distribution, telecommunications, and electrical infrastructure projects.',
    overview:
      'The documented range includes transmission towers, telecom towers, transmission monopoles, power distribution poles, and substation structures. Specifications depend on structural design, loading conditions, material requirements, engineering standards, and project approvals.',
    applications: ['Power transmission', 'Electricity distribution', 'Telecommunications', 'Substation and electrical infrastructure'],
    requirements: [
      'Structural design, configuration, loads, and site conditions',
      'Material requirements, corrosion protection, and applicable standards',
      'Project approvals, drawings, quantities, and delivery destination',
    ],
    faqs: [
      faq(
        'Which tower and infrastructure products are listed?',
        'The documented range includes transmission towers, telecom towers, transmission monopoles, power distribution poles, and substation structures.',
      ),
      faq(
        'What should be confirmed for a tower project?',
        'Confirm structural design, loading conditions, material requirements, applicable engineering standards, project approvals, and manufacturing feasibility.',
      ),
    ],
    related: ['transmission-towers', 'telecom-towers', 'transmission-monopoles'],
  },
];

export const getProductDetail = (slug: string | undefined): ProductDetail | undefined =>
  PRODUCT_DETAILS.find((product) => product.slug === slug);

export const getProductNavigationProducts = (category: ProductNavigationCategory): ProductDetail[] =>
  category.productSlugs
    .map((slug) => getProductDetail(slug))
    .filter((product): product is ProductDetail => product !== undefined);

export const getProductGroup = (product: ProductDetail): ProductGroup => PRODUCT_GROUPS[product.group];
