'use client';

import React from 'react';
import Container from '../common/Container';
import Link from '../common/Link';
import { topBarLinks } from '@/data/navigation';

export default function TopBar() {
  return (
    <div className="bg-neutral-800 text-white py-2 text-sm">
      <Container>
        <div className="flex items-center justify-between">
          <div className="text-xs sm:text-sm">
            Black Season, ưu đãi đến 70% cơ hội cuối cùng đến hết 7.12
          </div>
          <nav className="hidden md:flex items-center gap-4 text-xs">
            {topBarLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="hover:text-neutral-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2">
              <button className="hover:text-neutral-300">VN</button>
              <span>|</span>
              <button className="hover:text-neutral-300">EN</button>
            </div>
          </nav>
        </div>
      </Container>
    </div>
  );
}
