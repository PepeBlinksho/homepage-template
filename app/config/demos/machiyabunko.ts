import type { SiteConfig } from '../site'

export const machiyabunkoConfig: SiteConfig = {
  theme: 'forest',
  name: 'こまつ町家文庫',
  nameEn: 'KOMATSU MACHIYA BUNKO',
  catchcopy: '本と、ジャムと、町家の時間。',
  description:
    '小松の町家をそのまま生かした、ブックカフェ＆自家製ジャム屋。古い梁と土壁に囲まれた静かな空間で、コーヒーと一冊の本、季節のジャムを味わえます。',
  aboutTagline: '本のある暮らしを、町家から。',
  reservation: '',
  features: [
    { icon: 'i-heroicons-book-open', title: '町家のブックカフェ', description: '築百年の町家をそのまま生かした空間で、好きな本を1冊。読みかけのまま帰っても大丈夫です。' },
    { icon: 'i-heroicons-sparkles', title: '季節の自家製ジャム', description: '加賀の農家から届く果実で、毎月数種類のジャムを仕込みます。店頭・取扱店で販売中。' },
    { icon: 'i-heroicons-heart', title: '読書のための一杯', description: 'コーヒーは一杯ずつハンドドリップで。ページをめくる手が止まらない静かな時間を。' },
  ],
  hours: [
    { day: '木〜日', time: '11:00 〜 18:00', closed: false },
    { day: '定休日', time: '月・火・水曜日', closed: true },
  ],
  address: {
    zip: '923-0903',
    prefecture: '石川県',
    city: '小松市',
    street: '京町34',
    building: '',
  },
  tel: '0761-00-1100',
  email: 'hello@machiyabunko.example.com',
  sns: {
    instagram: 'https://www.instagram.com/machiyabunko/',
    twitter: '',
    facebook: '',
    line: '',
  },
  googleMapEmbed: 'https://maps.google.com/maps?q=石川県小松市京町&output=embed',
  menus: [
    {
      category: 'コーヒー・ドリンク',
      items: [
        { name: '本日のコーヒー', price: 520, description: '加賀のロースタリーから届く豆を、一杯ずつハンドドリップで' },
        { name: 'カフェオレ', price: 580, description: 'コーヒーと有機ミルクのまろやかなブレンド' },
        { name: '季節のジャムソーダ', price: 600, description: '自家製ジャムを使った、見た目も鮮やかな炭酸ドリンク' },
        { name: '加賀棒茶', price: 480, description: '石川県産棒茶を急須で。読書のお供にぴったり' },
      ],
    },
    {
      category: '軽食・スイーツ',
      items: [
        { name: 'トーストとジャム3種', price: 780, description: '厚切りトーストに、その日のおすすめジャム3種を添えて' },
        { name: 'ジャムサンド', price: 580, description: '自家製ジャムとクリームチーズをはさんだ、町家文庫の定番' },
        { name: 'スコーン2種', price: 620, description: 'プレーンと季節フレーバー。クロテッドクリームとジャム付き' },
        { name: '本日のケーキ', price: 520, description: 'パウンドケーキ・タルトなど、その日の手作りケーキ' },
      ],
    },
    {
      category: '自家製ジャム（おみやげ）',
      items: [
        { name: 'いちごジャム（小瓶）', price: 980, description: '加賀の農家のいちごを使った定番ジャム' },
        { name: 'ブルーベリージャム', price: 1100, description: '能美のブルーベリー農園から届く完熟果実' },
        { name: 'ゆずマーマレード', price: 1200, description: '加賀ゆずの皮ごと煮込んだ、ほろ苦さが大人の味' },
        { name: 'ジャム3種ギフトセット', price: 3200, description: '人気の3種を木箱に詰めたギフト用セット' },
      ],
    },
  ],
  news: [
    {
      id: '1',
      date: '2026-05-15',
      category: 'お知らせ',
      title: '5月のジャム — びわとレモンが入荷しました',
      body: '5月の自家製ジャムは「びわとレモン」。加賀のびわ農家から届いた完熟果実を、レモンの酸味でさっぱりと仕上げました。今月末まで、数量限定で店頭販売しています。',
    },
    {
      id: '2',
      date: '2026-04-20',
      category: 'イベント',
      title: '読書会「町家で読む、宮沢賢治」のお知らせ',
      body: '5月18日（日）の夜、町家文庫で読書会を開きます。テーマは宮沢賢治。お気に入りの一節を持ち寄って、ゆっくりお話ししましょう。参加費1,500円（ドリンク・ジャム付き）。',
    },
    {
      id: '3',
      date: '2026-04-01',
      category: '新商品',
      title: '取扱店「金沢・山町商店」が加わりました',
      body: '町家文庫のジャムを扱ってくださるお店が、金沢にも増えました。山町商店さんで、定番3種をお求めいただけます。',
    },
  ],
  images: {
    hero: '',
    gallery: [] as string[],
  },
  seo: {
    title: 'こまつ町家文庫 | 石川県小松市のブックカフェ＆自家製ジャム屋',
    description: '小松の町家を生かしたブックカフェ。コーヒーと一冊の本、季節の自家製ジャムを楽しめる静かな空間。加賀の農家から届く果実で仕込むジャムは店頭・取扱店で販売中。',
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
      'Th Fr Sa Su 11:00-18:00',
    ],
  },
}
