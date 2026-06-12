import { lastDayOfMonth } from "date-fns";

/**
 * Returns the date of New Year's Eve for the specified year.
 *
 * @remarks
 * New Year's Eve is the last day of the year, observed on December 31.
 *
 * @param year - The year for which to obtain New Year's Eve.
 * @returns A {@link Date} representing December 31 of the specified year.
 */
export function getNewYearsEve(year: number) {
  return lastDayOfMonth(new Date(year, 11));
}
