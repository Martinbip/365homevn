import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';

interface CardProps {
  product: Product;
  className?: string;
}

export default function Card({ product, className = '' }: CardProps) {
  return (
    <div className={`group ${className}`}>
      <Link href={product.link} className="block">
        <div className="relative overflow-hidden bg-neutral-100 mb-3 aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="text-sm md:text-base font-medium text-neutral-800 group-hover:text-neutral-600 transition-colors line-clamp-2">
          {product.name}
        </h3>
        {product.price && (
          <p className="mt-1 text-sm text-neutral-600">{product.price}</p>
        )}
      </Link>
    </div>
  );
}
