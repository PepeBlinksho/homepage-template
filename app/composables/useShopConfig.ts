import { siteConfig, type SiteConfig } from '~/config/site'
import { shopCafeConfig } from '~/config/demos/shop-cafe'
import { shopRestaurantConfig } from '~/config/demos/shop-restaurant'
import { beautyHairConfig } from '~/config/demos/beauty-hair'

const demoConfigs: Record<string, SiteConfig> = {
  'shop/cafe': shopCafeConfig,
  'shop/restaurant': shopRestaurantConfig,
  'beauty/hair': beautyHairConfig,
}

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
