/**
 * 各ページで呼ぶだけで canonical / ogUrl / Twitter Card を設定するcomposable
 * useSeoMeta の後に呼ぶことで ogUrl を上書きできる
 */
export function useCanonical() {
  const route = useRoute()
  const { public: { siteUrl } } = useRuntimeConfig()
  const url = computed(() => `${siteUrl}${route.path}`)

  useHead({
    link: [{ rel: 'canonical', href: url }],
  })

  useSeoMeta({
    ogUrl: url,
  })
}
