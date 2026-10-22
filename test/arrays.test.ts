import { describe, it, expect } from "vitest";
import { chunk, unique, sum } from "../src/arrays.js";

describe("chunk", () => {
  it("splits into even chunks", () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
  });
  it("keeps a short final chunk", () => {
    expect(chunk([1, 2, 3], 2)).toEqual([[1, 2], [3]]);
  });
  it("throws RangeError on NaN size", () => {
    expect(() => chunk([1, 2], NaN)).toThrow(RangeError);
  });
  it("throws RangeError on size <= 0", () => {
    expect(() => chunk([1, 2], 0)).toThrow(RangeError);
    expect(() => chunk([1, 2], -1)).toThrow(RangeError);
  });
});

describe("unique", () => {
  it("removes duplicates preserving order", () => {
    expect(unique([1, 1, 2, 3, 2])).toEqual([1, 2, 3]);
  });
});

describe("sum", () => {
  it("adds numbers", () => {
    expect(sum([1, 2, 3])).toBe(6);
  });
  it("is 0 for an empty list", () => {
    expect(sum([])).toBe(0);
  });
});
