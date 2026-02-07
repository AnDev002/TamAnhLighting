// src/modules/products/data/productData.ts

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  category: string;
  price?: number; // Dữ liệu thật chưa có giá, để optional
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
}

// 1. Dữ liệu Danh mục (Từ src/data/product-categories.js)
export const PRODUCT_CATEGORIES: Category[] = [
  {
    id: 0,
    name: "Tất cả",
    slug: "all",
    description: "Toàn bộ bộ sưu tập đèn cao cấp"
  },
  {
    id: 1,
    name: "Đèn Spotlight",
    slug: "den-spotlight",
    description: "Giải pháp chiếu sáng hội tụ, tạo điểm nhấn nghệ thuật cho không gian nội thất cao cấp."
  },
  {
    id: 2,
    name: "Đèn Downlight",
    slug: "den-downlight",
    description: "Dòng đèn âm trần cơ bản, cung cấp ánh sáng nền tỏa đều, chống chói bảo vệ mắt."
  },
  {
    id: 3,
    name: "Đèn ray",
    slug: "den-ray",
    description: "Hệ thống đèn ray nam châm và ray thanh hiện đại, linh hoạt trong việc thay đổi vị trí chiếu sáng."
  },
  {
    id: 4,
    name: "Đèn ống bơ",
    slug: "den-ong-bo",
    description: "Đèn lắp nổi trần với thiết kế khối trụ tinh tế, phù hợp cho trần bê tông hoặc tạo kiểu decor."
  },
  {
    id: 5,
    name: "Đèn Panel",
    slug: "den-panel",
    description: "Tấm sáng khổ lớn chuyên dụng cho văn phòng, bệnh viện với tiêu chuẩn chống chói UGR19."
  },
  {
    id: 6,
    name: "Bộ nguồn",
    slug: "bo-nguon",
    description: "Hệ thống driver và bộ chuyển đổi nguồn chính hãng Meanwell, đảm bảo độ bền cho thiết bị LED."
  },
  {
    id: 7,
    name: "Đèn trang trí",
    slug: "den-trang-tri",
    description: "LED dây hắt trần, Neon Flex mềm mại, tạo dải sáng liên tục và sang trọng."
  },
  {
    id: 8,
    name: "Đèn Âm đất",
    slug: "den-am-dat",
    description: "Đèn chuyên dụng ngoài trời với cấp bảo vệ IP68, chịu nước và va đập tuyệt đối."
  }
];

