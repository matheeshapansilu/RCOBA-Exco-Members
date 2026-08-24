import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/login', '/login'],
    },
    sitemap: 'https://rcoba-web.vercel.app/sitemap.xml',
  }
}