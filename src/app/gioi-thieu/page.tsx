import React from 'react';
import Container from '@/components/common/Container';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="py-16 md:py-24">
      <Container>
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6">
            VỀ 365HOME.COM.VN
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Kiến tạo không gian sống đẳng cấp, mang đậm bản sắc văn hóa Việt cùng xu hướng hiện đại.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
             <Image
              src="https://placehold.co/800x600/e5e5e5/333?text=Showroom+Space"
              alt="Showroom 365home"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6 text-neutral-700 text-justify">
            <p>
              <strong>365home.com.vn</strong> ra đời với sứ mệnh làm đẹp không gian của người Việt. Chúng tôi mang đến những giải pháp hoàn hảo nhằm kiến tạo nên những căn nhà, spa, cửa hàng, showroom không chỉ có giá trị thẩm mỹ cao mà còn đáp ứng tối đa nhu cầu sử dụng.
            </p>
            <p>
              Trong hành trình hoạt động và phát triển, chúng tôi luôn giữ vững tôn chỉ "Cống hiến hết mình vì sự hài lòng của khách hàng". Góp phần thay đổi tầm vóc, chất lượng và diện mạo công trình Việt Nam.
            </p>
            <p>
              Đối với chúng tôi, khách hàng là nền tảng của mọi hoạt động. Chúng tôi luôn lắng nghe mọi tâm tư và nguyện vọng của khách hàng để mang đến dịch vụ hơn cả mong đợi.
            </p>
          </div>
        </div>

        {/* Address Section - Highlighted as requested */}
        <div className="bg-neutral-50 rounded-2xl p-8 md:p-12 text-center border border-neutral-200">
          <h2 className="text-2xl font-bold text-neutral-800 mb-6 uppercase">
            Liên hệ với chúng tôi
          </h2>
          <div className="inline-block border-y-2 border-blue-700 py-4 px-8 bg-white shadow-sm">
            <p className="text-xl md:text-3xl font-bold text-blue-700 uppercase tracking-wider">
              351 TRẦN NHÂN TÔNG - KIẾN AN - HẢI PHÒNG
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-neutral-600">
            <div>
              <span className="block font-bold text-neutral-900 mb-1">Hotline</span>
              <a href="tel:0903884358" className="hover:text-blue-600 transition-colors">0903 884 358</a>
            </div>
            <div>
              <span className="block font-bold text-neutral-900 mb-1">Email</span>
              <span>365homevndesign@gmail.com</span>
            </div>
            <div>
              <span className="block font-bold text-neutral-900 mb-1">Giờ làm việc</span>
              <span>9:00 - 21:00 (Hàng ngày)</span>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
