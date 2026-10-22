/** String helpers. */

/** Capitalize the first character of a string, leaving the rest untouched. */
export function capitalize(input: string): string {
  if (input.length === 0) return input;
  return input[0].toUpperCase() + input.slice(1);
}

/** Reverse a string by code point, keeping surrogate pairs intact. */
export function reverse(input: string): string {
  return [...input].reverse().join("");
}

/** Truncate `input` to at most `max` characters, appending `…` when cut. */
export function truncate(input: string, max: number): string {
  if (!(max >= 0)) throw new RangeError("max must be >= 0");
  if (input.length <= max) return input;
  // Nothing fits, not even the ellipsis.
  if (max === 0) return "";
  return input.slice(0, max - 1) + "…";
}

/** Convert a string to a URL-friendly slug. */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
