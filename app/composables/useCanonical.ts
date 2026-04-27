/**
 * 各ページで呼ぶだけで canonical / ogUrl / Twitter Card を設定するcomposable
 * useSeoMeta の後に呼ぶことで ogUrl を上書きできる
 */
export function useCanonical() {
  const route = useRoute()
  const siteUrl = useRuntimeConfig().public.siteUrl as string
  const url = computed(() => `${siteUrl}${route.path}`)

  useHead({
    link: [{ rel: 'canonical', href: url }],
  })

  useSeoMeta({
    ogUrl: url,
  })
}
