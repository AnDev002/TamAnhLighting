import React from 'react';
import { Metadata } from 'next';
import AboutPage from '@/modules/about/AboutPage';

export const metadata: Metadata = {
  title: 'Về chúng tôi | EuroLight - Seasonal Lookbook',
  description: 'Khám phá các bộ sưu tập đèn trang trí theo mùa và phong cách thiết kế.',
};

export default function Page() {
  return <AboutPage />;
}