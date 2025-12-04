import React from 'react';
import Container from '../common/Container';
import Link from '../common/Link';

interface AboutSectionProps {
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  className?: string;
}

export default function AboutSection({ 
  title, 
  description, 
  link,
  linkText = 'Xem thêm',
  className = '' 
}: AboutSectionProps) {
  return (
    <section className={`py-16 bg-neutral-50 ${className}`}>
      <Container maxWidth="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-6">
            {title}
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-8">
            {description}
          </p>
          {link && (
            <Link 
              href={link}
              className="inline-block px-6 py-3 bg-neutral-800 text-white rounded hover:bg-neutral-700 transition-colors"
            >
              {linkText}
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}
