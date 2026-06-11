import { addWeeks } from "date-fns";
import { getFirstOccurence } from "../utils/getters";

export function getColumbusDay(year: number) {
  return addWeeks(getFirstOccurence(new Date(year, 9), 1), 1);
}
