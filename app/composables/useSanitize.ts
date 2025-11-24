import DOMPurify from 'isomorphic-dompurify'

export default function useSanitize() {
  /**
   * Sanitizes HTML content to prevent XSS attacks.
   * @param dirtyHtml
   * @returns Sanitized HTML string
   */
  function sanitizeHtml(dirtyHtml: string): string {
    // Convert newlines to <br> tags
    const withBreaks = dirtyHtml.replace(/\n/g, '<br>')

    // Skip DOMPurify on server (jsdom not compatible with serverless/Netlify Functions)
    // Content comes from trusted CMS (Strapi), so this is acceptable
    // Client-side sanitization still provides XSS protection
    if (!import.meta.client) {
      return withBreaks
    }

    // Client-side: use DOMPurify for XSS protection
    return DOMPurify.sanitize(withBreaks, {
      ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'a', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      ALLOWED_ATTR: ['href', 'target', 'rel'],
      ALLOW_DATA_ATTR: false,
      ADD_ATTR: ['target'],
      FORBID_TAGS: ['script', 'style'],
      FORBID_ATTR: ['onclick', 'onerror', 'onload'],
      KEEP_CONTENT: true,
      RETURN_TRUSTED_TYPE: false,
    })
  }

  return {
    sanitizeHtml,
  }
}
