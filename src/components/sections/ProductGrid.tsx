import React from 'react';
import Container from '../common/Container';
import Card from '../common/Card';
import Link from '../common/Link';
import { Product } from '@/types';

interface ProductGridProps {
  title: string;
  products: Product[];
  viewAllLink?: string;
  className?: string;
}

export default function ProductGrid({ 
  title, 
  products, 
  viewAllLink,
  className = '' 
}: ProductGridProps) {
  return (
    <section className={`py-16 ${className}`}>
      <Container>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">{title}</h2>
          {viewAllLink && (
            <Link 
              href={viewAllLink}
              className="text-sm text-neutral-600 hover:text-neutral-800 transition-colors underline"
            >
              xem tất cả
            </Link>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
