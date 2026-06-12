import { getFirstOccurrence } from "../utils/getters";

/**
 * Returns the date of Labor Day for the specified year.
 *
 * @remarks
 * In the United States, Labor Day is observed on the first Monday of September.
 *
 * @param year - The year for which to calculate Labor Day.
 * @returns A {@link Date} representing Labor Day in the specified year.
 */
export function getLaborDay(year: number) {
  return getFirstOccurrence(new Date(year, 8), 1);
}
