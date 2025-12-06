import React from 'react';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = decodeURIComponent(slug).replace(/-/g, ' ');

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 capitalize">{title}</h1>
      <p className="text-lg text-gray-600">
        Nội dung đang được cập nhật...
      </p>
    </div>
  );
}

// Generate static params for all known design interior slugs
export async function generateStaticParams() {
  return [
    { slug: 'hien-dai' },
    { slug: 'tan-co-dien' },
    { slug: 'minimalist' },
    { slug: 'scandinavian' },
    { slug: 'phong-khach' },
    { slug: 'phong-ngu' },
    { slug: 'phong-bep' },
    { slug: 'phong-lam-viec' },
    { slug: 'can-ho' },
    { slug: 'nha-pho' },
    { slug: 'biet-thu' },
    { slug: 'van-phong' },
  ];
}
