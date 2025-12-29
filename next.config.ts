import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Bỏ qua lỗi TS khi build
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Cấu hình hình ảnh
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**', // Cho phép mọi đường dẫn
      },
      {
        // QUAN TRỌNG: Nhiều ảnh Unsplash dùng domain này
        protocol: 'https',
        hostname: 'plus.unsplash.com', 
        pathname: '/**',
      },
      {
        // Cho phép ảnh từ Pexels (nếu video poster hoặc ảnh dùng nguồn này)
        protocol: 'https',
        hostname: 'images.pexels.com', 
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'videos.pexels.com', 
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        pathname: '/**',
      },
    ],
  },
  
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.(".svg")
    );

    if (fileLoaderRule) {
      config.module.rules.push(
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, 
        },
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: { 
            not: [...(fileLoaderRule.resourceQuery?.not || []), /url/] 
          },
          use: ["@svgr/webpack"],
        }
      );
      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },
};

export default nextConfig;