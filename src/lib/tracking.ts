/* ============================================
   Google Ads + Custom Event Tracking
   Conversion-Label kommt aus VITE_GOOGLE_ADS_CONVERSION_LABEL.
   Fallback ist Platzhalter — vor Live-Schaltung in Vercel setzen.
   ============================================ */

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

const CONVERSION_LABEL =
  (import.meta.env.VITE_GOOGLE_ADS_CONVERSION_LABEL as string | undefined) ||
  'AW-XXXXXXXXX/XXXXXXXXXXX'

/** Track a Google Ads conversion event */
export function trackConversion(conversionId: string = CONVERSION_LABEL) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
    })
  }
}

/** Track a custom event (e.g., funnel click, form submit) */
export function trackEvent(eventName: string, params: Record<string, string | number> = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }
}

/** Capture all utm_* + gclid from current URL */
export function captureUtmParams(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  const params = new URLSearchParams(window.location.search)
  const out: Record<string, string> = {}
  for (const [key, value] of params.entries()) {
    if (key.startsWith('utm_') || key === 'gclid') {
      out[key] = value
    }
  }
  return out
}

/** Build the funnel URL with UTM parameters */
export function getFunnelUrl(source: string = 'website', medium: string = 'organic', campaign: string = '') {
  const baseUrl = import.meta.env.VITE_APP_URL || 'https://app.medi-lane.de'
  const params = new URLSearchParams({
    utm_source: source,
    utm_medium: medium,
    ...(campaign && { utm_campaign: campaign }),
  })
  return `${baseUrl}/funnel?${params.toString()}`
}
