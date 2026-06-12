import type { HolidayList } from "../types";
import { filterHolidays } from "../utils/filters";

/**
 * Returns all federal holidays for the specified year.
 *
 * @remarks
 * Only holidays marked as federal holidays are included in the returned list.
 *
 * @param year - The year for which to retrieve federal holidays.
 * @returns A {@link HolidayList} of federal holidays occurring in the specified year.
 */
export function getFederalHolidays(year: number): HolidayList {
  return filterHolidays(year, (holiday) => holiday.federal);
}
