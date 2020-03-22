[@reactive-js/schedulers](../README.md) › [CallbackScheduler](callbackscheduler.md)

# Interface: CallbackScheduler

Interface used by Scheduler implementations using the 'schedulerMixin' functions

## Hierarchy

* SchedulerLike

  ↳ **CallbackScheduler**

## Index

### Properties

* [shouldYield](callbackscheduler.md#shouldyield)

### Methods

* [scheduleCallback](callbackscheduler.md#schedulecallback)

## Properties

###  shouldYield

• **shouldYield**: *function | undefined*

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
