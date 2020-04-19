[@reactive-js/scheduler - v0.0.34](../README.md) › [CallbackSchedulerLike](callbackschedulerlike.md)

# Interface: CallbackSchedulerLike

Interface used by Scheduler implementations using the 'schedulerMixin' functions

## Hierarchy

* [SchedulerLike](schedulerlike.md)

  ↳ **CallbackSchedulerLike**

## Index

### Properties

* [inContinuation](callbackschedulerlike.md#incontinuation)

### Methods

* [scheduleCallback](callbackschedulerlike.md#schedulecallback)

## Properties

###  inContinuation

• **inContinuation**: *boolean*

*Overrides [SchedulerLike](schedulerlike.md).[inContinuation](schedulerlike.md#incontinuation)*

## Methods

###  scheduleCallback

▸ **scheduleCallback**(`callback`: function, `delay`: number): *DisposableLike*

Schedules a callback with the specified delay to be executed in the future.

**Parameters:**

▪ **callback**: *function*

The callback function to be executed.

▸ (`shouldYield`: Option‹function›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`shouldYield` | Option‹function› |

▪ **delay**: *number*

An optional delay in ms that the scheduler should wait
before invoking the callback function.

**Returns:** *DisposableLike*
