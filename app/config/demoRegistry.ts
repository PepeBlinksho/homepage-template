import { shopCafeConfig } from './demos/shop-cafe'
import { shopRestaurantConfig } from './demos/shop-restaurant'
import { beautyHairConfig } from './demos/beauty-hair'
import { kokoConfig } from './demos/koko'
import { tsugiConfig } from './demos/tsugi'
import { canalBreadConfig } from './demos/canal-bread'
import { madoiConfig } from './demos/madoi'
import { bebConfig } from './demos/beb'
import { machiyabunkoConfig } from './demos/machiyabunko'
import { cercleConfig } from './demos/cercle'
import { lagoBiancoConfig } from './demos/lago-bianco'
import type { SiteConfig } from './site'

export const DEMO_SUB_ROUTES = ['', '/menu', '/news', '/contact', '/privacy', '/news/**'] as const

export const demoRegistry: Array<{ slug: string; config: SiteConfig }> = [
  { slug: 'shop/cafe', config: shopCafeConfig },
  { slug: 'shop/restaurant', config: shopRestaurantConfig },
  { slug: 'beauty/hair', config: beautyHairConfig },
  { slug: 'demo/koko', config: kokoConfig },
  { slug: 'demo/tsugi', config: tsugiConfig },
  { slug: 'demo/canal-bread', config: canalBreadConfig },
  { slug: 'demo/madoi', config: madoiConfig },
  { slug: 'demo/beb', config: bebConfig },
  { slug: 'demo/machiyabunko', config: machiyabunkoConfig },
  { slug: 'demo/cercle', config: cercleConfig },
  { slug: 'demo/lago-bianco', config: lagoBiancoConfig },
]
