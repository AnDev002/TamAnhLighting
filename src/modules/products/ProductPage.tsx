"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PRODUCT_CATEGORIES, PRODUCTS_MOCK } from "./data/productData";
import ProductCard from "./components/ProductCard";
import { ArrowDown, Link } from "lucide-react";

const ProductPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS_MOCK);
  const [isAnimating, setIsAnimating] = useState(false);

  // Logic lọc sản phẩm
  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => {
      if (activeCategory === "all") {
        setFilteredProducts(PRODUCTS_MOCK);
      } else {
        setFilteredProducts(PRODUCTS_MOCK.filter(p => p.category === activeCategory));
      }
      setIsAnimating(false);
    }, 300); // Delay nhẹ để tạo hiệu ứng chuyển cảnh
    return () => clearTimeout(timeout);
  }, [activeCategory]);

  return (
    <div className="w-full bg-white min-h-screen">
      
      {/* --- 1. HERO SECTION --- 
          Style: Minimalist, Full Height, Text Left */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-end pb-24 bg-[#141414] overflow-hidden">
         {/* Background Parallax Image */}
         <div className="absolute inset-0 opacity-60">
            <Image 
                src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2000&auto=format&fit=crop"
                alt="Luxury Lighting"
                fill
                className="object-cover"
                priority
            />
         </div>
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

         <div className="container mx-auto max-w-[1600px] px-6 relative z-10">
            <div className="max-w-3xl animate-fade-up-slow">
                <span className="text-[#c49b63] text-sm font-bold tracking-[0.3em] uppercase mb-4 block">
                    Our Collections
                </span>
                <h1 className="text-5xl md:text-7xl text-white font-thin uppercase leading-tight tracking-wide mb-6">
                    Masterpieces <br /> <span className="text-white/50">of Lighting</span>
                </h1>
                <p className="text-white/70 text-base md:text-lg font-light max-w-xl leading-relaxed">
                    Khám phá bộ sưu tập đèn trang trí đẳng cấp, nơi ánh sáng giao thoa với nghệ thuật điêu khắc.
                </p>
            </div>
         </div>
      </section>

      {/* --- 2. FILTER & SORT BAR --- 
          Style: Sticky, Tab-based */}
      <section className="sticky top-[70px] z-40 bg-white/95 backdrop-blur border-b border-gray-100 transition-all">
         <div className="container mx-auto max-w-[1600px] px-6 py-6 overflow-x-auto no-scrollbar">
            <div className="flex items-center justify-between min-w-max gap-8">
               
               {/* Categories */}
               <div className="flex items-center gap-8 md:gap-12">
                  {PRODUCT_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`relative text-[13px] uppercase tracking-[0.15em] font-medium transition-colors pb-1 ${
                        activeCategory === cat.id 
                        ? "text-black" 
                        : "text-gray-400 hover:text-[#c49b63]"
                      }`}
                    >
                      {cat.label}
                      {/* Underline Active */}
                      <span className={`absolute bottom-0 left-0 h-[2px] bg-[#c49b63] transition-all duration-300 ${
                         activeCategory === cat.id ? "w-full" : "w-0"
                      }`} />
                    </button>
                  ))}
               </div>

               {/* Result Count (Optional) */}
               <div className="hidden md:block text-xs text-gray-400 uppercase tracking-widest">
                  Showing {filteredProducts.length} results
               </div>
            </div>
         </div>
      </section>

      {/* --- 3. PRODUCT GRID --- */}
      <section className="py-16 md:py-24">
         <div className="container mx-auto max-w-[1600px] px-6">
            <div 
               className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-16 transition-opacity duration-500 ${
                  isAnimating ? "opacity-50 translate-y-4" : "opacity-100 translate-y-0"
               }`}
            >
               {filteredProducts.map((product) => (
                  <ProductCard key={product.id} data={product} />
               ))}
            </div>

            {/* Load More Button (Fake) */}
            <div className="flex flex-col items-center mt-24">
               <button className="group flex flex-col items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors">
                  <span>Load More</span>
                  <ArrowDown size={16} className="animate-bounce group-hover:text-[#c49b63]" />
               </button>
            </div>
         </div>
      </section>

      {/* --- 4. CONSULTATION CTA (Bottom Section) --- */}
      <section className="py-24 bg-[#f9f9f9]">
         <div className="container mx-auto text-center max-w-2xl px-6">
            <h2 className="text-3xl font-light uppercase text-gray-900 mb-6 tracking-wide">
               Bạn cần tư vấn thiết kế?
            </h2>
            <p className="text-gray-500 font-light mb-8">
               Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn lựa chọn giải pháp ánh sáng phù hợp nhất cho không gian.
            </p>
            <Link href="/contact" className="inline-block px-10 py-4 border border-black text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300">
               Liên hệ ngay
            </Link>
         </div>
      </section>

    </div>
  );
};

export default ProductPage;