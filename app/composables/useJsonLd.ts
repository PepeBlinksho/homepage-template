import { siteConfig } from '~/config/site'

/** トップページ用 LocalBusiness 構造化データ */
export function useJsonLd() {
  const siteUrl = useRuntimeConfig().public.siteUrl as string

  const snsUrls = Object.values(siteConfig.sns).filter(url => url !== '')

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': siteConfig.business.type,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteUrl,
    telephone: siteConfig.tel,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      postalCode: siteConfig.address.zip,
      addressRegion: siteConfig.address.prefecture,
      addressLocality: siteConfig.address.city,
      streetAddress: siteConfig.address.street
        + (siteConfig.address.building ? ` ${siteConfig.address.building}` : ''),
      addressCountry: 'JP',
    },
    openingHours: siteConfig.business.openingHours,
    servesCuisine: siteConfig.business.cuisine,
    priceRange: siteConfig.business.priceRange,
    image: siteConfig.seo.ogImage ? `${siteUrl}${siteConfig.seo.ogImage}` : undefined,
    ...(snsUrls.length > 0 && { sameAs: snsUrls }),
  }

  // image が undefined の場合はキーごと除去
  if (!schema.image) delete schema.image

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(schema),
      },
    ],
  })
}

/** お知らせ詳細ページ用 BlogPosting 構造化データ */
export function useArticleJsonLd(article: {
  title: string
  body: string
  date: string
  id: string
}) {
  const siteUrl = useRuntimeConfig().public.siteUrl as string

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.body.slice(0, 160),
    datePublished: article.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/news/${article.id}`,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteUrl,
    },
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(schema),
      },
    ],
  })
}
