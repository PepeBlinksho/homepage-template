#!/usr/bin/env node
/**
 * クライアント案件初期化スクリプト
 * 使い方: node scripts/init-client.mjs
 *
 * - デモ・ショーケース用コードをすべて除去
 * - shop / corp を選択してルートをフラットに整理
 * - NUXT_CSRF_SECRET を自動生成して .env.local に書き出す
 * - Vercel 設定に必要な環境変数をまとめて出力する
 */

import {
  writeFileSync, rmSync, existsSync, readdirSync, copyFileSync,
} from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { randomBytes } from 'node:crypto'
import { createInterface } from 'node:readline'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const rl = createInterface({ input: process.stdin, output: process.stdout })
const ask = q => new Promise(resolve => rl.question(q, resolve))

const ok   = msg => console.log(`  \x1b[32m✓\x1b[0m ${msg}`)
const skip = msg => console.log(`  \x1b[90m─\x1b[0m ${msg} (スキップ)`)
const info = msg => console.log(`  \x1b[34mℹ\x1b[0m ${msg}`)
const head = msg => console.log(`\n\x1b[1m${msg}\x1b[0m\n`)

function write(relPath, content) {
  writeFileSync(join(ROOT, relPath), content, 'utf-8')
  ok(`${relPath} を更新`)
}

function del(relPath) {
  const full = join(ROOT, relPath)
  if (!existsSync(full)) { skip(relPath); return }
  rmSync(full, { recursive: true, force: true })
  ok(`${relPath} を削除`)
}

function move(src, dest) {
  const srcFull = join(ROOT, src)
  if (!existsSync(srcFull)) { skip(src); return }
  copyFileSync(srcFull, join(ROOT, dest))
  rmSync(srcFull)
  ok(`${src} → ${dest}`)
}

// ─── 生成コンテンツ ──────────────────────────────────────────────────────────

const SHOP_NUXT_CONFIG = `import { siteConfig } from './app/config/site'

const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || siteConfig.seo.siteUrl
const hasMicroCms = !!process.env.NUXT_MICROCMS_API_KEY

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-csurf',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/sitemap',
  ],

  devtools: {
    enabled: true,
  },

  css: ['~/assets/css/main.css'],

  csurf: {
    encryptSecret: process.env.NUXT_CSRF_SECRET,
    cookie: {
      sameSite: 'lax',
    },
    methodsToProtect: ['POST', 'PUT', 'PATCH'],
  },

  routeRules: {
    '/**': {
      headers: {
        'x-content-type-options': 'nosniff',
        'x-frame-options': 'DENY',
        'referrer-policy': 'strict-origin-when-cross-origin',
        'permissions-policy': 'camera=(), microphone=(), geolocation=()',
      },
    },
    '/': { prerender: true },
    '/menu': { prerender: true },
    '/news': { prerender: true },
    '/privacy': { prerender: true },
    '/news/**': { prerender: true },
    '/_nuxt/**': {
      headers: { 'cache-control': 'public, max-age=31536000, immutable' },
    },
    '/images/**': {
      headers: {
        'cache-control': 'public, max-age=31536000, stale-while-revalidate=86400',
      },
    },
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

  site: {
    url: siteUrl,
  },

  sitemap: {
    ...(hasMicroCms ? { sources: ['/api/sitemap-news'] } : {}),
    urls: [
      { loc: '/', priority: 1.0, changefreq: 'weekly' },
      { loc: '/menu', priority: 0.8, changefreq: 'monthly' },
      { loc: '/news', priority: 0.8, changefreq: 'weekly' },
      { loc: '/contact', priority: 0.7, changefreq: 'yearly' },
      ...(hasMicroCms ? [] : siteConfig.news.map(n => ({
        loc: \`/news/\${n.id}\`,
        priority: 0.6 as 0.6,
        lastmod: n.date,
      }))),
    ],
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

  fonts: {
    families: [
      { name: 'Noto Serif JP', weights: [400, 500, 600, 700] },
      { name: 'Noto Sans JP', weights: [300, 400, 500, 700] },
    ],
  },

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
`

