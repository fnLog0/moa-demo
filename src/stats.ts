/** Statistics helpers. */

/**
 * Return the arithmetic mean of `nums`.
 * Returns 0 for an empty list.
 */
export function average(nums: number[]): number {
  let total = 0;
  for (const n of nums) total += n;
  return nums.length === 0 ? 0 : total / nums.length;
}
