import type { SiteConfig } from '../site'

export const cercleConfig: SiteConfig = {
  name: 'CAFE CERCLE',
  nameEn: 'CAFE CERCLE',
  catchcopy: '十年続いた、いつもの一杯。',
  description:
    '2016年、小松の街に静かに開いたカフェ。10年のあいだ、季節ごとの豆を選び、丁寧に淹れた一杯を出し続けてきました。落ち着いた木の空間で、ゆっくりとコーヒーと向き合える時間をお過ごしください。',
  aboutTagline: '日々のリズムに、一杯の余白を。',
  reservation: '',
  features: [
    { icon: 'i-heroicons-clock', title: '2016年から続く店', description: '小松の住宅街に静かに開いてから10年。地元の常連客に愛される、落ち着いた大人のカフェです。' },
    { icon: 'i-heroicons-sparkles', title: '季節ごとの豆', description: 'スペシャルティコーヒーを中心に、季節ごとに3〜4種類の豆をご用意。エスプレッソもハンドドリップも。' },
    { icon: 'i-heroicons-heart', title: '木のぬくもりの空間', description: '無垢材のカウンターと小さなテーブル席。ひとりでも、ふたりでも、ゆっくり過ごせる席づくりです。' },
  ],
  hours: [
    { day: '火〜土', time: '09:00 〜 19:00', closed: false },
    { day: '日', time: '10:00 〜 18:00', closed: false },
    { day: '定休日', time: '毎週月曜日', closed: true },
  ],
  address: {
    zip: '923-0941',
    prefecture: '石川県',
    city: '小松市',
    street: '園町ニ45',
    building: '',
  },
  tel: '0761-00-2200',
  email: 'hello@cafe-cercle.example.com',
  sns: {
    instagram: 'https://www.instagram.com/cafe_cercle/',
    twitter: '',
    facebook: '',
    line: '',
  },
  googleMapEmbed: 'https://maps.google.com/maps?q=石川県小松市園町&output=embed',
  menus: [
    {
      category: 'コーヒー',
      items: [
        { name: '本日のドリップコーヒー', price: 520, description: 'その日の豆をハンドドリップで。お代わりは200円割引' },
        { name: 'エスプレッソ', price: 420, description: 'シングルショット。スパイシーでコクのある一杯' },
        { name: 'カフェラテ', price: 580, description: 'エスプレッソとミルクのバランスにこだわって' },
        { name: 'カプチーノ', price: 580, description: '泡立てたミルクの上にラテアートを添えて' },
        { name: 'アメリカーノ', price: 480, description: 'エスプレッソをお湯で割った、すっきりとした味わい' },
      ],
    },
    {
      category: 'その他ドリンク',
      items: [
        { name: '紅茶（ポット）', price: 620, description: 'ダージリン・アールグレイから選べます' },
        { name: 'ホットチョコレート', price: 620, description: 'カカオ70%のビターチョコレートを使用' },
        { name: 'レモネード', price: 580, description: '自家製シロップを使ったすっきりレモネード' },
      ],
    },
    {
      category: 'フード・スイーツ',
      items: [
        { name: '本日のキッシュ', price: 880, description: '季節野菜のキッシュとサラダのプレート' },
        { name: 'サンドイッチ（日替わり）', price: 920, description: 'カンパーニュを使った日替わりのサンドイッチ' },
        { name: 'チーズケーキ', price: 520, description: '濃厚なベイクドチーズケーキ。コーヒーとの相性抜群' },
        { name: 'スコーン2種', price: 480, description: 'プレーンと季節フレーバー。ジャムとクロテッドクリーム付き' },
      ],
    },
  ],
  news: [
    {
      id: '1',
      date: '2026-05-12',
      category: 'お知らせ',
      title: '10周年を迎えました — ご来店ありがとうございます',
      body: '2016年のオープンから、10年が経ちました。日々の一杯をご一緒させていただいた皆さま、本当にありがとうございます。これからも変わらず、ゆっくりとコーヒーと向き合える場所であり続けます。',
    },
    {
      id: '2',
      date: '2026-04-25',
      category: '新商品',
      title: '5月の豆 — エチオピア・ナチュラル',
      body: '5月のおすすめ豆は、エチオピア・グジ地区のナチュラル精製。ベリーのような甘い香りと、ほんのりワインのような複雑さがあります。アイスドリップとも相性抜群です。',
    },
    {
      id: '3',
      date: '2026-04-01',
      category: 'お知らせ',
      title: '春の営業時間について',
      body: '4月から、日曜日の営業時間を10:00〜18:00に変更いたします。火〜土は従来通り9:00〜19:00です。',
    },
  ],
  images: {
    hero: '',
    gallery: [] as string[],
  },
  seo: {
    title: 'CAFE CERCLE | 石川県小松市のスペシャルティコーヒーカフェ',
    description: '2016年から続く、小松市のカフェ。スペシャルティコーヒーをハンドドリップ・エスプレッソでご提供。落ち着いた木の空間で、ゆっくりとコーヒーと向き合える時間を。',
    ogImage: '/images/og.png',
    siteUrl: 'https://example.com',
  },
  gaId: '',
  privacyPolicyDate: '2026年5月1日',
  business: {
    type: 'CafeOrCoffeeShop',
    cuisine: 'International',
    priceRange: '¥',
    openingHours: [
      'Tu We Th Fr Sa 09:00-19:00',
      'Su 10:00-18:00',
    ],
  },
}
