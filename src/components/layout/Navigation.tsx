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
                alt="365home.com.vn"
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
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="text-neutral-800 hover:text-neutral-600 transition-colors font-medium uppercase text-sm flex items-center gap-1"
                  >
                    {item.label}
                    {item.submenu && (
                      <svg 
                        className={`w-3 h-3 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.submenu && activeDropdown === item.label && (
                    <>
                      {/* Invisible bridge to connect menu item to dropdown */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-32 h-[30px] bg-transparent" />
                      
                      <div 
                        className="fixed left-0 right-0 z-40 top-[110px]"
                        onMouseEnter={() => setActiveDropdown(item.label)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="bg-white shadow-2xl border-t">
                          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="py-8 flex gap-8">
                              {/* Menu Columns - Flex layout */}
                              <div className="flex-1 grid grid-cols-6 gap-6">
                                {item.submenu.map((section) => (
                                  <div key={section.title}>
                                    <h3 className="font-bold text-neutral-800 mb-4 text-sm uppercase">
                                      {section.title}
                                    </h3>
                                    <ul className="space-y-2.5">
                                      {section.items.map((subItem) => (
                                        <li key={subItem.href}>
                                          <Link
                                            href={subItem.href}
                                            className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors block"
                                          >
                                            {subItem.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                              
                              {/* Featured Image */}
                              {item.label === 'Sản phẩm' && (
                                <div className="flex-shrink-0" style={{ width: '240px' }}>
                                  <div className="relative h-64 bg-neutral-100 rounded overflow-hidden">
                                    <img
                                      src="https://placehold.co/240x320/8B7355/fff?text=Living+Room"
                                      alt="Featured"
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Search Box */}
            <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Tìm sản phẩm"
                  className="w-full px-4 py-2 pr-10 border border-neutral-300 rounded-md focus:outline-none focus:border-neutral-500 text-sm"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-neutral-100 rounded">
                  <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
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
