import React from 'react';
import type { EnquiryTagPrefill } from './EnquiryTagsCarousel.tsx';

export interface CtaTag extends EnquiryTagPrefill {
  label: string;
}

interface CtaTagsProps {
  tags: readonly CtaTag[];
  productName?: string;
}

export const openLeadPopup = (prefill: EnquiryTagPrefill & { productName?: string }) => {
  window.dispatchEvent(new CustomEvent('rk:open-lead-popup', { detail: prefill }));
};

export const CtaTags: React.FC<CtaTagsProps> = ({ tags, productName }) => (
  <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2.5 px-4 sm:px-6 lg:px-8">
    {tags.map(({ label, ...prefill }) => (
      <button
        key={label}
        type="button"
        onClick={() => openLeadPopup({ ...prefill, productName })}
        className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 active:translate-y-0"
      >
        {label}
      </button>
    ))}
  </div>
);

export const PROJECT_CTA_TAGS: readonly CtaTag[] = [
  { label: 'Get Response Within 24 Hours', message: 'Please respond to this enquiry within 24 hours.', focusMessage: true },
  { label: 'Request an Instant Quote', enquiryType: 'Project Enquiry' },
  { label: 'Discuss Your Project Requirements', enquiryType: 'Project Enquiry', focusMessage: true },
  { label: 'Talk to Our Sales Team', focusMessage: true },
];

export const EXPORT_CTA_TAGS: readonly CtaTag[] = [
  { label: 'Get CIF Nhava Sheva', enquiryType: 'Export Enquiry', shippingTerms: 'CIF' },
  { label: 'Get FOB Nhava Sheva', enquiryType: 'Export Enquiry', shippingTerms: 'FOB' },
  { label: 'Request Bulk Order Pricing', enquiryType: 'Bulk Order Enquiry', message: 'Please share bulk order pricing for my requirements.', focusMessage: true },
  { label: 'Get Product Pricing', message: 'Please share product pricing for my requirements.', focusMessage: true },
];
