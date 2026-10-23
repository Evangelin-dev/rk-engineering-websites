import React from 'react';
import { CertificationsSection } from '../components/CertificationsSection.tsx';
import { ProcessSection } from '../components/ProcessSection.tsx';

interface ProcessQualityPageProps {
  onOpenRFQ: () => void;
}

export const ProcessQualityPage: React.FC<ProcessQualityPageProps> = ({ onOpenRFQ }) => (
  <>
    <ProcessSection />
    <CertificationsSection onOpenRFQ={onOpenRFQ} />
  </>
);
