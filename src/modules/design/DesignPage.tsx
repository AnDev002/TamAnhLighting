"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Ruler, PenTool, Layers, ArrowRight, MousePointer2, Move, Maximize2 } from "lucide-react";
import { DESIGN_STEPS } from "./data/designData";

const DesignPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="w-full min-h-screen bg-[#f4f4f4] text-[#1a1a1a] font-sans selection:bg-brand-orange selection:text-white pt-20">
      
      {/* --- SECTION 1: TECHNICAL HERO (CAD INTERFACE) --- */}
      <section className="relative h-[85vh] w-full border-b border-gray-300 overflow-hidden bg-blueprint-grid">
        
        {/* Decorative Rulers (Thước đo giả lập) */}
        <div className="absolute top-0 left-0 w-full h-6 bg-white border-b border-gray-300 flex text-[8px] text-gray-400 font-mono items-end px-2">
            {Array.from({ length: 50 }).map((_, i) => (
                <div key={i} className="flex-1 border-r border-gray-200 h-2 flex justify-end items-start pt-1 relative">
                    {i % 5 === 0 && <span className="absolute -top-1 left-1">{i * 100}</span>}
                </div>
            ))}
        </div>
        <div className="absolute top-0 left-0 h-full w-6 bg-white border-r border-gray-300 flex flex-col text-[8px] text-gray-400 font-mono items-end py-2 z-10">
             {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className="flex-1 w-full border-b border-gray-200 flex justify-start items-center relative">
                    {i % 5 === 0 && <span className="absolute left-1 rotate-90 origin-left">{i * 100}</span>}
                </div>
            ))}
        </div>

        {/* Main Content Center */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-0 pointer-events-none">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="text-center"
            >
                <div className="flex items-center justify-center gap-4 mb-4 text-brand-orange">
                    <Move className="w-6 h-6 animate-pulse" />
                    <span className="font-mono text-xs tracking-[0.5em] uppercase">Lighting Architecture</span>
                </div>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-800 to-gray-400 opacity-80">
                    BLUEPRINT
                </h1>
                <p className="mt-4 font-mono text-sm md:text-base text-gray-500 max-w-xl mx-auto">
                    /SYS.ROOT/DESIGN/LIGHTING_SCHEMATIC_V2.0 <br/>
                    Khởi tạo không gian từ những nét vẽ kỹ thuật chính xác nhất.
                </p>
            </motion.div>
        </div>

        {/* Animated Lines (Vẽ nét) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
            <motion.path
                d="M 100 100 L 300 100 L 300 400"
                fill="transparent"
                stroke="#e78720"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
            />
             <motion.circle
                cx="300" cy="400" r="5"
                fill="#e78720"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2 }}
            />
             {/* Thêm nhiều đường vẽ SVG khác tại đây */}
        </svg>

        {/* Floating Specs Box */}
        <div className="absolute bottom-10 right-10 bg-white/80 backdrop-blur border border-gray-300 p-4 w-64 font-mono text-xs shadow-card">
            <div className="flex justify-between border-b border-gray-200 pb-2 mb-2">
                <span className="font-bold">PROJECT:</span>
                <span>TAM ANH HQ</span>
            </div>
             <div className="flex justify-between text-gray-500 mb-1">
                <span>SCALE:</span>
                <span>1:50</span>
            </div>
            <div className="flex justify-between text-gray-500 mb-1">
                <span>GRID:</span>
                <span>ON</span>
            </div>
            <div className="flex justify-between text-brand-orange font-bold">
                <span>STATUS:</span>
                <span className="animate-pulse">RENDERING...</span>
            </div>
        </div>
      </section>

      {/* --- SECTION 2: THE PROCESS (TAB SWITCHING with DRAWING FEEL) --- */}
      <section className="py-20 px-6 border-b border-gray-300 bg-white">
        <div className="container mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Left: Navigation */}
                <div className="lg:col-span-4 flex flex-col justify-center space-y-8">
                    <h2 className="text-3xl font-bold uppercase tracking-wide mb-8">Quy trình <br/> Thiết kế</h2>
                    <div className="space-y-4">
                        {DESIGN_STEPS.map((step, index) => (
                            <button
                                key={step.id}
                                onClick={() => setActiveStep(index)}
                                className={`w-full text-left p-6 border transition-all duration-300 group relative overflow-hidden ${
                                    activeStep === index 
                                    ? "border-black bg-black text-white shadow-xl" 
                                    : "border-gray-200 hover:border-brand-orange hover:text-brand-orange bg-white"
                                }`}
                            >
                                <div className="flex justify-between items-center relative z-10">
                                    <span className={`font-mono text-xs font-bold ${activeStep === index ? "text-brand-orange" : "text-gray-400"}`}>
                                        {step.id}
                                    </span>
                                    {activeStep === index && <ArrowRight className="w-4 h-4 text-brand-orange" />}
                                </div>
                                <h3 className="text-xl font-bold mt-2 relative z-10">{step.title}</h3>
                                <p className={`text-xs mt-1 relative z-10 ${activeStep === index ? "text-gray-400" : "text-gray-500"}`}>
                                    {step.sub}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right: Display Area (Interactive Blueprint) */}
                <div className="lg:col-span-8 relative h-[500px] lg:h-[600px] border border-gray-200 bg-[#f8f9fa] overflow-hidden group">
                    {/* Background Grid cho khu vực hiển thị */}
                    <div className="absolute inset-0 bg-blueprint-grid opacity-50"></div>
                    
                    {/* Content Transition */}
                    <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 p-12 flex flex-col justify-center"
                    >
                         {/* Icon background chìm */}
                         <div className="absolute right-[-50px] bottom-[-50px] text-gray-100 rotate-[-15deg]">
                            {activeStep === 0 && <PenTool size={400} strokeWidth={0.5} />}
                            {activeStep === 1 && <Ruler size={400} strokeWidth={0.5} />}
                            {activeStep === 2 && <Layers size={400} strokeWidth={0.5} />}
                         </div>

                         <div className="relative z-10 max-w-lg">
                            <span className="inline-block px-3 py-1 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                                Phase {DESIGN_STEPS[activeStep].id}
                            </span>
                            <h3 className="text-4xl md:text-5xl font-light mb-6 text-gray-800">
                                {DESIGN_STEPS[activeStep].desc}
                            </h3>
                            
                            {/* Specs Table */}
                            <div className="grid grid-cols-3 gap-4 border-t border-gray-300 pt-6">
                                {DESIGN_STEPS[activeStep].specs.map((spec, idx) => (
                                    <div key={idx} className="flex flex-col">
                                        <span className="text-[10px] text-gray-400 uppercase font-mono mb-1">Param {idx + 1}</span>
                                        <span className="font-mono text-sm font-bold text-black">{spec}</span>
                                    </div>
                                ))}
                            </div>
                         </div>
                    </motion.div>

                    {/* Corner Markers */}
                    <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-black"></div>
                    <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-black"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-black"></div>
                    <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-black"></div>
                </div>
            </div>
        </div>
      </section>

      {/* --- SECTION 3: BEFORE & AFTER (BLUEPRINT vs REALITY) --- */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto max-w-[1400px] px-6 text-center mb-16 relative z-10">
            <span className="text-brand-orange font-mono text-xs tracking-widest uppercase">/ Project Showcase</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">TỪ BẢN VẼ ĐẾN HIỆN THỰC</h2>
        </div>

        {/* Horizontal Scroll / Gallery */}
        <div className="w-full overflow-x-auto no-scrollbar pl-6 md:pl-[calc((100vw-1400px)/2)] pb-12">
            <div className="flex gap-8 w-max">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="relative w-[80vw] md:w-[600px] aspect-[4/3] group cursor-pointer border border-white/20 hover:border-brand-orange transition-colors">
                        {/* Layer 1: Blueprint (Hiện mặc định) */}
                        <div className="absolute inset-0 bg-[#0f172a] p-8 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                            {/* Giả lập hình vẽ vector */}
                            <div className="w-full h-full border border-dashed border-white/30 rounded-lg flex items-center justify-center">
                                <span className="font-mono text-white/50">BLUEPRINT_LAYER_{item}.DWG</span>
                            </div>
                            <div className="absolute bottom-4 right-4 font-mono text-xs text-brand-orange">HOVER TO RENDER</div>
                        </div>

                        {/* Layer 2: Real Image (Hiện khi Hover) */}
                        <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
                            {/* Thay src bằng ảnh thật */}
                            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center text-gray-400">
                                <span>RENDERED VIEW</span>
                            </div>
                        </div>
                        
                        {/* Technical Overlay Lines */}
                        <div className="absolute top-0 left-1/2 h-full w-[1px] bg-white/10 group-hover:bg-brand-orange/50 transition-colors"></div>
                        <div className="absolute left-0 top-1/2 w-full h-[1px] bg-white/10 group-hover:bg-brand-orange/50 transition-colors"></div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- CTA SECTION: START A PROJECT --- */}
      <section className="py-20 bg-white border-t border-dashed border-gray-300">
         <div className="container mx-auto text-center">
            <Maximize2 className="w-12 h-12 text-black mx-auto mb-6" strokeWidth={1} />
            <h2 className="text-3xl font-bold mb-6">BẠN CÓ DỰ ÁN CẦN TƯ VẤN?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-10">
                Hãy để các kiến trúc sư ánh sáng của Tam Anh tính toán thông số kỹ thuật tối ưu nhất cho không gian của bạn.
            </p>
            <button className="px-10 py-4 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-brand-orange transition-colors duration-300">
                Gửi yêu cầu thiết kế
            </button>
         </div>
      </section>

    </div>
  );
};

export default DesignPage;