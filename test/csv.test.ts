import { describe, it, expect } from "vitest";
import { parseCsvLine } from "../src/csv.js";

describe("parseCsvLine", () => {
  it("splits a plain line", () => {
    expect(parseCsvLine("a,b,c")).toEqual(["a", "b", "c"]);
  });
  it("handles a quoted field containing a comma", () => {
    expect(parseCsvLine('a,"b,c",d')).toEqual(["a", "b,c", "d"]);
  });
  it("strips quotes from a quoted field", () => {
    expect(parseCsvLine('"hello"')).toEqual(["hello"]);
  });
  it("returns an empty array for an empty string", () => {
    expect(parseCsvLine("")).toEqual([]);
  });
  it("handles a trailing comma", () => {
    expect(parseCsvLine("a,b,")).toEqual(["a", "b", ""]);
  });
});
