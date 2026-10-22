import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenRFQ: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRFQ }) => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-base sm:text-lg font-bold text-white tracking-tight block">
              RK Engineering & Galvanizers Pvt. Ltd.
            </span>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Industrial Cable Tray Manufacturer & Exporter from India. Specialising in hot-dip galvanized cable trays, raceways, earthing materials, and solar mounting structures for global infrastructure.
            </p>
            <div className="text-[11px] text-slate-400 space-y-1 font-mono">
              <div>Established: 2000 (25+ Years Experience)</div>
              <div>Annual Capacities: 12,000 MT Trays | 24,000 MT HDG</div>
              <div>Accreditations: ISO 9001:2015 · ISO 14001:2015 · ISO 45001:2018 · CE</div>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Products
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="hover:text-red-400 transition-colors">HDG Perforated Cable Tray</a>
              </li>
              <li>
                <a href="#products" className="hover:text-red-400 transition-colors">Ladder Type Cable Tray</a>
              </li>
              <li>
                <a href="#products" className="hover:text-red-400 transition-colors">Raceway Cable Tray</a>
              </li>
              <li>
                <a href="#products" className="hover:text-red-400 transition-colors">GI Earthing Strip & Rods</a>
              </li>
              <li>
                <a href="#products" className="hover:text-red-400 transition-colors">Cable Tray Duct</a>
              </li>
              <li>
                <a href="#products" className="hover:text-red-400 transition-colors">Solar Mounting Structures</a>
              </li>
              <li>
                <a href="#products" className="hover:text-red-400 transition-colors">Hot-Dip Galvanized Steel</a>
              </li>
            </ul>
          </div>

          {/* Global Markets & Solutions */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Export Corridors
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#exports" className="hover:text-red-400 transition-colors">African Markets Supply</a>
              </li>
              <li>
                <a href="#exports" className="hover:text-red-400 transition-colors">United States Projects</a>
              </li>
              <li>
                <a href="#exports" className="hover:text-red-400 transition-colors">Middle East & Global</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-red-400 transition-colors">Tray Weight Calculator</a>
              </li>
              <li>
                <a href="#process" className="hover:text-red-400 transition-colors">Hot-Dip Galvanizing (450°C)</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-red-400 transition-colors">Export FAQs</a>
              </li>
            </ul>
          </div>

          {/* Plant & Contact */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Export Enquiries
            </span>
            <div className="space-y-2 text-xs">
              <div className="text-slate-300 font-mono">info@rkenggindia.com</div>
              <div className="text-slate-300 font-mono">+91 84220 44452</div>
              <div className="text-slate-400">Head Office & Works: India</div>
              <div className="text-slate-400">Shipping: JNPT / Mundra Ports</div>
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenRFQ}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300 cursor-pointer"
              >
                <span>Request Project Quotation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} RK Engineering & Galvanizers Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 transition-colors">Manufacturing in India</span>
            <span>·</span>
            <span className="hover:text-slate-300 transition-colors">IS 2629 / ASTM A123 Compliant</span>
            <span>·</span>
            <span className="hover:text-slate-300 transition-colors">Seaworthy Export Grade</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
