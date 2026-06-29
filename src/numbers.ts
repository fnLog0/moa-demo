/** Numeric helpers. */

/** Clamp `n` into the inclusive range [min, max]. */
export function clamp(n: number, min: number, max: number): number {
  if (n < min) return min;
  if (n > max) return max;
  return n;
}
