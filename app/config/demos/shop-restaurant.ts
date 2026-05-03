import type { SiteConfig } from '~/config/site'

export const shopRestaurantConfig: SiteConfig = {
  name: '結 yui',
  nameEn: 'YUI',
  catchcopy: '大切な人と、忘れられない時間を。',
  description:
    '地元・石川の恵みを余すことなく使った季節の和食。能登の海の幸と加賀野菜を丁寧に仕込み、温もりある空間でお届けします。',
  aboutTagline: '地のものを、丁寧に。季節を、食卓に。',
  reservation: '',
  features: [
    { icon: 'i-heroicons-sparkles', title: '地元食材へのこだわり', description: '能登の鮮魚、加賀野菜を毎日仕入れ。素材の味を活かした調理で。' },
    { icon: 'i-heroicons-users', title: '個室でゆったりと', description: '2名〜16名まで対応の個室席。記念日・接待・ご法事にも。' },
    { icon: 'i-heroicons-gift', title: '特別な日のコース', description: '誕生日・記念日のサプライズ演出も承ります。事前にご相談ください。' },
  ],
  hours: [
    { day: '昼', time: '11:30 〜 14:00（L.O. 13:30）', closed: false },
    { day: '夜', time: '17:30 〜 22:00（L.O. 21:00）', closed: false },
    { day: '定休日', time: '毎週月曜日', closed: true },
  ],
  address: {
    zip: '923-0864',
    prefecture: '石川県',
    city: '小松市',
    street: '小馬出町456',
    building: '',
  },
  tel: '0761-00-5678',
  email: 'info@yui-komatsu.example.com',
  sns: {
    instagram: 'https://instagram.com/',
    twitter: '',
    facebook: '',
    line: '',
  },
  googleMapEmbed: 'https://maps.google.com/maps?q=石川県小松市&output=embed',
  menus: [
    {
      category: '昼膳',
      items: [
        { name: '日替わり膳', price: 1200, description: '日替わり焼き魚・小鉢3種・ごはん・味噌汁' },
        { name: '加賀野菜の揚げ出し豆腐御膳', price: 1500, description: '旬の加賀野菜を添えた丁寧な一品' },
        { name: '鯛茶漬け膳', price: 1800, description: '能登の新鮮な鯛を使った贅沢茶漬け' },
      ],
    },
    {
      category: '夜のコース',
      items: [
        { name: '梅コース', price: 3500, description: '前菜・お造り・焼き物・煮物・ごはん・汁物' },
        { name: '竹コース', price: 4800, description: '季節の食材をふんだんに使った全6品' },
        { name: '松コース', price: 6000, description: '旬素材にこだわった全8品。記念日に。' },
      ],
    },
    {
      category: 'ドリンク',
      items: [
        { name: '手取川（石川県地酒）', price: 680, description: '地元加賀の銘酒。辛口でキレ味爽やか' },
        { name: '生ビール', price: 580, description: '冷えたキリン一番搾り' },
        { name: 'ノンアルコールカクテル', price: 480, description: '運転の方にも安心' },
      ],
    },
  ],
  news: [
    {
      id: '1',
      date: '2026-04-20',
      category: '季節メニュー',
      title: '春の新メニュー「桜コース」はじまりました',
      body: '石川の春の味覚・タラの芽や山菜を使った期間限定コースが登場。ぜひ春のうちにお楽しみください。',
    },
    {
      id: '2',
      date: '2026-04-01',
      category: 'お知らせ',
      title: '母の日のご予約受け付け中（5/10）',
      body: '5月10日（日）の母の日はご予約が混みあう予想です。お早めにお電話またはお問い合わせフォームよりご予約ください。',
    },
    {
      id: '3',
      date: '2026-03-15',
      category: 'お知らせ',
      title: '個室をリニューアルしました',
      body: '2〜4名様用の個室を落ち着いた和モダンの内装にリニューアル。より快適にお過ごしいただけます。',
    },
  ],
  images: {
    hero: '',
    gallery: [] as string[],
  },
  seo: {
    title: '結 yui | 石川県小松市の和食レストラン',
    description: '地元・石川の旬の食材を使った和食レストラン。ランチ・ディナーコース・個室席完備。',
    ogImage: '/images/og.png',
    siteUrl: 'https://example.com',
  },
  gaId: '',
  privacyPolicyDate: '2026年3月15日',
  business: {
    type: 'Restaurant',
    cuisine: 'Japanese',
    priceRange: '¥¥¥',
    openingHours: [
      'Tu We Th Fr Sa Su 11:30-14:00',
      'Tu We Th Fr Sa Su 17:30-22:00',
    ],
  },
}
