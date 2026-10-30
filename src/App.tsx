import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Footer } from './components/Footer.tsx';
import { Navbar } from './components/Navbar.tsx';
import { ContactPopup } from './components/ContactPopup.tsx';
import { ProductModal } from './components/ProductModal.tsx';
import { ProductSpec } from './data/products.ts';
import { AboutPage } from './pages/AboutPage.tsx';
import { BlogArticlePage, BlogPage } from './pages/BlogPage.tsx';
import {
  CableTrayExporterIndiaAfricaPage,
  CableTrayManufacturerAfricaPage,
  GalvanizedCableTrayAfricaPage,
  LadderCableTrayAfricaPage,
  PerforatedCableTrayAfricaPage,
} from './pages/CableTrayAfricaPages.tsx';
import {
  CableTrayExporterUsaPage,
  CableTrayManufacturerUsaPage,
  GalvanizedCableTrayUsaPage,
  OilGasCableTrayAfricaPage,
  PowerEnergyCableTrayAfricaPage,
} from './pages/CableTrayInternationalPages.tsx';
import { AssociationsPage } from './pages/AssociationsPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { ExportSolutionsPage } from './pages/ExportSolutionsPage.tsx';
import { GalleryPage } from './pages/GalleryPage.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { ProcessQualityPage } from './pages/ProcessQualityPage.tsx';
import { ProductsPage } from './pages/ProductsPage.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { TechnicalCalculatorPage } from './pages/TechnicalCalculatorPage.tsx';
import { TRANSMISSION_TOWER_PAGES } from './data/transmissionTowerPages.ts';
import { TransmissionTowerPage } from './pages/TransmissionTowerPage.tsx';
import { BLOG_ARTICLES } from './data/blogArticles.ts';
import { getBlogImage } from './data/blogImages.ts';
import { PRODUCT_LANDING_PAGES } from './data/productLandingPages.ts';
import { ProductLandingPage } from './pages/ProductLandingPage.tsx';

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
  '/cable-tray-manufacturer-africa': 'Cable Tray Manufacturer for Industrial Projects in Africa',
  '/cable-tray-exporter-india-africa': 'Cable Tray Exporter from India to African Countries | Import Enquiries',
  '/hot-dip-galvanized-cable-tray-africa': 'Hot Dip Galvanized Cable Tray Supplier for African Markets',
  '/perforated-cable-tray-manufacturer-africa': 'Perforated Cable Tray Manufacturer for African Industrial Projects',
  '/ladder-cable-tray-supplier-africa': 'Ladder Cable Tray Supplier for Power Projects in Africa',
  '/cable-tray-oil-gas-projects-africa': 'Cable Tray Solutions for Oil and Gas Projects in Africa',
  '/cable-tray-power-energy-projects-africa': 'Cable Tray Supplier for Power and Energy Projects in Africa',
  '/cable-tray-manufacturer-usa': 'Cable Tray Manufacturer for Industrial Projects in the USA',
  '/cable-tray-exporter-india-usa': 'Cable Tray Exporter from India to the USA',
  '/hot-dip-galvanized-cable-tray-usa': 'Hot Dip Galvanized Cable Tray for US Industrial Applications',
  '/powder-coated-cable-tray/': 'Powder Coated Cable Tray Manufacturer in India',
  '/pre-galvanized-steel-products/': 'Pre-Galvanized Steel Products Manufacturer in India',
  ...Object.fromEntries(TRANSMISSION_TOWER_PAGES.map((page) => [page.path, page.title])),
  ...Object.fromEntries(BLOG_ARTICLES.map((article) => [article.path, article.seoTitle])),
};

