export interface TransmissionTowerFaq {
  question: string;
  answer: string;
}

export interface TransmissionTowerSection {
  heading: string;
  paragraphs?: string[];
  items?: string[];
  keywords?: string[];
}

export interface TransmissionTowerPageData {
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  introHeading: string;
  intro: string[];
  sections: TransmissionTowerSection[];
  faqs: TransmissionTowerFaq[];
  ctaHeading: string;
  ctaText: string;
  ctaLabel: string;
  imageAlt: string;
}

const commonFaqs: TransmissionTowerFaq[] = [
  {
    question: 'Does RK Engineering list transmission towers among its products?',
    answer:
      'Transmission towers are included in RK Engineering’s listed steel structure product range. Confirm the specific design, manufacturing scope, and availability directly with the company.',
  },
  {
    question: 'What should I include in a transmission tower enquiry?',
    answer:
      'Provide the tower type, approved drawings, bill of materials, material specifications, galvanizing requirements, quantity, project destination, inspection documents, and required delivery schedule.',
  },
  {
    question: 'Can I submit project drawings and specifications?',
    answer:
      'Yes. Project drawings and specifications can be submitted for review. Manufacturing feasibility, engineering responsibilities, inspection requirements, and commercial terms must be confirmed for each order.',
  },
  {
    question: 'Are supply and delivery available to my project destination?',
    answer:
      'Destination-specific supply, import requirements, shipping feasibility, and delivery arrangements must be assessed and confirmed for the individual project and order.',
  },
  {
    question: 'Can steel tower structures be hot-dip galvanized?',
    answer:
      'RK Engineering has an in-house hot-dip galvanizing facility for suitable steel products. The required coating specification and inspection criteria should be provided and confirmed against the project documents.',
  },
];

