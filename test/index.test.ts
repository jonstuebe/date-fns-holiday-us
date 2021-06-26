import { format } from "date-fns";
import {
  getChristmas,
  getEaster,
  getHalloween,
  getValentinesDay,
  getMothersDay,
  getColumbusDay,
  getIndependenceDay,
  getPresidentsDay,
  getLaborDay,
  getVeteransDay,
  getThanksgiving,
  getNewYearsEve,
  getMartinLutherKingJrDay,
  getNewYearsDay,
  getFathersDay,
  getMemorialDay,
  getGoodFriday,
  getBankHolidays,
  getJuneteenth,
  isHoliday,
} from "../src";

let dateFormat = "MM-dd-y";

describe("isHoliday", () => {
  it("returns true on a holiday", () => {
    expect(isHoliday(new Date(2020, 0, 1))).toEqual(true);
  });
  it("returns false on a non holiday", () => {
    expect(isHoliday(new Date(2020, 0, 15))).toEqual(false);
  });
});

describe("getBankHolidays", () => {
  it("returns all bank holidays", () => {
    const bankHolidays = getBankHolidays(2020);
    expect(
      Object.keys(bankHolidays).reduce((acc, bankHoliday) => {
        return {
          ...acc,
          [bankHoliday]: {
            date: format(bankHolidays[bankHoliday].date, dateFormat),
          },
        };
      }, {})
    ).toEqual({
      christmas: { date: "12-25-2020" },
      columbusDay: { date: "10-12-2020" },
      independenceDay: { date: "07-04-2020" },
      presidentsDay: { date: "02-17-2020" },
      laborDay: { date: "09-07-2020" },
      veteransDay: { date: "11-11-2020" },
      thanksgiving: { date: "11-26-2020" },
      martinLutherKingJrDay: { date: "01-20-2020" },
      newYearsDay: { date: "01-01-2020" },
      memorialDay: { date: "05-25-2020" },
    });
  });
});

describe("getJuneteenth", () => {
  it("returns correct date", () => {
    expect(format(getJuneteenth(2021), dateFormat)).toEqual("06-19-2021");
    expect(format(getJuneteenth(2022), dateFormat)).toEqual("06-19-2022");
    expect(format(getJuneteenth(2023), dateFormat)).toEqual("06-19-2023");
    expect(format(getJuneteenth(2024), dateFormat)).toEqual("06-19-2024");
  });
});

describe("getChristmas", () => {
  it("returns correct date", () => {
    expect(format(getChristmas(2020), dateFormat)).toEqual("12-25-2020");
    expect(format(getChristmas(2021), dateFormat)).toEqual("12-25-2021");
    expect(format(getChristmas(2022), dateFormat)).toEqual("12-25-2022");
    expect(format(getChristmas(2023), dateFormat)).toEqual("12-25-2023");
  });
});

describe("getMothersDay", () => {
  it("returns correct date", () => {
    expect(format(getMothersDay(2020), dateFormat)).toEqual("05-10-2020");
    expect(format(getMothersDay(2021), dateFormat)).toEqual("05-09-2021");
    expect(format(getMothersDay(2022), dateFormat)).toEqual("05-08-2022");
    expect(format(getMothersDay(2023), dateFormat)).toEqual("05-14-2023");
  });
});

describe("getValentinesDay", () => {
  it("returns correct date", () => {
    expect(format(getValentinesDay(2020), dateFormat)).toEqual("02-14-2020");
    expect(format(getValentinesDay(2021), dateFormat)).toEqual("02-14-2021");
    expect(format(getValentinesDay(2022), dateFormat)).toEqual("02-14-2022");
    expect(format(getValentinesDay(2023), dateFormat)).toEqual("02-14-2023");
  });
});

describe("getHalloween", () => {
  it("returns correct date", () => {
    expect(format(getHalloween(2020), dateFormat)).toEqual("10-31-2020");
    expect(format(getHalloween(2021), dateFormat)).toEqual("10-31-2021");
    expect(format(getHalloween(2022), dateFormat)).toEqual("10-31-2022");
    expect(format(getHalloween(2023), dateFormat)).toEqual("10-31-2023");
  });
});

describe("getEaster", () => {
  it("returns correct date", () => {
    expect(format(getEaster(2020), dateFormat)).toEqual("04-12-2020");
    expect(format(getEaster(2021), dateFormat)).toEqual("04-04-2021");
    expect(format(getEaster(2022), dateFormat)).toEqual("04-17-2022");
    expect(format(getEaster(2023), dateFormat)).toEqual("04-09-2023");
  });
});

describe("getColumbusDay", () => {
  it("returns correct date", () => {
    expect(format(getColumbusDay(2020), dateFormat)).toEqual("10-12-2020");
    expect(format(getColumbusDay(2021), dateFormat)).toEqual("10-11-2021");
    expect(format(getColumbusDay(2022), dateFormat)).toEqual("10-10-2022");
    expect(format(getColumbusDay(2023), dateFormat)).toEqual("10-09-2023");
  });
});

