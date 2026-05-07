import type { SiteConfig } from '~/config/site'

export const bebConfig: SiteConfig = {
  name: 'Beb',
  nameEn: 'BEB',
  catchcopy: 'ゆっくり、自分のペースで。',
  description:
    '小松市の完全予約制プライベートヘアサロン。お子様連れでも安心してご利用いただける個室空間で、丁寧なカウンセリングと確かな技術をご提供します。あなただけの時間を、Bebで。',
  aboutTagline: '一人ひとりと、丁寧に向き合う。',
  reservation: '',
  features: [
    { icon: 'i-heroicons-lock-closed', title: '完全予約制・個室対応', description: '他のお客様と時間が重ならない完全予約制。ゆったりとした個室で、自分だけの時間を。' },
    { icon: 'i-heroicons-heart', title: 'お子様連れ歓迎', description: '小さなお子様と一緒でも安心してご来店いただけます。キッズスペース完備。' },
    { icon: 'i-heroicons-sparkles', title: '丁寧なカウンセリング', description: 'ライフスタイルや髪の悩みをしっかり伺い、あなたに最適なスタイルをご提案します。' },
  ],
  hours: [
    { day: '火〜土', time: '9:00 〜 18:00', closed: false },
    { day: '日', time: '9:00 〜 17:00', closed: false },
    { day: '定休日', time: '毎週月曜日', closed: true },
  ],
  address: {
    zip: '923-0806',
    prefecture: '石川県',
    city: '小松市',
    street: '園町234',
    building: '',
  },
  tel: '0761-00-2345',
  email: 'hello@beb-salon.example.com',
  sns: {
    instagram: 'https://www.instagram.com/beb_hairsalon/',
    twitter: '',
    facebook: '',
    line: 'https://line.me/',
  },
  googleMapEmbed: 'https://maps.google.com/maps?q=石川県小松市&output=embed',
  menus: [
    {
      category: 'カット',
      items: [
        { name: 'カット', price: 4400, description: 'カウンセリング込み。骨格に合わせたデザインカット' },
        { name: 'キッズカット（中学生以下）', price: 2750, description: 'お子様も安心。丁寧に仕上げます' },
        { name: 'カット＋シャンプー・ブロー', price: 5500, description: 'ヘッドスパマッサージ付き。さらっとした仕上がりに' },
      ],
    },
    {
      category: 'カラー',
      items: [
        { name: 'ファッションカラー', price: 7700, description: 'ダメージを抑えたやさしい処方。豊富なカラーバリエーション' },
        { name: 'リタッチカラー', price: 5500, description: '根元のプリン気になる方に。ダメージ最小限で自然に' },
        { name: 'インナーカラー', price: 8800, description: '内側だけ色を入れる人気スタイル。見え隠れがおしゃれ' },
        { name: 'ハイライト', price: 11000, description: '立体感と動きを出すハイライトカラー' },
      ],
    },
    {
      category: 'トリートメント・ケア',
      items: [
        { name: 'トリートメント', price: 3300, description: 'ダメージ補修・うるおい補給。手触りが格段に変わります' },
        { name: 'ヘッドスパ', price: 4400, description: '頭皮の血行を促進。リラクゼーション効果も抜群' },
        { name: '縮毛矯正', price: 16500, description: 'くせ毛・うねりをしっかり伸ばす。持続性の高い処方' },
      ],
    },
  ],
  news: [
    {
      id: '1',
      date: '2026-05-01',
      category: 'お知らせ',
      title: '5月の空き状況について',
      body: '5月の予約状況をLINE公式アカウントにてお知らせしています。GW明けのご予約はお早めに。週末は特に埋まりやすくなっておりますので、ご希望の日時がある方はお気軽にご連絡ください。',
    },
    {
      id: '2',
      date: '2026-04-08',
      category: 'キャンペーン',
      title: '春のトリートメントキャンペーン実施中',
      body: '花粉や乾燥で傷んだ髪をケアする春のトリートメントキャンペーンを4月中実施しています。カットと同時施術でトリートメントが20%オフ。この機会にぜひご利用ください。',
    },
    {
      id: '3',
      date: '2026-03-20',
      category: 'お知らせ',
      title: 'お子様連れの方へ：キッズスペースをリニューアルしました',
      body: 'キッズスペースに新しいおもちゃと絵本を追加しました。お子様が安心して過ごせるよう、スタッフ一同心がけています。お気軽にご家族でお越しください。',
    },
  ],
  images: {
    hero: '',
    gallery: [] as string[],
  },
  seo: {
    title: 'Beb | 石川県小松市の完全予約制プライベートヘアサロン',
    description: '小松市の完全予約制ヘアサロン。お子様連れ歓迎の個室サロンで、丁寧なカウンセリングと確かな技術をご提供します。',
    ogImage: '/images/og.png',
    siteUrl: 'https://example.com',
  },
  gaId: '',
  privacyPolicyDate: '2026年5月1日',
  business: {
    type: 'HairSalon',
    cuisine: '',
    priceRange: '¥¥¥',
    openingHours: [
      'Tu We Th Fr Sa 09:00-18:00',
      'Su 09:00-17:00',
    ],
  },
}
