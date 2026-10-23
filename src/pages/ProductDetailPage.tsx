import React, { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Cable,
  ChevronRight,
  CircleHelp,
  Factory,
  type LucideIcon,
  SunMedium,
  TowerControl,
} from 'lucide-react';
import { getProductDetail, getProductGroup, PRODUCT_DETAILS } from '../data/productDetails.ts';
import cableTrayImage from '../assets/images/products_cable_trays_1792669705857.jpg';
import galvanizingImage from '../assets/images/galvanizing_facility_1792669705362.jpg';

const PRODUCT_IMAGES = {
  'cable-tray': cableTrayImage,
  galvanizing: galvanizingImage,
};

const GROUP_ICONS: Record<string, LucideIcon> = {
  cable: Cable,
  earthing: TowerControl,
  solar: SunMedium,
  galvanized: Factory,
  towers: TowerControl,
};

export const ProductDetailPage: React.FC<{ onRequestQuote: (productName: string) => void }> = ({ onRequestQuote }) => {
  const { slug } = useParams();
  const product = getProductDetail(slug);

  useEffect(() => {
    if (!product) return;

    document.title = `${product.name} | RK Engineering & Galvanizers`;
    let metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.append(metaDescription);
    }
    metaDescription.content = product.description;

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.append(canonical);
    }
    canonical.href = `${window.location.origin}/products/${product.slug}`;
  }, [product]);

  if (!product) return <Navigate to="/products" replace />;

  const group = getProductGroup(product);
  const Icon = GROUP_ICONS[product.group] ?? Factory;
  const groupProducts = PRODUCT_DETAILS.filter(({ group: productGroup }) => productGroup === product.group);
  const categorySlug = product.group === 'cable'
    ? 'cable-trays'
    : product.group === 'earthing'
      ? 'earthing'
      : product.group === 'solar'
        ? 'solar'
        : product.group === 'galvanized'
          ? 'galvanized-steel'
          : 'towers';
  const categoryLabel = product.group === 'cable'
    ? 'Cable Trays & Ducts'
    : product.group === 'earthing'
      ? 'Earthing Materials'
      : product.group === 'solar'
        ? 'Solar Mounting Structures'
        : product.group === 'galvanized'
          ? 'Hot-Dip Galvanized Products'
          : 'Towers & Power Infrastructure';
  const isFamilyPage = ['cable-trays', 'earthing-materials', 'solar-mounting-structures'].includes(product.slug);
  const variants = groupProducts.filter(({ slug: variantSlug }) => variantSlug !== product.slug);
  const relatedProducts = product.related
    .map((relatedSlug) => getProductDetail(relatedSlug))
    .filter((relatedProduct) => relatedProduct !== undefined);

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${window.location.origin}/` },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${window.location.origin}/products` },
      { '@type': 'ListItem', position: 3, name: product.name, item: `${window.location.origin}/products/${product.slug}` },
    ],
  };
  const productData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: { '@type': 'Brand', name: 'RK Engineering & Galvanizers Pvt. Ltd.' },
    ...(product.image !== 'placeholder' ? { image: new URL(PRODUCT_IMAGES[product.image], window.location.origin).href } : {}),
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>
      <script type="application/ld+json">{JSON.stringify(productData)}</script>

      <section className="border-b border-slate-200 bg-white py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-slate-500 sm:text-sm">
            <Link to="/" className="transition-colors hover:text-blue-900">Home</Link>
            <ChevronRight aria-hidden="true" className="h-3.5 w-3.5" />
            <Link to="/products" className="transition-colors hover:text-blue-900">Products</Link>
            <ChevronRight aria-hidden="true" className="h-3.5 w-3.5" />
            <span aria-current="page" className="font-semibold text-slate-800">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-10 sm:py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div className="order-2 lg:order-1">
            <Link to={`/products?category=${categorySlug}`} className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600 transition-colors hover:text-red-700">
              <ArrowLeft aria-hidden="true" className="h-3.5 w-3.5" />
              {categoryLabel}
            </Link>
            <h1 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600">{product.description}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => onRequestQuote(product.name)}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
              >
                Request a Quote <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>
              <Link
                to="#product-overview"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800 transition-colors hover:border-blue-900 hover:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                Explore Product Details
              </Link>
            </div>
          </div>
          <div className="order-1 overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-sm lg:order-2">
            {product.image === 'placeholder' ? (
              <div className="flex aspect-[4/3] flex-col items-center justify-center gap-4 bg-gradient-to-br from-blue-950 to-slate-800 px-8 text-center text-white">
                <Icon aria-hidden="true" className="h-12 w-12 text-blue-200" />
                <p className="max-w-sm text-sm font-semibold leading-relaxed text-blue-50">
                  Product imagery for {product.name.toLowerCase()} can be added here.
                </p>
              </div>
            ) : (
              <img
                src={PRODUCT_IMAGES[product.image]}
                alt={product.imageAlt ?? product.name}
                className="aspect-[4/3] w-full object-cover"
              />
            )}
          </div>
        </div>
      </section>

      <section id="product-overview" className="scroll-mt-24 border-b border-slate-200 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600">Product Overview</p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{group.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">{product.overview}</p>
            {product.group === 'cable' && (
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{group.overview}</p>
            )}
          </div>
          <aside className="rounded-lg border border-slate-200 bg-white p-5 sm:p-6 lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-blue-900">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <h3 className="text-base font-bold text-slate-900">Project Requirements</h3>
            </div>
            <ul className="mt-4 space-y-3">
              {product.requirements.map((requirement) => (
                <li key={requirement} className="text-sm leading-relaxed text-slate-600">{requirement}</li>
              ))}
            </ul>
            <p className="mt-4 border-t border-slate-100 pt-4 text-xs leading-relaxed text-slate-500">
              Confirm technical requirements against approved drawings, applicable specifications, and project conditions.
            </p>
          </aside>
        </div>
      </section>

      {isFamilyPage && variants.length > 0 && (
        <section className="border-b border-slate-200 bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-7 max-w-3xl">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600">Product Types and Variants</p>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Explore {categoryLabel}</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {variants.map((variant) => (
                <Link key={variant.slug} to={`/products/${variant.slug}`} className="group rounded-lg border border-slate-200 bg-slate-50 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900">{variant.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{variant.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-900">
                    View details <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-b border-slate-200 bg-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600">Applications</p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Project Applications</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {product.applications.map((application) => (
                <li key={application} className="flex min-h-12 items-center rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
                  {application}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-blue-100 bg-blue-50/60 p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <CircleHelp aria-hidden="true" className="h-5 w-5 text-blue-900" />
              <h2 className="text-lg font-bold text-slate-900">Technical Requirements</h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Product configuration, material, dimensions, installation conditions, applicable standards, and inspection scope may vary by project. Confirm requirements against the project drawings and specifications.
            </p>
            <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-900 transition-colors hover:text-red-600">
              Contact the enquiry team <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600">Export Enquiries</p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">International Project Requirements</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">{group.exportText}</p>
            <ul className="mt-5 space-y-2">
              {group.exportRequirements.map((requirement) => (
                <li key={requirement} className="flex items-start gap-2 text-sm leading-relaxed text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" aria-hidden="true" />
                  {requirement}
                </li>
              ))}
            </ul>
            <button type="button" onClick={() => onRequestQuote(product.name)} className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-blue-950 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950">
              Request an Export Quote <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Information to include</p>
            <h3 className="mt-2 text-lg font-bold text-slate-900">Help us review your requirement</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {['Company name', 'Destination country', 'Product and quantity', 'Drawings or dimensions', 'Applicable requirements', 'Delivery needs'].map((item) => (
                <div key={item} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-700">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-7">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600">Buyer Information</p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {product.faqs.map((item, index) => (
              <details key={item.question} className="group rounded-lg border border-slate-200 bg-slate-50 p-4 open:bg-white sm:p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-slate-900 marker:hidden focus-visible:outline-2 focus-visible:outline-blue-700 sm:text-base">
                  {item.question}
                  <ChevronRight aria-hidden="true" className="h-4 w-4 shrink-0 text-blue-900 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 border-t border-slate-200 pt-3 text-sm leading-relaxed text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600">Explore More</p>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Related Products</h2>
            </div>
            <Link to={`/products?category=${categorySlug}`} className="inline-flex items-center gap-2 text-sm font-bold text-blue-900 hover:text-red-600">
              Back to {categoryLabel} <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.filter((relatedProduct) => relatedProduct.slug !== product.slug).slice(0, 3).map((relatedProduct) => (
              <Link key={relatedProduct.slug} to={`/products/${relatedProduct.slug}`} className="group rounded-lg border border-slate-200 bg-white p-5 transition-colors hover:border-blue-200 hover:shadow-sm">
                <h3 className="font-bold text-slate-900 group-hover:text-blue-900">{relatedProduct.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{relatedProduct.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-900">
                  View details <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 rounded-xl bg-blue-950 p-6 text-white shadow-lg sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-red-400">Project Enquiry</p>
              <h2 className="text-xl font-bold sm:text-2xl">Discuss Your {product.name} Requirements</h2>
              <p className="mt-2 text-sm leading-relaxed text-blue-100">Share your drawings, specifications, quantity, and destination for a project-specific review.</p>
            </div>
            <button type="button" onClick={() => onRequestQuote(product.name)} className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Request a Quote <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
