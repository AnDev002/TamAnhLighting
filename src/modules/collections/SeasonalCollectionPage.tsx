// src/modules/collections/SeasonalCollectionPage.tsx
"use client";

import React from "react";
import Image from "next/image";
import { SEASONAL_HERO, SEASONAL_SECTIONS } from "./data/seasonalData";
import { ArrowDown, Play } from "lucide-react";
import ImageFallback from "@/components/ui/ImageFallback";

const SeasonalCollectionPage = () => {
  return (
    // THAY ĐỔI: Đặt mặc định text-white cho toàn bộ trang nền đen
    <div className="w-full bg-black text-white selection:bg-yellow-500 selection:text-black">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <ImageFallback 
            src={SEASONAL_HERO.coverImage} 
            alt="Hero Collection" 
            fill
            priority
            fallbackType="interior"
            sizes="100vw"
            className="object-cover"
          />
          {/* QUAN TRỌNG: Lớp phủ gradient đen để làm nổi chữ */}
          <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-20">
          <span className="text-yellow-500 text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-6 animate-fade-up drop-shadow-md">
            Bộ Sưu Tập {SEASONAL_HERO.year}
          </span>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif italic text-white mb-8 animate-fade-up delay-100 drop-shadow-lg">
            {SEASONAL_HERO.title}
          </h1>
          <p className="max-w-2xl text-gray-200 font-light text-sm md:text-lg tracking-wider leading-relaxed animate-fade-up delay-200 drop-shadow-md">
            {SEASONAL_HERO.description}
          </p>
          
          <div className="absolute bottom-10 animate-bounce">
            <ArrowDown className="text-white/70 w-8 h-8" />
          </div>
        </div>
      </section>

      {/* --- 2. SECTIONS SHOWCASE --- */}
      <div className="py-24 space-y-32 bg-black">
        {SEASONAL_SECTIONS.map((section, idx) => (
          <section key={section.id} className="container mx-auto px-6 md:px-12">
            <div className={`flex flex-col md:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Text Content */}
              <div className="flex-1 space-y-8 text-center md:text-left">
                <span className="text-xs font-bold text-yellow-500 uppercase tracking-[0.2em] border-b border-yellow-500/30 pb-2 inline-block">
                   {section.season}
                </span>
                <h2 className="text-4xl md:text-6xl font-thin uppercase tracking-wide text-white leading-tight">
                  {section.title}
                </h2>
                {/* Sửa màu text-gray-500 thành text-gray-300 */}
                <p className="text-gray-300 font-light leading-relaxed text-sm md:text-base">
                  {section.description}
                </p>
                <button className="inline-block mt-8 px-10 py-4 border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all duration-500 uppercase text-xs tracking-[0.2em] font-bold text-white">
                  Xem chi tiết
                </button>
              </div>

              {/* Visual Grid */}
              <div className="flex-1 w-full grid grid-cols-2 gap-4">
                {/* Main Section Image */}
                <div className="col-span-2 relative h-[300px] md:h-[450px] group overflow-hidden rounded-sm">
                    <ImageFallback 
                       src={section.image} 
                       alt={section.title}
                       fill
                       fallbackType="architecture"
                       sizes="(max-width: 768px) 100vw, 50vw"
                       className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500" />
                </div>
                
                {/* Product Thumbnails */}
                {section.products.map((prod, pIdx) => (
                   <div key={pIdx} className="relative group cursor-pointer mt-4">
                      <div className="relative aspect-[3/4] overflow-hidden bg-gray-900 rounded-sm">
                        <ImageFallback 
                            src={prod.image} 
                            alt={prod.name}
                            fill
                            fallbackType="interior"
                            sizes="(max-width: 768px) 50vw, 25vw"
                            className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="mt-4 text-center">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-yellow-500 transition-colors">
                          {prod.name}
                        </h3>
                      </div>
                   </div>
                ))}
              </div>

            </div>
          </section>
        ))}
      </div>

      {/* --- 3. VIDEO TEASER --- */}
      <section className="h-[60vh] relative flex items-center justify-center bg-gray-950 overflow-hidden border-t border-white/10 group cursor-pointer">
         {/* Noise Texture */}
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
         
         <div className="relative z-10 text-center px-4">
            <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-[0.2em] mb-10 text-white group-hover:text-yellow-500 transition-colors duration-300">
               Behind the Scenes
            </h2>
            
            {/* Play Button Styled */}
            <div className="w-20 h-20 mx-auto rounded-full border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-yellow-500 group-hover:border-yellow-500 transition-all duration-500">
               <Play className="w-8 h-8 text-white ml-1 fill-white" />
            </div>
         </div>
      </section>

    </div>
  );
};

export default SeasonalCollectionPage;