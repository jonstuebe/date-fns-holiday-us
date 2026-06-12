import { addWeeks } from "date-fns";
import { getFirstOccurrence } from "../utils/getters";

/**
 * Returns the date of Mother's Day for the specified year.
 *
 * @remarks
 * In the United States, Mother's Day is observed on the second Sunday of May.
 *
 * @param year - The year for which to calculate Mother's Day.
 * @returns A {@link Date} representing Mother's Day in the specified year.
 */
export function getMothersDay(year: number) {
  return addWeeks(getFirstOccurrence(new Date(year, 4), 0), 1);
}
