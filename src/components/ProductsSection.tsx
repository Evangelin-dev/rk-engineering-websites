import React, { useState } from 'react';
import { PRODUCTS, ProductSpec } from '../data/products.ts';
import { 
  Maximize2, 
  ArrowRight, 
  Check, 
  Layers, 
  ShieldCheck, 
  SlidersHorizontal 
} from 'lucide-react';

interface ProductsSectionProps {
  onSelectProduct: (product: ProductSpec) => void;
  onRequestQuote: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ 
  onSelectProduct, 
  onRequestQuote 
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => {
        if (activeCategory === 'cable-management') return p.category === 'cable-management';
        if (activeCategory === 'earthing') return p.category === 'earthing';
        if (activeCategory === 'solar') return p.category === 'solar';
        if (activeCategory === 'galvanized-steel') return p.category === 'galvanized-steel';
        return true;
      });

  return (
    <section id="products" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-red-600 mb-2">
              Engineering Catalog · Indian Manufacturing
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
              Industrial Cable Trays and Galvanized Steel Products
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Explore cable management systems, earthing materials, solar mounting structures, and galvanized steel products manufactured for industrial and infrastructure applications. Submit your technical specifications and quantities for a project-specific quotation.
            </p>
          </div>

          {/* Interactive Filter Tabs / Segmented Control */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200 self-start md:self-auto overflow-x-auto max-w-full shadow-inner">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeCategory === 'all' 
                  ? 'bg-blue-700 text-white font-semibold shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Products ({PRODUCTS.length})
            </button>
            <button
              onClick={() => setActiveCategory('cable-management')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeCategory === 'cable-management' 
                  ? 'bg-blue-700 text-white font-semibold shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Cable Trays & Ducts
            </button>
            <button
              onClick={() => setActiveCategory('earthing')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeCategory === 'earthing' 
                  ? 'bg-blue-700 text-white font-semibold shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Earthing Materials
            </button>
            <button
              onClick={() => setActiveCategory('solar')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeCategory === 'solar' 
                  ? 'bg-blue-700 text-white font-semibold shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Solar Structures
            </button>
            <button
              onClick={() => setActiveCategory('galvanized-steel')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeCategory === 'galvanized-steel' 
                  ? 'bg-blue-700 text-white font-semibold shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              HDG Steel Components
            </button>
          </div>
        </div>

        {/* Featured Editorial Spotlight Banner */}
        <div className="mb-14 rounded-lg overflow-hidden border border-slate-200 bg-slate-50 grid grid-cols-1 lg:grid-cols-12 items-stretch shadow-sm">
          <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
            <img
              src="/src/assets/images/products_cable_trays_1792669705857.jpg"
              alt="Precision perforated and ladder cable trays manufactured by RK Engineering"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900/60 via-transparent to-transparent" />
          </div>
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-red-600 mb-1 font-bold">
                Precision Manufacturing Assurance
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Engineered for High-Load Electrical Corridors & Global Standards
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether deploying perforated trays with uniform heat dissipation matrices or dual-rail ladder systems supporting massive industrial high-voltage feeders, each product is fabricated from prime structural steel and hot-dip galvanized to ASTM A123 / BS EN ISO 1461 standards.
              </p>
              
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono text-slate-800">
                <div className="p-2.5 rounded bg-white border border-slate-200 shadow-sm">
                  <span className="text-slate-500 block text-[10px]">THICKNESS RANGE</span>
                  <span className="text-blue-900 font-bold">1.2 mm – 3.5 mm</span>
                </div>
                <div className="p-2.5 rounded bg-white border border-slate-200 shadow-sm">
                  <span className="text-slate-500 block text-[10px]">TRAY WIDTHS</span>
                  <span className="text-blue-900 font-bold">50 mm – 1200 mm</span>
                </div>
                <div className="p-2.5 rounded bg-white border border-slate-200 shadow-sm col-span-2 sm:col-span-1">
                  <span className="text-slate-500 block text-[10px]">ZINC ADHESION</span>
                  <span className="text-red-600 font-bold">&gt; 610 g/m² Heavy</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-600">
                Custom sizes, slotted couplings, reducers, and cover lids supplied per drawings.
              </span>
              <button
                onClick={() => onSelectProduct(PRODUCTS[0])}
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 hover:text-blue-800 cursor-pointer"
              >
                <span>Inspect Technical CAD Specs</span>
                <ArrowRight className="w-4 h-4 text-red-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-lg bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between group overflow-hidden"
            >
              <div className="p-6">
                {/* Unboxed Metadata Header (No static pills) */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="font-mono text-red-600 uppercase tracking-wider text-[11px] font-bold">
                    {product.category.replace('-', ' ')}
                  </span>
                  <span className="font-mono text-slate-600 text-[11px] font-semibold">
                    {product.dimensions.thickness}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-blue-800 transition-colors">
                  {product.name}
                </h3>

                <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {product.description}
                </p>

                {/* Key Dimensions Specs Table */}
                <div className="mt-5 p-3 rounded-md bg-slate-50 border border-slate-200 text-xs font-mono space-y-1.5">
                  <div className="flex justify-between text-slate-600">
                    <span>Width:</span>
                    <span className="text-slate-900 font-semibold">{product.dimensions.width || 'Custom'}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Flange Height:</span>
                    <span className="text-slate-900 font-semibold">{product.dimensions.flangeHeight || 'Custom'}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Length:</span>
                    <span className="text-slate-900 font-semibold">{product.dimensions.length}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Finish:</span>
                    <span className="text-blue-900 font-semibold truncate max-w-[170px] text-right">
                      {product.finishes[0]}
                    </span>
                  </div>
                </div>

                {/* Standards strip */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {product.standardStandards.slice(0, 3).map((std) => (
                    <span key={std} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                      {std}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Bar (View Product + Request Quote in Red) */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProduct(product)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-900 hover:text-blue-700 py-1.5 px-2 rounded hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-blue-700" />
                  <span>View Product</span>
                </button>

                <button
                  onClick={() => onRequestQuote(product.name)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 py-1.5 px-3 rounded transition-all cursor-pointer shadow-sm active:scale-[0.98]"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
