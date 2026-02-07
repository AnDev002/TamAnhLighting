// src/components/layout/Header.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // Thêm useRouter
import { Search, Heart, MapPin, Menu, X, Globe, ArrowRight } from "lucide-react";

// --- CONFIG ---
const LANGUAGE_MAP: { [key: string]: string } = {
  "vn": "vi", "en": "en", "de": "de", "cn": "zh-CN", "jp": "ja"
};

const SUB_NAV_LEFT = [
  { name: "Sản phẩm", path: "/products" },
  { name: "Bộ sưu tập 2026", path: "/collections/seasonal" },
  { name: "Trải nghiệm", path: "/experience" },
  { name: "Dự án", path: "/projects" },
  { name: "Video", path: "/videos" },
];

const SUB_NAV_RIGHT = [
  { name: "Thiết kế", path: "/design" },
  { name: "Bộ sưu tập", path: "/collections" },
  { name: "Về chúng tôi", path: "/about" },
  { name: "Mẹo chiếu sáng", path: "/tips" },
  { name: "Vị trí", path: "#", type: "dropdown-location" },
];

const MOBILE_NAV = [...SUB_NAV_LEFT, ...SUB_NAV_RIGHT];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  // State quản lý từ khóa tìm kiếm
  const [keyword, setKeyword] = useState("");
  
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const router = useRouter(); // Hook điều hướng

  // --- LOGIC SEARCH ---
  const handleSearch = (searchTerm?: string) => {
    const finalKeyword = searchTerm || keyword;
    if (!finalKeyword.trim()) return;

    // 1. Đóng Search Overlay
    setIsSearchOpen(false);
    
    // 2. Reset input (tuỳ chọn)
    setKeyword("");

    // 3. Điều hướng sang trang Product kèm query param
    // encodeURIComponent để xử lý ký tự đặc biệt hoặc tiếng Việt
    router.push(`/products?search=${encodeURIComponent(finalKeyword.trim())}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  // --------------------

  const handleLanguageChange = (langLabel: string) => {
    const googleLangCode = LANGUAGE_MAP[langLabel];
    document.cookie = `googtrans=/auto/${googleLangCode}; path=/; domain=${window.location.hostname}`;
    document.cookie = `googtrans=/auto/${googleLangCode}; path=/;`;
    window.location.reload();
  };

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleKeyDownWindow = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsSearchOpen(false);
    };
    window.addEventListener("keydown", handleKeyDownWindow);
    return () => window.removeEventListener("keydown", handleKeyDownWindow);
  }, []);

  const isDarkHeroPage = ["/", "/experience", "/videos", "/projects"].includes(pathname);
  
  const isTextWhite = (isScrolled || isDarkHeroPage) && !isMobileMenuOpen && !isSearchOpen;

  const textColorClass = isTextWhite ? "text-white" : "text-black";
  const textHoverClass = "hover:text-brand-primary";
  const iconColorClass = isTextWhite ? "text-white/60" : "text-black/60";
  const borderColorClass = isTextWhite ? "bg-white/20" : "bg-black/20";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen || isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen, isSearchOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? "bg-dark-bg/95 backdrop-blur-md py-2 shadow-lg border-white/5" 
            : isDarkHeroPage 
              ? "bg-gradient-to-b from-black/80 to-transparent py-4 border-transparent" 
              : "bg-white/90 backdrop-blur-sm py-3 lg:py-4 shadow-sm border-black/5"
        }`}
      >
        <div className="container max-w-[1700px] mx-auto px-4 sm:px-6 flex flex-col items-center">
          
          {/* --- Top Row: Utilities (Desktop) --- */}
          <div className={`w-full justify-between items-center transition-all duration-300 hidden xl:flex ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-8 opacity-100 mb-2'}`}>
            <div className="flex items-center gap-4">
               {Object.keys(LANGUAGE_MAP).map((code) => (
                 <button 
                   key={code} 
                   onClick={() => handleLanguageChange(code)}
                   className={`${isTextWhite ? "text-white/40" : "text-black/40"} ${textHoverClass} text-[11px] uppercase transition-colors font-medium hover:scale-110`}
                 >
                   {code}
                 </button>
               ))}
            </div>

            <div className="flex items-center gap-6">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className={`${iconColorClass} hover:text-brand-primary flex items-center gap-2 group transition-colors`}
              >
                 <Search className="w-3.5 h-3.5" />
                 <span className="text-[11px] uppercase tracking-widest">Search</span>
              </button>
              
              <div className={`w-[1px] h-3 ${borderColorClass}`}></div>
                <Link href="/login" className={`${iconColorClass} hover:text-brand-primary text-[11px] uppercase tracking-widest transition-colors`}>Login</Link>
              <div className="w-[1px] h-3 bg-white/20"></div>
              </div>
            </div>

          {/* --- Main Navigation Row --- */}
          <div className="w-full grid grid-cols-[auto_1fr_auto] xl:flex xl:items-center xl:justify-between h-10 xl:h-auto">
            
            {/* Mobile Hamburger */}
            <div className="xl:hidden flex items-center justify-start w-12">
                <button 
                    onClick={() => setIsMobileMenuOpen(true)}
                    className={`${textColorClass} p-1 -ml-1 hover:opacity-70 transition-opacity`}
                >
                    <Menu className="w-7 h-7" />
                </button>
            </div>

            {/* Left Nav (Desktop) */}
            <nav className="hidden xl:flex flex-1 justify-start items-center gap-4 2xl:gap-8">
              {SUB_NAV_LEFT.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.path}
                  className={`${textColorClass} ${textHoverClass} text-[12px] 2xl:text-[13px] font-medium uppercase tracking-wider transition-colors relative group whitespace-nowrap`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* LOGO */}
            <div className="flex justify-center items-center xl:px-8">
               <Link href="/" className="group flex flex-col items-center justify-center transition-opacity hover:opacity-90">
                  <h1 
                    className={`font-sans font-bold uppercase leading-none transition-all duration-500 text-center ${textColorClass} ${
                      isScrolled ? "text-lg xl:text-xl tracking-[0.1em]" : "text-xl xl:text-2xl 2xl:text-3xl tracking-[0.15em]"
                    }`}
                  >
                    Tam Anh
                  </h1>
                  <span 
                    className={`font-sans text-brand-primary font-medium uppercase tracking-[0.3em] xl:tracking-[0.4em] 2xl:tracking-[0.6em] transition-all duration-500 mt-1 ${
                      isScrolled ? "text-[0px] opacity-0 h-0 overflow-hidden mt-0" : "text-[8px] xl:text-[10px] opacity-100"
                    }`}
                  >
                    Lighting
                  </span>
               </Link>
            </div>

            {/* Right Nav (Desktop) */}
            <nav className="hidden xl:flex flex-1 justify-end items-center gap-4 2xl:gap-8">
              {SUB_NAV_RIGHT.map((item) => {
                if (item.type === "dropdown-location") {
                  return (
                    <div key={item.name} className="relative group py-4 cursor-pointer">
                      <span className={`${textColorClass} ${textHoverClass} text-[12px] 2xl:text-[13px] font-medium uppercase tracking-wider transition-colors flex items-center gap-1 whitespace-nowrap`}>
                        {item.name}
                        <MapPin className={`w-3 h-3 opacity-70 ${textHoverClass}`} />
                      </span>
                      <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                        <div className="absolute -top-4 left-0 w-full h-8 bg-transparent"></div>
                        <div className="w-[300px] bg-dark-surface/95 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl overflow-hidden">
                           <div className="text-white text-xs">Nội dung Showroom...</div>
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <Link 
                    key={item.name} 
                    href={item.path}
                    className={`${textColorClass} ${textHoverClass} text-[12px] 2xl:text-[13px] font-medium uppercase tracking-wider transition-colors relative group whitespace-nowrap`}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Actions (Search Icon Header) */}
            <div className="xl:hidden flex items-center justify-end gap-3 w-12">
               <button onClick={() => setIsSearchOpen(true)}>
                  <Search className={`${textColorClass} w-5 h-5`} />
               </button>
            </div>
          </div>
        </div>
      </header>

      {/* === 1. MOBILE OFF-CANVAS MENU === */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`} 
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <div 
        className={`fixed top-0 left-0 w-[85%] sm:w-[400px] h-full bg-white z-[61] shadow-2xl transition-transform duration-500 ease-out transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
         <div className="flex flex-col h-full overflow-y-auto">
            <div className="p-6 flex justify-between items-center border-b border-gray-100">
               <span className="text-lg font-bold uppercase tracking-widest">Menu</span>
               <button 
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="p-2 -mr-2 text-gray-500 hover:text-red-500 transition-colors"
               >
                 <X className="w-6 h-6" />
               </button>
            </div>
            <div className="flex-1 py-6 px-6 space-y-6">
              {MOBILE_NAV.map((item, idx) => (
                <div key={idx} className="group">
                  <Link 
                    href={item.path} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-xl font-medium text-gray-800 uppercase tracking-wide group-hover:text-brand-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 p-6 space-y-6">
                <div className="flex gap-4">
                    <button 
                        onClick={() => {
                            setIsMobileMenuOpen(false);
                            setTimeout(() => setIsSearchOpen(true), 300);
                        }}
                        className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-200 rounded bg-white text-sm font-medium uppercase tracking-wider text-gray-600 hover:border-brand-primary hover:text-brand-primary transition-all"
                    >
                        <Search className="w-4 h-4"/> Tìm kiếm
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-gray-200 rounded bg-white text-sm font-medium uppercase tracking-wider text-gray-600">
                        <Heart className="w-4 h-4"/> Yêu thích
                    </button>
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-3 text-gray-400 text-xs font-bold uppercase tracking-widest">
                        <Globe className="w-3 h-3" /> Ngôn ngữ
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        {Object.keys(LANGUAGE_MAP).map((code) => (
                        <button 
                            key={code} 
                            onClick={() => handleLanguageChange(code)}
                            className="py-2 text-center text-xs font-bold uppercase bg-white border border-gray-200 rounded text-gray-600 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all"
                        >
                            {code}
                        </button>
                        ))}
                    </div>
                </div>
            </div>
         </div>
      </div>

      {/* === 2. FULL SCREEN SEARCH OVERLAY === */}
      <div 
        className={`fixed inset-0 z-[70] bg-dark-bg/98 backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center ${
          isSearchOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <button 
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-6 right-6 md:top-10 md:right-10 p-2 text-white/50 hover:text-white hover:rotate-90 transition-all duration-500"
        >
            <X className="w-8 h-8 md:w-10 md:h-10" />
        </button>

        <div className="w-full max-w-3xl px-6 relative">
            <h2 className={`text-center text-brand-primary text-sm font-bold uppercase tracking-[0.3em] mb-8 transition-all duration-700 delay-100 ${isSearchOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                Tìm kiếm sản phẩm
            </h2>
            
            {/* Search Input Group */}
            <div className={`relative border-b-2 border-white/20 transition-all duration-700 delay-200 ${isSearchOpen ? "opacity-100 w-full" : "opacity-0 w-[80%]"}`}>
                <input 
                    ref={searchInputRef}
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Nhập từ khóa (ví dụ: Đèn chùm, Sofa...)"
                    className="w-full bg-transparent py-4 md:py-6 text-2xl md:text-4xl text-white placeholder-white/30 outline-none font-light text-center"
                />
                <button 
                    onClick={() => handleSearch()}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-white/50 hover:text-brand-primary transition-colors p-2"
                >
                    <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
                </button>
            </div>

            {/* Quick Suggestions */}
            <div className={`mt-8 text-center transition-all duration-700 delay-300 ${isSearchOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-4">Đề xuất phổ biến</p>
                <div className="flex flex-wrap justify-center gap-3">
                    {["Đèn Chùm", "Sofa Da", "Bàn Ăn", "Nội Thất Ý"].map((tag) => (
                        <button 
                            key={tag} 
                            onClick={() => handleSearch(tag)}
                            className="px-4 py-2 border border-white/10 rounded-full text-white/60 text-sm hover:border-brand-primary hover:text-brand-primary transition-all"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;