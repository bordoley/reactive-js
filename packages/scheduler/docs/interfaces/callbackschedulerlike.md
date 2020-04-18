[@reactive-js/scheduler - v0.0.33](../README.md) › [CallbackSchedulerLike](callbackschedulerlike.md)

# Interface: CallbackSchedulerLike

Interface used by Scheduler implementations using the 'schedulerMixin' functions

## Hierarchy

* [SchedulerLike](schedulerlike.md)

  ↳ **CallbackSchedulerLike**

## Index

### Properties

* [inContinuation](callbackschedulerlike.md#incontinuation)
* [shouldYield](callbackschedulerlike.md#shouldyield)

### Methods

* [scheduleCallback](callbackschedulerlike.md#schedulecallback)

## Properties

###  inContinuation

• **inContinuation**: *boolean*

*Overrides [SchedulerLike](schedulerlike.md).[inContinuation](schedulerlike.md#incontinuation)*

___

###  shouldYield

• **shouldYield**: *Option‹function›*

Platform specific shouldYield function passed to continuations when they are run.

## Methods

###  scheduleCallback

▸ **scheduleCallback**(`callback`: function, `delay`: number): *DisposableLike*

Schedules a callback with the specified delay to be executed in the future.

**Parameters:**

▪ **callback**: *function*

The callback function to be executed.

▸ (): *void*

▪ **delay**: *number*

An optional delay in ms that the scheduler should wait
before invoking the callback function.

**Returns:** *DisposableLike*
