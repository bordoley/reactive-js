[@reactive-js/schedulers](../README.md) › [SchedulerHost](schedulerhost.md)

# Interface: SchedulerHost

Interface used by Scheduler implementations using the 'schedulerMixin' functions

## Hierarchy

* SchedulerLike

  ↳ **SchedulerHost**

## Index

### Properties

* [now](schedulerhost.md#now)
* [shouldYield](schedulerhost.md#shouldyield)

### Methods

* [schedule](schedulerhost.md#schedule)
* [scheduleCallback](schedulerhost.md#schedulecallback)

## Properties

###  now

• **now**: *number*

*Inherited from void*

___

###  shouldYield

• **shouldYield**: *function | undefined*

Platform specific shouldYield function passed to continuations when they are run.

## Methods

###  schedule

▸ **schedule**(`continuation`: SchedulerContinuationLike): *DisposableLike*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`continuation` | SchedulerContinuationLike |

**Returns:** *DisposableLike*

___

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
