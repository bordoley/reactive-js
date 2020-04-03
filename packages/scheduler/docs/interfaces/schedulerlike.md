[@reactive-js/scheduler](../README.md) › [SchedulerLike](schedulerlike.md)

# Interface: SchedulerLike

An object that schedules units of work on a runloop.

## Hierarchy

* **SchedulerLike**

  ↳ [VirtualTimeSchedulerLike](virtualtimeschedulerlike.md)

  ↳ [CallbackScheduler](callbackscheduler.md)

## Index

### Properties

* [now](schedulerlike.md#now)

### Methods

* [schedule](schedulerlike.md#schedule)

## Properties

###  now

• **now**: *number*

The scheduler's current time in ms.

## Methods

###  schedule

▸ **schedule**(`continuation`: [SchedulerContinuationLike](schedulercontinuationlike.md)): *void*

Schedules a continuation to be executed on the scheduler.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`continuation` | [SchedulerContinuationLike](schedulercontinuationlike.md) | The SchedulerContinuation to be executed.  |

**Returns:** *void*
