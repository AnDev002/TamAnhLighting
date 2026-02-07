// src/components/GoogleTranslate.tsx
"use client";

import Script from "next/script";
import { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    // Khởi tạo hàm global cho Google Translate
    // @ts-ignore
    window.googleTranslateElementInit = () => {
      // @ts-ignore
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "vi", // Ngôn ngữ gốc của web (Tiếng Việt)
          // Các ngôn ngữ muốn hỗ trợ
          includedLanguages: "en,it,de,fr,es,zh-CN,ja,vi", 
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <>
      {/* Container ẩn chứa widget của Google */}
      <div 
        id="google_translate_element" 
        style={{ display: "none" }} // Ẩn hoàn toàn khỏi giao diện
      ></div>
      
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
};

export default GoogleTranslate;