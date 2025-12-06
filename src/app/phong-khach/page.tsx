import React from 'react';
import Container from '@/components/common/Container';
import Image from 'next/image';

export default function LivingRoomPage() {
  return (
    <main className="py-16 md:py-24">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Phòng khách</h1>
          <p className="text-lg text-neutral-600">
            Khám phá bộ sưu tập nội thất phòng khách sang trọng
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="group">
              <div className="relative aspect-square bg-neutral-100 rounded overflow-hidden mb-4">
                <Image
                  src={`https://placehold.co/400x400/e5e5e5/666?text=Product+${i + 1}`}
                  alt={`Sản phẩm ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm font-medium text-neutral-800 mb-2">
                Sofa phòng khách cao cấp {i + 1}
              </h3>
              <p className="text-sm text-red-600 font-semibold">
                Liên hệ
              </p>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
