/**
 * Returns the date of Christmas Day for the specified year.
 *
 * @remarks
 * Christmas Day is observed annually on December 25.
 *
 * The returned {@link Date} is created in the local time zone.
 *
 * @param year - The year for which to obtain Christmas Day.
 * @returns A {@link Date} representing December 25 of the specified year.
 */
export function getChristmas(year: number) {
  return new Date(year, 11, 25);
}
