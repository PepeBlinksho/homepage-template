import type { CorpNewsItem } from '~/config/corp'

interface MicroCmsRawItem {
  id: string
  publishedAt: string
  category: string
  title: string
  body: string
}

interface MicroCmsListResponse {
  contents: MicroCmsRawItem[]
  totalCount: number
}

function toNewsItem(raw: MicroCmsRawItem): CorpNewsItem {
  return {
    id: raw.id,
    date: raw.publishedAt.slice(0, 10),
    category: raw.category ?? '',
    title: raw.title ?? '',
    body: raw.body ?? '',
  }
}

/** ニュース一覧をmicroCMSから取得。未設定の場合はconfigのnewsにフォールバック */
export function useMicroCmsNews(fallback: CorpNewsItem[]) {
  const { microcmsApiKey, public: pub } = useRuntimeConfig()
  const domain = pub.microcmsServiceDomain as string
  const route = useRoute()

  const { data } = useAsyncData(`microcms-news-${route.path}`, async () => {
    if (!microcmsApiKey || !domain) return null
    return $fetch<MicroCmsListResponse>(
      `https://${domain}.microcms.io/api/v1/news`,
      {
        headers: { 'X-MICROCMS-API-KEY': microcmsApiKey as string },
        query: { limit: 100, orders: '-publishedAt' },
      }
    )
  })

  const news = computed<CorpNewsItem[]>(() =>
    data.value ? data.value.contents.map(toNewsItem) : fallback
  )

  return { news }
}

/** ニュース詳細をmicroCMSから取得。未設定の場合はconfigのnewsから検索 */
export function useMicroCmsArticle(id: string, fallback: CorpNewsItem[]) {
  const { microcmsApiKey, public: pub } = useRuntimeConfig()
  const domain = pub.microcmsServiceDomain as string
  const route = useRoute()

  const { data } = useAsyncData(`microcms-article-${route.path}-${id}`, async () => {
    if (!microcmsApiKey || !domain) return null
    return $fetch<MicroCmsRawItem>(
      `https://${domain}.microcms.io/api/v1/news/${id}`,
      { headers: { 'X-MICROCMS-API-KEY': microcmsApiKey as string } }
    ).catch(() => null)
  })

  const article = computed<CorpNewsItem | undefined>(() =>
    data.value ? toNewsItem(data.value) : fallback.find(n => n.id === id)
  )

  return { article }
}
