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

▸ **schedule**(`continuation`: [SchedulerContinuation](schedulercontinuation.md), `config?`: undefined | object): *DisposableLike*

Schedules a continuation to be execute on the scheduler.

**Parameters:**

Name | Type |
------ | ------ |
`continuation` | [SchedulerContinuation](schedulercontinuation.md) |
`config?` | undefined &#124; object |

**Returns:** *DisposableLike*
