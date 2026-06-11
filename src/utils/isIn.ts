import { getYear, isSameDay } from "date-fns";
import { getBankHolidays } from "../holidays/getBankHolidays";
import { getFederalHolidays } from "../holidays/getFederalHolidays";
import { getHolidays } from "../holidays/getHolidays";
import type { HolidayList } from "../types";

export function isInHolidayList(
  date: Date,
  getHolidayList: (year: number) => HolidayList,
): boolean {
  const holidays = getHolidayList(getYear(date));

  return Object.values(holidays).some((holiday) =>
    isSameDay(date, holiday.date),
  );
}

export function isHoliday(date: Date): boolean {
  return isInHolidayList(date, getHolidays);
}

export function isFederalHoliday(date: Date): boolean {
  return isInHolidayList(date, getFederalHolidays);
}

export function isBankHoliday(date: Date): boolean {
  return isInHolidayList(date, getBankHolidays);
}
