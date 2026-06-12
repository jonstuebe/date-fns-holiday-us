import { addWeeks } from "date-fns";
import { getFirstOccurrence } from "../utils/getters";

/**
 * Returns the date of Thanksgiving for the specified year.
 *
 * @remarks
 * In the United States, Thanksgiving is observed on the fourth Thursday of November.
 *
 * @param year - The year for which to calculate Thanksgiving.
 * @returns A {@link Date} representing Thanksgiving in the specified year.
 */
export function getThanksgiving(year: number) {
  return addWeeks(getFirstOccurrence(new Date(year, 10), 4), 3);
}
