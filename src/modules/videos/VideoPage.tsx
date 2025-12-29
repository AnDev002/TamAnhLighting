"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, ArrowRight } from "lucide-react";
import { VIDEOS_MOCK, VIDEO_CATEGORIES } from "./data/videoData";
import VideoCard from "./components/VideoCard";
import VideoModal from "./components/VideoModal";

const VideoPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  // Lấy video Featured (video đầu tiên có flag featured)
  const featuredVideo = VIDEOS_MOCK.find(v => v.featured) || VIDEOS_MOCK[0];
  
  // Filter list (trừ video featured ra để không bị lặp, hoặc giữ tùy ý)
  const filteredVideos = VIDEOS_MOCK.filter(v => 
    v.id !== featuredVideo.id && 
    (activeCategory === "all" || v.category === activeCategory)
  );

  return (
    <div className="w-full bg-white min-h-screen">
      
      {/* --- 1. HERO FEATURED VIDEO (Dark Theme) --- */}
      <section className="relative w-full h-[80vh] bg-black text-white overflow-hidden group">
         {/* Background Thumbnail */}
         <div className="absolute inset-0 opacity-60 transition-opacity duration-700 group-hover:opacity-40">
            <Image 
               src={featuredVideo.thumbnail}
               alt={featuredVideo.title}
               fill
               className="object-cover"
               priority
            />
         </div>
         {/* Gradient Overlay */}
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
         
         {/* Content */}
         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
            <div className="animate-fade-up">
                <span className="inline-block border border-white/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
                   Featured Film
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin uppercase tracking-wide mb-8 max-w-4xl leading-tight">
                   {featuredVideo.title}
                </h1>
                
                {/* Big Play Button */}
                <button 
                  onClick={() => setPlayingVideoId(featuredVideo.youtubeId)}
                  className="flex items-center gap-4 mx-auto text-xs font-bold uppercase tracking-[0.2em] group/btn"
                >
                   <div className="w-16 h-16 rounded-full bg-[#c49b63] flex items-center justify-center text-white transition-transform duration-300 group-hover/btn:scale-110 shadow-[0_0_30px_rgba(196,155,99,0.4)]">
                      <Play size={24} className="ml-1 fill-white" />
                   </div>
                   <span className="group-hover/btn:text-[#c49b63] transition-colors">Watch Now</span>
                </button>
            </div>
         </div>
      </section>

      {/* --- 2. FILTER & LIST --- */}
      <section className="py-20 md:py-24 px-6 bg-white">
         <div className="container mx-auto max-w-[1600px]">
            
            {/* Header + Filter */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
               <div>
                  <h2 className="text-3xl font-light uppercase text-gray-900 mb-2">Latest Films</h2>
                  <div className="w-16 h-[1px] bg-[#c49b63]" />
               </div>

               {/* Categories Tab */}
               <div className="flex flex-wrap gap-6 md:gap-8">
                  {VIDEO_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`text-xs font-bold uppercase tracking-[0.15em] transition-colors ${
                        activeCategory === cat.id 
                        ? "text-black border-b border-black pb-1" 
                        : "text-gray-400 hover:text-[#c49b63]"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
               </div>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
               {filteredVideos.map((video) => (
                  <VideoCard 
                    key={video.id} 
                    data={video} 
                    onClick={setPlayingVideoId} 
                  />
               ))}
            </div>

            {/* Empty State */}
            {filteredVideos.length === 0 && (
               <div className="py-20 text-center text-gray-400 font-light">
                  No videos found in this category.
               </div>
            )}
         </div>
      </section>

      {/* --- 3. NEWSLETTER / SUBSCRIBE (Optional) --- */}
      <section className="py-24 bg-[#f9f9f9]">
         <div className="container mx-auto max-w-lg text-center px-6">
            <h3 className="text-xl font-light uppercase text-gray-900 mb-4">
               Don't Miss an Episode
            </h3>
            <p className="text-gray-500 text-sm font-light mb-8">
               Đăng ký để nhận thông báo về các bộ sưu tập mới và video tour độc quyền.
            </p>
            <div className="flex border-b border-gray-300 pb-2">
               <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="flex-1 bg-transparent outline-none text-sm placeholder:text-gray-400"
               />
               <button className="text-xs font-bold uppercase tracking-widest text-black hover:text-[#c49b63] transition-colors">
                  Subscribe
               </button>
            </div>
         </div>
      </section>

      {/* --- GLOBAL VIDEO MODAL --- */}
      <VideoModal 
         isOpen={!!playingVideoId} 
         onClose={() => setPlayingVideoId(null)} 
         youtubeId={playingVideoId || ""} 
      />

    </div>
  );
};

export default VideoPage;