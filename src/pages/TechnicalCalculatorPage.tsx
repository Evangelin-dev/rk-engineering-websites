import React from 'react';
import { EngineeringCalculator } from '../components/EngineeringCalculator.tsx';

interface TechnicalCalculatorPageProps {
  onPreFillRFQ: (config: { productName: string; specs: string }) => void;
}

export const TechnicalCalculatorPage: React.FC<TechnicalCalculatorPageProps> = ({ onPreFillRFQ }) => (
  <EngineeringCalculator onPreFillRFQ={onPreFillRFQ} />
);
