/** Array tail helpers. */

/** Return the last element of `items`, or `undefined` when the array is empty. */
export function last<T>(items: readonly T[]): T | undefined {
  return items.length === 0 ? undefined : items[items.length - 1];
}
