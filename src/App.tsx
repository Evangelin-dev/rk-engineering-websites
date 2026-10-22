import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Highlights } from './components/Highlights.tsx';
import { ProductsSection } from './components/ProductsSection.tsx';
import { ProductModal } from './components/ProductModal.tsx';
import { EngineeringCalculator } from './components/EngineeringCalculator.tsx';
import { ExportSection } from './components/ExportSection.tsx';
import { WhyChooseUs } from './components/WhyChooseUs.tsx';
import { IndustriesSection } from './components/IndustriesSection.tsx';
import { ProcessSection } from './components/ProcessSection.tsx';
import { CertificationsSection } from './components/CertificationsSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { RFQSection } from './components/RFQSection.tsx';
import { FAQSection } from './components/FAQSection.tsx';
import { FinalCTA } from './components/FinalCTA.tsx';
import { Footer } from './components/Footer.tsx';
import { ProductSpec } from './data/products.ts';

export default function App() {
  const [selectedProductForModal, setSelectedProductForModal] = useState<ProductSpec | null>(null);
  const [rfqPreFill, setRfqPreFill] = useState<{
    productName?: string;
    specs?: string;
  }>({});

  const handleOpenRFQ = (productName?: string) => {
    if (productName) {
      setRfqPreFill({ productName });
    }
    const rfqElement = document.getElementById('rfq-section');
    if (rfqElement) {
      rfqElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreProducts = () => {
    const productsElement = document.getElementById('products');
    if (productsElement) {
      productsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePreFillFromCalculator = (config: { productName: string; specs: string }) => {
    setRfqPreFill({
      productName: config.productName,
      specs: config.specs,
    });
    const rfqElement = document.getElementById('rfq-section');
    if (rfqElement) {
      rfqElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col antialiased selection:bg-red-600 selection:text-white">
      
      {/* Top Bar Contract (1 line brand, 4-5 text links, 1 CTA) */}
      <Navbar onOpenRFQ={() => handleOpenRFQ()} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero 
          onOpenRFQ={() => handleOpenRFQ()} 
          onExploreProducts={handleExploreProducts} 
        />

        {/* 2. Company Highlights */}
        <Highlights />

        {/* 3. Products Section */}
        <ProductsSection 
          onSelectProduct={(product) => setSelectedProductForModal(product)}
          onRequestQuote={(productName) => handleOpenRFQ(productName)}
        />

        {/* Engineering Tool: Cable Tray Weight & SWL Calculator */}
        <EngineeringCalculator 
          onPreFillRFQ={handlePreFillFromCalculator} 
        />

        {/* 4. International Export Section */}
        <ExportSection 
          onOpenRFQ={() => handleOpenRFQ()} 
        />

        {/* 5. Why Choose RK Engineering */}
        <WhyChooseUs />

        {/* 6. Industries We Serve */}
        <IndustriesSection />

        {/* 7. Manufacturing Process: 01 to 06 */}
        <ProcessSection />

        {/* 8. Certifications & Quality + 9. Clients */}
        <CertificationsSection 
          onOpenRFQ={() => handleOpenRFQ()} 
        />

        {/* About RK Engineering (2000-to-Today Timeline & Heritage) */}
        <AboutSection 
          onOpenRFQ={() => handleOpenRFQ()} 
        />

        {/* 10. Export Enquiry Section (RFQ Form) */}
        <RFQSection 
          preFilledProduct={rfqPreFill.productName}
          preFilledSpecs={rfqPreFill.specs}
        />

        {/* 11. Frequently Asked Questions */}
        <FAQSection />

        {/* 12. Final Call to Action */}
        <FinalCTA 
          onOpenRFQ={() => handleOpenRFQ()}
          onExploreProducts={handleExploreProducts}
        />
      </main>

      {/* Global Clean Footer */}
      <Footer onOpenRFQ={() => handleOpenRFQ()} />

      {/* Technical Spec & CAD Modal */}
      <ProductModal
        product={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
        onRequestQuote={(productName) => handleOpenRFQ(productName)}
      />

    </div>
  );
}
