import React from 'react';
import { RFQSection } from '../components/RFQSection.tsx';

interface ContactPageProps {
  preFilledProduct?: string;
  preFilledSpecs?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ preFilledProduct, preFilledSpecs }) => (
  <>
    <RFQSection preFilledProduct={preFilledProduct} preFilledSpecs={preFilledSpecs} />
  </>
);
