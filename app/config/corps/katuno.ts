import type { CorpConfig } from '../corp'

export const katunoConfig: CorpConfig = {
  theme: 'cobalt',
  name: '株式会社 勝野',
  nameEn: 'KATSUNO CO., LTD.',
  catchcopy: 'ムダなく包む。美しく保護する。',
  description:
    '昭和28年の創業以来、愛知県瀬戸市の地で包装資材の専門商社として歩んでまいりました。粘着テープから外装ケースまで、6つのカテゴリで「包む」のすべてに応えます。製造業・物流業・小売業のお客様の現場を、確かな包装でお支えしています。',
  established: '昭和28年6月19日（1953年）',
  employees: '7名',
  license: '',
  serviceArea: '愛知県・岐阜県・三重県を中心に全国対応',

  features: [
    {
      icon: 'i-heroicons-shield-check',
      title: '創業72年の信頼',
      description: '昭和28年の創業以来、瀬戸の地で包装資材一筋。長年のお取引で培った知見を、新規のお客様にも還元します。',
    },
    {
      icon: 'i-heroicons-cube',
      title: '6カテゴリの豊富な品揃え',
      description: '粘着テープ・緩衝材・結束資材・梱包機材・袋・外装ケースまで、包装の全工程をワンストップでご提案します。',
    },
    {
      icon: 'i-heroicons-truck',
      title: '本社・名古屋支店の2拠点体制',
      description: '瀬戸の本社と名古屋支店の2拠点で、東海エリアのお客様にスピーディに対応します。',
    },
  ],

  services: [
    {
      icon: 'i-heroicons-rectangle-stack',
      title: '粘着テープ',
      description: 'クラフトテープ・OPPテープ・布テープ・養生テープなど、用途と現場に合わせたテープを各種取り揃えています。',
    },
    {
      icon: 'i-heroicons-square-3-stack-3d',
      title: '緩衝材',
      description: 'エアーキャップ・ミラーマット・ハイタッチ・カットペーパー。精密機器から日用品まで、製品を守る最適な緩衝材をご提案します。',
    },
    {
      icon: 'i-heroicons-link',
      title: '結束資材',
      description: 'PPバンド・結束紐・ストレッチフィルム。手締めから機械結束まで、現場の作業効率を引き上げます。',
    },
    {
      icon: 'i-heroicons-cog-6-tooth',
      title: '梱包用機材',
      description: '半自動結束機・自動結束機・ストレッチ包装機。導入のご相談からアフターサポートまで一貫対応いたします。',
    },
    {
      icon: 'i-heroicons-shopping-bag',
      title: '各種袋',
      description: 'ポリ袋・手提げ袋など、業務用から贈答用まで多様な用途に対応する袋類を取り揃えています。',
    },
    {
      icon: 'i-heroicons-archive-box',
      title: '段ボール・外装ケース',
      description: '段ボール・コンテナー・化粧箱。製品のサイズ・重量・輸送距離に合わせて最適なケースをご提案します。',
    },
  ],

  works: [
    {
      title: '製造業様 — 結束機の導入から保守まで',
      category: '梱包用機材',
      location: '愛知県内',
      image: '',
      description: '半自動結束機の選定・設置・スタッフ研修・定期メンテナンスまで、現場の生産性向上を一貫サポート。',
    },
    {
      title: '物流業様 — ストレッチフィルムの定期納品',
      category: '結束資材',
      location: '名古屋市内',
      image: '',
      description: '在庫管理を含めた定期納品体制で、繁忙期の欠品リスクを最小化。コスト試算もご相談いただけます。',
    },
    {
      title: '小売業様 — オリジナル化粧箱の企画提案',
      category: '外装ケース',
      location: '愛知県内',
      image: '',
      description: '商品の世界観に合わせた化粧箱を、サイズ・素材・印刷仕様までトータルでご提案。少量ロットにも対応します。',
    },
    {
      title: '精密機器メーカー様 — 緩衝材の規格選定',
      category: '緩衝材',
      location: '岐阜県内',
      image: '',
      description: '輸送時の振動・衝撃試験のデータをもとに、最適な緩衝材グレードをご提案。製品破損率を大幅に低減しました。',
    },
    {
      title: '食品メーカー様 — 包装ライン全体の最適化',
      category: '粘着テープ・結束資材',
      location: '愛知県内',
      image: '',
      description: 'テープ・PPバンド・段ボールの規格を統一化し、在庫管理コストと作業効率を同時に改善した事例です。',
    },
    {
      title: '日用品メーカー様 — ポリ袋の小ロット対応',
      category: '袋',
      location: '三重県内',
      image: '',
      description: '少量多品種の生産ラインに合わせた、小ロット・短納期のポリ袋供給体制を構築しました。',
    },
  ],

  hours: [
    { day: '月〜金', time: '8:30 〜 17:30', closed: false },
    { day: '土・日・祝', time: '休業日', closed: true },
  ],

  address: {
    zip: '489-0805',
    prefecture: '愛知県',
    city: '瀬戸市',
    street: '陶原町3丁目9番地',
    building: '',
  },
  tel: '0561-84-7511',
  email: 'info@katuno.co.jp',

  sns: {
    instagram: '',
    facebook: '',
    line: '',
  },

  googleMapEmbed: 'https://maps.google.com/maps?q=愛知県瀬戸市陶原町3-9&output=embed',

  news: [
    {
      id: '1',
      date: '2026-05-01',
      category: 'お知らせ',
      title: '新規取引のお問い合わせを随時お受けしています',
      body: '製造業・物流業・小売業の皆さま、包装資材の見積もり・コンサルティングのご相談を随時お受けしております。お問い合わせフォームまたはお電話よりお気軽にご連絡ください。',
    },
    {
      id: '2',
      date: '2026-04-15',
      category: '新商品',
      title: '環境配慮型の緩衝材・梱包資材を取り扱い開始',
      body: '紙緩衝材・バイオマス配合ポリ袋など、環境配慮型の包装資材ラインナップを拡充しました。ESG対応をお考えのお客様はお気軽にご相談ください。',
    },
    {
      id: '3',
      date: '2026-01-04',
      category: 'お知らせ',
      title: '2026年の営業を開始いたしました',
      body: '本年も創業72年の歩みを大切に、お客様の包装課題に真摯に向き合ってまいります。引き続きよろしくお願いいたします。',
    },
  ],

  images: {
    hero: '',
    gallery: [],
  },

  seo: {
    title: '株式会社勝野 | 創業72年・愛知県瀬戸市の包装資材専門商社',
    description:
      '愛知県瀬戸市の包装資材専門商社・株式会社勝野（創業昭和28年）。粘着テープ・緩衝材・結束資材・梱包機材・袋・段ボールまで、製造業・物流業・小売業の現場を支える包装資材を一貫提案します。',
    ogImage: '/images/og.png',
    siteUrl: 'https://example.com',
  },

  business: {
    type: 'LocalBusiness',
    openingHours: ['Mo Tu We Th Fr 08:30-17:30'],
  },

  gaId: '',
  privacyPolicyDate: '2026年5月1日',
}
