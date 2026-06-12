import type { HolidayList } from "../types";
import { filterHolidays } from "../utils/filters";

/**
 * Returns all bank holidays for the specified year.
 *
 * @remarks
 * Only holidays marked as bank holidays are included in the returned list.
 *
 * @param year - The year for which to retrieve bank holidays.
 * @returns A {@link HolidayList} of bank holidays occurring in the specified year.
 */
export function getBankHolidays(year: number): HolidayList {
  return filterHolidays(year, (holiday) => holiday.bankHoliday);
}
