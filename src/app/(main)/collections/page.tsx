import React from 'react';
import { Metadata } from 'next';
import CollectionPage from '@/modules/collections/CollectionPage';

export const metadata: Metadata = {
  title: 'Bộ Sưu Tập | EuroLight - Seasonal Lookbook',
  description: 'Khám phá các bộ sưu tập đèn trang trí theo mùa và phong cách thiết kế.',
};

export default function Page() {
  return <CollectionPage />;
}