describe("getIndependenceDay", () => {
  it("returns correct date", () => {
    expect(format(getIndependenceDay(2020), dateFormat)).toEqual("07-04-2020");
    expect(format(getIndependenceDay(2021), dateFormat)).toEqual("07-04-2021");
    expect(format(getIndependenceDay(2022), dateFormat)).toEqual("07-04-2022");
    expect(format(getIndependenceDay(2023), dateFormat)).toEqual("07-04-2023");
  });
});

describe("getPresidentsDay", () => {
  it("returns correct date", () => {
    expect(format(getPresidentsDay(2020), dateFormat)).toEqual("02-17-2020");
    expect(format(getPresidentsDay(2021), dateFormat)).toEqual("02-15-2021");
    expect(format(getPresidentsDay(2022), dateFormat)).toEqual("02-21-2022");
    expect(format(getPresidentsDay(2023), dateFormat)).toEqual("02-20-2023");
  });
});

describe("getLaborDay", () => {
  it("returns correct date", () => {
    expect(format(getLaborDay(2020), dateFormat)).toEqual("09-07-2020");
    expect(format(getLaborDay(2021), dateFormat)).toEqual("09-06-2021");
    expect(format(getLaborDay(2022), dateFormat)).toEqual("09-05-2022");
    expect(format(getLaborDay(2023), dateFormat)).toEqual("09-04-2023");
  });
});

describe("getVeteransDay", () => {
  it("returns correct date", () => {
    expect(format(getVeteransDay(2020), dateFormat)).toEqual("11-11-2020");
    expect(format(getVeteransDay(2021), dateFormat)).toEqual("11-11-2021");
    expect(format(getVeteransDay(2022), dateFormat)).toEqual("11-11-2022");
    expect(format(getVeteransDay(2023), dateFormat)).toEqual("11-11-2023");
  });
});

describe("getThanksgiving", () => {
  it("returns correct date", () => {
    expect(format(getThanksgiving(2020), dateFormat)).toEqual("11-26-2020");
    expect(format(getThanksgiving(2021), dateFormat)).toEqual("11-25-2021");
    expect(format(getThanksgiving(2022), dateFormat)).toEqual("11-24-2022");
    expect(format(getThanksgiving(2023), dateFormat)).toEqual("11-23-2023");
  });
});

describe("getNewYearsEve", () => {
  it("returns correct date", () => {
    expect(format(getNewYearsEve(2020), dateFormat)).toEqual("12-31-2020");
    expect(format(getNewYearsEve(2021), dateFormat)).toEqual("12-31-2021");
    expect(format(getNewYearsEve(2022), dateFormat)).toEqual("12-31-2022");
    expect(format(getNewYearsEve(2023), dateFormat)).toEqual("12-31-2023");
  });
});

describe("getMartinLutherKingJrDay", () => {
  it("returns correct date", () => {
    expect(format(getMartinLutherKingJrDay(2020), dateFormat)).toEqual(
      "01-20-2020"
    );
    expect(format(getMartinLutherKingJrDay(2021), dateFormat)).toEqual(
      "01-18-2021"
    );
    expect(format(getMartinLutherKingJrDay(2022), dateFormat)).toEqual(
      "01-17-2022"
    );
    expect(format(getMartinLutherKingJrDay(2023), dateFormat)).toEqual(
      "01-16-2023"
    );
  });
});

describe("getNewYearsDay", () => {
  it("returns correct date", () => {
    expect(format(getNewYearsDay(2020), dateFormat)).toEqual("01-01-2020");
    expect(format(getNewYearsDay(2021), dateFormat)).toEqual("01-01-2021");
    expect(format(getNewYearsDay(2022), dateFormat)).toEqual("01-01-2022");
    expect(format(getNewYearsDay(2023), dateFormat)).toEqual("01-01-2023");
  });
});

describe("getFathersDay", () => {
  it("returns correct date", () => {
    expect(format(getFathersDay(2020), dateFormat)).toEqual("06-21-2020");
    expect(format(getFathersDay(2021), dateFormat)).toEqual("06-20-2021");
    expect(format(getFathersDay(2022), dateFormat)).toEqual("06-19-2022");
    expect(format(getFathersDay(2023), dateFormat)).toEqual("06-18-2023");
  });
});

describe("getMemorialDay", () => {
  it("returns correct date", () => {
    expect(format(getMemorialDay(2020), dateFormat)).toEqual("05-25-2020");
    expect(format(getMemorialDay(2021), dateFormat)).toEqual("05-31-2021");
    expect(format(getMemorialDay(2022), dateFormat)).toEqual("05-30-2022");
    expect(format(getMemorialDay(2023), dateFormat)).toEqual("05-29-2023");
  });
});

describe("getGoodFriday", () => {
  it("returns correct date", () => {
    expect(format(getGoodFriday(2020), dateFormat)).toEqual("04-10-2020");
    expect(format(getGoodFriday(2021), dateFormat)).toEqual("04-02-2021");
    expect(format(getGoodFriday(2022), dateFormat)).toEqual("04-15-2022");
    expect(format(getGoodFriday(2023), dateFormat)).toEqual("04-07-2023");
  });
});
