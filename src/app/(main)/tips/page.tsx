import React from 'react';
import { Metadata } from 'next';
import TipsPage from '@/modules/tips/TipsPage';

export const metadata: Metadata = {
  title: 'Cẩm Nang Chiếu Sáng | EuroLight Journal',
  description: 'Chia sẻ kiến thức, xu hướng và bí quyết bảo quản đèn trang trí cao cấp.',
};

export default function Page() {
  return <TipsPage />;
}