# date-fns-holidays

This project is fork of:

* https://github.com/jonstuebe/date-fns-holiday-us

The API will be the same as the original project, with the primary focus being bug fixes.

## Table of Contents

* [Install](#install)
* [Type Aliases](#type-aliases)
  * [Holiday](#holiday)
  * [HolidayList](#holidaylist)
  * [Holidays](#holidays)
* [Functions](#functions)
  * [filterHolidays()](#filterholidays)
  * [getBankHolidays()](#getbankholidays)
  * [getChristmas()](#getchristmas)
  * [getColumbusDay()](#getcolumbusday)
  * [getEaster()](#geteaster)
  * [getFathersDay()](#getfathersday)
  * [getFederalHolidays()](#getfederalholidays)
  * [getFirstOccurrence()](#getfirstoccurrence)
  * [getGoodFriday()](#getgoodfriday)
  * [getHalloween()](#gethalloween)
  * [getHolidays()](#getholidays)
  * [getIndependenceDay()](#getindependenceday)
  * [getJuneteenth()](#getjuneteenth)
  * [getLaborDay()](#getlaborday)
  * [getLastOfMonth()](#getlastofmonth)
  * [getMartinLutherKingJrDay()](#getmartinlutherkingjrday)
  * [getMemorialDay()](#getmemorialday)
  * [getMothersDay()](#getmothersday)
  * [getNewYearsDay()](#getnewyearsday)
  * [getNewYearsEve()](#getnewyearseve)
  * [getNextOccurrence()](#getnextoccurrence)
  * [getObservedHolidays()](#getobservedholidays)
  * [getPresidentsDay()](#getpresidentsday)
  * [getPrevOccurrence()](#getprevoccurrence)
  * [getThanksgiving()](#getthanksgiving)
  * [getValentinesDay()](#getvalentinesday)
  * [getVeteransDay()](#getveteransday)
  * [isBankHoliday()](#isbankholiday)
  * [isFederalHoliday()](#isfederalholiday)
  * [isHoliday()](#isholiday)
  * [isInHolidayList()](#isinholidaylist)

## Install

```sh
npm i date-fns-holidays date-fns
```

## Type Aliases

### Holiday

```ts
type Holiday = 
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
```

Defined in: [types/index.ts:7](https://github.com/nktnet1/date-fns-holidays/blob/main/src/types/index.ts#L7)

Union of supported holiday identifiers used throughout the library.

#### Remarks

Each value corresponds to a key in [Holidays](#holidays).

***

### HolidayList

```ts
type HolidayList = Record<string, {
  date: Date;
}>;
```

Defined in: [types/index.ts:34](https://github.com/nktnet1/date-fns-holidays/blob/main/src/types/index.ts#L34)

Mapping of holiday names to their computed date values.

#### Remarks

This structure is used for filtered or derived holiday collections where
only the date is relevant.

***

### Holidays

```ts
type Holidays = { [K in Holiday]: { bankHoliday: boolean; date: Date; federal: boolean } };
```

Defined in: [types/index.ts:45](https://github.com/nktnet1/date-fns-holidays/blob/main/src/types/index.ts#L45)

Complete set of holidays returned by [getHolidays](#getholidays).

#### Remarks

Each entry includes:

* `date`: computed holiday date
* `bankHoliday`: whether the holiday is observed by banks
* `federal`: whether the holiday is a U.S. federal holiday

## Functions

### filterHolidays()

```ts
function filterHolidays(year, predicate): HolidayList;
```

Defined in: [utils/filters.ts:19](https://github.com/nktnet1/date-fns-holidays/blob/main/src/utils/filters.ts#L19)

Filters the full holiday set for a given year using a predicate.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `year` | `number` | The year for which to retrieve and filter holidays. |
| `predicate` | (`holiday`) => `boolean` | Function applied to each holiday entry to determine inclusion. |

#### Returns

[`HolidayList`](#holidaylist)

A [HolidayList](#holidaylist) containing only matching holidays.

#### Remarks

This function evaluates the complete [Holidays](#holidays) object returned by
[getHolidays](#getholidays) and constructs a [HolidayList](#holidaylist) containing only
entries that satisfy the provided predicate.

The resulting object preserves the original holiday keys but reduces each
entry to its date value.

***

### getBankHolidays()

```ts
function getBankHolidays(year): HolidayList;
```

Defined in: [holidays/getBankHolidays.ts:13](https://github.com/nktnet1/date-fns-holidays/blob/main/src/holidays/getBankHolidays.ts#L13)

Returns all bank holidays for the specified year.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `year` | `number` | The year for which to retrieve bank holidays. |

#### Returns

[`HolidayList`](#holidaylist)

A [HolidayList](#holidaylist) of bank holidays occurring in the specified year.

#### Remarks

Only holidays marked as bank holidays are included in the returned list.

***

### getChristmas()

```ts
function getChristmas(year): Date;
```

Defined in: [holidays/getChristmas.ts:12](https://github.com/nktnet1/date-fns-holidays/blob/main/src/holidays/getChristmas.ts#L12)

Returns the date of Christmas Day for the specified year.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `year` | `number` | The year for which to obtain Christmas Day. |

#### Returns

[`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

A [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) representing December 25 of the specified year.

#### Remarks

Christmas Day is observed annually on December 25.

The returned [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) is created in the local time zone.

***

### getColumbusDay()

```ts
function getColumbusDay(year): Date;
```

Defined in: [holidays/getColumbusDay.ts:14](https://github.com/nktnet1/date-fns-holidays/blob/main/src/holidays/getColumbusDay.ts#L14)

Calculates the date of Columbus Day for the specified year.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `year` | `number` | The year for which to calculate Columbus Day. |

#### Returns

[`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

A [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) representing the second Monday in October.

#### Remarks

In the United States, Columbus Day is observed on the second Monday
of October.

***

### getEaster()

```ts
function getEaster(year): Date;
```

Defined in: [holidays/getEaster.ts:16](https://github.com/nktnet1/date-fns-holidays/blob/main/src/holidays/getEaster.ts#L16)

Calculates the date of Easter Sunday for a given year using the
Gregorian computus algorithm.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `year` | `number` | The year for which to calculate Easter Sunday. |

#### Returns

[`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

A [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) representing Easter Sunday in the specified year.

#### Remarks

This implementation is valid for years from 325 AD onward, the year of the
First Council of Nicaea, which established the basis for calculating Easter.

The returned [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) is created in the local time zone and represents
Easter Sunday for the specified year.

#### Throws

Thrown if the year is earlier than 325 AD.

***

### getFathersDay()

```ts
function getFathersDay(year): Date;
```

Defined in: [holidays/getFathersDay.ts:14](https://github.com/nktnet1/date-fns-holidays/blob/main/src/holidays/getFathersDay.ts#L14)

Calculates the date of Father's Day for the specified year.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `year` | `number` | The year for which to calculate Father's Day. |

#### Returns

[`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

A [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) representing the third Sunday in June.

#### Remarks

In the United States and many other countries, Father's Day is observed on
the third Sunday of June.

***

### getFederalHolidays()

```ts
function getFederalHolidays(year): HolidayList;
```

Defined in: [holidays/getFederalHolidays.ts:13](https://github.com/nktnet1/date-fns-holidays/blob/main/src/holidays/getFederalHolidays.ts#L13)

Returns all federal holidays for the specified year.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `year` | `number` | The year for which to retrieve federal holidays. |

#### Returns

[`HolidayList`](#holidaylist)

A [HolidayList](#holidaylist) of federal holidays occurring in the specified year.

#### Remarks

Only holidays marked as federal holidays are included in the returned list.

***

### getFirstOccurrence()

```ts
function getFirstOccurrence(date, dayOfWeekIndex): Date;
```

Defined in: [utils/getters.ts:19](https://github.com/nktnet1/date-fns-holidays/blob/main/src/utils/getters.ts#L19)

Returns the first occurrence of a given weekday within the month of the provided date.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | Any date within the target month. |
| `dayOfWeekIndex` | `number` | Weekday index (0 = Sunday, 6 = Saturday). |

#### Returns

[`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

A [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) representing the first occurrence of the weekday in that month.

#### Remarks

This works by normalizing the date to the first day of its month, then finding the
next occurrence of the specified weekday.

***

### getGoodFriday()

```ts
function getGoodFriday(year): Date;
```

Defined in: [holidays/getGoodFriday.ts:14](https://github.com/nktnet1/date-fns-holidays/blob/main/src/holidays/getGoodFriday.ts#L14)

Calculates the date of Good Friday for the specified year.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `year` | `number` | The year for which to calculate Good Friday. |

#### Returns

[`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

A [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) representing Good Friday in the specified year.

#### Remarks

Good Friday is observed two days before Easter Sunday and commemorates the
crucifixion of Jesus Christ in Christian tradition.

***

### getHalloween()

```ts
function getHalloween(year): Date;
```

Defined in: [holidays/getHalloween.ts:10](https://github.com/nktnet1/date-fns-holidays/blob/main/src/holidays/getHalloween.ts#L10)

Returns the date of Halloween for the specified year.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `year` | `number` | The year for which to obtain Halloween. |

#### Returns

[`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

A [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) representing October 31 of the specified year.

#### Remarks

Halloween is observed annually on October 31.

***

### getHolidays()

```ts
function getHolidays(year): Holidays;
```

Defined in: [holidays/getHolidays.ts:36](https://github.com/nktnet1/date-fns-holidays/blob/main/src/holidays/getHolidays.ts#L36)

Returns the complete set of supported holidays for the specified year.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `year` | `number` | The year for which to generate holiday information. |

#### Returns

[`Holidays`](#holidays)

An object containing all supported holidays and their metadata.

#### Remarks

Each holiday entry contains its calculated date together with metadata
indicating whether it is recognized as a federal holiday and/or a bank
holiday.

Holiday observance classifications may vary by jurisdiction and may change
over time. The values returned by this function reflect the rules implemented
by this library.

***

### getIndependenceDay()

```ts
function getIndependenceDay(year): Date;
```

Defined in: [holidays/getIndependenceDay.ts:10](https://github.com/nktnet1/date-fns-holidays/blob/main/src/holidays/getIndependenceDay.ts#L10)

Returns the date of Independence Day for the specified year.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `year` | `number` | The year for which to obtain Independence Day. |

#### Returns

[`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

A [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) representing July 4 of the specified year.

#### Remarks

Independence Day in the United States is observed annually on July 4.

***

### getJuneteenth()

```ts
function getJuneteenth(year): Date;
```

Defined in: [holidays/getJuneteenth.ts:11](https://github.com/nktnet1/date-fns-holidays/blob/main/src/holidays/getJuneteenth.ts#L11)

Returns the date of Juneteenth for the specified year.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `year` | `number` | The year for which to obtain Juneteenth. |

#### Returns

[`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

A [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) representing June 19 of the specified year.

#### Remarks

Juneteenth National Independence Day is observed in the United States on June 19.
It became a federal holiday in 2021.

***

### getLaborDay()

```ts
function getLaborDay(year): Date;
```

Defined in: [holidays/getLaborDay.ts:12](https://github.com/nktnet1/date-fns-holidays/blob/main/src/holidays/getLaborDay.ts#L12)

Returns the date of Labor Day for the specified year.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `year` | `number` | The year for which to calculate Labor Day. |

#### Returns

[`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

A [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) representing Labor Day in the specified year.

#### Remarks

In the United States, Labor Day is observed on the first Monday of September.

***

### getLastOfMonth()

```ts
function getLastOfMonth(date, dayOfWeekIndex): Date;
```

Defined in: [utils/getters.ts:82](https://github.com/nktnet1/date-fns-holidays/blob/main/src/utils/getters.ts#L82)

Returns the last occurrence of a given weekday within the month of the provided date.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | Any date within the target month. |
| `dayOfWeekIndex` | `number` | Weekday index (0 = Sunday, 6 = Saturday). |

#### Returns

[`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

A [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) representing the last occurrence of the weekday in the month.

#### Remarks

This is computed by starting at the last day of the month and walking backwards
to the requested weekday.

***

### getMartinLutherKingJrDay()

```ts
function getMartinLutherKingJrDay(year): Date;
```

Defined in: [holidays/getMartinLutherKingJrDay.ts:13](https://github.com/nktnet1/date-fns-holidays/blob/main/src/holidays/getMartinLutherKingJrDay.ts#L13)

Returns the date of Martin Luther King Jr. Day for the specified year.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `year` | `number` | The year for which to calculate the holiday. |

#### Returns

[`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

A [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) representing Martin Luther King Jr. Day in the specified year.

#### Remarks

In the United States, Martin Luther King Jr. Day is observed on the third Monday of January.

***

### getMemorialDay()

```ts
function getMemorialDay(year): Date;
```

Defined in: [holidays/getMemorialDay.ts:12](https://github.com/nktnet1/date-fns-holidays/blob/main/src/holidays/getMemorialDay.ts#L12)

Returns the date of Memorial Day for the specified year.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `year` | `number` | The year for which to calculate Memorial Day. |

#### Returns

[`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

A [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) representing Memorial Day in the specified year.

#### Remarks

In the United States, Memorial Day is observed on the last Monday of May.

***

### getMothersDay()

```ts
function getMothersDay(year): Date;
```

Defined in: [holidays/getMothersDay.ts:13](https://github.com/nktnet1/date-fns-holidays/blob/main/src/holidays/getMothersDay.ts#L13)

Returns the date of Mother's Day for the specified year.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `year` | `number` | The year for which to calculate Mother's Day. |

#### Returns

[`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

A [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) representing Mother's Day in the specified year.

#### Remarks

In the United States, Mother's Day is observed on the second Sunday of May.

***

### getNewYearsDay()

```ts
function getNewYearsDay(year): Date;
```

Defined in: [holidays/getNewYearsDay.ts:10](https://github.com/nktnet1/date-fns-holidays/blob/main/src/holidays/getNewYearsDay.ts#L10)

Returns the date of New Year's Day for the specified year.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `year` | `number` | The year for which to obtain New Year's Day. |

#### Returns

[`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

A [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) representing January 1 of the specified year.

#### Remarks

New Year's Day is observed annually on January 1.

***

### getNewYearsEve()

```ts
function getNewYearsEve(year): Date;
```

Defined in: [holidays/getNewYearsEve.ts:12](https://github.com/nktnet1/date-fns-holidays/blob/main/src/holidays/getNewYearsEve.ts#L12)

Returns the date of New Year's Eve for the specified year.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `year` | `number` | The year for which to obtain New Year's Eve. |

#### Returns

[`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

A [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) representing December 31 of the specified year.

#### Remarks

New Year's Eve is the last day of the year, observed on December 31.

***

### getNextOccurrence()

```ts
function getNextOccurrence(date, dayOfWeekIndex): Date;
```

Defined in: [utils/getters.ts:34](https://github.com/nktnet1/date-fns-holidays/blob/main/src/utils/getters.ts#L34)

Returns the next occurrence of a given weekday relative to a date.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | Starting date. |
| `dayOfWeekIndex` | `number` | Weekday index (0 = Sunday, 6 = Saturday). |

#### Returns

[`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

A [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) representing the next occurrence of the weekday.

#### Remarks

If the provided date already matches the target weekday, it is returned unchanged.
Otherwise, the function advances forward to the next matching weekday.

***

### getObservedHolidays()

```ts
function getObservedHolidays(year): HolidayList;
```

Defined in: [holidays/getObservedHolidays.ts:19](https://github.com/nktnet1/date-fns-holidays/blob/main/src/holidays/getObservedHolidays.ts#L19)

Returns the observed federal holidays for the specified year.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `year` | `number` | The year for which to calculate observed holidays. |

#### Returns

[`HolidayList`](#holidaylist)

A [HolidayList](#holidaylist) containing observed federal holiday dates.

#### Remarks

This function adjusts federal holidays that fall on weekends to their
observed dates:

* Saturday holidays are observed on the preceding Friday
* Sunday holidays are observed on the following Monday

Only holidays marked as `federal: true` are included in the result.

***

### getPresidentsDay()

```ts
function getPresidentsDay(year): Date;
```

Defined in: [holidays/getPresidentsDay.ts:13](https://github.com/nktnet1/date-fns-holidays/blob/main/src/holidays/getPresidentsDay.ts#L13)

Returns the date of Presidents Day for the specified year.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `year` | `number` | The year for which to calculate Presidents Day. |

#### Returns

[`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

A [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) representing Presidents Day in the specified year.

#### Remarks

In the United States, Presidents Day is observed on the third Monday of February.

***

### getPrevOccurrence()

```ts
function getPrevOccurrence(date, dayOfWeekIndex): Date;
```

Defined in: [utils/getters.ts:58](https://github.com/nktnet1/date-fns-holidays/blob/main/src/utils/getters.ts#L58)

Returns the previous occurrence of a given weekday relative to a date.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | Starting date. |
| `dayOfWeekIndex` | `number` | Weekday index (0 = Sunday, 6 = Saturday). |

#### Returns

[`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

A [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) representing the previous occurrence of the weekday.

#### Remarks

If the provided date already matches the target weekday, it is returned unchanged.
Otherwise, the function moves backward to the previous matching weekday.

***

### getThanksgiving()

```ts
function getThanksgiving(year): Date;
```

Defined in: [holidays/getThanksgiving.ts:13](https://github.com/nktnet1/date-fns-holidays/blob/main/src/holidays/getThanksgiving.ts#L13)

Returns the date of Thanksgiving for the specified year.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `year` | `number` | The year for which to calculate Thanksgiving. |

#### Returns

[`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

A [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) representing Thanksgiving in the specified year.

#### Remarks

In the United States, Thanksgiving is observed on the fourth Thursday of November.

***

### getValentinesDay()

```ts
function getValentinesDay(year): Date;
```

Defined in: [holidays/getValentinesDay.ts:10](https://github.com/nktnet1/date-fns-holidays/blob/main/src/holidays/getValentinesDay.ts#L10)

Returns the date of Valentine's Day for the specified year.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `year` | `number` | The year for which to obtain Valentine's Day. |

#### Returns

[`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

A [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) representing February 14 of the specified year.

#### Remarks

Valentine's Day is observed annually on February 14.

***

### getVeteransDay()

```ts
function getVeteransDay(year): Date;
```

Defined in: [holidays/getVeteransDay.ts:10](https://github.com/nktnet1/date-fns-holidays/blob/main/src/holidays/getVeteransDay.ts#L10)

Returns the date of Veterans Day for the specified year.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `year` | `number` | The year for which to obtain Veterans Day. |

#### Returns

[`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

A [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) representing November 11 of the specified year.

#### Remarks

Veterans Day is observed annually on November 11 in the United States.

***

### isBankHoliday()

```ts
function isBankHoliday(date): boolean;
```

Defined in: [utils/isIn.ts:56](https://github.com/nktnet1/date-fns-holidays/blob/main/src/utils/isIn.ts#L56)

Checks whether a [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) is a bank holiday.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | The [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) to evaluate. |

#### Returns

`boolean`

`true` if the [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) is a bank holiday.

***

### isFederalHoliday()

```ts
function isFederalHoliday(date): boolean;
```

Defined in: [utils/isIn.ts:46](https://github.com/nktnet1/date-fns-holidays/blob/main/src/utils/isIn.ts#L46)

Checks whether a [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) is a federal holiday.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | The [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) to evaluate. |

#### Returns

`boolean`

`true` if the [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) is a federal holiday.

***

### isHoliday()

```ts
function isHoliday(date): boolean;
```

Defined in: [utils/isIn.ts:36](https://github.com/nktnet1/date-fns-holidays/blob/main/src/utils/isIn.ts#L36)

Checks whether a [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) is any recognized holiday.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | The [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) to evaluate. |

#### Returns

`boolean`

`true` if the [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) is a holiday.

***

### isInHolidayList()

```ts
function isInHolidayList(date, getHolidayList): boolean;
```

Defined in: [utils/isIn.ts:19](https://github.com/nktnet1/date-fns-holidays/blob/main/src/utils/isIn.ts#L19)

Determines whether a given [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) exists within a [HolidayList](#holidaylist) for its year.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `date` | [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | The [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) to evaluate. |
| `getHolidayList` | (`year`) => [`HolidayList`](#holidaylist) | Function that returns a [HolidayList](#holidaylist) for a given year. |

#### Returns

`boolean`

`true` if the [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) matches any entry in the holiday list; otherwise `false`.

#### Remarks

The function resolves the appropriate holiday list for the year of the provided
[Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), then checks whether any holiday in that list matches the given date
using calendar-day comparison (time components are ignored).
