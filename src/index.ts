export default class LuhnAlgorithm {
  public static isValid(number: string): boolean {
    return this.luhn(number) == 0
  }

  public static generate(number: string): string {
    const checksum = this.luhn(number + "0")
    const checkDigit = checksum == 0 ? 0 : 10 - checksum
    return number + checkDigit.toString()
  }

  public static getDigit(number: string): string {
    const checksum = this.luhn(number + "0")
    const checkDigit = checksum == 0 ? 0 : 10 - checksum
    return checkDigit.toString()
  }

  public static withoutDigit(number: string): string {
    return number.slice(0, -1)
  }

  public static validateAndSuggest(number: string): { isValid: boolean; suggestedDigit: string } {
    const isValid = this.isValid(number)
    const suggestedDigit = isValid ? "" : this.getDigit(this.withoutDigit(number))
    return { isValid, suggestedDigit }
  }

  private static luhn(code: string): number {
    return (
      code
        .split("")
        .reverse()
        .map((digit, idx) => {
          let num = parseInt(digit)
          if (idx % 2 === 1) {
            num *= 2
            if (num > 9) {
              num -= 9
            }
          }
          return num
        })
        .reduce((acc, curr) => acc + curr, 0) % 10
    )
  }
}
