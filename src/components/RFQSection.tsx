import React, { useState, useEffect } from 'react';
import { 
  Send, 
  UploadCloud, 
  CheckCircle2, 
  Mail, 
  Phone, 
  FileCheck, 
  Building2, 
  Globe, 
  Copy, 
  Check 
} from 'lucide-react';
import { PRODUCTS } from '../data/products.ts';

interface RFQSectionProps {
  preFilledProduct?: string;
  preFilledSpecs?: string;
}

export const RFQSection: React.FC<RFQSectionProps> = ({ preFilledProduct, preFilledSpecs }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phone: '',
    country: '',
    productCategory: 'HDG Perforated Cable Tray',
    specifications: '',
    orderQuantity: '',
    quantityUnit: 'Meters',
    deliveryDate: '',
    destinationPort: '',
    additionalRequirements: '',
  });

  const [fileName, setFileName] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [copied, setCopied] = useState(false);

  // Apply pre-filled data if passed
  useEffect(() => {
    if (preFilledProduct) {
      setFormData((prev) => ({
        ...prev,
        productCategory: preFilledProduct,
        specifications: preFilledSpecs || prev.specifications
      }));
    }
  }, [preFilledProduct, preFilledSpecs]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedRef = `RFQ-RK-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setReferenceId(generatedRef);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleCopySummary = () => {
    const text = `RK Engineering Export RFQ [${referenceId}]\nClient: ${formData.fullName} (${formData.companyName})\nEmail: ${formData.businessEmail}\nCountry: ${formData.country}\nProduct: ${formData.productCategory}\nSpecs: ${formData.specifications}\nQuantity: ${formData.orderQuantity} ${formData.quantityUnit}\nPort: ${formData.destinationPort}\nTarget Date: ${formData.deliveryDate}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="rfq-section" className="py-20 bg-white border-b border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-red-600 mb-2 font-bold">
            Direct Manufacturing Portal · Export Desk
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Request an Export Quote for Your International Project
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Looking for an Indian manufacturer of cable trays, earthing materials, solar mounting structures, or galvanized steel products? Share your project requirements with RK Engineering. Include the product type, dimensions, material and coating specifications, quantities, destination country, and target delivery schedule so that your enquiry can be evaluated accurately.
          </p>
        </div>

        {/* Form Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Form (Light Card) */}
          <div className="lg:col-span-8 bg-slate-50 border border-slate-200 rounded-lg p-6 sm:p-8 shadow-sm">
            {isSubmitted ? (
              <div className="py-8 space-y-6 text-center sm:text-left">
                <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Export Enquiry Submitted Successfully
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600">
                      Your enquiry reference is <span className="font-mono font-bold text-red-600">{referenceId}</span>. Our export sales engineering desk will review your technical specifications against plant feasibility and respond with detailed pricing and commercial terms.
                    </p>
                  </div>
                </div>

                {/* Summary Box */}
                <div className="p-5 rounded-lg bg-white border border-slate-200 shadow-sm space-y-2 text-xs font-mono">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Reference:</span>
                    <span className="text-red-600 font-bold">{referenceId}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Company & Contact:</span>
                    <span className="text-slate-900 font-medium">{formData.companyName || 'Not specified'} ({formData.fullName})</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Destination:</span>
                    <span className="text-slate-900 font-medium">{formData.destinationPort || 'Port to be confirmed'}, {formData.country}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Product:</span>
                    <span className="text-slate-900 font-medium">{formData.productCategory}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Quantity:</span>
                    <span className="text-slate-900 font-medium">{formData.orderQuantity || 'Pending'} {formData.quantityUnit}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={handleCopySummary}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded bg-slate-200 hover:bg-slate-300 text-slate-800 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                    <span>{copied ? 'Summary Copied' : 'Copy RFQ Summary'}</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        companyName: '',
                        businessEmail: '',
                        phone: '',
                        country: '',
                        productCategory: 'HDG Perforated Cable Tray',
                        specifications: '',
                        orderQuantity: '',
                        quantityUnit: 'Meters',
                        deliveryDate: '',
                        destinationPort: '',
                        additionalRequirements: '',
                      });
                      setFileName('');
                    }}
                    className="text-xs font-bold text-blue-700 hover:underline cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Contact & Company Details */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-4 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-red-600" />
                    1. Contact & Company Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-700 font-semibold mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. David Vance"
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-slate-700 font-semibold mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="e.g. Apex Power & Infrastructure Ltd."
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-slate-700 font-semibold mb-1">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        name="businessEmail"
                        required
                        value={formData.businessEmail}
                        onChange={handleInputChange}
                        placeholder="david.vance@apexpower.com"
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-slate-700 font-semibold mb-1">
                        Country *
                      </label>
                      <input
                        type="text"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleInputChange}
                        placeholder="e.g. United States, Kenya, South Africa"
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Product & Technical Requirements */}
                <div className="pt-4 border-t border-slate-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-4 flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-red-600" />
                    2. Product Specifications & Scope
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs text-slate-700 font-semibold mb-1">
                        Product Category *
                      </label>
                      <select
                        name="productCategory"
                        value={formData.productCategory}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600 cursor-pointer"
                      >
                        {PRODUCTS.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs text-slate-700 font-semibold mb-1">
                        Product Specifications / Dimensions / Gauge
                      </label>
                      <textarea
                        name="specifications"
                        rows={3}
                        value={formData.specifications}
                        onChange={handleInputChange}
                        placeholder="Specify tray width, side height, sheet thickness (e.g. 2.0 mm), finish (Hot-Dip Galvanized), standard (ASTM A123 / IS 2629), or fitting requirements."
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      />
                    </div>

                    {/* Order Quantity */}
                    <div>
                      <label className="block text-xs text-slate-700 font-semibold mb-1">
                        Order Quantity *
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          name="orderQuantity"
                          required
                          min="1"
                          value={formData.orderQuantity}
                          onChange={handleInputChange}
                          placeholder="e.g. 5000"
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 font-mono"
                        />
                        <select
                          name="quantityUnit"
                          value={formData.quantityUnit}
                          onChange={handleInputChange}
                          className="px-3 py-2.5 bg-white border border-slate-300 rounded text-xs text-slate-900 font-mono"
                        >
                          <option value="Meters">Meters</option>
                          <option value="Metric Tons (MT)">MT</option>
                          <option value="Pieces / Units">Pieces</option>
                        </select>
                      </div>
                    </div>

                    {/* File / Drawing Upload Simulator */}
                    <div>
                      <label className="block text-xs text-slate-700 font-semibold mb-1">
                        Attach Drawings or BOM (PDF / DWG / Excel)
                      </label>
                      <label className="flex items-center justify-center gap-2 px-3.5 py-2 bg-white border border-dashed border-slate-300 hover:border-red-600 rounded cursor-pointer text-xs text-slate-600 hover:text-slate-900 transition-colors">
                        <UploadCloud className="w-4 h-4 text-red-600" />
                        <span className="truncate">{fileName || 'Choose Drawing File...'}</span>
                        <input
                          type="file"
                          onChange={handleFileUpload}
                          className="hidden"
                          accept=".pdf,.dwg,.dxf,.xls,.xlsx,.zip"
                        />
                      </label>
                    </div>
                  </div>
                </div>

                {/* Logistics & Schedule */}
                <div className="pt-4 border-t border-slate-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-4 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-red-600" />
                    3. Delivery Schedule & Destination
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-700 font-semibold mb-1">
                        Destination Port or Delivery Location *
                      </label>
                      <input
                        type="text"
                        name="destinationPort"
                        required
                        value={formData.destinationPort}
                        onChange={handleInputChange}
                        placeholder="e.g. Port of Houston (USA) / Durban (South Africa)"
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-slate-700 font-semibold mb-1">
                        Required Delivery Date / Target Dispatch
                      </label>
                      <input
                        type="date"
                        name="deliveryDate"
                        value={formData.deliveryDate}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600 font-mono"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs text-slate-700 font-semibold mb-1">
                        Additional Project Requirements (Incoterms, Inspection, Coating Mass)
                      </label>
                      <input
                        type="text"
                        name="additionalRequirements"
                        value={formData.additionalRequirements}
                        onChange={handleInputChange}
                        placeholder="e.g. CIF delivery requested, SGS third-party inspection, 80 micron zinc coating minimum."
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Action (Red CTA Button) */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-[11px] text-slate-500 max-w-md">
                    Our team will review your submitted requirements and respond with the next steps. Any response-time commitment matches the company's actual sales process.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 disabled:opacity-50 rounded transition-all cursor-pointer shadow active:scale-[0.98]"
                  >
                    <span>{isSubmitting ? 'Evaluating...' : 'Submit Export Enquiry'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* Right Direct Response Contact Box (Deep Industrial Navy Theme for High Contrast) */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="p-6 rounded-lg bg-blue-950 text-white border border-blue-900 shadow-md space-y-5">
              <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold block">
                Direct Response & Inquiries
              </span>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Need a Direct Response?
              </h3>
              <p className="text-xs text-blue-200 leading-relaxed">
                Contact RK Engineering to discuss product availability, specifications, quotation requirements, and potential shipping arrangements.
              </p>

              <div className="space-y-4 pt-2">
                <a 
                  href="mailto:info@rkenggindia.com"
                  className="flex items-center gap-3 p-3 rounded-md bg-blue-900/60 border border-blue-800 hover:border-red-500 transition-colors text-xs text-white group"
                >
                  <Mail className="w-4 h-4 text-red-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-mono truncate">info@rkenggindia.com</span>
                </a>

                <a 
                  href="tel:+918422044452"
                  className="flex items-center gap-3 p-3 rounded-md bg-blue-900/60 border border-blue-800 hover:border-red-500 transition-colors text-xs text-white group"
                >
                  <Phone className="w-4 h-4 text-red-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-mono">+91 84220 44452</span>
                </a>
              </div>

              <div className="pt-4 border-t border-blue-900 text-xs text-blue-200 space-y-2">
                <div className="flex justify-between">
                  <span>Factory Location:</span>
                  <span className="text-white font-medium">India</span>
                </div>
                <div className="flex justify-between">
                  <span>Export Ports:</span>
                  <span className="text-white font-medium">JNPT / Mundra</span>
                </div>
                <div className="flex justify-between">
                  <span>Annual Tray Cap:</span>
                  <span className="text-red-400 font-mono font-bold">12,000 MT</span>
                </div>
                <div className="flex justify-between">
                  <span>Annual HDG Cap:</span>
                  <span className="text-red-400 font-mono font-bold">24,000 MT</span>
                </div>
              </div>
            </div>

            {/* Quote Guarantee Card */}
            <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2 shadow-sm">
              <span className="font-bold text-slate-900 block">International Supply Protocol</span>
              <p className="leading-relaxed">
                All export orders include certified raw material MTCs, batch galvanizing thickness reports, and container packing photos prior to port departure.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
