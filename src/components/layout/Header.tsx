'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import TopBar from './TopBar';
import Navigation from './Navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <TopBar isScrolled={isScrolled} isHomePage={isHomePage} />
      <Navigation isScrolled={isScrolled} isHomePage={isHomePage} />
    </header>
  );
}
