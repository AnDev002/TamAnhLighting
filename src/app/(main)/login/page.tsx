// src/app/(main)/login/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AuthService } from "@/services/AuthService"; //
import { Eye, EyeOff, ArrowRight, Loader2 } from "lucide-react"; // Đảm bảo bạn đã cài lucide-react hoặc dùng icon tương tự

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error khi user gõ lại
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Gọi service đăng nhập
      await AuthService.login(formData.email, formData.password);
      
      // Thành công -> Chuyển hướng
      router.push("/"); 
      router.refresh(); // Làm mới để cập nhật trạng thái header
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "Username hoặc mật khẩu không chính xác.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-background text-foreground font-sans">
      {/* --- CỘT TRÁI: HÌNH ẢNH NGHỆ THUẬT (Ẩn trên mobile) --- */}
      <div className="hidden lg:block w-1/2 relative overflow-hidden bg-dark-bg">
        <div className="absolute inset-0 z-10 bg-black/20" /> {/* Overlay làm tối ảnh nhẹ */}
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" // Thay bằng ảnh nội thất/kiến trúc của dự án bạn
          alt="Luxury Interior"
          fill
          className="object-cover animate-subtle-zoom" // Hiệu ứng zoom chậm sang trọng
          priority
        />
        
        {/* Quote hoặc Branding trên ảnh */}
        <div className="absolute bottom-12 left-12 z-20 text-white max-w-md animate-fade-up-slow">
          <h2 className="font-great-vibes text-4xl mb-2 text-brand-primary">Welcome Back</h2>
          <p className="text-gray-200 font-light text-lg leading-relaxed">
            "Kiến tạo không gian sống đẳng cấp, nơi cảm xúc thăng hoa trong từng đường nét."
          </p>
        </div>
      </div>

      {/* --- CỘT PHẢI: FORM ĐĂNG NHẬP --- */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 relative bg-blueprint-grid"> {/* Nền lưới kỹ thuật */}
        <div className="w-full max-w-[480px] animate-fade-up-slow">
          
          {/* Header Form */}
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-4xl font-semibold mb-3 tracking-tight text-foreground">
              Đăng Nhập
            </h1>
            <p className="text-muted">
              Chào mừng quay trở lại. Vui lòng nhập thông tin của bạn.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            
            {/* Input Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80 ml-1">User name</label>
              <div className="relative group">
                <input
                  type="user name"
                  name="user name"
                  required
                  placeholder="username"
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-foreground placeholder:text-gray-400"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Input Password */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-medium text-foreground/80">Mật khẩu</label>
                
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-lg outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-foreground placeholder:text-gray-400"
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg flex items-center gap-2 animate-pulse">
                <span className="block w-1.5 h-1.5 rounded-full bg-red-500"></span>
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-[52px] bg-brand-primary hover:bg-brand-dark text-white rounded-lg font-medium text-[15px] shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  Đăng Nhập
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            {/* Divider */}
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}