/**
 * Calculates the date of Easter Sunday for a given year using the
 * Gregorian computus algorithm.
 *
 * @remarks
 * This implementation is valid for years from 325 AD onward, the year of the
 * First Council of Nicaea, which established the basis for calculating Easter.
 *
 * The returned {@link Date} is created in the local time zone and represents
 * Easter Sunday for the specified year.
 *
 * @param year - The year for which to calculate Easter Sunday.
 * @returns A {@link Date} representing Easter Sunday in the specified year.
 * @throws {RangeError} Thrown if the year is earlier than 325 AD.
 */
export function getEaster(year: number) {
  if (year < 325) {
    throw new RangeError("Cannot calculate Easter dates before 325 AD.");
  }

  /**
   * Computes the remainder of a division operation.
   *
   * @param a - The dividend.
   * @param b - The divisor.
   * @returns The remainder of `a / b`.
   */
  function mod(a: number, b: number) {
    return a % b;
  }

  /**
   * Performs integer division by truncating toward negative infinity.
   *
   * @param a - The dividend.
   * @param b - The divisor.
   * @returns The integer quotient of `a / b`.
   * @throws {Error} Thrown if an unexpected negative quotient is produced.
   */
  function div(a: number, b: number) {
    const q = a / b;
    /* v8 ignore next */
    if (q < 0) {
      throw new Error("Unexpected negative q");
    }
    return Math.floor(q);
  }

  const y = year,
    skipMarchDays = 21,
    a = mod(y, 19),
    b = div(y, 100),
    c = mod(y, 100),
    d = div(b, 4),
    e = mod(b, 4),
    f = div(b + 8, 25),
    g = div(b - f + 1, 3),
    h = mod(19 * a + b - d - g + 15, 30),
    i = div(c, 4),
    k = mod(c, 4),
    l = mod(32 + 2 * e + 2 * i - h - k, 7),
    m = div(a + 11 * h + 22 * l, 451),
    t = h + l - 7 * m + skipMarchDays,
    n = div(t, 31) + 3,
    p = mod(t, 31);

  return new Date(year, n - 1, p + 1);
}
