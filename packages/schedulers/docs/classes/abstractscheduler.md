[@reactive-js/schedulers](../README.md) › [AbstractScheduler](abstractscheduler.md)

# Class: AbstractScheduler

## Hierarchy

* **AbstractScheduler**

  ↳ [AbstractSchedulerResource](abstractschedulerresource.md)

## Implements

* SchedulerLike

## Index

### Properties

* [now](abstractscheduler.md#abstract-now)

### Accessors

* [shouldYield](abstractscheduler.md#protected-shouldyield)

### Methods

* [scheduleCallback](abstractscheduler.md#protected-abstract-schedulecallback)

## Properties

### `Abstract` now

• **now**: *number*

## Accessors

### `Protected` shouldYield

• **get shouldYield**(): *function | undefined*

**Returns:** *function | undefined*

## Methods

### `Protected` `Abstract` scheduleCallback

▸ **scheduleCallback**(`callback`: function, `delay?`: undefined | number): *DisposableLike*

**Parameters:**

▪ **callback**: *function*

▸ (): *void*

▪`Optional`  **delay**: *undefined | number*

**Returns:** *DisposableLike*
