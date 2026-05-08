import { siteConfig } from '~/config/site'
import { demoRegistry } from '~/config/demoRegistry'
import type { SiteConfig } from '~/config/site'

const demoConfigs: Record<string, SiteConfig> = Object.fromEntries(
  demoRegistry.map(d => [d.slug, d.config])
)

export function useShopConfig() {
  const route = useRoute()
  return computed<SiteConfig>(() => {
    const segments = route.path.split('/').filter(Boolean)
    if (segments.length >= 2) {
      const key = `${segments[0]}/${segments[1]}`
      if (key in demoConfigs) return demoConfigs[key]!
    }
    return siteConfig
  })
}