export const TRANSMISSION_TOWER_PAGES: TransmissionTowerPageData[] = [
  {
    path: '/transmission-tower-manufacturer-africa',
    title: 'Transmission Tower Manufacturer for African Power Infrastructure Projects',
    description:
      'Review transmission tower and power structure requirements for African infrastructure projects. Submit project drawings, specifications, quantities, and destination for assessment.',
    eyebrow: 'Power infrastructure projects in Africa',
    introHeading: 'Steel Transmission Towers for Africa’s Growing Power Infrastructure',
    intro: [
      'Looking for a transmission tower manufacturer for power infrastructure projects in Africa? RK Engineering & Galvanizers Pvt. Ltd. manufactures steel structures for electrical and infrastructure applications, including transmission towers, substation structures, and power distribution structures.',
      'We welcome enquiries from power utilities, EPC contractors, electrical infrastructure companies, project developers, and procurement teams seeking steel tower structures manufactured in India. Share technical specifications, drawings, and bills of quantities to discuss your requirements.',
    ],
    sections: [
      {
        heading: 'Transmission Tower Solutions for African Electricity Networks',
        paragraphs: [
          'Transmission towers support conductors and maintain required clearances along overhead electricity transmission routes. Project buyers need structures aligned with the electrical, structural, environmental, and installation requirements of each project.',
          'Tower configuration depends on the transmission line design, voltage requirements, loading conditions, and engineering specifications. Requirements should be reviewed against approved project documentation.',
        ],
      },
      {
        heading: 'Transmission Tower and Power Structure Products',
        items: [
          'Steel transmission towers for overhead conductors, specified according to the transmission line design and project loads.',
          'Galvanized transmission tower structures, with coating specifications determined by the project environment and applicable engineering standards.',
          'Substation steel structures dimensioned and fabricated in accordance with approved drawings.',
          'Transmission monopoles and power distribution poles for suitable network applications, subject to project design and requirements.',
        ],
        keywords: [
          'Steel Transmission Tower Manufacturer',
          'Transmission Tower Supplier Africa',
          'Power Transmission Tower Manufacturer',
          'Galvanized Transmission Tower Manufacturer',
          'Substation Steel Structure Manufacturer',
        ],
      },
      {
        heading: 'Manufacturing Requirements for African Projects',
        paragraphs: [
          'Before selecting a supplier, project teams should establish the technical requirements and documentation needed for procurement. Providing these details helps assess whether proposed tower structures match project requirements.',
        ],
        items: [
          'Tower configuration, line arrangement, and applicable design criteria.',
          'Dimensions, steel grades, member sizes, connection details, and loading conditions.',
          'Protective coating standard and inspection criteria.',
          'Relevant wind, temperature, terrain, and corrosion exposure conditions as determined by the project engineer.',
          'Material certificates, inspection reports, dimensional checks, and other required quality records.',
          'Component identification, packing arrangements, shipment requirements, and delivery destination.',
        ],
      },
      {
        heading: 'Enquiries for African Power Infrastructure',
        paragraphs: [
          'RK Engineering welcomes enquiries for projects involving electricity transmission, power distribution, grid development, and electrical infrastructure. Potential enquiry markets include Kenya, Tanzania, Uganda, South Africa, Nigeria, Ghana, Zambia, and Botswana.',
          'These are target markets for enquiries, not a claim of completed projects or confirmed supply in every country. Availability, technical suitability, and shipping arrangements must be confirmed for each project.',
        ],
      },
    ],
    faqs: [
      ...commonFaqs.slice(0, 3),
      {
        question: 'Can I enquire about transmission towers for African power projects?',
        answer:
          'African project buyers can submit technical requirements and destination details for review. Supply and shipping arrangements must be confirmed for each order.',
      },
      {
        question: 'Does RK Engineering supply substation structures?',
        answer:
          'Substation structures are included in the company’s product range. Contact the team to confirm availability and technical suitability for your project.',
      },
      {
        question: 'How can I contact RK Engineering?',
        answer:
          'Use the website enquiry form or email info@rkenggindia.com with your project requirements.',
      },
    ],
    ctaHeading: 'Request a Transmission Tower Quotation',
    ctaText:
      'Planning an electricity transmission or power infrastructure project in Africa? Share your tower type, drawings, technical specifications, quantity, destination, and quality documentation requirements.',
    ctaLabel: 'Request a Transmission Tower Quote',
    imageAlt: 'Industrial steel manufacturing and galvanizing at RK Engineering',
  },
  {
    path: '/transmission-tower-exporter-india-africa',
    title: 'Transmission Tower Exporter from India to African Countries',
    description:
      'African project buyers can enquire about sourcing transmission tower structures from India. Review the technical, documentation, packing, and destination information to prepare.',
    eyebrow: 'Export enquiries from India',
    introHeading: 'Source Transmission Tower Structures from India',
    intro: [
      'RK Engineering & Galvanizers Pvt. Ltd. welcomes enquiries from international procurement teams, power utilities, EPC contractors, and infrastructure companies looking to source transmission tower structures from India.',
      'Project buyers can share drawings, technical specifications, quantities, and destination requirements for review. Product scope, availability, shipping arrangements, and export feasibility must be confirmed for each order.',
    ],
    sections: [
      {
        heading: 'Export Enquiries for African Buyers',
        paragraphs: [
          'Importing transmission towers requires coordination between engineering teams, purchasing departments, logistics providers, and project managers. Product specifications, shipment planning, and documentation should be agreed before an order is finalized.',
        ],
        items: [
          'Steel transmission towers and tower components.',
          'Galvanized transmission tower structures.',
          'Substation steel structures.',
          'Transmission monopoles and power distribution structures.',
        ],
      },
      {
        heading: 'What to Evaluate When Sourcing from India',
        items: [
          'Confirm the supplier can assess the required tower design against approved drawings and specifications.',
          'Establish required material certificates and project traceability documents.',
          'Specify the applicable galvanizing standard, coating requirements, and inspection criteria.',
          'Confirm component marking, packing, loading arrangements, and transport requirements.',
          'Agree on pricing, payment conditions, delivery terms, and freight and insurance responsibilities.',
        ],
      },
      {
        heading: 'Documents to Prepare for an Export Enquiry',
        paragraphs: [
          'The exact documents depend on the destination country’s import rules, contract, and project requirements.',
        ],
        items: [
          'Approved tower drawings, bill of quantities, and member schedules.',
          'Structural steel grades, material specifications, and galvanizing requirements.',
          'Applicable design standards, inspection criteria, and quality documents.',
          'Required quantity, project schedule, destination, and preferred port or delivery point.',
          'Packaging, marking, and export and transport documentation requirements.',
        ],
      },
      {
        heading: 'African Destination Enquiries',
        paragraphs: [
          'RK Engineering welcomes enquiries from companies working on electricity infrastructure across African markets, including Kenya, Tanzania, Uganda, South Africa, Nigeria, Ghana, Zambia, and Botswana.',
          'These are target markets for enquiries, not claims of completed projects or confirmed delivery to every country. Export feasibility, applicable import requirements, and shipping arrangements must be confirmed for each destination.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I enquire about exporting transmission towers from India to Africa?',
        answer:
          'African buyers can submit project requirements to RK Engineering for review. Product availability and shipping feasibility must be confirmed for the specific order.',
      },
      {
        question: 'Which transmission tower products can I enquire about?',
        answer:
          'Enquiries may cover transmission towers, substation steel structures, transmission monopoles, and power distribution structures, subject to confirmation of the design and manufacturing scope.',
      },
      {
        question: 'What information is needed for an export quotation?',
        answer:
          'Provide technical drawings, a bill of quantities, material specifications, galvanizing requirements, destination country, and delivery schedule.',
      },
      {
        question: 'Can RK Engineering arrange international shipping?',
        answer:
          'Shipping arrangements, export documentation, and delivery terms must be discussed and confirmed for each order and destination.',
      },
      ...commonFaqs.slice(2, 4),
    ],
    ctaHeading: 'Request a Transmission Tower Export Quote',
    ctaText:
      'Share the destination country, tower type, quantity, drawings, steel and galvanizing specifications, inspection requirements, and preferred delivery location.',
    ctaLabel: 'Submit Your Export Enquiry',
    imageAlt: 'Steel structure manufacturing in India for project enquiries',
  },
  {
    path: '/galvanized-transmission-tower-manufacturer-africa',
    title: 'Galvanized Transmission Tower Manufacturer for African Markets',
    description:
      'Review galvanizing and project specification considerations for transmission tower enquiries in African markets. Submit drawings, coating requirements, and destination details.',
    eyebrow: 'Galvanized steel structures',
    introHeading: 'Galvanized Steel Structures for Power Transmission Projects',
    intro: [
      'RK Engineering & Galvanizers Pvt. Ltd. manufactures steel structures and offers hot-dip galvanizing solutions for industrial and infrastructure applications.',
      'We support project enquiries for galvanized transmission towers and related steel structures. Requirements are assessed according to project drawings, technical specifications, environmental conditions, and order quantities.',
    ],
    sections: [
      {
        heading: 'Why Hot-Dip Galvanizing Matters for Transmission Towers',
        paragraphs: [
          'Transmission towers are exposed to outdoor conditions throughout their service life. Moisture, rainfall, humidity, industrial pollutants, and coastal environments can contribute to corrosion of unprotected steel.',
          'Hot-dip galvanizing applies a protective zinc coating to steel components. The required coating and inspection criteria should be confirmed against the project’s technical specifications and applicable standards.',
        ],
      },
      {
        heading: 'Galvanized Transmission Tower Structures',
        items: [
          'Galvanized steel transmission towers for overhead electricity networks.',
          'Fabricated transmission tower members and structural components made to approved drawings.',
          'Galvanized substation structures for electrical equipment and power infrastructure.',
          'Transmission monopoles and distribution structures where specified by the project design.',
        ],
        keywords: [
          'Galvanized Transmission Tower Manufacturer',
          'Hot Dip Galvanized Transmission Tower',
          'Transmission Tower Supplier Africa',
        ],
      },
      {
        heading: 'Technical Details to Confirm Before Ordering',
        items: [
          'Tower type, project voltage, approved drawings, and member details.',
          'Structural steel grades, loading conditions, and project design inputs.',
          'Required coating thickness, applicable standard, inspection method, and acceptance criteria.',
          'Dimensional checks, coating inspection, and specified quality documents.',
          'Tower count or bill of materials, project destination, and delivery schedule.',
        ],
        paragraphs: [
          'Do not assume that one tower design or coating specification is suitable for every project or African market.',
        ],
      },
      {
        heading: 'Assessing a Galvanized Tower Supplier',
        paragraphs: [
          'Evaluate the supplier against the project’s engineering and commercial requirements. Review fabrication scope, member dimensions, connections, galvanizing specifications, inspection documentation, component identification, packing, and delivery terms.',
          'RK Engineering welcomes enquiries from EPC contractors, power infrastructure developers, utility procurement teams, engineering consultants, and industrial buyers across African markets. Supply to a particular country is subject to project assessment and shipping feasibility.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is a galvanized transmission tower?',
        answer:
          'It is a steel structure protected with a zinc coating, commonly applied through hot-dip galvanizing, to help resist corrosion in outdoor power transmission applications.',
      },
      {
        question: 'Why are hot-dip galvanized towers considered for African projects?',
        answer:
          'Galvanizing helps protect steel structures from environmental exposure. The appropriate coating depends on local climate, site conditions, project design, and applicable standards.',
      },
      {
        question: 'Which galvanizing specifications should buyers provide?',
        answer:
          'Identify the applicable project or industry standard, required zinc coating thickness, inspection method, and acceptance criteria.',
      },
      ...commonFaqs.slice(1, 3),
      {
        question: 'Does RK Engineering supply related power infrastructure structures?',
        answer:
          'The listed product range includes transmission towers, telecom towers, substation structures, transmission monopoles, and power distribution poles. Confirm specific requirements with the company.',
      },
    ],
    ctaHeading: 'Request a Quote for Galvanized Transmission Towers',
    ctaText:
      'Send your project location, tower drawings, technical and galvanizing specifications, estimated quantities, inspection requirements, and delivery schedule.',
    ctaLabel: 'Request Your Project Quotation',
    imageAlt: 'Galvanized steel product manufacturing and finishing',
  },
  {
    path: '/transmission-tower-supplier-africa',
    title: 'Transmission Tower Supplier for Power Transmission Projects in Africa',
    description:
      'Explore engineering, quality, procurement, and delivery considerations for transmission tower enquiries across African power transmission projects.',
    eyebrow: 'Transmission and electricity networks',
    introHeading: 'Steel Tower Structures for Electricity Transmission Infrastructure',
    intro: [
      'Planning an electricity transmission project in Africa? RK Engineering & Galvanizers Pvt. Ltd. offers steel infrastructure products, including transmission towers and related power structures, for project-based enquiries.',
      'We work with requirements supplied by infrastructure developers, EPC contractors, electrical contractors, procurement teams, and engineering consultants. Share tower specifications, drawings, quantities, and delivery destination to discuss a supply arrangement.',
    ],
    sections: [
      {
        heading: 'Supporting Power Transmission Needs',
        paragraphs: [
          'Transmission infrastructure projects may involve new overhead lines, network extensions, substation connections, grid reinforcement, and renewable energy evacuation systems. Each project has specific engineering and delivery considerations.',
          'Selecting a tower supplier requires consideration of engineering specifications, structural requirements, manufacturing scope, inspection procedures, and delivery planning.',
        ],
      },
      {
        heading: 'Structures for Power Network Projects',
        items: [
          'Transmission line towers supporting overhead conductors and associated line components.',
          'Fabricated tower steel members manufactured to specified dimensions, material grades, and connection details.',
          'Substation steel structures for equipment and associated infrastructure.',
          'Transmission monopoles and distribution poles where specified by the project design.',
        ],
      },
      {
        heading: 'What Buyers Should Consider',
        items: [
          'Engineering compatibility: tower configurations, voltage, design loads, conductor arrangements, and applicable standards.',
          'Material and fabrication: steel grades, member dimensions, connection details, tolerances, and traceability.',
          'Inspection and quality: inspection stages, dimensional checks, acceptance criteria, and required documents.',
          'Quantity and schedule: tower count, bill of materials, production milestones, and delivery dates.',
          'Packing and destination: destination country, shipment requirements, packaging, and commercial terms.',
        ],
      },
      {
        heading: 'Enquiries for African Countries',
        paragraphs: [
          'RK Engineering welcomes enquiries for projects in Kenya, Tanzania, Uganda, Nigeria, South Africa, Ghana, Zambia, and Botswana. These countries are target enquiry markets, not claims of completed projects or confirmed delivery.',
          'Supply availability, project suitability, applicable local requirements, and shipping arrangements must be confirmed before an order is accepted.',
        ],
        keywords: [
          'Transmission Tower Supplier Kenya',
          'Transmission Tower Supplier Tanzania',
          'Transmission Tower Supplier Uganda',
          'Transmission Tower Supplier Nigeria',
          'Transmission Tower Supplier South Africa',
          'Transmission Tower Supplier Ghana',
          'Transmission Tower Supplier Zambia',
        ],
      },
    ],
    faqs: [
      {
        question: 'How do I find a transmission tower supplier for a project in Africa?',
        answer:
          'Compare the supplier’s listed product range and capabilities with your tower design, material requirements, inspection criteria, quantities, and destination. Submit approved drawings and project specifications for a relevant quotation.',
      },
      {
        question: 'Can I enquire about transmission towers for Kenya or Tanzania?',
        answer:
          'Yes. Submit the project requirements and destination for review. Supply feasibility, product scope, delivery arrangements, and commercial terms must be confirmed.',
      },
      {
        question: 'What affects transmission tower procurement costs?',
        answer:
          'Costs may depend on tower design, steel grades, structural weight, fabrication complexity, galvanizing, inspection and documentation, quantities, packing, freight, and delivery terms.',
      },
      {
        question: 'Can a supplier support phased delivery?',
        answer:
          'Phased delivery may be considered where manufacturing capacity, order quantities, production planning, and logistics permit. Confirm the schedule in the quotation and purchase agreement.',
      },
      ...commonFaqs.slice(1, 3),
    ],
    ctaHeading: 'Request a Transmission Tower Supply Quotation',
    ctaText:
      'Send your project drawings, tower quantities, technical specifications, delivery destination, and expected schedule for an initial review.',
    ctaLabel: 'Submit Your Power Project Enquiry',
    imageAlt: 'Steel structure fabrication for electrical infrastructure projects',
  },
  {
    path: '/transmission-tower-procurement-africa-epc',
    title: 'Transmission Tower Procurement Guide for African EPC Contractors',
    description:
      'A practical procurement checklist for African EPC contractors preparing transmission tower enquiries, technical tender documents, supplier evaluations, and delivery plans.',
    eyebrow: 'Procurement guidance for EPC contractors',
    introHeading: 'Plan Your Transmission Tower Procurement with Greater Confidence',
    intro: [
      'Procuring transmission towers for an African power infrastructure project requires coordination between engineering, purchasing, quality assurance, logistics, and project management teams.',
      'A well-prepared procurement process helps align supplier quotations with project specifications, tender requirements, construction schedules, and budget expectations. RK Engineering & Galvanizers Pvt. Ltd. welcomes enquiries for transmission towers and related steel structures from its manufacturing operations in India.',
    ],
    sections: [
      {
        heading: 'Define the Transmission Tower Package',
        paragraphs: [
          'Establish whether the procurement package includes complete tower structures, fabricated steel members, associated structural components, or other specified power infrastructure steelwork.',
        ],
        items: [
          'Tower types, quantities, transmission line voltage, and project configuration.',
          'Approved tower drawings, bill of materials, material specifications, and connection details.',
          'Galvanizing, inspection, testing, and documentation requirements.',
          'Delivery locations, required dates, and phased delivery requirements.',
        ],
      },
      {
        heading: 'Prepare Tender Documents and Evaluate Quotations',
        paragraphs: [
          'Assemble technical specifications, approved drawing revisions, bill of materials, quality requirements, commercial conditions, and project schedule before inviting bids.',
          'Review technical compliance and commercial value separately. Clarify exclusions, deviations, alternative specifications, inspection activities, packaging, and delivery arrangements.',
        ],
        items: [
          'Check steel grades, material traceability, fabrication scope, connections, and tolerances.',
          'Confirm galvanizing requirements, inspection plan, acceptance procedures, and records.',
          'Assess proposed manufacturing milestones, logistics, quotation exclusions, and commercial terms.',
          'Identify responsibility for design calculations, drawing approvals, and technical deviations.',
        ],
      },
      {
        heading: 'Coordinate Procurement with Construction and Shipping',
        paragraphs: [
          'Coordinate tender release, quotation review, technical clarifications, purchase order placement, drawing approvals, fabrication, inspection, packing, dispatch, and receipt at site with the project execution schedule.',
          'For orders from India, confirm delivery terms, export and import documents, component identification, port of discharge, customs responsibilities, shipment, and site delivery. The responsible importer or logistics provider should verify destination-specific import requirements.',
        ],
      },
      {
        heading: 'African Project Considerations',
        paragraphs: [
          'EPC contractors in Kenya, Tanzania, Uganda, Zambia, Nigeria, Ghana, South Africa, and Botswana should establish the project approval process, import requirements, delivery location, inspection expectations, and construction schedule before finalizing a purchase order.',
          'These are location-focused procurement topics, not claims of completed RK Engineering projects or confirmed supply to every country. Local standards and tender conditions must be verified for each project.',
        ],
        keywords: [
          'Transmission Tower Procurement Kenya',
          'Transmission Tower Procurement Tanzania',
          'Transmission Tower Procurement Uganda',
          'Transmission Tower Procurement Zambia',
          'Transmission Tower Procurement Nigeria',
          'Transmission Tower Procurement Ghana',
          'Transmission Tower Procurement South Africa',
          'Transmission Tower Procurement Botswana',
        ],
      },
      {
        heading: 'Common Procurement Mistakes to Avoid',
        items: [
          'Issuing incomplete or inconsistent drawing revisions.',
          'Comparing prices without checking scope, components, inspection, or delivery.',
          'Leaving galvanizing requirements and acceptance criteria unclear.',
          'Approving production before resolving technical deviations.',
          'Ignoring freight, packaging, customs clearance, and site delivery in tender planning.',
          'Using unconfirmed delivery dates or failing to schedule inspections.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What should an EPC contractor include in a transmission tower procurement enquiry?',
        answer:
          'Include tower drawings, bill of materials, quantities, material grades, fabrication specifications, galvanizing requirements, inspection criteria, destination, and required schedule.',
      },
      {
        question: 'How should EPC contractors compare transmission tower suppliers?',
        answer:
          'Evaluate technical compliance, manufacturing scope, material documentation, quality controls, delivery commitments, logistics, commercial exclusions, and ability to meet defined requirements.',
      },
      {
        question: 'How can procurement delays be reduced?',
        answer:
          'Issue complete technical documents, resolve deviations promptly, agree on approval milestones, define inspection responsibilities, and coordinate production and shipping with the construction schedule.',
      },
      {
        question: 'What should be checked when importing towers from India to Africa?',
        answer:
          'Confirm shipping terms, export and import documentation, packaging, customs responsibilities, destination requirements, inspection release, and delivery arrangements with the supplier and logistics provider.',
      },
      {
        question: 'Should galvanizing and inspection requirements be included in the purchase order?',
        answer:
          'Yes, where required by the project. Define coating specifications, inspection criteria, acceptance procedures, and documentation responsibilities.',
      },
      ...commonFaqs.slice(2, 3),
    ],
    ctaHeading: 'Request a Transmission Tower Procurement Quotation',
    ctaText:
      'Preparing a tender or purchase package for an African electricity transmission project? Submit approved drawings, quantities, specifications, quality requirements, destination, and target schedule.',
    ctaLabel: 'Submit Your Transmission Tower Enquiry',
    imageAlt: 'Steel fabrication and galvanizing capabilities for procurement enquiries',
  },
  {
    path: '/transmission-tower-supplier-kenya',
    title: 'Transmission Tower Supplier for Power Projects in Kenya',
    description:
      'Submit Kenya power project transmission tower requirements for review. Share approved drawings, line and structural specifications, quantities, and delivery location.',
    eyebrow: 'Kenya power project enquiries',
    introHeading: 'Transmission Tower Requirements for Projects in Kenya',
    intro: [
      'RK Engineering & Galvanizers Pvt. Ltd. welcomes enquiries for transmission towers and related steel structures from project teams working on power and electrical infrastructure in Kenya.',
      'The company’s listed steel structure range includes transmission towers, substation structures, transmission monopoles, and power distribution poles. Buyers can submit project drawings, specifications, quantities, and destination details for assessment; supply feasibility and delivery arrangements must be confirmed for each order.',
    ],
    sections: [
      {
        heading: 'Prepare the Project Technical Requirements',
        paragraphs: [
          'Transmission tower selection follows the approved line design and project engineering criteria. Define the structure type and scope before requesting a quotation.',
        ],
        items: [
          'Tower configuration, line voltage, loading conditions, and applicable design criteria.',
          'Approved drawings, bill of materials, member sizes, connections, and steel grades.',
          'Galvanizing standard and inspection requirements, where applicable.',
          'Required material certificates, dimensional checks, and quality documents.',
        ],
        keywords: [
          'Transmission Tower Supplier Kenya',
          'Transmission Towers for Kenya Power Projects',
          'Transmission Tower Procurement Kenya',
        ],
      },
      {
        heading: 'Procurement and Delivery Information',
        paragraphs: [
          'Provide the estimated quantity, project location, expected delivery schedule, packing requirements, and required transport or import documents. Confirm the exact destination, applicable import requirements, and shipping feasibility with the responsible project and logistics teams.',
          'A project quotation should clarify the manufacturing scope, engineering responsibilities, inspection arrangements, commercial terms, and agreed delivery commitments.',
        ],
      },
      {
        heading: 'Related Power Structure Enquiries',
        paragraphs: [
          'Depending on the approved project scope, buyers may also enquire about substation steel structures, transmission monopoles, and power distribution structures. Technical suitability and availability must be confirmed for each design.',
          'This Kenya page supports enquiries only and does not claim completed projects or confirmed supply in Kenya.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I submit a transmission tower enquiry for a project in Kenya?',
        answer:
          'Yes. Submit project drawings, specifications, quantities, and delivery destination for review. Supply feasibility and shipping arrangements must be confirmed for the specific order.',
      },
      {
        question: 'What information should a Kenya project enquiry include?',
        answer:
          'Include tower type, line voltage and design inputs, approved drawings, bill of materials, steel and galvanizing specifications, quantity, inspection requirements, and delivery schedule.',
      },
      {
        question: 'Can tower structures be manufactured to our approved project drawings?',
        answer:
          'Submit the drawings and specifications for review. Manufacturing feasibility, engineering responsibilities, and acceptance criteria must be agreed before production.',
      },
      {
        question: 'Can RK Engineering confirm delivery to a location in Kenya?',
        answer:
          'Delivery destination, import requirements, shipping feasibility, and delivery arrangements need to be confirmed for the specific order.',
      },
      ...commonFaqs.slice(1, 3),
    ],
    ctaHeading: 'Discuss Your Kenya Transmission Tower Project',
    ctaText:
      'Send your approved tower drawings, bill of materials, technical and coating requirements, estimated quantity, Kenya delivery location, and target schedule.',
    ctaLabel: 'Request a Project Quote',
    imageAlt: 'Industrial steel structures for electrical infrastructure enquiries',
  },
  {
    path: '/transmission-tower-exporter-india-usa',
    title: 'Transmission Tower Exporter from India to the USA',
    description:
      'US buyers can submit transmission tower export enquiries from India. Review technical documents, shipping terms, import responsibilities, and project requirements.',
    eyebrow: 'US import and export enquiries',
    introHeading: 'Source Transmission Tower Structures from India',
    intro: [
      'RK Engineering & Galvanizers Pvt. Ltd. welcomes enquiries from US utilities, EPC contractors, infrastructure companies, and procurement teams seeking steel transmission tower structures manufactured in India.',
      'Buyers can submit tower drawings, technical specifications, quantities, and delivery requirements for review. Product availability, US-specific compliance, import requirements, and shipping feasibility must be confirmed for the specific product and order.',
    ],
    sections: [
      {
        heading: 'Transmission Tower Export Enquiries',
        paragraphs: [
          'International tower procurement involves engineering review, commercial coordination, documentation, packaging, and shipment planning. Define the supply scope and responsibilities before an order is finalized.',
        ],
        items: [
          'Transmission towers and structural members.',
          'Galvanized tower structures, subject to specified coating requirements.',
          'Substation steel structures and related power infrastructure steelwork.',
          'Transmission monopoles or distribution structures where specified.',
        ],
      },
      {
        heading: 'Documents and Requirements for US Buyers',
        items: [
          'Approved drawings, bill of materials, tower configuration, and project design inputs.',
          'Steel grades, fabrication details, material traceability, and inspection requirements.',
          'Galvanizing specifications and coating acceptance criteria, if required.',
          'Applicable US project standards and compliance documentation for review and confirmation.',
          'Quantities, delivery schedule, packaging and marking requirements, and delivery location.',
        ],
        keywords: [
          'Transmission Tower Exporter from India to the USA',
          'Transmission Tower Export India USA',
          'Indian Transmission Tower Manufacturer',
        ],
      },
      {
        heading: 'Confirm Import and Shipping Responsibilities',
        paragraphs: [
          'Before ordering, agree on delivery terms, freight and insurance responsibilities, export documents, import clearance responsibilities, shipment marks, packing lists, destination port, and final delivery point.',
          'US-specific standards, customs and import requirements, product suitability, and shipping arrangements must be confirmed for the particular order. Do not assume a product meets a US standard unless verified.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can US buyers enquire about transmission towers from India?',
        answer:
          'Yes. US project buyers can submit specifications, quantities, and delivery requirements for review. Supply feasibility must be confirmed for each order.',
      },
      {
        question: 'What documents should a US buyer provide?',
        answer:
          'Provide approved drawings, bill of materials, steel and coating specifications, applicable project standards, inspection requirements, quantities, and delivery location.',
      },
      {
        question: 'Are US standards and compliance automatically included?',
        answer:
          'No. Applicable US-specific standards, compliance, and documentation must be identified by the buyer and confirmed for the specific project before ordering.',
      },
      {
        question: 'Who is responsible for import clearance and shipping?',
        answer:
          'Responsibilities for freight, insurance, export and import documents, customs clearance, and final delivery must be agreed for each order.',
      },
      ...commonFaqs.slice(2, 3),
    ],
    ctaHeading: 'Request a Transmission Tower Export Quotation',
    ctaText:
      'Send your tower drawings, standards and compliance requirements, quantity, galvanizing specifications, US delivery location, and preferred schedule for review.',
    ctaLabel: 'Submit Your US Export Enquiry',
    imageAlt: 'Steel structure manufacturing in India for international project enquiries',
  },
  {
    path: '/transmission-tower-supplier-usa',
    title: 'Transmission Tower Supplier for US Power Infrastructure Projects',
    description:
      'Explore transmission tower project enquiry and procurement considerations for US power infrastructure. Confirm design, standards, inspection, and delivery requirements.',
    eyebrow: 'US power infrastructure enquiries',
    introHeading: 'Transmission Tower Structures for US Project Enquiries',
    intro: [
      'RK Engineering & Galvanizers Pvt. Ltd. welcomes project enquiries for transmission towers and related steel structures from US power infrastructure buyers and EPC contractors.',
      'The listed product range includes transmission towers and associated power structures. Buyers should share approved technical documents and identify applicable US project requirements so the requested scope and feasibility can be reviewed.',
    ],
    sections: [
      {
        heading: 'Define the Power Infrastructure Scope',
        paragraphs: [
          'Transmission line design, structural loading, tower configuration, site conditions, and project engineering criteria determine the required tower structure. The approved project documents should define the design and scope.',
        ],
        items: [
          'Tower types, quantities, line configuration, and relevant design inputs.',
          'Approved drawings, structural members, connections, and steel material requirements.',
          'Applicable project standards, inspection criteria, and required documentation.',
          'Coating requirements, packaging, destination, and required schedule.',
        ],
      },
      {
        heading: 'Supplier Evaluation and Technical Review',
        paragraphs: [
          'Compare suppliers against approved drawings and specifications, manufacturing scope, material documentation, inspection and acceptance procedures, production planning, packaging, and delivery terms.',
          'Submit technical questions, required deviations, and document approval responsibilities for clarification before purchase order placement or production.',
        ],
        keywords: [
          'Transmission Tower Supplier USA',
          'Transmission Tower Supplier for US Power Infrastructure',
          'US Power Infrastructure Steel Structures',
        ],
      },
      {
        heading: 'US Standards and Delivery Requirements',
        paragraphs: [
          'US-specific compliance, project standards, import requirements, documentation, supply feasibility, and delivery arrangements must be confirmed for the specific product and order. The buyer should identify all applicable requirements during enquiry.',
          'RK Engineering does not claim completed US transmission tower projects or confirmed supply to a particular US project through this enquiry page.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I submit a transmission tower enquiry for a US infrastructure project?',
        answer:
          'Yes. Submit project specifications, approved drawings, quantities, applicable standards, and delivery requirements for review. Supply feasibility must be confirmed for each order.',
      },
      {
        question: 'What should be included in a US power project enquiry?',
        answer:
          'Include tower design and configuration, drawings, bill of materials, material and coating specifications, applicable standards, inspection requirements, quantities, destination, and schedule.',
      },
      {
        question: 'Does a quotation confirm compliance with US standards?',
        answer:
          'Applicable US standards and compliance documentation must be identified and explicitly confirmed for the specific project; they should not be assumed.',
      },
      {
        question: 'Can I request project-specific inspection documents?',
        answer:
          'Specify the inspection stages, acceptance criteria, material records, and other documents required by the project for review and confirmation.',
      },
      ...commonFaqs.slice(1, 3),
    ],
    ctaHeading: 'Discuss Your US Power Infrastructure Project',
    ctaText:
      'Submit your approved drawings, project standards, tower quantities, inspection criteria, destination, and delivery schedule for an initial review.',
    ctaLabel: 'Request a Project Quotation',
    imageAlt: 'Steel fabrication capabilities for power infrastructure project enquiries',
  },
  {
    path: '/galvanized-transmission-tower-supplier-usa',
    title: 'Galvanized Transmission Tower Supplier for US Power Projects',
    description:
      'Review galvanized transmission tower enquiry requirements for US power projects, including coating specifications, inspection criteria, compliance, and delivery details.',
    eyebrow: 'Galvanized tower requirements',
    introHeading: 'Galvanized Steel Structures for US Power Project Enquiries',
    intro: [
      'RK Engineering & Galvanizers Pvt. Ltd. has in-house hot-dip galvanizing capabilities for suitable steel products and welcomes enquiries about galvanized transmission tower structures.',
      'US project buyers should submit tower drawings, coating specifications, applicable standards, inspection requirements, quantity, and destination. Technical suitability, compliance, and supply feasibility must be confirmed for the individual order.',
    ],
    sections: [
      {
        heading: 'Specify the Galvanizing Requirements',
        paragraphs: [
          'Outdoor steel structures may require protective coatings based on the project environment and engineering requirements. Select the coating specification through the project’s approved documents and applicable standards.',
        ],
        items: [
          'Applicable coating or galvanizing standard.',
          'Required zinc coating thickness and acceptance criteria.',
          'Inspection method, inspection stages, and required records.',
          'Tower member dimensions, steel grades, and fabrication details.',
        ],
      },
      {
        heading: 'Technical Review for Galvanized Tower Structures',
        paragraphs: [
          'Provide the approved tower design, loading conditions, member schedules, material specifications, and required coating and quality criteria. Confirm responsibilities for drawing review, engineering, inspection, and acceptance before production.',
        ],
        keywords: [
          'Galvanized Transmission Tower Supplier USA',
          'Galvanized Transmission Tower for US Power Projects',
          'Hot-Dip Galvanized Transmission Structures',
        ],
      },
      {
        heading: 'US Project Compliance and Procurement',
        paragraphs: [
          'US-specific standards, product compliance, coating requirements, import documents, and delivery arrangements must be confirmed for the specific order. No particular US certification or project supply is implied by this enquiry information.',
          'Include quantities, packaging expectations, destination, inspection release requirements, and delivery schedule when requesting a quotation.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I enquire about galvanized transmission towers for a US project?',
        answer:
          'Yes. Submit the technical and coating specifications, drawings, quantity, inspection criteria, and destination for review. Supply and compliance must be confirmed for each order.',
      },
      {
        question: 'Which galvanizing information should I provide?',
        answer:
          'Identify the applicable project standard, coating thickness, inspection method, acceptance criteria, and required quality records.',
      },
      {
        question: 'Does galvanizing alone confirm US project compliance?',
        answer:
          'No. US project compliance and applicable standards depend on the project requirements and must be confirmed separately for the specific product and order.',
      },
      {
        question: 'Can RK Engineering review coating and inspection requirements?',
        answer:
          'Submit the project documents for review. The galvanizing scope, inspection requirements, and acceptance criteria must be agreed before ordering.',
      },
      ...commonFaqs.slice(1, 3),
    ],
    ctaHeading: 'Request a Galvanized Tower Enquiry Review',
    ctaText:
      'Share tower drawings, steel and coating requirements, standards, inspection criteria, quantities, US delivery location, and schedule.',
    ctaLabel: 'Request a Galvanized Tower Quote',
    imageAlt: 'Hot-dip galvanizing and steel finishing for suitable steel products',
  },
  {
    path: '/transmission-tower-procurement-usa-epc',
    title: 'Transmission Tower Procurement Guide for US EPC Contractors',
    description:
      'A transmission tower procurement checklist for US EPC contractors covering tender documents, supplier evaluation, compliance confirmation, inspection, and logistics.',
    eyebrow: 'Procurement guidance for US EPC contractors',
    introHeading: 'Plan Transmission Tower Procurement for US Projects',
    intro: [
      'US EPC contractors procuring transmission towers coordinate engineering, purchasing, quality assurance, logistics, and project management requirements.',
      'A structured procurement process helps align supplier quotations with approved drawings, applicable project standards, construction schedules, and commercial conditions. RK Engineering & Galvanizers Pvt. Ltd. welcomes enquiries for transmission tower and related steel structure requirements.',
    ],
    sections: [
      {
        heading: 'Step 1: Define the Tower Package',
        paragraphs: [
          'Identify whether the package includes complete tower structures, fabricated members, associated components, or other specified power infrastructure steelwork.',
        ],
        items: [
          'Tower types, quantities, line configuration, and approved design inputs.',
          'Current drawing revisions, bills of materials, steel grades, and fabrication details.',
          'Galvanizing, inspection, testing, and quality documentation requirements.',
          'Delivery destinations, required dates, and phased shipment needs.',
        ],
      },
      {
        heading: 'Step 2: Prepare Tender Documents and Compare Offers',
        paragraphs: [
          'Provide consistent technical specifications, approved drawings, bill of materials, inspection requirements, commercial terms, and project milestones to all bidders.',
          'Compare technical compliance separately from commercial value. Review scope, material traceability, fabrication details, coating, inspection, production planning, packing, delivery, exclusions, and quotation validity.',
        ],
      },
      {
        heading: 'Step 3: Confirm Compliance and Project Interfaces',
        paragraphs: [
          'Identify who is responsible for engineering and design calculations, drawing approval, applicable codes and standards, material substitutions, inspection plans, non-conformance processes, and dispatch documentation.',
          'Record all deviations and obtain written approvals before proceeding. A quotation by itself does not establish that every technical requirement has been accepted.',
        ],
      },
      {
        heading: 'Step 4: Coordinate Schedule and Delivery',
        paragraphs: [
          'Coordinate technical enquiry, bid review, clarification, purchase order, drawing approval, fabrication, inspection, galvanizing, packing, shipment, and receipt at site with the overall construction plan.',
          'For international sourcing, confirm delivery terms, freight and insurance responsibilities, export and import documentation, customs responsibilities, packing marks, shipment destination, and final delivery. Verify destination-specific requirements with the responsible importer or logistics provider.',
        ],
      },
      {
        heading: 'US Standards and Procurement Enquiries',
        paragraphs: [
          'Identify the applicable US project standards, documentation, inspection, and import requirements in the tender. Confirm product suitability, compliance, supply feasibility, and delivery commitments for the actual order.',
          'This guidance is not a claim of completed US projects or confirmed supply. Project requirements and terms must be verified for each procurement.',
        ],
        keywords: [
          'Transmission Tower Procurement USA',
          'Transmission Tower Procurement Guide for US EPC Contractors',
          'Transmission Tower Supplier for US EPC Projects',
        ],
      },
      {
        heading: 'Common Procurement Risks to Manage',
        items: [
          'Incomplete drawings, inconsistent revisions, or unclear bills of materials.',
          'Price comparisons that overlook scope, inspection, packing, or delivery.',
          'Unconfirmed standards, coating specifications, or acceptance criteria.',
          'Production approval before resolving technical deviations.',
          'Uncoordinated inspection, import clearance, shipment, and site delivery milestones.',
          'Unverified production or delivery dates.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What should a US EPC contractor include in a transmission tower tender?',
        answer:
          'Include approved drawings, bill of materials, quantities, material and fabrication specifications, applicable standards, coating and inspection requirements, delivery destination, and schedule.',
      },
      {
        question: 'How should EPC contractors evaluate supplier quotations?',
        answer:
          'Check technical compliance, manufacturing scope, material records, quality and inspection, delivery planning, logistics, commercial exclusions, and all required project documentation.',
      },
      {
        question: 'How should US standards be handled during procurement?',
        answer:
          'Identify applicable project standards and compliance documents in the tender and obtain explicit confirmation for the specific product and order.',
      },
      {
        question: 'What should be confirmed before production starts?',
        answer:
          'Confirm approved drawings, engineering and design responsibilities, material specifications, deviations, inspection and acceptance procedures, and required documentation.',
      },
      {
        question: 'What should international shipping plans include?',
        answer:
          'Confirm delivery terms, freight responsibilities, export and import documents, customs clearance, packing and marking, destination, and final delivery arrangements.',
      },
      ...commonFaqs.slice(2, 3),
    ],
    ctaHeading: 'Request a Transmission Tower Procurement Review',
    ctaText:
      'Preparing a US EPC tender? Submit the approved drawings, bill of materials, applicable standards, quality requirements, quantities, delivery destination, and schedule.',
    ctaLabel: 'Submit Your Procurement Enquiry',
    imageAlt: 'Steel manufacturing and galvanizing for EPC procurement enquiries',
  },
];

export const TRANSMISSION_TOWER_PAGE_BY_PATH = Object.fromEntries(
  TRANSMISSION_TOWER_PAGES.map((page) => [page.path, page]),
) as Record<string, TransmissionTowerPageData>;
