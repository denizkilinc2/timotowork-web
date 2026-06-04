import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: [
      'https://www.ttw-international.de/sitemap.xml',
      'https://www.ttw-international.nl/sitemap.xml',
    ],
  }
}
