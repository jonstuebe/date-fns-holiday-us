/**
 * Returns the date of Halloween for the specified year.
 *
 * @remarks
 * Halloween is observed annually on October 31.
 *
 * @param year - The year for which to obtain Halloween.
 * @returns A {@link Date} representing October 31 of the specified year.
 */
export function getHalloween(year: number) {
  return new Date(year, 9, 31);
}
