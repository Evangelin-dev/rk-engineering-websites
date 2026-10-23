import React from 'react';
import galvanizingImage from '../assets/images/galvanizing_facility_1792669705362.jpg';
import exportImage from '../assets/images/global_export_shipping_1792669706316.jpg';
import heroImage from '../assets/images/hero_cable_tray_plant_1792669704557.jpg';
import cableTrayImage from '../assets/images/products_cable_trays_1792669705857.jpg';

const GALLERY_ITEMS = [
  { src: heroImage, alt: 'RK Engineering industrial cable tray manufacturing facility', title: 'Manufacturing Facility' },
  { src: cableTrayImage, alt: 'Cable tray products for electrical infrastructure', title: 'Cable Management Products' },
  { src: galvanizingImage, alt: 'Hot-dip galvanizing facility', title: 'Hot-Dip Galvanizing' },
  { src: exportImage, alt: 'Industrial export shipping and product packing', title: 'Export & Shipping' },
];

export const GalleryPage: React.FC = () => (
  <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-red-600">Plant & Products</p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Manufacturing Gallery</h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
          A closer look at RK Engineering's manufacturing, galvanized products, and export operations.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {GALLERY_ITEMS.map((item) => (
          <figure key={item.title} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <img src={item.src} alt={item.alt} className="aspect-[16/10] w-full object-cover" />
            <figcaption className="px-5 py-4 text-sm font-semibold text-slate-900">{item.title}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
