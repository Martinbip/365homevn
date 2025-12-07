import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkipLink from "@/components/common/SkipLink";
import MainWrapper from "@/components/layout/MainWrapper";
import FloatingActionButtons from "@/components/common/FloatingActionButtons";

export const metadata: Metadata = {
  metadataBase: new URL('https://365home.com.vn'),
  title: {
    default: "365home.com.vn | Nội thất cao cấp | Đồ gỗ cao cấp",
    template: "%s | 365home.com.vn"
  },
  description: "365home.com.vn - Thương hiệu nội thất hàng đầu Việt Nam với hơn 25 năm kinh nghiệm. Chuyên thiết kế và thi công nội thất cao cấp, đồ gỗ mỹ nghệ.",
  keywords: ["nội thất cao cấp", "đồ gỗ cao cấp", "thiết kế nội thất", "thi công nội thất", "nội thất Hải Phòng", "365home"],
  authors: [{ name: "365home.com.vn" }],
  creator: "365home.com.vn",
  publisher: "365home.com.vn",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://365home.com.vn',
    title: '365home.com.vn | Nội thất cao cấp | Đồ gỗ cao cấp',
    description: '365home.com.vn - Thương hiệu nội thất hàng đầu Việt Nam với hơn 25 năm kinh nghiệm',
    siteName: '365home.com.vn',
  },
  twitter: {
    card: 'summary_large_image',
    title: '365home.com.vn | Nội thất cao cấp',
    description: 'Thương hiệu nội thất hàng đầu Việt Nam',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased">
        <SkipLink />
        <Header />
        <MainWrapper>
          {children}
        </MainWrapper>
        <Footer />
        <FloatingActionButtons />
      </body>
    </html>
  );
}
