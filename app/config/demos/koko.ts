import type { SiteConfig } from '../site'

export const kokoConfig: SiteConfig = {
  name: 'koko',
  nameEn: 'KOKO',
  catchcopy: 'カフェとアパレルが交わる、特別な時間。',
  description:
    '小松市にある、カフェとアパレルが融合したセレクトショップ。手作りケーキと丁寧に淹れたコーヒーが、日常に彩りを添えます。姉妹店tsugiとともに、地域に愛される場所を目指しています。',
  aboutTagline: '手作りの温もりと、センスが集まる場所。',
  reservation: '',
  features: [
    { icon: 'i-heroicons-cake', title: '手作りケーキ', description: '毎日丁寧に仕込む自家製ケーキ。旬の素材を活かした季節限定メニューも充実。' },
    { icon: 'i-heroicons-shopping-bag', title: 'アパレル併設', description: 'センスある日常着やアクセサリーをセレクト。カフェと一緒に、お気に入りの一着を。' },
    { icon: 'i-heroicons-heart', title: '居心地のいい空間', description: '木の温もりと自然光に包まれた、ほっとできる席。一人でも、友人とでも。' },
  ],
  hours: [
    { day: '火〜金', time: '11:00 〜 18:00', closed: false },
    { day: '土・日・祝', time: '10:00 〜 18:00', closed: false },
    { day: '定休日', time: '毎週月曜日', closed: true },
  ],
  address: {
    zip: '923-0864',
    prefecture: '石川県',
    city: '小松市',
    street: '土居原町456',
    building: '',
  },
  tel: '0761-00-5678',
  email: 'hello@koko-cafe.example.com',
  sns: {
    instagram: 'https://www.instagram.com/koko_cafe_official/',
    twitter: '',
    facebook: '',
    line: '',
  },
  googleMapEmbed: 'https://maps.google.com/maps?q=石川県小松市土居原町&output=embed',
  menus: [
    {
      category: 'ドリンク',
      items: [
        { name: 'ブレンドコーヒー', price: 500, description: '毎日仕込む、香り豊かなブレンド' },
        { name: 'カフェラテ', price: 580, description: 'まろやかなミルクと深いエスプレッソ' },
        { name: '季節のフルーツティー', price: 620, description: '旬のフルーツを使ったホット・アイス選択可' },
        { name: 'ほうじ茶ラテ', price: 580, description: '香ばしいほうじ茶とやさしいミルク' },
      ],
    },
    {
      category: 'スイーツ',
      items: [
        { name: '本日のホールケーキカット', price: 550, description: '毎朝仕込む手作りケーキ。内容は日替わり' },
        { name: 'プリン・ア・ラ・モード', price: 680, description: 'なめらかなプリンに季節のフルーツを添えて' },
        { name: 'スコーン（2個）', price: 420, description: '焼きたてをジャムとクロテッドクリームと共に' },
        { name: 'ガトーショコラ', price: 520, description: 'しっとり濃厚。バニラアイスクリーム添え' },
      ],
    },
    {
      category: 'フード',
      items: [
        { name: '厚切りトースト', price: 380, description: '地元ベーカリーのパンを使ったモーニングトースト' },
        { name: 'ホットサンド', price: 720, description: '野菜とチーズのたっぷりホットサンド' },
        { name: '本日のキッシュ', price: 650, description: '季節野菜のキッシュ。サラダ付き' },
      ],
    },
  ],
  news: [
    {
      id: '1',
      date: '2026-05-01',
      category: '新メニュー',
      title: '苺のミルクレープが登場しました',
      body: '石川県産の完熟いちごを使ったミルクレープが新登場。薄く重ねたクレープとなめらかなクリームの層が絶品です。数量限定のため、お早めにどうぞ。',
    },
    {
      id: '2',
      date: '2026-04-10',
      category: 'アパレル',
      title: '春夏の新作アイテムが入荷しました',
      body: '待望の春夏コレクションが入荷しました。リネン素材のシャツやワンピースなど、日常に馴染む大人のカジュアルウェアをご用意しています。ぜひ店頭でお手に取ってみてください。',
    },
    {
      id: '3',
      date: '2026-03-25',
      category: 'お知らせ',
      title: '4月からモーニングを開始します',
      body: '4月より、土日祝は10:00からモーニングタイムを設けます。焼きたてトーストと季節のドリンクのセットをご用意していますので、ゆったりとした朝のひとときをお過ごしください。',
    },
  ],
  images: {
    hero: '/images/koko-hero.jpeg',
    gallery: [
      '/images/koko-1.jpeg',
      '/images/koko-2.jpeg',
      '/images/koko-3.jpeg',
    ],
  },
  seo: {
    title: 'koko | 石川県小松市のカフェ＆セレクトショップ',
    description: '小松市のカフェ＆アパレルショップ。手作りケーキとこだわりのコーヒー、センスある日常着が揃う特別な空間です。',
    ogImage: '/images/og.png',
    siteUrl: 'https://example.com',
  },
  gaId: '',
  privacyPolicyDate: '2026年5月1日',
  business: {
    type: 'CafeOrCoffeeShop',
    cuisine: 'Japanese',
    priceRange: '¥¥',
    openingHours: [
      'Tu We Th Fr 11:00-18:00',
      'Sa Su 10:00-18:00',
    ],
  },
}
