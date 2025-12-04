import React from 'react';
import Container from '../common/Container';
import Link from '../common/Link';
import Image from 'next/image';
import { FeaturedCollection } from '@/types';

interface FeaturedShowcaseProps {
  collections: FeaturedCollection[];
  className?: string;
}

export default function FeaturedShowcase({ 
  collections, 
  className = '' 
}: FeaturedShowcaseProps) {
  return (
    <section className={`py-8 md:py-12 ${className}`}>
      <Container maxWidth="2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {collections.map((collection, index) => {
            const isLarge = collection.size === 'large' || index === 0;
            
            return (
              <Link
                key={collection.id}
                href={collection.href}
                className={`group relative block overflow-hidden ${
                  isLarge ? 'md:row-span-2' : ''
                }`}
              >
                <div className={`relative ${isLarge ? 'h-[400px] md:h-[700px]' : 'h-[300px] md:h-[340px]'} bg-neutral-100`}>
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Text content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {collection.subtitle && (
                      <p className="text-white/80 text-sm font-light mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {collection.subtitle}
                      </p>
                    )}
                    <h3 className="text-white text-xl md:text-2xl font-light tracking-wide">
                      {collection.title}
                    </h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
