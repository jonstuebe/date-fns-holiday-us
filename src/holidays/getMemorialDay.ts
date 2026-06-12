import { getLastOfMonth } from "../utils/getters";

/**
 * Returns the date of Memorial Day for the specified year.
 *
 * @remarks
 * In the United States, Memorial Day is observed on the last Monday of May.
 *
 * @param year - The year for which to calculate Memorial Day.
 * @returns A {@link Date} representing Memorial Day in the specified year.
 */
export function getMemorialDay(year: number) {
  return getLastOfMonth(new Date(year, 4), 1);
}
