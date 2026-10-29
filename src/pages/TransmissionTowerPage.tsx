import React from 'react';
import { ArrowRight, Check, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TRANSMISSION_TOWER_PAGES, type TransmissionTowerPageData } from '../data/transmissionTowerPages.ts';
import { UPLOADED_PRODUCT_IMAGES } from '../data/productImages.ts';

const PRODUCTION_ORIGIN = 'https://rkenggindia.com';

interface TransmissionTowerPageProps {
  page: TransmissionTowerPageData;
}

export const TransmissionTowerPage: React.FC<TransmissionTowerPageProps> = ({ page }) => {
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${PRODUCTION_ORIGIN}/` },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${PRODUCTION_ORIGIN}/products` },
      { '@type': 'ListItem', position: 3, name: page.title, item: `${PRODUCTION_ORIGIN}${page.path}` },
    ],
  };
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="border-b border-slate-200 bg-white">
        <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-4 py-3 text-xs text-slate-500 sm:px-6 lg:px-8">
          <li><Link to="/" className="transition-colors hover:text-blue-900">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link to="/products" className="transition-colors hover:text-blue-900">Products</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="font-semibold text-slate-800">{page.title}</li>
        </ol>
      </nav>
      <script type="application/ld+json">{JSON.stringify(breadcrumbData)}</script>

      <section className="overflow-hidden border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-16">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.17em] text-red-600">{page.eyebrow}</p>
            <h1 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              {page.title}
            </h1>
            <h2 className="mt-5 text-xl font-bold leading-snug text-blue-950 sm:text-2xl">{page.introHeading}</h2>
            <div className="mt-4 space-y-3 text-base leading-relaxed text-slate-600">
              {page.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 motion-reduce:transition-none"
              >
                {page.ctaLabel}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800 transition-colors hover:border-blue-900 hover:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 motion-reduce:transition-none"
              >
                Contact RK Engineering
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src={UPLOADED_PRODUCT_IMAGES['63']}
              alt={page.imageAlt}
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-xl"
            />
            <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-lg bg-blue-950/95 px-4 py-3 text-white shadow-lg sm:bottom-6 sm:left-6">
              <Factory aria-hidden="true" className="h-6 w-6 text-red-400" />
              <span className="text-sm font-bold">RK Engineering &amp; Galvanizers</span>
            </div>
          </div>
        </div>
      </section>

      {page.sections.map((section) => (
        <section key={section.heading} className="border-b border-slate-200 bg-white py-12 even:bg-slate-50 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-base leading-relaxed text-slate-600">{paragraph}</p>
              ))}
              {section.items && (
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm leading-relaxed text-slate-700">
                      <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.keywords && (
                <div className="mt-6 border-t border-slate-200 pt-4">
                  <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Related search terms</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {section.keywords.map((keyword) => (
                      <li key={keyword} className="rounded-full bg-blue-100 px-3 py-1.5 text-xs font-semibold text-blue-950">
                        {keyword}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      <section className="border-b border-slate-200 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
            {page.faqs.map((faq) => (
              <article key={faq.question} className="py-5">
                <h3 className="text-base font-bold text-slate-900">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
        <script type="application/ld+json">{JSON.stringify(faqData)}</script>
      </section>

      <section className="bg-blue-950 py-12 text-white sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{page.ctaHeading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-blue-100 sm:text-base">{page.ctaText}</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
          >
            {page.ctaLabel}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <nav aria-label="Related transmission tower pages" className="border-b border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-slate-900">Related transmission tower guidance</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {TRANSMISSION_TOWER_PAGES.filter((relatedPage) => relatedPage.path !== page.path).map((relatedPage) => (
              <li key={relatedPage.path}>
                <Link
                  to={relatedPage.path}
                  className="group flex min-h-12 items-center justify-between gap-3 border border-slate-200 px-4 py-3 text-sm font-semibold text-blue-950 transition-colors hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 motion-reduce:transition-none"
                >
                  {relatedPage.title}
                  <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
