import { addWeeks } from "date-fns";
import { getFirstOccurrence } from "../utils/getters";

/**
 * Calculates the date of Father's Day for the specified year.
 *
 * @remarks
 * In the United States and many other countries, Father's Day is observed on
 * the third Sunday of June.
 *
 * @param year - The year for which to calculate Father's Day.
 * @returns A {@link Date} representing the third Sunday in June.
 */
export function getFathersDay(year: number) {
  return addWeeks(getFirstOccurrence(new Date(year, 5), 0), 2);
}
