"use client";

import React, { useState } from "react";
import { TIPS_MOCK, TIP_CATEGORIES } from "./data/tipsData";
import BlogCard from "./components/BlogCard";
import FeaturedPost from "./components/FeaturedPost";

const TipsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Tách bài featured và bài thường
  const featuredPost = TIPS_MOCK.find((p) => p.featured) || TIPS_MOCK[0];
  
  // Filter logic (loại bỏ bài featured khỏi list bên dưới để tránh lặp)
  const listPosts = TIPS_MOCK.filter((p) => 
    p.id !== featuredPost.id && 
    (activeCategory === "all" || p.category === activeCategory)
  );

  return (
    <div className="w-full bg-white min-h-screen">
      {/* --- 1. HERO (FEATURED) --- */}
      <FeaturedPost data={featuredPost} />

      {/* --- 2. HEADER & FILTER --- */}
      <section className="sticky top-[70px] z-30 bg-white/95 backdrop-blur border-b border-gray-100 transition-all">
         <div className="container mx-auto max-w-[1400px] px-6 py-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
               <h2 className="text-2xl italic text-gray-900">The Journal</h2>
               
               {/* Filter Tabs */}
               <div className="flex items-center gap-6 md:gap-10 overflow-x-auto no-scrollbar">
                  {TIP_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap transition-colors ${
                        activeCategory === cat.id 
                        ? "text-[#c49b63]" 
                        : "text-gray-400 hover:text-black"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* --- 3. BLOG GRID --- */}
      <section className="py-16 md:py-24 bg-white px-6">
         <div className="container mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
               {listPosts.length > 0 ? (
                 listPosts.map((post) => (
                    <BlogCard key={post.id} data={post} />
                 ))
               ) : (
                 <div className="col-span-full text-center py-20 text-gray-400 font-light">
                    Không có bài viết nào trong mục này.
                 </div>
               )}
            </div>
         </div>
      </section>

      {/* --- 4. NEWSLETTER (Footer to Journal) --- */}
      <section className="py-24 bg-[#f8f8f8] px-6">
         <div className="container mx-auto max-w-2xl text-center">
            <span className="text-[#c49b63] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
               Subscribe
            </span>
            <h3 className="text-3xl md:text-4xl text-gray-900 mb-6">
               Nhận cảm hứng chiếu sáng mỗi tuần
            </h3>
            <p className="text-gray-500 font-light mb-10 text-sm md:text-base">
               Chúng tôi gửi đến bạn những xu hướng mới nhất, mẹo bảo quản và các dự án tiêu biểu. Không spam.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4">
               <input 
                  type="email" 
                  placeholder="Email của bạn"
                  className="flex-1 px-6 py-4 bg-white border border-gray-200 outline-none focus:border-black transition-colors text-sm"
               />
               <button className="px-10 py-4 bg-black text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#c49b63] transition-colors">
                  Đăng ký
               </button>
            </form>
         </div>
      </section>

    </div>
  );
};

export default TipsPage;