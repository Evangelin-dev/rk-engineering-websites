import React, { useState } from 'react';
import { FAQS } from '../data/company.ts';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HOME_FAQS = FAQS.slice(0, 5);

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>(HOME_FAQS[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredFaqs = HOME_FAQS.filter((faq) => {
    const matchesCategory = filterCategory === 'all' || faq.category === filterCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="faq" className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.5fr] lg:gap-14 lg:px-8">
        <div>
          <div className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-red-600">
            Knowledge Base · Buyer Inquiries
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-balance sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Answers about RK Engineering&apos;s products, manufacturing, export enquiries, and certifications.
          </p>

          <div className="relative mt-7">
            <label htmlFor="faq-search" className="sr-only">Search frequently asked questions</label>
            <Search aria-hidden="true" className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              id="faq-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions..."
              className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700/20"
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All FAQs' },
              { id: 'export', label: 'Exports & Logistics' },
              { id: 'manufacturing', label: 'Manufacturing & Capacity' },
              { id: 'standards', label: 'Certifications' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilterCategory(cat.id)}
                aria-pressed={filterCategory === cat.id}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                  filterCategory === cat.id
                    ? 'border-blue-950 bg-blue-950 text-white'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-950'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50/70 p-5">
            <div className="flex items-start gap-3">
              <HelpCircle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-blue-800" />
              <div>
                <h3 className="text-sm font-bold text-slate-900">Need help with a project?</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Contact our team with your product details and requirements.
                </p>
                <Link to="/contact" className="mt-3 inline-flex text-sm font-bold text-blue-800 hover:text-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800">
                  Contact us <span aria-hidden="true" className="ml-1">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3 lg:pt-1">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openId === faq.id;
              const answerId = `faq-answer-${faq.id}`;
              return (
                <div
                  key={faq.id}
                  className={`overflow-hidden rounded-xl border bg-white transition-shadow ${
                    isOpen ? 'border-blue-200 shadow-md shadow-slate-200/60' : 'border-slate-200 shadow-sm hover:shadow-md'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(faq.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-blue-700 sm:px-6"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                  >
                    <span className="flex items-start gap-3 text-sm font-bold tracking-tight text-slate-900 sm:text-base">
                      <span className="mt-0.5 shrink-0 font-mono text-xs text-red-600">
                        Q{idx + 1}.
                      </span>
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-700' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div id={answerId} className="border-t border-slate-100 px-5 pb-5 pt-4 text-sm leading-relaxed text-slate-600 sm:px-6 sm:text-base">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center text-sm text-slate-500">
              No matching questions found for &ldquo;{searchQuery}&rdquo;. Try another search term or contact our sales engineering desk directly.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
