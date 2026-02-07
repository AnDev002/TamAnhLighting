// src/app/(main)/products/[slug]/page.tsx
import React from 'react';
import { Metadata } from 'next';
import ProductDetailPage from '@/modules/products/ProductDetailPage';
import { PRODUCTS_DATA } from '@/modules/products/data/productData';

// Cập nhật type cho Next.js 15: params là Promise
type Props = {
  params: Promise<{ slug: string }>
};

// SEO Metadata dynamic
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  // Phải await params trước khi dùng
  const { slug } = await params; 
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);
  
  if (!product) {
      return { title: 'Product Not Found' };
  }

  return {
    title: `${product.name} | EuroLight Luxury`,
    description: product.description.slice(0, 150),
    openGraph: {
        images: [product.image] // Đảm bảo đường dẫn ảnh hợp lệ
    }
  };
}

// Component chính phải là async để await params
export default async function Page({ params }: Props) {
  const { slug } = await params; // Await params ở đây
  return <ProductDetailPage slug={slug} />;
}

// Giữ nguyên static params (không đổi vì nó chạy lúc build)
export async function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    slug: product.slug,
  }));
}