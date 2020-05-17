[@reactive-js/core - v0.0.37](../README.md) › ["scheduler"](../modules/_scheduler_.md) › [SchedulerLike](_scheduler_.schedulerlike.md)

# Interface: SchedulerLike

An object that schedules units of work on a runloop.

## Hierarchy

* [YieldableLike](_scheduler_.yieldablelike.md)

  ↳ **SchedulerLike**

  ↳ [ObserverLike](_observable_.observerlike.md)

  ↳ [PausableSchedulerLike](_scheduler_.pausableschedulerlike.md)

  ↳ [VirtualTimeSchedulerLike](_scheduler_.virtualtimeschedulerlike.md)

## Index

### Properties

* [inContinuation](_scheduler_.schedulerlike.md#incontinuation)
* [now](_scheduler_.schedulerlike.md#now)

### Methods

* [schedule](_scheduler_.schedulerlike.md#schedule)
* [yield](_scheduler_.schedulerlike.md#yield)

## Properties

###  inContinuation

• **inContinuation**: *boolean*

*Inherited from void*

___

###  now

• **now**: *number*

*Inherited from void*

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

___

###  yield

▸ **yield**(`options?`: object): *void*

*Inherited from void*

**Parameters:**

▪`Optional`  **options**: *object*

Name | Type |
------ | ------ |
`delay` | number |

**Returns:** *void*
