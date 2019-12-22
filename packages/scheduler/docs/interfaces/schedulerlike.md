[@reactive-js/scheduler](../README.md) › [SchedulerLike](schedulerlike.md)

# Interface: SchedulerLike

An object that schedules units of work on a runloop.

## Hierarchy

* **SchedulerLike**

  ↳ [SchedulerResourceLike](schedulerresourcelike.md)

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

▸ **schedule**(`continuation`: [SchedulerContinuationLike](schedulercontinuationlike.md), `delay?`: undefined | number): *DisposableLike*

Schedules a continuation to be execute on the scheduler.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`continuation` | [SchedulerContinuationLike](schedulercontinuationlike.md) | - |
`delay?` | undefined &#124; number | The delay in ms after which to execute the continuation.  |

**Returns:** *DisposableLike*
