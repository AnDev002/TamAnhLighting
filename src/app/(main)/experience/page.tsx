import React from 'react';
import { Metadata } from 'next';
import ExperiencePage from '@/modules/experience/ExperiencePage';

export const metadata: Metadata = {
  title: 'Trải Nghiệm Độc Bản | EuroLight - The Art of Living',
  description: 'Khám phá không gian trưng bày và dịch vụ tư vấn ánh sáng cao cấp.',
};

export default function Page() {
  return <ExperiencePage />;
}