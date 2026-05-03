export function useRoutePrefix() {
  const route = useRoute()
  return computed(() => {
    const segments = route.path.split('/').filter(Boolean)
    if (segments.length >= 2 && (segments[0] === 'shop' || segments[0] === 'beauty')) {
      return `/${segments[0]}/${segments[1]}`
    }
    return ''
  })
}