const CORP_NUXT_CONFIG = `import { corpConfig } from './app/config/corp'

const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || corpConfig.seo.siteUrl

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-csurf',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/sitemap',
  ],

  devtools: {
    enabled: true,
  },

  css: ['~/assets/css/main.css'],

  csurf: {
    encryptSecret: process.env.NUXT_CSRF_SECRET,
    cookie: {
      sameSite: 'lax',
    },
    methodsToProtect: ['POST', 'PUT', 'PATCH'],
  },

  routeRules: {
    '/**': {
      headers: {
        'x-content-type-options': 'nosniff',
        'x-frame-options': 'DENY',
        'referrer-policy': 'strict-origin-when-cross-origin',
        'permissions-policy': 'camera=(), microphone=(), geolocation=()',
      },
    },
    '/': { prerender: true },
    '/privacy': { prerender: true },
    '/_nuxt/**': {
      headers: { 'cache-control': 'public, max-age=31536000, immutable' },
    },
    '/images/**': {
      headers: {
        'cache-control': 'public, max-age=31536000, stale-while-revalidate=86400',
      },
    },
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

  site: {
    url: siteUrl,
  },

  sitemap: {
    urls: [
      { loc: '/', priority: 1.0, changefreq: 'weekly' },
      { loc: '/contact', priority: 0.7, changefreq: 'yearly' },
    ],
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

  fonts: {
    families: [
      { name: 'Noto Serif JP', weights: [400, 500, 600, 700] },
      { name: 'Noto Sans JP', weights: [300, 400, 500, 700] },
    ],
  },

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
`

// corp 用 app.vue: CorpHeader / CorpFooter は各ページが持つためグローバルレイアウトはシンプルに
const CORP_APP_VUE = `<script setup lang="ts">
import { corpConfig } from '~/config/corp'

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ],
  htmlAttrs: {
    lang: 'ja',
  },
})

useSeoMeta({
  title: corpConfig.seo.title,
  description: corpConfig.seo.description,
  ogImage: corpConfig.seo.ogImage,
  ogType: 'website',
  ogLocale: 'ja_JP',
  twitterCard: 'summary_large_image',
})

useCanonical()
</script>

<template>
  <UApp>
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-sky-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-medium focus:shadow-lg"
    >
      メインコンテンツへスキップ
    </a>
    <main id="main-content">
      <NuxtPage />
    </main>
    <CookieBanner />
  </UApp>
</template>
`

const SIMPLE_USE_SHOP_CONFIG = `import { siteConfig } from '~/config/site'
import type { SiteConfig } from '~/config/site'

export function useShopConfig() {
  return computed<SiteConfig>(() => siteConfig)
}
`

const SIMPLE_USE_CORP_CONFIG = `import { corpConfig, type CorpConfig } from '~/config/corp'

export function useCorpConfig() {
  return computed<CorpConfig>(() => corpConfig)
}
`

const SIMPLE_USE_ROUTE_PREFIX = `export function useRoutePrefix() {
  return computed(() => '')
}
`

const EMPTY_DEMO_REGISTRY = `import type { SiteConfig } from './site'

export const DEMO_SUB_ROUTES = [] as const

export const demoRegistry: Array<{ slug: string; config: SiteConfig }> = []
`

const EMPTY_CORP_REGISTRY = `import type { CorpConfig } from './corp'

export const CORP_SUB_ROUTES = [] as const

export const corpRegistry: Array<{ slug: string; config: CorpConfig }> = []
`

// ─── メイン ──────────────────────────────────────────────────────────────────

