import { addWeeks } from "date-fns";
import { getFirstOccurrence } from "../utils/getters";

/**
 * Returns the date of Presidents Day for the specified year.
 *
 * @remarks
 * In the United States, Presidents Day is observed on the third Monday of February.
 *
 * @param year - The year for which to calculate Presidents Day.
 * @returns A {@link Date} representing Presidents Day in the specified year.
 */
export function getPresidentsDay(year: number) {
  return addWeeks(getFirstOccurrence(new Date(year, 1), 1), 2);
}
