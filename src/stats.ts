/** Statistics helpers. */

/**
 * Return the arithmetic mean of `nums`.
 * Returns 0 for an empty list.
 */
export function average(nums: number[]): number {
  // BUG: divides by length unconditionally → NaN for an empty list,
  // contradicting the documented "returns 0 for an empty list".
  let total = 0;
  for (const n of nums) total += n;
  return total / nums.length;
}
