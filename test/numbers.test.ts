import { describe, it, expect } from "vitest";
import { clamp } from "../src/numbers.js";

describe("clamp", () => {
  it("clamps below the range up to min", () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });
  it("clamps above the range down to max", () => {
    expect(clamp(42, 0, 10)).toBe(10);
  });
  it("leaves in-range values untouched", () => {
    expect(clamp(7, 0, 10)).toBe(7);
  });
});
