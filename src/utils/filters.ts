import { getHolidays } from "../holidays";
import type { Holiday, HolidayList, Holidays } from "../types";

/**
 * Filters the full holiday set for a given year using a predicate.
 *
 * @remarks
 * This function evaluates the complete {@link Holidays} object returned by
 * {@link getHolidays} and constructs a {@link HolidayList} containing only
 * entries that satisfy the provided predicate.
 *
 * The resulting object preserves the original holiday keys but reduces each
 * entry to its date value.
 *
 * @param year - The year for which to retrieve and filter holidays.
 * @param predicate - Function applied to each holiday entry to determine inclusion.
 * @returns A {@link HolidayList} containing only matching holidays.
 */
export function filterHolidays(
  year: number,
  predicate: (holiday: Holidays[Holiday]) => boolean,
): HolidayList {
  const result: HolidayList = {};

  for (const [name, holiday] of Object.entries(getHolidays(year))) {
    if (predicate(holiday)) {
      result[name] = {
        date: holiday.date,
      };
    }
  }

  return result;
}
