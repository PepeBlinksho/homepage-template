import type { SiteConfig } from '../site'

export const canalBreadConfig: SiteConfig = {
  name: 'Canal Bread',
  nameEn: 'CANAL BREAD',
  catchcopy: '毎朝焼きたての幸せを、あなたへ。',
  description:
    '2024年秋、金沢の人気ベーカリー出身のオーナーが小松にオープン。国産小麦と天然酵母にこだわった本格的なパンを、毎朝丁寧に焼き上げています。',
  aboutTagline: '素材と向き合い、毎日を焼く。',
  reservation: '',
  features: [
    { icon: 'i-heroicons-sparkles', title: '国産小麦・天然酵母', description: '北海道産小麦と自家製天然酵母を使用。時間をかけて発酵させた、深みのある味わい。' },
    { icon: 'i-heroicons-clock', title: '毎朝焼きたて', description: '早朝4時から仕込みを開始。オープン時には焼きたてのパンが棚に並びます。' },
    { icon: 'i-heroicons-map-pin', title: '金沢仕込みの技', description: '金沢の人気ベーカリーで修業したオーナーが、小松の地で新たなパンの文化を。' },
  ],
  hours: [
    { day: '火〜金', time: '8:00 〜 売り切れ次第終了', closed: false },
    { day: '土・日', time: '8:00 〜 売り切れ次第終了', closed: false },
    { day: '定休日', time: '毎週月曜日', closed: true },
  ],
  address: {
    zip: '923-0851',
    prefecture: '石川県',
    city: '小松市',
    street: '日の出町789',
    building: '',
  },
  tel: '0761-00-3456',
  email: 'hello@canal-bread.example.com',
  sns: {
    instagram: 'https://www.instagram.com/canal_bread/',
    twitter: '',
    facebook: '',
    line: '',
  },
  googleMapEmbed: 'https://maps.google.com/maps?q=石川県小松市&output=embed',
  menus: [
    {
      category: '食事パン',
      items: [
        { name: 'カンパーニュ（ハーフ）', price: 680, description: '天然酵母のもっちり食感。そのままでも、チーズとも合う' },
        { name: 'バゲット', price: 350, description: 'クラストはパリッと、中はしっとり。毎日焼きたて' },
        { name: '食パン（1斤）', price: 580, description: 'ふわっと柔らか、毎朝食べたくなるプレーン食パン' },
        { name: 'くるみレーズン', price: 420, description: '香ばしいくるみと甘いレーズンのハーモニー' },
      ],
    },
    {
      category: 'ペストリー',
      items: [
        { name: 'クロワッサン', price: 280, description: 'バター香る、サクサクの層。毎朝数量限定' },
        { name: 'アップルデニッシュ', price: 320, description: '国産りんごのコンポートをのせた週末限定デニッシュ' },
        { name: 'スコーン', price: 260, description: 'さくほろ食感。プレーン・チーズの2種' },
        { name: 'シナモンロール', price: 340, description: 'たっぷりシナモンとアイシングの本格的な仕上がり' },
      ],
    },
    {
      category: 'サンドイッチ',
      items: [
        { name: '玉子サンド', price: 480, description: 'ふわとろ卵とマスタードマヨのシンプルなおいしさ' },
        { name: 'BLTサンド', price: 520, description: 'ベーコン・レタス・トマトの定番。バゲット使用' },
        { name: '季節のサンド', price: 560, description: '旬の食材を使った週替わりサンドイッチ' },
      ],
    },
  ],
  news: [
    {
      id: '1',
      date: '2026-05-03',
      category: 'お知らせ',
      title: '5月の休業日について',
      body: '5月はゴールデンウィーク中も通常通り営業いたします（月曜定休）。ただし5/5（祝）は臨時休業とさせていただきます。ご了承ください。',
    },
    {
      id: '2',
      date: '2026-04-20',
      category: '新商品',
      title: '苺ジャムサンドが期間限定で登場',
      body: '石川県産いちごを使った自家製ジャムと生クリームのサンドが登場。週末限定・各日20個のみの販売です。売り切れ次第終了となりますのでお早めに。',
    },
    {
      id: '3',
      date: '2026-03-10',
      category: 'お知らせ',
      title: 'オンラインでパンの予約ができるようになりました',
      body: 'LINEの友だち登録で、焼きたてパンの事前予約ができるようになりました。お気に入りのパンが売り切れで買えなかった…そんな悩みが解消されます。',
    },
  ],
  images: {
    hero: '/images/canal-bread-hero.jpeg',
    gallery: [
      '/images/canal-bread-1.jpeg',
      '/images/canal-bread-2.jpeg',
      '/images/canal-bread-3.jpeg',
    ],
  },
  seo: {
    title: 'Canal Bread | 石川県小松市の天然酵母ベーカリー',
    description: '小松市の天然酵母ベーカリー。国産小麦と天然酵母にこだわった本格的なパンを毎朝焼き上げています。金沢の人気ベーカリー出身オーナーが2024年にオープン。',
    ogImage: '/images/og.png',
    siteUrl: 'https://example.com',
  },
  gaId: '',
  privacyPolicyDate: '2026年5月1日',
  business: {
    type: 'Bakery',
    cuisine: 'Japanese',
    priceRange: '¥¥',
    openingHours: [
      'Tu We Th Fr Sa Su 08:00-17:00',
    ],
  },
}
