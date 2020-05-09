[@reactive-js/core - v0.0.37](../README.md) › ["scheduler"](../modules/_scheduler_.md) › [PrioritySchedulerLike](_scheduler_.priorityschedulerlike.md)

# Interface: PrioritySchedulerLike

A scheduler which schedules work according to it's priority.

## Hierarchy

* **PrioritySchedulerLike**

## Index

### Properties

* [inContinuation](_scheduler_.priorityschedulerlike.md#incontinuation)
* [now](_scheduler_.priorityschedulerlike.md#now)

### Methods

* [schedule](_scheduler_.priorityschedulerlike.md#schedule)
* [shouldYield](_scheduler_.priorityschedulerlike.md#shouldyield)

## Properties

###  inContinuation

• **inContinuation**: *boolean*

___

###  now

• **now**: *number*

The scheduler's current time in ms.

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

___

###  shouldYield

▸ **shouldYield**(): *boolean*

**Returns:** *boolean*
