# CLAUDE.md — homepage-template

## 作業ルール

- **作業が完了したら必ずコミットする。** ファイルを変更・作成・削除したらその都度 `git add` → `git commit` まで行うこと。コミットしないまま会話を終わらせない。

## プロジェクト概要

店舗・法人向けホームページテンプレート（Nuxt 4 + Nuxt UI v4 + Tailwind v4）。
小松市の地元店舗・法人に営業デモを見せ、案件獲得後に fork してクライアント専用としてデプロイする設計。

- 本番URL: https://homepage-template-gray.vercel.app
- GitHub: https://github.com/PepeBlinksho/homepage-template

## 技術スタック

- Nuxt 4.x / Nuxt UI 4.x / Tailwind CSS 4.x
- nuxt-csurf（CSRF保護）、Resend（メール送信）、zod（バリデーション）
- @nuxt/image、@nuxtjs/sitemap
- Google Fonts: Noto Serif JP / Noto Sans JP

## 環境変数（Vercel / .env.local）

| 変数名 | 必須 | 用途 |
|--------|------|------|
| `NUXT_RESEND_API_KEY` | ✅ | Resend APIキー |
| `NUXT_CONTACT_EMAIL` | ✅ | お問い合わせ受信先 |
| `NUXT_CONTACT_FROM_EMAIL` | ✅ | 送信元メール（Resend認証済みドメイン）|
| `NUXT_CSRF_SECRET` | ✅ | nuxt-csurf暗号化シークレット（`openssl rand -hex 32`）|
| `NUXT_PUBLIC_SITE_URL` | ✅ | 本番ドメイン（canonical / sitemap用）|
| `NUXT_PUBLIC_GA_ID` | 任意 | GA4 測定ID |
| `NUXT_MICROCMS_API_KEY` | 任意 | microCMS APIキー |
| `NUXT_PUBLIC_MICROCMS_SERVICE_DOMAIN` | 任意 | microCMS サービスドメイン名 |

**注意：** `runtimeConfig` の自動マッピングは `NUXT_` プレフィックスが必要。`RESEND_API_KEY` では機能しない。

## クライアント納品フロー

1. リポジトリを fork
2. `pnpm run init-client` を実行（shop / corp を選択）
3. `app/config/site.ts`（または `corp.ts`）を編集
4. Vercelに環境変数を設定
5. `pnpm build` でエラーがないことを確認してデプロイ

詳細は `/Users/blink_sho/Project/obsidian/営業/クライアント納品手順（フォーク）.md` を参照。

## セキュリティ上の注意

- `/contact` は SSR 必須（nuxt-csurf が CSRF Cookie を Set するため prerender 禁止）
- インメモリレートリミッターは Vercel サーバーレスではインスタンスをまたいで機能しない（補助的なもの）
- `NUXT_CSRF_SECRET` 未設定だとトークン暗号化が無効になる
