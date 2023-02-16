import { describe, expect, test } from "vitest";

import { getPathnameWithoutLocale } from "./url";

// generate a test for getPathnameWithoutLocale:
describe("getPathnameWithoutLocale", () => {
  test("input does not have a locale", () => {
    expect(getPathnameWithoutLocale("https://albertus.dev")).toBe("/");
    expect(getPathnameWithoutLocale("https://albertus.dev/")).toBe("/");
    expect(getPathnameWithoutLocale("https://albertus.dev/about")).toBe(
      "/about"
    );
  });

  test("input has a locale", () => {
    expect(getPathnameWithoutLocale("https://albertus.dev/id")).toBe("/");
    expect(getPathnameWithoutLocale("https://albertus.dev/id/about")).toBe(
      "/about"
    );
  });
});
