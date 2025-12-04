'use client';

import React, { useState } from 'react';
import Container from '../common/Container';
import Link from '../common/Link';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <footer className="bg-neutral-800 text-white">
      {/* Newsletter Section */}
      <Container maxWidth="lg">
        <div className="py-16 md:py-20 text-center border-b border-neutral-700">
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-wide mb-4">
            Đăng ký nhận tin
          </h2>
          <p className="text-neutral-400 text-sm md:text-base mb-8">
            Nhận thông tin mới nhất về sản phẩm và ưu đãi đặc biệt từ 365home.com.vn
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email của bạn"
              className="flex-1 px-5 py-3 bg-neutral-700 border border-neutral-600 text-white placeholder-neutral-400 focus:outline-none focus:border-neutral-400 transition-colors text-sm"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-neutral-800 font-medium text-sm hover:bg-neutral-100 transition-colors"
            >
              Đăng ký
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-green-400 text-sm">
              Cảm ơn bạn đã đăng ký!
            </p>
          )}
        </div>
      </Container>

      {/* Footer Content */}
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">365HOME.COM.VN</h3>
            <p className="text-sm text-neutral-300 mb-4">
              365home.com.vn, ra đời vào năm 1999, là một trong những thương hiệu tiên phong trong ngành nội thất.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Liên kết</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/gioi-thieu" className="text-neutral-300 hover:text-white transition-colors">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/san-pham" className="text-neutral-300 hover:text-white transition-colors">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link href="/khuyen-mai" className="text-neutral-300 hover:text-white transition-colors">
                  Khuyến mãi
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="text-neutral-300 hover:text-white transition-colors">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Danh mục</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/phong-khach" className="text-neutral-300 hover:text-white transition-colors">
                  Phòng khách
                </Link>
              </li>
              <li>
                <Link href="/phong-an" className="text-neutral-300 hover:text-white transition-colors">
                  Phòng ăn
                </Link>
              </li>
              <li>
                <Link href="/phong-ngu" className="text-neutral-300 hover:text-white transition-colors">
                  Phòng ngủ
                </Link>
              </li>
              <li>
                <Link href="/phong-lam-viec" className="text-neutral-300 hover:text-white transition-colors">
                  Phòng làm việc
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Liên hệ</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <a href="tel:0903884358" className="hover:text-white transition-colors">
                  Hotline: 0903 884 358
                </a>
              </li>
              <li>Email: 365homevndesign@gmail.com</li>
              <li>Giờ làm việc: 9:00 - 21:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-700 py-6 text-sm text-neutral-400 text-center">
          <p>© 2024 365home.com.vn. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
