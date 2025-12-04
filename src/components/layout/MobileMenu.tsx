'use client';

import React, { useState } from 'react';
import Link from '../common/Link';
import { mainMenu } from '@/data/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="fixed left-0 top-0 bottom-0 w-80 bg-white z-50 overflow-y-auto md:hidden shadow-2xl">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={onClose} className="p-2 hover:bg-neutral-100 rounded">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="space-y-4">
            {mainMenu.map((item) => (
              <div key={item.label} className="border-b pb-4">
                <button
                  onClick={() => setExpandedSection(expandedSection === item.label ? null : item.label)}
                  className="w-full flex items-center justify-between text-left font-medium py-2"
                >
                  {item.label}
                  <svg
                    className={`w-5 h-5 transition-transform ${expandedSection === item.label ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {expandedSection === item.label && item.submenu && (
                  <div className="mt-2 space-y-4 pl-4">
                    {item.submenu.map((section) => (
                      <div key={section.title}>
                        <h3 className="font-semibold text-sm text-neutral-700 mb-2">
                          {section.title}
                        </h3>
                        <ul className="space-y-1.5">
                          {section.items.map((subItem) => (
                            <li key={subItem.href}>
                              <Link
                                href={subItem.href}
                                className="text-sm text-neutral-600 hover:text-neutral-800 block py-1"
                                onClick={onClose}
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
          </nav>

          <div className="mt-6 pt-6 border-t">
            <Link
              href="/tai-khoan"
              className="block py-2 text-center bg-neutral-800 text-white rounded hover:bg-neutral-700 transition-colors"
              onClick={onClose}
            >
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
