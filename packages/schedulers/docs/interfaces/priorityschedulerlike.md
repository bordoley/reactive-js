[@reactive-js/schedulers](../README.md) › [PrioritySchedulerLike](priorityschedulerlike.md)

# Interface: PrioritySchedulerLike

A scheduler which schedules work according to it's priority.

## Hierarchy

* SchedulerLike

  ↳ **PrioritySchedulerLike**

  ↳ [PrioritySchedulerResourceLike](priorityschedulerresourcelike.md)

## Index

### Methods

* [schedule](priorityschedulerlike.md#schedule)

## Methods

###  schedule

▸ **schedule**(`continuation`: SchedulerContinuationLike, `priority?`: undefined | number): *DisposableLike*

*Overrides void*

Schedules a continuation to be executed on the scheduler.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`continuation` | SchedulerContinuationLike | The SchedulerContinuation to be executed. |
`priority?` | undefined &#124; number | An optional priority that is used when prioritizing which work to execute next. The definition of the priority value along with it's default value is implementation specific.  |

**Returns:** *DisposableLike*

A `DisposableLike` that can be disposed to cancel the scheduled work.
