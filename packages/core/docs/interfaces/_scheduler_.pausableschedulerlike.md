[@reactive-js/core - v0.0.37](../README.md) › ["scheduler"](../modules/_scheduler_.md) › [PausableSchedulerLike](_scheduler_.pausableschedulerlike.md)

# Interface: PausableSchedulerLike

## Hierarchy

* [SchedulerLike](_scheduler_.schedulerlike.md)

  ↳ **PausableSchedulerLike**

## Index

### Properties

* [inContinuation](_scheduler_.pausableschedulerlike.md#incontinuation)
* [now](_scheduler_.pausableschedulerlike.md#now)

### Methods

* [pause](_scheduler_.pausableschedulerlike.md#pause)
* [resume](_scheduler_.pausableschedulerlike.md#resume)
* [schedule](_scheduler_.pausableschedulerlike.md#schedule)
* [shouldYield](_scheduler_.pausableschedulerlike.md#shouldyield)

## Properties

###  inContinuation

• **inContinuation**: *boolean*

*Inherited from void*

___

###  now

• **now**: *number*

*Inherited from void*

The scheduler's current time in ms.

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

___

###  shouldYield

▸ **shouldYield**(): *boolean*

*Inherited from void*

**Returns:** *boolean*