// 2. Dữ liệu Sản phẩm (Từ src/data/products.js)
export const PRODUCTS_DATA: Product[] = [
  {
    id: 1,
    name: "Spotlight smart",
    slug: "spotlight-smart-bridgelux-15w",
    description: "D100mm*H85mm (lỗ khoét 95mm) Chỉ số hoàn màu Ra > 98\nChip led Bridgelux (Mỹ) Goldsunda driver\nCông suất 15w\nĐiều chỉnh mịn mượt các nhiệt độ màu từ 2700k - 6500k Điều chỉnh được dimmer\nsáng/tối\nQuang thông 90Lm/watt",
    image: "/tal_assets/tal_000.jpg",
    category: "Đèn Spotlight"
  },
  {
    id: 2,
    name: "Spotlight Osram",
    slug: "spotlight-osram-10w-75mm",
    description: "Điều chỉnh được góc sáng\nTuổi thọ 50,000 giờ\nBảo hành 3 năm\nSpotlight Osram\nCông suất: 10w\nThân vỏ nhôm\ncao cấp, tản nhiệt\nLỗ khoét: 75mm, chiều cao 85mm\nĐường kính 85mm\nNhiệt độ màu 3000/4000k\nChip led Osram\nĐức\nChỉ số hoàn màu >\n96\nLifud driver\nQuang thông 90Lm/watt\nĐiều chỉnh được góc sáng\nBảo hành 3 năm",
    image: "/tal_assets/tal_001.jpg",
    category: "Đèn Spotlight"
  },
  {
    id: 3,
    name: "Spotlight Bridgelux",
    slug: "spotlight-bridgelux-15w-95mm",
    description: "Công suất: 15w\nThân vỏ nhôm\ncao cấp, tản nhiệt\nD100*H95mm\n(lỗ khoét 95mm)\nNhiệt độ màu 4000k trung tính\nChip led Bridgelux Mỹ\nChỉ số hoàn màu >\n97\nLifud driver\nQuang thông 90Lm/watt\nĐiều chỉnh được góc sáng\nBảo hành 3 năm",
    image: "/tal_assets/tal_002.jpg",
    category: "Đèn Spotlight"
  },
  {
    id: 4,
    name: "Đèn downlight COB",
    slug: "downlight-cob-cree-15w",
    description: "Công suất: 15w\nThân vỏ nhựa bọc nhôm cao cấp, tản nhiệt\nÁnh sáng 4000k\nKích thước: D100mm*H70mm (lỗ khoét 95mm)\nEaglerise driver\nChỉ số hoàn màu > 98\nChip led Cree Mỹ\nBảo hành 3 năm",
    image: "/tal_assets/tal_003.jpg",
    category: "Đèn Downlight"
  },
  {
    id: 5,
    name: "Đèn downlight SMD",
    slug: "downlight-smd-15w-d120-u5",
    description: "Công suất: 15w\nThân vỏ nhựa bọc nhôm\ncao cấp, tản nhiệt\n3 màu ánh sáng: trắng, vàng, trung tính\nKích thước: D120mm, lỗ khoét 110mm\nChip led SMD\nChống chói UGR <\n5\nChỉ số hoàn màu >\n93\nBảo hành 3 năm",
    image: "/tal_assets/tal_004.jpg",
    category: "Đèn Downlight"
  },
  {
    id: 6,
    name: "Đèn downlight SMD",
    slug: "downlight-smd-15w-d120-u5-v2",
    description: "Công suất: 15w\nThân vỏ nhựa bọc nhôm\ncao cấp, tản nhiệt\n3 màu ánh sáng: trắng, vàng, trung tính\nKích thước: D120mm, lỗ khoét 110mm\nChip led SMD\nChống chói UGR <\n5\nChỉ số hoàn màu >\n93\nBảo hành 3 năm",
    image: "/tal_assets/tal_005.jpg",
    category: "Đèn Downlight"
  },
  {
    id: 7,
    name: "Downlight",
    slug: "downlight-smd-15w-110mm",
    description: "Công suất: 15w\nThân vỏ nhựa bọc nhôm\ncao cấp, tản nhiệt\n3 màu ánh sáng: trắng, vàng, trung tính\nKích thước: D120mm, lỗ khoét 110mm\nChip led SMD\nChỉ số hoàn màu 90\nBảo hành 3 năm",
    image: "/tal_assets/tal_006.jpg",
    category: "Đèn Downlight"
  },
  {
    id: 8,
    name: "Downlight",
    slug: "downlight-smd-9w-90mm",
    description: "Công suất: 7-9w\nThân vỏ nhựa bọc nhôm\ncao cấp, tản nhiệt\n3 màu ánh sáng: trắng, vàng, trung tính\nKích thước: D100mm, lỗ khoét 90mm\nChip led SMD\nChỉ số hoàn màu 90\nBảo hành 3 năm",
    image: "/tal_assets/tal_007.jpg",
    category: "Đèn Downlight"
  },
  {
    id: 9,
    name: "Spotlight smart",
    slug: "spotlight-smart-bridgelux-15w-u5",
    description: "D100*H95mm\n(lỗ khoét 95mm)\nChỉ số hoàn màu Ra >\n98\nHệ số chống chói urg <\n5\nChip led Bridgelux (Mỹ)\nGoldsunda driver\nCông suất 15w\nĐiều khiển từ xa độ sáng/tối\nĐiều chỉnh được nhiệt độ màu\nBảo hành 3 năm\nTuổi thọ 50,000 giờ\nBảo hành 3 năm",
    image: "/tal_assets/tal_008.jpg",
    category: "Đèn Spotlight"
  },
  {
    id: 10,
    name: "Spotlight smart",
    slug: "spotlight-smart-bridgelux-20w-120mm",
    description: "D140*H120mm\n(lỗ khoét 120)\nChỉ số hoàn màu Ra >\n98\nHệ số chống chói urg <\n5\nChip led Bridgelux (Mỹ)\nGoldsunda driver\nCông suất 20w\nĐiều khiển từ xa độ sáng/tối\nĐiều chỉnh được nhiệt độ màu\nBảo hành 3 năm\nTuổi thọ 50,000 giờ\nBảo hành 3 năm",
    image: "/tal_assets/tal_009.jpg",
    category: "Đèn Spotlight"
  },
  {
    id: 11,
    name: "Spotlight",
    slug: "spotlight-bridgelux-20w-4000k",
    description: "D140*H120mm\n(lỗ khoét 120)\nChỉ số hoàn màu Ra >\n98\nHệ số chống chói urg <\n5\nChip led Bridgelux (Mỹ)\nLifud driver\nCông suất 20w\nÁnh sáng trung tính 4000k\nBảo hành 3 năm\nTuổi thọ 50,000 giờ\nBảo hành 3 năm",
    image: "/tal_assets/tal_010.jpg",
    category: "Đèn Spotlight"
  },
  {
    id: 12,
    name: "Đèn spotlight Cree",
    slug: "spotlight-cree-7w-55mm",
    description: "Công suất: 7w\nD65*H79mm\n(lỗ khoét 55mm)\nChỉ số hoàn màu >\n97\nĐiện áp: 220-240VAC\nChip led Cree Mỹ\nNhiệt độ 4000k\nNguồn Lifud\nGóc chiếu 24 độ\nTuổi thọ hơn 50,000 giờ\nBảo hành 3 năm",
    image: "/tal_assets/tal_011.jpg",
    category: "Đèn Spotlight"
  },
  {
    id: 13,
    name: "Đèn spotlight Cree",
    slug: "spotlight-cree-12w-75mm-g55",
    description: "Công suất: 12w\nD84*H87mm\n(lỗ khoét 75mm)\nChỉ số hoàn màu >\n97\nĐiện áp: 220-240VAC\nChip led Cree Mỹ\nNhiệt độ màu 4000k\nNguồn Lifud\nGóc chiếu 55 độ\nTuổi thọ hơn 50,000 giờ\nBảo hành 3 năm",
    image: "/tal_assets/tal_012.jpg",
    category: "Đèn Spotlight"
  },
  {
    id: 14,
    name: "Đèn spotlight Cree",
    slug: "spotlight-cree-10w-75mm-ip44",
    description: "Công suất: 10w\nĐèn spotlight Cree\nD84*H87mm\n(lỗ khoét 75mm)\nIP44\nChỉ số hoàn màu >\n97\nĐiện áp: 220-240VAC\nNhiệt độ màu 3000k/4000k/5000k/6500k\nChip led Cree Mỹ\nNguồn Lifud\nGóc chiếu 36 độ\nTuổi thọ hơn 50,000 giờ\nBảo hành 3 năm",
    image: "/tal_assets/tal_013.jpg",
    category: "Đèn Spotlight"
  },
  {
    id: 15,
    name: "Đèn spotlight",
    slug: "spotlight-cree-10w-75mm-36deg",
    description: "Công suất: 10w\nD84*H87mm\n(lỗ khoét 75mm)\nChỉ số hoàn màu >\n97\nĐiện áp: 220-240VAC\nChip led Cree Mỹ\nNhiệt độ màu 3000k/4000k/5000k/6500k\nNguồn Lifud\nIP44\nGóc chiếu 36 độ\nTuổi thọ hơn 50,000 giờ\nBảo hành 3 năm",
    image: "/tal_assets/tal_014.jpg",
    category: "Đèn Spotlight"
  },
  {
    id: 16,
    name: "Đèn spotlight Cree",
    slug: "spotlight-cree-15w-slim-120mm",
    description: "D140*H31mm\nLỗ khoét 120mm\nChỉ số hoàn màu Ra >\n94\n90Lm/watt\nÁnh sáng trung tính\nChip led Cree (Mỹ)\nCông suất 15w\nBảo hành 3 năm",
    image: "/tal_assets/tal_015.jpg",
    category: "Đèn Spotlight"
  },
  {
    id: 17,
    name: "Đèn spotlight đôi (smart)",
    slug: "spotlight-double-smart-18w",
    description: "Kích thước: 90170mm\nCông suất: 2x9W\nGoldsunda driver\nChip led Cree Mỹ\nUGR chống chói <\n5\nChỉ số hoàn màu >\n98\nĐiều chỉnh mịn mượt các nhiệt độ màu (2700k -\n6500k)\nĐiều khiển từ xa chỉnh được dimmer\n(sáng/tối)\nChất liệu: nhôm\nnguyên khối tản nhiệt\nBảo hành 3 năm\nKích thước: 90170mm",
    image: "/tal_assets/tal_016.jpg",
    category: "Đèn Spotlight"
  },
  {
    id: 18,
    name: "Đèn spotlight đôi",
    slug: "spotlight-double-fixed-18w",
    description: "Công suất: 2x9W\nGoldsunda driver\nChip led Cree Mỹ UGR chống chói <\n5 Chỉ số hoàn màu >\n98\nÁnh sáng trung tính 4000k\nChất liệu: nhôm\nnguyên khối tản nhiệt Bảo hành 3 năm",
    image: "/tal_assets/tal_017.jpg",
    category: "Đèn Spotlight"
  },
  {
    id: 19,
    name: "Đèn led ray",
    slug: "tracklight-cree-18w-4000k",
    description: "Kích thước: D60*L135mm\nCông suất: 18w\nNguồn Lifud\nChip led Cree Mỹ\nÁnh sáng trung tính 4000k Chỉ số hoàn màu >\n98 Quang thông: 90Lm/watt\nBảo hành 3 năm",
    image: "/tal_assets/tal_018.jpg",
    category: "Đèn ray"
  },
  {
    id: 20,
    name: "Đèn led ray (smart)",
    slug: "tracklight-smart-bridgelux-18w",
    description: "Kích thước: D60*L135mm\nCông suất: 18w\nNguồn Goldsunda\nChip led Bridgelux Mỹ\nChỉnh được dimmer\nsáng/tối\nChỉnh mịn mượt các nhiệt độ màu\nChỉ số hoàn màu >\n98\nQuang thông: 90Lm/watt\nBảo hành 3 năm",
    image: "/tal_assets/tal_019.jpg",
    category: "Đèn ray"
  },
  {
    id: 21,
    name: "Đèn ống bơ",
    slug: "surface-downlight-bridgelux-18w",
    description: "D120*H100mm\nChỉ số hoàn màu Ra >\n96\nChip led Bridgelux (Mỹ)\nGóc chiếu 60 độ\nLifud driver\nÁnh sáng 3000k/4000k/6500k\nCông suất 18W\nThân nhôm\nnguyên khối tản nhiệt\nBảo hành 3 năm",
    image: "/tal_assets/tal_020.jpg",
    category: "Đèn ống bơ"
  },
  {
    id: 22,
    name: "Đèn ống bơ (smart)",
    slug: "surface-downlight-smart-18w",
    description: "D120*H100mm\nChỉ số hoàn màu Ra >\n96\nChip led Bridgelux (Mỹ)\nGóc chiếu 60 độ\nLifud driver\nĐiều chỉnh mịn mượt các nhiệt độ màu\nĐiều chỉnh được dimmer\nsáng/tối\nCông suất 18W\nThân nhôm\nnguyên khối tản nhiệt\nBảo hành 3 năm",
    image: "/tal_assets/tal_021.jpg",
    category: "Đèn ống bơ"
  },
  {
    id: 23,
    name: "Đèn panel UGR chống chói",
    slug: "led-panel-600x600-40w-ugr19",
    description: "Công suất: 40w\nKích thước: 600*600\nQuang thông: 4000Lm\nNhiệt độ màu: 4000k trung tính/6500k trắng\nChỉ số chống chói UGR 19\nVật liệu: Nhôm + PMMA cao cấp\nTiêu chuẩn: CeRoHs\nFlicker free: Chống nhấp nháy trên camera\nBảo hành 3 năm",
    image: "/tal_assets/tal_022.jpg",
    category: "Đèn Panel"
  },
  {
    id: 24,
    name: "Đèn led ray nam châm chiếu sâu",
    slug: "magnetic-track-osram-12w-220mm",
    description: "Chip led Osram\nĐức\nCông suất: 12w\nKích thước: 2202623\nChỉ số hoàn màu >\n96\nÁnh sáng 4000k trung tính\nChất liệu: nhôm kim loại\nBảo hành 3 năm",
    image: "/tal_assets/tal_023.jpg",
    category: "Đèn ray"
  },
  {
    id: 25,
    name: "Đèn ray nam châm thanh",
    slug: "magnetic-track-linear-osram-30w-900mm",
    description: "Chip led Osram\nĐức\nCông suất: 30w\nKích thước: 9002326\nChỉ số hoàn màu >\n90\nÁnh sáng 4000k trung tính\nBảo hành 3 năm",
    image: "/tal_assets/tal_024.jpg",
    category: "Đèn ray"
  },
  {
    id: 26,
    name: "Thanh ray nam châm",
    slug: "magnetic-track-rail-1m",
    description: "Nhôm\nsơn tĩnh điện\nChiều dài 1m",
    image: "/tal_assets/tal_025.jpg",
    category: "Đèn ray"
  },
  {
    id: 27,
    name: "Thanh ray nam châm",
    slug: "magnetic-track-rail-2m",
    description: "Nhôm\nsơn tĩnh điện\nChiều dài 2m",
    image: "/tal_assets/tal_026.jpg",
    category: "Đèn ray"
  },
  {
    id: 28,
    name: "Bộ nguồn meanwell",
    slug: "meanwell-driver-100w-48v",
    description: "Nguồn 100w\nKích thước: 2202222\nNguồn Meanwell\nBảo hành 3 năm",
    image: "/tal_assets/tal_027.jpg",
    category: "Bộ nguồn"
  },
  {
    id: 29,
    name: "Đèn led dây",
    slug: "led-strip-osram-220v-10w",
    description: "Ánh sáng trắng, vàng và trung tính/m\n220V/m\nCông suất: 10w/m\nChỉ số hoàn màu >\n92\nChip led Osram\nĐức\nBảo hành 3 năm",
    image: "/tal_assets/tal_028.jpg",
    category: "Đèn trang trí"
  },
  {
    id: 30,
    name: "Đèn neon flex",
    slug: "led-neon-flex-osram-24v",
    description: "Ánh sáng trắng, vàng và trung tính/m\nĐiện áp: 24VAC\nCông suất: 10w\nChip led Osram\nBảo hành 3 năm",
    image: "/tal_assets/tal_029.jpg",
    category: "Đèn trang trí"
  },
  {
    id: 31,
    name: "Đèn âm đất",
    slug: "inground-light-osram-3w-ip68",
    description: "Điện áp 220V không cần chuyển đổi\nChip led Osram\nCông suất: 3w\nChỉ số hoàn màu >\n92\nGóc chiếu 36°\nQuang thông 90Lm/watt\nÁnh sáng vàng 3000k\nD48*H44mm\nCấp bảo vệ IP68\nBảo hành 3 năm",
    image: "/tal_assets/tal_030.jpg",
    category: "Đèn Âm đất"
  },
];