"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react"; // Import thêm icon Quote
import { ABOUT_STORY, FOUNDER_QUOTE, VALUES, PARTNERS_LOGOS } from "./data/aboutData";
import TeamCarousel from "./components/TeamCarousel";

const AboutPage = () => {
  return (
    <div className="w-full bg-white min-h-screen">
      
      {/* --- 1. HERO HEADER --- */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 px-6 text-center bg-[#f9f9f9]">
         <div className="container mx-auto max-w-4xl">
            <span className="text-[#c49b63] text-xs font-bold uppercase tracking-[0.3em] mb-6 block animate-fade-up">
                Est. 2012
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-gray-900 mb-8 leading-tight animate-fade-up delay-100">
                Chúng tôi kể chuyện <br/> bằng <span className="italic text-gray-400">ánh sáng.</span>
            </h1>
            <div className="w-[1px] h-20 bg-gray-300 mx-auto animate-fade-up delay-200" />
         </div>
      </section>

      {/* --- 2. STORY SECTION (Khối Cánh Cửa) --- */}
      <section className="py-20 md:py-32 px-6 overflow-hidden bg-white">
         <div className="container mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
               
               {/* Left: Text & Circle */}
               <div className="relative order-2 lg:order-1">
                  <div className="relative z-10">
                     <h2 className="text-3xl md:text-5xl text-gray-900 mb-8 leading-tight">
                        {ABOUT_STORY.title}
                     </h2>
                     <div className="space-y-6 text-gray-500 font-light text-base md:text-lg leading-relaxed text-justify">
                        {ABOUT_STORY.description.map((p, idx) => (
                           <p key={idx}>{p}</p>
                        ))}
                     </div>
                     {/* Stats */}
                     <div className="grid grid-cols-3 gap-8 mt-12 border-t border-gray-100 pt-8">
                        {ABOUT_STORY.stats.map((stat, idx) => (
                           <div key={idx}>
                              <span className="block text-3xl text-[#c49b63]">{stat.value}</span>
                              <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 mt-1 block">{stat.label}</span>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Circle Badge */}
                  <div className="absolute -top-20 -left-20 w-40 h-40 md:w-64 md:h-64 rounded-full border border-gray-100 hidden xl:block -z-0 opacity-40 animate-spin-slow">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-full h-full fill-gray-300">
                           <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                           <text fontSize="13" fontWeight="bold" letterSpacing="2">
                              <textPath href="#circlePath" className="uppercase">
                                 • Premium Lighting • Since 2012 •
                              </textPath>
                           </text>
                        </svg>
                        <Star size={20} className="absolute text-[#c49b63]" fill="#c49b63" />
                      </div>
                  </div>
               </div>

               {/* Right: The "Door" Image Composition */}
               <div className="relative h-[500px] md:h-[700px] order-1 lg:order-2">
                  <div className="absolute top-0 right-0 w-[85%] h-[90%] rounded-t-full overflow-hidden z-10 shadow-2xl">
                     <Image 
                        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200" 
                        alt="Interior Arch" 
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-[2s]"
                     />
                  </div>
                  <div className="absolute bottom-0 left-0 w-[50%] h-[40%] z-20 shadow-[-20px_-20px_60px_rgba(0,0,0,0.1)] border-[8px] border-white overflow-hidden">
                     <Image 
                        src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=800" 
                        alt="Detail Shot" 
                        fill
                        className="object-cover"
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- 3. FOUNDER QUOTE (UPDATED: LIGHT & CLEAN) --- 
          Thay đổi: Nền Be nhạt (#f4f2ed), chữ Đen, icon Quote lớn mờ làm nền */}
      <section className="py-28 bg-[#f4f2ed] relative overflow-hidden">
         {/* Decor: Dấu ngoặc kép khổng lồ làm nền mờ */}
         <div className="absolute top-10 left-10 md:left-1/4 opacity-5">
            <Quote size={200} className="text-black transform -scale-x-100" />
         </div>

         <div className="container mx-auto max-w-4xl text-center px-6 relative z-10">
            <Star className="w-6 h-6 text-[#c49b63] mx-auto mb-10" fill="#c49b63" />
            
            <h3 className="text-3xl md:text-5xl italic leading-snug text-gray-900 mb-10">
               "{FOUNDER_QUOTE.quote}"
            </h3>
            
            <div className="flex flex-col items-center">
               <div className="w-16 h-[1px] bg-gray-400 mb-6" /> {/* Line decor */}
               <span className="text-[#c49b63] text-sm font-bold uppercase tracking-[0.2em] mb-2">
                  {FOUNDER_QUOTE.author}
               </span>
               <span className="text-gray-500 text-xs uppercase tracking-widest">
                  {FOUNDER_QUOTE.role}
               </span>
            </div>
         </div>
      </section>

      {/* --- 4. CORE VALUES (Grid) --- */}
      <section className="py-24 px-6 bg-white border-b border-gray-100">
         <div className="container mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {VALUES.map((val, idx) => (
                  <div key={idx} className="group text-center px-6">
                     <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#c49b63] group-hover:text-white transition-colors duration-500">
                        <span className="font-bold text-lg">{idx + 1}</span>
                     </div>
                     <h3 className="text-xl text-gray-900 mb-4">{val.title}</h3>
                     <p className="text-gray-500 font-light text-sm leading-relaxed">
                        {val.desc}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- 5. TEAM CAROUSEL --- */}
      <section className="py-24 bg-white">
         <TeamCarousel />
      </section>

      {/* --- 6. PARTNERS --- */}
      <section className="py-20 bg-[#f9f9f9]">
        <div className="container mx-auto px-6 text-center">
            <p className="text-gray-400 text-xs uppercase tracking-[0.3em] mb-12">
               Đối tác chiến lược
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                {PARTNERS_LOGOS.map((brand, idx) => (
                    <span key={idx} className="text-2xl md:text-3xl text-gray-800 font-bold hover:text-[#c49b63] cursor-default transition-colors">
                       {brand}
                    </span>
                ))}
            </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;