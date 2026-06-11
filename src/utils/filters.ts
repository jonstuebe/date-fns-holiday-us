import { getHolidays } from "../holidays";
import type { Holiday, HolidayList, Holidays } from "../types";

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
