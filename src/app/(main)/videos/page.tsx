import React from 'react';
import { Metadata } from 'next';
import VideoPage from '@/modules/videos/VideoPage';

export const metadata: Metadata = {
  title: 'Media Gallery | EuroLight - Cinematic Experience',
  description: 'Thư viện video: Câu chuyện thương hiệu, Tour showroom và các buổi trò chuyện chuyên gia.',
};

export default function Page() {
  return <VideoPage />;
}