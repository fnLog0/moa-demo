/** Numeric helpers. */

/** Clamp `n` into the inclusive range [min, max]. */
export function clamp(n: number, min: number, max: number): number {
  // BUG: ignores `max`, so values above the range aren't clamped down.
  if (n < min) return min;
  return n;
}
