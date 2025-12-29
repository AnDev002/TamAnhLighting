// src/components/layout/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Heart, MapPin } from "lucide-react";

// Đơn giản hóa danh sách ngôn ngữ, bỏ width cứng
const LANGUAGES = ["en", "it", "de", "fr", "es", "cn", "jp"];

// CẬP NHẬT NAV BÊN TRÁI - Link đúng các page đã tạo
const SUB_NAV_LEFT = [
  { name: "Sản phẩm", path: "/products" },
  { name: "Bộ sưu tập 2025", path: "/collections" }, // Cùng link với Bộ sưu tập
  { name: "Trải nghiệm", path: "/experience" },
  { name: "Dự án", path: "/projects" },
  { name: "Video", path: "/videos" },
];

// CẬP NHẬT NAV BÊN PHẢI
// Thêm cờ 'type' để xác định item nào là dropdown
const SUB_NAV_RIGHT = [
  { name: "Thiết kế", path: "/products" }, // Tạm thời dẫn về products hoặc trang designers nếu có sau này
  { name: "Bộ sưu tập", path: "/collections" },
  { name: "Về chúng tôi", path: "/about" },
  { name: "Mẹo chiếu sáng", path: "/tips" }, // Dẫn về trang TipsPage
  { name: "Vị trí", path: "#", type: "dropdown-location" }, // Loại đặc biệt: Dropdown
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Hiệu ứng đổi màu nền khi scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-white/5 ${
        isScrolled ? "bg-dark-bg/95 backdrop-blur-md py-2" : "bg-gradient-to-b from-black/80 to-transparent py-4"
      }`}
    >
      <div className="container max-w-[1700px] mx-auto px-6 flex flex-col items-center">
        
        {/* --- Top Row: Ultilities --- */}
        <div className={`w-full flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-8 opacity-100 mb-2'}`}>
          
          {/* Languages - Minimalist Style */}
          <div className="flex items-center gap-4">
             {LANGUAGES.map((code) => (
               <button key={code} className="text-white/40 hover:text-brand-primary text-[11px] uppercase transition-colors font-medium">
                 {code}
               </button>
             ))}
          </div>

          {/* Tools */}
          <div className="flex items-center gap-6">
            <Link href="/login" className="text-white/60 hover:text-white text-[11px] uppercase tracking-widest transition-colors">Login</Link>
            <div className="w-[1px] h-3 bg-white/20"></div>
            <button className="text-white/60 hover:text-white flex items-center gap-2 group">
               <Search className="w-3.5 h-3.5" />
               <span className="text-[11px] uppercase tracking-widest hidden sm:block">Search</span>
            </button>
            <div className="w-[1px] h-3 bg-white/20"></div>
            <button className="text-white/60 hover:text-white flex items-center gap-2">
               <Heart className="w-3.5 h-3.5" />
               <span className="text-[11px] uppercase tracking-widest hidden sm:block">My Selection</span>
            </button>
          </div>
        </div>

        {/* --- Main Navigation Row --- */}
        <div className="w-full flex items-center justify-between">
          
          {/* Left Nav */}
          <nav className="flex-1 flex justify-start items-center gap-6 xl:gap-8 2xl:gap-12">
            {SUB_NAV_LEFT.map((item) => (
              <Link 
                key={item.name} 
                href={item.path}
                className="text-white/90 text-[13px] font-medium uppercase tracking-wider hover:text-brand-primary transition-colors relative group whitespace-nowrap"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Logo (Center) */}
          <div className="shrink-0 px-8">
             <Link href="/" className="block relative hover:opacity-90 transition-opacity">
                <Image 
                  src="/assets-header/ImageAsset1.png" 
                  alt="EuroStyle Logo" 
                  width={isScrolled ? 140 : 180} 
                  height={isScrolled ? 32 : 42} 
                  className="object-contain transition-all duration-500"
                />
             </Link>
          </div>

          {/* Right Nav */}
          <nav className="flex-1 flex justify-end items-center gap-6 xl:gap-8 2xl:gap-12">
            {SUB_NAV_RIGHT.map((item) => {
              // XỬ LÝ DROPDOWN "VỊ TRÍ"
              if (item.type === "dropdown-location") {
                return (
                  <div key={item.name} className="relative group py-4 cursor-pointer">
                    <span className="text-white/90 text-[13px] font-medium uppercase tracking-wider hover:text-brand-primary transition-colors flex items-center gap-1">
                      {item.name}
                      <MapPin className="w-3 h-3 opacity-70 group-hover:text-brand-primary" />
                    </span>
                    <span className="absolute bottom-4 left-0 w-0 h-[1px] bg-brand-primary transition-all duration-300 group-hover:w-full"></span>

                    {/* --- Dropdown Content --- */}
                    <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      {/* Cầu nối vô hình để không bị mất hover khi di chuyển chuột xuống */}
                      <div className="absolute -top-4 left-0 w-full h-8 bg-transparent"></div>
                      
                      <div className="w-[300px] bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl shadow-2xl overflow-hidden">
                        {/* Image Showroom */}
                        <div className="relative w-full h-32 rounded-lg overflow-hidden mb-3 bg-gray-800">
                          {/* Dùng tạm ảnh logo hoặc ảnh showroom thực tế nếu có */}
                          <Image 
                            src="/assets-header/ImageAsset1.png" 
                            alt="Showroom" 
                            fill
                            className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                             <span className="text-white text-xs uppercase tracking-widest font-bold border border-white/50 px-3 py-1">Showroom</span>
                          </div>
                        </div>

                        {/* Address Info */}
                        <div className="space-y-2 text-left">
                          <h4 className="text-white font-semibold text-sm">EuroStyle Design Center</h4>
                          <p className="text-gray-300 text-xs leading-relaxed">
                            77 Nguyễn Thái Học, Ba Đình, Hà Nội<br/>
                            Việt Nam
                          </p>
                          
                          {/* Google Maps Link */}
                          <a 
                            href="https://www.google.com/maps/search/?api=1&query=EuroStyle+Design+Center+77+Nguyen+Thai+Hoc" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-brand-primary text-xs font-medium mt-2 hover:underline"
                          >
                            <MapPin className="w-3 h-3" />
                            Xem trên Google Maps
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              // RENDER CÁC LINK BÌNH THƯỜNG
              return (
                <Link 
                  key={item.name} 
                  href={item.path}
                  className="text-white/90 text-[13px] font-medium uppercase tracking-wider hover:text-brand-primary transition-colors relative group whitespace-nowrap"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              );
            })}
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;