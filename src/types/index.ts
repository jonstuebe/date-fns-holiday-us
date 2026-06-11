export type Holiday =
  | "christmas"
  | "easter"
  | "halloween"
  | "valentinesDay"
  | "mothersDay"
  | "columbusDay"
  | "independenceDay"
  | "presidentsDay"
  | "laborDay"
  | "veteransDay"
  | "thanksgiving"
  | "newYearsEve"
  | "martinLutherKingJrDay"
  | "newYearsDay"
  | "fathersDay"
  | "memorialDay"
  | "goodFriday"
  | "juneteenth";

export type HolidayList = Record<string, { date: Date }>;

export type Holidays = {
  [K in Holiday]: {
    date: Date;
    bankHoliday: boolean;
    federal: boolean;
  };
};
