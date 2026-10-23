import React from 'react';
import { FinalCTA } from '../components/FinalCTA.tsx';
import { Highlights } from '../components/Highlights.tsx';
import { Hero } from '../components/Hero.tsx';
import { IndustriesSection } from '../components/IndustriesSection.tsx';
import { FAQSection } from '../components/FAQSection.tsx';
import { PRODUCTS } from '../data/products.ts';
import { Link } from 'react-router-dom';

interface HomePageProps {
  onOpenRFQ: () => void;
  onExploreProducts: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenRFQ, onExploreProducts }) => (
  <>
    <Hero onOpenRFQ={onOpenRFQ} onExploreProducts={onExploreProducts} />
    <Highlights />
    <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-red-600">Product Range</p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Industrial Products</h2>
          </div>
          <Link to="/products" className="text-sm font-semibold text-blue-800 hover:text-red-600">
            Explore all products &rarr;
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.slice(0, 3).map((product) => (
            <Link
              key={product.id}
              to="/products"
              className="rounded-lg border border-slate-200 bg-slate-50 p-5 transition-colors hover:border-blue-300 hover:bg-white"
            >
              <h3 className="text-lg font-bold text-slate-900">{product.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{product.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
    <IndustriesSection />
    <FAQSection />
    <FinalCTA onOpenRFQ={onOpenRFQ} onExploreProducts={onExploreProducts} />
  </>
);
