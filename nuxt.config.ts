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
    '/': { prerender: true },
    '/menu': { prerender: true },
    '/news': { prerender: true },
    '/contact': { prerender: true },
    '/news/**': { prerender: true },
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
        priority: 0.6,
        lastmod: n.date,
      })),
    ],
  },

  // ランタイム設定（composable からアクセス可能）
  runtimeConfig: {
    public: {
      siteUrl,
    },
  },

  // ページトランジション
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;500;600;700&family=Noto+Sans+JP:wght@300;400;500;700&display=swap',
        },
      ],
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
