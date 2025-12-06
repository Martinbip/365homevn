import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/tai-khoan/', '/api/'],
    },
    sitemap: 'https://365home.com.vn/sitemap.xml',
  };
}
