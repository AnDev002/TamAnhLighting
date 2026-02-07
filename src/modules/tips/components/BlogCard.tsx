"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ImageFallback from "@/components/ui/ImageFallback";

interface BlogProps {
  data: {
    id: string;
    title: string;
    excerpt: string;
    categoryLabel: string;
    date: string;
    readTime: string;
    image: string;
  };
}

const BlogCard = ({ data }: BlogProps) => {
  return (
    <Link href={`/tips/${data.id}`} className="group block h-full flex flex-col">
      {/* Image Wrapper */}
      <div className="relative w-full aspect-[4/3] overflow-hidden mb-6 bg-gray-100">
        <ImageFallback
          src={data.image}
          alt={data.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Date Overlay (Optional aesthetic choice) */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black">
           {data.date}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
           <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c49b63]">
              {data.categoryLabel}
           </span>
           <span className="text-[10px] text-gray-400 font-medium">
              {data.readTime}
           </span>
        </div>

        <h3 className="text-xl font-serif text-gray-900 leading-snug mb-3 group-hover:text-[#c49b63] transition-colors">
           {data.title}
        </h3>

        <p className="text-gray-500 text-sm font-light leading-relaxed line-clamp-3 mb-4 flex-1">
           {data.excerpt}
        </p>

        {/* Read More Link */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black group-hover:gap-4 transition-all mt-auto">
           Read Article <ArrowUpRight size={14} />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;