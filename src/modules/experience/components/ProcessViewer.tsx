"use client";

import React, { useState } from "react";
import { EXPERIENCE_STEPS } from "../data/experienceData"; // Đảm bảo đường dẫn đúng
import { ArrowUpRight } from "lucide-react";
import ImageFallback from "@/components/ui/ImageFallback";

const ProcessViewer = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-[80vh] w-full border-t border-gray-200">
      
      {/* --- LEFT: LIST --- */}
      <div className="w-full lg:w-1/2 flex flex-col">
        {EXPERIENCE_STEPS.map((step, index) => {
          const isActive = activeIndex === index;
          
          return (
            <div
              key={step.id}
              onMouseEnter={() => setActiveIndex(index)}
              // Thay đổi logic background và border
              className={`group relative flex-1 flex flex-col justify-center px-8 py-10 lg:px-16 border-b border-gray-100 cursor-pointer transition-all duration-500 ease-in-out ${
                isActive 
                  ? "bg-black" // Active: Nền đen
                  : "bg-white hover:bg-gray-50" // Inactive: Nền trắng
              }`}
            >
              <div className="flex items-baseline justify-between mb-4">
                 {/* FIX LỖI INDEX: 
                    - Bỏ opacity-30 để không bị mờ.
                    - Inactive: text-gray-300 (xám nhạt nhưng rõ)
                    - Active: màu vàng thương hiệu
                 */}
                 <span className={`text-5xl font-thin transition-colors duration-500 ${
                    isActive ? "text-[#c49b63]" : "text-gray-300"
                 }`}>
                   {step.id}
                 </span>

                 <ArrowUpRight className={`w-6 h-6 transition-all duration-500 ${
                    isActive ? "rotate-45 text-[#c49b63] opacity-100" : "opacity-0"
                 }`} />
              </div>
              
              {/* FIX LỖI TITLE:
                  - Active: Chuyển sang màu trắng và tăng độ đậm (font-medium) để nổi bật trên nền đen.
                  - Inactive: Màu đen đậm (gray-900) để dễ đọc trên nền trắng.
              */}
              <h3 className={`text-2xl uppercase tracking-wide mb-2 transition-colors duration-500 ${
                  isActive ? "text-white font-medium" : "text-gray-900 font-light"
              }`}>
                 {step.title}
              </h3>
              
              {/* Description Wrapper */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                 isActive ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
              }`}>
                 <p className="text-sm font-light leading-relaxed text-gray-400 max-w-md">
                   {step.description}
                 </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* --- RIGHT: IMAGE DISPLAY (Giữ nguyên logic cũ vì đã ổn) --- */}
      <div className="hidden lg:block w-1/2 relative h-full overflow-hidden bg-gray-900">
         {EXPERIENCE_STEPS.map((step, index) => (
            <div 
               key={step.id}
               className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
               }`}
            >
               {/* Thêm fallbackType="architecture" hoặc "interior" nếu muốn ảnh lỗi đẹp hơn */}
               <ImageFallback
                  src={step.image}
                  alt={step.title}
                  fill
                  fallbackType="interior" 
                  className="object-cover"
               />
               <div className="absolute inset-0 bg-black/20" />
            </div>
         ))}
         
         {/* Static Text Overlay */}
         <div className="absolute bottom-12 left-12 z-20 text-white pointer-events-none">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#c49b63] mb-2 block">
               The EuroLight Standard
            </span>
            <p className="text-3xl font-light italic">
               &quot;We don&apos;t just sell lights,<br/> we curate atmosphere.&quot;
            </p>
         </div>
      </div>
    </div>
  );
};

export default ProcessViewer;