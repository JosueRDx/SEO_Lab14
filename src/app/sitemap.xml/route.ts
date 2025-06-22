import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://rdx-web.onrender.com';

  const staticRoutes = ['/', '/about', '/contact'];

  const blogPosts = [
    { slug: 'mi-primera-publicacion' },
    { slug: 'tips-para-desarrolladores' },
  ];

  const dynamicRoutes = blogPosts.map((post) => `/blog/${post.slug}`);

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allRoutes
      .map(
        (route) => `
      <url>
        <loc>${baseUrl}${route}</loc>
      </url>`
      )
      .join('')}
  </urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}