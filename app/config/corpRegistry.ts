import { allPaintConfig } from './corps/all-paint'
import { katunoConfig } from './corps/katuno'
import type { CorpConfig } from './corp'

export const CORP_SUB_ROUTES = ['', '/contact', '/privacy'] as const

export const corpRegistry: Array<{ slug: string, config: CorpConfig }> = [
  { slug: 'corp/all-paint', config: allPaintConfig },
  { slug: 'corp/katuno', config: katunoConfig },
]
