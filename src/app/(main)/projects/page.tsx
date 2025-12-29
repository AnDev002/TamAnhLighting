import React from 'react';
import { Metadata } from 'next';
import ProjectPage from '@/modules/projects/ProjectPage';

export const metadata: Metadata = {
  title: 'Dự Án Biểu Tượng | EuroLight - Luxury Projects',
  description: 'Tổng hợp các dự án thiết kế chiếu sáng cao cấp: Khách sạn, Biệt thự, Showroom.',
};

export default function Page() {
  return <ProjectPage />;
}