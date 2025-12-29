"use client";

import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface VideoCardProps {
  data: {
    id: string;
    youtubeId: string;
    title: string;
    categoryLabel: string;
    thumbnail: string;
    duration: string;
  };
  onClick: (id: string) => void;
}

const VideoCard = ({ data, onClick }: VideoCardProps) => {
  return (
    <div 
      className="group cursor-pointer block" 
      onClick={() => onClick(data.youtubeId)}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden mb-4 bg-gray-900">
        <Image
          src={data.thumbnail}
          alt={data.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-60"
        />
        
        {/* Play Button Center (Hiệu ứng) */}
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-16 h-16 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#c49b63] group-hover:border-[#c49b63]">
              <Play size={24} className="ml-1 fill-current" />
           </div>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 text-[10px] font-bold text-white uppercase tracking-widest rounded-sm">
           {data.duration}
        </div>
      </div>

      {/* Meta Info */}
      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c49b63]">
           {data.categoryLabel}
        </span>
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#c49b63] transition-colors leading-snug">
           {data.title}
        </h3>
      </div>
    </div>
  );
};

export default VideoCard;