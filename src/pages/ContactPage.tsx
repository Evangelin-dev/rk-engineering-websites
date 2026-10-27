import React from 'react';
import { RFQSection } from '../components/RFQSection.tsx';

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
  </>
);
