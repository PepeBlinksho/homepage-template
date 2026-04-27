/**
 * フルページスクロール（Lenis ベース・CSS Snap なし）
 *
 * locked フラグで入力を制御：
 *   - アニメーション中: locked=true
 *   - onComplete 後: 250ms クールダウン（慣性スクロールの余波を吸収）
 *   - フォールバック: LOCK_TIMEOUT ms 後に強制解除
 */

const SECTION_IDS = ['snap-hero', 'snap-about', 'snap-menu', 'snap-news', 'snap-access']
const ANIM_DURATION = 1.2  // lenis.scrollTo の duration (秒)
const LOCK_TIMEOUT  = 1600 // フォールバック強制解除 (ms)
const COOLDOWN      = 250  // onComplete 後のクールダウン (ms)

export function useFullPageScroll() {
  const nuxtApp = useNuxtApp()

  // activeIndex: 0〜length-1 がセクション, length がフッター領域
  let activeIndex = 0
  let locked = false
  let lockTimer: ReturnType<typeof setTimeout> | null = null
  let wheelHandler: (e: WheelEvent) => void
  let scrollHandler: () => void

  function getSection(index: number): HTMLElement | null {
    return document.getElementById(SECTION_IDS[index] ?? '')
  }

  /** ロック解除（immediate=true でクールダウンなし） */
  function unlock(immediate = false) {
    if (lockTimer) { clearTimeout(lockTimer); lockTimer = null }
    if (immediate) {
      locked = false
    }
    else {
      // クールダウン：慣性スクロールの余波や高速クリックを吸収
      lockTimer = setTimeout(() => { locked = false; lockTimer = null }, COOLDOWN)
    }
  }

  /** ロック開始（フォールバックタイマー付き） */
  function lock() {
    locked = true
    if (lockTimer) clearTimeout(lockTimer)
    // onComplete が来なかった場合のフォールバック（クールダウンなし）
    lockTimer = setTimeout(() => unlock(true), LOCK_TIMEOUT)
  }

  function scrollToIndex(index: number) {
    const clamped = Math.max(0, Math.min(SECTION_IDS.length - 1, index))
    const el = getSection(clamped)
    if (!el) return

    activeIndex = clamped
    lock()

    const lenis = nuxtApp.$lenis
    if (lenis) {
      lenis.scrollTo(el, {
        duration: ANIM_DURATION,
        onComplete: () => unlock(false), // クールダウン付きで解除
      })
    }
    else {
      el.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => unlock(false), ANIM_DURATION * 1000)
    }
  }

  function updateActiveIndex() {
    const mid = window.scrollY + window.innerHeight / 2
    const lastEl = getSection(SECTION_IDS.length - 1)

    // フッター領域
    if (lastEl && mid > lastEl.offsetTop + lastEl.offsetHeight * 0.7) {
      activeIndex = SECTION_IDS.length
      return
    }

    let idx = 0
    for (let i = 0; i < SECTION_IDS.length; i++) {
      const el = getSection(i)
      if (el && el.offsetTop <= mid) idx = i
    }
    activeIndex = idx
  }

  onMounted(() => {
    updateActiveIndex()

    wheelHandler = (e: WheelEvent) => {
      if (window.innerWidth < 768) return

      const dir = e.deltaY > 0 ? 1 : -1
      const next = activeIndex + dir

      // フッター方向 → ロックを即時解除して Lenis に委ねる
      if (next >= SECTION_IDS.length && dir > 0) {
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

    scrollHandler = () => {
      if (!locked) updateActiveIndex()
    }

    window.addEventListener('wheel', wheelHandler, { capture: true, passive: false })
    window.addEventListener('scroll', scrollHandler, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('wheel', wheelHandler, { capture: true })
    window.removeEventListener('scroll', scrollHandler)
    unlock(true)
  })
}
