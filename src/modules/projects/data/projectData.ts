export const PROJECT_CATEGORIES = [
  { id: "all", label: "Tất cả" },
  { id: "hotel", label: "Khách sạn & Resort" },
  { id: "villa", label: "Biệt thự tư nhân" },
  { id: "commercial", label: "Showroom & Thương mại" },
];

export interface ProjectType {
  id: string;
  title: string;
  location: string;
  year: string;
  category: string;
  categoryLabel: string;
  image: string;
  description: string;
  // Detail fields
  client: string;
  service: string;
  area: string;
  challenge: string;
  solution: string;
  gallery: string[];
}

export const PROJECTS_MOCK: ProjectType[] = [
  {
    id: "1",
    title: "The Regal Mansion",
    location: "Hanoi, Vietnam",
    year: "2024",
    category: "villa",
    categoryLabel: "Private Villa",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop",
    description: "Một tuyệt tác kiến trúc tân cổ điển với hệ thống đèn chùm pha lê độc bản, kiến tạo không gian sống thượng lưu giữa lòng thủ đô.",
    client: "Mr. Hoang Tuan",
    service: "Interior & Lighting Design",
    area: "450m²",
    challenge: "Yêu cầu của gia chủ là tạo ra một không gian vương giả nhưng không được phô trương, ánh sáng phải ấm cúng nhưng đủ tiêu chuẩn để trưng bày các tác phẩm nghệ thuật.",
    solution: "Sử dụng hệ thống chiếu sáng thông minh 4 lớp, kết hợp đèn chùm pha lê nhập khẩu Ý làm điểm nhấn (Focal point) và hệ thống LED hắt trần để tạo chiều sâu không gian.",
    gallery: [
       "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200",
       "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200",
       "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200"
    ]
  },
  {
    id: "2",
    title: "JW Marriott Lounge",
    location: "Danang, Vietnam",
    year: "2023",
    category: "hotel",
    categoryLabel: "Hospitality",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000&auto=format&fit=crop",
    description: "Sự kết hợp hoàn hảo giữa ánh sáng nghệ thuật và nội thất đương đại, mang đến trải nghiệm thị giác đầy mê hoặc cho du khách.",
    client: "Sun Group",
    service: "Lighting Architecture",
    area: "1200m²",
    challenge: "Khu vực Lounge cần thay đổi không khí theo thời gian trong ngày: Sang trọng, chuyên nghiệp vào ban ngày và lãng mạn, huyền bí vào ban đêm.",
    solution: "Áp dụng hệ thống điều khiển DALI, thiết lập các kịch bản ánh sáng (Lighting Scenes) tự động chuyển đổi theo giờ, kết hợp đèn trang trí thủ công.",
    gallery: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200"
    ]
  },
  {
    id: "3",
    title: "Skyline Penthouse",
    location: "Ho Chi Minh City",
    year: "2023",
    category: "villa",
    categoryLabel: "Penthouse",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    description: "Căn hộ áp mái với tầm nhìn panorama, nơi mỗi chiếc đèn là một tác phẩm điêu khắc ánh sáng độc đáo.",
    client: "Mrs. Lan Anh",
    service: "Full Interior Design",
    area: "320m²",
    challenge: "Tận dụng tối đa ánh sáng tự nhiên từ vách kính lớn nhưng phải xử lý vấn đề chói nắng và nhiệt độ, đồng thời đảm bảo sự riêng tư.",
    solution: "Sử dụng rèm tự động kết hợp cảm biến ánh sáng. Nội thất sử dụng vật liệu phản xạ thấp (matte) để tránh lóa mắt, tông màu trung tính sang trọng.",
    gallery: [
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1200",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfe1?q=80&w=1200",
        "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200"
    ]
  },
  {
    id: "4",
    title: "Hermès Boutique",
    location: "Hanoi, Vietnam",
    year: "2022",
    category: "commercial",
    categoryLabel: "Commercial",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2000&auto=format&fit=crop",
    description: "Không gian trưng bày đẳng cấp quốc tế với giải pháp chiếu sáng chuyên biệt tôn vinh vẻ đẹp của từng sản phẩm xa xỉ.",
    client: "IPP Group",
    service: "Retail Lighting",
    area: "180m²",
    challenge: "Yêu cầu chỉ số hoàn màu (CRI) cực cao (>97) để hiển thị chính xác màu sắc của các sản phẩm da và lụa cao cấp.",
    solution: "Sử dụng chip LED chuyên dụng cho thời trang cao cấp, kết hợp đèn spotlight có góc chiếu hẹp (narrow beam) để làm nổi bật sản phẩm trên nền tối.",
    gallery: [
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200",
        "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1200",
        "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=1200"
    ]
  },
];