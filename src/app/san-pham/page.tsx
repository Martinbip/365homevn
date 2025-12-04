'use client';

import { useState } from 'react';
import Container from '@/components/common/Container';
import Link from 'next/link';
import Image from 'next/image';
import { newProducts } from '@/data/products';

export default function SanPhamPage() {
  const [showMoreProducts, setShowMoreProducts] = useState(false);
  const displayProducts = showMoreProducts ? [...newProducts, ...newProducts] : newProducts;

  return (
    <main className="bg-white">
      {/* Hero Banner with Title */}
      <div className="relative h-[300px] md:h-[400px] bg-neutral-200">
        <Image
          src="/hero.jpg"
          alt="Sản phẩm"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay content */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-8 left-8 md:left-16 text-white">
          <h1 className="text-3xl md:text-4xl font-light mb-2">Sản phẩm</h1>
          <nav className="text-sm opacity-80">
            <Link href="/" className="hover:underline">Trang chủ</Link>
            <span className="mx-2">/</span>
            <span>Sản phẩm</span>
          </nav>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="border-b">
        <Container>
          <div className="py-6 flex flex-wrap items-center gap-4 md:gap-8">
            {/* Price Filter */}
            <div className="flex flex-col">
              <label className="text-xs text-neutral-500 mb-1">Giá</label>
              <select className="text-sm border-b border-neutral-300 pb-1 pr-8 bg-transparent focus:outline-none focus:border-neutral-800 min-w-[180px]">
                <option>Theo mức độ phổ biến</option>
                <option>Giá: Thấp đến cao</option>
                <option>Giá: Cao đến thấp</option>
                <option>Mới nhất</option>
              </select>
            </div>

            {/* Material Filter */}
            <div className="flex flex-col">
              <label className="text-xs text-neutral-500 mb-1">Chất liệu</label>
              <select className="text-sm border-b border-neutral-300 pb-1 pr-8 bg-transparent focus:outline-none focus:border-neutral-800 min-w-[180px]">
                <option>Tất cả</option>
                <option>Gỗ tự nhiên</option>
                <option>Gỗ công nghiệp</option>
                <option>Da</option>
                <option>Vải</option>
                <option>Kim loại</option>
              </select>
            </div>

            {/* Apply Button */}
            <button className="ml-auto px-6 py-2 bg-neutral-800 text-white text-sm font-medium hover:bg-neutral-700 transition-colors">
              ÁP DỤNG
            </button>
          </div>
        </Container>
      </div>

      {/* Product Grid - Full Width */}
      <div className="px-4 md:px-8 lg:px-12">
        <div className="py-10 md:py-16">
          {/* Products */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
            {displayProducts.map((product, index) => {
              // Use deterministic values based on index (no Math.random())
              const hasDiscount = index % 3 === 0;
              const isNew = index % 5 === 2;
              const discountPercent = hasDiscount ? [15, 20, 25, 30, 10][index % 5] : 0;
              
              return (
                <div 
                  key={`${product.id}-${index}`}
                  className="group relative text-center"
                >
                  {/* Product Image Container */}
                  <div className="relative bg-white mb-4">
                    {/* Discount Badge */}
                    {hasDiscount && (
                      <span className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        -{discountPercent}%
                      </span>
                    )}
                    
                    {/* New Badge */}
                    {isNew && (
                      <span className="absolute top-2 right-2 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1">
                        New
                      </span>
                    )}

                    <Link href={product.link}>
                      <div className="relative aspect-square overflow-hidden flex items-center justify-center p-4 bg-neutral-50">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </Link>

                    {/* Hover Buttons */}
                    <div className="absolute bottom-0 left-0 right-0 flex opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button 
                        className="flex-1 py-3 bg-white border border-neutral-200 text-neutral-800 text-xs font-semibold hover:bg-neutral-100 transition-colors"
                        onClick={(e) => e.preventDefault()}
                      >
                        THÊM VÀO GIỎ
                      </button>
                      <Link 
                        href={product.link}
                        className="flex-1 py-3 bg-neutral-800 text-white text-xs font-semibold hover:bg-neutral-700 transition-colors text-center"
                      >
                        XEM THÊM
                      </Link>
                    </div>
                  </div>

                  {/* Wishlist Icon */}
                  <div className="flex justify-end mb-2">
                    <button 
                      className="text-neutral-400 hover:text-red-500 transition-colors"
                      onClick={(e) => e.preventDefault()}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Product Name */}
                  <Link href={product.link}>
                    <h3 className="text-sm text-neutral-800 group-hover:text-neutral-600 transition-colors mb-2 line-clamp-2 min-h-[40px]">
                      {product.name}
                    </h3>
                  </Link>
                  
                  {/* Price */}
                  {product.price && (
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-red-600">{product.price}</p>
                      {hasDiscount && (
                        <p className="text-xs text-neutral-400 line-through">
                          {parseInt(product.price.replace(/\D/g, '')) * 1.2} VND
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Load More Button */}
          {!showMoreProducts && (
            <div className="text-center mt-12">
              <button 
                onClick={() => setShowMoreProducts(true)}
                className="px-10 py-3 border-2 border-neutral-800 text-neutral-800 font-medium hover:bg-neutral-800 hover:text-white transition-colors"
              >
                Xem thêm sản phẩm
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

