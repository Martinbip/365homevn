'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Container from '../common/Container';
import Link from '../common/Link';
import MobileMenu from '@/components/layout/MobileMenu';
import { mainMenu } from '@/data/navigation';

interface NavigationProps {
  isScrolled?: boolean;
  isHomePage?: boolean;
}

export default function Navigation({ isScrolled = false, isHomePage = false }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <>
      <nav 
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-sm top-10' 
            : isHomePage 
              ? 'bg-transparent top-0' 
              : 'bg-white shadow-sm top-10'
        }`}
      >
        <div className="flex items-center justify-between h-28">
          {/* Logo - flush to left edge */}
          <Link href="/" className="flex-shrink-0 pl-4 md:pl-8">
            <Image
              src="/365homevn.png"
              alt="365home.com.vn"
              width={350}
              height={100}
              className={`h-28 w-auto transition-all duration-300 ${
                isHomePage && !isScrolled ? '' : 'invert'
              }`}
              priority
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 mr-4 ${
              isHomePage && !isScrolled ? 'text-white' : 'text-neutral-800'
            }`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 pr-4 md:pr-8 h-full">
              {mainMenu.map((item) => (
                <div
                  key={item.label}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`transition-colors font-medium uppercase text-sm flex items-center gap-1 ${
                      isHomePage && !isScrolled
                        ? 'text-white hover:text-neutral-200'
                        : 'text-neutral-800 hover:text-neutral-600'
                    }`}
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
                        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
                          isScrolled ? 'top-[150px]' : 'top-[110px]'
                        }`}
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
          </div>
        </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
