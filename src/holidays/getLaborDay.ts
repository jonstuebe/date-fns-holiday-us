import { getFirstOccurence } from "../utils/getters";

export function getLaborDay(year: number) {
  return getFirstOccurence(new Date(year, 8), 1);
}
