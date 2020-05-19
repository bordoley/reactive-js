[@reactive-js/core - v0.0.40](../README.md) › ["scheduler"](../modules/_scheduler_.md) › [PrioritySchedulerLike](_scheduler_.priorityschedulerlike.md)

# Interface: PrioritySchedulerLike

A scheduler which schedules work according to it's priority.

## Hierarchy

* **PrioritySchedulerLike**

## Index

### Properties

* [inContinuation](_scheduler_.priorityschedulerlike.md#incontinuation)
* [now](_scheduler_.priorityschedulerlike.md#now)
* [shouldYield](_scheduler_.priorityschedulerlike.md#shouldyield)

### Methods

* [schedule](_scheduler_.priorityschedulerlike.md#schedule)

## Properties

###  inContinuation

• **inContinuation**: *boolean*

___

###  now

• **now**: *number*

___

###  shouldYield

• **shouldYield**: *boolean*

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
