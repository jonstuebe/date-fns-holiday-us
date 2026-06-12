import { addDays } from "date-fns";
import { getEaster } from "./getEaster";

/**
 * Calculates the date of Good Friday for the specified year.
 *
 * @remarks
 * Good Friday is observed two days before Easter Sunday and commemorates the
 * crucifixion of Jesus Christ in Christian tradition.
 *
 * @param year - The year for which to calculate Good Friday.
 * @returns A {@link Date} representing Good Friday in the specified year.
 */
export function getGoodFriday(year: number) {
  return addDays(getEaster(year), -2);
}
