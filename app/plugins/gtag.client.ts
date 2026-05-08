/**
 * Google Analytics (GA4) プラグイン — Consent Mode v2 対応
 * - デフォルトは analytics_storage: denied（Cookie同意前はデータ収集しない）
 * - ユーザーが同意済みの場合のみ granted で初期化
 * - 優先順位: 環境変数 NUXT_PUBLIC_GA_ID > config/site.ts の gaId
 */
import { siteConfig } from '~/config/site'

const GA_ID_PATTERN = /^G-[A-Z0-9]{10}$/

export default defineNuxtPlugin((_nuxtApp) => {
  const { public: runtimePublic } = useRuntimeConfig()
  const gaId = (runtimePublic.gaId as string) || siteConfig.gaId
  if (!gaId || !GA_ID_PATTERN.test(gaId)) return

  const { isGranted } = useCookieConsent()
  const consentState = isGranted.value ? 'granted' : 'denied'

  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`,
        async: true,
      },
      {
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', { analytics_storage: '${consentState}' });
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `,
      },
    ],
  })

  const router = useRouter()
  router.afterEach((to) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as Window & { gtag: (...args: unknown[]) => void }).gtag('event', 'page_view', {
        page_path: to.fullPath,
      })
    }
  })
})
