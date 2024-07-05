import { describe, expect, it } from "vitest"
import LuhnAlgorithm from "@/src"

describe("LuhnAlgorithm", () => {
  it("isValid returns true for a valid Luhn number", () => {
    expect(LuhnAlgorithm.isValid("79927398713")).toBeTruthy()
    expect(LuhnAlgorithm.isValid("4532015112830366")).toBeTruthy()
    expect(LuhnAlgorithm.isValid("8505527955555557")).toBeTruthy()
  })

  it("isValid returns false for an invalid Luhn number", () => {
    expect(LuhnAlgorithm.isValid("45320151128303")).toBeFalsy()
    expect(LuhnAlgorithm.isValid("4532015112830367")).toBeFalsy()
    expect(LuhnAlgorithm.isValid("79927398711")).toBeFalsy()
    expect(LuhnAlgorithm.isValid("8505527955555560")).toBeFalsy()
  })

  it("getDigit returns the check digit for a given Luhn number", () => {
    expect(LuhnAlgorithm.getDigit("7992739871")).toBe("3")
  })

  it("withoutDigit returns the Luhn number without the check digit", () => {
    expect(LuhnAlgorithm.withoutDigit("79927398713")).toBe("7992739871")
  })

  it("validateAndSuggest returns an object with isValid and suggestedDigit", () => {
    const result = LuhnAlgorithm.validateAndSuggest("79927398714")
    expect(result.isValid).toBe(false)
    expect(result.suggestedDigit).toBe("3")
  })

  it("generate returns a new Luhn number with a check digit", () => {
    expect(LuhnAlgorithm.generate("850552795555555")).toBe("8505527955555557")
  })
})
