"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CollectionProps {
  data: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    coverImage: string;
    images: string[];
  };
  index: number;
}

const CollectionShowcase = ({ data, index }: CollectionProps) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col md:flex-row border-b border-gray-100 last:border-0">
      
      {/* --- LEFT: STICKY CONTENT --- 
          Phần này sẽ dính (Sticky) lại khi cuộn */}
      <div className="w-full md:w-1/2 md:h-screen md:sticky md:top-0 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-white z-10">
        <div className="max-w-xl">
           {/* Decorative Number */}
           <span className="text-[10rem] leading-none font-bold text-gray-50 opacity-50 absolute top-10 left-10 -z-10 select-none">
              0{index + 1}
           </span>

           <span className="text-[#c49b63] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              {data.subtitle}
           </span>
           
           <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-8 leading-tight">
              {data.title}
           </h2>
           
           <p className="text-gray-500 font-light text-base md:text-lg leading-relaxed mb-10">
              {data.description}
           </p>

           <div className="flex flex-col gap-4">
              <Link 
                href={`/collections/${data.id}`} 
                className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-black hover:text-[#c49b63] transition-colors"
              >
                 Khám phá bộ sưu tập <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </Link>
           </div>
        </div>
      </div>

      {/* --- RIGHT: SCROLLABLE IMAGES --- 
          Phần này sẽ cuộn tự do */}
      <div className="w-full md:w-1/2 bg-[#f4f4f4] flex flex-col gap-4 p-4 md:p-0">
         {/* Ảnh 1: Cover lớn (Full height ban đầu) */}
         <div className="relative w-full h-[60vh] md:h-screen sticky top-0 md:static">
            <Image 
               src={data.coverImage}
               alt={data.title}
               fill
               className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
         </div>

         {/* Ảnh 2 & 3: Detail shots (Grid nhỏ hơn bên dưới) */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:p-12 md:bg-gray-50">
             {data.images.map((img, idx) => (
                 <div key={idx} className={`relative w-full aspect-[3/4] group overflow-hidden ${idx === 2 ? "md:col-span-2 aspect-square md:aspect-[16/9]" : ""}`}>
                     <Image
                        src={img}
                        alt="Collection Detail"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                 </div>
             ))}
         </div>
      </div>

    </div>
  );
};

export default CollectionShowcase;