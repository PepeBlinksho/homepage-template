# 店舗ホームページテンプレート

Nuxt 4 + Nuxt UI を使ったカフェ・飲食店向けホームページテンプレートです。  
**`app/config/site.ts` を編集するだけ**でサイト全体の情報を更新できます。

---

## 技術スタック

| 項目 | バージョン |
|---|---|
| Nuxt | 4.x |
| Nuxt UI | 4.x |
| Tailwind CSS | 4.x |
| パッケージマネージャー | pnpm |

## ページ構成

| URL | 内容 |
|---|---|
| `/` | トップページ（Hero・About・Gallery・Menu・News・Access） |
| `/menu` | メニュー一覧（タブ切り替え） |
| `/news` | お知らせ一覧 |
| `/news/[id]` | お知らせ詳細 |
| `/contact` | お問い合わせフォーム |
| `/privacy` | プライバシーポリシー |

---

## セットアップ手順

### 1. 依存関係のインストール

```bash
pnpm install
```

### 2. 環境変数の設定

`.env.example` をコピーして `.env` を作成してください。

```bash
cp .env.example .env
```

`.env` を開いて以下を設定します：

```env
# デプロイ先のURL（末尾スラッシュなし）
NUXT_PUBLIC_SITE_URL=https://your-domain.com

# Resend（メール送信）設定
RESEND_API_KEY=re_xxxxxxxxxxxx        # Resend で取得したAPIキー
CONTACT_EMAIL=info@your-domain.com    # お問い合わせの受信先メールアドレス
CONTACT_FROM_EMAIL=noreply@your-domain.com  # 送信元メールアドレス（Resendで認証済みドメイン）
```

### 3. 店舗情報を設定する

`app/config/site.ts` を開いてすべての項目を書き換えてください。

```typescript
export const siteConfig = {
  name: '○○カフェ',           // 店舗名
  nameEn: 'OO CAFE',          // 英語表記（ヒーロー装飾用）
  catchcopy: '一杯のコーヒーで、特別な時間を。',

  description: 'お店の説明文を2〜3文で記載します。',
  aboutTagline: 'こだわりを持って、毎日を丁寧に。',

  // 予約URL（空文字のときはボタン非表示）
  reservation: 'https://xxxxxxxx.tablecheck.com/...',

  // 特徴カード（Aboutセクション）
  features: [
    { icon: 'i-heroicons-sparkles', title: 'こだわりの素材', description: '説明' },
    { icon: 'i-heroicons-heart',    title: 'アットホームな空間', description: '説明' },
    { icon: 'i-heroicons-clock',    title: 'ゆったりした時間', description: '説明' },
  ],

  // 営業時間
  hours: [
    { day: '月〜金', time: '11:00 〜 22:00', closed: false },
    { day: '定休日', time: '毎週火曜日', closed: true },
  ],

  // 住所・連絡先
  address: {
    zip: '123-4567',
    prefecture: '東京都',
    city: '渋谷区',
    street: '○○町1-2-3',
    building: '○○ビル1F',
    full: '東京都渋谷区○○町1-2-3',
  },
  tel: '03-0000-0000',
  email: 'info@your-domain.com',

  // SNS（空文字 '' にすると非表示）
  sns: {
    instagram: 'https://instagram.com/your_account',
    twitter: '',
    facebook: '',
    line: '',
  },

  // GoogleマップのEmbed URL
  // Googleマップで店舗を検索 → 「共有」→「地図を埋め込む」→ src="" の中身をコピー
  googleMapEmbed: 'https://maps.google.com/maps?q=東京都渋谷区○○町&output=embed',

  // メニュー
  menus: [
    {
      category: 'コーヒー',
      items: [
        { name: 'ブレンドコーヒー', price: 500, description: 'こだわりの豆を丁寧に抽出' },
      ],
    },
  ],

  // お知らせ（新しいものを先頭に追加、id は重複させない）
  news: [
    {
      id: '1',
      date: '2026-04-01',
      category: 'お知らせ',
      title: 'タイトル',
      body: '本文',
    },
  ],

  // 画像（空文字・空配列でプレースホルダーにフォールバック）
  images: {
    hero: '/images/hero.jpg',
    gallery: [
      '/images/gallery-1.jpg',
      '/images/gallery-2.jpg',
      '/images/gallery-3.jpg',
    ],
  },

  // SEO
  seo: {
    title: '○○カフェ | 東京都渋谷区のカフェ',
    description: '検索結果に表示されるメタディスクリプション（80〜120文字推奨）',
    ogImage: '/images/og.png',   // SNSシェア時の画像（1200×630px JPG/PNG）
    siteUrl: 'https://your-domain.com',
  },

  // Google Analytics 4（空文字で無効）
  gaId: '',

  // プライバシーポリシー制定日
  privacyPolicyDate: '2026年4月28日',

  // 構造化データ（JSON-LD）
  business: {
    type: 'Cafe',           // Cafe / Restaurant / Bakery など
    cuisine: 'Japanese',
    priceRange: '¥¥',
    openingHours: [
      'Mo We Th Fr 11:00-22:00',
      'Sa Su 10:00-22:00',
    ],
  },
}
```

