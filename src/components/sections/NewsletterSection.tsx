'use client';

import React, { useState } from 'react';
import Container from '../common/Container';

interface NewsletterSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function NewsletterSection({ 
  title = 'Đăng ký nhận tin',
  subtitle = 'Nhận thông tin mới nhất về sản phẩm và ưu đãi đặc biệt từ 365home.com.vn',
  className = '' 
}: NewsletterSectionProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulate success - in real app, call API
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className={`py-16 md:py-20 bg-neutral-800 ${className}`}>
      <Container maxWidth="lg">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-wide mb-4">
            {title}
          </h2>
          <p className="text-neutral-400 text-sm md:text-base mb-8">
            {subtitle}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email của bạn"
              className="flex-1 px-5 py-3 bg-neutral-700 border border-neutral-600 text-white placeholder-neutral-400 focus:outline-none focus:border-neutral-400 transition-colors text-sm"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-neutral-800 font-medium text-sm hover:bg-neutral-100 transition-colors"
            >
              Đăng ký
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-green-400 text-sm">
              Cảm ơn bạn đã đăng ký!
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
