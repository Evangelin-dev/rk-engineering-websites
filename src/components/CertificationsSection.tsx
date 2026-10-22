import React, { useState } from 'react';
import { Award, ShieldCheck, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

interface CertificationsSectionProps {
  onOpenRFQ: () => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ onOpenRFQ }) => {
  const [selectedCert, setSelectedCert] = useState<'iso9001' | 'iso14001' | 'iso45001' | 'ce'>('iso9001');

  const CERT_DATA = {
    iso9001: {
      code: 'ISO 9001:2015',
      name: 'Quality Management Systems (QMS)',
      scope: 'Design, manufacture, hot-dip galvanizing, and supply of perforated cable trays, ladder cable trays, raceways, earthing strips, and solar mounting steel structures.',
      benefits: ['Heat-wise raw steel traceability', 'Standardized CNC fabrication tolerances', 'Documented non-conformance prevention'],
    },
    iso14001: {
      code: 'ISO 14001:2015',
      name: 'Environmental Management Systems (EMS)',
      scope: 'Environmentally responsible industrial manufacturing, automated fume scrubbing during hot-dip galvanizing, and chemical effluent treatment plant (ETP) operation.',
      benefits: ['Zero liquid discharge (ZLD) practices', 'Acid recovery & zinc dross recycling', 'Reduced industrial carbon footprint'],
    },
    iso45001: {
      code: 'ISO 45001:2018',
      name: 'Occupational Health & Safety (OHSMS)',
      scope: 'Safe plant operating environments across heavy overhead crane operations, 450°C molten zinc bath handling, and automated steel fabrication lines.',
      benefits: ['Zero fatal incident record culture', 'Strict personal protective equipment (PPE)', 'Hazard identification and risk mitigation'],
    },
    ce: {
      code: 'CE Certificate',
      name: 'Conformité Européenne (CE Marking)',
      scope: 'Certification relating to specified hot-dip galvanized and perforated cable tray products, assessing structural load ratings and electrical continuity.',
      benefits: ['Compliance with EU Construction Products Directive', 'Load deflection safety margin verified', 'Electrical bonding & grounding continuity'],
    },
  };

  const active = CERT_DATA[selectedCert];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-red-600 mb-2 font-bold">
            Quality Assurance · International Compliance
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Certifications and Quality Systems
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            RK Engineering lists ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 management system certifications alongside a CE certificate relating to specified cable tray products. International buyers should review certificate scope, validity, and applicable project requirements.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {(Object.keys(CERT_DATA) as Array<keyof typeof CERT_DATA>).map((key) => {
            const item = CERT_DATA[key];
            const isSelected = selectedCert === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setSelectedCert(key)}
                className={`p-5 rounded-lg border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-900 border-blue-900 text-white shadow-md'
                    : 'bg-slate-50 border-slate-200 hover:border-blue-300 text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-base font-bold font-mono ${isSelected ? 'text-white' : 'text-blue-950'}`}>
                    {item.code}
                  </span>
                  <Award className={`w-4 h-4 ${isSelected ? 'text-red-400' : 'text-blue-700'}`} />
                </div>
                <div className={`text-xs font-medium line-clamp-1 ${isSelected ? 'text-blue-100' : 'text-slate-600'}`}>
                  {item.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Certificate Specification Detail Box (Light) */}
        <div className="p-6 sm:p-8 rounded-lg bg-slate-50 border border-slate-200 space-y-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-red-600 font-bold mb-1">
                Verified Accreditation Details
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {active.code} — {active.name}
              </h3>
            </div>
            <button
              onClick={onOpenRFQ}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded transition-all cursor-pointer self-start md:self-auto shadow-sm"
            >
              <span>Discuss Technical Requirements</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block mb-2">
              Certification Scope & Applicability:
            </span>
            <p className="text-sm text-slate-700 leading-relaxed bg-white p-4 rounded-md border border-slate-200 shadow-sm">
              {active.scope}
            </p>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block mb-3">
              Standard Compliance Outcomes:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {active.benefits.map((b, idx) => (
                <div key={idx} className="p-3 rounded-md bg-white border border-slate-200 flex items-start gap-2.5 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Export Enquiry Guidance Note */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
            <span>
              For export tenders: Identify technical standards, inspection reports, material test certificates (EN 10204 3.1), coating mass criteria, and third-party witness protocols.
            </span>
            <span className="font-mono text-blue-900 font-bold whitespace-nowrap">QA Dossiers Provided</span>
          </div>
        </div>

        {/* Section 9: Clients & Industrial Experience Proof Bar */}
        <div className="mt-14 pt-10 border-t border-slate-200">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-500 text-center mb-6 font-semibold">
            Supporting Industrial & Infrastructure Requirements Worldwide
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
            <div className="p-3 rounded-md bg-white border border-slate-200 shadow-sm">
              <span className="text-blue-950 font-bold text-xs block">EPC Contractors</span>
              <span className="text-[11px] text-slate-500">Power & Utilities</span>
            </div>
            <div className="p-3 rounded-md bg-white border border-slate-200 shadow-sm">
              <span className="text-blue-950 font-bold text-xs block">Solar IPP Developers</span>
              <span className="text-[11px] text-slate-500">Utility Solar Farms</span>
            </div>
            <div className="p-3 rounded-md bg-white border border-slate-200 shadow-sm">
              <span className="text-blue-950 font-bold text-xs block">Industrial Distr.</span>
              <span className="text-[11px] text-slate-500">Africa & USA Markets</span>
            </div>
            <div className="p-3 rounded-md bg-white border border-slate-200 shadow-sm">
              <span className="text-blue-950 font-bold text-xs block">Metro Rail & Tunnels</span>
              <span className="text-[11px] text-slate-500">Transit Authorities</span>
            </div>
            <div className="p-3 rounded-md bg-white border border-slate-200 shadow-sm">
              <span className="text-blue-950 font-bold text-xs block">Refinery Plants</span>
              <span className="text-[11px] text-slate-500">Oil & Gas Corridors</span>
            </div>
            <div className="p-3 rounded-md bg-white border border-slate-200 shadow-sm">
              <span className="text-blue-950 font-bold text-xs block">Hyperscale Facilities</span>
              <span className="text-[11px] text-slate-500">Data & Cloud Centres</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
