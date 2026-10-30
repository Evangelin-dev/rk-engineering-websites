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
    path: '/powder-coated-cable-tray/',
    productName: 'Powder Coated Cable Tray',
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
