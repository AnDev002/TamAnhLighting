"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProjectProps {
  data: {
    id: string;
    title: string;
    location: string;
    year: string;
    categoryLabel: string;
    image: string;
    description: string;
  };
  index: number;
}

const ProjectItem = ({ data, index }: ProjectProps) => {
  // Nếu index là số lẻ thì đảo ngược vị trí (Text - Image), ngược lại (Image - Text)
  const isReversed = index % 2 !== 0;

  return (
    <div className={`group flex flex-col md:flex-row items-center gap-10 md:gap-24 py-12 md:py-24 border-b border-gray-100 last:border-0 ${isReversed ? "md:flex-row-reverse" : ""}`}>
      
      {/* --- IMAGE SECTION (Chiếm 60%) --- */}
      <div className="w-full md:w-3/5 overflow-hidden relative aspect-[16/9] cursor-pointer">
         <Link href={`/projects/${data.id}`}>
            <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-105"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="w-16 h-16 rounded-full bg-white/20 backdrop-blur border border-white/50 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-500">
                    <ArrowRight size={24} />
                </span>
            </div>
         </Link>
      </div>

      {/* --- INFO SECTION (Chiếm 40%) --- */}
      <div className="w-full md:w-2/5 flex flex-col items-start space-y-6">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-[#c49b63]">
            <span>{data.categoryLabel}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span>{data.year}</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 uppercase leading-tight group-hover:text-[#c49b63] transition-colors duration-300">
            <Link href={`/projects/${data.id}`}>
                {data.title}
            </Link>
        </h2>

        {/* Location with Icon */}
        <div className="text-sm text-gray-400 font-medium flex items-center gap-2 uppercase tracking-wider">
             <span className="w-2 h-[1px] bg-gray-400"></span> {data.location}
        </div>

        {/* Description */}
        <p className="text-gray-500 font-light leading-relaxed text-sm md:text-base line-clamp-3">
            {data.description}
        </p>

        {/* Button: Minimalist Line */}
        <Link href={`/projects/${data.id}`} className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-black mt-4 hover:gap-5 transition-all duration-300">
            Xem chi tiết <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;