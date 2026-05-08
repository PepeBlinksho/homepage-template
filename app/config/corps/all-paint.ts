import type { CorpConfig } from '~/config/corp'

export const allPaintConfig: CorpConfig = {
  name: 'All paint',
  nameEn: 'ALL PAINT CO.',
  catchcopy: '地元に根ざした塗装で、大切な建物を守ります。',
  description:
    '石川県小松市を拠点に、外壁・屋根・内装の塗装工事を手がけて20年。地元のお客様の大切な建物を、丁寧な施工と誠実な対応でお守りします。見積もりから施工後のアフターフォローまで、一貫して自社職人が担当します。',
  established: '2004年',
  employees: '8名',
  license: '石川県知事許可（般-04）第00000号',
  serviceArea: '小松市・加賀市・能美市・白山市',

  features: [
    {
      icon: 'i-heroicons-shield-check',
      title: '20年・500件以上の実績',
      description: '地元小松市を中心に20年間で500件以上の施工実績。経験豊富な自社職人が丁寧に対応します。',
    },
    {
      icon: 'i-heroicons-magnifying-glass',
      title: '無料点検・お見積り',
      description: '現地調査・お見積りは完全無料。しつこい営業は一切行いません。まずはお気軽にご相談ください。',
    },
    {
      icon: 'i-heroicons-star',
      title: '10年保証・定期点検',
      description: '施工後も安心の10年保証付き。年1回の無料定期点検で、建物の状態を長期間お守りします。',
    },
  ],

  services: [
    {
      icon: 'i-heroicons-home',
      title: '外壁塗装',
      description: '住宅・店舗・工場の外壁塗装に対応。耐候性・防水性に優れた塗料を使用し、建物の美観と耐久性を長期間維持します。',
    },
    {
      icon: 'i-heroicons-building-office-2',
      title: '屋根塗装',
      description: 'スレート・瓦・金属屋根など各種屋根材に対応。劣化・色あせ・雨漏りのサインが見られたらお早めにご相談ください。',
    },
    {
      icon: 'i-heroicons-paint-brush',
      title: '内装塗装',
      description: '店舗・オフィス・工場の内装塗装。リニューアル・イメージチェンジから防カビ・消臭塗料の施工まで幅広く対応します。',
    },
    {
      icon: 'i-heroicons-wrench-screwdriver',
      title: '防水工事',
      description: 'ベランダ・屋上・駐車場の防水工事。ウレタン防水・シート防水など建物の状況に合わせた最適な工法をご提案します。',
    },
    {
      icon: 'i-heroicons-building-storefront',
      title: '店舗・工場塗装',
      description: '法人・事業者様の店舗・工場・倉庫の塗装工事に対応。夜間・休日施工など営業に支障をきたさないスケジュール調整も可能です。',
    },
    {
      icon: 'i-heroicons-clipboard-document-check',
      title: '無料点検・診断',
      description: '建物の外壁・屋根の状態を無料で点検・診断します。塗り替え時期の目安や劣化箇所をわかりやすくご報告します。',
    },
  ],

  works: [
    {
      title: '戸建て外壁・屋根の全面塗装',
      category: '外壁塗装',
      location: '小松市',
      image: '',
      description: '築15年の戸建て住宅。外壁のひび割れ・屋根の色あせを全面塗装でリフレッシュ。耐候性塗料で次の塗り替えまで長持ちします。',
    },
    {
      title: '飲食店の外壁イメージチェンジ',
      category: '外壁塗装',
      location: '加賀市',
      image: '',
      description: '開業に合わせた外壁の色替え施工。ブランドカラーに合わせた調色で、店舗の第一印象を大きく向上させました。',
    },
    {
      title: '工場屋根の防水・塗装工事',
      category: '屋根塗装',
      location: '能美市',
      image: '',
      description: '築20年の工場屋根。雨漏り箇所の補修と防水塗装を施工。工場稼働中のため夜間・週末に分けて対応しました。',
    },
    {
      title: 'マンション共用廊下の床防水',
      category: '防水工事',
      location: '小松市',
      image: '',
      description: '3階建てマンションの共用廊下・階段を全面防水処理。入居者の方への影響を最小限にするよう段階施工で対応しました。',
    },
    {
      title: 'オフィスの内装塗り替え',
      category: '内装塗装',
      location: '白山市',
      image: '',
      description: 'リモートワーク導入に伴うオフィスリニューアル。作業効率が上がるよう壁の色合いを見直し、明るく清潔感のある空間に仕上げました。',
    },
    {
      title: '戸建て外壁の部分補修塗装',
      category: '外壁塗装',
      location: '小松市',
      image: '',
      description: 'ひび割れ・剥がれ箇所の部分補修と塗装。全面塗装の前段階として、劣化が進んでいた箇所のみを効率よく補修しました。',
    },
  ],

  hours: [
    { day: '月〜土', time: '8:00 〜 17:00', closed: false },
    { day: '日・祝', time: '定休日', closed: true },
  ],

  address: {
    zip: '923-0801',
    prefecture: '石川県',
    city: '小松市',
    street: '土居原町134',
    building: '',
  },
  tel: '0761-00-1234',
  email: 'info@allpaint-komatsu.example.com',

  sns: {
    instagram: '',
    facebook: '',
    line: '',
  },

  googleMapEmbed: 'https://maps.google.com/maps?q=石川県小松市土居原町&output=embed',

  news: [
    {
      id: '1',
      date: '2026-05-01',
      category: 'お知らせ',
      title: '春の外壁・屋根無料点検キャンペーン実施中',
      body: '5月末まで、外壁・屋根の無料点検キャンペーンを実施しています。冬の寒さや積雪で傷んだ箇所がないか、専門スタッフが無料で診断します。お気軽にお問い合わせください。',
    },
    {
      id: '2',
      date: '2026-03-15',
      category: '施工事例',
      title: '加賀市・飲食店の外壁塗装が完了しました',
      body: '加賀市内の飲食店様の外壁を、開業に合わせてイメージチェンジ。お客様のご要望に合わせた色調で仕上げました。施工事例はお気軽にお問い合わせください。',
    },
    {
      id: '3',
      date: '2026-01-10',
      category: 'お知らせ',
      title: '2026年の営業を開始しました',
      body: '本年も変わらぬご支援をよろしくお願いいたします。外壁・屋根の塗装工事、防水工事のご相談はお気軽にどうぞ。無料見積もり随時受付中です。',
    },
  ],

  images: {
    hero: '',
    gallery: [],
  },

  seo: {
    title: 'All paint | 石川県小松市の外壁・屋根塗装専門店',
    description:
      '小松市の塗装専門業者。外壁塗装・屋根塗装・防水工事を20年の実績で対応。無料点検・お見積り随時受付中。小松市・加賀市・能美市・白山市に対応。',
    ogImage: '/images/og.png',
    siteUrl: 'https://example.com',
  },

  business: {
    type: 'GeneralContractor',
    openingHours: ['Mo Tu We Th Fr Sa 08:00-17:00'],
  },

  gaId: '',
  privacyPolicyDate: '2026年5月1日',
}
