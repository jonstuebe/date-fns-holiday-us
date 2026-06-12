/**
 * Returns the date of Juneteenth for the specified year.
 *
 * @remarks
 * Juneteenth National Independence Day is observed in the United States on June 19.
 * It became a federal holiday in 2021.
 *
 * @param year - The year for which to obtain Juneteenth.
 * @returns A {@link Date} representing June 19 of the specified year.
 */
export function getJuneteenth(year: number) {
  return new Date(year, 5, 19);
}
