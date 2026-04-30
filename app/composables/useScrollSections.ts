export const SCROLL_SECTIONS = [
  { id: 'snap-hero', label: 'Hero' },
  { id: 'snap-about', label: 'About' },
  { id: 'snap-gallery', label: 'Gallery' },
  { id: 'snap-menu', label: 'Menu' },
  { id: 'snap-news', label: 'News' },
  { id: 'snap-access', label: 'Access' },
] as const

export type ScrollSection = (typeof SCROLL_SECTIONS)[number]

/** セクション定義とアクティブインデックスを全コンポーネントで共有するコンポーザブル */
export function useScrollSections() {
  const activeIndex = useState('snap:activeIndex', () => 0)
  return { sections: SCROLL_SECTIONS, activeIndex }
}
