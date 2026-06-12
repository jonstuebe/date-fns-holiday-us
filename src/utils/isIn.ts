import { getYear, isSameDay } from "date-fns";
import { getBankHolidays } from "../holidays/getBankHolidays";
import { getFederalHolidays } from "../holidays/getFederalHolidays";
import { getHolidays } from "../holidays/getHolidays";
import type { HolidayList } from "../types";

/**
 * Determines whether a given {@link Date} exists within a {@link HolidayList} for its year.
 *
 * @remarks
 * The function resolves the appropriate holiday list for the year of the provided
 * {@link Date}, then checks whether any holiday in that list matches the given date
 * using calendar-day comparison (time components are ignored).
 *
 * @param date - The {@link Date} to evaluate.
 * @param getHolidayList - Function that returns a {@link HolidayList} for a given year.
 * @returns `true` if the {@link Date} matches any entry in the holiday list; otherwise `false`.
 */
export function isInHolidayList(
  date: Date,
  getHolidayList: (year: number) => HolidayList,
): boolean {
  const holidays = getHolidayList(getYear(date));

  return Object.values(holidays).some((holiday) =>
    isSameDay(date, holiday.date),
  );
}

/**
 * Checks whether a {@link Date} is any recognized holiday.
 *
 * @param date - The {@link Date} to evaluate.
 * @returns `true` if the {@link Date} is a holiday.
 */
export function isHoliday(date: Date): boolean {
  return isInHolidayList(date, getHolidays);
}

/**
 * Checks whether a {@link Date} is a federal holiday.
 *
 * @param date - The {@link Date} to evaluate.
 * @returns `true` if the {@link Date} is a federal holiday.
 */
export function isFederalHoliday(date: Date): boolean {
  return isInHolidayList(date, getFederalHolidays);
}

/**
 * Checks whether a {@link Date} is a bank holiday.
 *
 * @param date - The {@link Date} to evaluate.
 * @returns `true` if the {@link Date} is a bank holiday.
 */
export function isBankHoliday(date: Date): boolean {
  return isInHolidayList(date, getBankHolidays);
}
