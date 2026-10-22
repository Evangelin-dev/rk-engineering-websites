export interface ProductSpec {
  id: string;
  name: string;
  category: 'cable-management' | 'earthing' | 'solar' | 'galvanized-steel';
  tagline: string;
  description: string;
  fullDetails: string;
  standardStandards: string[];
  materials: string[];
  finishes: string[];
  dimensions: {
    width?: string;
    flangeHeight?: string;
    thickness: string;
    length: string;
    rungSpacing?: string;
  };
  features: string[];
  applications: string[];
  drawingType: 'perforated' | 'ladder' | 'raceway' | 'earthing' | 'duct' | 'solar' | 'structural';
}

export const PRODUCTS: ProductSpec[] = [
  {
    id: 'hdg-perforated-cable-tray',
    name: 'HDG Perforated Cable Tray',
    category: 'cable-management',
    tagline: 'Precision-punched continuous cable support for industrial facilities',
    description: 'Hot-dip galvanized perforated cable trays for organized electrical cable routing in industrial facilities, infrastructure projects, and power installations. Product dimensions, material specifications, and coating requirements can be assessed against project needs.',
    fullDetails: 'Manufactured from premium structural steel with uniform CNC perforations providing optimal cable ventilation, heat dissipation, and moisture runoff. Side flanges feature pre-punched connector slots for rapid bolt-and-nut coupler plate assembly on international site installations.',
    standardStandards: ['BS EN 61537', 'IS 2629 / IS 4759', 'ASTM A123 / A153', 'IEC 61537'],
    materials: ['Mild Steel IS 2062 Grade A/B', 'CRCA Steel IS 513', 'Stainless Steel 304/316'],
    finishes: ['Hot-Dip Galvanized (80–120 microns)', 'Pre-Galvanized (IS 277)', 'Powder Coated (RAL Shades)'],
    dimensions: {
      width: '50 mm to 1200 mm',
      flangeHeight: '25 mm, 50 mm, 75 mm, 100 mm',
      thickness: '1.2 mm to 3.0 mm',
      length: '2500 mm / 3000 mm (Custom up to 6000 mm)',
    },
    features: [
      'Engineered uniform perforation pattern ensures cable ventilation and heat dispersal',
      'Smooth edges prevent cable sheath abrasion during pulling and installation',
      'Heavy-duty hot-dip galvanizing exceeds ASTM A123 corrosion resistance thresholds',
      'Compatible with full range of bends, reducers, tees, crosses, and riser elbows'
    ],
    applications: ['Power Plants & Sub-stations', 'Petrochemical Refineries', 'Commercial High-Rises', 'Data Centres'],
    drawingType: 'perforated',
  },
  {
    id: 'ladder-type-cable-tray',
    name: 'Ladder Type Cable Tray',
    category: 'cable-management',
    tagline: 'High-load bearing dual-rail cable ladder for heavy electrical cables',
    description: 'Steel ladder cable trays for cable support applications in industrial plants, electrical infrastructure, and power distribution projects. Specify the required width, side height, material, finish, and loading requirements when requesting a quotation.',
    fullDetails: 'Engineered for high-amperage, large-diameter power cables requiring maximum airflow and structural span strength. Built with heavy-gauge roll-formed side channels and welded or swaged rungs at standardized 250 mm or 300 mm centres.',
    standardStandards: ['NEMA VE-1', 'BS EN 61537', 'ASTM A123', 'IS 2062'],
    materials: ['Structural Steel IS 2062', 'High-Strength Steel S355', 'Stainless Steel 316L'],
    finishes: ['Hot-Dip Galvanized (IS 4759 / ASTM A123)', 'Epoxy Coated', 'Zinc Rich Primer'],
    dimensions: {
      width: '100 mm to 1200 mm',
      flangeHeight: '50 mm, 75 mm, 100 mm, 125 mm, 150 mm',
      thickness: '1.6 mm to 3.5 mm',
      length: '2500 mm / 3000 mm / 6000 mm',
      rungSpacing: '250 mm / 300 mm centre-to-centre',
    },
    features: [
      'Superior span-load capacity supporting multi-tier heavy power distribution',
      'Welded or riveted tubular/perforated rungs accommodate cable cleat clamping',
      'Maximum free air flow preventing cable derating in high ambient temperatures',
      'Engineered for long-span bridge installations between support steelwork'
    ],
    applications: ['Heavy Manufacturing Plants', 'Mining & Smelting Corridors', 'Renewable Energy Substations', 'Oil & Gas Facilities'],
    drawingType: 'ladder',
  },
  {
    id: 'raceway-cable-tray',
    name: 'Raceway Cable Tray',
    category: 'cable-management',
    tagline: 'Enclosed cable raceway systems for protected structured routing',
    description: 'Cable raceway systems for structured cable routing in commercial, industrial, and electrical installations. Share your required configuration and installation environment to help determine a suitable product specification.',
    fullDetails: 'Solid-bottom and slotted trunking raceway systems designed to provide enclosed physical protection and electromagnetic shielding for instrumentation, control, and telecommunication cabling. Available with snap-on or screw-fixed galvanized covers.',
    standardStandards: ['IS 513', 'IS 2629', 'BS 4678', 'IEC 61084'],
    materials: ['CRCA Steel Sheet', 'Pre-Galvanized Steel Sheet', 'Stainless Steel 304'],
    finishes: ['Hot-Dip Galvanized', 'Pre-Galvanized GI', 'Electro-Galvanized & Powder Coated'],
    dimensions: {
      width: '50 mm to 600 mm',
      flangeHeight: '25 mm, 50 mm, 75 mm, 100 mm',
      thickness: '1.2 mm to 2.5 mm',
      length: '2000 mm / 2500 mm / 3000 mm',
    },
    features: [
      'Enclosed bottom channel protects sensitive fiber and signal cables from dust and debris',
      'Available with divider separators to isolate power from instrumentation circuits',
      'Precision-engineered matching covers with quick-locking clamps',
      'Corrosion resistant for indoor, plant room, and sheltered exterior use'
    ],
    applications: ['Data Centres & Telecom Hubs', 'Airport Terminals', 'Commercial Complexes', 'Automation Control Rooms'],
    drawingType: 'raceway',
  },
  {
    id: 'gi-earthing-strip-materials',
    name: 'GI Earthing Strip and Earthing Materials',
    category: 'earthing',
    tagline: 'Heavy-duty galvanized iron grounding conductors and accessories',
    description: 'Galvanized iron earthing strips and related earthing materials for electrical grounding and infrastructure applications. Enquiries can include required dimensions, material specifications, quantities, and project requirements.',
    fullDetails: 'Essential safety grounding systems manufactured from hot-rolled mild steel strips with heavy zinc coatings to withstand harsh soil corrosivity. We also manufacture chemical earthing electrodes, copper bonded rods, grounding flats, and earthing clamps.',
    standardStandards: ['IS 3043 (Code of Practice for Earthing)', 'IS 2629 / IS 4759', 'BS 7430', 'IEEE 80'],
    materials: ['Mild Steel Flats IS 2062', 'Copper Bonded Steel', 'High-Purity Electrolytic Copper'],
    finishes: ['Hot-Dip Galvanized (Zinc Coating > 610 g/m²)', 'Bare Electrolytic Copper'],
    dimensions: {
      width: '25 mm to 100 mm',
      flangeHeight: 'Thickness: 3 mm to 12 mm',
      thickness: '3.0 mm, 6.0 mm, 8.0 mm, 10.0 mm, 12.0 mm',
      length: 'Standard Coils or 6-meter Straight Lengths',
    },
    features: [
      'High fault current dissipation capability across soil and bedrock environments',
      'Dense metallurgical zinc alloy layer prevents subsurface electrochemical corrosion',
      'Supplied in uncoiled straight bars or tightly wound compact export coils',
      'Rigorous test certifications verifying zinc mass and adherence'
    ],
    applications: ['Transmission Towers & Substations', 'Solar Farms & Wind Parks', 'Railway Electrification', 'Industrial Sub-stations'],
    drawingType: 'earthing',
  },
  {
    id: 'cable-tray-duct',
    name: 'Cable Tray Duct',
    category: 'cable-management',
    tagline: 'Robust modular ducting for commercial and industrial cable runs',
    description: 'Cable tray duct systems for organized cable routing in industrial facilities, commercial buildings, and electrical infrastructure projects. Product selection depends on cable arrangement, dimensions, installation conditions, and project specifications.',
    fullDetails: 'Full-depth channel ducts providing high mechanical protection and rigid alignment across suspended ceiling plenums, raised flooring voids, and vertical electrical risers in multi-story infrastructure.',
    standardStandards: ['IS 1079', 'IS 2629', 'BS EN 50085', 'IEC 61537'],
    materials: ['Mild Steel IS 1079 Grade D/DD', 'Stainless Steel 304', 'Aluminum Alloy'],
    finishes: ['Hot-Dip Galvanized', 'Pre-Galvanized', 'Thermosetting Polyester Powder Coating'],
    dimensions: {
      width: '75 mm to 800 mm',
      flangeHeight: '50 mm, 75 mm, 100 mm, 150 mm',
      thickness: '1.2 mm to 2.5 mm',
      length: '2500 mm / 3000 mm',
    },
    features: [
      'Heavy structural side stiffeners resist torsional buckling under asymmetrical load',
      'Smooth internal surface eliminates risk of cable abrasion during high-speed pulling',
      'Supplied complete with coupler plates, fasteners, and optional moisture drain ports',
      'Seamless integration with electrical switchboards and control cabinets'
    ],
    applications: ['Industrial Processing Units', 'Hospital Complexes', 'Transport Hubs & Metro Stations', 'Cleanroom Facilities'],
    drawingType: 'duct',
  },
  {
    id: 'solar-mounting-structures',
    name: 'Solar Mounting Structures',
    category: 'solar',
    tagline: 'Engineered galvanized steel racking for utility-scale solar farms',
    description: 'Steel solar mounting structures for rooftop and ground-mounted solar installations and other specified solar infrastructure applications. Share the project layout, structural requirements, installation environment, and quantity for technical review.',
    fullDetails: 'Engineered cold-formed galvanized steel profiles (C-channels, purlins, rafters, columns, and strut braces) designed to withstand regional wind loads up to 180 km/h and harsh UV/thermal weathering for 25+ year design lifespans.',
    standardStandards: ['IS 800 (Structural Steel Design)', 'IS 875 (Wind Loads)', 'ASTM A123', 'IS 2062 / S350GD'],
    materials: ['High-Strength Structural Steel S350 / S450', 'Hot-Rolled Steel IS 2062', 'PosMAC / Magnelis Alloy'],
    finishes: ['Hot-Dip Galvanized (Zinc Coating 80–120 microns)', 'Pre-Galvanized High-Zinc Coating (Z275 / Z350 / Z450)'],
    dimensions: {
      width: 'Custom C/Z Channels: 80 mm to 300 mm',
      flangeHeight: 'Flange Width: 40 mm to 80 mm',
      thickness: '1.5 mm to 4.0 mm',
      length: 'Cut-to-length up to 12,000 mm for container optimization',
    },
    features: [
      'Optimized section geometry minimizes structural steel weight while maintaining rigidity',
      'Pre-punched CNC hole patterns allow rapid on-site bolt assembly without welding',
      'Extensive corrosion protection formulated for deserts, coastal farms, and agricultural sites',
      'Engineered for fixed-tilt, seasonal adjustment, and rooftop ballast systems'
    ],
    applications: ['Utility-Scale Ground Solar Parks', 'Industrial Rooftop PPA Installations', 'Solar Canal Tops & Floating Arrays', 'Agrivoltaic Projects'],
    drawingType: 'solar',
  },
  {
    id: 'hot-dip-galvanized-steel-products',
    name: 'Hot-Dip Galvanized Steel Products',
    category: 'galvanized-steel',
    tagline: 'Custom fabricated and galvanized structural components for global infrastructure',
    description: 'Galvanized steel products and fabricated components for infrastructure, industrial, and construction applications. Requirements can be assessed based on component dimensions, base material, coating specifications, drawings, and order quantities.',
    fullDetails: 'Leveraging our 24,000 MT annual hot-dip galvanizing plant with industrial zinc kettles. We fabricate and surface-treat foundation bolts, substation gantry structures, transmission hardware, pipe supports, brackets, and custom welded steel assemblies.',
    standardStandards: ['ASTM A123 / A153', 'BS EN ISO 1461', 'IS 2629 / IS 4759 / IS 2633', 'AASHTO M111'],
    materials: ['Structural Steel Plates IS 2062', 'Steel Sections (Channels, Angles, Beams, Pipes)', 'High-Tensile Fasteners'],
    finishes: ['Hot-Dip Galvanized with 100% Prime High-Grade Zinc (99.995% Zn purity)'],
    dimensions: {
      width: 'Components up to kettle dimensions (Custom assemblies)',
      flangeHeight: 'Kettle Capacity: Up to 7.0 m dip length single dip',
      thickness: 'Steel plates and sections up to 25 mm thickness',
      length: 'Custom fabricated per project drawings',
    },
    features: [
      'Multi-stage chemical pre-treatment (degreasing, acid pickling, rinsing, fluxing)',
      'Metallurgical zinc-iron alloy bond providing self-healing barrier against scratches',
      'Preece test, knife adhesion test, and magnetic thickness testing on every production batch',
      'Export palletizing with wooden separators to prevent transit wet storage stain'
    ],
    applications: ['Electrical Substation Gantries', 'Highway Crash Barriers & Gantries', 'Marine & Port Structures', 'Structural Steel Frameworks'],
    drawingType: 'structural',
  },
];
