import {
  addDays,
  getDay as getDayOfWeek,
  lastDayOfMonth,
  setDate as setDayOfMonth,
} from "date-fns";

/**
 * Returns the first occurrence of a given weekday within the month of the provided date.
 *
 * @remarks
 * This works by normalizing the date to the first day of its month, then finding the
 * next occurrence of the specified weekday.
 *
 * @param date - Any date within the target month.
 * @param dayOfWeekIndex - Weekday index (0 = Sunday, 6 = Saturday).
 * @returns A {@link Date} representing the first occurrence of the weekday in that month.
 */
export function getFirstOccurrence(date: Date, dayOfWeekIndex: number) {
  return getNextOccurrence(setDayOfMonth(date, 1), dayOfWeekIndex);
}

/**
 * Returns the next occurrence of a given weekday relative to a date.
 *
 * @remarks
 * If the provided date already matches the target weekday, it is returned unchanged.
 * Otherwise, the function advances forward to the next matching weekday.
 *
 * @param date - Starting date.
 * @param dayOfWeekIndex - Weekday index (0 = Sunday, 6 = Saturday).
 * @returns A {@link Date} representing the next occurrence of the weekday.
 */
export function getNextOccurrence(date: Date, dayOfWeekIndex: number) {
  if (getDayOfWeek(date) === dayOfWeekIndex) {
    return date;
  }

  if (getDayOfWeek(date) > dayOfWeekIndex) {
    date = addDays(date, 7 - getDayOfWeek(date) + dayOfWeekIndex);
  } else {
    date = addDays(date, dayOfWeekIndex - getDayOfWeek(date));
  }
  return date;
}

/**
 * Returns the previous occurrence of a given weekday relative to a date.
 *
 * @remarks
 * If the provided date already matches the target weekday, it is returned unchanged.
 * Otherwise, the function moves backward to the previous matching weekday.
 *
 * @param date - Starting date.
 * @param dayOfWeekIndex - Weekday index (0 = Sunday, 6 = Saturday).
 * @returns A {@link Date} representing the previous occurrence of the weekday.
 */
export function getPrevOccurrence(date: Date, dayOfWeekIndex: number) {
  if (getDayOfWeek(date) === dayOfWeekIndex) {
    return date;
  }

  if (getDayOfWeek(date) > dayOfWeekIndex) {
    date = addDays(date, -1 * (getDayOfWeek(date) - dayOfWeekIndex));
  } else {
    date = addDays(date, -1 * (getDayOfWeek(date) - 0 + (7 - dayOfWeekIndex)));
  }
  return date;
}

/**
 * Returns the last occurrence of a given weekday within the month of the provided date.
 *
 * @remarks
 * This is computed by starting at the last day of the month and walking backwards
 * to the requested weekday.
 *
 * @param date - Any date within the target month.
 * @param dayOfWeekIndex - Weekday index (0 = Sunday, 6 = Saturday).
 * @returns A {@link Date} representing the last occurrence of the weekday in the month.
 */
export function getLastOfMonth(date: Date, dayOfWeekIndex: number) {
  return getPrevOccurrence(lastDayOfMonth(date), dayOfWeekIndex);
}
