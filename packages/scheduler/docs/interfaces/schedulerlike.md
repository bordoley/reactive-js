[@reactive-js/scheduler](../README.md) › [SchedulerLike](schedulerlike.md)

# Interface: SchedulerLike

An object that schedules units of work on a runloop.

## Hierarchy

* **SchedulerLike**

  ↳ [SchedulerResourceLike](schedulerresourcelike.md)

## Index

### Properties

* [inScheduledContinuation](schedulerlike.md#inscheduledcontinuation)
* [now](schedulerlike.md#now)

### Methods

* [schedule](schedulerlike.md#schedule)

## Properties

###  inScheduledContinuation

• **inScheduledContinuation**: *boolean*

Returns true if the scheduler is currently executing a SchedulerContinuation.

___

###  now

• **now**: *number*

The scheduler's current time in ms.

## Methods

###  schedule

▸ **schedule**(`continuation`: [SchedulerContinuation](schedulercontinuation.md), `delay?`: undefined | number, `priority?`: undefined | number): *DisposableLike*

Schedules a continuation to be execute on the scheduler.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`continuation` | [SchedulerContinuation](schedulercontinuation.md) | - |
`delay?` | undefined &#124; number | The delay in ms after which to execute the continuation. |
`priority?` | undefined &#124; number | The scheduling priority of the continuation.  |

**Returns:** *DisposableLike*
