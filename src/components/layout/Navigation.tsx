'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Container from '../common/Container';
import Link from '../common/Link';
import MobileMenu from '@/components/layout/MobileMenu';
import { mainMenu } from '@/data/navigation';

interface NavigationProps {
  isHomePage?: boolean;
}

export default function Navigation({ isHomePage = false }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  // Close dropdown when navigating to a new page
  useEffect(() => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  }, [pathname]);

  // Clear timer on unmount
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (label: string) => {
    // Clear any pending close timer
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    // Delay closing to allow user to move to dropdown
    closeTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 500); // 150ms delay
  };

  return (
    <>
      <nav className={`${
        isHomePage 
          ? 'absolute top-0 left-0 right-0 bg-transparent z-50' 
          : 'relative bg-white shadow-sm'
      }`}>
        <div className="flex items-center justify-between h-28">
          {/* Logo - flush to left edge */}
          <Link href="/" className="flex-shrink-0 pl-4 md:pl-8">
            <Image
              src="/365homevn.png"
              alt="365home.com.vn"
              width={350}
              height={100}
              className={`h-28 w-auto ${
                isHomePage ? '' : 'invert'
              }`}
              priority
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 mr-4 ${
              isHomePage ? 'text-white' : 'text-neutral-800'
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
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={`transition-colors font-medium uppercase text-sm flex items-center gap-1 ${
                      isHomePage
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
                      {/* Invisible bridge to connect menu item to dropdown - full width for easier mouse movement */}
                      <div className="absolute top-full left-0 right-0 h-8 bg-transparent" />
                      
                      <div 
                        className="fixed left-0 right-0 z-40"
                        style={{ top: isHomePage ? '112px' : '152px' }}
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
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