const PAGE_DESCRIPTIONS: Record<string, string> = {
  '/products': 'Explore RK Engineering’s cable trays, earthing materials, solar mounting structures, hot-dip galvanized steel products, and towers for industrial and infrastructure projects.',
  '/services': 'Explore RK Engineering’s industrial hot-dip galvanizing services for cable trays, structural steel, earthing products, and suitable OEM-fabricated components.',
  '/about': 'Learn about RK Engineering & Galvanizers Pvt. Ltd., its cable tray manufacturing, in-house hot-dip galvanizing, industrial capabilities, quality systems, and international project enquiries.',
  '/blog': 'Read RK Engineering articles on cable management, galvanized steel, earthing, solar structures, and procurement for industrial and infrastructure projects.',
  '/cable-tray-manufacturer-africa': 'Explore RK Engineering’s cable tray types, hot-dip galvanizing, industrial applications, stated manufacturing capacity, and export enquiry process for African projects.',
  '/cable-tray-exporter-india-africa': 'African importers and distributors can review cable tray categories, minimum order quantities, quotation requirements, and destination-specific export arrangements from India.',
  '/hot-dip-galvanized-cable-tray-africa': 'Review hot-dip galvanizing considerations, cable tray selection, industrial applications, buyer requirements, listed quality certifications, and export enquiries for African projects.',
  '/perforated-cable-tray-manufacturer-africa': 'Explore perforated cable tray applications, selection factors, project requirements, African market enquiries, and quotation information from RK Engineering.',
  '/ladder-cable-tray-supplier-africa': 'Review ladder cable tray applications for power plants and substations, engineering considerations, procurement requirements, and project enquiries.',
  '/cable-tray-oil-gas-projects-africa': 'Cable tray applications for African oil and gas infrastructure, refineries, petrochemical facilities, pipeline systems, coastal sites, and project enquiries.',
  '/cable-tray-power-energy-projects-africa': 'Explore cable tray options, applications, technical requirements, and enquiry information for African power generation and energy infrastructure projects.',
  '/cable-tray-manufacturer-usa': 'US industrial buyers can review cable tray categories, manufacturing capacity, technical requirements, sourcing from India, and quotation information.',
  '/cable-tray-exporter-india-usa': 'Information for US buyers sourcing cable trays from India, including product types, import and export documentation, packaging, shipping terms, and quotation requirements.',
  '/hot-dip-galvanized-cable-tray-usa': 'Review galvanized cable tray benefits, product types, US industrial applications, technical specifications, and enquiry requirements from RK Engineering.',
  '/powder-coated-cable-tray/': 'Durable, Colour-Finished Cable Tray Systems for Industrial Projects. RK Engineering manufactures cable management solutions for industrial, commercial and infrastructure applications, including powder-coated cable trays.',
  '/pre-galvanized-steel-products/': 'Reliable Pre-Galvanized Steel Solutions for Industrial and Electrical Infrastructure. RK Engineering provides industrial cable management, steel fabrication and galvanizing solutions for infrastructure and industrial applications.',
  ...Object.fromEntries(TRANSMISSION_TOWER_PAGES.map((page) => [page.path, page.description])),
  ...Object.fromEntries(BLOG_ARTICLES.map((article) => [article.path, article.metaDescription])),
};

const DEFAULT_PAGE_DESCRIPTION =
  'RK Engineering & Galvanizers Pvt. Ltd. manufactures cable trays, galvanized steel products, earthing materials, and solar mounting structures for industrial and infrastructure projects.';
const PRODUCTION_ORIGIN = 'https://rkenggindia.com';
const SEO_LANDING_PAGE_PATHS = [
  '/cable-tray-manufacturer-africa',
  '/cable-tray-exporter-india-africa',
  '/hot-dip-galvanized-cable-tray-africa',
  '/perforated-cable-tray-manufacturer-africa',
  '/ladder-cable-tray-supplier-africa',
  '/cable-tray-oil-gas-projects-africa',
  '/cable-tray-power-energy-projects-africa',
  '/cable-tray-manufacturer-usa',
  '/cable-tray-exporter-india-usa',
  '/hot-dip-galvanized-cable-tray-usa',
  '/powder-coated-cable-tray/',
  '/pre-galvanized-steel-products/',
  ...TRANSMISSION_TOWER_PAGES.map((page) => page.path),
  '/blog',
  ...BLOG_ARTICLES.map((article) => article.path),
] as const;

