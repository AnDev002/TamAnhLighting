// src/modules/products/ProductPage.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation"; // Thêm useRouter
import Link from "next/link";
import { PRODUCT_CATEGORIES, PRODUCTS_DATA } from "./data/productData";
import ProductCard from "./components/ProductCard";

const ProductPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // 1. Lấy trạng thái từ URL (Single Source of Truth)
  // Nếu URL có ?category=abc thì active là abc, ngược lại là "all"
  const categoryParam = searchParams.get("category");
  const searchQuery = searchParams.get("search");
  
  const activeCategorySlug = categoryParam || "all";

  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS_DATA);
  const [isAnimating, setIsAnimating] = useState(false);

  // 2. Hàm xử lý khi chọn danh mục -> Đẩy vào URL thay vì set state trực tiếp
  const handleCategoryChange = (slug: string) => {
    if (slug === "all") {
      router.push("/products", { scroll: false });
    } else {
      router.push(`/products?category=${slug}`, { scroll: false });
    }
  };

  // 3. Effect lọc sản phẩm khi URL thay đổi (category hoặc search)
  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => {
      let result = PRODUCTS_DATA;

      // Lọc theo Category
      if (activeCategorySlug !== "all") {
        const selectedCat = PRODUCT_CATEGORIES.find(c => c.slug === activeCategorySlug);
        if (selectedCat) {
            result = result.filter(p => p.category === selectedCat.name);
        } else {
            // Fallback nếu không tìm thấy trong config (so sánh trực tiếp slug nếu data hỗ trợ)
            result = result.filter(p => p.category === activeCategorySlug); 
        }
      }

      // Lọc theo Search Query
      if (searchQuery) {
        const lowerKeyword = searchQuery.toLowerCase().trim();
        result = result.filter(p => 
             p.name.toLowerCase().includes(lowerKeyword) || 
             (p.category && p.category.toLowerCase().includes(lowerKeyword))
        );
      }

      setFilteredProducts(result);
      setIsAnimating(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [activeCategorySlug, searchQuery]);

  return (
    <div className="w-full bg-white min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-end pb-24 bg-[#141414] overflow-hidden">
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

      {/* FILTER BAR */}
      <section className="sticky top-[70px] z-40 bg-white/95 backdrop-blur border-b border-gray-100 transition-all">
         <div className="container mx-auto max-w-[1600px] px-6 py-6 overflow-x-auto no-scrollbar">
            <div className="flex items-center justify-between min-w-max gap-8">
               
               <div className="flex items-center gap-8 md:gap-12">
                  {/* Nút All */}
                  <button
                      onClick={() => handleCategoryChange("all")}
                      className={`relative text-[13px] uppercase tracking-[0.15em] font-medium transition-colors pb-1 ${
                        activeCategorySlug === "all" ? "text-black" : "text-gray-400 hover:text-[#c49b63]"
                      }`}
                    >
                      All
                      <span className={`absolute bottom-0 left-0 h-[2px] bg-[#c49b63] transition-all duration-300 ${
                         activeCategorySlug === "all" ? "w-full" : "w-0"
                      }`} />
                  </button>

                  {/* Các nút Category */}
                  {PRODUCT_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.slug)}
                      className={`relative text-[13px] uppercase tracking-[0.15em] font-medium transition-colors pb-1 ${
                        activeCategorySlug === cat.slug 
                        ? "text-black" 
                        : "text-gray-400 hover:text-[#c49b63]"
                      }`}
                    >
                      {cat.name}
                      <span className={`absolute bottom-0 left-0 h-[2px] bg-[#c49b63] transition-all duration-300 ${
                         activeCategorySlug === cat.slug ? "w-full" : "w-0"
                      }`} />
                    </button>
                  ))}
               </div>

               <div className="hidden md:block text-xs text-gray-400 uppercase tracking-widest">
                  {searchQuery && <span className="text-black mr-2 font-bold">Kết quả: "{searchQuery}" —</span>}
                  Showing {filteredProducts.length} results
               </div>
            </div>
         </div>
      </section>

      {/* PRODUCT GRID */}
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
               
               {filteredProducts.length === 0 && (
                   <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-400 font-light">
                       <p className="mb-4">
                           Không tìm thấy sản phẩm nào {searchQuery ? `cho từ khóa "${searchQuery}"` : "trong danh mục này"}.
                       </p>
                       {searchQuery && (
                           <Link href="/products" className="text-black underline uppercase text-xs tracking-widest hover:text-brand-primary">
                               Xóa tìm kiếm
                           </Link>
                       )}
                   </div>
               )}
            </div>
         </div>
      </section>

      {/* CONSULTATION CTA */}
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