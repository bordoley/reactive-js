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

▸ **schedule**(`continuation`: [SchedulerContinuationLike](_scheduler_.schedulercontinuationlike.md), `priority`: number, `delay?`: number): *void*

Schedules a continuation to be executed on the scheduler.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`continuation` | [SchedulerContinuationLike](_scheduler_.schedulercontinuationlike.md) | The SchedulerContinuation to be executed. |
`priority` | number | An optional priority that is used when prioritizing which work to execute next. The definition of the priority value along with it's default value is implementation specific.  |
`delay?` | number | - |

**Returns:** *void*

A `DisposableLike` that can be disposed to cancel the scheduled work.

___

###  shouldYield

▸ **shouldYield**(): *boolean*

**Returns:** *boolean*
