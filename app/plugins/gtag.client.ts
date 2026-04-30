/**
 * Google Analytics (GA4) プラグイン
 * site.ts の gaId に測定IDを設定すると自動で有効化されます
 * 例: gaId: 'G-XXXXXXXXXX'
 */
import { siteConfig } from '~/config/site'

const GA_ID_PATTERN = /^G-[A-Z0-9]{10}$/

export default defineNuxtPlugin((_nuxtApp) => {
  const gaId = siteConfig.gaId
  if (!gaId || !GA_ID_PATTERN.test(gaId)) return

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
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `,
      },
    ],
  })

  // ページ遷移ごとにページビューを送信
  const router = useRouter()
  router.afterEach((to) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as Window & { gtag: (...args: unknown[]) => void }).gtag('event', 'page_view', {
        page_path: to.fullPath,
      })
    }
  })
})
