import React, { useState } from 'react';
import { 
  Globe2, 
  Container, 
  ShieldCheck, 
  FileText, 
  Anchor, 
  ArrowRight, 
  Check, 
  Compass,
  MapPin
} from 'lucide-react';

interface ExportSectionProps {
  onOpenRFQ: () => void;
}

export const ExportSection: React.FC<ExportSectionProps> = ({ onOpenRFQ }) => {
  const [selectedRegion, setSelectedRegion] = useState<'africa' | 'usa' | 'global'>('africa');

  return (
    <section id="exports" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-red-600 mb-2 font-bold">
            International Supply Chain · Export Excellence
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Industrial Manufacturing Solutions for Africa, the USA and Global Markets
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            International procurement requires more than product availability. Buyers need clear technical specifications, an agreed supply scope, quality documentation, suitable packaging, and coordinated shipping arrangements.
          </p>
        </div>

        {/* Global Export Visual Banner with Port Logistics */}
        <div className="mb-14 rounded-lg overflow-hidden border border-slate-200 bg-slate-50 grid grid-cols-1 lg:grid-cols-12 items-stretch shadow-sm">
          <div className="lg:col-span-6 relative min-h-[280px] lg:min-h-full">
            <img
              src="/src/assets/images/global_export_shipping_1792669706316.jpg"
              alt="Export shipping crates and container port logistics for RK Engineering cable trays"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900/50 via-transparent to-transparent" />
          </div>

          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-red-600 mb-1 font-bold">
                Port Clearance & Seaworthy Logistics
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Seaworthy Packaging & Container Optimization from India
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                We coordinate ocean freight dispatch through premier container terminals (Nhava Sheva JNPT and Mundra Port). Orders are packaged with ISPM-15 heat-treated timber battens, heavy steel banding, plastic corner edge guards, and industrial moisture-barrier wrapping to prevent salt-fog and wet storage staining during transoceanic transit.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded bg-white border border-slate-200 shadow-sm">
                  <span className="text-slate-500 block text-[10px]">EXPORT PORTS</span>
                  <span className="text-blue-900 font-bold">JNPT (Nhava Sheva) / Mundra</span>
                </div>
                <div className="p-3 rounded bg-white border border-slate-200 shadow-sm">
                  <span className="text-slate-500 block text-[10px]">PACKAGING STANDARD</span>
                  <span className="text-red-600 font-bold">ISPM-15 Fumigated Wooden Crates</span>
                </div>
                <div className="p-3 rounded bg-white border border-slate-200 shadow-sm">
                  <span className="text-slate-500 block text-[10px]">CONTAINER STUFFING</span>
                  <span className="text-blue-900 font-bold">20ft GP / 40ft High Cube</span>
                </div>
                <div className="p-3 rounded bg-white border border-slate-200 shadow-sm">
                  <span className="text-slate-500 block text-[10px]">TRADE INCOTERMS</span>
                  <span className="text-blue-900 font-bold">FOB, CFR, CIF, DAP</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500">Third-Party Inspection: SGS, TUV, Bureau Veritas welcomed.</span>
            </div>
          </div>
        </div>

        {/* Region Switcher Tabs */}
        <div className="flex items-center gap-2 mb-6 border-b border-slate-200 pb-3">
          <button
            onClick={() => setSelectedRegion('africa')}
            className={`px-4 py-2 text-xs font-semibold rounded transition-all cursor-pointer ${
              selectedRegion === 'africa'
                ? 'bg-blue-700 text-white font-bold shadow'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            For African Markets
          </button>
          <button
            onClick={() => setSelectedRegion('usa')}
            className={`px-4 py-2 text-xs font-semibold rounded transition-all cursor-pointer ${
              selectedRegion === 'usa'
                ? 'bg-blue-700 text-white font-bold shadow'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            For the United States
          </button>
          <button
            onClick={() => setSelectedRegion('global')}
            className={`px-4 py-2 text-xs font-semibold rounded transition-all cursor-pointer ${
              selectedRegion === 'global'
                ? 'bg-blue-700 text-white font-bold shadow'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            Global Supply Enquiries
          </button>
        </div>

        {/* Region Content Cards (Light Card) */}
        {selectedRegion === 'africa' && (
          <div className="p-6 sm:p-8 rounded-lg bg-slate-50 border border-slate-200 space-y-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-red-600 font-bold block mb-1">
                  Sub-Saharan, East & West Africa
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Tailored Supply for African Power, Mining & Infrastructure
                </h3>
              </div>
              <button
                onClick={onOpenRFQ}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded transition-all cursor-pointer self-start md:self-auto"
              >
                <span>Request African Export Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              We welcome enquiries from EPC contractors, electrical contractors, industrial distributors, and infrastructure procurement teams working on power, telecommunications, manufacturing, renewable energy, and industrial development projects across African markets. Product suitability, destination requirements, commercial terms, and delivery feasibility are confirmed for each enquiry.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-md bg-white border border-slate-200 shadow-sm">
                <span className="text-xs font-bold text-blue-950 block mb-1">Key Destination Ports</span>
                <p className="text-xs text-slate-600">
                  Durban (South Africa), Mombasa (Kenya), Dar es Salaam (Tanzania), Lagos / Apapa (Nigeria), Tema (Ghana), Luanda (Angola).
                </p>
              </div>

              <div className="p-4 rounded-md bg-white border border-slate-200 shadow-sm">
                <span className="text-xs font-bold text-blue-950 block mb-1">Sector Applications</span>
                <p className="text-xs text-slate-600">
                  Rural and urban grid electrification, solar mini-grids, copper/bauxite mining corridors, and telecom tower expansions.
                </p>
              </div>

              <div className="p-4 rounded-md bg-white border border-slate-200 shadow-sm">
                <span className="text-xs font-bold text-blue-950 block mb-1">Document Scope</span>
                <p className="text-xs text-slate-600">
                  Pre-shipment verification of conformity (PVoC), SONCAP support (Nigeria), COC, and Mill Test Certificates (MTC).
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedRegion === 'usa' && (
          <div className="p-6 sm:p-8 rounded-lg bg-slate-50 border border-slate-200 space-y-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-red-600 font-bold block mb-1">
                  United States Importers & EPC Teams
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  High-Capacity Steel Manufacturing for US Project Specifications
                </h3>
              </div>
              <button
                onClick={onOpenRFQ}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded transition-all cursor-pointer self-start md:self-auto"
              >
                <span>Request US Export Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              US-based procurement teams and importers can submit enquiries for industrial cable trays and galvanized steel products manufactured in India. Product specifications, applicable standards, inspection requirements, import conditions, and delivery arrangements should be confirmed before an order is placed.
            </p>

            <div className="p-4 rounded-md bg-red-50 border border-red-200 text-xs text-red-900">
              <span className="font-bold block mb-0.5">Manufacturing Origin Clarification:</span>
              RK Engineering is an India-based manufacturer; this page does not imply domestic US manufacturing or automatic compliance with every US project standard. Compliance with US standards (such as NEMA VE-1 and ASTM A123) is evaluated against specific project drawings.
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-md bg-white border border-slate-200 shadow-sm">
                <span className="text-xs font-bold text-blue-950 block mb-1">Applicable Standards Review</span>
                <p className="text-xs text-slate-600">
                  ASTM A123 (Hot-Dip Galvanizing), ASTM A153 (Hardware), NEMA VE-1 (Metal Cable Tray Systems) evaluated per purchase order.
                </p>
              </div>

              <div className="p-4 rounded-md bg-white border border-slate-200 shadow-sm">
                <span className="text-xs font-bold text-blue-950 block mb-1">US Entry Gateways</span>
                <p className="text-xs text-slate-600">
                  Ocean container shipping to Houston, Los Angeles/Long Beach, New York/New Jersey, Savannah, and Norfolk.
                </p>
              </div>

              <div className="p-4 rounded-md bg-white border border-slate-200 shadow-sm">
                <span className="text-xs font-bold text-blue-950 block mb-1">Engineering Collaboration</span>
                <p className="text-xs text-slate-600">
                  Submittal packages including dimensional CAD drawings, raw material chemical logs, and third-party QA inspection sign-off.
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedRegion === 'global' && (
          <div className="p-6 sm:p-8 rounded-lg bg-slate-50 border border-slate-200 space-y-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-red-600 font-bold block mb-1">
                  Global Project Inquiries
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Seamless International Supply for Engineering Projects
                </h3>
              </div>
              <button
                onClick={onOpenRFQ}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded transition-all cursor-pointer self-start md:self-auto"
              >
                <span>Request an International Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              To receive a relevant quotation, provide your product type, drawings, specifications, quantities, destination country, and expected delivery schedule. Our technical team evaluates every parameter for manufacturing feasibility and shipping optimization.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <div className="p-4 rounded-md bg-white border border-slate-200 shadow-sm">
                <span className="text-xs font-bold text-blue-950 block mb-1">01. Drawings & BOM</span>
                <p className="text-xs text-slate-600">Share CAD drawings, schedules, or bill of materials with gauge and finish requirements.</p>
              </div>
              <div className="p-4 rounded-md bg-white border border-slate-200 shadow-sm">
                <span className="text-xs font-bold text-blue-950 block mb-1">02. Destination Port</span>
                <p className="text-xs text-slate-600">Specify destination seaport or inland container depot (ICD) for freight estimation.</p>
              </div>
              <div className="p-4 rounded-md bg-white border border-slate-200 shadow-sm">
                <span className="text-xs font-bold text-blue-950 block mb-1">03. Target Delivery</span>
                <p className="text-xs text-slate-600">Provide required delivery schedule to align raw material rolling and galvanizing slots.</p>
              </div>
              <div className="p-4 rounded-md bg-white border border-slate-200 shadow-sm">
                <span className="text-xs font-bold text-blue-950 block mb-1">04. Quality Protocols</span>
                <p className="text-xs text-slate-600">Define third-party inspection agency (SGS/TUV/BV) and document scope required.</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
