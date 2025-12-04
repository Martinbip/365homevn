import React from 'react';
import NextLink from 'next/link';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

export default function Link({ 
  href, 
  children, 
  className = '',
  external = false,
  onClick
}: LinkProps) {
  if (external || href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
    return (
      <a 
        href={href} 
        className={className}
        onClick={onClick}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={className} onClick={onClick}>
      {children}
    </NextLink>
  );
}

