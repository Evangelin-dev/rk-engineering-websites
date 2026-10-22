import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenRFQ: (productName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRFQ }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-Zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark (Single text element, 1 line, no pills or subtitles attached) */}
          <a href="#" className="text-lg sm:text-xl font-bold tracking-tight text-blue-950 whitespace-nowrap shrink-0 hover:text-blue-700 transition-colors">
            RK Engineering & Galvanizers
          </a>

          {/* Zone 2: Navigation Links (4-5 single-line clean text links) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#products" className="hover:text-blue-700 hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0">
              Products
            </a>
            <a href="#calculator" className="hover:text-blue-700 hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0">
              Tech Calculator
            </a>
            <a href="#exports" className="hover:text-blue-700 hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0">
              Export Solutions
            </a>
            <a href="#process" className="hover:text-blue-700 hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0">
              Process & QA
            </a>
            <a href="#about" className="hover:text-blue-700 hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0">
              About
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action (Red Secondary Accent) */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <button
              onClick={() => onOpenRFQ()}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded-md transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-red-600 cursor-pointer shadow-sm active:scale-[0.98]"
            >
              <span>Request Export Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-md focus-visible:outline-2 focus-visible:outline-blue-600 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-lg">
          <nav className="flex flex-col space-y-3 text-base font-medium text-slate-800">
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-600 transition-colors"
            >
              Products
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-600 transition-colors"
            >
              Tech Calculator
            </a>
            <a
              href="#exports"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-600 transition-colors"
            >
              Export Solutions
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-600 transition-colors"
            >
              Process & QA
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-600 transition-colors"
            >
              About Company
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-600 transition-colors"
            >
              FAQs
            </a>
          </nav>
          <div className="pt-4 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRFQ();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded-md transition-all cursor-pointer"
            >
              <span>Request Export Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
