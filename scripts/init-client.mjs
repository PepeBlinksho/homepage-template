#!/usr/bin/env node
/**
 * クライアント案件初期化スクリプト
 * 使い方: node scripts/init-client.mjs
 *
 * このスクリプトは営業デモ用のすべてのコンテンツを削除して
 * クライアント専用サイトとしてセットアップする準備をします。
 */

import { readFileSync, writeFileSync, rmSync, readdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')

function clearFile(path, content) {
  writeFileSync(join(ROOT, path), content, 'utf-8')
  console.log(`  ✓ ${path} をクリア`)
}

function deleteDir(path) {
  const fullPath = join(ROOT, path)
  if (!existsSync(fullPath)) return
  for (const f of readdirSync(fullPath)) {
    rmSync(join(fullPath, f), { recursive: true })
  }
  console.log(`  ✓ ${path}/ の中身を削除`)
}

console.log('\n=== homepage-template クライアント初期化 ===\n')

// 1. demoRegistry をクリア
clearFile('app/config/demoRegistry.ts', `import type { SiteConfig } from './site'

export const DEMO_SUB_ROUTES = ['', '/menu', '/news', '/contact', '/privacy', '/news/**'] as const

export const demoRegistry: Array<{ slug: string; config: SiteConfig }> = []
`)

// 2. corpRegistry をクリア
clearFile('app/config/corpRegistry.ts', `import type { CorpConfig } from './corp'

export const CORP_SUB_ROUTES = ['', '/contact', '/privacy'] as const

export const corpRegistry: Array<{ slug: string; config: CorpConfig }> = []
`)

// 3. デモ・corp コンフィグファイルを削除
deleteDir('app/config/demos')
deleteDir('app/config/corps')

console.log('\n残りの手作業チェックリスト:')
console.log('  [ ] app/config/site.ts — 店舗名・住所・電話番号・SNSを更新')
console.log('  [ ] public/images/ — 実際の店舗画像に差し替え（hero / gallery / og.png）')
console.log('  [ ] .env.local — ローカル開発用の環境変数を設定')
console.log('')
console.log('  Vercel 環境変数（Settings → Environment Variables）:')
console.log('  [ ] NUXT_RESEND_API_KEY       — Resend APIキー')
console.log('  [ ] CONTACT_EMAIL             — お問い合わせ受信先メール')
console.log('  [ ] CONTACT_FROM_EMAIL        — 送信元メール（例: noreply@client-domain.com）')
console.log('  [ ] NUXT_PUBLIC_SITE_URL      — 本番ドメイン（例: https://client.com）')
console.log('  [ ] NUXT_PUBLIC_GA_ID         — GA4 測定ID（任意）')
console.log('  [ ] NUXT_CONTACT_SECRET       — CSRFシークレット（openssl rand -hex 32 で生成）')
console.log('  [ ] NUXT_MICROCMS_API_KEY     — microCMS APIキー（任意）')
console.log('  [ ] NUXT_PUBLIC_MICROCMS_SERVICE_DOMAIN — microCMS サービスドメイン（任意）')
console.log('')
console.log('  microCMS Webhook 設定（任意）:')
console.log('  [ ] Vercel → Settings → Git → Deploy Hooks でフックURL取得')
console.log('  [ ] microCMS → API設定 → Webhook に上記URLを登録')
console.log('')
console.log('完了後、npm run build で確認してください。\n')
