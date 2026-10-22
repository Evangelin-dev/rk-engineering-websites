import React, { useEffect } from 'react';
import { X, Check, ArrowRight, ShieldCheck, FileSpreadsheet, Layers } from 'lucide-react';
import { ProductSpec } from '../data/products.ts';

interface ProductModalProps {
  product: ProductSpec | null;
  onClose: () => void;
  onRequestQuote: (productName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onRequestQuote }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-white border border-slate-300 rounded-lg shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header in deep industrial navy */}
        <div className="px-6 py-5 bg-blue-950 border-b border-blue-900 flex items-center justify-between text-white">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-red-400 font-semibold">
              Technical Specification Sheet · RK-ENG
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
              {product.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white rounded-md hover:bg-blue-900 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto text-slate-800">
          
          {/* Overview text */}
          <div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {product.fullDetails}
            </p>
          </div>

          {/* Interactive Technical CAD Cross-Section Graphic */}
          <div className="p-5 rounded-lg bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-blue-700" />
                Cross-Section & Engineering Dimensions
              </span>
              <span className="text-[11px] font-mono text-slate-500">Tolerance: ±1.0 mm (IS 2062 / EN 61537)</span>
            </div>

            {/* SVG Engineering Diagram in Blueprint Light Style */}
            <div className="w-full h-44 bg-white rounded border border-slate-200 flex items-center justify-center p-4 relative overflow-hidden shadow-inner">
              {product.drawingType === 'ladder' ? (
                <svg viewBox="0 0 500 120" className="w-full max-w-md h-full text-slate-700">
                  {/* Side Channel Left */}
                  <rect x="50" y="25" width="20" height="70" fill="#e2e8f0" stroke="#334155" strokeWidth="2" />
                  <rect x="50" y="25" width="35" height="12" fill="#e2e8f0" stroke="#334155" strokeWidth="2" />
                  <rect x="50" y="83" width="35" height="12" fill="#e2e8f0" stroke="#334155" strokeWidth="2" />
                  {/* Side Channel Right */}
                  <rect x="430" y="25" width="20" height="70" fill="#e2e8f0" stroke="#334155" strokeWidth="2" />
                  <rect x="415" y="25" width="35" height="12" fill="#e2e8f0" stroke="#334155" strokeWidth="2" />
                  <rect x="415" y="83" width="35" height="12" fill="#e2e8f0" stroke="#334155" strokeWidth="2" />
                  {/* Rung Welded in Middle */}
                  <rect x="70" y="55" width="360" height="14" fill="#f8fafc" stroke="#dc2626" strokeWidth="2" strokeDasharray="4 2" />
                  {/* Dimension Lines in Red and Blue */}
                  <line x1="70" y1="18" x2="430" y2="18" stroke="#dc2626" strokeWidth="1.5" />
                  <line x1="70" y1="12" x2="70" y2="24" stroke="#dc2626" strokeWidth="1.5" />
                  <line x1="430" y1="12" x2="430" y2="24" stroke="#dc2626" strokeWidth="1.5" />
                  <text x="250" y="14" fill="#dc2626" fontSize="11" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="bold">Width: {product.dimensions.width}</text>
                  {/* Height H */}
                  <line x1="30" y1="25" x2="30" y2="95" stroke="#1d4ed8" strokeWidth="1.5" />
                  <line x1="24" y1="25" x2="36" y2="25" stroke="#1d4ed8" strokeWidth="1.5" />
                  <line x1="24" y1="95" x2="36" y2="95" stroke="#1d4ed8" strokeWidth="1.5" />
                  <text x="18" y="62" fill="#1d4ed8" fontSize="10" textAnchor="middle" transform="rotate(-90 18 62)" fontFamily="JetBrains Mono" fontWeight="bold">Height: {product.dimensions.flangeHeight}</text>
                </svg>
              ) : (
                <svg viewBox="0 0 500 120" className="w-full max-w-md h-full text-slate-700">
                  {/* Channel U-Shape */}
                  <path d="M 60,35 L 80,35 L 80,85 L 420,85 L 420,35 L 440,35 L 440,95 L 60,95 Z" fill="#e2e8f0" stroke="#334155" strokeWidth="2" />
                  {/* Perforation holes */}
                  <circle cx="120" cy="90" r="2.5" fill="#dc2626" />
                  <circle cx="160" cy="90" r="2.5" fill="#dc2626" />
                  <circle cx="200" cy="90" r="2.5" fill="#dc2626" />
                  <circle cx="240" cy="90" r="2.5" fill="#dc2626" />
                  <circle cx="280" cy="90" r="2.5" fill="#dc2626" />
                  <circle cx="320" cy="90" r="2.5" fill="#dc2626" />
                  <circle cx="360" cy="90" r="2.5" fill="#dc2626" />
                  <circle cx="400" cy="90" r="2.5" fill="#dc2626" />
                  {/* Dimension Lines */}
                  <line x1="80" y1="20" x2="420" y2="20" stroke="#dc2626" strokeWidth="1.5" />
                  <line x1="80" y1="14" x2="80" y2="26" stroke="#dc2626" strokeWidth="1.5" />
                  <line x1="420" y1="14" x2="420" y2="26" stroke="#dc2626" strokeWidth="1.5" />
                  <text x="250" y="15" fill="#dc2626" fontSize="11" textAnchor="middle" fontFamily="JetBrains Mono" fontWeight="bold">Width (W): {product.dimensions.width}</text>
                  <line x1="45" y1="35" x2="45" y2="95" stroke="#1d4ed8" strokeWidth="1.5" />
                  <line x1="39" y1="35" x2="51" y2="35" stroke="#1d4ed8" strokeWidth="1.5" />
                  <line x1="39" y1="95" x2="51" y2="95" stroke="#1d4ed8" strokeWidth="1.5" />
                  <text x="32" y="68" fill="#1d4ed8" fontSize="10" textAnchor="middle" transform="rotate(-90 32 68)" fontFamily="JetBrains Mono" fontWeight="bold">Flange: {product.dimensions.flangeHeight || 'Custom'}</text>
                </svg>
              )}
            </div>

            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-2.5 rounded bg-white border border-slate-200">
                <span className="text-slate-500 block text-[10px]">THICKNESS (T)</span>
                <span className="text-slate-900 font-bold">{product.dimensions.thickness}</span>
              </div>
              <div className="p-2.5 rounded bg-white border border-slate-200">
                <span className="text-slate-500 block text-[10px]">STANDARD LENGTH</span>
                <span className="text-slate-900 font-bold">{product.dimensions.length}</span>
              </div>
              <div className="p-2.5 rounded bg-white border border-slate-200">
                <span className="text-slate-500 block text-[10px]">HOT-DIP COATING</span>
                <span className="text-red-600 font-bold">80–120 µm (IS 2629)</span>
              </div>
              <div className="p-2.5 rounded bg-white border border-slate-200">
                <span className="text-slate-500 block text-[10px]">TOLERANCE SPEC</span>
                <span className="text-blue-900 font-bold">ISO 2768 Fine / Med</span>
              </div>
            </div>
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-900 flex items-center gap-1.5 font-bold">
                <ShieldCheck className="w-4 h-4 text-blue-700" />
                Material Grades & Standards
              </h4>
              <div className="space-y-2">
                <div className="text-xs text-slate-600">
                  <span className="font-semibold text-slate-900 block mb-1">Applicable Standards:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.standardStandards.map((std) => (
                      <span key={std} className="px-2 py-1 rounded bg-slate-100 text-[11px] font-mono text-slate-800 border border-slate-200">
                        {std}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-slate-600 pt-2">
                  <span className="font-semibold text-slate-900 block mb-1">Base Steel Alloys:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.materials.map((mat) => (
                      <span key={mat} className="px-2 py-1 rounded bg-slate-100 text-[11px] text-slate-800 border border-slate-200">
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-slate-600 pt-2">
                  <span className="font-semibold text-slate-900 block mb-1">Protective Surface Finishes:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.finishes.map((fn) => (
                      <span key={fn} className="px-2 py-1 rounded bg-blue-50 text-[11px] text-blue-900 font-medium border border-blue-200">
                        {fn}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-900 flex items-center gap-1.5 font-bold">
                <Layers className="w-4 h-4 text-blue-700" />
                Key Engineering Advantages
              </h4>
              <ul className="space-y-2.5">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-slate-200">
                <span className="text-xs font-semibold text-slate-900 block mb-2">Target Project Environments:</span>
                <div className="flex flex-wrap gap-1.5">
                  {product.applications.map((app) => (
                    <span key={app} className="text-[11px] text-slate-600 bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            Submit drawing or BOM for project feasibility & export pricing.
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 bg-slate-200 hover:bg-slate-300 rounded transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuote(product.name);
              }}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded transition-all cursor-pointer shadow"
            >
              <span>Request Quote for This Product</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
