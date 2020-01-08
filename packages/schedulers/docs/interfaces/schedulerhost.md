[@reactive-js/schedulers](../README.md) › [SchedulerHost](schedulerhost.md)

# Interface: SchedulerHost

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

**Parameters:**

▪ **callback**: *function*

▸ (): *void*

▪`Optional`  **delay**: *undefined | number*

**Returns:** *DisposableLike*
