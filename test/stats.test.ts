import { describe, it, expect } from "vitest";
import { average } from "../src/stats.js";

describe("average", () => {
  it("averages a non-empty list", () => {
    expect(average([2, 4, 6])).toBe(4);
  });
});
