import type { SiteConfig } from '~/config/site'

export const beautyHairConfig: SiteConfig = {
  name: 'arch hair',
  nameEn: 'ARCH HAIR',
  catchcopy: 'あなたらしさに、寄り添うデザイン。',
  description:
    '一人ひとりの骨格・ライフスタイルに合わせたヘアデザインを提案。子連れOKのプライベートサロンで、ゆったりとした時間をお楽しみください。',
  aboutTagline: 'カットの技術と、会話の温かさで。',
  reservation: '',
  features: [
    { icon: 'i-heroicons-sparkles', title: 'デザインカット', description: 'トレンドを押さえながら骨格補正を意識したカット技術。' },
    { icon: 'i-heroicons-heart', title: '子連れOK', description: 'キッズスペース完備。お子さん連れでも気軽にご来店ください。' },
    { icon: 'i-heroicons-lock-closed', title: '完全予約制', description: '他のお客様を気にせず、ゆっくりとした時間をお過ごしいただけます。' },
  ],
  hours: [
    { day: '火〜土', time: '9:00 〜 19:00', closed: false },
    { day: '日曜・祝日', time: '9:00 〜 17:00', closed: false },
    { day: '定休日', time: '毎週月曜日', closed: true },
  ],
  address: {
    zip: '923-0808',
    prefecture: '石川県',
    city: '小松市',
    street: '旭町789',
    building: '101号室',
  },
  tel: '0761-00-9012',
  email: 'arch.hair@example.com',
  sns: {
    instagram: 'https://instagram.com/',
    twitter: '',
    facebook: '',
    line: 'https://lin.ee/',
  },
  googleMapEmbed: 'https://maps.google.com/maps?q=石川県小松市&output=embed',
  menus: [
    {
      category: 'カット',
      items: [
        { name: 'カット', price: 4800, description: 'カウンセリング込み。骨格に合わせたデザインカット' },
        { name: 'キッズカット', price: 2800, description: '中学生以下対象。元気なお子様もOK' },
        { name: 'カット＋シャンプー', price: 5800, description: '頭皮ケアマッサージ付き。極上のリラックスを。' },
      ],
    },
    {
      category: 'カラー',
      items: [
        { name: 'フルカラー', price: 8000, description: '根元から毛先まで。透明感のある発色。' },
        { name: 'ハイライト', price: 12000, description: '立体感と動きを出す外国人風スタイル' },
        { name: 'グレイカラー', price: 8500, description: '白髪をしっかりカバー。艶のある仕上がりに。' },
      ],
    },
    {
      category: 'トリートメント',
      items: [
        { name: 'システムトリートメント', price: 5000, description: 'ダメージを補修しなめらかな手触りに。' },
        { name: '酸熱トリートメント', price: 9000, description: 'くせ毛・うねりを改善。サラサラが長続き。' },
        { name: 'ヘッドスパ', price: 4500, description: '至福の頭皮ケア。ストレス解放に。' },
      ],
    },
  ],
  news: [
    {
      id: '1',
      date: '2026-04-18',
      category: '新メニュー',
      title: '酸熱トリートメント導入しました',
      body: 'くせ毛・うねりでお悩みの方に。酸熱トリートメントを新たに導入しました。サラサラの質感が長持ちします。',
    },
    {
      id: '2',
      date: '2026-04-05',
      category: 'お知らせ',
      title: '5月の予約受付開始しました',
      body: '5月分のご予約はLINEまたはお問い合わせフォームから受け付けております。お気軽にご連絡ください。',
    },
    {
      id: '3',
      date: '2026-03-28',
      category: 'キャンペーン',
      title: 'ご紹介割引キャンペーン実施中',
      body: 'お友達・ご家族のご紹介でご来店の方に500円OFF。紹介した方にも次回使える500円クーポンをプレゼント。',
    },
  ],
  images: {
    hero: '',
    gallery: [] as string[],
  },
  seo: {
    title: 'arch hair | 石川県小松市の美容室',
    description: '小松市の完全予約制プライベートヘアサロン。子連れOK・骨格カット・カラー・トリートメント。',
    ogImage: '/images/og.png',
    siteUrl: 'https://example.com',
  },
  gaId: '',
  privacyPolicyDate: '2026年3月28日',
  business: {
    type: 'HairSalon',
    cuisine: '',
    priceRange: '¥¥¥',
    openingHours: [
      'Tu We Th Fr Sa 09:00-19:00',
      'Su 09:00-17:00',
    ],
  },
}
