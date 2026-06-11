import { addDays } from "date-fns";
import { getEaster } from "./getEaster";

export function getGoodFriday(year: number) {
  return addDays(getEaster(year), -2);
}
