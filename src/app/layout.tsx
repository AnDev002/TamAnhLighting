// src/app/layout.tsx
import type { Metadata } from "next";
import { Be_Vietnam_Pro, Great_Vibes } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers"; 

// Cấu hình Be Vietnam Pro với đầy đủ weight và subset tiếng Việt
const beVietnamPro = Be_Vietnam_Pro({ 
  subsets: ["latin", "vietnamese"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

const greatVibes = Great_Vibes({ 
  subsets: ["latin"], 
  weight: ["400"], 
  variable: "--font-great-vibes" 
});

export const metadata: Metadata = {
  title: "N.S Coffee",
  description: "Best Coffee Sellers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body 
        suppressHydrationWarning={true}
        // Thêm biến font vào className
        // Xóa 'font-poppins', thay bằng 'font-sans' (được định nghĩa trong globals.css)
        className={`${beVietnamPro.variable} ${greatVibes.variable} font-sans bg-black text-white antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}