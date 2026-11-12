import React from 'react';
import { RFQSection } from '../components/RFQSection.tsx';
import { CtaTags, PROJECT_CTA_TAGS } from '../components/CtaTags.tsx';

interface ContactPageProps {
  preFilledProduct?: string;
  preFilledSpecs?: string;
  preFilledCableTrayType?: string;
  preFilledEnquiryType?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  preFilledProduct,
  preFilledSpecs,
  preFilledCableTrayType,
  preFilledEnquiryType,
}) => (
  <>
    <RFQSection
      preFilledProduct={preFilledProduct}
      preFilledSpecs={preFilledSpecs}
      preFilledCableTrayType={preFilledCableTrayType}
      preFilledEnquiryType={preFilledEnquiryType}
    />
    <section className="border-b border-slate-200 bg-white py-5" aria-label="Contact enquiry shortcuts">
      <CtaTags tags={PROJECT_CTA_TAGS} />
    </section>
  </>
);
