# 店舗ホームページテンプレート

Nuxt 4 + Nuxt UI を使ったカフェ・飲食店向けホームページテンプレートです。
**`app/config/site.ts` を編集するだけ**でサイト全体の情報を更新できます。

---

## プロジェクト概要

| 項目 | バージョン |
|---|---|
| Nuxt | 4.x |
| Nuxt UI | 4.x |
| Tailwind CSS | 4.x |
| パッケージマネージャー | pnpm |

### ページ構成

| URL | 内容 |
|---|---|
| `/` | トップページ（Hero・About・Menu・News・Access） |
| `/menu` | メニュー一覧（タブ切り替え） |
| `/news` | お知らせ一覧 |
| `/news/[id]` | お知らせ詳細 |
| `/contact` | お問い合わせフォーム |

---

## 店舗情報の変更方法

### `app/config/site.ts` を編集する

このファイルを編集するだけで、サイト全体に自動反映されます。

```typescript
export const siteConfig = {
  // ① 店舗名（ヘッダー・フッター・各ページタイトルに反映）
  name: '店舗名をここに入力',
  nameEn: 'SHOP NAME',          // ヒーローセクションのサブテキスト（半角英語）
  catchcopy: 'キャッチコピー',   // ヒーローセクションのコピー

  // ② 説明文（Aboutセクションに表示）
  description: 'お店の説明文...',

  // ③ 特徴（Aboutセクションのカード3枚）
  features: [
    { icon: 'i-heroicons-sparkles', title: 'こだわりの素材', description: '説明文' },
    // ...
  ],

  // ④ 営業時間（Accessセクション・フッターに表示）
  hours: [
    { day: '月〜金', time: '11:00 〜 22:00', closed: false },
    { day: '定休日', time: '毎週火曜日', closed: true },   // closed: true で赤字表示
  ],

  // ⑤ 住所・連絡先
  address: {
    zip: '000-0000',
    full: '石川県小松市○○町0-0',   // Googleマップ検索に使用
  },
  tel: '000-000-0000',
  email: 'info@example.com',

  // ⑥ SNS（空文字 '' にすると非表示）
  sns: {
    instagram: 'https://instagram.com/your_account',
    twitter: '',     // 空文字 = 非表示
    facebook: '',
    line: '',
  },

  // ⑦ GoogleマップのEmbed URL
  // Googleマップで店舗を開き、「共有」→「地図を埋め込む」からURLを取得してください
  googleMapEmbed: 'https://maps.google.com/maps?q=...',

  // ⑧ メニュー（カテゴリ・商品名・価格・説明）
  menus: [
    {
      category: 'コーヒー',
      items: [
        { name: 'ブレンドコーヒー', price: 500, description: '説明文' },
      ],
    },
  ],

  // ⑨ お知らせ（新しいものを先頭に追加）
  news: [
    {
      id: '1',           // 重複しない一意のID（URLに使用）
      date: '2025-04-01',
      category: 'お知らせ',
      title: 'タイトル',
      body: '本文',
    },
  ],

  // ⑩ SEO設定
  seo: {
    title: '店舗名 | 石川県小松市のカフェ',
    description: 'メタディスクリプション（検索結果に表示）',
    ogImage: '/images/og.jpg',
  },
}
```

---

## 画像の差し替え方法

すべての画像は `public/images/` フォルダに配置してください。

| ファイルパス | 用途 |
|---|---|
| `public/images/hero.jpg` | トップページの背景画像（推奨サイズ: 1920×1080px） |
| `public/images/og.jpg` | SNSシェア時のOGP画像（推奨サイズ: 1200×630px） |

**hero.jpg が存在しない場合**は、アンバーからストーンへのグラデーションが自動表示されます。

---

## ローカル起動方法

```bash
# 依存関係のインストール
pnpm install

# 開発サーバー起動（http://localhost:3000）
pnpm dev

# 本番ビルド
pnpm build

# 本番ビルドのプレビュー
pnpm preview
```

---

## Vercelへのデプロイ方法

1. [Vercel](https://vercel.com) にGitHubアカウントでログイン
2. 「New Project」からこのリポジトリをインポート
3. フレームワークは **Nuxt.js** が自動検出されます
4. 「Deploy」ボタンをクリック

デプロイ後は `app/config/site.ts` を編集してプッシュするだけで自動再デプロイされます。

---

## お問い合わせフォームの送信設定

現在、フォームはバリデーションのみ動作します。実際にメールを受信するには、`app/pages/contact.vue` の `onSubmit` 関数内のコメントを外して送信先を設定してください。

[Formspree](https://formspree.io) を使う場合：

```typescript
async function onSubmit(event: FormSubmitEvent<Schema>) {
  await $fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: event.data,
  })
  submitted.value = true
}
```
