import type { SiteConfig } from '~/config/site'

export const shopCafeConfig: SiteConfig = {
  name: 'Lumière',
  nameEn: 'LUMIÈRE',
  catchcopy: '陽だまりのような、やさしい時間を。',
  description:
    '小松の街角にひっそりと佇む、光あふれるカフェ。こだわりの自家焙煎コーヒーと、旬の素材を使った手作りケーキで、日常のなかに小さな幸せをお届けします。',
  aboutTagline: '丁寧に焙煎した豆で、一杯ずつ心を込めて。',
  reservation: '',
  features: [
    { icon: 'i-heroicons-sparkles', title: '自家焙煎コーヒー', description: '産地にこだわった豆を店内で丁寧に焙煎。豆の個性を引き出す一杯を。' },
    { icon: 'i-heroicons-cake', title: '手作りスイーツ', description: '毎朝仕込む季節のケーキとプリン。素朴で温かい味わい。' },
    { icon: 'i-heroicons-sun', title: '陽光あふれる空間', description: '大きな窓から差し込む光。読書にも仕事にも心地よい一席。' },
  ],
  hours: [
    { day: '月〜金', time: '9:00 〜 19:00', closed: false },
    { day: '土・日・祝', time: '9:00 〜 20:00', closed: false },
    { day: '定休日', time: '毎週水曜日', closed: true },
  ],
  address: {
    zip: '923-0801',
    prefecture: '石川県',
    city: '小松市',
    street: '土居原町123',
    building: '1F',
  },
  tel: '0761-00-1234',
  email: 'hello@lumiere-cafe.example.com',
  sns: {
    instagram: 'https://instagram.com/',
    twitter: '',
    facebook: '',
    line: '',
  },
  googleMapEmbed: 'https://maps.google.com/maps?q=石川県小松市&output=embed',
  menus: [
    {
      category: 'ドリンク',
      items: [
        { name: '本日のコーヒー', price: 480, description: '自家焙煎の日替わりブレンド' },
        { name: 'カフェラテ', price: 580, description: '深みとまろやかさが調和したラテ' },
        { name: '抹茶ラテ', price: 620, description: '国産抹茶とミルクのやさしい甘み' },
        { name: 'レモネード', price: 550, description: '手絞りレモンとはちみつのさわやかさ' },
      ],
    },
    {
      category: 'スイーツ',
      items: [
        { name: '本日のケーキ', price: 520, description: '旬の素材を使った手作りケーキ' },
        { name: '濃厚プリン', price: 450, description: 'なめらかな口どけの昔ながら焼きプリン' },
        { name: 'スコーン', price: 380, description: '毎朝焼きたて。ジャムとクリーム添え' },
      ],
    },
    {
      category: 'フード',
      items: [
        { name: 'トースト', price: 350, description: '厚切りパンのトーストセット' },
        { name: 'ホットサンド', price: 680, description: '野菜たっぷりのランチセット' },
        { name: '本日のスープ', price: 420, description: '季節の野菜で作る日替わりスープ' },
      ],
    },
  ],
  news: [
    {
      id: '1',
      date: '2026-04-15',
      category: '新メニュー',
      title: '春のいちごスイーツが登場しました',
      body: '石川県産の甘いいちごを使ったパフェとタルトが新登場。期間限定ですのでお早めに。',
    },
    {
      id: '2',
      date: '2026-04-01',
      category: 'お知らせ',
      title: 'GW期間中も通常営業します',
      body: 'ゴールデンウィーク（4/29〜5/6）は全日通常通り営業いたします。皆様のご来店をお待ちしております。',
    },
    {
      id: '3',
      date: '2026-03-20',
      category: 'お知らせ',
      title: 'テイクアウト専用カップを新しくしました',
      body: '環境に配慮したサステナブルな素材のカップに変更しました。引き続きテイクアウトもお気軽にどうぞ。',
    },
  ],
  images: {
    hero: '',
    gallery: [] as string[],
  },
  seo: {
    title: 'Lumière | 石川県小松市の自家焙煎カフェ',
    description: '小松の街角に佇む自家焙煎カフェ。こだわりのコーヒーと手作りスイーツで、やさしいひとときを。',
    ogImage: '/images/og.png',
    siteUrl: 'https://example.com',
  },
  gaId: '',
  privacyPolicyDate: '2026年4月15日',
  business: {
    type: 'Cafe',
    cuisine: 'Japanese',
    priceRange: '¥¥',
    openingHours: [
      'Mo Tu Th Fr 09:00-19:00',
      'Sa Su 09:00-20:00',
    ],
  },
}
