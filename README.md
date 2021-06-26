
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
* [getJuneteenth](README.md#getjuneteenth)
* [getLaborDay](README.md#getlaborday)
* [getLastOfMonth](README.md#getlastofmonth)
* [getMartinLutherKingJrDay](README.md#getmartinlutherkingjrday)
* [getMemorialDay](README.md#getmemorialday)
* [getMothersDay](README.md#getmothersday)
* [getNewYearsDay](README.md#getnewyearsday)
* [getNewYearsEve](README.md#getnewyearseve)
* [getNextOccurence](README.md#getnextoccurence)
* [getObservedHolidays](README.md#getobservedholidays)
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

Ƭ **Holiday**: *"christmas" | "easter" | "halloween" | "valentinesDay" | "mothersDay" | "columbusDay" | "independenceDay" | "presidentsDay" | "laborDay" | "veteransDay" | "thanksgiving" | "newYearsEve" | "martinLutherKingJrDay" | "newYearsDay" | "fathersDay" | "memorialDay" | "goodFriday" | "juneteenth"*

*Defined in [index.ts:13](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L13)*

___

###  Holidays

Ƭ **Holidays**: *object*

*Defined in [index.ts:139](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L139)*

#### Type declaration:

## Functions

###  getBankHolidays

▸ **getBankHolidays**(`year`: number): *object*

*Defined in [index.ts:242](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L242)*

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

*Defined in [index.ts:99](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Date*

___

###  getColumbusDay

▸ **getColumbusDay**(`year`: number): *Date*

*Defined in [index.ts:87](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Date*

___

###  getEaster

▸ **getEaster**(`year`: number): *Date*

*Defined in [index.ts:49](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Date*

___

###  getFathersDay

▸ **getFathersDay**(`year`: number): *Date*

*Defined in [index.ts:127](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L127)*

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

*Defined in [index.ts:135](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L135)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Date*

___

###  getHalloween

▸ **getHalloween**(`year`: number): *Date*

*Defined in [index.ts:33](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Date*

___

###  getHolidays

▸ **getHolidays**(`year`: number): *[Holidays](README.md#holidays)*

*Defined in [index.ts:147](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L147)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *[Holidays](README.md#holidays)*

___

###  getIndependenceDay

▸ **getIndependenceDay**(`year`: number): *Date*

*Defined in [index.ts:91](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Date*

___

###  getJuneteenth

▸ **getJuneteenth**(`year`: number): *Date*

*Defined in [index.ts:45](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Date*

___

###  getLaborDay

▸ **getLaborDay**(`year`: number): *Date*

*Defined in [index.ts:103](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L103)*

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

*Defined in [index.ts:119](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L119)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Date*

___

###  getMemorialDay

▸ **getMemorialDay**(`year`: number): *Date*

*Defined in [index.ts:131](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L131)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Date*

___

###  getMothersDay

▸ **getMothersDay**(`year`: number): *Date*

*Defined in [index.ts:41](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Date*

___

###  getNewYearsDay

▸ **getNewYearsDay**(`year`: number): *Date*

*Defined in [index.ts:123](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L123)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Date*

___

###  getNewYearsEve

▸ **getNewYearsEve**(`year`: number): *Date*

*Defined in [index.ts:115](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L115)*

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

###  getObservedHolidays

▸ **getObservedHolidays**(`year`: number): *Record‹string, Record‹"date", Date››*

*Defined in [index.ts:266](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L266)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Record‹string, Record‹"date", Date››*

___

###  getPresidentsDay

▸ **getPresidentsDay**(`year`: number): *Date*

*Defined in [index.ts:95](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L95)*

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

*Defined in [index.ts:111](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L111)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Date*

___

###  getValentinesDay

▸ **getValentinesDay**(`year`: number): *Date*

*Defined in [index.ts:37](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Date*

___

###  getVeteransDay

▸ **getVeteransDay**(`year`: number): *Date*

*Defined in [index.ts:107](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`year` | number |

**Returns:** *Date*

___

###  isBankHoliday

▸ **isBankHoliday**(`date`: Date): *boolean*

*Defined in [index.ts:315](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L315)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |

**Returns:** *boolean*

___

###  isHoliday

▸ **isHoliday**(`date`: Date): *boolean*

*Defined in [index.ts:311](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L311)*

**Parameters:**

Name | Type |
------ | ------ |
`date` | Date |

**Returns:** *boolean*

___

###  isInHolidayList

▸ **isInHolidayList**(`date`: Date, `getHolidayList`: function): *boolean*

*Defined in [index.ts:299](https://github.com/jonstuebe/date-fns-holiday-us/blob/master/src/index.ts#L299)*

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
