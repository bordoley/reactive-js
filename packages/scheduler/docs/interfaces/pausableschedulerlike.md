[@reactive-js/scheduler - v0.0.37](../README.md) › [PausableSchedulerLike](pausableschedulerlike.md)

# Interface: PausableSchedulerLike

## Hierarchy

* [SchedulerLike](schedulerlike.md)

  ↳ **PausableSchedulerLike**

## Index

### Properties

* [inContinuation](pausableschedulerlike.md#incontinuation)
* [now](pausableschedulerlike.md#now)

### Methods

* [pause](pausableschedulerlike.md#pause)
* [resume](pausableschedulerlike.md#resume)
* [schedule](pausableschedulerlike.md#schedule)

## Properties

###  inContinuation

• **inContinuation**: *boolean*

*Inherited from [SchedulerLike](schedulerlike.md).[inContinuation](schedulerlike.md#incontinuation)*

___

###  now

• **now**: *number*

*Inherited from [SchedulerLike](schedulerlike.md).[now](schedulerlike.md#now)*

The scheduler's current time in ms.

## Methods

###  pause

▸ **pause**(): *void*

**Returns:** *void*

___

###  resume

▸ **resume**(): *void*

**Returns:** *void*

___

###  schedule

▸ **schedule**(`continuation`: [SchedulerContinuationLike](schedulercontinuationlike.md), `delay?`: undefined | number): *void*

*Inherited from [SchedulerLike](schedulerlike.md).[schedule](schedulerlike.md#schedule)*

Schedules a continuation to be executed on the scheduler.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`continuation` | [SchedulerContinuationLike](schedulercontinuationlike.md) | The SchedulerContinuation to be executed.  |
`delay?` | undefined &#124; number | - |

**Returns:** *void*
