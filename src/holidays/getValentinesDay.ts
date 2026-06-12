/**
 * Returns the date of Valentine's Day for the specified year.
 *
 * @remarks
 * Valentine's Day is observed annually on February 14.
 *
 * @param year - The year for which to obtain Valentine's Day.
 * @returns A {@link Date} representing February 14 of the specified year.
 */
export function getValentinesDay(year: number) {
  return new Date(year, 1, 14);
}
