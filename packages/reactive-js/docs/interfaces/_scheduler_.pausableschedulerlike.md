[reactive-js - v0.0.42](../README.md) › ["scheduler"](../modules/_scheduler_.md) › [PausableSchedulerLike](_scheduler_.pausableschedulerlike.md)

# Interface: PausableSchedulerLike

## Hierarchy

* [SchedulerLike](_scheduler_.schedulerlike.md)

  ↳ **PausableSchedulerLike**

## Index

### Properties

* [inContinuation](_scheduler_.pausableschedulerlike.md#incontinuation)
* [now](_scheduler_.pausableschedulerlike.md#now)
* [shouldYield](_scheduler_.pausableschedulerlike.md#shouldyield)

### Methods

* [pause](_scheduler_.pausableschedulerlike.md#pause)
* [resume](_scheduler_.pausableschedulerlike.md#resume)
* [schedule](_scheduler_.pausableschedulerlike.md#schedule)

## Properties

###  inContinuation

• **inContinuation**: *boolean*

*Inherited from void*

___

###  now

• **now**: *number*

*Inherited from void*

___

###  shouldYield

• **shouldYield**: *boolean*

*Inherited from void*

## Methods

###  pause

▸ **pause**(): *void*

**Returns:** *void*

___

###  resume

▸ **resume**(): *void*

**Returns:** *void*

___

###  schedule

▸ **schedule**(`continuation`: [SchedulerContinuationLike](_scheduler_.schedulercontinuationlike.md), `options?`: object): *void*

*Inherited from void*

Schedules a continuation to be executed on the scheduler.

**Parameters:**

▪ **continuation**: *[SchedulerContinuationLike](_scheduler_.schedulercontinuationlike.md)*

The SchedulerContinuation to be executed.

▪`Optional`  **options**: *object*

Name | Type |
------ | ------ |
`delay` | number |

**Returns:** *void*
