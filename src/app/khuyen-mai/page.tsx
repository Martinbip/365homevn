import React from 'react';
import Container from '@/components/common/Container';
import Image from 'next/image';

export default function PromotionsPage() {
  return (
    <main className="py-16 md:py-24">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Khuyến mãi</h1>
          <p className="text-lg text-neutral-600">
            Khám phá các chương trình ưu đãi đặc biệt từ 365home.com.vn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 bg-neutral-100">
                <Image
                  src={`https://placehold.co/600x400/e5e5e5/333?text=Promotion+${item}`}
                  alt={`Khuyến mãi ${item}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold">
                  -30%
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Ưu đãi đặc biệt tháng {item}</h3>
                <p className="text-neutral-600 mb-4">
                  Giảm giá lên đến 30% cho toàn bộ sản phẩm nội thất cao cấp
                </p>
                <button className="w-full py-3 bg-neutral-800 text-white font-medium rounded hover:bg-neutral-700 transition-colors">
                  Xem chi tiết
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
