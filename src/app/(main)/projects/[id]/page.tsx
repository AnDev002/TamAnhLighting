import React from 'react';
import { Metadata } from 'next';
import ProjectDetailPage from '@/modules/projects/ProjectDetailPage';
import { PROJECTS_MOCK } from '@/modules/projects/data/projectData';

// 1. Generate Static Params (Không thay đổi vì hàm này trả về array params, không nhận params)
export async function generateStaticParams() {
  return PROJECTS_MOCK.map((project) => ({
    id: project.id,
  }));
}

// Định nghĩa kiểu Props cho Next.js 15
type Props = {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

// 2. Dynamic Metadata (Cần await params)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // AWAIT params trước khi sử dụng
  const { id } = await params;
  
  const project = PROJECTS_MOCK.find((p) => p.id === id);
  
  if (!project) {
    return {
      title: 'Project Not Found | EuroLight',
    };
  }

  return {
    title: `${project.title} - ${project.categoryLabel} | EuroLight Projects`,
    description: project.description,
    openGraph: {
      images: [project.image],
    },
  };
}

// 3. Main Page Component (Cần chuyển thành async function và await params)
export default async function Page({ params }: Props) {
  // AWAIT params trước khi truyền xuống component con
  const { id } = await params;
  
  return <ProjectDetailPage id={id} />;
}