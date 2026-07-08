/**
 * Meta Pixel event helpers.
 * All calls are guarded so they silently no-op in SSR or if the
 * Pixel script has not yet loaded (e.g. ad-blocked).
 */

export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>
): void {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", eventName, params ?? {});
  }
}
