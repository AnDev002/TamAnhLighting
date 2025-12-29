"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TEAM_MEMBERS } from "../data/aboutData";

const TeamCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350; // Chiều rộng card + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full">
      {/* Header & Navigation Buttons */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 px-6 container mx-auto max-w-[1400px]">
         <div>
            <span className="text-[#c49b63] text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
               The Artisans
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
               Đội Ngũ Chuyên Gia
            </h2>
         </div>

         {/* Custom Buttons "Lạ lạ" - Hình vuông, border mỏng */}
         <div className="flex gap-4 mt-6 md:mt-0">
            <button 
               onClick={() => scroll("left")}
               className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:bg-black hover:border-black hover:text-white transition-all duration-300 group"
            >
               <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
               onClick={() => scroll("right")}
               className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:bg-black hover:border-black hover:text-white transition-all duration-300 group"
            >
               <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
         </div>
      </div>

      {/* Scroll Container */}
      <div 
         ref={scrollRef}
         className="flex overflow-x-auto gap-8 pb-12 px-6 container mx-auto max-w-[1400px] no-scrollbar snap-x snap-mandatory"
      >
         {TEAM_MEMBERS.map((member) => (
            <div 
               key={member.id} 
               className="min-w-[280px] md:min-w-[320px] snap-start group cursor-pointer"
            >
               {/* Image Wrapper */}
               <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-gray-100">
                  <Image 
                     src={member.image} 
                     alt={member.name} 
                     fill 
                     className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  {/* Social Overlay (Optional) */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               </div>

               {/* Info */}
               <div className="border-l-2 border-transparent group-hover:border-[#c49b63] pl-0 group-hover:pl-4 transition-all duration-300">
                  <h3 className="text-xl font-serif text-gray-900">{member.name}</h3>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">{member.role}</p>
               </div>
            </div>
         ))}
      </div>
    </div>
  );
};

export default TeamCarousel;