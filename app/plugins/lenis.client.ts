import Lenis from 'lenis'

declare module '#app' {
  interface NuxtApp {
    $lenis: Lenis
  }
}

export default defineNuxtPlugin(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  })

  let rafId: number

  function raf(time: number) {
    lenis.raf(time)
    rafId = requestAnimationFrame(raf)
  }

  rafId = requestAnimationFrame(raf)

  // ページ非表示時（タブ切り替え・ブラウザバック含む）にクリーンアップ
  window.addEventListener('pagehide', () => {
    cancelAnimationFrame(rafId)
    lenis.destroy()
  }, { once: true })

  return {
    provide: { lenis },
  }
})
