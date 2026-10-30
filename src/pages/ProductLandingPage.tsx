import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ProductLandingBlock, ProductLandingPageDefinition } from '../data/productLandingPages.ts';
import { UPLOADED_PRODUCT_IMAGES } from '../data/productImages.ts';

interface ProductLandingPageProps {
  page: ProductLandingPageDefinition;
  onRequestQuote: (productName: string, enquiryMessage: string) => void;
}

const renderBlock = (block: ProductLandingBlock, index: number) => {
  switch (block.type) {
    case 'paragraph':
      return <p key={`${block.type}-${index}`} className="text-sm leading-7 text-slate-600 sm:text-base">{block.text}</p>;
    case 'subheading':
      return <h3 key={`${block.type}-${index}`} className="pt-3 text-lg font-bold text-slate-900">{block.text}</h3>;
    case 'list':
      return (
        <ul key={`${block.type}-${index}`} className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600 marker:text-red-600 sm:text-base">
          {block.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      );
    case 'faq':
      return (
        <details key={`${block.type}-${index}`} className="group rounded-lg border border-slate-200 bg-white p-4 sm:p-5">
          <summary className="cursor-pointer list-none pr-6 text-base font-bold text-slate-900 marker:hidden">
            {block.question}
          </summary>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{block.answer}</p>
        </details>
      );
  }
};

export const ProductLandingPage: React.FC<ProductLandingPageProps> = ({ page, onRequestQuote }) => {
  const pageUrl = `https://rkenggindia.com${page.path}`;
  const webPageData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url: pageUrl,
    isPartOf: {
      '@type': 'WebSite',
      name: 'RK Engineering & Galvanizers',
      url: 'https://rkenggindia.com/',
    },
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(webPageData)}</script>

      <section className="border-b border-slate-200 bg-white py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-slate-500 sm:text-sm">
            <Link to="/" className="transition-colors hover:text-blue-900">Home</Link>
            <ChevronRight aria-hidden="true" className="h-3.5 w-3.5" />
            <Link to="/products" className="transition-colors hover:text-blue-900">Products</Link>
            <ChevronRight aria-hidden="true" className="h-3.5 w-3.5" />
            <Link to={page.categoryPath} className="transition-colors hover:text-blue-900">{page.categoryLabel}</Link>
            <ChevronRight aria-hidden="true" className="h-3.5 w-3.5" />
            <span aria-current="page" className="font-semibold text-slate-800">{page.productName}</span>
          </nav>
        </div>
      </section>

      <section className="overflow-hidden border-b border-slate-200 bg-blue-950 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-300">{page.categoryEyebrow}</p>
            <h1 className="mt-4 text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {page.title}
            </h1>
            <p className="mt-5 text-lg font-semibold leading-relaxed text-blue-100">{page.subtitle}</p>
            <div className="mt-4 space-y-3">
              {page.introduction.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-7 text-blue-100 sm:text-base">{paragraph}</p>
              ))}
            </div>
            {page.enquiryPrompt && (
              <p className="mt-4 rounded-lg border border-white/20 bg-white/10 p-4 text-sm leading-7 text-white">
                {page.enquiryPrompt}
              </p>
            )}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => onRequestQuote(page.quoteProduct, page.enquiryMessage)}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {page.initialCta} <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/40 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/15 bg-white/10 shadow-xl">
            <img
              src={UPLOADED_PRODUCT_IMAGES['54']}
              alt="Cable tray systems for industrial electrical cable management"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {page.sections.map((section, sectionIndex) => (
        <section
          key={section.heading}
          className={`border-b border-slate-200 py-10 sm:py-14 ${sectionIndex % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">{section.heading}</h2>
            <div className="mt-6 space-y-4">
              {section.blocks.map((block, index) => renderBlock(block, index))}
            </div>
          </div>
        </section>
      ))}

      <section className="border-b border-slate-200 bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-extrabold text-slate-900">Related Product Pages</h2>
          <nav aria-label="Related product pages" className="mt-4 flex flex-wrap gap-3">
            {page.relatedLinks.map((related) => (
              <Link
                key={related.path}
                to={related.path}
                className="rounded-md border border-slate-200 px-4 py-3 text-sm font-semibold text-blue-950 transition-colors hover:border-blue-950 hover:bg-blue-50"
              >
                {related.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="bg-blue-950 py-10 text-white sm:py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{page.finalCta.title}</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-blue-100 sm:text-base">{page.finalCta.description}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {page.finalCta.actions.map((action) => (
              <button
                key={action.label}
                type="button"
                onClick={() => onRequestQuote(action.productName ?? page.quoteProduct, action.enquiryMessage)}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {action.label} <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>
            ))}
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/40 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
