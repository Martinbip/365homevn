import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';

interface ProductGridProps {
  title: string;
  subtitle?: string;
  products: Product[];
  viewAllLink?: string;
  className?: string;
}

export default function ProductGrid({ 
  title, 
  subtitle,
  products, 
  viewAllLink,
  className = '' 
}: ProductGridProps) {
  return (
    <section className={`py-8 md:py-12 bg-[#f5f0e8] ${className}`}>
      {/* Full-width container */}
      <div className="px-4 md:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-neutral-800 tracking-tight mb-6 md:mb-8">
          {title}
          {subtitle && <span className="block text-base md:text-lg text-neutral-500 font-normal mt-2">{subtitle}</span>}
        </h2>

        {/* Asymmetric Grid - First item large */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {products.map((product, index) => {
            const isFirst = index === 0;
            
            return (
              <Link 
                key={product.id} 
                href={product.link}
                className={`group block relative ${isFirst ? 'col-span-2 row-span-2' : ''}`}
              >
                <div className={`relative bg-[#e8e2d8] overflow-hidden ${isFirst ? 'aspect-square' : 'aspect-square'}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <h3 className="text-xs md:text-sm font-medium text-neutral-800 uppercase tracking-wider">
                    {product.name}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>

        {viewAllLink && (
          <div className="text-center mt-10">
            <Link 
              href={viewAllLink}
              className="inline-block px-8 py-3 border border-neutral-800 text-neutral-800 text-sm font-medium hover:bg-neutral-800 hover:text-white transition-colors"
            >
              Xem tất cả sản phẩm
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
