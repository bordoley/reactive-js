[@reactive-js/scheduler - v0.0.35](../README.md) › [SchedulerLike](schedulerlike.md)

# Interface: SchedulerLike

An object that schedules units of work on a runloop.

## Hierarchy

* **SchedulerLike**

  ↳ [VirtualTimeSchedulerLike](virtualtimeschedulerlike.md)

  ↳ [CallbackSchedulerLike](callbackschedulerlike.md)

## Index

### Properties

* [inContinuation](schedulerlike.md#incontinuation)
* [now](schedulerlike.md#now)

### Methods

* [schedule](schedulerlike.md#schedule)

## Properties

###  inContinuation

• **inContinuation**: *boolean*

___

###  now

• **now**: *number*

The scheduler's current time in ms.

## Methods

###  schedule

▸ **schedule**(`continuation`: [SchedulerContinuationLike](schedulercontinuationlike.md), `delay?`: undefined | number): *void*

Schedules a continuation to be executed on the scheduler.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`continuation` | [SchedulerContinuationLike](schedulercontinuationlike.md) | The SchedulerContinuation to be executed.  |
`delay?` | undefined &#124; number | - |

**Returns:** *void*
