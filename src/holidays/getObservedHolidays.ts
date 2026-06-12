import { addDays, isSaturday, isSunday } from "date-fns";
import type { HolidayList } from "../types";
import { getHolidays } from "./getHolidays";

/**
 * Returns the observed federal holidays for the specified year.
 *
 * @remarks
 * This function adjusts federal holidays that fall on weekends to their
 * observed dates:
 * - Saturday holidays are observed on the preceding Friday
 * - Sunday holidays are observed on the following Monday
 *
 * Only holidays marked as `federal: true` are included in the result.
 *
 * @param year - The year for which to calculate observed holidays.
 * @returns A {@link HolidayList} containing observed federal holiday dates.
 */
export function getObservedHolidays(year: number): HolidayList {
  const result: HolidayList = {};

  for (const [name, holiday] of Object.entries(getHolidays(year))) {
    if (!holiday.federal) {
      continue;
    }

    if (isSaturday(holiday.date)) {
      result[name] = {
        date: addDays(holiday.date, -1),
      };
    } else if (isSunday(holiday.date)) {
      result[name] = {
        date: addDays(holiday.date, 1),
      };
    }
  }

  return result;
}
