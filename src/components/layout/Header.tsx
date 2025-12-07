'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import TopBar from './TopBar';
import Navigation from './Navigation';

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <header>
      <TopBar isHomePage={isHomePage} />
      <Navigation isHomePage={isHomePage} />
    </header>
  );
}
