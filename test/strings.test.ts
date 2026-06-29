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
});

describe("truncate", () => {
  it("returns the input when short enough", () => {
    expect(truncate("hi", 5)).toBe("hi");
  });
  it("cuts and appends an ellipsis", () => {
    expect(truncate("hello world", 5)).toBe("hello…");
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
