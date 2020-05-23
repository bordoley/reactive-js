[reactive-js - v0.0.42](../README.md) › ["scheduler"](../modules/_scheduler_.md) › [SchedulerLike](_scheduler_.schedulerlike.md)

# Interface: SchedulerLike

An object that schedules units of work on a runloop.

## Hierarchy

* **SchedulerLike**

  ↳ [ObserverLike](_observable_.observerlike.md)

  ↳ [PausableSchedulerLike](_scheduler_.pausableschedulerlike.md)

  ↳ [VirtualTimeSchedulerLike](_scheduler_.virtualtimeschedulerlike.md)

## Index

### Properties

* [inContinuation](_scheduler_.schedulerlike.md#incontinuation)
* [now](_scheduler_.schedulerlike.md#now)
* [shouldYield](_scheduler_.schedulerlike.md#shouldyield)

### Methods

* [schedule](_scheduler_.schedulerlike.md#schedule)

## Properties

###  inContinuation

• **inContinuation**: *boolean*

___

###  now

• **now**: *number*

___

###  shouldYield

• **shouldYield**: *boolean*

## Methods

###  schedule

▸ **schedule**(`continuation`: [SchedulerContinuationLike](_scheduler_.schedulercontinuationlike.md), `options?`: object): *void*

Schedules a continuation to be executed on the scheduler.

**Parameters:**

▪ **continuation**: *[SchedulerContinuationLike](_scheduler_.schedulercontinuationlike.md)*

The SchedulerContinuation to be executed.

▪`Optional`  **options**: *object*

Name | Type |
------ | ------ |
`delay` | number |

**Returns:** *void*
