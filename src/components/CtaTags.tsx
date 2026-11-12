import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { EnquiryTagPrefill } from './EnquiryTagsCarousel.tsx';

export interface CtaTag extends EnquiryTagPrefill {
  label: string;
}

interface CtaTagsProps {
  tags: readonly CtaTag[];
  productName?: string;
}

interface CtaTagButtonProps {
  label: string;
  onClick: () => void;
}

export const CtaTagButton: React.FC<CtaTagButtonProps> = ({ label, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 active:bg-red-800"
  >
    <span>{label}</span>
    <ArrowRight aria-hidden="true" className="h-4 w-4" />
  </button>
);

export const openLeadPopup = (prefill: EnquiryTagPrefill & { productName?: string }) => {
  window.dispatchEvent(new CustomEvent('rk:open-lead-popup', { detail: prefill }));
};

export const CtaTags: React.FC<CtaTagsProps> = ({ tags, productName }) => (
  <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2.5 px-4 sm:px-6 lg:px-8">
    {tags.map(({ label, ...prefill }) => (
      <CtaTagButton
        key={label}
        onClick={() => openLeadPopup({ ...prefill, productName })}
        label={label}
      />
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
