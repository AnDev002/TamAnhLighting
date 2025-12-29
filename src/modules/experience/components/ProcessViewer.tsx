"use client";

import React, { useState } from "react";
import Image from "next/image";
import { EXPERIENCE_STEPS } from "../data/experienceData";
import { ArrowUpRight } from "lucide-react";

const ProcessViewer = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-[80vh] w-full border-t border-gray-200">
      
      {/* --- LEFT: LIST --- */}
      <div className="w-full lg:w-1/2 flex flex-col">
        {EXPERIENCE_STEPS.map((step, index) => (
          <div
            key={step.id}
            onMouseEnter={() => setActiveIndex(index)}
            className={`group relative flex-1 flex flex-col justify-center px-8 py-10 lg:px-16 border-b border-gray-100 cursor-pointer transition-colors duration-500 ${
              activeIndex === index ? "bg-black text-white" : "bg-white text-black hover:bg-gray-50"
            }`}
          >
            <div className="flex items-baseline justify-between mb-4">
               <span className={`text-5xl font-thin opacity-30 group-hover:opacity-100 transition-opacity ${activeIndex === index ? "text-[#c49b63]" : "text-gray-300"}`}>
                  {step.id}
               </span>
               <ArrowUpRight className={`w-6 h-6 transition-transform duration-300 ${activeIndex === index ? "rotate-45 text-[#c49b63]" : "opacity-0"}`} />
            </div>
            
            <h3 className="text-2xl font-light uppercase tracking-wide mb-2">
               {step.title}
            </h3>
            
            {/* Description chỉ hiện khi Active trên Desktop, luôn hiện mobile */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0 lg:max-h-0"
            }`}>
               <p className="text-sm font-light leading-relaxed opacity-70 max-w-md">
                 {step.description}
               </p>
            </div>
          </div>
        ))}
      </div>

      {/* --- RIGHT: IMAGE DISPLAY --- */}
      <div className="hidden lg:block w-1/2 relative h-full overflow-hidden bg-gray-900">
         {EXPERIENCE_STEPS.map((step, index) => (
            <div 
               key={step.id}
               className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
               }`}
            >
               <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
               />
               <div className="absolute inset-0 bg-black/20" /> {/* Overlay nhẹ */}
            </div>
         ))}
         
         {/* Static Text Overlay */}
         <div className="absolute bottom-12 left-12 z-20 text-white">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#c49b63] mb-2 block">
               The EuroLight Standard
            </span>
            <p className="text-3xl font-light italic">
               "We don't just sell lights,<br/> we curate atmosphere."
            </p>
         </div>
      </div>
    </div>
  );
};

export default ProcessViewer;