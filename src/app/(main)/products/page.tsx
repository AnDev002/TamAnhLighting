import React from 'react';
import { Metadata } from 'next';
import ProductPage from '@/modules/products/ProductPage';

export const metadata: Metadata = {
  title: 'Bộ Sưu Tập | EuroLight - Luxury Lighting',
  description: 'Khám phá các mẫu đèn chùm, đèn thả, đèn trang trí cao cấp.',
};

export default function Page() {
  return <ProductPage />;
}