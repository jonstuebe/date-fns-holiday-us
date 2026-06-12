/**
 * Returns the date of New Year's Day for the specified year.
 *
 * @remarks
 * New Year's Day is observed annually on January 1.
 *
 * @param year - The year for which to obtain New Year's Day.
 * @returns A {@link Date} representing January 1 of the specified year.
 */
export function getNewYearsDay(year: number) {
  return new Date(year, 0, 1);
}
