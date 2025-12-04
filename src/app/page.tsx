import HeroSection from '@/components/sections/HeroSection';
import ProductGrid from '@/components/sections/ProductGrid';
import AboutSection from '@/components/sections/AboutSection';
import RoomShowcase from '@/components/sections/RoomShowcase';
import { newProducts, rooms } from '@/data/products';

export default function Home() {
  return (
    <main>
      <HeroSection />
      
      <ProductGrid 
        title="Sản phẩm mới"
        products={newProducts}
        viewAllLink="/cua-hang"
      />

      <AboutSection
        title="Về 365homevn"
        description="365homevn, ra đời vào năm 1999, là một trong những thương hiệu tiên phong trong ngành nội thất, với nguồn cảm hứng văn hóa Việt và gu thẩm mỹ tinh tế. Qua 26 năm hoạt động, 365homevn luôn chú trọng đổi mới để duy trì vị thế là thương hiệu nội thất hàng đầu tại Việt Nam."
        link="/gioi-thieu"
      />

      <RoomShowcase rooms={rooms} />
    </main>
  );
}
