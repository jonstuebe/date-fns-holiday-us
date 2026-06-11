import { getLastOfMonth } from "../utils/getters";

export function getMemorialDay(year: number) {
  return getLastOfMonth(new Date(year, 4), 1);
}
