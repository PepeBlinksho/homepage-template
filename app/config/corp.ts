export const corpConfig = {
  name: '会社名をここに入力',
  nameEn: 'COMPANY NAME',
  catchcopy: 'キャッチコピーをここに入力',
  description: '会社の説明文をここに入力してください。地域に根ざした事業内容やこだわりを2〜3文で記載します。',
  established: '----年',
  employees: '',
  license: '',
  serviceArea: '',

  features: [
    { icon: 'i-heroicons-shield-check', title: '実績と信頼', description: '特徴の説明文を入力' },
    { icon: 'i-heroicons-magnifying-glass', title: '無料お見積り', description: '特徴の説明文を入力' },
    { icon: 'i-heroicons-star', title: '充実の保証', description: '特徴の説明文を入力' },
  ],

  services: [
    { icon: 'i-heroicons-wrench-screwdriver', title: 'サービス名', description: 'サービスの説明文を入力してください。' },
  ] as Array<{ icon: string, title: string, description: string }>,

  works: [] as Array<{ title: string, category: string, location: string, image: string, description: string }>,

  hours: [
    { day: '月〜土', time: '8:00 〜 17:00', closed: false },
    { day: '日・祝', time: '定休日', closed: true },
  ],

  address: {
    zip: '000-0000',
    prefecture: '石川県',
    city: '小松市',
    street: '○○町0-0',
    building: '',
  },
  tel: '000-000-0000',
  email: 'info@example.com',

  sns: {
    instagram: '',
    facebook: '',
    line: '',
  },

  // Google マップで対象地点を開き「共有」→「地図を埋め込む」→「HTMLをコピー」で
  // 取得した <iframe src="..."> の src 属性値を貼り付けてください。
  // 例: 'https://www.google.com/maps/embed?pb=!1m18!...'
  googleMapEmbed: 'https://maps.google.com/maps?q=石川県小松市&output=embed',

  news: [] as Array<{ id: string, date: string, category: string, title: string, body: string }>,

  images: {
    hero: '',
    gallery: [] as string[],
  },

  seo: {
    title: '会社名 | 石川県小松市',
    description: 'メタディスクリプションをここに入力してください。',
    ogImage: '/images/og.png',
    siteUrl: 'https://example.com',
  },

  // 構造化データ（Google検索のリッチリザルト用）
  // https://schema.org/LocalBusiness のサブタイプを指定
  // 例: GeneralContractor / LandscapeService / AutoDealer / HairSalon / LocalBusiness
  business: {
    type: 'LocalBusiness',
    // Schema.org 形式の営業時間（定休日は記載しない）
    // 曜日コード: Mo Tu We Th Fr Sa Su（範囲指定: Mo-Fr）
    openingHours: [] as string[],
  },

  gaId: '',
  privacyPolicyDate: '2026年5月1日',
}

export function buildCorpAddress(address: CorpConfig['address']): string {
  return address.prefecture + address.city + address.street + (address.building ?? '')
}

import type { ThemeName } from './site'

export type CorpConfig = typeof corpConfig & { theme?: ThemeName }
export type CorpService = CorpConfig['services'][0]
export type CorpWork = CorpConfig['works'][0]
export type CorpNewsItem = CorpConfig['news'][0]
