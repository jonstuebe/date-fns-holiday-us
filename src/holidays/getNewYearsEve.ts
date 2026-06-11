import { lastDayOfMonth } from "date-fns";

export function getNewYearsEve(year: number) {
  return lastDayOfMonth(new Date(year, 11));
}
