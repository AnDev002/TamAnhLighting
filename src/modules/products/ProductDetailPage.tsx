"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Share2, ShieldCheck, Truck } from "lucide-react";
import { PRODUCTS_DATA, Product } from "./data/productData";
import ProductCard from "./components/ProductCard";
import { notFound } from "next/navigation";

interface ProductDetailProps {
  slug: string;
}

const ProductDetailPage = ({ slug }: ProductDetailProps) => {
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);

  if (!product) {
    return notFound();
  }

  // Logic parse description thành array các dòng để hiển thị đẹp hơn
  const specs = product.description.split('\n').filter(line => line.trim() !== '');
  
  // Lấy sản phẩm liên quan (cùng category, trừ chính nó)
  const relatedProducts = PRODUCTS_DATA
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="w-full bg-white min-h-screen pt-[100px] pb-20">
      <div className="container mx-auto max-w-[1400px] px-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 mb-12">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-black transition-colors">Products</Link>
            <span>/</span>
            <span className="text-black">{product.category}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* LEFT: IMAGE GALLERY */}
            <div className="lg:col-span-7">
                <div className="relative w-full aspect-square bg-white overflow-hidden">
                    <Image 
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-12 hover:scale-105 transition-transform duration-700"
                        priority
                    />
                </div>
            </div>

            {/* RIGHT: INFO */}
            <div className="lg:col-span-5 flex flex-col">
                <span className="text-[#c49b63] text-xs font-bold tracking-[0.2em] uppercase mb-4">
                    {product.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-light uppercase text-gray-900 mb-6 leading-tight">
                    {product.name}
                </h1>
                
                {/* Price Placeholder */}
                <div className="text-xl text-gray-500 font-light mb-8">
                    Giá: <span className="text-black font-medium">Liên hệ</span>
                </div>

                <div className="w-full h-[1px] bg-gray-100 mb-8" />

                {/* Technical Specifications List */}
                <div className="mb-10">
                    <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-black">
                        Thông số kỹ thuật
                    </h3>
                    <ul className="space-y-3">
                        {specs.map((spec, index) => (
                            <li key={index} className="flex items-start gap-3 text-sm text-gray-600 font-light leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#c49b63] mt-2 shrink-0" />
                                {spec}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-4 mt-auto">
                    <button className="w-full py-5 bg-black text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#c49b63] transition-colors duration-300">
                        Liên hệ tư vấn
                    </button>
                    <button className="w-full py-5 border border-gray-200 text-black text-xs font-bold uppercase tracking-[0.2em] hover:border-black transition-colors duration-300 flex items-center justify-center gap-2">
                         <Share2 size={16} /> Chia sẻ sản phẩm
                    </button>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-4 mt-10 pt-8 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                        <Truck size={20} className="text-[#c49b63]" />
                        <span className="text-xs uppercase tracking-wider text-gray-500">Vận chuyển toàn quốc</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <ShieldCheck size={20} className="text-[#c49b63]" />
                        <span className="text-xs uppercase tracking-wider text-gray-500">Bảo hành 3 năm</span>
                    </div>
                </div>
            </div>
        </div>

        {/* RELATED PRODUCTS */}
        {relatedProducts.length > 0 && (
            <div className="mt-32">
                <div className="flex items-end justify-between mb-12 border-b border-gray-100 pb-6">
                    <h2 className="text-2xl md:text-3xl font-light uppercase text-gray-900 tracking-wide">
                        Sản phẩm liên quan
                    </h2>
                    <Link href="/products" className="hidden md:block text-xs font-bold uppercase tracking-[0.2em] text-[#c49b63] hover:text-black transition-colors">
                        Xem tất cả
                    </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {relatedProducts.map((p) => (
                        <ProductCard key={p.id} data={p} />
                    ))}
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;