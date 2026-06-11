import { addDays, isSaturday, isSunday } from "date-fns";
import type { HolidayList } from "../types";
import { getHolidays } from "./getHolidays";

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
