export const siteConfig = {
  // 基本情報
  name: '店舗名をここに入力',
  nameEn: 'SHOP NAME',
  catchcopy: 'キャッチコピーをここに入力',
  description:
    'お店の説明文をここに入力してください。こだわりや雰囲気を伝える文章を2〜3文で記載します。',

  // Aboutセクションのキャッチフレーズ（大見出し）
  aboutTagline: 'こだわりを持って、毎日を丁寧に。',

  // 予約URL（空文字のときはボタン非表示）
  // 例: 'https://xxxxxxxx.tablecheck.com/...' / 'https://select-type.com/...'
  reservation: '',

  // 特徴（トップページのAboutセクション）
  features: [
    { icon: 'i-heroicons-sparkles', title: 'こだわりの素材', description: '特徴の説明文を入力' },
    { icon: 'i-heroicons-heart', title: 'アットホームな空間', description: '特徴の説明文を入力' },
    { icon: 'i-heroicons-clock', title: 'ゆったりした時間', description: '特徴の説明文を入力' },
  ],

  // 営業情報
  hours: [
    { day: '月〜金', time: '11:00 〜 22:00', closed: false },
    { day: '土・日・祝', time: '10:00 〜 22:00', closed: false },
    { day: '定休日', time: '毎週火曜日', closed: true },
  ],

  // 住所・連絡先
  address: {
    zip: '000-0000',
    prefecture: '石川県',
    city: '小松市',
    street: '○○町0-0',
    building: '',
  },
  tel: '000-000-0000',
  email: 'info@example.com',

  // SNS（空文字は非表示）
  sns: {
    instagram: 'https://instagram.com/',
    twitter: '',
    facebook: '',
    line: '',
  },

  // GoogleマップEmbed URL
  googleMapEmbed: 'https://maps.google.com/maps?q=石川県小松市&output=embed',

  // メニュー
  menus: [
    {
      category: 'コーヒー',
      items: [
        { name: 'ブレンドコーヒー', price: 500, description: 'こだわりの豆を丁寧に抽出' },
        { name: 'カフェラテ', price: 600, description: 'まろやかなミルクと深いエスプレッソ' },
        { name: 'カプチーノ', price: 650, description: 'きめ細かいフォームミルク' },
      ],
    },
    {
      category: 'フード',
      items: [
        { name: 'トースト', price: 400, description: '毎朝焼きたて' },
        { name: 'サンドイッチ', price: 750, description: '季節の野菜たっぷり' },
        { name: 'ケーキセット', price: 900, description: '自家製ケーキとドリンクのセット' },
      ],
    },
  ],

  // お知らせ
  news: [
    {
      id: '1',
      date: '2026-04-01',
      category: 'お知らせ',
      title: 'ゴールデンウィークの営業について',
      body: 'ゴールデンウィーク期間中（4/29〜5/6）は通常通り営業いたします。皆様のご来店をお待ちしております。',
    },
    {
      id: '2',
      date: '2026-03-15',
      category: '新メニュー',
      title: '春の新メニューが登場しました',
      body: '春の食材をふんだんに使った新メニューをご用意しました。ぜひお試しください。',
    },
    {
      id: '3',
      date: '2026-03-01',
      category: 'お知らせ',
      title: 'Instagram開設しました',
      body: '公式Instagramを開設しました。日々の情報を発信していきますのでフォローよろしくお願いいたします。',
    },
  ],

  // 画像（空文字・空配列でプレースホルダーにフォールバック）
  images: {
    hero: '',
    // ギャラリー画像（最大6枚推奨。空配列の場合はプレースホルダーを表示）
    // 例: ['/images/gallery-1.jpg', '/images/gallery-2.jpg', ...]
    gallery: [] as string[],
  },

  // SEO
  seo: {
    title: '店舗名 | 石川県小松市のカフェ',
    description: 'メタディスクリプションをここに入力してください。',
    // OG画像: public/images/og.png を実際の店舗写真（1200×630px JPG/PNG）に差し替えてください
    ogImage: '/images/og.png',
    // デプロイ先URL（末尾スラッシュなし）
    // 環境変数 NUXT_PUBLIC_SITE_URL を設定すると自動的にそちらが優先されます
    siteUrl: 'https://example.com',
  },

  // Google Analytics 4 測定ID（空文字で無効）
  // 例: 'G-XXXXXXXXXX'
  gaId: '',

  // プライバシーポリシー制定日（YYYY年MM月DD日 形式）
  privacyPolicyDate: '2026年4月28日',

  // 構造化データ（Google検索のリッチリザルト用）
  // https://schema.org/LocalBusiness のサブタイプを指定
  // 例: Cafe / Restaurant / Bakery / BarOrPub / FastFoodRestaurant
  business: {
    type: 'Cafe',
    cuisine: 'Japanese',  // servesCuisine（料理ジャンル、英語で記述）
    priceRange: '¥¥',     // ¥ / ¥¥ / ¥¥¥
    // Schema.org 形式の営業時間（定休日は記載しない）
    // 曜日コード: Mo Tu We Th Fr Sa Su（範囲指定: Mo-Fr）
    openingHours: [
      'Mo We Th Fr 11:00-22:00',
      'Sa Su 10:00-22:00',
    ],
  },
}

/** 住所オブジェクトから表示用の完全な住所文字列を生成する */
export function buildFullAddress(address: SiteConfig['address']): string {
  return address.prefecture + address.city + address.street + (address.building ?? '')
}

// 型定義
export type SiteConfig = typeof siteConfig
export type MenuItem = (typeof siteConfig.menus)[0]['items'][0]
export type NewsItem = (typeof siteConfig.news)[0]
