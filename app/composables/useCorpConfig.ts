import { corpConfig, type CorpConfig } from '~/config/corp'
import { allPaintConfig } from '~/config/corps/all-paint'

const corpConfigs: Record<string, CorpConfig> = {
  'corp/all-paint': allPaintConfig,
}

export function useCorpConfig() {
  const route = useRoute()
  return computed<CorpConfig>(() => {
    const segments = route.path.split('/').filter(Boolean)
    if (segments.length >= 2 && segments[0] === 'corp') {
      const key = `corp/${segments[1]}`
      if (key in corpConfigs) return corpConfigs[key]!
    }
    return corpConfig
  })
}
