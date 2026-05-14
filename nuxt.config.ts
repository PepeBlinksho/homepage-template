import { siteConfig } from './app/config/site'
import { demoRegistry, DEMO_SUB_ROUTES } from './app/config/demoRegistry'
import { corpRegistry, CORP_SUB_ROUTES } from './app/config/corpRegistry'

// Vercel ビルド時のみ env 強制チェック。GitHub Actions CI（lint/typecheck）や
// ローカル開発では発火させない（process.env.VERCEL は Vercel ビルドのみ "1"）
if (process.env.VERCEL && !process.env.NUXT_PUBLIC_SITE_URL) {
  throw new Error(
    '[homepage-template] NUXT_PUBLIC_SITE_URL が未設定です。'
    + ' canonical URL・OGタグが example.com になるため本番ビルドには必須です。'
    + ' Vercel の Environment Variables に設定してください。',
  )
}

const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || siteConfig.seo.siteUrl
const hasMicroCms = !!process.env.NUXT_MICROCMS_API_KEY

function buildDemoRouteRules() {
  const rules: Record<string, object> = {}
  for (const demo of demoRegistry) {
    for (const sub of DEMO_SUB_ROUTES) {
      // /contact は nuxt-csurf の CSRF cookie 設定に SSR が必要なためプリレンダリング除外
      if (sub === '/contact') continue
      rules[`/${demo.slug}${sub}`] = { prerender: true }
    }
  }
  for (const corp of corpRegistry) {
    for (const sub of CORP_SUB_ROUTES) {
      if (sub === '/contact') continue
      rules[`/${corp.slug}${sub}`] = { prerender: true }
    }
  }
  return rules
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-csurf',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@vueuse/nuxt',
  ],

  devtools: {
    enabled: true,
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      meta: [
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: siteUrl,
  },

  runtimeConfig: {
    resendApiKey: '',
    contactEmail: '',
    contactFromEmail: '',
    microcmsApiKey: '',
    public: {
      siteUrl,
      gaId: process.env.NUXT_PUBLIC_GA_ID || '',
      microcmsServiceDomain: '',
    },
  },

  routeRules: {
    // セキュリティヘッダー（全ルート共通）
    '/**': {
      headers: {
        'x-content-type-options': 'nosniff',
        'x-frame-options': 'DENY',
        'referrer-policy': 'strict-origin-when-cross-origin',
        'permissions-policy': 'camera=(), microphone=(), geolocation=()',
      },
    },

    // デモ・テンプレートルートはインデックス対象外
    '/shop/**': { headers: { 'X-Robots-Tag': 'noindex, nofollow' } },
    '/demo/**': { headers: { 'X-Robots-Tag': 'noindex, nofollow' } },
    '/beauty/**': { headers: { 'X-Robots-Tag': 'noindex, nofollow' } },
    '/corp/**': { headers: { 'X-Robots-Tag': 'noindex, nofollow' } },

    // ページ：プリレンダリング（/contact は SSR 必須のため除外）
    '/': { prerender: true },
    '/menu': { prerender: true },
    '/news': { prerender: true },
    '/privacy': { prerender: true },
    '/news/**': { prerender: true },

    // デモ・corpルートは demoRegistry / corpRegistry から自動生成
    ...buildDemoRouteRules(),

    // ビルド済み静的アセット（コンテンツハッシュ付き）：永久キャッシュ
    '/_nuxt/**': {
      headers: { 'cache-control': 'public, max-age=31536000, immutable' },
    },

    // public/images/ のオリジナル画像：1年キャッシュ
    '/images/**': {
      headers: {
        'cache-control': 'public, max-age=31536000, stale-while-revalidate=86400',
      },
    },

    // @nuxt/image が生成する最適化済み画像（/_ipx/）
    '/_ipx/**': {
      headers: {
        'cache-control': 'public, max-age=31536000, s-maxage=31536000, stale-while-revalidate=86400',
      },
    },

    '/favicon.*': {
      headers: { 'cache-control': 'public, max-age=604800' },
    },
    '/robots.txt': {
      headers: { 'cache-control': 'public, max-age=86400' },
    },
  },

  compatibilityDate: '2025-01-15',

  // CSRF 保護（nuxt-csurf）
  // encryptSecret: Vercel のサーバーレス環境でトークンを安定して復号するために必要
  // 環境変数 NUXT_CSRF_SECRET（32文字以上推奨）を設定すること
  csurf: {
    encryptSecret: process.env.NUXT_CSRF_SECRET,
    cookie: {
      sameSite: 'lax',
    },
    methodsToProtect: ['POST', 'PUT', 'PATCH'],
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'always-multiline',
        braceStyle: '1tbs',
      },
    },
  },

  fonts: {
    families: [
      { name: 'Noto Serif JP', weights: [400, 500, 600, 700] },
      { name: 'Noto Sans JP', weights: [300, 400, 500, 700] },
    ],
  },

  sitemap: {
    ...(hasMicroCms ? { sources: ['/api/sitemap-news'] } : {}),
    urls: [
      { loc: '/', priority: 1.0, changefreq: 'weekly' },
      { loc: '/menu', priority: 0.8, changefreq: 'monthly' },
      { loc: '/news', priority: 0.8, changefreq: 'weekly' },
      { loc: '/contact', priority: 0.7, changefreq: 'yearly' },
      ...(hasMicroCms
        ? []
        : siteConfig.news.map(n => ({
            loc: `/news/${n.id}`,
            priority: 0.6 as const,
            lastmod: n.date,
          }))),
    ],
  },

})
