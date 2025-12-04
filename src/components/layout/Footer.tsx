import React from 'react';
import Container from '../common/Container';
import Link from '../common/Link';

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white mt-20">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">365HOMEVN</h3>
            <p className="text-sm text-neutral-300 mb-4">
              365homevn, ra đời vào năm 1999, là một trong những thương hiệu tiên phong trong ngành nội thất.
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
                <Link href="/cua-hang" className="text-neutral-300 hover:text-white transition-colors">
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
              <li>Email: info@nhaxinh.com</li>
              <li>Giờ làm việc: 9:00 - 21:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-700 py-6 text-sm text-neutral-400 text-center">
          <p>© 2024 365homevn. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
