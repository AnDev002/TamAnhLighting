"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

import { 
  HERO_SLIDES, 
  SYMBOLIC_PROJECTS, 
  ABOUT_CONTENT, 
  PROJECTS_HIGHLIGHT, 
  NEWS_DATA, 
  CATEGORIES 
} from './data/heroData';

// Reusable Components
const MinimalButton = ({ children, className = "", onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => (
  <button 
    onClick={onClick}
    className={`group flex items-center gap-3 text-[13px] uppercase tracking-[0.15em] font-medium transition-all ${className}`}
  >
    {children}
    <span className="w-8 h-[1px] bg-current group-hover:w-12 transition-all duration-300" />
  </button>
);

const HomePage = () => {
  // --- HERO STATE ---
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // Chặn click liên tục
  const slideDuration = 6000;

  // --- SYMBOLIC STATE ---
  const [currentSymbolicSlide, setCurrentSymbolicSlide] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // --- LOGIC HERO SLIDER ---
  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, slideDuration); 
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    setTimeout(() => setIsAnimating(false), 1000); // Đợi animation
  }, [isAnimating]);

  const handlePrevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setTimeout(() => setIsAnimating(false), 1000);
  }, [isAnimating]);

  // --- LOGIC SYMBOLIC SLIDER ---
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentSymbolicSlide) {
          video.play().catch(e => console.log("Auto-play blocked:", e));
          video.currentTime = 0;
        } else {
          video.pause();
        }
      }
    });
  }, [currentSymbolicSlide]);

  const nextSymbolicSlide = useCallback(() => {
    setCurrentSymbolicSlide((prev) => (prev + 1) % SYMBOLIC_PROJECTS.length);
  }, []);

  const prevSymbolicSlide = useCallback(() => {
    setCurrentSymbolicSlide((prev) => (prev - 1 + SYMBOLIC_PROJECTS.length) % SYMBOLIC_PROJECTS.length);
  }, []);

  return (
    <main className="w-full bg-white overflow-hidden selection:bg-[#c49b63] selection:text-white">
      
      {/* =========================================
          1. HERO SLIDER (NEW DESIGN - CINEMATIC)
         ========================================= */}
      <section className="relative w-full h-screen bg-black overflow-hidden group/hero">
        {HERO_SLIDES.map((item, index) => {
          const isActive = index === currentSlide;
          return (
            <div 
              key={item.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              {/* Image Container with Ken Burns Effect */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  priority={index === 0}
                  className={`object-cover transition-transform duration-[10s] ease-out ${isActive ? 'scale-110' : 'scale-100'}`}
                />
              </div>

              {/* Gradient Overlay: Chỉ tối phần dưới để làm nổi bật text, giữ phần trên trong trẻo */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
              
              {/* Content Placement: Bottom Left (Asymmetric) */}
              <div className="absolute inset-0 container mx-auto px-6 md:px-12 pb-12 md:pb-24 flex flex-col justify-end items-start pointer-events-none">
                 <div className="max-w-4xl overflow-hidden pointer-events-auto">
                    {/* Label */}
                    <div className={`flex items-center gap-3 mb-4 transition-all duration-700 delay-100 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                       <span className="h-[1px] w-8 bg-[#c49b63]" />
                       <span className="font-sans text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-[#c49b63]">
                         {item.label}
                       </span>
                    </div>

                    {/* Title */}
                    <h1 className={`font-sans text-5xl md:text-7xl xl:text-8xl font-medium tracking-tight uppercase leading-[0.9] text-white mb-6 transition-all duration-700 delay-200 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                       {item.title}
                    </h1>

                    {/* Description */}
                    <p className={`font-sans text-sm md:text-base font-light text-gray-300 max-w-xl leading-relaxed mb-8 transition-all duration-700 delay-300 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                       {item.description}
                    </p>

                    {/* CTA Button */}
                    <div className={`transition-all duration-700 delay-500 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <Link href={item.ctaLink || "#"}>
                          <button className="group flex items-center gap-4 text-white hover:text-[#c49b63] transition-colors">
                              <span className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#c49b63] group-hover:bg-[#c49b63]/10 transition-all duration-300">
                                <ArrowUpRight size={20} />
                              </span>
                              <span className="text-xs uppercase tracking-[0.2em] font-medium">{item.ctaLabel}</span>
                          </button>
                        </Link>
                    </div>
                 </div>
              </div>
            </div>
          );
        })}

        {/* --- Navigation Control (Bottom Right) --- */}
        <div className="absolute bottom-12 right-6 md:right-12 z-30 flex items-end gap-12">
            
            {/* Slide Number (01 / 03) */}
            <div className="hidden md:flex flex-col items-end text-white/80">
                <span className="text-5xl font-light tracking-tighter">
                  0{currentSlide + 1}
                </span>
                <span className="text-xs tracking-widest border-t border-white/30 pt-2 mt-1">
                  / 0{HERO_SLIDES.length}
                </span>
            </div>

            {/* Arrows */}
            <div className="flex gap-4">
                <button 
                  onClick={handlePrevSlide}
                  className="w-14 h-14 border border-white/20 hover:border-white hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                >
                    <ChevronLeft size={24} strokeWidth={1} />
                </button>
                <button 
                  onClick={handleNextSlide}
                  className="w-14 h-14 border border-white/20 hover:border-white hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                >
                    <ChevronRight size={24} strokeWidth={1} />
                </button>
            </div>
        </div>

        {/* --- Progress Indicator Line --- */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10 z-30">
            <div 
              key={currentSlide} // Reset animation khi đổi slide
              className="h-full bg-[#c49b63]"
              style={{ 
                width: '100%',
                animation: `progress-loading ${slideDuration}ms linear forwards`
              }} 
            />
            <style jsx>{`
              @keyframes progress-loading {
                from { width: 0%; }
                to { width: 100%; }
              }
            `}</style>
        </div>
      </section>

      {/* --- 2. ABOUT US (Giữ nguyên) --- */}
      <section className="py-24 xl:py-32 bg-white">
         <div className="container mx-auto max-w-[1400px] px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
               <div className="lg:col-span-7 relative h-[500px] xl:h-[650px] order-2 lg:order-1">
                  <div className="absolute inset-0 bg-gray-100 overflow-hidden">
                    <Image 
                      src={ABOUT_CONTENT.image} 
                      alt="About" 
                      fill 
                      className="object-cover hover:scale-105 transition-transform duration-[1.5s]"
                    />
                  </div>
               </div>
               <div className="lg:col-span-5 relative z-10 lg:-ml-20 bg-white p-8 lg:p-16 shadow-2xl shadow-black/5 order-1 lg:order-2">
                  <span className="block text-[#c49b63] text-xs font-bold tracking-widest uppercase mb-4">Câu chuyện thương hiệu</span>
                  <h2 className="text-4xl text-gray-900 font-light mb-8 capitalize leading-tight">
                    {ABOUT_CONTENT.title}
                  </h2>
                  <p className="text-gray-500 text-[15px] leading-7 font-light text-justify mb-10">
                    {ABOUT_CONTENT.desc}
                  </p>
                  <MinimalButton className="text-gray-900 hover:text-[#c49b63]">
                    Tìm hiểu thêm
                  </MinimalButton>
               </div>
            </div>
         </div>
      </section>

      {/* --- 3. DỰ ÁN BIỂU TƯỢNG (VIDEO CAROUSEL - GIỮ NGUYÊN ĐỂ TẠO SỰ KHÁC BIỆT) --- */}
      {/* Vì Hero Section đã đổi sang layout lệch trái (Asymmetric), 
          phần này giữ layout căn giữa (Centered) là rất hợp lý để tạo nhịp điệu (Rhythm) cho trang web.
          Tôi chỉ chỉnh lại một chút style nút bấm cho đồng bộ.
      */}
      <section className="relative w-full h-screen bg-black overflow-hidden">
        {SYMBOLIC_PROJECTS.map((item, index) => (
          <div 
            key={item.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSymbolicSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <video
              ref={el => { videoRefs.current[index] = el; }}
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              muted
              loop
              playsInline
              poster={item.video.replace('.mp4', '.jpg')}
            >
              <source src={item.video} type="video/mp4" />
            </video>
            
            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-4 md:px-20">
               <span className="font-sans text-sm font-medium tracking-widest uppercase mb-4 opacity-90 text-[#c49b63] animate-fadeIn">
                 {item.label}
               </span>
               <h1 className="font-sans text-[32px] md:text-[56px] font-thin leading-tight uppercase max-w-5xl mb-6 tracking-wide">
                 {item.title}
               </h1>
               <div className="w-24 h-[1px] bg-white/50 mb-8" />
               
               {/* Nút bấm giữ nguyên style centered để đối lập với Hero */}
               <button className="group flex items-center justify-center gap-2 border border-white/30 hover:border-white bg-white/5 hover:bg-white/20 backdrop-blur-sm px-8 py-3 rounded-full transition-all duration-300">
                  <span className="font-sans text-xs md:text-sm font-medium uppercase tracking-widest">Xem Chi Tiết</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </div>
        ))}

        {/* Nút điều hướng Symbolic (Giữ nguyên) */}
        <button onClick={prevSymbolicSlide} className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-30 text-white/50 hover:text-white transition-colors p-2">
           <div className="flex flex-col items-center gap-2">
              <ChevronLeft size={40} strokeWidth={1} />
           </div>
        </button>
        <button onClick={nextSymbolicSlide} className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-30 text-white/50 hover:text-white transition-colors p-2">
           <div className="flex flex-col items-center gap-2">
              <ChevronRight size={40} strokeWidth={1} />
           </div>
        </button>
      </section>

      {/* --- 4. CÔNG TRÌNH TIÊU BIỂU (Giữ nguyên) --- */}
      <section className="py-24 bg-[#f9f9f9]">
         <div className="container mx-auto max-w-[1400px] px-6">
            <div className="text-center mb-16">
               <span className="text-[#c49b63] text-xs font-bold tracking-[0.2em] uppercase">Masterpieces</span>
               <h2 className="text-3xl mt-3 text-gray-900 font-light uppercase tracking-wide">Công trình tiêu biểu</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-16">
               <div className="group cursor-pointer">
                  <div className="relative w-full h-[400px] xl:h-[500px] overflow-hidden mb-6">
                     <Image 
                       src={PROJECTS_HIGHLIGHT.imageLeft} 
                       alt="Project 1" 
                       fill 
                       className="object-cover transition-transform duration-700 group-hover:scale-110" 
                     />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 uppercase tracking-wide group-hover:text-[#c49b63] transition-colors">Biệt thự Đảo Ecopark</h3>
                  <p className="text-gray-500 text-sm mt-2 font-light">Kiến trúc & Nội thất trọn gói</p>
               </div>
               <div className="group cursor-pointer md:mt-20">
                  <div className="relative w-full h-[400px] xl:h-[500px] overflow-hidden mb-6">
                     <Image 
                       src={PROJECTS_HIGHLIGHT.imageRight} 
                       alt="Project 2" 
                       fill 
                       className="object-cover transition-transform duration-700 group-hover:scale-110" 
                     />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 uppercase tracking-wide group-hover:text-[#c49b63] transition-colors">Gran Meliá Nha Trang</h3>
                  <p className="text-gray-500 text-sm mt-2 font-light">Cung cấp giải pháp ánh sáng</p>
               </div>
            </div>
            
            <div className="flex justify-center mt-16">
               <button className="px-12 py-4 border border-[#c49b63]/40 text-[#c49b63] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#c49b63] hover:text-white hover:border-[#c49b63] transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#c49b63]/20">
                 Xem tất cả dự án
               </button>
            </div>
         </div>
      </section>

      {/* --- 5. NEWS (Giữ nguyên) --- */}
      <section className="py-24 bg-white">
         <div className="container mx-auto max-w-[1400px] px-6">
             <div className="flex justify-between items-end mb-12">
                <div>
                   <span className="font-sans text-[#c49b63] text-sm uppercase tracking-widest block mb-2">News & Events</span>
                   <h2 className="font-sans text-[32px] font-light uppercase text-gray-900">Tin tức nổi bật</h2>
                </div>
                <Link href="/news" className="hidden md:flex items-center gap-2 group">
                  <span className="text-sm font-medium text-gray-900 uppercase tracking-widest group-hover:text-[#c49b63] transition-colors relative">
                      Xem tất cả
                      <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#c49b63] group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <ArrowRight size={16} className="text-gray-400 group-hover:text-[#c49b63] group-hover:translate-x-2 transition-all duration-300" />
              </Link>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {NEWS_DATA.map((news) => (
                  <div key={news.id} className="group cursor-pointer flex flex-col h-full">
                     <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden bg-gray-100">
                        <Image 
                          src={news.image} 
                          alt={news.title} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-900">
                           {news.category}
                        </div>
                     </div>
                     <div className="flex flex-col flex-1">
                        <div className="flex items-center gap-3 text-[11px] text-gray-400 uppercase tracking-wider mb-3">
                           <span>{news.date}</span>
                           <span className="w-1 h-1 bg-[#c49b63] rounded-full"></span>
                           <span>EuroStyle News</span>
                        </div>
                        <h3 className="font-sans text-[16px] font-medium text-gray-900 leading-snug mb-4 group-hover:text-[#c49b63] transition-colors line-clamp-2">
                           {news.title}
                        </h3>
                     </div>
                  </div>
                ))}
             </div>
         </div>
      </section>

      {/* --- 6. CATEGORIES (Giữ nguyên) --- */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto max-w-[1400px] px-6">
           <h2 className="text-2xl font-light uppercase text-center mb-20 tracking-widest text-gray-900">Thế giới nội thất</h2>
           
           <div className="divide-y divide-gray-100">
             {CATEGORIES.map((cat, idx) => (
                <div key={idx} className="group py-10 flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50 transition-colors px-4 cursor-pointer">
                   <div className="md:w-1/3 mb-6 md:mb-0">
                      <h3 className="text-lg font-medium uppercase tracking-wide text-gray-900 group-hover:text-[#c49b63] transition-colors">
                        {cat.title}
                      </h3>
                   </div>
                   <div className="flex-1 flex gap-8 items-center overflow-x-auto no-scrollbar opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                      {cat.images.map((img, i) => (
                         <div key={i} className="relative w-24 h-16 grayscale group-hover:grayscale-0 transition-all bg-gray-100">
                            <Image src={img} alt="brand" fill className="object-contain" />
                         </div>
                      ))}
                   </div>
                   <div className="hidden md:block">
                      <ArrowRight className="text-gray-300 group-hover:text-[#c49b63] -translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                   </div>
                </div>
             ))}
           </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;