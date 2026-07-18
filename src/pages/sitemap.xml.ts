import type { APIRoute } from 'astro'
import { hybrids } from '../data/hybrids'

const BASE = 'https://asprossemillas.com'

const staticPages = [
  '',
  '/hibridos',
  '/resultados',
  '/innovacion',
  '/historia',
  '/hablemos',
  '/zonas',
  '/bolsa-de-trabajo',
]

export const prerender = true

export const GET: APIRoute = async () => {
  const urls = [
    ...staticPages.map(p => ({
      loc: `${BASE}${p}`,
      changefreq: 'monthly',
      priority: p === '' ? '1.0' : '0.8',
    })),
    ...hybrids.map(h => ({
      loc: `${BASE}/hibridos/${h.slug}`,
      changefreq: 'monthly',
      priority: '0.9',
    })),
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
