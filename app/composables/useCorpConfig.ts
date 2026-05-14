import { corpConfig, type CorpConfig } from '~/config/corp'
import { corpRegistry } from '~/config/corpRegistry'

const corpConfigs: Record<string, CorpConfig> = Object.fromEntries(
  corpRegistry.map(c => [c.slug, c.config]),
)

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
