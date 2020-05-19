[@reactive-js/core - v0.0.38](../README.md) › ["scheduler"](../modules/_scheduler_.md) › [PrioritySchedulerLike](_scheduler_.priorityschedulerlike.md)

# Interface: PrioritySchedulerLike

A scheduler which schedules work according to it's priority.

## Hierarchy

* [YieldableLike](_scheduler_.yieldablelike.md)

  ↳ **PrioritySchedulerLike**

## Index

### Methods

* [schedule](_scheduler_.priorityschedulerlike.md#schedule)

## Methods

###  schedule

▸ **schedule**(`continuation`: [SchedulerContinuationLike](_scheduler_.schedulercontinuationlike.md), `options`: object): *void*

Schedules a continuation to be executed on the scheduler.

**Parameters:**

▪ **continuation**: *[SchedulerContinuationLike](_scheduler_.schedulercontinuationlike.md)*

The SchedulerContinuation to be executed.

▪ **options**: *object*

Name | Type |
------ | ------ |
`delay?` | number |
`priority` | number |

**Returns:** *void*

A `DisposableLike` that can be disposed to cancel the scheduled work.
