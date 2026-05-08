import type { SiteConfig } from '../site'

export const tsugiConfig: SiteConfig = {
  name: 'tsugi',
  nameEn: 'TSUGI',
  catchcopy: '八幡の路地に、ほっとできる場所。',
  description:
    '小松市八幡エリアにある、kokoの姉妹店カフェ。地域に根ざした温かい雰囲気の中で、こだわりのコーヒーとやさしい手作りのお菓子をお楽しみいただけます。',
  aboutTagline: '近所にあってほしい、そんな一軒。',
  reservation: '',
  features: [
    { icon: 'i-heroicons-home', title: '地域に根ざした空間', description: '八幡の静かな路地にある、ご近所さんが集まるあたたかいカフェ。' },
    { icon: 'i-heroicons-cake', title: '手作りのおやつ', description: 'kokoのノウハウを受け継いだ、素朴で優しいスイーツをご用意しています。' },
    { icon: 'i-heroicons-sun', title: '穏やかなひととき', description: '忙しい日常から少し離れて、ゆっくりとコーヒーを楽しめる席をご用意しています。' },
  ],
  hours: [
    { day: '水〜金', time: '12:00 〜 18:00', closed: false },
    { day: '土・日', time: '11:00 〜 18:00', closed: false },
    { day: '定休日', time: '毎週月・火曜日', closed: true },
  ],
  address: {
    zip: '923-0871',
    prefecture: '石川県',
    city: '小松市',
    street: '八幡町123',
    building: '',
  },
  tel: '0761-00-9012',
  email: 'hello@tsugi-cafe.example.com',
  sns: {
    instagram: 'https://www.instagram.com/tsugi_cafe/',
    twitter: '',
    facebook: '',
    line: '',
  },
  googleMapEmbed: 'https://maps.google.com/maps?q=石川県小松市八幡町&output=embed',
  menus: [
    {
      category: 'ドリンク',
      items: [
        { name: 'ハンドドリップコーヒー', price: 520, description: '一杯ずつ丁寧に淹れる、香り豊かなコーヒー' },
        { name: 'カフェオレ', price: 560, description: 'コーヒーとミルクのやさしいバランス' },
        { name: 'チャイラテ', price: 600, description: 'スパイスが香る、体を温めるチャイ' },
        { name: '自家製レモネード', price: 540, description: '甘さ控えめ、さっぱりとしたレモネード' },
      ],
    },
    {
      category: 'スイーツ',
      items: [
        { name: '本日のケーキ', price: 520, description: '素材にこだわった手作りのケーキ。日替わりです' },
        { name: 'クッキー（3枚）', price: 350, description: 'サクサクの自家製クッキー。コーヒーのお供に' },
        { name: 'バナナブレッド', price: 400, description: 'しっとり甘いバナナブレッド。バター添え' },
      ],
    },
    {
      category: 'フード',
      items: [
        { name: 'オープンサンド', price: 680, description: '地元の食材を使ったオープンサンドイッチ' },
        { name: '本日のスープ', price: 380, description: '野菜たっぷりの日替わりスープ。パン付き' },
      ],
    },
  ],
  news: [
    {
      id: '1',
      date: '2026-04-28',
      category: 'お知らせ',
      title: 'GW中も通常営業します',
      body: 'ゴールデンウィーク期間中（4/29〜5/6）も通常通り営業いたします。定休日は月・火曜日です。ゆっくりとしたひとときをお過ごしください。',
    },
    {
      id: '2',
      date: '2026-04-05',
      category: '新メニュー',
      title: '春のフルーツサンドが始まりました',
      body: '旬のいちごとクリームたっぷりのフルーツサンドが春限定で登場。数量に限りがありますので、お早めにご来店ください。',
    },
    {
      id: '3',
      date: '2026-03-01',
      category: 'お知らせ',
      title: '3月より営業時間が変わります',
      body: '3月より平日の営業開始時間が12時になります。土日は引き続き11時オープンです。皆様のご来店をお待ちしております。',
    },
  ],
  images: {
    hero: '/images/tsugi-hero.jpeg',
    gallery: [
      '/images/tsugi-1.jpeg',
      '/images/tsugi-2.jpeg',
      '/images/tsugi-3.jpeg',
    ],
  },
  seo: {
    title: 'tsugi | 石川県小松市・八幡のカフェ',
    description: '小松市八幡エリアの小さなカフェ。手作りのお菓子とこだわりのコーヒーで、ほっとできるひとときをどうぞ。kokoの姉妹店です。',
    ogImage: '/images/og.png',
    siteUrl: 'https://example.com',
  },
  gaId: '',
  privacyPolicyDate: '2026年5月1日',
  business: {
    type: 'CafeOrCoffeeShop',
    cuisine: 'Japanese',
    priceRange: '¥',
    openingHours: [
      'We Th Fr 12:00-18:00',
      'Sa Su 11:00-18:00',
    ],
  },
}
