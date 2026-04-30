/** スクロールリビールのコンポーザブル */
export function useReveal(threshold = 0.12) {
  const el = ref<HTMLElement | null>(null)
  const revealed = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!el.value) return
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          revealed.value = true
          observer?.disconnect()
          observer = null
        }
      },
      { threshold },
    )
    observer.observe(el.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
    observer = null
  })

  return { el, revealed }
}
