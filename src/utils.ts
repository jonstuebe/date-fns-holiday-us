import {
  getDay as getDayOfWeek,
  setDate as setDayOfMonth,
  addDays,
  lastDayOfMonth,
} from "date-fns";

export function getFirstOccurence(date: Date, dayOfWeekIndex: number) {
  return getNextOccurence(setDayOfMonth(date, 1), dayOfWeekIndex);
}

export function getNextOccurence(date: Date, dayOfWeekIndex: number) {
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

export function getPrevOccurence(date: Date, dayOfWeekIndex: number) {
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

export function getLastOfMonth(date: Date, dayOfWeekIndex: number) {
  return getPrevOccurence(lastDayOfMonth(date), dayOfWeekIndex);
}
