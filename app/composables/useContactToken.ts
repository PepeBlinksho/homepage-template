export function useContactToken() {
  const token = useState('contact-token', () => '')

  onMounted(async () => {
    try {
      const result = await $fetch<{ token: string }>('/api/contact-token')
      token.value = result.token
    } catch {
      token.value = ''
    }
  })

  return { token: readonly(token) }
}
