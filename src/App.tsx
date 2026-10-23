import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Footer } from './components/Footer.tsx';
import { Navbar } from './components/Navbar.tsx';
import { ContactPopup } from './components/ContactPopup.tsx';
import { ProductModal } from './components/ProductModal.tsx';
import { ProductSpec } from './data/products.ts';
import { AboutPage } from './pages/AboutPage.tsx';
import { BlogPage } from './pages/BlogPage.tsx';
import { AssociationsPage } from './pages/AssociationsPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { ExportSolutionsPage } from './pages/ExportSolutionsPage.tsx';
import { GalleryPage } from './pages/GalleryPage.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { ProcessQualityPage } from './pages/ProcessQualityPage.tsx';
import { ProductsPage } from './pages/ProductsPage.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { TechnicalCalculatorPage } from './pages/TechnicalCalculatorPage.tsx';

const ProductDetailPage = lazy(() =>
  import('./pages/ProductDetailPage.tsx').then((module) => ({ default: module.ProductDetailPage })),
);

const PAGE_TITLES: Record<string, string> = {
  '/': 'Home',
  '/services': 'Services',
  '/products': 'Products',
  '/tech-calculator': 'Technical Calculator',
  '/export-solutions': 'Export Solutions',
  '/process-quality': 'Process & Quality',
  '/about': 'About Us',
  '/associations': 'Our Association',
  '/gallery': 'Gallery',
  '/contact': 'Contact Us',
  '/blog': 'Blog',
};

const PAGE_DESCRIPTIONS: Record<string, string> = {
  '/products': 'Explore RK Engineering’s cable trays, earthing materials, solar mounting structures, hot-dip galvanized steel products, and towers for industrial and infrastructure projects.',
  '/services': 'Explore RK Engineering’s industrial hot-dip galvanizing services for cable trays, structural steel, earthing products, and suitable OEM-fabricated components.',
  '/about': 'Learn about RK Engineering & Galvanizers Pvt. Ltd., its cable tray manufacturing, in-house hot-dip galvanizing, industrial capabilities, quality systems, and international project enquiries.',
};

const DEFAULT_PAGE_DESCRIPTION =
  'RK Engineering & Galvanizers Pvt. Ltd. manufactures cable trays, galvanized steel products, earthing materials, and solar mounting structures for industrial and infrastructure projects.';

function RoutedWebsite() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedProductForModal, setSelectedProductForModal] = useState<ProductSpec | null>(null);
  const [rfqPreFill, setRfqPreFill] = useState<{ productName?: string; specs?: string }>({});

  useEffect(() => {
    const isProductDetail = location.pathname.startsWith('/products/');
    if (!isProductDetail) {
      const pageTitle = PAGE_TITLES[location.pathname] ?? 'Home';
      document.title = `${pageTitle} | RK Engineering & Galvanizers`;
      const description = PAGE_DESCRIPTIONS[location.pathname];
      let metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.append(metaDescription);
      }
      metaDescription.content = description ?? DEFAULT_PAGE_DESCRIPTION;
      document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.remove();
    }
    if (location.hash) {
      window.requestAnimationFrame(() => {
        document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.hash, location.pathname]);

  const handleOpenRFQ = (productName?: string, specs?: string) => {
    if (productName || specs) {
      setRfqPreFill({
        productName: productName ?? rfqPreFill.productName,
        specs,
      });
    }
    navigate('/contact');
  };

  const handlePreFillFromCalculator = (config: { productName: string; specs: string }) => {
    setRfqPreFill(config);
    navigate('/contact');
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 antialiased selection:bg-red-600 selection:text-white">
      <Navbar />

      <main className="flex-1 shrink-0">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenRFQ={() => handleOpenRFQ()}
                onExploreProducts={() => navigate('/products')}
              />
            }
          />
          <Route path="/services" element={<ServicesPage onOpenRFQ={() => handleOpenRFQ()} />} />
          <Route
            path="/products"
            element={
              <ProductsPage
                onSelectProduct={setSelectedProductForModal}
                onRequestQuote={(productName) => handleOpenRFQ(productName)}
              />
            }
          />
          <Route
            path="/products/:slug"
            element={
              <React.Suspense fallback={<div className="min-h-[50vh] bg-white" aria-label="Loading product details" />}>
                <ProductDetailPage onRequestQuote={(productName) => handleOpenRFQ(productName)} />
              </React.Suspense>
            }
          />
          <Route
            path="/tech-calculator"
            element={<TechnicalCalculatorPage onPreFillRFQ={handlePreFillFromCalculator} />}
          />
          <Route path="/export-solutions" element={<ExportSolutionsPage onOpenRFQ={() => handleOpenRFQ()} />} />
          <Route path="/process-quality" element={<ProcessQualityPage onOpenRFQ={() => handleOpenRFQ()} />} />
          <Route path="/about" element={<AboutPage onOpenRFQ={() => handleOpenRFQ()} />} />
          <Route path="/associations" element={<AssociationsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route
            path="/contact"
            element={
              <ContactPage
                preFilledProduct={rfqPreFill.productName}
                preFilledSpecs={rfqPreFill.specs}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />

      <ContactPopup />

      <ProductModal
        product={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
        onRequestQuote={(productName) => {
          setSelectedProductForModal(null);
          handleOpenRFQ(productName);
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <RoutedWebsite />
    </BrowserRouter>
  );
}
