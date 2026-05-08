import { generateContactToken } from '../utils/contactToken'

export default defineEventHandler((event) => {
  const { contactSecret } = useRuntimeConfig(event)
  if (!contactSecret) return { token: '' }
  return { token: generateContactToken(contactSecret as string) }
})
