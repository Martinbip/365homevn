import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "365homevn | Nội thất cao cấp | Đồ gỗ cao cấp",
  description: "365homevn - Thương hiệu nội thất hàng đầu Việt Nam với hơn 25 năm kinh nghiệm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
