// src/modules/home/data/heroData.ts

// --- 1. HERO SLIDES (Carousel Ảnh - Đã tối ưu cho Web Đèn) ---
export const HERO_SLIDES = [
  {
    id: 1,
    // Ảnh đèn chùm sang trọng, nền tối làm nổi bật ánh sáng
    src: "https://images.unsplash.com/photo-1540932296774-324f5f6d2c85?q=80&w=2000&auto=format&fit=crop",
    alt: "Đèn chùm pha lê cao cấp",
    title: "Tuyệt Tác Ánh Sáng 2024",
    label: "Luxury Collection",
    description: "Bộ sưu tập đèn chùm pha lê thủ công, nâng tầm đẳng cấp cho không gian phòng khách của bạn.",
    ctaLabel: "Khám Phá Ngay",
    ctaLink: "/shop/luxury-lights",
    theme: "dark", 
  },
  {
    id: 2,
    // Ảnh đèn bàn hiện đại, phong cách tối giản
    src: "https://images.unsplash.com/photo-1507473888900-52e1adad54cd?q=80&w=2000&auto=format&fit=crop",
    alt: "Đèn hiện đại tối giản",
    title: "Modern & Minimalist",
    label: "Xu Hướng Mới",
    description: "Thiết kế tối giản, công năng tối đa. Giải pháp ánh sáng thông minh cho ngôi nhà hiện đại.",
    ctaLabel: "Xem Chi Tiết",
    ctaLink: "/shop/modern",
    theme: "light",
  },
  {
    id: 3,
    // Ảnh không gian ấm cúng với nhiều loại đèn decor
    src: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=2000&auto=format&fit=crop",
    alt: "Lễ hội ánh sáng - Sale",
    title: "Lễ Hội Ánh Sáng",
    label: "Season Sale 50%",
    description: "Cơ hội sở hữu những mẫu đèn thả trần và đèn cây độc đáo với mức giá ưu đãi nhất năm.",
    ctaLabel: "Săn Deal Ngay",
    ctaLink: "/shop/sale",
    theme: "dark",
  },
];

// --- 2. SYMBOLIC PROJECTS (Carousel Video) ---
// Tôi giữ nguyên logic video nhưng cập nhật lại Text để hợp với lighting projects
const WORKING_VIDEO_URL = "https://videos.pexels.com/video-files/7578546/7578546-uhd_2560_1440_30fps.mp4";

export const SYMBOLIC_PROJECTS = [
  {
    id: 1,
    video: WORKING_VIDEO_URL,
    label: "Dự án tiêu biểu",
    title: "Hệ thống chiếu sáng The Coral Villa",
    desc: "Giải pháp ánh sáng thông minh (Smart Lighting) kết hợp kiến trúc đương đại."
  },
  {
    id: 2,
    video: WORKING_VIDEO_URL,
    label: "Công trình biểu tượng",
    title: "Gran Meliá Nha Trang Lighting",
    desc: "Bản giao hưởng ánh sáng mặt tiền và cảnh quan tại resort 6 sao."
  },
  {
    id: 3,
    video: WORKING_VIDEO_URL,
    label: "Showroom trải nghiệm",
    title: "EuroStyle Lighting Gallery",
    desc: "Không gian trưng bày các thương hiệu đèn xa xỉ hàng đầu thế giới."
  }
];

// --- 3. ABOUT CONTENT ---
export const ABOUT_CONTENT = {
  title: "Nghệ Thuật Chiếu Sáng",
  desc: "EuroStyle Lighting không chỉ bán đèn, chúng tôi cung cấp giải pháp chiếu sáng toàn diện. Từ đèn trang trí thủ công Ý đến hệ thống chiếu sáng thông minh, chúng tôi kiến tạo cảm xúc cho từng không gian sống.",
  // Ảnh một kiến trúc sư đang làm việc với mô hình đèn hoặc không gian nội thất đẹp
  image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
};

// --- 4. PROJECTS HIGHLIGHT ---
export const PROJECTS_HIGHLIGHT = {
  // Ảnh biệt thự lung linh về đêm
  imageLeft: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
  // Ảnh sảnh khách sạn sang trọng với đèn chùm lớn
  imageRight: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop",
};

// --- 5. NEWS DATA ---
export const NEWS_DATA = [
  {
    id: 1,
    // Ảnh triển lãm đèn hoặc thiết kế
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=800&auto=format&fit=crop",
    date: "26/12/2025",
    category: "Giải thưởng Design",
    title: "BỘ SƯU TẬP ĐÈN THẢ 'LUNA' ĐẠT GIẢI RED DOT 2025",
  },
  {
    id: 2,
    // Ảnh không gian nội thất ấm cúng
    image: "https://images.unsplash.com/photo-1555679427-1f6dfcce943b?q=80&w=800&auto=format&fit=crop",
    date: "17/12/2025",
    category: "Xu hướng",
    title: "XU HƯỚNG CHIẾU SÁNG MINIMALIST LÊN NGÔI NĂM 2026",
  },
  {
    id: 3,
    // Ảnh đèn công nghệ/smart home
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    date: "26/11/2025",
    category: "Công nghệ",
    title: "GIẢI PHÁP CHIẾU SÁNG HCL (HUMAN CENTRIC LIGHTING)",
  }
];

// --- 6. CATEGORIES ---
export const CATEGORIES = [
  {
    title: "ĐÈN CHÙM & THẢ TRẦN",
    // Ảnh 1: Đèn chùm pha lê | Ảnh 2: Đèn thả bàn ăn hiện đại
    images: [
      "https://images.unsplash.com/photo-1543198126-a8d873f12e75?auto=format&fit=crop&w=300&q=80", 
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=300&q=80"
    ]
  },
  {
    title: "ĐÈN BÀN & ĐÈN SÀN",
    // Ảnh 1: Đèn ngủ để bàn sang trọng | Ảnh 2: Đèn cây (floor lamp) góc sofa
    images: [
      "https://images.unsplash.com/photo-1513506003011-3b03c8b09a56?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1534349762913-96c22b678f20?auto=format&fit=crop&w=300&q=80"
    ]
  },
  {
    title: "ĐÈN TƯỜNG & DECOR",
    // Ảnh 1: Đèn gắn tường hắt sáng | Ảnh 2: Đèn decor nghệ thuật
    images: [
      "https://images.unsplash.com/photo-1505693416388-b0346efee74f?auto=format&fit=crop&w=300&q=80", 
      "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=300&q=80"
    ]
  },
  {
    title: "SMART LIGHTING",
    // Ảnh 1: Hệ thống đèn LED dây | Ảnh 2: Setup đèn thông minh đổi màu
    images: [
      "https://images.unsplash.com/photo-1569172101665-2dc2140b497c?auto=format&fit=crop&w=300&q=80", 
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=300&q=80"
    ]
  }
];