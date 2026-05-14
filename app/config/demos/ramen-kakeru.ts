import type { SiteConfig } from '../site'

export const ramenKakeruConfig: SiteConfig = {
  theme: 'crimson',
  name: 'らーめん天翔',
  nameEn: 'RAMEN KAKERU',
  catchcopy: '一杯に、すべてを込めて。',
  description:
    '小松市の路地裏にひっそりと佇む、地元客に愛されるラーメン店。鶏ガラと豚骨をじっくり炊いた濃厚スープに、自家製麺を合わせた一杯をお出ししています。',
  aboutTagline: '毎日変わらず、一杯ずつ丁寧に。',
  reservation: '',
  features: [
    { icon: 'i-heroicons-fire', title: 'こだわりの濃厚スープ', description: '鶏ガラ・豚骨・煮干しを8時間以上炊き込んだ、深みのある一杯。' },
    { icon: 'i-heroicons-sparkles', title: '毎朝打つ自家製麺', description: 'コシのあるストレート麺。スープと一緒に飲み込みたくなる絶妙な絡み。' },
    { icon: 'i-heroicons-heart', title: '地元に愛され続けて', description: '小松市民の日常に寄り添う一杯を、変わらぬ味でお届けしています。' },
  ],
  hours: [
    { day: '火〜日', time: '11:00 〜 14:30 / 18:00 〜 21:30', closed: false },
    { day: '定休日', time: '毎週月曜日（祝日の場合は翌日）', closed: true },
  ],
  address: {
    zip: '923-0941',
    prefecture: '石川県',
    city: '小松市',
    street: '小寺町ロ45',
    building: '',
  },
  tel: '0761-00-9001',
  email: 'hello@ramen-kakeru.example.com',
  sns: {
    instagram: 'https://www.instagram.com/ramen_kakeru/',
    twitter: '',
    facebook: '',
    line: '',
  },
  googleMapEmbed: 'https://maps.google.com/maps?q=石川県小松市小寺町&output=embed',
  menus: [
    {
      category: 'らーめん',
      items: [
        { name: '醤油らーめん', price: 850, description: '濃厚スープに自家製麺の定番。チャーシュー・メンマ・煮玉子・ネギのせ' },
        { name: '味噌らーめん', price: 920, description: '信州味噌をブレンドした濃厚味噌スープ。野菜をたっぷり炒めて' },
        { name: '塩らーめん', price: 850, description: '能登の海塩で仕上げた澄んだスープ。素材の旨みが際立つ一杯' },
        { name: 'とんこつ醤油', price: 920, description: '豚骨と醤油のいいとこ取り。とろみのあるスープが麺に絡む' },
        { name: 'つけ麺', price: 980, description: '太麺と濃厚つけ汁。〆のスープ割りまで楽しめる' },
      ],
    },
    {
      category: 'ご飯もの',
      items: [
        { name: 'チャーシュー丼', price: 480, description: '自家製チャーシューをたっぷりのせた、ラーメンの相棒' },
        { name: '焼き飯', price: 580, description: 'パラっと炒めた昔ながらの中華風焼き飯' },
        { name: '半ライス', price: 200, description: 'スープを最後まで楽しむためのお供に' },
      ],
    },
    {
      category: 'サイドメニュー',
      items: [
        { name: '餃子（6個）', price: 480, description: '皮から手作り。野菜たっぷりで毎日仕込んでいます' },
        { name: '味玉', price: 150, description: 'とろっとした半熟仕立て' },
        { name: '辛味メンマ', price: 250, description: 'ピリ辛のクセになる箸休め' },
      ],
    },
  ],
  news: [
    {
      id: '1',
      date: '2026-05-10',
      category: 'お知らせ',
      title: '5月の営業カレンダーを更新しました',
      body: '5月の定休日に加えて、5/19（月）は仕入れの都合で臨時休業とさせていただきます。ご了承ください。',
    },
    {
      id: '2',
      date: '2026-04-25',
      category: '新メニュー',
      title: '夏季限定「冷やし担々麺」が登場',
      body: '5月10日より、夏季限定の「冷やし担々麺」をご用意しました。冷たく締めた麺に濃厚な胡麻だれと自家製ラー油。9月末まで提供予定です。',
    },
    {
      id: '3',
      date: '2026-04-01',
      category: 'お知らせ',
      title: '券売機を新調いたしました',
      body: 'これまでの券売機を新しい機種に入れ替えました。QRコード決済（PayPay・楽天ペイ等）にも対応しております。',
    },
  ],
  images: {
    hero: '',
    gallery: [] as string[],
  },
  seo: {
    title: 'らーめん天翔 | 石川県小松市の本格らーめん',
    description: '小松市のらーめん店。鶏ガラ・豚骨・煮干しを8時間炊き込んだ濃厚スープと自家製麺。醤油・味噌・塩・とんこつ・つけ麺など多彩なメニュー。',
    ogImage: '/images/og.png',
    siteUrl: 'https://example.com',
  },
  gaId: '',
  privacyPolicyDate: '2026年5月1日',
  business: {
    type: 'Restaurant',
    cuisine: 'Japanese',
    priceRange: '¥',
    openingHours: [
      'Tu We Th Fr Sa Su 11:00-14:30',
      'Tu We Th Fr Sa Su 18:00-21:30',
    ],
  },
}
