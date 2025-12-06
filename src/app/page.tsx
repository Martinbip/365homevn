import HeroSection from '@/components/sections/HeroSection';
import CompanyIntro from '@/components/sections/CompanyIntro';
import FeaturedShowcase from '@/components/sections/FeaturedShowcase';
import ProductGrid from '@/components/sections/ProductGrid';
import StoriesSection from '@/components/sections/StoriesSection';
import { newProducts, featuredCollections, stories } from '@/data/products';

export default function Home() {
  return (
    <main>
      <HeroSection />
      
      <CompanyIntro />

      <FeaturedShowcase collections={featuredCollections} />

      <ProductGrid 
        title="Sản phẩm mới"
        subtitle="Khám phá những thiết kế mới nhất từ 365home.com.vn"
        products={newProducts}
        viewAllLink="/san-pham"
      />

      <StoriesSection 
        title="Tin tức & Cảm hứng"
        stories={stories}
        viewAllLink="/tin-tuc"
      />
    </main>
  );
}
