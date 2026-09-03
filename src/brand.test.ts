import { describe, expect, it } from "vitest";
import { PRODUCT_NAME } from "./brand";
import fr from "./i18n/locales/fr";
import en from "./i18n/locales/en";

/** Every leaf string value in a nested translation object. */
function collectValues(node: unknown): string[] {
  if (typeof node === "string") return [node];
  if (typeof node !== "object" || node === null) return [];
  return Object.values(node as Record<string, unknown>).flatMap(collectValues);
}

describe("brand", () => {
  it("the visible product name is SOMYUREN", () => {
    expect(PRODUCT_NAME).toBe("SOMYUREN");
  });

  it("no active UI string still names the product ST-IA (fr)", () => {
    const offenders = collectValues(fr).filter((value) => /ST-IA/.test(value));
    expect(offenders).toEqual([]);
  });

  it("no active UI string still names the product ST-IA (en)", () => {
    const offenders = collectValues(en).filter((value) => /ST-IA/.test(value));
    expect(offenders).toEqual([]);
  });
});
