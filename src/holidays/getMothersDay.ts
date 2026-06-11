import { addWeeks } from "date-fns";
import { getFirstOccurence } from "../utils/getters";

export function getMothersDay(year: number) {
  return addWeeks(getFirstOccurence(new Date(year, 4), 0), 1);
}
