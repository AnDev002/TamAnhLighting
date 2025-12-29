// src/components/layout/Footer.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail 
} from "lucide-react";

const SOCIAL_LINKS = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Linkedin, href: "#" },
];

const FOOTER_LINKS = {
  products: [
    { label: "Đèn Chùm Pha Lê", href: "/products/crystal" },
    { label: "Đèn Thả Nghệ Thuật", href: "/products/pendant" },
    { label: "Smart Lighting", href: "/products/smart" },
    { label: "Architectural Light", href: "/products/architectural" },
    { label: "Bộ Sưu Tập 2024", href: "/collections/2024" },
  ],
  support: [
    { label: "Chính Sách Bảo Hành", href: "/policy/warranty" },
    { label: "Vận Chuyển & Lắp Đặt", href: "/policy/shipping" },
    { label: "Hướng Dẫn Mua Hàng", href: "/guide" },
    { label: "Catalogue Download", href: "/catalogue" },
    { label: "Dự Án Doanh Nghiệp", href: "/b2b" },
  ]
};

const Footer = () => {
  return (
    <footer className="w-full flex flex-col bg-[#0f0f0f] text-white overflow-hidden font-sans">
      
      {/* --- 1. PRE-FOOTER: CTA SECTIONS (Phong cách Immersive) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-[400px] md:h-[350px]">
        {/* Box 1: Consultation */}
        <div className="relative group overflow-hidden cursor-pointer border-r border-white/5">
          <Image 
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop" 
            alt="Tư vấn chiếu sáng" 
            fill
            className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-60 group-hover:opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 z-10">
            <h3 className="text-2xl md:text-3xl font-light uppercase tracking-[0.2em] text-white group-hover:text-[#c49b63] transition-colors duration-500">
              Tư Vấn Thiết Kế
            </h3>
            <p className="text-white/60 text-sm font-light max-w-sm text-center mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
              Đội ngũ chuyên gia ánh sáng sẵn sàng kiến tạo không gian sống đẳng cấp cho bạn.
            </p>
            <button className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] border-b border-[#c49b63] pb-1 hover:text-[#c49b63] transition-colors">
              Đặt lịch hẹn <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Box 2: Partner */}
        <div className="relative group overflow-hidden cursor-pointer">
          <Image 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop" 
            alt="Đăng ký đại lý" 
            fill
            className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-60 group-hover:opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 z-10">
            <h3 className="text-2xl md:text-3xl font-light uppercase tracking-[0.2em] text-white group-hover:text-[#c49b63] transition-colors duration-500">
              Trở Thành Đối Tác
            </h3>
            <p className="text-white/60 text-sm font-light max-w-sm text-center mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
              Hợp tác cùng EuroLight để mang kiệt tác ánh sáng đến mọi công trình Việt.
            </p>
            <button className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] border-b border-[#c49b63] pb-1 hover:text-[#c49b63] transition-colors">
              Đăng ký ngay <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* --- 2. MAIN FOOTER --- */}
      <div className="container mx-auto max-w-[1600px] px-6 pt-20 pb-12">
        
        {/* Newsletter Section (Minimalist Line) */}
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-16 mb-16 gap-8">
           <div className="max-w-xl">
              <span className="text-[#c49b63] text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Newsletter</span>
              <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">
                Đăng ký nhận tin tức & <br/> xu hướng thiết kế mới nhất.
              </h2>
           </div>
           <div className="w-full md:w-auto flex-1 max-w-md">
              <form className="flex flex-col relative group">
                <input 
                  type="email" 
                  placeholder="Địa chỉ Email của bạn" 
                  className="bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#c49b63] transition-colors w-full text-lg font-light"
                />
                <button type="submit" className="absolute right-0 bottom-4 text-white/50 hover:text-[#c49b63] transition-colors uppercase text-xs font-bold tracking-widest">
                  Gửi đi
                </button>
              </form>
           </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Col 1: Brand & Social */}
          <div className="flex flex-col gap-8">
             <div>
               <Link href="/" className="inline-block">
                <span className="text-3xl font-bold uppercase tracking-[0.15em] text-white">
                    Euro<span className="text-[#c49b63]">Light</span>
                </span>
               </Link>
               <p className="mt-6 text-white/50 text-sm font-light leading-7 max-w-xs">
                 Đánh thức không gian sống bằng nghệ thuật chiếu sáng đỉnh cao từ Châu Âu. Tinh tế, sang trọng và độc bản.
               </p>
             </div>
             <div className="flex gap-4">
               {SOCIAL_LINKS.map((item, idx) => (
                 <a 
                   key={idx} 
                   href={item.href} 
                   className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full text-white/60 hover:text-white hover:border-[#c49b63] hover:bg-[#c49b63] transition-all duration-300"
                 >
                   <item.icon size={18} strokeWidth={1.5} />
                 </a>
               ))}
             </div>
          </div>

          {/* Col 2: Products */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-8">Sản Phẩm</h4>
            <ul className="flex flex-col gap-4">
              {FOOTER_LINKS.products.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 text-[15px] font-light hover:text-[#c49b63] hover:pl-2 transition-all duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-[#c49b63] group-hover:w-3 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Support */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-8">Hỗ Trợ</h4>
            <ul className="flex flex-col gap-4">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 text-[15px] font-light hover:text-[#c49b63] hover:pl-2 transition-all duration-300 flex items-center gap-2 group">
                     <span className="w-0 h-[1px] bg-[#c49b63] group-hover:w-3 transition-all duration-300"></span>
                     {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="flex flex-col gap-8">
             <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Liên Hệ</h4>
             
             {/* Showroom 1 */}
             <div className="flex gap-4 group">
                <MapPin className="text-[#c49b63] shrink-0 mt-1" size={20} strokeWidth={1.5} />
                <div>
                   <span className="block text-white font-medium uppercase text-xs tracking-wider mb-1 opacity-80 group-hover:opacity-100 transition-opacity">Hà Nội Headquaters</span>
                   <p className="text-white/60 text-sm font-light leading-relaxed">02 Nguyễn Thái Học, Ba Đình, Hà Nội</p>
                </div>
             </div>

             {/* Showroom 2 */}
             <div className="flex gap-4 group">
                <MapPin className="text-[#c49b63] shrink-0 mt-1" size={20} strokeWidth={1.5} />
                <div>
                   <span className="block text-white font-medium uppercase text-xs tracking-wider mb-1 opacity-80 group-hover:opacity-100 transition-opacity">Sài Gòn Flagship</span>
                   <p className="text-white/60 text-sm font-light leading-relaxed">199D Nguyễn Văn Hưởng, Thảo Điền, TP.HCM</p>
                </div>
             </div>

             {/* Phone & Mail */}
             <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
                <a href="tel:1800282806" className="flex items-center gap-4 text-white/60 hover:text-white transition-colors group">
                   <Phone size={18} strokeWidth={1.5} />
                   <span className="text-lg text-white font-light group-hover:text-[#c49b63] transition-colors">1800 28 28 06</span>
                </a>
                <a href="mailto:info@eurolight.vn" className="flex items-center gap-4 text-white/60 hover:text-white transition-colors group">
                   <Mail size={18} strokeWidth={1.5} />
                   <span className="text-sm font-light group-hover:text-[#c49b63] transition-colors">info@eurolight.vn</span>
                </a>
             </div>
          </div>

        </div>
      </div>

      {/* --- 3. BOTTOM BAR --- */}
      <div className="border-t border-white/5 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-[1600px] px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-white/30 text-xs uppercase tracking-widest font-medium">
             © 2024 Eurolight. Design by <span className="text-white/50">Lão Làng Team</span>.
           </p>
           <div className="flex gap-8 text-white/30 text-xs uppercase tracking-widest font-medium">
              <Link href="#" className="hover:text-[#c49b63] transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-[#c49b63] transition-colors">Terms of Use</Link>
              <Link href="#" className="hover:text-[#c49b63] transition-colors">Sitemap</Link>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;