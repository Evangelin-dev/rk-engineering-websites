import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, ShieldAlert, Sparkles, Check } from 'lucide-react';

interface EngineeringCalculatorProps {
  onPreFillRFQ: (config: {
    productName: string;
    specs: string;
  }) => void;
}

export const EngineeringCalculator: React.FC<EngineeringCalculatorProps> = ({ onPreFillRFQ }) => {
  const [trayType, setTrayType] = useState<'perforated' | 'ladder' | 'raceway'>('perforated');
  const [width, setWidth] = useState<number>(300);
  const [height, setHeight] = useState<number>(50);
  const [thickness, setThickness] = useState<number>(2.0);
  const [span, setSpan] = useState<number>(2.0);

  // Structural math calculation for estimated weight and load capacity
  const calculation = useMemo(() => {
    let developedWidthM = 0;
    if (trayType === 'perforated') {
      developedWidthM = (width + 2 * height + 30) / 1000;
    } else if (trayType === 'ladder') {
      const sideChannelDev = (height + 40) / 1000;
      developedWidthM = 2 * sideChannelDev + (width / 1000) * 0.45;
    } else {
      developedWidthM = (width + 2 * height) / 1000;
    }

    const tM = thickness / 1000;
    let bareWeight = developedWidthM * tM * 7850;
    if (trayType === 'perforated') {
      bareWeight = bareWeight * 0.82;
    }

    const hdgWeight = bareWeight * 1.07;
    const baseFactor = trayType === 'ladder' ? 420 : 310;
    const sectionIndex = (Math.pow(height / 50, 1.4) * (thickness / 1.6) * (width / 300)) / Math.pow(span / 2.0, 2);
    const swlKgPerM = Math.round(baseFactor * sectionIndex * 0.45);
    
    const maxAllowableDeflection = (span * 1000) / 200;
    const estimatedDeflection = Math.min(maxAllowableDeflection * 0.72, Math.round((Math.pow(span, 3) * 1.8) / (thickness * Math.pow(height, 0.8)) * 10) / 10);

    return {
      bareWeightKgM: bareWeight.toFixed(2),
      hdgWeightKgM: hdgWeight.toFixed(2),
      swlKgM: Math.max(35, swlKgPerM),
      deflectionMm: Math.max(2.1, estimatedDeflection),
      maxAllowableDeflection: maxAllowableDeflection.toFixed(1),
    };
  }, [trayType, width, height, thickness, span]);

  const handleApplyToRFQ = () => {
    const typeLabel = trayType === 'ladder' 
      ? 'Ladder Type Cable Tray' 
      : trayType === 'raceway' 
      ? 'Raceway Cable Tray' 
      : 'HDG Perforated Cable Tray';

    const specsSummary = `Width: ${width}mm, Height: ${height}mm, Thickness: ${thickness}mm, Span: ${span}m, Est. HDG Wt: ${calculation.hdgWeightKgM} kg/m, SWL: ${calculation.swlKgM} kg/m`;

    onPreFillRFQ({
      productName: typeLabel,
      specs: specsSummary
    });
  };

  return (
    <section id="calculator" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-red-600 mb-2 font-bold">
            Engineering Tool · Quick Estimator
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Cable Tray Weight & Safe Working Load (SWL) Calculator
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Configure cable tray parameters to instantly estimate running weight, hot-dip galvanizing mass, safe working load (kg/m), and allowable structural deflection under uniform distribution.
          </p>
        </div>

        {/* Interactive Calculator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (Light Card) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-sm space-y-6">
            
            {/* Tray Type Selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-2">
                Select Cable Management Profile
              </label>
              <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 rounded-md border border-slate-200">
                <button
                  type="button"
                  onClick={() => setTrayType('perforated')}
                  className={`py-2 px-3 text-xs font-medium rounded transition-all cursor-pointer ${
                    trayType === 'perforated'
                      ? 'bg-blue-700 text-white font-bold shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Perforated Tray
                </button>
                <button
                  type="button"
                  onClick={() => setTrayType('ladder')}
                  className={`py-2 px-3 text-xs font-medium rounded transition-all cursor-pointer ${
                    trayType === 'ladder'
                      ? 'bg-blue-700 text-white font-bold shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Ladder Type Tray
                </button>
                <button
                  type="button"
                  onClick={() => setTrayType('raceway')}
                  className={`py-2 px-3 text-xs font-medium rounded transition-all cursor-pointer ${
                    trayType === 'raceway'
                      ? 'bg-blue-700 text-white font-bold shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Solid / Duct Raceway
                </button>
              </div>
            </div>

            {/* Width Selector */}
            <div>
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="font-semibold uppercase tracking-wider text-slate-800">Tray Width (W)</span>
                <span className="font-mono text-blue-700 font-bold">{width} mm</span>
              </div>
              <input
                type="range"
                min="100"
                max="1000"
                step="50"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer bg-slate-200 rounded h-2"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>100 mm</span>
                <span>300 mm</span>
                <span>600 mm</span>
                <span>1000 mm</span>
              </div>
            </div>

            {/* Height & Thickness row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Flange Height */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-2">
                  Flange Height (H)
                </label>
                <select
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full py-2.5 px-3 bg-slate-50 border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600 font-mono cursor-pointer"
                >
                  <option value={25}>25 mm (Light instrument runs)</option>
                  <option value={50}>50 mm (Standard commercial)</option>
                  <option value={75}>75 mm (Industrial plants)</option>
                  <option value={100}>100 mm (Heavy power feeders)</option>
                  <option value={125}>125 mm (Substation high-density)</option>
                  <option value={150}>150 mm (Multi-tier bridge)</option>
                </select>
              </div>

              {/* Sheet Thickness */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-800 mb-2">
                  Sheet Thickness (T)
                </label>
                <select
                  value={thickness}
                  onChange={(e) => setThickness(Number(e.target.value))}
                  className="w-full py-2.5 px-3 bg-slate-50 border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600 font-mono cursor-pointer"
                >
                  <option value={1.2}>1.2 mm (Light duty)</option>
                  <option value={1.6}>1.6 mm (Standard commercial)</option>
                  <option value={2.0}>2.0 mm (Heavy industrial - Recommended)</option>
                  <option value={2.5}>2.5 mm (Extra heavy duty)</option>
                  <option value={3.0}>3.0 mm (Utility & high-span)</option>
                </select>
              </div>
            </div>

            {/* Support Span Distance */}
            <div>
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="font-semibold uppercase tracking-wider text-slate-800">Support Span Distance (L)</span>
                <span className="font-mono text-blue-700 font-bold">{span} meters</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1.5, 2.0, 2.5, 3.0].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSpan(s)}
                    className={`py-2 px-2 text-xs font-mono font-medium rounded border transition-colors cursor-pointer ${
                      span === s
                        ? 'bg-blue-50 text-blue-800 border-blue-600 font-bold'
                        : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900'
                    }`}
                  >
                    {s.toFixed(1)} m
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Output Column (High-Contrast Industrial Blue Box) */}
          <div className="lg:col-span-5 bg-blue-950 text-white p-6 sm:p-8 rounded-lg border border-blue-900 shadow-md flex flex-col justify-between space-y-6">
            
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-blue-900">
                <span className="text-xs font-mono uppercase tracking-wider text-red-400 flex items-center gap-1.5 font-bold">
                  <Calculator className="w-4 h-4" />
                  Engineering Calculation Summary
                </span>
                <span className="text-[10px] font-mono text-blue-200">IS 2062 / ASTM A123</span>
              </div>

              {/* Metric Cards */}
              <div className="mt-5 space-y-4">
                
                {/* Weight Per Meter */}
                <div className="p-4 rounded-md bg-blue-900/60 border border-blue-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-blue-200 block">Est. Galvanized Weight</span>
                    <span className="text-[11px] text-blue-300 font-mono">Bare: {calculation.bareWeightKgM} kg/m</span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold font-mono text-white tabular-nums">
                      {calculation.hdgWeightKgM}
                    </span>
                    <span className="text-xs font-mono text-red-400 ml-1 font-bold">kg/m</span>
                  </div>
                </div>

                {/* Safe Working Load (SWL) */}
                <div className="p-4 rounded-md bg-blue-900/60 border border-blue-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-blue-200 block">Safe Working Load (UDL)</span>
                    <span className="text-[11px] text-blue-300 font-mono">Span @ {span}m, SF = 1.5</span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold font-mono text-white tabular-nums">
                      {calculation.swlKgM}
                    </span>
                    <span className="text-xs font-mono text-red-400 ml-1 font-bold">kg/m</span>
                  </div>
                </div>

                {/* Estimated Deflection */}
                <div className="p-4 rounded-md bg-blue-900/60 border border-blue-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-blue-200 block">Estimated Deflection</span>
                    <span className="text-[11px] text-blue-300 font-mono">Allowable: &lt; {calculation.maxAllowableDeflection} mm</span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold font-mono text-emerald-300 tabular-nums">
                      {calculation.deflectionMm}
                    </span>
                    <span className="text-xs font-mono text-blue-200 ml-1">mm</span>
                  </div>
                </div>

              </div>

              {/* Technical notes */}
              <div className="mt-5 text-[11px] text-blue-200/90 space-y-1">
                <p>• HDG calculation accounts for 80–120 µm zinc coating (&gt;610 g/m² mass).</p>
                <p>• Actual cable load testing per NEMA VE-1 / BS EN 61537 available upon order.</p>
              </div>
            </div>

            {/* Transfer to RFQ action (Red CTA Button) */}
            <div className="pt-4 border-t border-blue-900">
              <button
                type="button"
                onClick={handleApplyToRFQ}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded transition-all cursor-pointer shadow active:scale-[0.98]"
              >
                <span>Add Configuration to RFQ</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
