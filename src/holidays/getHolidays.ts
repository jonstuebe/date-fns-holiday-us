import type { Holidays } from "../types";
import { getChristmas } from "./getChristmas";
import { getColumbusDay } from "./getColumbusDay";
import { getEaster } from "./getEaster";
import { getFathersDay } from "./getFathersDay";
import { getGoodFriday } from "./getGoodFriday";
import { getHalloween } from "./getHalloween";
import { getIndependenceDay } from "./getIndependenceDay";
import { getJuneteenth } from "./getJuneteenth";
import { getLaborDay } from "./getLaborDay";
import { getMartinLutherKingJrDay } from "./getMartinLutherKingJrDay";
import { getMemorialDay } from "./getMemorialDay";
import { getMothersDay } from "./getMothersDay";
import { getNewYearsDay } from "./getNewYearsDay";
import { getNewYearsEve } from "./getNewYearsEve";
import { getPresidentsDay } from "./getPresidentsDay";
import { getThanksgiving } from "./getThanksgiving";
import { getValentinesDay } from "./getValentinesDay";
import { getVeteransDay } from "./getVeteransDay";

export function getHolidays(year: number): Holidays {
  return {
    newYearsDay: {
      date: getNewYearsDay(year),
      bankHoliday: true,
      federal: true,
    },
    martinLutherKingJrDay: {
      date: getMartinLutherKingJrDay(year),
      bankHoliday: true,
      federal: true,
    },
    valentinesDay: {
      date: getValentinesDay(year),
      bankHoliday: false,
      federal: false,
    },
    juneteenth: {
      date: getJuneteenth(year),
      bankHoliday: !(year < 2022),
      federal: true,
    },
    easter: {
      date: getEaster(year),
      bankHoliday: false,
      federal: false,
    },
    presidentsDay: {
      date: getPresidentsDay(year),
      bankHoliday: true,
      federal: false,
    },
    memorialDay: {
      date: getMemorialDay(year),
      bankHoliday: true,
      federal: true,
    },
    independenceDay: {
      date: getIndependenceDay(year),
      bankHoliday: true,
      federal: true,
    },
    laborDay: {
      date: getLaborDay(year),
      bankHoliday: true,
      federal: true,
    },
    goodFriday: {
      date: getGoodFriday(year),
      bankHoliday: false,
      federal: false,
    },
    mothersDay: {
      date: getMothersDay(year),
      bankHoliday: false,
      federal: false,
    },
    columbusDay: {
      date: getColumbusDay(year),
      bankHoliday: true,
      federal: true,
    },
    halloween: {
      date: getHalloween(year),
      bankHoliday: false,
      federal: false,
    },
    fathersDay: {
      date: getFathersDay(year),
      bankHoliday: false,
      federal: false,
    },
    veteransDay: {
      date: getVeteransDay(year),
      bankHoliday: true,
      federal: true,
    },
    thanksgiving: {
      date: getThanksgiving(year),
      bankHoliday: true,
      federal: true,
    },
    christmas: {
      date: getChristmas(year),
      bankHoliday: true,
      federal: true,
    },
    newYearsEve: {
      date: getNewYearsEve(year),
      bankHoliday: false,
      federal: false,
    },
  };
}
