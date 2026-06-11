import type { HolidayList } from "../types";
import { filterHolidays } from "../utils/filters";

export function getBankHolidays(year: number): HolidayList {
  return filterHolidays(year, (holiday) => holiday.bankHoliday);
}
