import React from 'react';
import { ExportSection } from '../components/ExportSection.tsx';

interface ExportSolutionsPageProps {
  onOpenRFQ: () => void;
}

export const ExportSolutionsPage: React.FC<ExportSolutionsPageProps> = ({ onOpenRFQ }) => (
  <ExportSection onOpenRFQ={onOpenRFQ} />
);
