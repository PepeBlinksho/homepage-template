import type { SiteConfig } from '../site'

export const lagoBiancoConfig: SiteConfig = {
  name: 'LAGO BIANCO',
  nameEn: 'AQUA TERRACE CAFE LAGO BIANCO',
  catchcopy: '湖を見ながら、ゆっくりとした一日を。',
  description:
    '小松市・木場潟公園の湖畔に佇むテラスカフェ。水面を渡る風と季節の木々に囲まれて、コーヒー、ランチ、ケーキセットを心ゆくまでお楽しみいただけます。プライベートな貸切パーティーにもご利用いただけます。',
  aboutTagline: '水辺の時間が、特別を作る。',
  reservation: '',
  features: [
    { icon: 'i-heroicons-sun', title: '湖畔のテラス席', description: '木場潟を一望できるオープンテラス。春から秋までは外で、冬は窓越しに四季の景色を楽しめます。' },
    { icon: 'i-heroicons-cake', title: '手作りのケーキセット', description: 'パティシエが毎朝仕込むケーキとドリンクのセット。湖畔の景色と一緒に、贅沢なティータイムを。' },
    { icon: 'i-heroicons-sparkles', title: '貸切パーティー対応', description: '誕生日・記念日・小規模ウェディングまで、湖を背景にした特別な時間をプロデュースします。' },
  ],
  hours: [
    { day: '水〜金', time: '10:00 〜 17:00', closed: false },
    { day: '土・日・祝', time: '09:00 〜 18:00', closed: false },
    { day: '定休日', time: '月・火曜日', closed: true },
  ],
  address: {
    zip: '923-0974',
    prefecture: '石川県',
    city: '小松市',
    street: '蓮代寺町1-1（木場潟公園内）',
    building: '',
  },
  tel: '0761-00-3300',
  email: 'hello@lago-bianco.example.com',
  sns: {
    instagram: 'https://www.instagram.com/lagobianco/',
    twitter: '',
    facebook: '',
    line: '',
  },
  googleMapEmbed: 'https://maps.google.com/maps?q=石川県小松市木場潟公園&output=embed',
  menus: [
    {
      category: 'ドリンク',
      items: [
        { name: 'ブレンドコーヒー', price: 580, description: '湖畔の景色に合う、ミディアムローストのブレンド' },
        { name: 'カフェラテ', price: 620, description: 'たっぷりのミルクとエスプレッソのまろやかな一杯' },
        { name: 'ハーブティー', price: 620, description: 'カモミール・ペパーミントなどから選べます' },
        { name: '季節のフルーツソーダ', price: 680, description: 'いちご・桃・ぶどうなど、旬のフルーツを使った見た目も鮮やかな一杯' },
      ],
    },
    {
      category: 'ランチ・軽食',
      items: [
        { name: '本日のランチプレート', price: 1480, description: 'メイン・サラダ・スープ・パンの定番ランチ。コーヒー付き' },
        { name: 'パスタランチ', price: 1380, description: '日替わりパスタ・サラダ・パン・ドリンクのセット' },
        { name: 'クロワッサンサンド', price: 980, description: '焼きたてクロワッサンに季節野菜と燻製ハム' },
        { name: 'キーマカレー', price: 1180, description: 'スパイスを効かせた本格キーマカレーとサラダ' },
      ],
    },
    {
      category: 'ケーキ・スイーツ',
      items: [
        { name: 'ケーキセット', price: 980, description: '本日のケーキ＋ドリンクのお得なセット' },
        { name: '季節のタルト', price: 620, description: '旬のフルーツをたっぷり使った手作りタルト' },
        { name: 'ガトーショコラ', price: 580, description: '濃厚なチョコレートケーキ。バニラアイス添え' },
        { name: 'チーズケーキ', price: 580, description: 'ニューヨークスタイルの濃厚チーズケーキ' },
      ],
    },
  ],
  news: [
    {
      id: '1',
      date: '2026-05-10',
      category: 'イベント',
      title: '6月の貸切パーティープラン受付開始',
      body: '湖畔の景色を独占できる、6月の貸切パーティープランの予約を開始しました。誕生日、記念日、小規模ウェディングなど、お問い合わせから30名様まで対応可能です。',
    },
    {
      id: '2',
      date: '2026-04-28',
      category: '新メニュー',
      title: '春のフルーツソーダが登場',
      body: '加賀のいちご・能登の桃を使った、季節限定のフルーツソーダが登場。透き通ったソーダにフルーツが浮かんだ、湖畔の景色によく合う一杯です。',
    },
    {
      id: '3',
      date: '2026-04-01',
      category: 'お知らせ',
      title: '春の営業時間について',
      body: '4月から、土日祝の朝の営業を9:00開始に拡大しました。朝の湖を眺めながらのモーニングコーヒーをぜひお楽しみください。',
    },
  ],
  images: {
    hero: '',
    gallery: [] as string[],
  },
  seo: {
    title: 'LAGO BIANCO | 石川県小松市・木場潟公園のテラスカフェ',
    description: '木場潟公園の湖畔に佇むテラスカフェ。湖を眺めながらのランチ、ケーキセット、ドリンクをご提供。貸切パーティープランも対応。',
    ogImage: '/images/og.png',
    siteUrl: 'https://example.com',
  },
  gaId: '',
  privacyPolicyDate: '2026年5月1日',
  business: {
    type: 'CafeOrCoffeeShop',
    cuisine: 'International',
    priceRange: '¥¥',
    openingHours: [
      'We Th Fr 10:00-17:00',
      'Sa Su 09:00-18:00',
    ],
  },
}
