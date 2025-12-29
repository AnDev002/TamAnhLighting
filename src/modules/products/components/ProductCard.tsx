"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProductProps {
  data: {
    id: string;
    title: string;
    categoryLabel: string;
    image: string;
    isNew?: boolean;
  };
}

const ProductCard = ({ data }: ProductProps) => {
  return (
    <Link href={`/products/${data.id}`} className="group block cursor-pointer">
      {/* Image Container */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100 mb-6">
        {/* Badge New */}
        {data.isNew && (
          <span className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur text-black text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5">
            New Arrival
          </span>
        )}

        {/* Image with Zoom Effect */}
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
        />

        {/* Overlay mờ khi hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        
        {/* Quick Action Button (Chỉ hiện khi hover) */}
        <div className="absolute bottom-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-[#c49b63] hover:text-white transition-colors">
                <ArrowUpRight size={18} />
             </div>
        </div>
      </div>

      {/* Info Minimalist */}
      <div className="flex flex-col items-start gap-1">
        <span className="text-[11px] text-[#c49b63] font-bold tracking-[0.15em] uppercase">
          {data.categoryLabel}
        </span>
        <h3 className="text-lg font-medium text-gray-900 uppercase tracking-wide group-hover:text-[#c49b63] transition-colors duration-300">
          {data.title}
        </h3>
        {/* Line Decoration */}
        <div className="w-0 h-[1px] bg-[#c49b63] mt-2 group-hover:w-12 transition-all duration-500" />
      </div>
    </Link>
  );
};

export default ProductCard;