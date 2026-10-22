import { describe, it, expect } from "vitest";
import { capitalize, reverse, truncate, slugify } from "../src/strings.js";

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
  it("keeps surrogate pairs intact", () => {
    expect(reverse("hi😀")).toBe("😀ih");
  });
});

describe("truncate", () => {
  it("returns the input when short enough", () => {
    expect(truncate("hi", 5)).toBe("hi");
  });
  it("cuts and appends an ellipsis", () => {
    expect(truncate("hello world", 5)).toBe("hell…");
  });
  it("never exceeds max, including the ellipsis", () => {
    expect(truncate("hello world", 1)).toBe("…");
    expect(truncate("hello world", 5).length).toBe(5);
  });
  it("returns an empty string when max is 0", () => {
    expect(truncate("hello", 0)).toBe("");
  });
  it("throws on NaN", () => {
    expect(() => truncate("hello", NaN)).toThrow(RangeError);
  });
  it("throws on a negative max", () => {
    expect(() => truncate("hello", -1)).toThrow(RangeError);
  });
  it("throws on an infinite max", () => {
    expect(() => truncate("hello", Infinity)).toThrow(RangeError);
  });
});

describe("slugify", () => {
  it("lowercases and replaces punctuation with a hyphen", () => {
    expect(slugify("Hello, World!")).toBe("hello-world");
  });
  it("collapses repeated non-alphanumeric chars and trims edge hyphens", () => {
    expect(slugify("  Foo__Bar  ")).toBe("foo-bar");
  });
  it("returns empty string for empty input", () => {
    expect(slugify("")).toBe("");
  });
});
