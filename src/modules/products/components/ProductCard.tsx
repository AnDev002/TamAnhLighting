// src/modules/products/components/ProductCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Product } from "../data/productData";

interface ProductProps {
  data: Product;
}

const ProductCard = ({ data }: ProductProps) => {
  return (
    <Link href={`/products/${data.slug}`} className="group block cursor-pointer">
      {/* THAY ĐỔI Ở ĐÂY:
         1. aspect-[3/4] -> aspect-square: Đổi thành khung vuông
         2. bg-gray-100 -> bg-[#fafafa] border border-gray-50: Nền sáng hơn, thêm viền nhẹ sang trọng
         3. Thêm p-8: Padding lớn để thu nhỏ ảnh lại (khoảng 1/4 diện tích hiển thị so với trước)
      */}
      <div className="relative w-full aspect-square overflow-hidden bg-white border border-gray-50 mb-6 p-8">
        
        {data.id > 25 && (
           <span className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur text-black text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 shadow-sm">
            New Arrival
          </span>
        )}

        {/* THAY ĐỔI Ở ĐÂY:
           object-cover -> object-contain: Giúp ảnh không bị cắt và hiển thị trọn vẹn, sắc nét hơn
        */}
        <Image
          src={data.image}
          alt={data.name}
          fill
          className="object-contain transition-transform duration-[1.5s] ease-out group-hover:scale-110"
        />

        {/* Overlay làm tối nhẹ khi hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
        
        <div className="absolute bottom-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
             <div className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-black hover:bg-[#c49b63] hover:text-white transition-colors">
                <ArrowUpRight size={18} />
             </div>
        </div>
      </div>

      {/* Info Minimalist - Giữ nguyên */}
      <div className="flex flex-col items-start gap-1 px-2">
        <span className="text-[10px] text-[#c49b63] font-bold tracking-[0.2em] uppercase">
          {data.category}
        </span>
        <h3 className="text-base font-medium text-gray-900 uppercase tracking-wider group-hover:text-[#c49b63] transition-colors duration-300 line-clamp-1">
          {data.name}
        </h3>
        <div className="w-0 h-[1px] bg-[#c49b63] mt-2 group-hover:w-12 transition-all duration-500" />
      </div>
    </Link>
  );
};

export default ProductCard;