[@reactive-js/schedulers](../README.md) › [AbstractSchedulerResource](abstractschedulerresource.md)

# Class: AbstractSchedulerResource

## Hierarchy

* [AbstractScheduler](abstractscheduler.md)

  ↳ **AbstractSchedulerResource**

## Implements

* SchedulerLike
* SchedulerResourceLike

## Index

### Properties

* [now](abstractschedulerresource.md#abstract-now)

### Methods

* [scheduleCallback](abstractschedulerresource.md#protected-abstract-schedulecallback)
* [shouldCallbackYield](abstractschedulerresource.md#protected-abstract-shouldcallbackyield)

## Properties

### `Abstract` now

• **now**: *number*

*Inherited from [AbstractScheduler](abstractscheduler.md).[now](abstractscheduler.md#abstract-now)*

## Methods

### `Protected` `Abstract` scheduleCallback

▸ **scheduleCallback**(`callback`: function, `delay?`: undefined | number): *DisposableLike*

*Inherited from [AbstractScheduler](abstractscheduler.md).[scheduleCallback](abstractscheduler.md#protected-abstract-schedulecallback)*

**Parameters:**

▪ **callback**: *function*

▸ (): *void*

▪`Optional`  **delay**: *undefined | number*

**Returns:** *DisposableLike*

___

### `Protected` `Abstract` shouldCallbackYield

▸ **shouldCallbackYield**(`startTime`: number): *boolean*

*Inherited from [AbstractScheduler](abstractscheduler.md).[shouldCallbackYield](abstractscheduler.md#protected-abstract-shouldcallbackyield)*

**Parameters:**

Name | Type |
------ | ------ |
`startTime` | number |

**Returns:** *boolean*
