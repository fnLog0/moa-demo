/** Numeric helpers. */

/** Clamp `n` into the inclusive range [min, max]. */
export function clamp(n: number, min: number, max: number): number {
  if (min > max) throw new RangeError('min must be <= max');
  if (n < min) return min;
  if (n > max) return max;
  return n;
}
