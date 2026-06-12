/**
 * Returns the date of Veterans Day for the specified year.
 *
 * @remarks
 * Veterans Day is observed annually on November 11 in the United States.
 *
 * @param year - The year for which to obtain Veterans Day.
 * @returns A {@link Date} representing November 11 of the specified year.
 */
export function getVeteransDay(year: number) {
  return new Date(year, 10, 11);
}
