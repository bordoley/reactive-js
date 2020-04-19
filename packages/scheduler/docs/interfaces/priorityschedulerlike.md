[@reactive-js/scheduler - v0.0.34](../README.md) › [PrioritySchedulerLike](priorityschedulerlike.md)

# Interface: PrioritySchedulerLike

A scheduler which schedules work according to it's priority.

## Hierarchy

* **PrioritySchedulerLike**

## Index

### Properties

* [inContinuation](priorityschedulerlike.md#incontinuation)
* [now](priorityschedulerlike.md#now)

### Methods

* [schedule](priorityschedulerlike.md#schedule)

## Properties

###  inContinuation

• **inContinuation**: *boolean*

___

###  now

• **now**: *number*

The scheduler's current time in ms.

## Methods

###  schedule

▸ **schedule**(`continuation`: [SchedulerContinuationLike](schedulercontinuationlike.md), `priority`: number, `delay?`: undefined | number): *void*

Schedules a continuation to be executed on the scheduler.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`continuation` | [SchedulerContinuationLike](schedulercontinuationlike.md) | The SchedulerContinuation to be executed. |
`priority` | number | An optional priority that is used when prioritizing which work to execute next. The definition of the priority value along with it's default value is implementation specific.  |
`delay?` | undefined &#124; number | - |

**Returns:** *void*

A `DisposableLike` that can be disposed to cancel the scheduled work.
