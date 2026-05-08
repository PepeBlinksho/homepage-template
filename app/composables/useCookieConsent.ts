export function useCookieConsent() {
  const consent = useCookie<'granted' | 'denied' | null>('cookie_consent', {
    default: () => null,
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  })

  const hasDecided = computed(() => consent.value !== null)
  const isGranted = computed(() => consent.value === 'granted')

  function grant() {
    consent.value = 'granted'
    if (import.meta.client && 'gtag' in window) {
      (window as Window & { gtag: (...args: unknown[]) => void })
        .gtag('consent', 'update', { analytics_storage: 'granted' })
    }
  }

  function deny() {
    consent.value = 'denied'
    if (import.meta.client && 'gtag' in window) {
      (window as Window & { gtag: (...args: unknown[]) => void })
        .gtag('consent', 'update', { analytics_storage: 'denied' })
    }
  }

  return { hasDecided, isGranted, grant, deny }
}
