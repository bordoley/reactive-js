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

* [disposable](abstractschedulerresource.md#disposable)
* [now](abstractschedulerresource.md#abstract-now)

### Accessors

* [shouldYield](abstractschedulerresource.md#protected-shouldyield)

### Methods

* [scheduleCallback](abstractschedulerresource.md#protected-abstract-schedulecallback)

## Properties

###  disposable

• **disposable**: *DisposableLike‹›* =  createDisposable()

___

### `Abstract` now

• **now**: *number*

*Inherited from [AbstractScheduler](abstractscheduler.md).[now](abstractscheduler.md#abstract-now)*

## Accessors

### `Protected` shouldYield

• **get shouldYield**(): *function | undefined*

*Inherited from [AbstractScheduler](abstractscheduler.md).[shouldYield](abstractscheduler.md#protected-shouldyield)*

**Returns:** *function | undefined*

## Methods

### `Protected` `Abstract` scheduleCallback

▸ **scheduleCallback**(`callback`: function, `delay?`: undefined | number): *DisposableLike*

*Inherited from [AbstractScheduler](abstractscheduler.md).[scheduleCallback](abstractscheduler.md#protected-abstract-schedulecallback)*

**Parameters:**

▪ **callback**: *function*

▸ (): *void*

▪`Optional`  **delay**: *undefined | number*

**Returns:** *DisposableLike*
