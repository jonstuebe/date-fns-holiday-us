import { addWeeks } from "date-fns";
import { getFirstOccurence } from "../utils/getters";

export function getMartinLutherKingJrDay(year: number) {
  return addWeeks(getFirstOccurence(new Date(year, 0), 1), 2);
}
