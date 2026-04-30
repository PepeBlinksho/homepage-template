import { siteConfig } from './app/config/site'

const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || siteConfig.seo.siteUrl

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/sitemap',
  ],

  devtools: {
    enabled: true,
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    // ページ：プリレンダリング
    '/': { prerender: true },
    '/menu': { prerender: true },
    '/news': { prerender: true },
    '/contact': { prerender: true },
    '/privacy': { prerender: true },
    '/news/**': { prerender: true },

    // ビルド済み静的アセット（コンテンツハッシュ付き）：永久キャッシュ
    '/_nuxt/**': {
      headers: { 'cache-control': 'public, max-age=31536000, immutable' },
    },

    // public/images/ のオリジナル画像：1年キャッシュ
    // ファイル名を変えずに差し替えるケースを考慮し immutable は付けない
    '/images/**': {
      headers: {
        'cache-control': 'public, max-age=31536000, stale-while-revalidate=86400',
      },
    },

    // @nuxt/image が生成する最適化済み画像（/_ipx/）：CDN でも1年保持
    '/_ipx/**': {
      headers: {
        'cache-control': 'public, max-age=31536000, s-maxage=31536000, stale-while-revalidate=86400',
      },
    },

    // favicon・robots.txt など静的ファイル：1週間（ブランド変更に追従しやすくする）
    '/favicon.*': {
      headers: { 'cache-control': 'public, max-age=604800' },
    },
    '/robots.txt': {
      headers: { 'cache-control': 'public, max-age=86400' },
    },
  },

  compatibilityDate: '2025-01-15',

  // サイトURL（sitemap / canonical に使用）
  site: {
    url: siteUrl,
  },

  // サイトマップ設定
  sitemap: {
    urls: [
      { loc: '/', priority: 1.0, changefreq: 'weekly' },
      { loc: '/menu', priority: 0.8, changefreq: 'monthly' },
      { loc: '/news', priority: 0.8, changefreq: 'weekly' },
      { loc: '/contact', priority: 0.7, changefreq: 'yearly' },
      ...siteConfig.news.map(n => ({
        loc: `/news/${n.id}`,
        priority: 0.6 as 0.6,
        lastmod: n.date,
      })),
    ],
  },

  // ランタイム設定（composable からアクセス可能）
  runtimeConfig: {
    // サーバーサイドのみ（環境変数で上書き可能: NUXT_RESEND_API_KEY など）
    resendApiKey: '',
    contactEmail: '',
    contactFromEmail: '',
    public: {
      siteUrl,
    },
  },

  // Google Fonts（@nuxt/fonts 経由で最適化配信）
  fonts: {
    families: [
      { name: 'Noto Serif JP', weights: [400, 500, 600, 700] },
      { name: 'Noto Sans JP', weights: [300, 400, 500, 700] },
    ],
  },

  // ページトランジション
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      meta: [
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    },
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs',
      },
    },
  },
})
