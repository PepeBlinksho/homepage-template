import type { SiteConfig } from '../site'

export const sanyoAutoConfig: SiteConfig = {
  theme: 'cobalt',
  name: '三洋自動車',
  nameEn: 'SANYO JIDOSHA',
  catchcopy: '地元小松市で、誠実な整備を。',
  description:
    '小松市北浅井町で長年地域に根ざした自動車整備工場です。車検から一般整備まで、丁寧な説明と適正価格でお客様の安心をサポートします。',
  aboutTagline: '安心できる整備を、当たり前に。',
  reservation: '',
  features: [
    { icon: 'i-heroicons-chat-bubble-left-ellipsis', title: '丁寧な説明', description: '作業前に整備内容と費用をわかりやすくご説明。納得いただいてから作業を進めます。' },
    { icon: 'i-heroicons-currency-yen', title: '適正価格の車検', description: '不要な部品交換はご提案しません。「無駄な費用がかからない」とご好評いただいています。' },
    { icon: 'i-heroicons-bolt', title: '迅速な対応', description: '急なトラブルや修理もできる限り早急に対応。お気軽にご相談ください。' },
  ],
  hours: [
    { day: '月〜金', time: '8:30 〜 17:30', closed: false },
    { day: '土曜日', time: '8:30 〜 17:00', closed: false },
    { day: '定休日', time: '日曜日・祝日', closed: true },
  ],
  address: {
    zip: '923-0851',
    prefecture: '石川県',
    city: '小松市',
    street: '北浅井町１１０',
    building: '',
  },
  tel: '0761-21-3229',
  email: 'info@sanyo-auto.example.com',
  sns: {
    instagram: '',
    twitter: '',
    facebook: '',
    line: '',
  },
  googleMapEmbed: 'https://maps.google.com/maps?q=石川県小松市北浅井町110&output=embed',
  menus: [
    {
      category: '車検・法定点検',
      items: [
        { name: '軽自動車 車検', price: 44000, description: '法定費用別途。最短2日〜。事前の見積もり無料' },
        { name: '小型・普通車 車検', price: 55000, description: '法定費用別途。排気量・年式により変動。お気軽にお問い合わせください' },
        { name: '12ヶ月定期点検', price: 8800, description: '法定の定期点検。早期発見で修理費用を抑えます' },
      ],
    },
    {
      category: '一般整備・消耗品交換',
      items: [
        { name: 'エンジンオイル交換', price: 3500, description: '車種・オイルグレードにより変動。フィルター同時交換は+1,000円〜' },
        { name: 'タイヤ交換（4本脱着）', price: 6000, description: 'タイヤ代別途。バランス調整込み' },
        { name: 'バッテリー交換', price: 12000, description: '部品代込み。廃バッテリー引き取り無料' },
        { name: 'ブレーキパッド交換（前輪）', price: 8000, description: '部品代込み。ブレーキ鳴き・効き不良はお早めにご相談を' },
      ],
    },
    {
      category: 'その他のサービス',
      items: [
        { name: 'エアコン修理・ガス補充', price: 5500, description: '夏前の点検もお気軽に。冷えが悪くなったら早めの確認を' },
        { name: 'キズ・へこみ修理（要見積）', price: 5000, description: '小さな傷からドア交換まで対応。まずはお見積もりにお越しください' },
        { name: '自動車保険の見直し相談', price: 1000, description: '任意保険の相談も承ります。お気軽にどうぞ' },
      ],
    },
  ],
  news: [
    {
      id: '1',
      date: '2026-05-01',
      category: 'お知らせ',
      title: '夏タイヤへの履き替え受付中',
      body: '5月〜6月はタイヤ交換のご依頼が集中します。お早めのご予約をお勧めします。お電話またはご来店にてご相談ください。',
    },
    {
      id: '2',
      date: '2026-04-01',
      category: 'お知らせ',
      title: 'ゴールデンウィーク期間の営業について',
      body: '4月29日（火）〜5月5日（月）は休業いたします。5月6日（火）より通常営業を再開します。',
    },
    {
      id: '3',
      date: '2026-03-15',
      category: 'お知らせ',
      title: '車検の早期ご予約で工賃5%割引',
      body: '車検満了日の2ヶ月以上前にご予約いただくと、工賃が5%オフになります。満了日はお客様の車検証でご確認ください。',
    },
  ],
  images: {
    hero: '',
    gallery: [] as string[],
  },
  seo: {
    title: '三洋自動車 | 小松市の車検・自動車整備',
    description: '石川県小松市北浅井町の自動車整備工場。車検・一般整備・タイヤ交換など幅広く対応。丁寧な説明と適正価格でお客様の安心をサポートします。',
    ogImage: '/images/og.png',
    siteUrl: 'https://example.com',
  },
  gaId: '',
  privacyPolicyDate: '2026年5月1日',
  business: {
    type: 'AutoRepair',
    cuisine: '',
    priceRange: '¥¥',
    openingHours: [
      'Mo Tu We Th Fr 08:30-17:30',
      'Sa 08:30-17:00',
    ],
  },
}
