"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import ProcessViewer from "./components/ProcessViewer";
import { SHOWROOM_ZONES } from "./data/experienceData";

const ExperiencePage = () => {
  return (
    <div className="w-full bg-white min-h-screen">
      
      {/* --- 1. CINEMATIC HERO --- */}
      <section className="relative w-full h-screen overflow-hidden">
         {/* Giả lập Video Background bằng ảnh + Zoom effect */}
         <div className="absolute inset-0 animate-kenburns">
            <Image 
                src="https://images.unsplash.com/photo-1522771753035-1a5b6563f3a9?q=80&w=2000&auto=format&fit=crop"
                alt="Showroom Experience"
                fill
                className="object-cover"
                priority
            />
         </div>
         <div className="absolute inset-0 bg-black/40" />

         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
            <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center mb-8 backdrop-blur-sm hover:scale-110 hover:bg-white hover:text-black transition-all duration-500 cursor-pointer group">
               <Play size={24} className="ml-1 fill-white group-hover:fill-black transition-colors" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-thin uppercase tracking-widest mb-6">
               The Art of Living
            </h1>
            <p className="text-white/80 text-sm md:text-base tracking-[0.2em] font-light max-w-xl">
               TRẢI NGHIỆM KHÔNG GIAN SỐNG ĐẲNG CẤP CHÂU ÂU
            </p>
         </div>
      </section>

      {/* --- 2. INTRO: TEXT SCROLL --- */}
      <section className="py-24 md:py-32 px-6">
         <div className="container mx-auto max-w-4xl text-center">
            <span className="text-[#c49b63] text-xs font-bold uppercase tracking-[0.3em] mb-6 block">
               Về Chúng Tôi
            </span>
            <h2 className="text-3xl md:text-5xl font-light leading-snug text-gray-900 mb-8">
               "Hơn cả một showroom, đây là nơi đánh thức mọi giác quan của bạn với ánh sáng, vật liệu và nghệ thuật sắp đặt."
            </h2>
            <div className="w-24 h-[1px] bg-black mx-auto" />
         </div>
      </section>

      {/* --- 3. SHOWROOM TOUR (ZONES) --- */}
      <section className="pb-24 px-6">
         <div className="container mx-auto max-w-[1600px]">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {SHOWROOM_ZONES.map((zone, idx) => (
                     <div key={idx} className="group relative aspect-[3/4] overflow-hidden cursor-pointer">
                         <Image 
                             src={zone.img}
                             alt={zone.title}
                             fill
                             className="object-cover transition-transform duration-700 group-hover:scale-110"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                         
                         <div className="absolute bottom-8 left-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                             <h3 className="text-2xl font-light uppercase mb-2">{zone.title}</h3>
                             <p className="text-white/70 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                 {zone.desc}
                             </p>
                         </div>
                     </div>
                 ))}
             </div>
         </div>
      </section>

      {/* --- 4. THE BESPOKE PROCESS (Interactive) --- */}
      <section className="bg-gray-50">
         <div className="container mx-auto max-w-[1600px] py-24 px-6">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16">
               <h2 className="text-4xl md:text-5xl font-thin uppercase text-gray-900">
                  Dịch vụ <span className="italic font-serif">Độc quyền</span>
               </h2>
               <p className="text-gray-500 max-w-md mt-4 md:mt-0 text-right text-sm">
                  Quy trình làm việc chuyên nghiệp, tận tâm từ ý tưởng sơ khởi đến khi hoàn thiện.
               </p>
            </div>
            
            {/* Nhúng component ProcessViewer */}
            <ProcessViewer />
         </div>
      </section>

      {/* --- 5. BOOKING CTA --- */}
      <section className="py-32 bg-black text-white text-center px-6 relative overflow-hidden">
         {/* Background Decor */}
         <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-[-50%] left-[-20%] w-[1000px] h-[1000px] rounded-full border-[100px] border-white/10 blur-3xl" />
         </div>

         <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-thin uppercase mb-8">
               Trải nghiệm thực tế
            </h2>
            <p className="text-gray-400 font-light mb-12 text-lg">
               Chúng tôi trân trọng mời quý khách đến tham quan Showroom để cảm nhận vẻ đẹp chân thực của sản phẩm.
            </p>
            <Link 
               href="/contact" 
               className="inline-block px-12 py-5 bg-[#c49b63] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(196,155,99,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
               Đặt lịch hẹn riêng
            </Link>
         </div>
      </section>

    </div>
  );
};

export default ExperiencePage;