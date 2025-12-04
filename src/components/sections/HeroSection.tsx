import React from 'react';
import Container from '../common/Container';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  image?: string;
  className?: string;
}

export default function HeroSection({ 
  title, 
  subtitle, 
  image = 'https://placehold.co/1920x600/8B7355/fff?text=Nha+Xinh+Furniture',
  className = '' 
}: HeroSectionProps) {
  return (
    <section className={`relative h-[400px] md:h-[600px] bg-neutral-100 ${className}`}>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      {(title || subtitle) && (
        <Container className="relative h-full flex items-center justify-center text-center">
          <div className="text-white">
            {title && <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>}
            {subtitle && <p className="text-lg md:text-xl">{subtitle}</p>}
          </div>
        </Container>
      )}
    </section>
  );
}
