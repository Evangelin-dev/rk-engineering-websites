import React from 'react';
import { ProductsSection } from '../components/ProductsSection.tsx';
import { ProductSpec } from '../data/products.ts';

interface ProductsPageProps {
  onSelectProduct: (product: ProductSpec) => void;
  onRequestQuote: (productName: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onRequestQuote }) => (
  <ProductsSection onRequestQuote={onRequestQuote} />
);
