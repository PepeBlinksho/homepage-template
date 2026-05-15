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

  stats: [
    { value: 72, suffix: '年', label: '創業' },
    { value: 6, suffix: 'カテゴリ', label: '取扱品目' },
    { value: 2, suffix: '拠点', label: '本社・名古屋支店' },
  ],

  worksSectionTitle: '取引実績',
  worksSectionDescription: 'これまでに対応した主な事例をご紹介します。',
  servicesCta: '包装資材のご相談・お見積りを承ります',

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
      slug: 'tape',
      description: 'クラフトテープ・OPPテープ・布テープ・養生テープなど、用途と現場に合わせたテープを各種取り揃えています。',
      products: [
        { name: 'クラフトテープ', description: '一般梱包に最適な紙製テープ。軽量で使いやすく、コストパフォーマンスに優れます。', image: '' },
        { name: 'OPPテープ', description: '透明で強力な粘着力。重量物の梱包や外装の補強に幅広く使われます。', image: '' },
        { name: '布テープ', description: '引き裂き性に優れた布製テープ。手で簡単にカットでき、現場での作業効率が上がります。', image: '' },
        { name: '養生テープ', description: '糊残りが少なく、塗装・リフォーム・引越し時の養生に最適。各色取り揃えています。', image: '' },
        { name: '両面テープ', description: '薄手から厚手まで各種対応。組立・固定・ラベリングなど多用途に活躍します。', image: '' },
        { name: 'マスキングテープ', description: '塗装・印刷・電子部品の保護に。耐熱タイプや低粘着タイプもご用意。', image: '' },
      ],
    },
    {
      icon: 'i-heroicons-square-3-stack-3d',
      title: '緩衝材',
      slug: 'cushioning',
      description: 'エアーキャップ・ミラーマット・ハイタッチ・カットペーパー。精密機器から日用品まで、製品を守る最適な緩衝材をご提案します。',
      products: [
        { name: 'エアーキャップ', description: '気泡緩衝材（プチプチ）。小気泡から大気泡まで、製品の大きさや重量に応じてお選びいただけます。', image: '' },
        { name: 'ミラーマット', description: '静電気防止・傷防止に優れた発泡ポリエチレンシート。食器・精密機器の梱包に最適です。', image: '' },
        { name: 'ハイタッチ（発泡シート）', description: '柔軟性と弾力性を兼ね備えた薄手の発泡シート。ロール・カット品どちらも対応。', image: '' },
        { name: 'カットペーパー', description: 'クシャクシャに丸めて隙間充填に使う梱包紙。環境に優しく、リサイクル可能です。', image: '' },
        { name: '紙緩衝材（環境配慮型）', description: 'バイオマス素材使用。ESG対応・脱プラを推進するお客様に最適な選択肢です。', image: '' },
      ],
    },
    {
      icon: 'i-heroicons-link',
      title: '結束資材',
      slug: 'binding',
      description: 'PPバンド・結束紐・ストレッチフィルム。手締めから機械結束まで、現場の作業効率を引き上げます。',
      products: [
        { name: 'PPバンド', description: '段ボールや木材のパレット積みに。手締め用・機械用・各種幅・厚みをご用意しています。', image: '' },
        { name: 'ストレッチフィルム（ラップ）', description: 'パレット荷崩れ防止に欠かせない。手巻き用・機械用・各種厚みを取り揃えています。', image: '' },
        { name: '結束紐（PP紐）', description: '軽量物の束ね・縛りに。色分け管理・ラベリングにも活用できます。', image: '' },
        { name: 'バンド掛け用テーブル', description: 'PPバンド作業の効率化に。小型から業務用まで各種サイズをご提案します。', image: '' },
      ],
    },
    {
      icon: 'i-heroicons-cog-6-tooth',
      title: '梱包用機材',
      slug: 'machines',
      description: '半自動結束機・自動結束機・ストレッチ包装機。導入のご相談からアフターサポートまで一貫対応いたします。',
      products: [
        { name: '半自動結束機', description: 'テーブルに乗せてペダルを踏むだけで結束完了。省スペースで導入しやすいエントリーモデル。', image: '' },
        { name: '自動結束機', description: 'コンベア連動・自動送り込みに対応。大量出荷の現場で圧倒的な作業効率を実現します。', image: '' },
        { name: 'ストレッチ包装機', description: 'パレット荷物を自動でフィルム巻き。安定した品質と省力化を同時に達成します。', image: '' },
        { name: '梱包機メンテナンス', description: '定期点検・消耗品交換・修理まで一貫対応。導入後も長期的にサポートします。', image: '' },
      ],
    },
    {
      icon: 'i-heroicons-shopping-bag',
      title: '各種袋',
      slug: 'bags',
      description: 'ポリ袋・手提げ袋など、業務用から贈答用まで多様な用途に対応する袋類を取り揃えています。',
      products: [
        { name: 'ポリ袋（規格袋）', description: 'JIS規格サイズを豊富に在庫。食品・部品・資料の袋詰めに幅広く使われます。', image: '' },
        { name: '手提げ袋', description: '紙袋・ビニール袋・不織布袋。業務用大口から小ロット対応まで柔軟に対応します。', image: '' },
        { name: 'チャック付き袋', description: '繰り返し開閉可能。小物部品・食品サンプル・書類の保管に最適。', image: '' },
        { name: 'バイオマス配合ポリ袋', description: '植物由来原料配合。SDGs・脱炭素への取り組みをお考えのお客様に最適です。', image: '' },
      ],
    },
    {
      icon: 'i-heroicons-archive-box',
      title: '段ボール・外装ケース',
      slug: 'boxes',
      description: '段ボール・コンテナー・化粧箱。製品のサイズ・重量・輸送距離に合わせて最適なケースをご提案します。',
      products: [
        { name: '段ボール箱（規格品）', description: 'A式・B式・C式・ヤッコ型など各種サイズを在庫。小ロットからの注文に対応。', image: '' },
        { name: 'オーダーメイド段ボール', description: '製品寸法ぴったりのサイズを少量から製作。輸送中の破損リスクを大幅に削減します。', image: '' },
        { name: '化粧箱', description: '贈答品・ブランド品向けの印刷化粧箱。パッケージデザインの提案も承ります。', image: '' },
        { name: '折りたたみコンテナー', description: '繰り返し使えるプラスチック製コンテナ。物流コスト削減と環境負荷低減を両立。', image: '' },
        { name: '仕切り・内装材', description: '段ボール仕切り・発泡スチロールトレー。製品同士の接触を防ぎ、荷傷みを防止します。', image: '' },
      ],
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