function RoutedWebsite() {
  const navigate = useNavigate();
  const location = useLocation();
  const africaGalvanizedBlog = BLOG_ARTICLES.find(
    (article) => article.path === '/hot-dip-galvanized-cable-tray-africa/',
  );
  const [selectedProductForModal, setSelectedProductForModal] = useState<ProductSpec | null>(null);
  const [rfqPreFill, setRfqPreFill] = useState<{
    productName?: string;
    specs?: string;
    cableTrayType?: string;
    enquiryType?: string;
  }>({});

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
      const ensureMeta = (attribute: 'name' | 'property', value: string) => {
        let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${value}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute(attribute, value);
          document.head.append(meta);
        }
        return meta;
      };
      ensureMeta('property', 'og:title').content = `${pageTitle} | RK Engineering & Galvanizers`;
      ensureMeta('property', 'og:description').content = description ?? DEFAULT_PAGE_DESCRIPTION;
      ensureMeta('property', 'og:type').content = BLOG_ARTICLES.some((article) => article.path === location.pathname)
        ? 'article'
        : 'website';
      ensureMeta('property', 'og:url').content = `${PRODUCTION_ORIGIN}${location.pathname}`;
      const currentBlogArticle = BLOG_ARTICLES.find((article) => article.path === location.pathname);
      if (currentBlogArticle) {
        const image = getBlogImage(currentBlogArticle);
        ensureMeta('property', 'og:image').content = new URL(image.src, PRODUCTION_ORIGIN).href;
        ensureMeta('property', 'og:image:alt').content = image.alt;
      } else {
        document.head.querySelector('meta[property="og:image"]')?.remove();
        document.head.querySelector('meta[property="og:image:alt"]')?.remove();
      }
      let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (SEO_LANDING_PAGE_PATHS.includes(location.pathname as (typeof SEO_LANDING_PAGE_PATHS)[number])) {
        if (!canonical) {
          canonical = document.createElement('link');
          canonical.rel = 'canonical';
          document.head.append(canonical);
        }
        canonical.href = `${PRODUCTION_ORIGIN}${location.pathname}`;
      } else {
        canonical?.remove();
      }
    }
    if (location.hash) {
      window.requestAnimationFrame(() => {
        document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.hash, location.pathname]);

  const handleOpenRFQ = (
    productName?: string,
    specs?: string,
    cableTrayType?: string,
    enquiryType?: string,
  ) => {
    if (productName || specs || cableTrayType || enquiryType) {
      setRfqPreFill({
        productName: productName ?? rfqPreFill.productName,
        specs,
        cableTrayType,
        enquiryType,
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
          <Route
            path="/cable-tray-manufacturer-africa"
            element={
              <CableTrayManufacturerAfricaPage
                onRequestQuote={(specs, cableTrayType) =>
                  handleOpenRFQ('Cable Trays & Ducts', specs, cableTrayType)
                }
              />
            }
          />
          <Route
            path="/cable-tray-exporter-india-africa"
            element={
              <CableTrayExporterIndiaAfricaPage
                onRequestQuote={(specs, cableTrayType) =>
                  handleOpenRFQ('Cable Trays & Ducts', specs, cableTrayType)
                }
              />
            }
          />
          <Route
            path="/hot-dip-galvanized-cable-tray-africa"
            element={
              location.pathname === africaGalvanizedBlog?.path && africaGalvanizedBlog
                ? <BlogArticlePage article={africaGalvanizedBlog} />
                : (
                  <GalvanizedCableTrayAfricaPage
                    onRequestQuote={(specs, cableTrayType) =>
                      handleOpenRFQ('Cable Trays & Ducts', specs, cableTrayType)
                    }
                  />
                )
            }
          />
          <Route
            path="/perforated-cable-tray-manufacturer-africa"
            element={
              <PerforatedCableTrayAfricaPage
                onRequestQuote={(specs, cableTrayType) =>
                  handleOpenRFQ('Cable Trays & Ducts', specs, cableTrayType)
                }
              />
            }
          />
          <Route
            path="/ladder-cable-tray-supplier-africa"
            element={
              <LadderCableTrayAfricaPage
                onRequestQuote={(specs, cableTrayType) =>
                  handleOpenRFQ('Cable Trays & Ducts', specs, cableTrayType)
                }
              />
            }
          />
          <Route
            path="/cable-tray-oil-gas-projects-africa"
            element={
              <OilGasCableTrayAfricaPage
                onRequestQuote={(specs, cableTrayType, enquiryType) =>
                  handleOpenRFQ('Cable Trays & Ducts', specs, cableTrayType, enquiryType)
                }
              />
            }
          />
          <Route
            path="/cable-tray-power-energy-projects-africa"
            element={
              <PowerEnergyCableTrayAfricaPage
                onRequestQuote={(specs, cableTrayType, enquiryType) =>
                  handleOpenRFQ('Cable Trays & Ducts', specs, cableTrayType, enquiryType)
                }
              />
            }
          />
          <Route
            path="/cable-tray-manufacturer-usa"
            element={
              <CableTrayManufacturerUsaPage
                onRequestQuote={(specs, cableTrayType, enquiryType) =>
                  handleOpenRFQ('Cable Trays & Ducts', specs, cableTrayType, enquiryType)
                }
              />
            }
          />
          <Route
            path="/cable-tray-exporter-india-usa"
            element={
              <CableTrayExporterUsaPage
                onRequestQuote={(specs, cableTrayType, enquiryType) =>
                  handleOpenRFQ('Cable Trays & Ducts', specs, cableTrayType, enquiryType)
                }
              />
            }
          />
          <Route
            path="/hot-dip-galvanized-cable-tray-usa"
            element={
              <GalvanizedCableTrayUsaPage
                onRequestQuote={(specs, cableTrayType, enquiryType) =>
                  handleOpenRFQ('Cable Trays & Ducts', specs, cableTrayType, enquiryType)
                }
              />
            }
          />
          {PRODUCT_LANDING_PAGES.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={
                <ProductLandingPage
                  page={page}
                  onRequestQuote={(productName, enquiryMessage) => handleOpenRFQ(productName, enquiryMessage)}
                />
              }
            />
          ))}
          {TRANSMISSION_TOWER_PAGES.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={<TransmissionTowerPage page={page} />}
            />
          ))}
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
          {BLOG_ARTICLES.filter((article) => article.path !== '/hot-dip-galvanized-cable-tray-africa/').map((article) => (
            <Route
              key={article.path}
              path={article.path}
              element={<BlogArticlePage article={article} />}
            />
          ))}
          <Route
            path="/contact"
            element={
              <ContactPage
                preFilledProduct={rfqPreFill.productName}
                preFilledSpecs={rfqPreFill.specs}
                preFilledCableTrayType={rfqPreFill.cableTrayType}
                preFilledEnquiryType={rfqPreFill.enquiryType}
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
