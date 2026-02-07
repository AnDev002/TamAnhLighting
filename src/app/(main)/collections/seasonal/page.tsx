// src/app/(main)/collections/seasonal/page.tsx
import React from 'react';
import { Metadata } from 'next';
import SeasonalCollectionPage from '@/modules/collections/SeasonalCollectionPage';

// Tạo metadata động theo năm
const year = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Bộ Sưu Tập ${year} | EuroLight Exclusive`,
  description: `Khám phá những xu hướng thiết kế đèn trang trí mới nhất năm ${year}. Sự kết hợp giữa nghệ thuật và công nghệ.`,
};

export default function Page() {
  return <SeasonalCollectionPage />;
}