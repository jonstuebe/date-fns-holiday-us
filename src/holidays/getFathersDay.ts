import { addWeeks } from "date-fns";
import { getFirstOccurence } from "../utils/getters";

export function getFathersDay(year: number) {
  return addWeeks(getFirstOccurence(new Date(year, 5), 0), 2);
}
