// src/app/(main)/design/page.tsx
import React from "react";
import DesignPage from "@/modules/design/DesignPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lighting Design Service | Tam Anh Lighting",
  description: "Dịch vụ thiết kế chiếu sáng chuyên nghiệp, từ bản vẽ kỹ thuật đến thi công thực tế.",
};

export default function Page() {
  return <DesignPage />;
}