import React from 'react';
import Container from '@/components/common/Container';

export default function AccountPage() {
  return (
    <main className="py-16 md:py-24">
      <Container>
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Đăng nhập</h1>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-transparent"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-2">
                Mật khẩu
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-3 border border-neutral-300 rounded focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-transparent"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-neutral-800 text-white font-medium rounded hover:bg-neutral-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-800"
            >
              Đăng nhập
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-neutral-600">
              Chưa có tài khoản?{' '}
              <a href="#" className="text-neutral-800 font-medium hover:underline">
                Đăng ký ngay
              </a>
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
