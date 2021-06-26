
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

## API

### Type aliases

* [Holiday](README.md#holiday)
* [Holidays](README.md#holidays)

### Functions

* [getBankHolidays](README.md#getbankholidays)
* [getChristmas](README.md#getchristmas)
* [getColumbusDay](README.md#getcolumbusday)
* [getEaster](README.md#geteaster)
* [getFathersDay](README.md#getfathersday)
* [getFirstOccurence](README.md#getfirstoccurence)
* [getGoodFriday](README.md#getgoodfriday)
* [getHalloween](README.md#gethalloween)
* [getHolidays](README.md#getholidays)
* [getIndependenceDay](README.md#getindependenceday)
* [getLaborDay](README.md#getlaborday)
* [getLastOfMonth](README.md#getlastofmonth)
* [getMartinLutherKingJrDay](README.md#getmartinlutherkingjrday)
* [getMemorialDay](README.md#getmemorialday)
* [getMothersDay](README.md#getmothersday)
* [getNewYearsDay](README.md#getnewyearsday)
* [getNewYearsEve](README.md#getnewyearseve)
* [getNextOccurence](README.md#getnextoccurence)
* [getPresidentsDay](README.md#getpresidentsday)
* [getPrevOccurence](README.md#getprevoccurence)
* [getThanksgiving](README.md#getthanksgiving)
* [getValentinesDay](README.md#getvalentinesday)
* [getVeteransDay](README.md#getveteransday)
* [isBankHoliday](README.md#isbankholiday)
* [isHoliday](README.md#isholiday)
* [isInHolidayList](README.md#isinholidaylist)

## Type aliases

###  Holiday

Ƭ **Holiday**: *"christmas" | "easter" | "halloween" | "valentinesDay" | "mothersDay" | "columbusDay" | "independenceDay" | "presidentsDay" | "laborDay" | "veteransDay" | "thanksgiving" | "newYearsEve" | "martinLutherKingJrDay" | "newYearsDay" | "fathersDay" | "memorialDay" | "goodFriday"*

*Defined in [index.ts:5](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L5)*

___

###  Holidays

Ƭ **Holidays**: *object*

*Defined in [index.ts:126](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L126)*

#### Type declaration:

## Functions

###  getBankHolidays

▸ **getBankHolidays**(`year`: number): *object*

*Defined in [index.ts:206](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L206)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *object*

* \[ **key**: *string*\]: object

* **date**: *Date*

___

###  getChristmas

▸ **getChristmas**(`year`: number): *Date*

*Defined in [index.ts:86](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Date*

___

###  getColumbusDay

▸ **getColumbusDay**(`year`: number): *Date*

*Defined in [index.ts:74](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Date*

___

###  getEaster

▸ **getEaster**(`year`: number): *Date*

*Defined in [index.ts:36](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Date*

___

###  getFathersDay

▸ **getFathersDay**(`year`: number): *Date*

*Defined in [index.ts:114](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Date*

___

###  getFirstOccurence

▸ **getFirstOccurence**(`date`: Date, `dayOfWeekIndex`: number): *Date*

*Defined in [utils.ts:8](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/utils.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |
`dayOfWeekIndex` | number |

**Returns:** *Date*

___

###  getGoodFriday

▸ **getGoodFriday**(`year`: number): *Date*

*Defined in [index.ts:122](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L122)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Date*

___

###  getHalloween

▸ **getHalloween**(`year`: number): *Date*

*Defined in [index.ts:24](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Date*

___

###  getHolidays

▸ **getHolidays**(`year`: number): *[Holidays](README.md#holidays)*

*Defined in [index.ts:133](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L133)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *[Holidays](README.md#holidays)*

___

###  getIndependenceDay

▸ **getIndependenceDay**(`year`: number): *Date*

*Defined in [index.ts:78](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Date*

___

###  getLaborDay

▸ **getLaborDay**(`year`: number): *Date*

*Defined in [index.ts:90](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L90)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Date*

___

###  getLastOfMonth

▸ **getLastOfMonth**(`date`: Date, `dayOfWeekIndex`: number): *Date*

*Defined in [utils.ts:38](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/utils.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |
`dayOfWeekIndex` | number |

**Returns:** *Date*

___

###  getMartinLutherKingJrDay

▸ **getMartinLutherKingJrDay**(`year`: number): *Date*

*Defined in [index.ts:106](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L106)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Date*

___

###  getMemorialDay

▸ **getMemorialDay**(`year`: number): *Date*

*Defined in [index.ts:118](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L118)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Date*

___

###  getMothersDay

▸ **getMothersDay**(`year`: number): *Date*

*Defined in [index.ts:32](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Date*

___

###  getNewYearsDay

▸ **getNewYearsDay**(`year`: number): *Date*

*Defined in [index.ts:110](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L110)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Date*

___

###  getNewYearsEve

▸ **getNewYearsEve**(`year`: number): *Date*

*Defined in [index.ts:102](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L102)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Date*

___

###  getNextOccurence

▸ **getNextOccurence**(`date`: Date, `dayOfWeekIndex`: number): *Date*

*Defined in [utils.ts:12](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/utils.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |
`dayOfWeekIndex` | number |

**Returns:** *Date*

___

###  getPresidentsDay

▸ **getPresidentsDay**(`year`: number): *Date*

*Defined in [index.ts:82](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Date*

___

###  getPrevOccurence

▸ **getPrevOccurence**(`date`: Date, `dayOfWeekIndex`: number): *Date*

*Defined in [utils.ts:25](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/utils.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |
`dayOfWeekIndex` | number |

**Returns:** *Date*

___

###  getThanksgiving

▸ **getThanksgiving**(`year`: number): *Date*

*Defined in [index.ts:98](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L98)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Date*

___

###  getValentinesDay

▸ **getValentinesDay**(`year`: number): *Date*

*Defined in [index.ts:28](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Date*

___

###  getVeteransDay

▸ **getVeteransDay**(`year`: number): *Date*

*Defined in [index.ts:94](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Date*

___

###  isBankHoliday

▸ **isBankHoliday**(`date`: Date): *boolean*

*Defined in [index.ts:246](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L246)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |

**Returns:** *boolean*

___

###  isHoliday

▸ **isHoliday**(`date`: Date): *boolean*

*Defined in [index.ts:242](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L242)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |

**Returns:** *boolean*

___

###  isInHolidayList

▸ **isInHolidayList**(`date`: Date, `getHolidayList`: function): *boolean*

*Defined in [index.ts:230](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L230)*

**Parameters:**

▪ **date**: *Date*

▪ **getHolidayList**: *function*

▸ (`year`: number): *object*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

* \[ **key**: *string*\]: object

* **date**: *Date*

**Returns:** *boolean*

&copy; 2020 Jon Stuebe
