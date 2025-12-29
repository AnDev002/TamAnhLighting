"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROJECT_CATEGORIES, PROJECTS_MOCK } from "./data/projectData";
import ProjectItem from "./components/ProjectItem";

const ProjectPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all" 
    ? PROJECTS_MOCK 
    : PROJECTS_MOCK.filter(p => p.category === activeCategory);

  return (
    <div className="w-full bg-white min-h-screen">
      
      {/* --- 1. HERO SECTION: TEXT ONLY --- 
          Khác với Product có ảnh nền to, Project dùng Typography chủ đạo để tạo sự khác biệt (Clean look) */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-24 px-6 bg-[#f8f8f8]">
         <div className="container mx-auto max-w-[1400px] text-center">
            <span className="text-[#c49b63] text-xs font-bold tracking-[0.4em] uppercase mb-6 block animate-fade-in-up">
                Selected Works
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin text-[#1a1a1a] uppercase tracking-wide mb-8 animate-fade-in-up delay-100">
                Iconic Projects
            </h1>
            <p className="max-w-2xl mx-auto text-gray-500 font-light text-base md:text-lg leading-relaxed animate-fade-in-up delay-200">
                Hành trình kiến tạo những không gian sống đẳng cấp. Mỗi dự án là một câu chuyện riêng biệt về ánh sáng, cảm xúc và sự tinh tế.
            </p>
         </div>
      </section>

      {/* --- 2. FILTER: CENTERED & MINIMAL --- */}
      <section className="bg-white sticky top-[70px] z-30 py-8 border-b border-gray-50/50 backdrop-blur-md bg-white/90">
         <div className="container mx-auto flex justify-center flex-wrap gap-6 md:gap-12 px-6">
            {PROJECT_CATEGORIES.map((cat) => (
                <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 px-4 py-2 rounded-full border ${
                        activeCategory === cat.id 
                        ? "bg-black text-white border-black" 
                        : "bg-transparent text-gray-400 border-transparent hover:border-gray-200 hover:text-black"
                    }`}
                >
                    {cat.label}
                </button>
            ))}
         </div>
      </section>

      {/* --- 3. PROJECT LIST (ZIG-ZAG) --- */}
      <section className="py-12 md:py-20 bg-white">
         <div className="container mx-auto max-w-[1400px] px-6">
            <div className="flex flex-col">
                {filteredProjects.map((project, index) => (
                    <ProjectItem key={project.id} data={project} index={index} />
                ))}

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 text-gray-400 font-light">
                        Hiện chưa có dự án nào thuộc danh mục này.
                    </div>
                )}
            </div>
         </div>
      </section>

      {/* --- 4. PARTNER LOGOS (Optional - Tăng uy tín cho trang dự án) --- */}
      <section className="py-24 border-t border-gray-100">
        <div className="container mx-auto px-6 text-center">
            <p className="text-gray-400 text-xs uppercase tracking-[0.3em] mb-12">Trusted Partners</p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Thay thế bằng Logo đối tác thật */}
                {['Marriott', 'Hilton', 'Vingroup', 'SunGroup'].map((brand) => (
                    <span key={brand} className="text-2xl font-serif text-gray-300 font-bold">{brand}</span>
                ))}
            </div>
        </div>
      </section>

    </div>
  );
};

export default ProjectPage;