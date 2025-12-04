import HeroSection from '@/components/sections/HeroSection';
import IntroSection from '@/components/sections/IntroSection';
import FeaturedShowcase from '@/components/sections/FeaturedShowcase';
import ProductGrid from '@/components/sections/ProductGrid';
import StoriesSection from '@/components/sections/StoriesSection';
import { newProducts, featuredCollections, stories } from '@/data/products';

export default function Home() {
  return (
    <main>
      <HeroSection />
      
      <IntroSection 
        title="Thiết kế nội thất tinh tế, lấy cảm hứng từ văn hóa Việt"
        subtitle="365home.com.vn mang đến những sản phẩm nội thất chất lượng cao, kết hợp hài hòa giữa thẩm mỹ hiện đại và tinh hoa truyền thống Việt Nam."
      />

      <FeaturedShowcase collections={featuredCollections} />

      <ProductGrid 
        title="Sản phẩm mới"
        subtitle="Khám phá những thiết kế mới nhất từ 365home.com.vn"
        products={newProducts}
        viewAllLink="/cua-hang"
      />

      <StoriesSection 
        title="Tin tức & Cảm hứng"
        stories={stories}
        viewAllLink="/tin-tuc"
      />
    </main>
  );
}
