"use client";

import React from "react";
import CollectionShowcase from "./components/CollectionShowcase";
import { COLLECTIONS_MOCK } from "./data/collectionData";

const CollectionPage = () => {
  return (
    <div className="w-full bg-white">
      
      {/* --- HERO HEADER --- 
          Tiêu đề lớn, đơn giản, tạo khoảng thở */}
      <section className="pt-40 pb-20 px-6 text-center bg-white">
          <h1 className="text-5xl md:text-8xl font-thin uppercase tracking-wide text-black mb-6 animate-fade-up">
             Lookbook
          </h1>
          <p className="max-w-2xl mx-auto text-gray-500 font-light text-sm md:text-base tracking-[0.2em] animate-fade-up delay-100">
             TUYỂN TẬP CÁC BỘ SƯU TẬP 2024 - 2025
          </p>
          <div className="w-[1px] h-24 bg-gray-200 mx-auto mt-12 animate-fade-up delay-200" />
      </section>

      {/* --- COLLECTION LOOP --- */}
      <div className="flex flex-col">
         {COLLECTIONS_MOCK.map((collection, index) => (
             <CollectionShowcase 
                key={collection.id} 
                data={collection} 
                index={index} 
             />
         ))}
      </div>

      {/* --- FOOTER CTA --- */}
      <section className="py-32 px-6 bg-black text-white text-center">
         <h2 className="text-3xl md:text-5xl font-thin uppercase mb-8">
            Bạn chưa tìm thấy phong cách phù hợp?
         </h2>
         <p className="text-gray-400 mb-12 max-w-xl mx-auto font-light">
            Hãy để các chuyên gia của chúng tôi giúp bạn phối trộn và tạo nên một bộ sưu tập độc bản cho riêng ngôi nhà của bạn.
         </p>
         <a 
            href="/contact" 
            className="inline-block border border-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
         >
            Liên hệ tư vấn
         </a>
      </section>

    </div>
  );
};

export default CollectionPage;