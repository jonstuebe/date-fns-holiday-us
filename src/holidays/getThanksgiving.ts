import { addWeeks } from "date-fns";
import { getFirstOccurence } from "../utils/getters";

export function getThanksgiving(year: number) {
  return addWeeks(getFirstOccurence(new Date(year, 10), 4), 3);
}
