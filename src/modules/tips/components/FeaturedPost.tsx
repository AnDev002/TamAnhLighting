"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface FeaturedProps {
  data: {
    id: string;
    title: string;
    excerpt: string;
    categoryLabel: string;
    date: string;
    image: string;
  };
}

const FeaturedPost = ({ data }: FeaturedProps) => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex items-end overflow-hidden group">
       <Link href={`/tips/${data.id}`} className="absolute inset-0 z-20" />
       
       {/* Background Image */}
       <Image 
          src={data.image}
          alt={data.title}
          fill
          className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
          priority
       />
       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />

       {/* Content Overlay */}
       <div className="container mx-auto max-w-[1400px] px-6 relative z-10 pb-16 md:pb-24">
          <div className="max-w-3xl animate-fade-up">
             <div className="flex items-center gap-4 text-white/70 mb-4 text-xs font-bold uppercase tracking-[0.2em]">
                <span className="text-[#c49b63]">{data.categoryLabel}</span>
                <span className="w-1 h-1 rounded-full bg-white/50" />
                <span>{data.date}</span>
             </div>
             
             <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6 group-hover:text-[#c49b63] transition-colors duration-500">
                {data.title}
             </h1>
             
             <p className="text-white/80 text-base md:text-lg font-light leading-relaxed max-w-xl line-clamp-2 md:line-clamp-none">
                {data.excerpt}
             </p>
             
             <span className="inline-block mt-8 text-xs text-white font-bold uppercase tracking-[0.2em] border-b border-white pb-1 group-hover:border-[#c49b63] transition-all">
                Đọc toàn bộ bài viết
             </span>
          </div>
       </div>
    </section>
  );
};

export default FeaturedPost;