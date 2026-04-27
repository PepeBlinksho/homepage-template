/**
 * スクロールリビールのコンポーザブル
 * 要素が viewport に入ったタイミングで revealed フラグを true にする
 */
export function useReveal(threshold = 0.12) {
  const el = ref<HTMLElement | null>(null)
  const revealed = ref(false)

  onMounted(() => {
    if (!el.value) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          revealed.value = true
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(el.value)

    onUnmounted(() => observer.disconnect())
  })

  return { el, revealed }
}
