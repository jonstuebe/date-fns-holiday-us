import { addDays, addWeeks, lastDayOfMonth, getYear, isEqual } from "date-fns";

import { getFirstOccurence, getLastOfMonth } from "./utils";

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
  | "goodFriday";

export function getHalloween(year: number) {
  return new Date(year, 9, 31);
}

export function getValentinesDay(year: number) {
  return new Date(year, 1, 14);
}

export function getMothersDay(year: number) {
  return addWeeks(getFirstOccurence(new Date(year, 4), 0), 1);
}

export function getEaster(year: number) {
  if (year < 325) {
    throw new RangeError("Cannot calculate Easter dates before 325 AD.");
  }

  function mod(a: number, b: number) {
    return a % b;
  }

  function div(a: number, b: number) {
    const q = a / b;
    if (q < 0) {
      throw new Error("Unexpected negative q");
    }
    return Math.floor(q);
  }

  const y = year,
    skipMarchDays = 21,
    a = mod(y, 19),
    b = div(y, 100),
    c = mod(y, 100),
    d = div(b, 4),
    e = mod(b, 4),
    f = div(b + 8, 25),
    g = div(b - f + 1, 3),
    h = mod(19 * a + b - d - g + 15, 30),
    i = div(c, 4),
    k = mod(c, 4),
    l = mod(32 + 2 * e + 2 * i - h - k, 7),
    m = div(a + 11 * h + 22 * l, 451),
    t = h + l - 7 * m + skipMarchDays,
    n = div(t, 31) + 3,
    p = mod(t, 31);

  return new Date(year, n - 1, p + 1);
}

export function getColumbusDay(year: number) {
  return addWeeks(getFirstOccurence(new Date(year, 9), 1), 1);
}

export function getIndependenceDay(year: number) {
  return new Date(year, 6, 4);
}

export function getPresidentsDay(year: number) {
  return addWeeks(getFirstOccurence(new Date(year, 1), 1), 2);
}

export function getChristmas(year: number) {
  return new Date(year, 11, 25);
}

export function getLaborDay(year: number) {
  return getFirstOccurence(new Date(year, 8), 1);
}

export function getVeteransDay(year: number) {
  return new Date(year, 10, 11);
}

export function getThanksgiving(year: number) {
  return addWeeks(getFirstOccurence(new Date(year, 10), 4), 3);
}

export function getNewYearsEve(year: number) {
  return lastDayOfMonth(new Date(year, 11));
}

export function getMartinLutherKingJrDay(year: number) {
  return addWeeks(getFirstOccurence(new Date(year, 0), 1), 2);
}

export function getNewYearsDay(year: number) {
  return new Date(year, 0, 1);
}

export function getFathersDay(year: number) {
  return addWeeks(getFirstOccurence(new Date(year, 5), 0), 2);
}

export function getMemorialDay(year: number) {
  return getLastOfMonth(new Date(year, 4), 1);
}

export function getGoodFriday(year: number) {
  return addDays(getEaster(year), -2);
}

export type Holidays = {
  [K in Holiday]: {
    date: Date;
    bankHoliday: boolean;
  };
};

export function getHolidays(year: number): Holidays {
  return {
    newYearsDay: {
      date: getNewYearsDay(year),
      bankHoliday: true,
    },
    martinLutherKingJrDay: {
      date: getMartinLutherKingJrDay(year),
      bankHoliday: true,
    },
    valentinesDay: {
      date: getValentinesDay(year),
      bankHoliday: false,
    },
    easter: {
      date: getEaster(year),
      bankHoliday: false,
    },
    presidentsDay: {
      date: getPresidentsDay(year),
      bankHoliday: true,
    },
    memorialDay: {
      date: getMemorialDay(year),
      bankHoliday: true,
    },
    independenceDay: {
      date: getIndependenceDay(year),
      bankHoliday: true,
    },
    laborDay: {
      date: getLaborDay(year),
      bankHoliday: true,
    },
    goodFriday: {
      date: getGoodFriday(year),
      bankHoliday: false,
    },
    mothersDay: {
      date: getMothersDay(year),
      bankHoliday: false,
    },
    columbusDay: {
      date: getColumbusDay(year),
      bankHoliday: true,
    },
    halloween: {
      date: getHalloween(year),
      bankHoliday: false,
    },
    fathersDay: {
      date: getFathersDay(year),
      bankHoliday: false,
    },
    veteransDay: {
      date: getVeteransDay(year),
      bankHoliday: true,
    },
    thanksgiving: {
      date: getThanksgiving(year),
      bankHoliday: true,
    },
    christmas: {
      date: getChristmas(year),
      bankHoliday: true,
    },
    newYearsEve: {
      date: getNewYearsEve(year),
      bankHoliday: false,
    },
  };
}

export function getBankHolidays(
  year: number
): {
  [key: string]: {
    date: Date;
  };
} {
  const holidays = getHolidays(year);

  return Object.keys(holidays).reduce((acc, holidayName) => {
    const holiday = holidays[holidayName as Holiday];
    if (holiday.bankHoliday) {
      return {
        ...acc,
        [holidayName]: {
          date: holiday.date,
        },
      };
    }

    return acc;
  }, {});
}

function isInHolidayList(
  date: Date,
  getHolidayList: (year: number) => { [key: string]: { date: Date } }
): boolean {
  const holidays = getHolidayList(getYear(date));
  return (
    Object.keys(holidays).filter(holidayName => {
      return isEqual(date, holidays[holidayName].date);
    }).length > 0
  );
}

export function isHoliday(date: Date): boolean {
  return isInHolidayList(date, getHolidays);
}

export function isBankHoliday(date: Date): boolean {
  return isInHolidayList(date, getBankHolidays);
}
