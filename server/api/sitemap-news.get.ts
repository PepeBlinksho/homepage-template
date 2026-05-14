export default defineEventHandler(async (event) => {
  const { microcmsApiKey, public: pub } = useRuntimeConfig(event)
  const domain = pub.microcmsServiceDomain as string

  if (!microcmsApiKey || !domain) return []

  try {
    const result = await $fetch<{ contents: Array<{ id: string, publishedAt: string }> }>(
      `https://${domain}.microcms.io/api/v1/news`,
      {
        headers: { 'X-MICROCMS-API-KEY': microcmsApiKey as string },
        query: { limit: 100, fields: 'id,publishedAt', orders: '-publishedAt' },
      },
    )
    return result.contents.map(item => ({
      loc: `/news/${item.id}`,
      lastmod: item.publishedAt.slice(0, 10),
      priority: 0.6,
    }))
  } catch {
    return []
  }
})
