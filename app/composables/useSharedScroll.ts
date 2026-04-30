/** window の scroll イベントリスナーをアプリ全体で1本に集約するコンポーザブル */

const _scrollY = ref(0)
let _initialized = false

function _ensureListener() {
  if (_initialized) return
  _initialized = true
  window.addEventListener('scroll', () => { _scrollY.value = window.scrollY }, { passive: true })
}

export function useSharedScroll() {
  onMounted(_ensureListener)
  return { scrollY: readonly(_scrollY) }
}
