import { addWeeks } from "date-fns";
import { getFirstOccurrence } from "../utils/getters";

/**
 * Calculates the date of Columbus Day for the specified year.
 *
 * @remarks
 * In the United States, Columbus Day is observed on the second Monday
 * of October.
 *
 * @param year - The year for which to calculate Columbus Day.
 * @returns A {@link Date} representing the second Monday in October.
 */
export function getColumbusDay(year: number) {
  return addWeeks(getFirstOccurrence(new Date(year, 9), 1), 1);
}
