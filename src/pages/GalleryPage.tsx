import React from 'react';
import { UPLOADED_PRODUCT_IMAGES } from '../data/productImages.ts';

const GALLERY_ITEMS = Object.entries(UPLOADED_PRODUCT_IMAGES).map(([id, src]) => ({
  src,
  alt: `RK Engineering industrial product and manufacturing photo ${id}`,
  title: `Industrial Product · ${id}`,
}));

export const GalleryPage: React.FC = () => (
  <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-red-600">Plant & Products</p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Manufacturing Gallery</h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
          Explore the uploaded product photos across cable management, earthing, solar mounting, and galvanized steel ranges.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {GALLERY_ITEMS.map((item) => (
          <figure key={item.title} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <img src={item.src} alt={item.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <figcaption className="px-4 py-3 text-sm font-semibold text-slate-900">{item.title}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
