import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto'

const TOKEN_MAX_AGE_MS = 30 * 60 * 1000

export function generateContactToken(secret: string): string {
  const nonce = randomBytes(16).toString('hex')
  const ts = Date.now().toString()
  const payload = `${ts}.${nonce}`
  const sig = createHmac('sha256', secret).update(payload).digest('hex')
  return `${payload}.${sig}`
}

export function validateContactToken(token: string, secret: string): boolean {
  if (!secret) return true
  if (!token) return false
  const parts = token.split('.')
  if (parts.length !== 3) return false
  const ts = parts[0]!
  const nonce = parts[1]!
  const sig = parts[2]!
  const age = Date.now() - parseInt(ts, 10)
  if (isNaN(age) || age < 0 || age > TOKEN_MAX_AGE_MS) return false
  const payload = `${ts}.${nonce}`
  const expectedSig = createHmac('sha256', secret).update(payload).digest('hex')
  try {
    return timingSafeEqual(
      Buffer.from(sig.padEnd(64, '0'), 'hex'),
      Buffer.from(expectedSig, 'hex')
    )
  } catch {
    return false
  }
}
