[@reactive-js/schedulers](../README.md) › [PrioritySchedulerLike](priorityschedulerlike.md)

# Interface: PrioritySchedulerLike

A scheduler which schedules work according to it's priority.

## Hierarchy

* **PrioritySchedulerLike**

  ↳ [PrioritySchedulerResourceLike](priorityschedulerresourcelike.md)

## Index

### Properties

* [now](priorityschedulerlike.md#now)

### Methods

* [schedule](priorityschedulerlike.md#schedule)

## Properties

###  now

• **now**: *number*

The scheduler's current time in ms.

## Methods

###  schedule

▸ **schedule**(`continuation`: SchedulerContinuationLike, `priority`: number): *void*

Schedules a continuation to be executed on the scheduler.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`continuation` | SchedulerContinuationLike | The SchedulerContinuation to be executed. |
`priority` | number | An optional priority that is used when prioritizing which work to execute next. The definition of the priority value along with it's default value is implementation specific.  |

**Returns:** *void*

A `DisposableLike` that can be disposed to cancel the scheduled work.
