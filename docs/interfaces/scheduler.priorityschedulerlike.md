[Reactive-JS](../README.md) / [scheduler](../modules/scheduler.md) / PrioritySchedulerLike

# Interface: PrioritySchedulerLike

A scheduler which schedules work according to it's priority.

## Hierarchy

* **PrioritySchedulerLike**

## Index

### Properties

* [inContinuation](scheduler.priorityschedulerlike.md#incontinuation)
* [now](scheduler.priorityschedulerlike.md#now)
* [shouldYield](scheduler.priorityschedulerlike.md#shouldyield)

### Methods

* [schedule](scheduler.priorityschedulerlike.md#schedule)

## Properties

### inContinuation

• `Readonly` **inContinuation**: *boolean*

___

### now

• `Readonly` **now**: *number*

___

### shouldYield

• `Readonly` **shouldYield**: *boolean*

## Methods

### schedule

▸ **schedule**(`continuation`: [*SchedulerContinuationLike*](scheduler.schedulercontinuationlike.md), `options`: { `delay?`: *undefined* \| *number* ; `priority`: *number*  }): *void*

Schedules a continuation to be executed on the scheduler.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`continuation` | [*SchedulerContinuationLike*](scheduler.schedulercontinuationlike.md) | The SchedulerContinuation to be executed.   |
`options` | { `delay?`: *undefined* \| *number* ; `priority`: *number*  } | - |

**Returns:** *void*

A `DisposableLike` that can be disposed to cancel the scheduled work.
