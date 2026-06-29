import { describe, it, expect } from "vitest";
import { capitalize, reverse, truncate } from "../src/strings.js";

describe("capitalize", () => {
  it("uppercases the first character", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  it("leaves an empty string untouched", () => {
    expect(capitalize("")).toBe("");
  });
});

describe("reverse", () => {
  it("reverses characters", () => {
    expect(reverse("abc")).toBe("cba");
  });
});

describe("truncate", () => {
  it("returns the input when short enough", () => {
    expect(truncate("hi", 5)).toBe("hi");
  });
  it("cuts and appends an ellipsis", () => {
    expect(truncate("hello world", 5)).toBe("hello…");
  });
});
