export const VIDEO_CATEGORIES = [
  { id: "all", label: "All Films" },
  { id: "brand", label: "Brand Story" },
  { id: "tour", label: "Showroom Tour" },
  { id: "expert", label: "Expert Talk" },
];

export const VIDEOS_MOCK = [
  {
    id: "1",
    youtubeId: "LXb3EKWsInQ", // ID ví dụ (4K Nature)
    title: "The Art of Light: Behind the Scenes",
    category: "brand",
    categoryLabel: "Brand Story",
    duration: "03:45",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop",
    featured: true, // Video này sẽ hiện ở Hero
    description: "Hành trình tìm kiếm vẻ đẹp hoàn mỹ từ những nghệ nhân chế tác đèn hàng đầu Châu Âu."
  },
  {
    id: "2",
    youtubeId: "7WTp87884qM",
    title: "Summer 2024 Collection Launch",
    category: "tour",
    categoryLabel: "Showroom Tour",
    duration: "05:12",
    thumbnail: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1000&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "3",
    youtubeId: "ysz5S6P_bs8",
    title: "Architectural Lighting Tips",
    category: "expert",
    categoryLabel: "Expert Talk",
    duration: "12:30",
    thumbnail: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "4",
    youtubeId: "ysz5S6P_bs8", // Demo ID
    title: "EuroLight: A Decade of Excellence",
    category: "brand",
    categoryLabel: "Brand Story",
    duration: "08:20",
    thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "5",
    youtubeId: "ysz5S6P_bs8",
    title: "Private Villa Walkthrough",
    category: "tour",
    categoryLabel: "Showroom Tour",
    duration: "04:15",
    thumbnail: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop",
    featured: false,
  },
];