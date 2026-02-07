"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Calendar, User, Grid } from "lucide-react";
import { PROJECTS_MOCK, ProjectType } from "./data/projectData";
import { notFound } from "next/navigation";

interface ProjectDetailPageProps {
  id: string;
}

const ProjectDetailPage = ({ id }: ProjectDetailPageProps) => {
  const [project, setProject] = useState<ProjectType | null>(null);
  const [nextProject, setNextProject] = useState<ProjectType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const foundProject = PROJECTS_MOCK.find((p) => p.id === id);
    if (foundProject) {
      setProject(foundProject);
      
      // Calculate next project for navigation
      const currentIndex = PROJECTS_MOCK.findIndex((p) => p.id === id);
      const nextIndex = (currentIndex + 1) % PROJECTS_MOCK.length;
      setNextProject(PROJECTS_MOCK[nextIndex]);
    }
    setLoading(false);
  }, [id]);

  if (!loading && !project) {
    return notFound();
  }

  if (loading || !project) return <div className="h-screen bg-white" />;

  return (
    <div className="w-full bg-white min-h-screen font-sans text-[#1a1a1a]">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative w-full h-[85vh] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20">
            <div className="container mx-auto max-w-[1400px]">
                <Link href="/projects" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors text-sm uppercase tracking-widest">
                    <ArrowLeft size={16} /> Back to Projects
                </Link>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin text-white uppercase tracking-wide leading-none animate-fade-in-up">
                    {project.title}
                </h1>
                <div className="mt-6 flex flex-wrap gap-6 text-white/80 font-light text-sm md:text-base animate-fade-in-up delay-100">
                     <span className="flex items-center gap-2"><MapPin size={16} className="text-[#c49b63]" /> {project.location}</span>
                     <span className="w-px h-5 bg-white/30 hidden md:block"></span>
                     <span className="flex items-center gap-2"><Calendar size={16} className="text-[#c49b63]" /> {project.year}</span>
                </div>
            </div>
        </div>
      </section>

      {/* --- 2. PROJECT INFO GRID --- */}
      <section className="border-b border-gray-100 bg-white sticky top-0 z-20 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto max-w-[1400px] px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 py-8 md:py-10 gap-8">
                <div>
                    <span className="block text-[#c49b63] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Client</span>
                    <span className="text-lg md:text-xl font-light">{project.client}</span>
                </div>
                <div>
                    <span className="block text-[#c49b63] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Service</span>
                    <span className="text-lg md:text-xl font-light">{project.service}</span>
                </div>
                 <div>
                    <span className="block text-[#c49b63] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Area</span>
                    <span className="text-lg md:text-xl font-light">{project.area}</span>
                </div>
                 <div>
                    <span className="block text-[#c49b63] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Category</span>
                    <span className="text-lg md:text-xl font-light">{project.categoryLabel}</span>
                </div>
            </div>
        </div>
      </section>

      {/* --- 3. NARRATIVE / STORY --- */}
      <section className="py-20 md:py-32 bg-white">
         <div className="container mx-auto max-w-[1200px] px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                {/* Intro / Description */}
                <div className="lg:col-span-4">
                    <h3 className="text-2xl font-light uppercase tracking-wide mb-6">The Concept</h3>
                    <div className="w-12 h-[2px] bg-[#c49b63] mb-8"></div>
                </div>
                <div className="lg:col-span-8">
                     <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed mb-12">
                        {project.description}
                     </p>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <h4 className="font-medium text-gray-900 mb-4">The Challenge</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{project.challenge}</p>
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-900 mb-4">The Solution</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{project.solution}</p>
                        </div>
                     </div>
                </div>
            </div>
         </div>
      </section>

      {/* --- 4. GALLERY SECTION --- */}
      <section className="py-12 bg-[#f8f8f8]">
         <div className="container mx-auto max-w-[1400px] px-6">
            <h3 className="text-center text-[#c49b63] text-xs font-bold uppercase tracking-[0.4em] mb-12">Project Gallery</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Large First Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden md:col-span-2 group">
                    <Image 
                        src={project.gallery[0]} 
                        alt="Gallery 1" 
                        fill 
                        className="object-cover transition-transform duration-[1.5s] group-hover:scale-105" 
                    />
                </div>
                
                {/* Secondary Images */}
                {project.gallery.slice(1).map((img, idx) => (
                    <div key={idx} className="relative aspect-[3/4] md:aspect-[4/3] w-full overflow-hidden group">
                        <Image 
                            src={img} 
                            alt={`Gallery ${idx + 2}`} 
                            fill 
                            className="object-cover transition-transform duration-[1.5s] group-hover:scale-105" 
                        />
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* --- 5. NEXT PROJECT NAVIGATOR --- */}
      {nextProject && (
          <section className="py-24 md:py-32 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 text-center">
                <span className="text-gray-400 text-xs uppercase tracking-[0.2em] mb-4 block">Next Project</span>
                <Link href={`/projects/${nextProject.id}`} className="group inline-flex flex-col items-center">
                    <h2 className="text-4xl md:text-6xl font-thin uppercase tracking-wide text-[#1a1a1a] group-hover:text-[#c49b63] transition-colors duration-500">
                        {nextProject.title}
                    </h2>
                    <div className="mt-6 w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-[#c49b63] group-hover:border-[#c49b63] group-hover:text-white transition-all duration-300">
                        <ArrowRight size={24} />
                    </div>
                </Link>
            </div>
          </section>
      )}

    </div>
  );
};

export default ProjectDetailPage;