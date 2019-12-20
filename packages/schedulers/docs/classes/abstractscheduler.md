[@reactive-js/schedulers](../README.md) › [AbstractScheduler](abstractscheduler.md)

# Class: AbstractScheduler

## Hierarchy

* **AbstractScheduler**

  ↳ [AbstractSchedulerResource](abstractschedulerresource.md)

## Implements

* SchedulerLike

## Index

### Properties

* [inScheduledContinuation](abstractscheduler.md#inscheduledcontinuation)
* [now](abstractscheduler.md#abstract-now)

### Methods

* [scheduleCallback](abstractscheduler.md#protected-abstract-schedulecallback)
* [shouldCallbackYield](abstractscheduler.md#protected-abstract-shouldcallbackyield)

## Properties

###  inScheduledContinuation

• **inScheduledContinuation**: *boolean* = false

___

### `Abstract` now

• **now**: *number*

## Methods

### `Protected` `Abstract` scheduleCallback

▸ **scheduleCallback**(`callback`: function, `delay?`: undefined | number): *DisposableLike*

**Parameters:**

▪ **callback**: *function*

▸ (): *void*

▪`Optional`  **delay**: *undefined | number*

**Returns:** *DisposableLike*

___

### `Protected` `Abstract` shouldCallbackYield

▸ **shouldCallbackYield**(`startTime`: number): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`startTime` | number |

**Returns:** *boolean*
