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

// Generate static params for all known construction project slugs
export async function generateStaticParams() {
  return [
    { slug: 'xay-dung-noi-that' },
    { slug: 'xay-dung-ngoai-that' },
    { slug: 'xay-dung-tron-goi' },
  ];
}