async function main() {
  console.log('\n\x1b[1m════════════════════════════════════════\x1b[0m')
  console.log('\x1b[1m  homepage-template クライアント初期化\x1b[0m')
  console.log('\x1b[1m════════════════════════════════════════\x1b[0m')

  // ─ テンプレートタイプの選択 ─
  let type = ''
  while (!['shop', 'corp'].includes(type)) {
    type = (await ask('\nテンプレートタイプを選択してください [shop / corp]: ')).trim().toLowerCase()
  }

  // ─ 実行内容の確認 ─
  console.log(`\nタイプ: \x1b[1m${type}\x1b[0m`)
  console.log('\n変更対象:')
  console.log('  • app/pages/demo/, shop/, beauty/ → 削除')
  if (type === 'corp') {
    console.log('  • app/pages/corp/[company]/{index,contact,privacy}.vue → app/pages/ へ移動')
    console.log('  • app/pages/index.vue, menu.vue, news/, contact.vue, privacy.vue (shop版) → 削除')
    console.log('  • app/pages/corp/ → 削除')
    console.log('  • app/app.vue → corp 用に書き換え')
    console.log('  • app/composables/useCorpConfig.ts → シンプル化')
  }
  else {
    console.log('  • app/pages/corp/ → 削除')
    console.log('  • app/composables/useShopConfig.ts → シンプル化')
  }
  console.log('  • app/config/demos/, corps/ → 削除')
  console.log('  • app/config/demoRegistry.ts, corpRegistry.ts → 空にする')
  console.log('  • nuxt.config.ts → デモルート除去・シンプル化')
  console.log('  • app/composables/useRoutePrefix.ts → シンプル化')
  console.log('  • .env.local → 生成（NUXT_CSRF_SECRET 自動設定）')

  const confirm = await ask('\n続けますか？ [y/N]: ')
  if (confirm.trim().toLowerCase() !== 'y') {
    console.log('\nキャンセルしました。\n')
    rl.close()
    return
  }

  // ─ NUXT_CSRF_SECRET を事前生成 ─
  const secret = randomBytes(32).toString('hex')

  head('─── ファイル整理 ───')

  // デモ設定を削除
  del('app/config/demos')
  del('app/config/corps')
  write('app/config/demoRegistry.ts', EMPTY_DEMO_REGISTRY)
  write('app/config/corpRegistry.ts', EMPTY_CORP_REGISTRY)

  // デモ・テンプレートページを削除
  del('app/pages/demo')
  del('app/pages/shop')
  del('app/pages/beauty')

  if (type === 'shop') {
    del('app/pages/corp')
    write('nuxt.config.ts', SHOP_NUXT_CONFIG)
    write('app/composables/useShopConfig.ts', SIMPLE_USE_SHOP_CONFIG)
  }

  if (type === 'corp') {
    // corp/[company]/ 配下を app/pages/ フラットに移動
    const corpDir = join(ROOT, 'app/pages/corp')
    if (existsSync(corpDir)) {
      const entries = readdirSync(corpDir)
      const dynamicDir = entries.find(e => e.startsWith('[')) ?? entries[0]
      if (dynamicDir) {
        const base = `app/pages/corp/${dynamicDir}`
        move(`${base}/index.vue`,   'app/pages/index.vue')
        move(`${base}/contact.vue`, 'app/pages/contact.vue')
        move(`${base}/privacy.vue`, 'app/pages/privacy.vue')
      }
    }
    del('app/pages/corp')
    del('app/pages/menu.vue')
    del('app/pages/news')

    write('nuxt.config.ts', CORP_NUXT_CONFIG)
    write('app/app.vue', CORP_APP_VUE)
    write('app/composables/useCorpConfig.ts', SIMPLE_USE_CORP_CONFIG)
  }

  write('app/composables/useRoutePrefix.ts', SIMPLE_USE_ROUTE_PREFIX)

  // ─ .env.local 生成 ─
  head('─── .env.local 生成 ───')

  const envPath = join(ROOT, '.env.local')
  if (existsSync(envPath)) {
    copyFileSync(envPath, envPath + '.bak')
    info('既存の .env.local を .env.local.bak にバックアップしました')
  }

  const envLocal = [
    '# ローカル開発用環境変数（本番は Vercel ダッシュボードで設定）',
    '',
    `NUXT_CSRF_SECRET=${secret}`,
    '',
    '# NUXT_RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx',
    '# NUXT_CONTACT_EMAIL=info@your-domain.com',
    '# NUXT_CONTACT_FROM_EMAIL=noreply@your-domain.com',
    '# NUXT_PUBLIC_SITE_URL=https://your-domain.com',
    '# NUXT_PUBLIC_GA_ID=G-XXXXXXXXXX',
    '# NUXT_MICROCMS_API_KEY=',
    '# NUXT_PUBLIC_MICROCMS_SERVICE_DOMAIN=',
  ].join('\n')

  writeFileSync(envPath, envLocal, 'utf-8')
  ok('.env.local を生成（NUXT_CSRF_SECRET 自動設定済み）')

  // ─ Vercel 環境変数まとめ ─
  const configFile = type === 'shop' ? 'app/config/site.ts' : 'app/config/corp.ts'

  console.log(`
\x1b[1m╔══════════════════════════════════════════════════════════╗
║   Vercel 環境変数チェックリスト                            ║
║   Settings → Environment Variables → Production           ║
╚══════════════════════════════════════════════════════════╝\x1b[0m

\x1b[1m【必須】\x1b[0m

  \x1b[33mNUXT_PUBLIC_SITE_URL\x1b[0m
    値: 本番URL（例: https://client-domain.com）
    ⚠ 未設定だと canonical / OGタグが example.com になる

  \x1b[33mNUXT_RESEND_API_KEY\x1b[0m
    値: Resend APIキー
    取得: https://resend.com → API Keys → Create API Key

  \x1b[33mNUXT_CONTACT_EMAIL\x1b[0m
    値: お問い合わせ受信先（クライアントのメールアドレス）

  \x1b[33mNUXT_CONTACT_FROM_EMAIL\x1b[0m
    値: 送信元メール（Resend で認証済みドメインのアドレス）
    未設定時のフォールバック: noreply@resend.dev

  \x1b[33mNUXT_CSRF_SECRET\x1b[0m
    値: \x1b[32m${secret}\x1b[0m
    ← .env.local に書き出し済み。この値を Vercel にもコピーする
    ⚠ 未設定だと nuxt-csurf の暗号化が弱くなる（設定強く推奨）

\x1b[1m【任意 — Google Analytics】\x1b[0m

  \x1b[33mNUXT_PUBLIC_GA_ID\x1b[0m
    値: GA4 測定ID（例: G-XXXXXXXXXX）

\x1b[1m【任意 — microCMS（ニュース自動更新）】\x1b[0m

  \x1b[33mNUXT_MICROCMS_API_KEY\x1b[0m
    値: microCMS の APIキー

  \x1b[33mNUXT_PUBLIC_MICROCMS_SERVICE_DOMAIN\x1b[0m
    値: サービスドメイン名（.microcms.io より前の部分のみ）

\x1b[1m╔══════════════════════════════════════════════════════════╗
║   残りの手動作業                                           ║
╚══════════════════════════════════════════════════════════╝\x1b[0m

  [ ] ${configFile}
        → 店舗名・住所・電話番号・SNS・営業時間・SEO情報を編集

  [ ] public/images/
        → hero / gallery / og.png を実際の画像に差し替え
          og.png は 1200×630px JPG/PNG 推奨

  [ ] .env.local
        → NUXT_RESEND_API_KEY 等のコメントアウトを外して入力

  [ ] pnpm build
        → エラーがないことを確認してから Vercel にデプロイ
`)

  rl.close()
}

main().catch((e) => { console.error(e); rl.close(); process.exit(1) })
