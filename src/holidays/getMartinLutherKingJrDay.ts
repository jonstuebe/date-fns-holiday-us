import { addWeeks } from "date-fns";
import { getFirstOccurrence } from "../utils/getters";

/**
 * Returns the date of Martin Luther King Jr. Day for the specified year.
 *
 * @remarks
 * In the United States, Martin Luther King Jr. Day is observed on the third Monday of January.
 *
 * @param year - The year for which to calculate the holiday.
 * @returns A {@link Date} representing Martin Luther King Jr. Day in the specified year.
 */
export function getMartinLutherKingJrDay(year: number) {
  return addWeeks(getFirstOccurrence(new Date(year, 0), 1), 2);
}
