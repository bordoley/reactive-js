[@reactive-js/core - v0.0.37](../README.md) › ["scheduler"](../modules/_scheduler_.md) › [SchedulerLike](_scheduler_.schedulerlike.md)

# Interface: SchedulerLike

An object that schedules units of work on a runloop.

## Hierarchy

* **SchedulerLike**

  ↳ [SubscriberLike](_observable_.subscriberlike.md)

  ↳ [VirtualTimeSchedulerLike](_scheduler_.virtualtimeschedulerlike.md)

## Index

### Properties

* [inContinuation](_scheduler_.schedulerlike.md#incontinuation)
* [now](_scheduler_.schedulerlike.md#now)

### Methods

* [schedule](_scheduler_.schedulerlike.md#schedule)
* [shouldYield](_scheduler_.schedulerlike.md#shouldyield)

## Properties

###  inContinuation

• **inContinuation**: *boolean*

___

###  now

• **now**: *number*

The scheduler's current time in ms.

## Methods

###  schedule

▸ **schedule**(`continuation`: [SchedulerContinuationLike](_scheduler_.schedulercontinuationlike.md), `delay?`: number): *void*

Schedules a continuation to be executed on the scheduler.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`continuation` | [SchedulerContinuationLike](_scheduler_.schedulercontinuationlike.md) | The SchedulerContinuation to be executed.  |
`delay?` | number | - |

**Returns:** *void*

___

###  shouldYield

▸ **shouldYield**(): *boolean*

**Returns:** *boolean*
