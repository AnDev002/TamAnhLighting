// src/components/ui/ImageFallback.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";

// 1. KHO ẢNH FALLBACK CHẤT LƯỢNG CAO (Hard-coded để không bị random)
const FALLBACK_ASSETS = {
  // Mặc định: Trừu tượng/Nghệ thuật (Dùng cho banner chung)
  default: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop",
  
  // Kiến trúc: Tòa nhà, ngoại thất (Dùng cho phần Projects/Experience)
  architecture: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop",
  
  // Nội thất: Phòng khách, không gian (Dùng cho Collection Sections)
  interior: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
  
  // Sản phẩm: Đèn, decor (Dùng cho Product Card)
  product: "https://images.unsplash.com/photo-1507473888900-52e1adad54cd?q=80&w=800&auto=format&fit=crop",
};

// Định nghĩa kiểu dữ liệu cho prop mới
interface ImageFallbackProps extends ImageProps {
  fallbackType?: keyof typeof FALLBACK_ASSETS; // Chỉ cho phép nhập các key đã định nghĩa
}

const ImageFallback = ({ 
  src, 
  fallbackType = "default", // Mặc định là 'default' nếu không truyền
  alt, 
  ...props 
}: ImageFallbackProps) => {
  
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  return (
    <Image
      {...props}
      src={hasError ? FALLBACK_ASSETS[fallbackType] : imgSrc}
      alt={alt}
      onError={() => {
        // Chỉ đổi sang fallback nếu chưa bị lỗi trước đó để tránh loop vô hạn
        if (!hasError) {
            setHasError(true);
            setImgSrc(FALLBACK_ASSETS[fallbackType]);
            console.warn(`[IMAGE ERROR] Switched to fallback (${fallbackType}): ${src}`);
        }
      }}
    />
  );
};

export default ImageFallback;