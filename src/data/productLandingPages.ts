import preGalvanizedCableTray from "../assets/images/c5.png";
import msPerforatedCableTray from "../assets/images/steel1.avif";
import aluminiumPerforatedCableTray from "../assets/images/a1.avif";
import powderCoatedCableTray from "../assets/images/c6.png";
import preGalvanizedSteel from "../assets/images/c7.png";

export type ProductLandingBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'faq'; question: string; answer: string };

export interface ProductLandingSection {
  heading: string;
  blocks: ProductLandingBlock[];
}

export interface ProductLandingPageDefinition {
  path: string;
  productName: string;
  image?: string[];
  quoteProduct: string;
  title: string;
  description: string;
  categoryEyebrow: string;
  categoryLabel: string;
  categoryPath: string;
  subtitle: string;
  introduction: string[];
  enquiryPrompt?: string;
  enquiryMessage: string;
  initialCta: string;
  sections: ProductLandingSection[];
  finalCta: {
    title: string;
    description: string;
    actions: { label: string; productName?: string; enquiryMessage: string }[];
  };
  relatedLinks: { label: string; path: string }[];
}

export const PRODUCT_LANDING_PAGES: ProductLandingPageDefinition[] = [
  {
    path: '/pre-galvanized-cable-tray/',
    productName: 'Pre-Galvanized Cable Tray',
    image: [preGalvanizedCableTray],
    quoteProduct: 'Pre-Galvanized Cable Tray',
    title: 'Pre-Galvanized Cable Tray Manufacturer for Industrial Cable Management',
    description:
      'RK Engineering offers pre-galvanized cable trays for organized electrical cable routing in industrial, commercial and infrastructure projects.',
    categoryEyebrow: 'Pre-galvanized cable tray – Under Cable Tray',
    categoryLabel: 'Cable Tray',
    categoryPath: '/products?category=cable-trays',
    subtitle: 'Pre-Galvanized Cable Tray Manufacturer for Industrial Cable Management',
    introduction: [
      'RK Engineering offers pre-galvanized cable trays for organized electrical cable routing in industrial, commercial and infrastructure projects. Our solutions are suitable for electrical contractors, EPC companies, panel manufacturers and industrial procurement teams.',
    ],
    enquiryMessage:
      'Looking for Pre-Galvanized Cable Trays? Share the required tray type, width, height, thickness, quantity, material finish, project location and technical drawings.',
    initialCta: 'Get a Quote for Pre-Galvanized Cable Trays',
    sections: [
      {
        heading: 'What Is a Pre-Galvanized Cable Tray?',
        blocks: [
          {
            type: 'paragraph',
            text: 'A pre-galvanized cable tray is manufactured using steel sheets or strips that receive a zinc coating before the tray components are formed and fabricated. The zinc layer helps protect the steel surface against corrosion and provides a finished appearance.',
          },
          {
            type: 'paragraph',
            text: 'These cable trays are used to support and organize electrical power cables, control cables and instrumentation cables. They are suitable for selected indoor installations and electrical infrastructure applications where pre-galvanized finishing meets the project requirements.',
          },
        ],
      },
      {
        heading: 'Why Industries Need Pre-Galvanized Cable Trays',
        blocks: [
          {
            type: 'paragraph',
            text: 'Industrial facilities require reliable cable support systems to maintain safe, organized and accessible electrical installations. Pre-galvanized cable trays offer several practical advantages:',
          },
          {
            type: 'list',
            items: [
              'Corrosion Protection: Zinc coating helps protect steel surfaces from corrosion in suitable environments.',
              'Organized Cable Routing: Provides a structured pathway for power, control and instrumentation cables.',
              'Installation Convenience: Standardized tray sections and accessories can simplify cable routing and installation.',
              'Reduced Maintenance: An appropriate finish can help reduce surface deterioration under suitable operating conditions.',
              'Project Flexibility: Can be specified for manufacturing plants, warehouses, commercial buildings and electrical installations.',
            ],
          },
        ],
      },
      {
        heading: 'Pre-Galvanized Cable Tray Solutions by RK Engineering',
        blocks: [
          {
            type: 'paragraph',
            text: 'RK Engineering provides pre-galvanized steel options for cable management systems, alongside hot dip galvanized and other cable tray finishes. Our cable tray solutions can be considered for different electrical installation requirements, subject to project specifications.',
          },
          { type: 'paragraph', text: 'Key solution considerations include:' },
          {
            type: 'list',
            items: [
              'Material Selection: Pre-galvanized steel selected according to the installation environment and project requirements.',
              'Tray Configuration: Perforated, ladder or raceway-style cable routing, depending on the required cable support arrangement.',
              'Dimensions and Fabrication: Tray width, side height, sheet thickness and section length based on approved drawings.',
              'Cable Tray Accessories: Compatible bends, tees, reducers, coupler plates and support components where required.',
              'Project Customization: Fabrication based on cable routing layouts, installation conditions and procurement specifications.',
            ],
          },
        ],
      },
      {
        heading: 'Applications of Pre-Galvanized Cable Trays',
        blocks: [
          { type: 'paragraph', text: 'Pre-galvanized cable tray systems can support cable routing requirements across:' },
          {
            type: 'list',
            items: [
              'Manufacturing plants and industrial facilities',
              'Commercial buildings and office complexes',
              'Warehouses and logistics centres',
              'Electrical control rooms and panel installations',
              'Data centres and communication infrastructure',
              'Solar power and renewable energy facilities',
              'Power distribution and utility projects',
              'Industrial automation and process facilities',
            ],
          },
        ],
      },
      {
        heading: 'Industries We Serve',
        blocks: [
          { type: 'paragraph', text: 'RK Engineering supports cable management requirements for:' },
          {
            type: 'list',
            items: [
              'Electrical EPC Contractors: Cable routing systems for electrical infrastructure projects.',
              'Power and Utility Companies: Cable support for power distribution and utility installations.',
              'Manufacturing Industries: Cable management for production lines and industrial equipment.',
              'Oil and Gas Projects: Cable routing requirements for suitable plant environments.',
              'Renewable Energy Companies: Cable support systems for solar and other energy projects.',
              'Data Centre and Telecom Contractors: Organized routing for power, control and communication cables.',
              'Infrastructure Developers: Cable management for commercial buildings, industrial parks and public infrastructure.',
            ],
          },
          {
            type: 'paragraph',
            text: 'For international procurement teams, electrical consultants, MEP contractors, distributors and project engineering companies, product selection can be aligned with approved drawings, technical specifications, documentation and delivery requirements.',
          },
        ],
      },
      {
        heading: 'Why Choose RK Engineering?',
        blocks: [
          {
            type: 'paragraph',
            text: 'RK Engineering provides cable management and galvanized steel solutions for industrial and infrastructure projects.',
          },
          {
            type: 'list',
            items: [
              'Established manufacturing experience since 2000.',
              'ISO 9001:2015 certified quality management system.',
              'In-house hot dip galvanizing facility.',
              'Custom fabrication based on project specifications.',
              'Manufacturing and quality inspection capabilities.',
              'Support for bulk orders and international project requirements.',
              'Cable tray solutions for industrial and infrastructure applications.',
            ],
          },
        ],
      },
      {
        heading: 'Pre-Galvanized Cable Tray Supply for Africa and USA',
        blocks: [
          {
            type: 'paragraph',
            text: "RK Engineering targets international industrial and infrastructure requirements, including projects in Africa and the United States. Pre-galvanized cable tray requirements can be evaluated according to the destination country's project specifications, environmental conditions and applicable standards.",
          },
          {
            type: 'list',
            items: [
              'Africa: Kenya, South Africa, Nigeria, Ghana, Tanzania and other developing industrial markets.',
              'USA: Industrial manufacturing facilities, warehouses, commercial buildings, electrical infrastructure and renewable energy projects.',
            ],
          },
          {
            type: 'paragraph',
            text: 'We support enquiries from international EPC contractors, electrical contractors, MEP consultants, procurement managers, industrial distributors and engineering project companies. Export specifications, packaging, documentation and shipping arrangements can be discussed during quotation.',
          },
        ],
      },
      {
        heading: 'Frequently Asked Questions',
        blocks: [
          { type: 'faq', question: 'What is a pre-galvanized cable tray?', answer: 'A pre-galvanized cable tray is manufactured using steel that has been zinc-coated before fabrication. It provides a protective finish for suitable cable management applications.' },
          { type: 'faq', question: 'What is the difference between pre-galvanized and hot dip galvanized cable trays?', answer: 'Pre-galvanized steel receives its zinc coating before fabrication, whereas hot dip galvanizing after fabrication coats the completed steel component. Their suitability depends on the required corrosion protection and installation environment.' },
          { type: 'faq', question: 'Where are pre-galvanized cable trays used?', answer: 'They are used in selected industrial plants, commercial buildings, warehouses, electrical installations and infrastructure projects for organized cable routing.' },
          { type: 'faq', question: 'Can pre-galvanized cable trays be customized?', answer: 'Tray dimensions, configurations, thicknesses and accessories can be specified according to project requirements, subject to manufacturing capability and confirmation.' },
          { type: 'faq', question: 'Are pre-galvanized cable trays suitable for outdoor applications?', answer: 'Suitability depends on the coating specification and environmental exposure. For coastal, highly corrosive or demanding outdoor environments, a more suitable corrosion protection system may be required.' },
          { type: 'faq', question: 'Does RK Engineering support international cable tray enquiries?', answer: 'RK Engineering serves international markets and can discuss cable tray requirements for projects in Africa, the USA and other export destinations.' },
          { type: 'faq', question: 'What information is required to request a cable tray quotation?', answer: 'Share the required tray type, width, height, thickness, quantity, material finish, project location and technical drawings to help prepare a suitable quotation.' },
        ],
      },
    ],
    finalCta: {
      title: 'Get a Quote for Pre-Galvanized Cable Trays',
      description: 'Looking for a reliable Pre-Galvanized Cable Tray Manufacturer and Supplier in India for your industrial or international project? Partner with RK Engineering for cable management solutions based on your technical requirements, project drawings and procurement specifications.',
      actions: [
        { label: 'Request a Quote', productName: 'Pre-Galvanized Cable Tray', enquiryMessage: 'Request a quote for Pre-Galvanized Cable Trays based on my technical requirements, project drawings and procurement specifications.' },
        { label: 'Discuss Your Project', enquiryMessage: 'I would like to discuss a Pre-Galvanized Cable Tray project.' },
      ],
    },
    relatedLinks: [
      { label: 'Cable Tray & Duct Products', path: '/products/cable-trays' },
      { label: 'Perforated Type Cable Tray', path: '/products/perforated-cable-trays' },
      { label: 'Ladder Type Cable Tray', path: '/products/ladder-cable-trays' },
    ],
  },
  {
    path: '/mild-steel-perforated-cable-tray/',
    productName: 'Mild Steel Perforated Cable Tray',
    image: [msPerforatedCableTray],
    quoteProduct: 'Mild Steel Perforated Cable Tray',
    title: 'Mild Steel Perforated Cable Tray for Industrial Cable Management',
    description: 'RK Engineering offers mild steel perforated cable trays for organized cable routing in industrial, commercial and infrastructure projects.',
    categoryEyebrow: 'Mild steel perforated cable tray – Under Cable Tray',
    categoryLabel: 'Cable Tray',
    categoryPath: '/products?category=cable-trays',
    subtitle: 'Mild Steel Perforated Cable Tray for Industrial Cable Management',
    introduction: [
      'RK Engineering offers mild steel perforated cable trays for organized cable routing in industrial, commercial and infrastructure projects. Designed to support power, control and instrumentation cables, these trays can be specified according to project dimensions, cable loads and installation requirements.',
    ],
    enquiryMessage: 'Looking for Mild Steel Perforated Cable Trays? Share the tray width, side height, sheet thickness, length, material finish, quantity, cable load requirements, destination and technical drawings.',
    initialCta: 'Get a Quote for Mild Steel Perforated Cable Trays',
    sections: [
      {
        heading: 'What Is a Mild Steel Perforated Cable Tray?',
        blocks: [
          { type: 'paragraph', text: 'A mild steel perforated cable tray is a cable support system manufactured from mild steel sheets with regularly spaced openings along its base. These perforations help provide ventilation, assist heat dissipation around cables and allow drainage in suitable installation environments.' },
          { type: 'paragraph', text: 'The tray supports and organizes electrical cables while providing access for inspection, maintenance and future cable additions. It is commonly considered for factories, commercial buildings, warehouses, power facilities and infrastructure projects.' },
        ],
      },
      {
        heading: 'Why Industries Need Mild Steel Perforated Cable Trays',
        blocks: [
          { type: 'paragraph', text: 'Industrial electrical installations require dependable cable support to keep wiring organized and accessible. Mild steel perforated cable trays offer several practical benefits:' },
          { type: 'list', items: ['Structural Support: Provides a defined support pathway for electrical and control cables.', 'Ventilation: Perforations allow airflow around cables and can help reduce heat accumulation.', 'Cable Organization: Helps separate and route cables systematically across facilities.', 'Maintenance Access: Open construction makes cable inspection and additions more convenient.', 'Fabrication Flexibility: Mild steel can be fabricated to project-specific widths, side heights and lengths.', 'Installation Adaptability: Can be integrated with suitable bends, tees, reducers, couplers and support systems.'] },
        ],
      },
      {
        heading: 'Mild Steel Perforated Cable Tray Solutions by RK Engineering',
        blocks: [
          { type: 'paragraph', text: 'RK Engineering provides industrial cable tray and fabrication solutions using mild steel and other suitable materials. Mild steel perforated cable trays can be specified according to project drawings, cable routing layouts and installation requirements.' },
          { type: 'paragraph', text: 'Our solution considerations include:' },
          { type: 'list', items: ['Perforated Tray Design: Slotted or punched openings to support ventilation and cable routing.', 'Material Selection: Mild steel sheet selected according to required strength and application.', 'Custom Fabrication: Tray width, side height, length and thickness based on approved drawings.', 'Surface Finishing: Options such as primer, powder coating or hot dip galvanizing, where specified and available.', 'Accessories: Horizontal bends, vertical bends, tees, reducers, coupler plates, covers and support brackets.', 'Project-Based Supply: Tray sections and accessories coordinated with electrical installation layouts.'] },
        ],
      },
      {
        heading: 'Applications of Mild Steel Perforated Cable Trays',
        blocks: [
          { type: 'paragraph', text: 'Mild steel perforated cable trays are used in different electrical and industrial installations, including:' },
          { type: 'list', items: ['Manufacturing plants and production facilities', 'Power generation and distribution stations', 'Oil and gas processing facilities', 'Petrochemical and chemical industries', 'Commercial buildings and office complexes', 'Warehouses and logistics centres', 'Solar power plants and renewable energy projects', 'Data centres and telecommunication facilities', 'Water treatment and infrastructure projects', 'Industrial automation and control systems'] },
        ],
      },
      {
        heading: 'Industries We Serve',
        blocks: [
          { type: 'paragraph', text: 'RK Engineering supports cable management requirements for different industrial and infrastructure sectors.' },
          { type: 'list', items: ['Power and Energy Companies: Cable support systems for power generation and distribution facilities.', 'EPC Contractors: Cable tray supply based on electrical project drawings and technical specifications.', 'Electrical Contractors: Cable management products for industrial and commercial installations.', 'Oil and Gas Companies: Cable routing solutions for suitable processing and utility facilities.', 'Manufacturing Industries: Cable support for production equipment, machinery and automation systems.', 'Renewable Energy Developers: Cable routing requirements for solar power and energy infrastructure.', 'MEP Consultants and Contractors: Cable tray systems for building electrical services.', 'Industrial Distributors: Cable tray products for electrical and infrastructure supply networks.'] },
          { type: 'paragraph', text: 'We also work towards the requirements of procurement managers, project engineers, electrical consultants, panel builders and infrastructure developers who need consistent product specifications, fabrication coordination and bulk supply support.' },
        ],
      },
      {
        heading: 'Why Choose RK Engineering?',
        blocks: [
          { type: 'paragraph', text: 'RK Engineering is an industrial cable tray and hot dip galvanizing manufacturer established in 2000. The company highlights its ISO 9001:2015 certification, in-house galvanizing facility, manufacturing capacity and experience supporting domestic and international industrial projects.' },
          { type: 'list', items: ['Established manufacturing experience since 2000.', 'ISO 9001:2015 certified quality management system.', 'In-house hot dip galvanizing facility.', 'Custom fabrication based on customer drawings.', 'Cable tray and galvanized steel product range.', 'Quality inspection and manufacturing capabilities.', 'Support for bulk industrial and infrastructure requirements.', 'Domestic and international supply experience.'] },
        ],
      },
      {
        heading: 'Mild Steel Perforated Cable Tray Supply for Africa and USA',
        blocks: [
          { type: 'paragraph', text: 'RK Engineering targets international industrial and infrastructure projects, including cable management requirements in Africa and the United States.' },
          { type: 'list', items: ['Africa: Mild steel perforated cable trays can be considered for manufacturing plants, power distribution projects, warehouses, commercial buildings and industrial infrastructure in markets such as Kenya, South Africa, Nigeria, Ghana and Tanzania.', 'USA: Cable tray requirements can be evaluated for manufacturing facilities, industrial buildings, warehouses, energy projects, data centres and electrical infrastructure, subject to applicable project specifications and standards.'] },
          { type: 'paragraph', text: 'We welcome enquiries from international EPC contractors, electrical contractors, MEP companies, engineering consultants, industrial distributors and procurement teams looking for mild steel cable tray manufacturers and exporters from India. Product dimensions, material specifications, protective coating, technical documentation, packaging and export requirements can be discussed during quotation.' },
        ],
      },
      {
        heading: 'Frequently Asked Questions',
        blocks: [
          { type: 'faq', question: 'What is a mild steel perforated cable tray?', answer: 'A mild steel perforated cable tray is an electrical cable support system manufactured from mild steel sheets with punched or slotted openings. It helps organize and support electrical cables in industrial and commercial installations.' },
          { type: 'faq', question: 'What are the advantages of perforated cable trays?', answer: 'Perforated cable trays provide structured cable support, ventilation, convenient cable access and flexibility for future cable additions.' },
          { type: 'faq', question: 'What is the difference between MS and GI perforated cable trays?', answer: 'MS cable trays are manufactured from mild steel, while GI cable trays have a zinc-coated surface. GI or suitably galvanized trays generally provide better corrosion protection than untreated mild steel.' },
          { type: 'faq', question: 'Can mild steel perforated cable trays be customized?', answer: 'Yes, tray width, side height, thickness, length, perforation pattern and accessories can be specified according to project requirements and manufacturing capabilities.' },
          { type: 'faq', question: 'Are mild steel perforated cable trays suitable for outdoor installations?', answer: 'Untreated mild steel is generally vulnerable to corrosion in outdoor environments. A suitable protective coating should be specified based on moisture, humidity, coastal exposure and other environmental conditions.' },
          { type: 'faq', question: 'Which industries use mild steel perforated cable trays?', answer: 'They are used in manufacturing, power generation, oil and gas, petrochemical, infrastructure, renewable energy, commercial buildings and industrial automation projects.' },
          { type: 'faq', question: 'Does RK Engineering supply cable trays for export projects?', answer: 'RK Engineering supports international industrial and infrastructure enquiries, including requirements from Africa, the USA and other markets. Product specifications and export arrangements can be discussed with the sales team.' },
          { type: 'faq', question: 'What details are required to request a quotation?', answer: 'Share the tray width, side height, sheet thickness, length, material finish, quantity, cable load requirements, destination and technical drawings to receive a project-specific quotation.' },
        ],
      },
    ],
    finalCta: {
      title: 'Get a Quote for Mild Steel Perforated Cable Trays',
      description: 'Looking for a reliable Mild Steel Perforated Cable Tray Manufacturer and Supplier in India for your industrial or international project? Connect with RK Engineering for customized cable tray solutions based on your technical specifications, project drawings and bulk procurement requirements.',
      actions: [
        { label: 'Request a Quote', productName: 'Mild Steel Perforated Cable Tray', enquiryMessage: 'Request a quote for Mild Steel Perforated Cable Trays based on my technical specifications, project drawings and bulk procurement requirements.' },
        { label: 'Discuss Your Project', enquiryMessage: 'I would like to discuss a Mild Steel Perforated Cable Tray project.' },
      ],
    },
    relatedLinks: [
      { label: 'Cable Tray & Duct Products', path: '/products/cable-trays' },
      { label: 'Perforated Type Cable Tray', path: '/products/perforated-cable-trays' },
      { label: 'Raceway Cable Tray', path: '/products/raceway-cable-trays' },
    ],
  },
  {
    path: '/aluminium-perforated-cable-tray/',
    productName: 'Aluminium Perforated Cable Tray',
    image: [aluminiumPerforatedCableTray],
    quoteProduct: 'Aluminium Perforated Cable Tray',
    title: 'Aluminium Perforated Cable Tray for Industrial Cable Management',
    description: 'RK Engineering offers aluminium perforated cable tray solutions for organized electrical cable routing in industrial, commercial and infrastructure projects.',
    categoryEyebrow: 'Aluminium perforated cable tray – Under Cable Tray',
    categoryLabel: 'Cable Tray',
    categoryPath: '/products?category=cable-trays',
    subtitle: 'Aluminium Perforated Cable Tray for Industrial Cable Management',
    introduction: [
      'RK Engineering offers aluminium perforated cable tray solutions for organized electrical cable routing in industrial, commercial and infrastructure projects. Lightweight construction, corrosion resistance and convenient cable access make aluminium trays suitable for various electrical installations.',
    ],
    enquiryMessage: 'Looking for Aluminium Perforated Cable Trays? Share the aluminium grade, tray width, side height, thickness, length, quantity, finish, cable load requirements, destination and technical drawings.',
    initialCta: 'Get a Quote for Aluminium Perforated Cable Trays',
    sections: [
      {
        heading: 'What Is an Aluminium Perforated Cable Tray?',
        blocks: [
          { type: 'paragraph', text: 'An aluminium perforated cable tray is a cable support system manufactured from aluminium sheets with regularly spaced openings along its base. The perforations allow airflow around installed cables and provide access for cable fastening, inspection and maintenance.' },
          { type: 'paragraph', text: 'Aluminium construction offers a lightweight alternative to steel cable trays while providing natural corrosion resistance. These trays are used for supporting power, control and instrumentation cables in suitable industrial and commercial environments.' },
        ],
      },
      {
        heading: 'Why Industries Need Aluminium Perforated Cable Trays',
        blocks: [
          { type: 'paragraph', text: 'Electrical contractors and industrial project teams require cable support systems that are easy to handle, durable and suitable for their installation environment.' },
          { type: 'list', items: ['Lightweight Construction: Aluminium reduces tray handling weight compared with many steel alternatives.', 'Corrosion Resistance: Aluminium naturally forms a protective oxide layer that helps resist corrosion.', 'Cable Ventilation: Perforations support airflow around cables and can help dissipate heat.', 'Easy Installation: Lightweight sections can simplify transportation, handling and installation.', 'Cable Accessibility: Openings provide convenient access for cable ties and inspection.', "Low Maintenance: Aluminium's corrosion-resistant properties can reduce maintenance needs in suitable environments."] },
        ],
      },
      {
        heading: 'Aluminium Perforated Cable Tray Solutions by RK Engineering',
        blocks: [
          { type: 'paragraph', text: 'RK Engineering provides industrial cable management and cable tray solutions for electrical and infrastructure projects. Aluminium perforated cable trays can be specified for projects requiring lightweight cable support and corrosion-resistant material selection, subject to product availability and manufacturing confirmation.' },
          { type: 'paragraph', text: 'Key product considerations include:' },
          { type: 'list', items: ['Perforated Tray Design: Regularly spaced openings for cable ventilation, fastening and inspection.', 'Aluminium Material: Selection of a suitable aluminium alloy and temper according to mechanical and environmental requirements.', 'Custom Dimensions: Tray width, side height, length and material thickness based on approved project drawings.', 'Surface Finish: Mill finish or specified surface treatment, depending on the application.', 'Cable Tray Accessories: Horizontal bends, vertical bends, tees, reducers, couplers, covers and support brackets.', 'Project-Specific Fabrication: Tray configurations planned around cable routing layouts and installation conditions.'] },
        ],
      },
      {
        heading: 'Applications of Aluminium Perforated Cable Trays',
        blocks: [
          { type: 'paragraph', text: 'Aluminium perforated cable trays can be considered for suitable applications across:' },
          { type: 'list', items: ['Manufacturing plants and industrial facilities', 'Commercial buildings and office complexes', 'Data centres and IT infrastructure', 'Power generation and distribution facilities', 'Renewable energy and solar power projects', 'Water treatment and utility facilities', 'Warehouses and logistics centres', 'Telecommunication and networking installations', 'Coastal and marine-related facilities, subject to alloy and environmental suitability', 'Industrial automation and control systems'] },
        ],
      },
      {
        heading: 'Industries We Serve',
        blocks: [
          { type: 'paragraph', text: 'RK Engineering targets cable management requirements across multiple industries and infrastructure sectors.' },
          { type: 'list', items: ['Power and Energy Companies: Cable support systems for power generation and distribution facilities.', 'EPC Contractors: Cable tray supply based on project drawings and engineering specifications.', 'Electrical Contractors: Cable management products for industrial and commercial installations.', 'Oil and Gas Companies: Cable routing systems for suitable plant and utility environments.', 'Manufacturing Industries: Cable support for machinery, production lines and automation systems.', 'Renewable Energy Developers: Cable management for solar power and renewable energy installations.', 'Data Centre Developers: Cable routing solutions for power distribution and supporting infrastructure.', 'MEP Consultants and Contractors: Cable tray systems for building electrical services.', 'Industrial Distributors: Cable tray products for electrical and infrastructure supply networks.'] },
          { type: 'paragraph', text: 'We also support enquiries from procurement managers, project engineers, electrical consultants, panel manufacturers, system integrators and infrastructure developers who require project-specific dimensions, technical documentation, bulk quantities and coordinated product supply.' },
        ],
      },
      {
        heading: 'Why Choose RK Engineering?',
        blocks: [
          { type: 'paragraph', text: 'RK Engineering is an industrial cable tray and hot dip galvanizing manufacturer established in 2000. The company highlights its ISO 9001:2015 certification, manufacturing capabilities, in-house galvanizing facility and experience serving domestic and international industrial projects.' },
          { type: 'list', items: ['Established manufacturing experience since 2000.', 'ISO 9001:2015 certified quality management system.', 'In-house hot dip galvanizing facility.', 'Custom fabrication based on customer drawings.', 'Industrial cable tray and galvanized steel product range.', 'Quality inspection and manufacturing capabilities.', 'Support for bulk industrial and infrastructure requirements.', 'Domestic and international project experience.'] },
        ],
      },
      {
        heading: 'Aluminium Perforated Cable Tray Supply for Africa and USA',
        blocks: [
          { type: 'paragraph', text: 'RK Engineering targets international industrial and infrastructure requirements, including cable management projects in Africa and the United States.' },
          { type: 'list', items: ['Africa: Aluminium perforated cable trays can be considered for suitable manufacturing plants, commercial buildings, power facilities, warehouses, renewable energy projects and infrastructure developments in markets such as Kenya, South Africa, Nigeria, Ghana and Tanzania.', 'USA: Potential applications include industrial manufacturing facilities, commercial buildings, data centres, renewable energy projects, electrical infrastructure and utility installations. Product specifications must be evaluated against applicable US project requirements.'] },
          { type: 'paragraph', text: 'We welcome enquiries from international EPC contractors, electrical contractors, MEP consultants, engineering companies, industrial distributors, project developers and procurement teams looking for aluminium cable tray manufacturers and suppliers from India. Material grade, tray dimensions, load ratings, accessories, technical documentation, export packaging and shipping arrangements can be discussed during quotation.' },
        ],
      },
      {
        heading: 'Frequently Asked Questions',
        blocks: [
          { type: 'faq', question: 'What is an aluminium perforated cable tray?', answer: 'An aluminium perforated cable tray is a cable support system manufactured from aluminium sheets with regularly spaced openings. It helps organize electrical cables while providing ventilation and convenient cable access.' },
          { type: 'faq', question: 'What are the advantages of aluminium perforated cable trays?', answer: 'They offer lightweight construction, natural corrosion resistance, convenient handling, cable ventilation and accessibility for inspection and maintenance.' },
          { type: 'faq', question: 'What is the difference between aluminium and mild steel perforated cable trays?', answer: 'Aluminium trays are generally lighter and naturally corrosion-resistant, while mild steel trays offer different structural and cost advantages. Selection depends on cable loads, environmental exposure and project requirements.' },
          { type: 'faq', question: 'Are aluminium perforated cable trays suitable for outdoor applications?', answer: 'They can be suitable for selected outdoor environments, depending on the aluminium alloy, surface condition, atmospheric exposure and installation design. Coastal and chemically aggressive environments require particular material evaluation.' },
          { type: 'faq', question: 'Can aluminium perforated cable trays be customized?', answer: 'Tray width, side height, thickness, length, perforation pattern and accessories can be specified according to project drawings and manufacturing capabilities.' },
          { type: 'faq', question: 'Which industries use aluminium perforated cable trays?', answer: 'They are used in suitable manufacturing facilities, commercial buildings, data centres, power projects, renewable energy installations and infrastructure developments.' },
          { type: 'faq', question: 'Does RK Engineering support international cable tray enquiries?', answer: 'RK Engineering serves international industrial and infrastructure markets and can discuss project requirements for Africa, the USA and other export destinations. Aluminium product availability should be confirmed with the sales team.' },
          { type: 'faq', question: 'What information is required to request a quotation?', answer: 'Share the aluminium grade, tray width, side height, thickness, length, quantity, finish, cable load requirements, destination and technical drawings for a project-specific quotation.' },
        ],
      },
    ],
    finalCta: {
      title: 'Get a Quote for Aluminium Perforated Cable Trays',
      description: 'Looking for a reliable Aluminium Perforated Cable Tray Manufacturer and Supplier in India for your industrial or international project? Connect with RK Engineering to discuss your cable management requirements, technical specifications, project drawings and bulk procurement needs.',
      actions: [
        { label: 'Request a Quote', productName: 'Aluminium Perforated Cable Tray', enquiryMessage: 'Request a quote for Aluminium Perforated Cable Trays based on my cable management requirements, technical specifications and project drawings.' },
        { label: 'Discuss Your Project', enquiryMessage: 'I would like to discuss an Aluminium Perforated Cable Tray project.' },
      ],
    },
    relatedLinks: [
      { label: 'Cable Tray & Duct Products', path: '/products/cable-trays' },
      { label: 'Perforated Type Cable Tray', path: '/products/perforated-cable-trays' },
      { label: 'Pre-Galvanized Cable Tray', path: '/pre-galvanized-cable-tray/' },
    ],
  },
  {
    path: '/powder-coated-cable-tray/',
    productName: 'Powder Coated Cable Tray',
    image: [powderCoatedCableTray],
    quoteProduct: 'Cable Trays & Ducts',
    title: 'Powder Coated Cable Tray Manufacturer in India',
    description:
      'Durable, Colour-Finished Cable Tray Systems for Industrial Projects. RK Engineering manufactures cable management solutions for industrial, commercial and infrastructure applications, including powder-coated cable trays.',
    categoryEyebrow: 'Powder-coated cable trays – Under Cable Tray',
    categoryLabel: 'Cable Tray',
    categoryPath: '/products?category=cable-trays',
    subtitle: 'Durable, Colour-Finished Cable Tray Systems for Industrial Projects',
    introduction: [
      'RK Engineering manufactures cable management solutions for industrial, commercial and infrastructure applications, including powder-coated cable trays. These systems support organized cable routing while providing a finished surface suitable for installations where appearance, colour identification and coating requirements matter.',
      'Powder-coated cable trays are used in selected electrical installations, manufacturing facilities, commercial buildings and infrastructure projects. The appropriate system depends on cable loading, support span, tray configuration, base material, coating specification and environmental exposure.',
    ],
    enquiryMessage:
      'RK Engineering manufactures cable management solutions for industrial, commercial and infrastructure applications, including powder-coated cable trays. These systems support organized cable routing while providing a finished surface suitable for installations where appearance, colour identification and coating requirements matter.',
    initialCta: 'Request a Powder Coated Cable Tray Quote',
    sections: [
      {
        heading: 'What Is a Powder Coated Cable Tray?',
        blocks: [
          {
            type: 'paragraph',
            text: 'A powder-coated cable tray is a cable support system with a protective decorative coating applied as dry powder and cured to form a finished surface. The tray may be manufactured from mild steel or another specified substrate, depending on the product design.',
          },
          {
            type: 'paragraph',
            text: "Powder coating can provide a consistent finish, colour options and an additional protective layer. The coating's performance depends on the substrate preparation, pretreatment process, powder chemistry, coating thickness, curing conditions and operating environment.",
          },
        ],
      },
      {
        heading: 'Applications of Powder Coated Cable Trays',
        blocks: [
          { type: 'subheading', text: 'Industrial Manufacturing Facilities' },
          {
            type: 'paragraph',
            text: 'Powder-coated cable trays can support organized routing of power, control and instrumentation cables in suitable manufacturing environments.',
          },
          { type: 'subheading', text: 'Commercial Buildings and Office Complexes' },
          {
            type: 'paragraph',
            text: 'A coloured finish can be useful in visible electrical installations where the tray system forms part of the building services infrastructure.',
          },
          { type: 'subheading', text: 'Data Centres and IT Facilities' },
          {
            type: 'paragraph',
            text: 'Cable management systems can be selected to support organized routing and future maintenance. The tray configuration, load, cable segregation and installation requirements should follow the project design.',
          },
          { type: 'subheading', text: 'Power Plants and Electrical Infrastructure' },
          {
            type: 'paragraph',
            text: 'Cable trays may be used for power distribution, control systems and instrumentation. The specified tray must be suitable for the electrical installation environment and cable loading.',
          },
          { type: 'subheading', text: 'Renewable Energy Projects' },
          {
            type: 'paragraph',
            text: 'Cable management systems can support routing for selected solar and other renewable energy installations. Outdoor exposure, ultraviolet exposure, moisture and temperature variations should be considered when selecting the coating system.',
          },
          { type: 'subheading', text: 'Oil, Gas and Process Industries' },
          {
            type: 'paragraph',
            text: 'The appropriate cable tray material and finish should be selected for the specific process environment, including chemical exposure, humidity, temperature and other project requirements.',
          },
          { type: 'subheading', text: 'Warehouses and Logistics Facilities' },
          {
            type: 'paragraph',
            text: 'Powder-coated cable trays may be used for visible service routes, lighting circuits, communication systems and industrial automation installations.',
          },
        ],
      },
      {
        heading: 'Powder Coated Cable Tray Manufacturer for African Markets',
        blocks: [
          {
            type: 'paragraph',
            text: 'For industrial and infrastructure projects across Africa, the correct cable tray system depends on the installation environment, cable loading, project standards and corrosion-protection requirements.',
          },
          {
            type: 'paragraph',
            text: 'Electrical contractors, EPC companies, MEP consultants, panel builders and procurement teams should provide technical details early to help avoid mismatched tray dimensions, finishes or fittings.',
          },
          { type: 'subheading', text: 'Kenya and Tanzania' },
          {
            type: 'paragraph',
            text: 'Powder-coated cable trays may be considered for suitable commercial buildings, industrial facilities, electrical installations and selected infrastructure projects. Specify the coating system and assess whether additional corrosion protection is required for outdoor or humid environments.',
          },
          { type: 'subheading', text: 'South Africa' },
          {
            type: 'paragraph',
            text: 'Industrial plants, commercial developments and infrastructure projects may require cable management systems with specified mechanical performance, finish and installation requirements. Buyers should identify the governing standards and environmental exposure.',
          },
          { type: 'subheading', text: 'Nigeria and Ghana' },
          {
            type: 'paragraph',
            text: 'For industrial facilities, commercial buildings and utility projects, procurement teams should specify the tray configuration, cable loading, support spacing, coating requirements and accessories.',
          },
          { type: 'subheading', text: 'Uganda and Botswana' },
          {
            type: 'paragraph',
            text: 'For industrial and commercial electrical installations, provide drawings, quantities, coating details and project location so the required system can be assessed against site conditions.',
          },
          {
            type: 'subheading',
            text: 'What African EPC Contractors and Electrical Buyers Should Include in an RFQ',
          },
          {
            type: 'list',
            items: [
              'Project location and application.',
              'Tray type and dimensions.',
              'Base material and thickness.',
              'Cable load and support spacing.',
              'Powder-coating system and colour code.',
              'Indoor or outdoor exposure conditions.',
              'Required fittings, covers, supports and accessories.',
              'Applicable standards and inspection requirements.',
              'Quantities, packaging and delivery schedule.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Suggested Africa SEO keyword targets: Powder coated cable tray supplier Africa, powder coated cable tray manufacturer Kenya, powder coated cable tray Tanzania, cable tray supplier South Africa, powder coated cable tray Nigeria, industrial cable tray supplier Ghana, powder coated electrical cable tray Africa.',
          },
          {
            type: 'paragraph',
            text: 'These are proposed SEO targets, not verified search rankings or search-volume figures.',
          },
        ],
      },
      {
        heading: 'Powder Coated Cable Tray Supplier for the USA Market',
        blocks: [
          {
            type: 'paragraph',
            text: 'US electrical and industrial projects may specify powder-coated cable trays for selected indoor, commercial and industrial installations. The appropriate product depends on the tray configuration, substrate, loading requirements, coating system and governing electrical installation specification.',
          },
          {
            type: 'paragraph',
            text: 'IEC 61537 may be referenced in international cable management projects, while US projects may specify other applicable standards or requirements. Confirm the governing standard, edition, testing and acceptance criteria with the project engineer',
          },
          { type: 'subheading', text: 'What US Buyers Should Specify' },
          {
            type: 'list',
            items: [
              'Tray configuration and dimensions.',
              'Base material and thickness.',
              'Required cable load and support span.',
              'Powder-coating system and colour.',
              'Surface preparation and coating acceptance criteria.',
              'Fittings, couplers, covers and support accessories.',
              'Applicable standards and product test documentation.',
              'Installation environment and corrosion-protection requirements.',
              'Packaging, delivery destination and shipping schedule.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Suggested USA SEO keyword targets: Powder coated cable tray supplier USA, powder coated cable tray manufacturer USA, industrial powder coated cable tray, powder coated ladder cable tray, powder coated perforated cable tray, electrical cable tray supplier USA, colour coated cable tray systems.',
          },
          {
            type: 'paragraph',
            text: "These are proposed search-targeting terms. Actual search volume, ranking difficulty and relevance to RK Engineering's products should be validated before prioritization.",
          },
        ],
      },
      {
        heading: 'Why Choose RK Engineering for Powder Coated Cable Trays?',
        blocks: [
          { type: 'subheading', text: 'Established Cable Tray Product Range' },
          {
            type: 'paragraph',
            text: 'RK Engineering\'s published cable tray range includes perforated, ladder and raceway cable trays, along with accessories and other cable management solutions. Its ladder cable tray page lists powder coating among the available finish options. <Cite refs={["turn606452view1","turn606452view0"]}/>',
          },
          { type: 'subheading', text: 'Material and Finish Options' },
          {
            type: 'paragraph',
            text: 'The company\'s cable management pages describe mild steel, pre-galvanized steel and hot dip galvanized steel as material options, with finishes selected according to product requirements. Confirm the exact substrate and coating combination for each order. <Cite refs={["turn606452view2"]}/>',
          },
          { type: 'subheading', text: 'Project-Specific Requirements' },
          {
            type: 'paragraph',
            text: 'Electrical contractors, EPC companies, MEP consultants and OEMs can share drawings, cable schedules, quantities and installation requirements for review.',
          },
          { type: 'subheading', text: 'Quality and Dimensional Inspection' },
          {
            type: 'paragraph',
            text: 'Inspection requirements can be defined for dimensions, fabrication quality, coating condition and finished-product acceptance according to the applicable purchase specification.',
          },
          { type: 'subheading', text: 'Support for Industrial and Export Enquiries' },
          {
            type: 'paragraph',
            text: 'RK Engineering serves industrial and infrastructure projects in India and international markets. Buyers can submit technical specifications, project quantities and delivery requirements for review.',
          },
        ],
      },
      {
        heading: 'Frequently Asked Questions',
        blocks: [
          {
            type: 'faq',
            question: '1. What is a powder-coated cable tray?',
            answer:
              'A powder-coated cable tray is a cable support system with a cured powder coating applied to its surface. It supports organized cable routing and can provide a specified coloured finish and additional surface protection.',
          },
          {
            type: 'faq',
            question: '2. What are the advantages of powder-coated cable trays?',
            answer:
              'Potential benefits include a consistent finish, colour options, route identification and additional surface protection. Actual corrosion resistance depends on the substrate, pretreatment, coating system and installation environment.',
          },
          {
            type: 'faq',
            question: '3. Are powder-coated cable trays suitable for outdoor use?',
            answer:
              'They may be suitable for selected outdoor applications when the complete coating system is specified for the environmental conditions. Humidity, UV exposure, coastal salts, chemicals and coating damage should be considered before selection.',
          },
          {
            type: 'faq',
            question: '4. Which types of powder-coated cable trays are available?',
            answer:
              'Common configurations include perforated, ladder and raceway systems. Covers, fittings and custom configurations should be confirmed with RK Engineering for the specific order.',
          },
          {
            type: 'faq',
            question: '5. How do I choose the correct cable tray size?',
            answer:
              'Tray width and height depend on cable quantity, cable diameters, segregation requirements, bend radii, future expansion and the installation specification. The support span and cable load must also be checked.',
          },
          {
            type: 'faq',
            question: '6. What coating thickness should be specified?',
            answer:
              'The required dry-film thickness depends on the specified powder-coating system, substrate, exposure conditions and project acceptance criteria. Confirm the value with the coating specification rather than assuming a universal thickness.',
          },
          {
            type: 'faq',
            question: '7. Can powder-coated cable trays be supplied in custom colours?',
            answer:
              'Colour requirements can be specified using an agreed colour reference, such as a RAL code, subject to product and coating availability. Confirm colour, finish and quantity requirements before ordering.',
          },
          {
            type: 'faq',
            question: '8. Which standard applies to cable tray systems?',
            answer:
              "IEC 61537 is a relevant international cable tray and cable ladder standard. The governing standard and edition depend on the project and destination market. Verify the product's actual conformity documentation before specifying compliance.",
          },
          {
            type: 'faq',
            question: '9. Does RK Engineering supply powder-coated cable trays internationally?',
            answer:
              'RK Engineering lists powder-coated cable trays among its cable management offerings and describes international supply capability. Confirm the required tray configuration, coating system, availability and destination-specific documentation with the company.',
          },
        ],
      },
    ],
    finalCta: {
      title: 'Get the Right Powder Coated Cable Tray for Your Project',
      description:
        'Choose a cable tray system based on cable loading, support spacing, material, coating requirements and the installation environment.',
      actions: [
        {
          label: 'Request a Powder Coated Cable Tray Quote',
          enquiryMessage:
            'Choose a cable tray system based on cable loading, support spacing, material, coating requirements and the installation environment.',
        },
        {
          label: 'Send Your Cable Tray BOQ',
          enquiryMessage:
            'Choose a cable tray system based on cable loading, support spacing, material, coating requirements and the installation environment.',
        },
      ],
    },
    relatedLinks: [
      { label: 'Cable Tray & Duct Products', path: '/products/cable-trays' },
      { label: 'Hot Dip Galvanized Cable Tray for African Markets', path: '/hot-dip-galvanized-cable-tray-africa' },
    ],
  },
  {
    path: '/pre-galvanized-steel-products/',
    productName: 'Pre-Galvanized Steel Products',
    image: [preGalvanizedSteel],
    quoteProduct: 'Hot-Dip Galvanized Products',
    title: 'Pre-Galvanized Steel Products Manufacturer in India',
    description:
      'Reliable Pre-Galvanized Steel Solutions for Industrial and Electrical Infrastructure. RK Engineering provides industrial cable management, steel fabrication and galvanizing solutions for infrastructure and industrial applications.',
    categoryEyebrow: 'Pre – Galvanized – under Hot Dip Galvanizing Product',
    categoryLabel: 'Hot Dip Galvanizing',
    categoryPath: '/products?category=galvanized-steel',
    subtitle: 'Reliable Pre-Galvanized Steel Solutions for Industrial and Electrical Infrastructure',
    introduction: [
      'RK Engineering provides industrial cable management, steel fabrication and galvanizing solutions for infrastructure and industrial applications. Pre-galvanized steel is widely used in manufactured components where zinc-coated steel sheet is formed, cut or fabricated into finished products.',
      'For electrical contractors, EPC companies, cable tray manufacturers, industrial procurement teams and infrastructure developers, pre-galvanized steel offers a practical option for indoor and selected outdoor applications where the specified coating and environmental conditions are suitable.',
      'Our product range includes cable management solutions using pre-galvanized steel as a material option, subject to product specifications and availability.',
    ],
    enquiryPrompt:
      'Looking for Pre-Galvanized Steel Cable Trays or Industrial Components? Share your application, material requirements, dimensions and project quantities with RK Engineering.',
    enquiryMessage:
      'Looking for Pre-Galvanized Steel Cable Trays or Industrial Components? Share your application, material requirements, dimensions and project quantities with RK Engineering.',
    initialCta: 'Request a Pre-Galvanized Steel Quote',
    sections: [
      {
        heading: 'What Is Pre-Galvanized Steel?',
        blocks: [
          {
            type: 'paragraph',
            text: "Pre-galvanized steel is steel sheet or strip that receives a zinc coating before it is cut, punched, bent or formed into a finished component. The coated material is then processed into products such as cable trays, electrical enclosures, channels, brackets and other fabricated parts, depending on the manufacturer's capabilities.",
          },
          {
            type: 'paragraph',
            text: 'The zinc coating helps protect the underlying steel against corrosion. However, the protection achieved in service depends on the coating designation, the condition of the coating after fabrication, the exposure environment and the maintenance requirements.',
          },
          {
            type: 'paragraph',
            text: 'Pre-galvanized steel is often selected for manufactured components requiring a consistent coated-sheet finish and efficient downstream fabrication. It should not automatically be considered equivalent to a finished component that has been hot dip galvanized after fabrication.',
          },
        ],
      },
      {
        heading: 'Applications of Pre-Galvanized Steel',
        blocks: [
          { type: 'subheading', text: 'Electrical Cable Management' },
          {
            type: 'paragraph',
            text: 'Pre-galvanized steel can be used in selected cable trays, raceways and formed cable management products for electrical installations.',
          },
          { type: 'subheading', text: 'Commercial Buildings' },
          {
            type: 'paragraph',
            text: 'Pre-galvanized sheet-metal components may be used in selected electrical support systems, enclosures and building services applications where the material specification is appropriate.',
          },
          { type: 'subheading', text: 'Industrial Manufacturing Facilities' },
          {
            type: 'paragraph',
            text: 'Manufacturing plants may use formed galvanized components for cable routing, mounting brackets and other industrial assemblies.',
          },
          { type: 'subheading', text: 'Data Centres and Utility Facilities' },
          {
            type: 'paragraph',
            text: 'Pre-galvanized cable management products may be considered for suitable indoor installations. Selection should account for cable loads, equipment requirements, humidity and the installation specification.',
          },
          { type: 'subheading', text: 'Solar and Renewable Energy Projects' },
          {
            type: 'paragraph',
            text: 'Selected support and cable management components may use pre-galvanized steel where the product design and environmental conditions permit. More exposed solar structures may require a different corrosion-protection specification.',
          },
          { type: 'subheading', text: 'Warehousing and Infrastructure' },
          {
            type: 'paragraph',
            text: "Cable routing and support components manufactured from coated steel can be considered for warehouses, logistics facilities and infrastructure buildings where the selected product meets the project's requirements.",
          },
          { type: 'subheading', text: 'Electrical Contractors and OEM Manufacturing' },
          {
            type: 'paragraph',
            text: 'Electrical contractors, panel builders, equipment manufacturers and OEM procurement teams may use pre-galvanized components where consistent dimensions, repeatable fabrication and specified material properties are important.',
          },
        ],
      },
      {
        heading: 'Pre-Galvanized Steel Products for African Markets',
        blocks: [
          {
            type: 'paragraph',
            text: 'For industrial and infrastructure projects across Africa, pre-galvanized steel may be relevant to cable management, electrical installations and selected fabricated components. Buyers should evaluate the coating specification against local environmental exposure and project requirements.',
          },
          { type: 'subheading', text: 'Kenya and Tanzania' },
          {
            type: 'paragraph',
            text: 'Electrical contractors, EPC companies, industrial facilities and commercial construction projects may require cable trays, raceways and galvanized sheet-metal components. Buyers should specify the installation environment, required material grade, coating designation and finished-product requirements.',
          },
          { type: 'subheading', text: 'South Africa' },
          {
            type: 'paragraph',
            text: 'Industrial manufacturers, electrical contractors and infrastructure procurement teams should confirm the specified coating, material properties and suitability for local exposure conditions. Applications in coastal or industrial environments may require additional corrosion assessment.',
          },
          { type: 'subheading', text: 'Nigeria and Ghana' },
          {
            type: 'paragraph',
            text: 'For commercial buildings, industrial facilities and utility projects, procurement teams may consider pre-galvanized cable management components where the product meets the electrical installation specification and operating environment.',
          },
          { type: 'subheading', text: 'Uganda and Botswana' },
          {
            type: 'paragraph',
            text: 'Industrial and infrastructure buyers should provide drawings, dimensions, quantities and coating requirements to establish whether the proposed material and finished product meet the project needs.',
          },
          {
            type: 'subheading',
            text: 'What African EPC Contractors and Distributors Should Include in an RFQ',
          },
          {
            type: 'list',
            items: [
              'Product type and intended application.',
              'Base steel grade and material standard.',
              'Required sheet thickness and dimensions.',
              'Zinc coating designation or coating mass.',
              'Fabrication details and acceptable coating condition.',
              'Indoor or outdoor exposure conditions.',
              'Required inspection and material documentation.',
              'Quantity, packaging, delivery location and timeline.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Suggested Africa SEO keyword targets: Pre galvanized steel supplier Africa, pre galvanized steel sheet supplier Africa, pre galvanized cable tray manufacturer Africa, galvanized steel cable tray Kenya, pre galvanized steel products Tanzania, GI cable tray supplier South Africa, pre galvanized cable tray Nigeria, galvanized electrical components Ghana.',
          },
          {
            type: 'paragraph',
            text: 'These are proposed SEO targeting terms, not verified search rankings or search-volume data.',
          },
        ],
      },
      {
        heading: 'Pre-Galvanized Steel Supplier for the USA Market',
        blocks: [
          {
            type: 'paragraph',
            text: 'US buyers may specify pre-galvanized steel sheet and finished components for electrical cable management, industrial fabrication and selected building services applications.',
          },
          {
            type: 'paragraph',
            text: 'ASTM A653/A653M is a relevant standard for specified zinc-coated or zinc-iron alloy-coated steel sheet in coils and cut lengths. Buyers should identify the required steel designation, coating designation, dimensions and applicable supplementary requirements.',
          },
          { type: 'subheading', text: 'What US Buyers Should Specify' },
          {
            type: 'list',
            items: [
              'Product form: coil, sheet or finished component.',
              'Required base steel grade and applicable standard.',
              'Sheet thickness, width and length.',
              'Zinc coating designation or required coating mass.',
              'Forming and fabrication requirements.',
              'Acceptable coating condition after cutting and bending.',
              'Required material test certificates and inspection documents.',
              'Finished cable tray or component requirements, where applicable.',
              'Packaging, destination, shipping terms and delivery schedule.',
            ],
          },
          {
            type: 'paragraph',
            text: 'For electrical installations, ensure that the completed product—not merely the base material—meets the project specification and applicable code requirements.',
          },
          {
            type: 'paragraph',
            text: 'Suggested USA SEO keyword targets: Pre galvanized steel supplier USA, pre galvanized steel sheet supplier USA, galvanized steel sheet supplier USA, pre galvanized cable tray supplier USA, pre galvanized steel coil, zinc coated steel sheet, galvanized electrical cable tray, ASTM A653 galvanized steel sheet supplier.',
          },
          {
            type: 'paragraph',
            text: "These are proposed keyword targets. Search demand, competition and the relevance of each phrase to RK Engineering's actual products should be verified before prioritization.",
          },
        ],
      },
      {
        heading: 'Why Choose RK Engineering for Pre-Galvanized Cable Management Solutions?',
        blocks: [
          { type: 'subheading', text: 'Industrial Cable Management Experience' },
          {
            type: 'paragraph',
            text: "RK Engineering's published product range includes perforated cable trays, ladder cable trays, raceway systems and other cable management solutions for industrial and infrastructure applications.",
          },
          { type: 'subheading', text: 'Pre-Galvanized Material Options' },
          {
            type: 'paragraph',
            text: 'RK Engineering references pre-galvanized steel as a material option for its raceway and cable tray solutions. Final product availability, dimensions and coating specifications should be confirmed for the particular enquiry.',
          },
          { type: 'subheading', text: 'Project-Specific Requirements' },
          {
            type: 'paragraph',
            text: 'Electrical contractors, EPC companies, panel builders, OEMs and industrial procurement teams can submit drawings and technical requirements to establish the appropriate product configuration.',
          },
          { type: 'subheading', text: 'Quality and Inspection Requirements' },
          {
            type: 'paragraph',
            text: 'Material verification, dimensional inspection and coating-condition requirements can be defined according to the applicable product specification and purchase order.',
          },
          { type: 'subheading', text: 'Domestic and International Enquiries' },
          {
            type: 'paragraph',
            text: 'RK Engineering serves industrial and infrastructure customers in India and international markets. Buyers can submit project quantities, technical specifications and delivery details for review',
          },
        ],
      },
      {
        heading: 'Frequently Asked Questions',
        blocks: [
          {
            type: 'faq',
            question: '1. What is pre-galvanized steel?',
            answer:
              'Pre-galvanized steel is steel sheet or strip that receives a zinc coating before being cut, punched, bent or formed into a finished component.',
          },
          {
            type: 'faq',
            question: '2. What is the difference between pre-galvanized and hot dip galvanized steel?',
            answer:
              'Pre-galvanized steel is coated before downstream fabrication. Hot dip galvanizing of fabricated steel generally takes place after the component is manufactured. The appropriate process depends on the product geometry, coating requirements, fabrication method and exposure environment.',
          },
          {
            type: 'faq',
            question: '3. Is pre-galvanized steel suitable for cable trays?',
            answer:
              'It can be suitable for cable trays in applications where the steel grade, coating designation, finished-product design and environmental conditions meet the project requirements.',
          },
          {
            type: 'faq',
            question: '4. Which standard applies to pre-galvanized steel sheet?',
            answer:
              'ASTM A653/A653M covers specified zinc-coated galvanized and zinc-iron alloy-coated steel sheet in coils and cut lengths. The required grade and coating designation must be confirmed in the purchase specification.',
          },
          {
            type: 'faq',
            question: '5. Does cutting or punching affect the zinc coating?',
            answer:
              'Cutting and punching can expose the underlying steel at edges or openings. The extent of protection depends on the coating and operating environment. Where necessary, specify suitable edge protection or a repair method.',
          },
          {
            type: 'faq',
            question: '6. Can pre-galvanized steel be used outdoors?',
            answer:
              'It can be suitable for selected outdoor applications, but suitability depends on the coating designation, environmental exposure, product design and maintenance requirements. More corrosive environments may require another protection system.',
          },
          {
            type: 'faq',
            question: '7. What information is needed for a pre-galvanized steel quotation?',
            answer:
              'Provide the product type, steel grade, sheet thickness, dimensions, coating designation, quantity, fabrication requirements, applicable standards and delivery destination.',
          },
          {
            type: 'faq',
            question: '8. Does RK Engineering supply pre-galvanized products internationally?',
            answer:
              "RK Engineering's published range includes cable management solutions that reference pre-galvanized steel as a material option and describes international market coverage. Confirm the specific product, material specification and export availability with the company before ordering.",
          },
        ],
      },
    ],
    finalCta: {
      title: 'Choose the Right Pre-Galvanized Steel Solution',
      description:
        'Select pre-galvanized steel according to the required base material, zinc coating, fabrication method, installation environment and finished-product specification.',
      actions: [
        {
          label: 'Request a Pre-Galvanized Steel Quote',
          enquiryMessage:
            'Select pre-galvanized steel according to the required base material, zinc coating, fabrication method, installation environment and finished-product specification.',
        },
        {
          label: 'Get a Cable Tray Quote',
          productName: 'Cable Trays & Ducts',
          enquiryMessage:
            'Select pre-galvanized steel according to the required base material, zinc coating, fabrication method, installation environment and finished-product specification.',
        },
      ],
    },
    relatedLinks: [
      { label: 'Cable Tray & Duct Products', path: '/products/cable-trays' },
      { label: 'Raceway Cable Trays', path: '/products/raceway-cable-trays' },
      { label: 'Hot-Dip Galvanized Steel Products', path: '/products/hot-dip-galvanized-steel-products' },
    ],
  },
];