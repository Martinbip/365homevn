'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Container from '../common/Container';
import Link from '../common/Link';
import MobileMenu from '@/components/layout/MobileMenu';
import { mainMenu } from '@/data/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <>
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/365homevn.png"
                alt="365homevn"
                width={300}
                height={100}
                className="h-20 w-auto md:h-24 invert"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {mainMenu.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="text-neutral-800 hover:text-neutral-600 transition-colors font-medium"
                  >
                    {item.label}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.submenu && activeDropdown === item.label && (
                    <div className="absolute left-0 top-full mt-2 bg-white shadow-xl rounded-lg p-6 min-w-[600px] grid grid-cols-2 gap-6">
                      {item.submenu.map((section) => (
                        <div key={section.title}>
                          <h3 className="font-semibold text-neutral-800 mb-3 pb-2 border-b">
                            {section.title}
                          </h3>
                          <ul className="space-y-2">
                            {section.items.map((subItem) => (
                              <li key={subItem.href}>
                                <Link
                                  href={subItem.href}
                                  className="text-sm text-neutral-600 hover:text-neutral-800 transition-colors"
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
              <Link href="/tai-khoan" className="hidden md:block text-sm hover:text-neutral-600 transition-colors">
                Đăng nhập
              </Link>
            </div>
          </div>
        </Container>
      </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
