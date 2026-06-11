import type { HolidayList } from "../types";
import { filterHolidays } from "../utils/filters";

export function getFederalHolidays(year: number): HolidayList {
  return filterHolidays(year, (holiday) => holiday.federal);
}
