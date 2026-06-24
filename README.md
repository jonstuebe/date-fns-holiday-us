
# date-fns-holiday-us

The purpose of this project is to give an interface to work with holidays using `date-fns`

## Install

```
yarn add date-fns-holiday-us date-fns
```

or with npm:

```
npm i date-fns-holiday-us date-fns
```

## Table of contents

### Type Aliases

- [Holiday](README.md#holiday)
- [Holidays](README.md#holidays)

### Functions

- [getBankHolidays](README.md#getbankholidays)
- [getBlackFriday](README.md#getblackfriday)
- [getChristmasDay](README.md#getchristmasday)
- [getChristmasEve](README.md#getchristmaseve)
- [getColumbusDay](README.md#getcolumbusday)
- [getEaster](README.md#geteaster)
- [getFathersDay](README.md#getfathersday)
- [getFederalHolidays](README.md#getfederalholidays)
- [getGoodFriday](README.md#getgoodfriday)
- [getHalloween](README.md#gethalloween)
- [getHolidays](README.md#getholidays)
- [getIndependenceDay](README.md#getindependenceday)
- [getJuneteenth](README.md#getjuneteenth)
- [getLaborDay](README.md#getlaborday)
- [getMartinLutherKingJrDay](README.md#getmartinlutherkingjrday)
- [getMemorialDay](README.md#getmemorialday)
- [getMothersDay](README.md#getmothersday)
- [getNewYearsDay](README.md#getnewyearsday)
- [getNewYearsEve](README.md#getnewyearseve)
- [getObservedHolidays](README.md#getobservedholidays)
- [getPresidentsDay](README.md#getpresidentsday)
- [getThanksgiving](README.md#getthanksgiving)
- [getValentinesDay](README.md#getvalentinesday)
- [getVeteransDay](README.md#getveteransday)
- [isBankHoliday](README.md#isbankholiday)
- [isFederalHoliday](README.md#isfederalholiday)
- [isHoliday](README.md#isholiday)
- [isInHolidayList](README.md#isinholidaylist)

## Type Aliases

### Holiday

Ƭ **Holiday**: ``"blackFriday"`` \| ``"christmasDay"`` \| ``"christmasEve"`` \| ``"easter"`` \| ``"halloween"`` \| ``"valentinesDay"`` \| ``"mothersDay"`` \| ``"columbusDay"`` \| ``"independenceDay"`` \| ``"presidentsDay"`` \| ``"laborDay"`` \| ``"veteransDay"`` \| ``"thanksgiving"`` \| ``"newYearsEve"`` \| ``"martinLutherKingJrDay"`` \| ``"newYearsDay"`` \| ``"fathersDay"`` \| ``"memorialDay"`` \| ``"goodFriday"`` \| ``"juneteenth"``

#### Defined in

[index.ts:13](https://github.com/jonstuebe/date-fns-holiday-us/blob/main/src/index.ts#L13)

___

### Holidays

Ƭ **Holidays**: { [K in Holiday]: Object }

#### Defined in

[index.ts:149](https://github.com/jonstuebe/date-fns-holiday-us/blob/main/src/index.ts#L149)

## Functions

### getBankHolidays

▸ **getBankHolidays**(`year`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`Object`

#### Defined in

[index.ts:262](https://github.com/jonstuebe/date-fns-holiday-us/blob/main/src/index.ts#L262)

___

### getBlackFriday

▸ **getBlackFriday**(`year`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`Date`

#### Defined in

[index.ts:35](https://github.com/jonstuebe/date-fns-holiday-us/blob/main/src/index.ts#L35)

___

### getChristmasDay

▸ **getChristmasDay**(`year`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`Date`

#### Defined in

[index.ts:105](https://github.com/jonstuebe/date-fns-holiday-us/blob/main/src/index.ts#L105)

___

### getChristmasEve

▸ **getChristmasEve**(`year`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`Date`

#### Defined in

[index.ts:109](https://github.com/jonstuebe/date-fns-holiday-us/blob/main/src/index.ts#L109)

___

### getColumbusDay

▸ **getColumbusDay**(`year`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`Date`

#### Defined in

[index.ts:93](https://github.com/jonstuebe/date-fns-holiday-us/blob/main/src/index.ts#L93)

___

### getEaster

▸ **getEaster**(`year`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`Date`

#### Defined in

[index.ts:55](https://github.com/jonstuebe/date-fns-holiday-us/blob/main/src/index.ts#L55)

___

### getFathersDay

▸ **getFathersDay**(`year`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`Date`

#### Defined in

[index.ts:137](https://github.com/jonstuebe/date-fns-holiday-us/blob/main/src/index.ts#L137)

___

### getFederalHolidays

▸ **getFederalHolidays**(`year`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`Object`

#### Defined in

[index.ts:284](https://github.com/jonstuebe/date-fns-holiday-us/blob/main/src/index.ts#L284)

___

### getGoodFriday

▸ **getGoodFriday**(`year`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`Date`

#### Defined in

[index.ts:145](https://github.com/jonstuebe/date-fns-holiday-us/blob/main/src/index.ts#L145)

___

### getHalloween

▸ **getHalloween**(`year`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`Date`

#### Defined in

[index.ts:39](https://github.com/jonstuebe/date-fns-holiday-us/blob/main/src/index.ts#L39)

___

### getHolidays

▸ **getHolidays**(`year`): [`Holidays`](README.md#holidays)

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

[`Holidays`](README.md#holidays)

#### Defined in

[index.ts:157](https://github.com/jonstuebe/date-fns-holiday-us/blob/main/src/index.ts#L157)

___

### getIndependenceDay

▸ **getIndependenceDay**(`year`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`Date`

#### Defined in

[index.ts:97](https://github.com/jonstuebe/date-fns-holiday-us/blob/main/src/index.ts#L97)

___

### getJuneteenth

▸ **getJuneteenth**(`year`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`Date`

#### Defined in

[index.ts:51](https://github.com/jonstuebe/date-fns-holiday-us/blob/main/src/index.ts#L51)

___

### getLaborDay

▸ **getLaborDay**(`year`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`Date`

#### Defined in

[index.ts:113](https://github.com/jonstuebe/date-fns-holiday-us/blob/main/src/index.ts#L113)

___

### getMartinLutherKingJrDay

▸ **getMartinLutherKingJrDay**(`year`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`Date`

#### Defined in

[index.ts:129](https://github.com/jonstuebe/date-fns-holiday-us/blob/main/src/index.ts#L129)

___

### getMemorialDay

▸ **getMemorialDay**(`year`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`Date`

#### Defined in

[index.ts:141](https://github.com/jonstuebe/date-fns-holiday-us/blob/main/src/index.ts#L141)

___

### getMothersDay

▸ **getMothersDay**(`year`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`Date`

#### Defined in

[index.ts:47](https://github.com/jonstuebe/date-fns-holiday-us/blob/main/src/index.ts#L47)

___

### getNewYearsDay

▸ **getNewYearsDay**(`year`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`Date`

#### Defined in

[index.ts:133](https://github.com/jonstuebe/date-fns-holiday-us/blob/main/src/index.ts#L133)

___

### getNewYearsEve

▸ **getNewYearsEve**(`year`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`Date`

#### Defined in

[index.ts:125](https://github.com/jonstuebe/date-fns-holiday-us/blob/main/src/index.ts#L125)

___

### getObservedHolidays

▸ **getObservedHolidays**(`year`): `Record`<`string`, `Record`<``"date"``, `Date`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`Record`<`string`, `Record`<``"date"``, `Date`\>\>

#### Defined in

[index.ts:306](https://github.com/jonstuebe/date-fns-holiday-us/blob/main/src/index.ts#L306)

___

### getPresidentsDay

▸ **getPresidentsDay**(`year`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`Date`

#### Defined in

[index.ts:101](https://github.com/jonstuebe/date-fns-holiday-us/blob/main/src/index.ts#L101)

___

### getThanksgiving

▸ **getThanksgiving**(`year`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`Date`

#### Defined in

[index.ts:121](https://github.com/jonstuebe/date-fns-holiday-us/blob/main/src/index.ts#L121)

___

### getValentinesDay

▸ **getValentinesDay**(`year`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`Date`

#### Defined in

[index.ts:43](https://github.com/jonstuebe/date-fns-holiday-us/blob/main/src/index.ts#L43)

___

### getVeteransDay

▸ **getVeteransDay**(`year`): `Date`

#### Parameters

| Name | Type |
| :------ | :------ |
| `year` | `number` |

#### Returns

`Date`

#### Defined in

[index.ts:117](https://github.com/jonstuebe/date-fns-holiday-us/blob/main/src/index.ts#L117)

___

### isBankHoliday

▸ **isBankHoliday**(`date`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`boolean`

#### Defined in

[index.ts:359](https://github.com/jonstuebe/date-fns-holiday-us/blob/main/src/index.ts#L359)

___

### isFederalHoliday

▸ **isFederalHoliday**(`date`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`boolean`

#### Defined in

[index.ts:355](https://github.com/jonstuebe/date-fns-holiday-us/blob/main/src/index.ts#L355)

___

### isHoliday

▸ **isHoliday**(`date`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`boolean`

#### Defined in

[index.ts:351](https://github.com/jonstuebe/date-fns-holiday-us/blob/main/src/index.ts#L351)

___

### isInHolidayList

▸ **isInHolidayList**(`date`, `getHolidayList`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `getHolidayList` | (`year`: `number`) => { `[key: string]`: { `date`: `Date`  };  } |

#### Returns

`boolean`

#### Defined in

[index.ts:339](https://github.com/jonstuebe/date-fns-holiday-us/blob/main/src/index.ts#L339)

&copy; 2020 Jon Stuebe
