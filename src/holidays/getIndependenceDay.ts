/**
 * Returns the date of Independence Day for the specified year.
 *
 * @remarks
 * Independence Day in the United States is observed annually on July 4.
 *
 * @param year - The year for which to obtain Independence Day.
 * @returns A {@link Date} representing July 4 of the specified year.
 */
export function getIndependenceDay(year: number) {
  return new Date(year, 6, 4);
}
