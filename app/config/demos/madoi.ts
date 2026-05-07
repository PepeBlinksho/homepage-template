import type { SiteConfig } from '~/config/site'

export const madoiConfig: SiteConfig = {
  name: '喫茶 MADOI',
  nameEn: 'KISSATEN MADOI',
  catchcopy: '昭和の時間が、ゆったりと流れる。',
  description:
    '小松駅近くに佇む、昭和の香り漂う純喫茶。地元の若者たちが愛情を込めてプロデュースした、懐かしくて新しい喫茶空間です。コーヒーの香りに包まれて、ゆっくりとした時間をお過ごしください。',
  aboutTagline: '懐かしいのに、どこか新しい。',
  reservation: '',
  features: [
    { icon: 'i-heroicons-clock', title: '昭和レトロな世界観', description: 'ビンテージ家具と温かな照明で再現した、本格的な昭和喫茶の雰囲気。' },
    { icon: 'i-heroicons-sparkles', title: 'こだわりのブレンド', description: '昔ながらの深煎りブレンドを、ネルドリップで一杯ずつ丁寧に。' },
    { icon: 'i-heroicons-heart', title: '地元愛あふれる運営', description: '小松市在住の大学生たちが「地元に純喫茶を」という想いで立ち上げた店。' },
  ],
  hours: [
    { day: '月〜金', time: '11:00 〜 20:00', closed: false },
    { day: '土・日・祝', time: '10:00 〜 20:00', closed: false },
    { day: '定休日', time: '毎週火曜日', closed: true },
  ],
  address: {
    zip: '923-0801',
    prefecture: '石川県',
    city: '小松市',
    street: '土居原町12',
    building: '',
  },
  tel: '0761-00-7890',
  email: 'hello@madoi-kissa.example.com',
  sns: {
    instagram: 'https://www.instagram.com/cafe.madoi/',
    twitter: '',
    facebook: '',
    line: '',
  },
  googleMapEmbed: 'https://maps.google.com/maps?q=石川県小松市土居原町&output=embed',
  menus: [
    {
      category: 'コーヒー・ドリンク',
      items: [
        { name: 'ブレンドコーヒー', price: 450, description: '深煎りブレンドをネルドリップで。ホット・アイス選択可' },
        { name: 'カフェオレ', price: 520, description: 'コーヒーとたっぷりのミルク。懐かしい味わい' },
        { name: 'クリームソーダ', price: 580, description: '鮮やかなメロンソーダにバニラアイスをのせた定番の一杯' },
        { name: 'コーヒーフロート', price: 600, description: 'アイスコーヒーにバニラアイスを浮かべた喫茶の定番' },
        { name: 'ミルクセーキ', price: 550, description: '卵・ミルク・砂糖で作る昔ながらのミルクセーキ' },
      ],
    },
    {
      category: 'フード',
      items: [
        { name: 'ナポリタン', price: 780, description: 'ケチャップで炒めた昔懐かしい太麺ナポリタン' },
        { name: 'ピラフ', price: 820, description: 'バターの香りが食欲をそそる、チキンとエビのピラフ' },
        { name: 'トーストセット', price: 550, description: '厚切りトースト＋目玉焼き＋サラダのモーニングセット' },
        { name: 'サンドイッチ', price: 680, description: '玉子・ハム・きゅうりの昔ながらのサンドイッチ' },
      ],
    },
    {
      category: 'スイーツ',
      items: [
        { name: 'プリン・ア・ラ・モード', price: 680, description: '固めのカスタードプリンに生クリームとフルーツを添えて' },
        { name: 'あんみつ', price: 620, description: '寒天・白玉・あんこ・アイスのクラシックなあんみつ' },
        { name: 'シフォンケーキ', price: 480, description: 'ふわふわのシフォンケーキに生クリームとベリーソース' },
      ],
    },
  ],
  news: [
    {
      id: '1',
      date: '2026-04-22',
      category: 'イベント',
      title: 'レコードの日 特別営業のお知らせ',
      body: '5月第3土曜日の「レコードの日」に合わせて、昭和の名曲をBGMに流す特別営業を行います。普段はかかっていない昔の歌謡曲を聴きながら、ゆっくりとお過ごしください。',
    },
    {
      id: '2',
      date: '2026-04-01',
      category: '新メニュー',
      title: '春限定「いちごのクリームソーダ」が登場',
      body: '定番のメロンに加えて、春限定でいちご味のクリームソーダが登場しました。ピンク色のソーダにバニラアイスをのせた、見た目も可愛い一杯です。',
    },
    {
      id: '3',
      date: '2026-03-15',
      category: 'お知らせ',
      title: '喫茶MADOIがオープンして1年が経ちました',
      body: '2025年3月のオープンから1年が経ちました。地域の皆様に温かく迎えていただき、本当にありがとうございます。これからも変わらぬ雰囲気で皆様をお迎えします。',
    },
  ],
  images: {
    hero: '',
    gallery: [] as string[],
  },
  seo: {
    title: '喫茶 MADOI | 石川県小松市の昭和レトロ喫茶',
    description: '小松駅近くの昭和レトロな純喫茶。ネルドリップコーヒー、クリームソーダ、ナポリタンなど懐かしい味わいをご提供。地元の若者たちがプロデュース。',
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
      'Mo We Th Fr 11:00-20:00',
      'Sa Su 10:00-20:00',
    ],
  },
}
