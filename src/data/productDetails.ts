import cableTrayImage from '../assets/images/products_cable_trays_1792669705857.jpg';
import galvanizingImage from '../assets/images/galvanizing_facility_1792669705362.jpg';
import heroImage from '../assets/images/hero_cable_tray_plant_1792669704557.jpg';

export type ProductImage = 'cable-tray' | 'galvanizing' | 'placeholder';

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface ProductDetail {
  slug: string;
  name: string;
  group: string;
  image: ProductImage;
  imageAlt?: string;
  description: string;
  overview: string;
  applications: string[];
  requirements: string[];
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
    image: 'cable-tray',
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
    group: 'cable',
    image: 'cable-tray',
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
    group: 'cable',
    image: 'cable-tray',
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
    group: 'cable',
    image: 'cable-tray',
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
    group: 'cable',
    image: 'cable-tray',
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
    image: 'placeholder',
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
    group: 'earthing',
    image: 'placeholder',
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
    group: 'earthing',
    image: 'placeholder',
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
    group: 'earthing',
    image: 'placeholder',
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
    group: 'earthing',
    image: 'placeholder',
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
    group: 'earthing',
    image: 'placeholder',
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
    image: 'placeholder',
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
    group: 'solar',
    image: 'placeholder',
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
    group: 'solar',
    image: 'placeholder',
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
    group: 'solar',
    image: 'placeholder',
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
    group: 'solar',
    image: 'placeholder',
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
    group: 'solar',
    image: 'placeholder',
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
    image: 'galvanizing',
    imageAlt: 'Steel components being processed at a hot-dip galvanizing facility',
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
    related: ['cable-trays', 'solar-mounting-structures', 'transmission-towers', 'towers-power-infrastructure'],
  },
  {
    slug: 'transmission-towers',
    name: 'Transmission Towers',
    group: 'towers',
    image: 'placeholder',
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
    related: ['towers-power-infrastructure', 'hot-dip-galvanized-steel-products', 'earthing-materials'],
  },
  {
    slug: 'towers-power-infrastructure',
    name: 'Towers and Power Infrastructure Structures',
    group: 'towers',
    image: 'placeholder',
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
    related: ['transmission-towers', 'hot-dip-galvanized-steel-products', 'earthing-materials'],
  },
];

export const getProductDetail = (slug: string | undefined): ProductDetail | undefined =>
  PRODUCT_DETAILS.find((product) => product.slug === slug);

export const getProductGroup = (product: ProductDetail): ProductGroup => PRODUCT_GROUPS[product.group];
