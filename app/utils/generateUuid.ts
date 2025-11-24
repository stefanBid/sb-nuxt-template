/**
 * Generate a universally unique identifier (UUID).
 * Uses crypto.randomUUID() when available, falls back to Math.random().
 *
 * @returns A UUID string (RFC 4122 format or pseudo-random fallback)
 */
export default function generateUuid(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }

  // Fallback for environments without crypto.randomUUID()
  // Format: xxxxxxxx-xxxx (8-10 alphanumeric chars per segment)
  const segment1 = Math.random().toString(36).substring(2, 10)
  const segment2 = Math.random().toString(36).substring(2, 10)
  return `${segment1}-${segment2}`
}
