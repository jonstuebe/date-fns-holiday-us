import { addWeeks } from "date-fns";
import { getFirstOccurence } from "../utils/getters";

export function getPresidentsDay(year: number) {
  return addWeeks(getFirstOccurence(new Date(year, 1), 1), 2);
}
