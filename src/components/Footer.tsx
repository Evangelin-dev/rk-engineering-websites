import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, PhoneCall } from 'lucide-react';

export const Footer: React.FC = () => {
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
                <Link to="/products" className="hover:text-red-400 transition-colors">HDG Perforated Cable Tray</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-red-400 transition-colors">Ladder Type Cable Tray</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-red-400 transition-colors">Raceway Cable Tray</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-red-400 transition-colors">GI Earthing Strip & Rods</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-red-400 transition-colors">Cable Tray Duct</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-red-400 transition-colors">Solar Mounting Structures</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-red-400 transition-colors">Hot-Dip Galvanized Steel</Link>
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
                <Link to="/export-solutions" className="hover:text-red-400 transition-colors">African Markets Supply</Link>
              </li>
              <li>
                <Link to="/export-solutions" className="hover:text-red-400 transition-colors">United States Projects</Link>
              </li>
              <li>
                <Link to="/export-solutions" className="hover:text-red-400 transition-colors">Middle East & Global</Link>
              </li>
              <li>
                <Link to="/process-quality" className="hover:text-red-400 transition-colors">Hot-Dip Galvanizing (450°C)</Link>
              </li>
              <li>
                <Link to="/export-solutions" className="hover:text-red-400 transition-colors">Export FAQs</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <span className="block border-l-2 border-red-500 pl-3 text-xs font-bold uppercase tracking-wider text-white">
              Contact Us
            </span>
            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <PhoneCall aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                <div>
                  <h2 className="text-sm font-bold text-white">Support</h2>
                  <a href="tel:+918422044453" className="mt-1 inline-block text-slate-300 transition-colors hover:text-white">
                    +91 84220 44453
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                <div>
                  <h2 className="text-sm font-bold text-white">Email</h2>
                  <a href="mailto:info@rkenggindia.com" className="mt-1 inline-block break-all text-slate-300 transition-colors hover:text-white">
                    info@rkenggindia.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                <div>
                  <h2 className="text-sm font-bold text-white">Our Address</h2>
                  <address className="mt-1 text-slate-300 not-italic leading-relaxed">
                    Unit-1 N-70, Factory Unit 2 - W 87 Anand Nagar, Additional M.I.D.C, Ambernath (E), Dist. Thane- 421501, INDIA.
                  </address>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300"
              >
                <span>Request Project Quotation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
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
