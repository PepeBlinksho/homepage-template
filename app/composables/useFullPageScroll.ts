/**
 * フルページスクロール（Lenis ベース・CSS Snap なし）
 *
 * セクション定義・アクティブインデックスは useScrollSections で一元管理。
 * locked フラグで入力を制御：
 *   - アニメーション中: locked=true
 *   - onComplete 後: 250ms クールダウン（慣性スクロールの余波を吸収）
 *   - フォールバック: LOCK_TIMEOUT ms 後に強制解除
 */

const ANIM_DURATION = 1.2  // lenis.scrollTo の duration (秒)
const LOCK_TIMEOUT  = 1600 // フォールバック強制解除 (ms)
const COOLDOWN      = 250  // onComplete 後のクールダウン (ms)

export function useFullPageScroll() {
  const nuxtApp = useNuxtApp()
  const { sections, activeIndex } = useScrollSections()
  const sectionIds = sections.map(s => s.id)

  let locked = false
  let lockTimer: ReturnType<typeof setTimeout> | null = null
  let wheelHandler: (e: WheelEvent) => void
  let keyHandler: (e: KeyboardEvent) => void
  let scrollHandler: () => void

  function getSection(index: number): HTMLElement | null {
    return document.getElementById(sectionIds[index] ?? '')
  }

  /** ロック解除（immediate=true でクールダウンなし） */
  function unlock(immediate = false) {
    if (lockTimer) { clearTimeout(lockTimer); lockTimer = null }
    if (immediate) {
      locked = false
    }
    else {
      lockTimer = setTimeout(() => { locked = false; lockTimer = null }, COOLDOWN)
    }
  }

  /** ロック開始（フォールバックタイマー付き） */
  function lock() {
    locked = true
    if (lockTimer) clearTimeout(lockTimer)
    lockTimer = setTimeout(() => unlock(true), LOCK_TIMEOUT)
  }

  function scrollToIndex(index: number) {
    const clamped = Math.max(0, Math.min(sectionIds.length - 1, index))
    const el = getSection(clamped)
    if (!el) return

    activeIndex.value = clamped
    lock()

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const lenis = nuxtApp.$lenis

    if (reducedMotion) {
      el.scrollIntoView()
      unlock(true)
    }
    else if (lenis) {
      lenis.scrollTo(el, {
        duration: ANIM_DURATION,
        onComplete: () => unlock(false),
      })
    }
    else {
      el.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => unlock(false), ANIM_DURATION * 1000)
    }
  }

  function updateActiveIndex() {
    const mid = window.scrollY + window.innerHeight / 2
    const lastEl = getSection(sectionIds.length - 1)

    // フッター領域
    if (lastEl && mid > lastEl.offsetTop + lastEl.offsetHeight * 0.7) {
      activeIndex.value = sectionIds.length
      return
    }

    let idx = 0
    for (let i = 0; i < sectionIds.length; i++) {
      const el = getSection(i)
      if (el && el.offsetTop <= mid) idx = i
    }
    activeIndex.value = idx
  }

  onMounted(() => {
    updateActiveIndex()

    wheelHandler = (e: WheelEvent) => {
      if (window.innerWidth < 768) return

      const dir = e.deltaY > 0 ? 1 : -1
      const next = activeIndex.value + dir

      // フッター方向 → ロックを即時解除して Lenis に委ねる
      if (next >= sectionIds.length && dir > 0) {
        unlock(true)
        return
      }

      // 先頭より前
      if (next < 0) return

      // セクション間移動
      e.preventDefault()
      e.stopImmediatePropagation()

      if (locked) return
      scrollToIndex(next)
    }

    keyHandler = (e: KeyboardEvent) => {
      if (window.innerWidth < 768) return
      // フォーム要素内ではキー操作を横取りしない
      const tag = (e.target as HTMLElement).tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return

      let dir = 0
      if (e.key === 'ArrowDown' || e.key === 'PageDown') dir = 1
      else if (e.key === 'ArrowUp' || e.key === 'PageUp') dir = -1
      else if (e.key === 'End') { scrollToIndex(sectionIds.length - 1); e.preventDefault(); return }
      else if (e.key === 'Home') { scrollToIndex(0); e.preventDefault(); return }
      else return

      const next = activeIndex.value + dir
      if (next >= sectionIds.length && dir > 0) { unlock(true); return }
      if (next < 0) return

      e.preventDefault()
      if (locked) return
      scrollToIndex(next)
    }

    scrollHandler = () => {
      if (!locked) updateActiveIndex()
    }

    window.addEventListener('wheel', wheelHandler, { capture: true, passive: false })
    window.addEventListener('keydown', keyHandler, { capture: true })
    window.addEventListener('scroll', scrollHandler, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('wheel', wheelHandler, { capture: true })
    window.removeEventListener('keydown', keyHandler, { capture: true })
    window.removeEventListener('scroll', scrollHandler)
    unlock(true)
  })
}
