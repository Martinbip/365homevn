import React from 'react';
import Container from '../common/Container';
import Link from '../common/Link';
import Image from 'next/image';
import { Story } from '@/types';

interface StoriesSectionProps {
  title: string;
  stories: Story[];
  viewAllLink?: string;
  className?: string;
}

export default function StoriesSection({ 
  title,
  stories, 
  viewAllLink,
  className = '' 
}: StoriesSectionProps) {
  return (
    <section className={`py-16 md:py-24 bg-neutral-50 ${className}`}>
      <Container>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-light text-neutral-800 tracking-wide">
            {title}
          </h2>
          {viewAllLink && (
            <Link 
              href={viewAllLink}
              className="text-sm text-neutral-500 hover:text-neutral-800 transition-colors underline underline-offset-4"
            >
              Xem tất cả
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Link
              key={story.id}
              href={story.href}
              className="group flex flex-col h-full"
            >
              <div className="relative h-64 md:h-72 bg-neutral-200 overflow-hidden mb-5">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="flex flex-col flex-grow">
                {story.category && (
                  <p className="text-xs text-neutral-400 uppercase tracking-wider font-medium mb-2">
                    {story.category}
                  </p>
                )}
                <h3 className="text-lg font-medium text-neutral-800 group-hover:text-neutral-600 transition-colors mb-2">
                  {story.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2 mb-4">
                  {story.excerpt}
                </p>
                {/* Push "Đọc thêm" to bottom with mt-auto */}
                <span className="mt-auto inline-block text-sm text-neutral-600 underline underline-offset-4 group-hover:text-neutral-800 transition-colors">
                  Đọc thêm
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