### 4. 画像を配置する

`public/images/` フォルダに以下の画像を追加してください。

| ファイル | 用途 | 推奨サイズ |
|---|---|---|
| `hero.jpg` | トップページ背景 | 1920×1080px |
| `og.png` | SNSシェア画像 | 1200×630px |
| `gallery-1.jpg` 〜 `gallery-6.jpg` | ギャラリー（最大6枚） | 800×800px |

**画像がない場合**はすべてプレースホルダーが自動表示されます。

### 5. 開発サーバーで確認する

```bash
pnpm dev
# → http://localhost:3000 で確認
```

---

## Vercel へのデプロイ

### 手順

1. このリポジトリを GitHub にプッシュする
2. [Vercel](https://vercel.com) に GitHub アカウントでログイン
3. 「New Project」からリポジトリをインポート（フレームワーク: **Nuxt.js** が自動検出）
4. **Environment Variables** に以下を追加する（Project Settings → Environment Variables）

| 変数名 | 値 |
|---|---|
| `NUXT_PUBLIC_SITE_URL` | `https://your-project.vercel.app` |
| `NUXT_RESEND_API_KEY` | Resend で取得した API キー |
| `NUXT_CONTACT_EMAIL` | お問い合わせ受信メールアドレス |
| `NUXT_CONTACT_FROM_EMAIL` | 送信元メールアドレス |

5. 「Deploy」ボタンをクリック

> **Vercel 環境変数の命名規則**  
> Nuxt の private runtimeConfig は `NUXT_` プレフィックスを付けることで自動マッピングされます。  
> 例: `resendApiKey` → `NUXT_RESEND_API_KEY`

### 独自ドメインの設定

1. Vercel Dashboard → Project → Settings → Domains
2. 独自ドメインを追加し、DNS レコードを設定
3. `NUXT_PUBLIC_SITE_URL` を本番ドメインに更新して再デプロイ
4. `robots.txt` 内の `Sitemap:` URL も更新する

---

## お問い合わせフォームの設定（Resend）

### Resend アカウント準備

1. [resend.com](https://resend.com) でアカウント作成（無料プランで月3,000通）
2. API Keys → 「Create API Key」で取得
3. Domains → 送信元ドメインを追加・DNS 認証（独自ドメイン推奨）

### 動作確認

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"テスト","email":"test@example.com","message":"テストメッセージ"}'
```

`{"success":true}` が返れば正常です。

---

## Google Analytics の設定

`app/config/site.ts` の `gaId` に GA4 の測定 ID を設定するだけで有効化されます。

```typescript
gaId: 'G-XXXXXXXXXX',
```

---

## カスタマイズ

### カラーテーマの変更

`app/app.config.ts` でプライマリカラーを変更できます。

```typescript
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'amber',  // 'amber' / 'orange' / 'rose' / 'emerald' など
      neutral: 'stone',
    },
  },
})
```

### フォントの変更

`nuxt.config.ts` の `fonts.families` と `app/assets/css/main.css` の `@theme` を変更してください。

---

## よくある質問

**Q. Googleマップが表示されない**  
A. `googleMapEmbed` に正しい Embed URL が入っているか確認してください。Googleマップで店舗を検索 → 「共有」→「地図を埋め込む」→ `src=""` の中身をコピーしてください。

**Q. メールが届かない**  
A. (1) Resend の API キーが正しいか、(2) 送信元ドメインが Resend で認証されているか、(3) 受信先メールアドレスが正しいか確認してください。

**Q. SNS シェア時に画像が表示されない**  
A. `public/images/og.png` を実際の店舗写真（1200×630px）に差し替えてください。デプロイ後、[OG checker](https://ogp.me) でキャッシュをクリアしてから確認してください。

**Q. 新しいお知らせを追加したい**  
A. `site.ts` の `news` 配列に要素を追加してください。`id` は既存と重複しない文字列にしてください。Vercel にプッシュすると自動再デプロイされます。
