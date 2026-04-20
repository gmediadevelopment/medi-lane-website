/* ============================================
   Google Ads Conversion Tracking Helper
   ============================================
   Replace 'AW-XXXXXXXXX/XXXXXXXXXXX' with
   your actual conversion label from Google Ads.
   ============================================ */

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

/**
 * Track a Google Ads conversion event
 */
export function trackConversion(conversionId: string = 'AW-XXXXXXXXX/XXXXXXXXXXX') {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
    })
  }
}

/**
 * Track a custom event (e.g., funnel click, form submit)
 */
export function trackEvent(eventName: string, params: Record<string, string> = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }
}

/**
 * Build the funnel URL with UTM parameters
 */
export function getFunnelUrl(source: string = 'website', medium: string = 'organic', campaign: string = '') {
  const baseUrl = import.meta.env.VITE_APP_URL || 'https://app.medi-lane.de'
  const params = new URLSearchParams({
    utm_source: source,
    utm_medium: medium,
    ...(campaign && { utm_campaign: campaign }),
  })
  return `${baseUrl}/funnel?${params.toString()}`
}
