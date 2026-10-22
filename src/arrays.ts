/** Array helpers. */

/** Split `items` into chunks of at most `size` elements. */
export function chunk<T>(items: T[], size: number): T[][] {
  if (!Number.isFinite(size) || !Number.isInteger(size) || size <= 0) {
    throw new RangeError("size must be a positive integer");
  }
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    out.push(items.slice(i, i + size));
  }
  return out;
}

/** Return a new array with duplicate values removed, preserving order. */
export function unique<T>(items: T[]): T[] {
  return [...new Set(items)];
}

/** Sum a list of numbers. */
export function sum(items: number[]): number {
  return items.reduce((acc, n) => acc + n, 0);
}
