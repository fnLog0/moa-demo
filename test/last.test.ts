import { describe, it, expect } from "vitest";
import { last } from "../src/last.js";

describe("last", () => {
  it("returns the final element", () => {
    expect(last([1, 2, 3])).toBe(3);
  });
  it("returns undefined for an empty array", () => {
    expect(last([])).toBeUndefined();
  });
});
