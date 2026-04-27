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

  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return {
    provide: { lenis },
  }
})
