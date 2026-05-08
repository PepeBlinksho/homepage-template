/** LocalBusiness 構造化データ（shop / demo / beauty / メインサイト共通） */
export function useJsonLd() {
  const cfg = useShopConfig()
  const { public: { siteUrl } } = useRuntimeConfig()

  const schema = computed(() => {
    const snsUrls = Object.values(cfg.value.sns).filter(url => url !== '')
    const s: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': cfg.value.business.type,
      name: cfg.value.name,
      description: cfg.value.description,
      url: siteUrl,
      telephone: cfg.value.tel,
      email: cfg.value.email,
      address: {
        '@type': 'PostalAddress',
        postalCode: cfg.value.address.zip,
        addressRegion: cfg.value.address.prefecture,
        addressLocality: cfg.value.address.city,
        streetAddress: cfg.value.address.street
          + (cfg.value.address.building ? ` ${cfg.value.address.building}` : ''),
        addressCountry: 'JP',
      },
      openingHours: cfg.value.business.openingHours,
      ...(cfg.value.business.cuisine && { servesCuisine: cfg.value.business.cuisine }),
      ...(cfg.value.business.priceRange && { priceRange: cfg.value.business.priceRange }),
      ...(cfg.value.seo.ogImage && { image: `${siteUrl}${cfg.value.seo.ogImage}` }),
      ...(snsUrls.length > 0 && { sameAs: snsUrls }),
    }
    return JSON.stringify(s)
  })

  useHead({
    script: [{ type: 'application/ld+json', innerHTML: schema, key: 'ld-json-local' }],
  })
}

/** LocalBusiness 構造化データ（corp テンプレート専用） */
export function useCorpJsonLd() {
  const cfg = useCorpConfig()
  const { public: { siteUrl } } = useRuntimeConfig()

  const schema = computed(() => {
    const snsUrls = Object.values(cfg.value.sns).filter(url => url !== '')
    const s: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': cfg.value.business.type,
      name: cfg.value.name,
      description: cfg.value.description,
      url: siteUrl,
      telephone: cfg.value.tel,
      email: cfg.value.email,
      address: {
        '@type': 'PostalAddress',
        postalCode: cfg.value.address.zip,
        addressRegion: cfg.value.address.prefecture,
        addressLocality: cfg.value.address.city,
        streetAddress: cfg.value.address.street
          + (cfg.value.address.building ? ` ${cfg.value.address.building}` : ''),
        addressCountry: 'JP',
      },
      openingHours: cfg.value.business.openingHours,
      ...(cfg.value.serviceArea && { areaServed: cfg.value.serviceArea }),
      ...(cfg.value.license && { hasCredential: cfg.value.license }),
      ...(cfg.value.seo.ogImage && { image: `${siteUrl}${cfg.value.seo.ogImage}` }),
      ...(snsUrls.length > 0 && { sameAs: snsUrls }),
    }
    return JSON.stringify(s)
  })

  useHead({
    script: [{ type: 'application/ld+json', innerHTML: schema, key: 'ld-json-local' }],
  })
}

/** お知らせ詳細ページ用 BlogPosting 構造化データ */
export function useArticleJsonLd(article: {
  title: string
  body: string
  date: string
  id: string
}) {
  const cfg = useShopConfig()
  const { public: { siteUrl } } = useRuntimeConfig()

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
      name: cfg.value.name,
      url: siteUrl,
    },
  }

  useHead({
    script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema), key: 'ld-json-article' }],
  })
}
