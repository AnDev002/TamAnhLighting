// src/modules/collections/data/seasonalData.ts

export const SEASONAL_HERO = {
  year: new Date().getFullYear(),
  title: "Aura of Tomorrow",
  subtitle: "Defining the Light of the New Era",
  description: "Bộ sưu tập năm nay khám phá ranh giới giữa công nghệ và nghệ thuật thủ công. Ánh sáng không chỉ để nhìn thấy, mà là để cảm nhận.",
  coverImage: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop" // Ảnh Moodboard lớn
};

export const SEASONAL_SECTIONS = [
  {
    id: "spring",
    title: "Bloom & Brass",
    season: "Spring / Summer",
    description: "Sự nảy nở của thiên nhiên kết hợp với sự vĩnh cửu của đồng thau. Những thiết kế mang hơi thở hữu cơ.",
    image: "https://images.unsplash.com/photo-1513506003011-3b03c8b09a56?q=80&w=1200",
    products: [
      { name: "Lotus Chandelier", price: "$4,200", image: "https://images.unsplash.com/photo-1543198126-a8d873f12e75?q=80&w=800" },
      { name: "Stem Wall Sconce", price: "$1,800", image: "https://images.unsplash.com/photo-1551516594-56cb78394645?q=80&w=800" },
    ]
  },
  {
    id: "autumn",
    title: "Shadow & Stone",
    season: "Autumn / Winter",
    description: "Khi ánh sáng thu mình lại để nhường chỗ cho bóng tối nghệ thuật. Vật liệu đá tự nhiên Alabaster lên ngôi.",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1200",
    products: [
      { name: "Eclipse Pendant", price: "$3,500", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800" },
      { name: "Monolith Floor", price: "$5,100", image: "https://images.unsplash.com/photo-1540932296774-3ed466af6799?q=80&w=800" },
    ]
  }
];