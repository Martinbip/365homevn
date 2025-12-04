import React from 'react';
import Container from '../common/Container';

interface IntroSectionProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function IntroSection({ 
  title, 
  subtitle,
  className = '' 
}: IntroSectionProps) {
  return (
    <section className={`py-20 md:py-28 bg-white ${className}`}>
      <Container maxWidth="lg">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-800 leading-tight tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-6 text-lg md:text-xl text-neutral-500 font-light leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
