[@reactive-js/schedulers](../README.md) › [SchedulerHost](schedulerhost.md)

# Interface: SchedulerHost

Interface used by Scheduler implementations using the 'schedulerMixin' functions

## Hierarchy

* SchedulerLike

  ↳ **SchedulerHost**

## Index

### Properties

* [shouldYield](schedulerhost.md#shouldyield)

### Methods

* [scheduleCallback](schedulerhost.md#schedulecallback)

## Properties

###  shouldYield

• **shouldYield**: *function | undefined*

Platform specific shouldYield function passed to continuations when they are run.

## Methods

###  scheduleCallback

▸ **scheduleCallback**(`callback`: function, `delay?`: undefined | number): *DisposableLike*

Schedules a callback with the specified delay to be executed in the future.

**Parameters:**

▪ **callback**: *function*

The callback function to be executed.

▸ (): *void*

▪`Optional`  **delay**: *undefined | number*

An optional delay in ms that the scheduler should wait
before invoking the callback function.

**Returns:** *DisposableLike*
