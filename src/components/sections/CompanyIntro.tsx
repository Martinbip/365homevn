import React from 'react';
import Container from '../common/Container';

export default function CompanyIntro() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold  uppercase mb-6">
            VỀ CHÚNG TÔI
          </h2>
          <div className="w-full h-px bg-neutral-200 mb-8"></div>
          
          <div className="space-y-6 text-neutral-600 leading-relaxed text-left">
            <p>
              Ra đời với sứ mệnh là làm đẹp không gian của người Việt. Chúng tôi mang đến những giải pháp hoàn hảo dành nhằm kiến tạo nên những căn nhà, spa, cửa hàng, showroom không chỉ có giá trị thẩm mỹ cao, mà còn đáp ứng tối đa nhu cầu sử dụng.
            </p>
            <p>
              Trong hành trình hoạt động và phát triển, chúng tôi luôn giữ vững tôn chỉ &quot;Cống hiến hết mình vì sự hài lòng của khách hàng&quot;. Góp phần thay đổi tầm vóc, chất lượng và diện mạo công trình Việt Nam.
            </p>
            <p>
              Đối với chúng tôi, khách hàng là nền tảng của mọi hoạt động. Chúng tôi luôn lắng nghe mọi tâm tư và nguyện vọng của khách hàng để mang đến dịch vụ hơn cả mong đợi. Đến với <strong>365home.com.vn</strong> là đến với đơn vị hàng đầu trên thị trường sáng tạo không gian hoàn hảo bắt kịp xu thế hiện đại.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Ý tưởng */}
          <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow text-center group">
            <div className="w-16 h-16 mx-auto mb-6 text-yellow-500">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-neutral-800 mb-4 uppercase">
              Ý tưởng của bạn
            </h3>
            <p className="text-neutral-600">
              Hãy đưa cho chúng tôi ý tưởng về ngôi nhà của bạn.
            </p>
          </div>

          {/* Card 2: Thiết kế */}
          <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow text-center group">
            <div className="w-16 h-16 mx-auto mb-6 text-blue-500">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-neutral-800 mb-4 uppercase">
              Thiết kế của chúng tôi
            </h3>
            <p className="text-neutral-600">
              Với đội ngũ kiến trúc sư trẻ, sáng tạo và tràn đầy nhiệt huyết chúng tôi đem đến cho bạn thiết kế phù hợp nhất với ý tưởng của bạn.
            </p>
          </div>

          {/* Card 3: Sản phẩm */}
          <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow text-center group">
            <div className="w-16 h-16 mx-auto mb-6 text-blue-600">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-neutral-800 mb-4 uppercase">
              Sản phẩm của chúng ta
            </h3>
            <p className="text-neutral-600">
              Dịch vụ chăm sóc khách hàng chuyên nghiệp, bảo hành bảo trì sản phẩm tận tình. Luôn luôn hướng tới mục tiêu &quot;Cung cấp sản phẩm tốt nhất cho người dùng&quot;.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
