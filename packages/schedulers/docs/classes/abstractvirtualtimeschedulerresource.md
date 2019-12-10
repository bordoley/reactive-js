[@reactive-js/schedulers](../README.md) › [AbstractVirtualTimeSchedulerResource](abstractvirtualtimeschedulerresource.md)

# Class: AbstractVirtualTimeSchedulerResource

## Hierarchy

  ↳ [AbstractSchedulerResource](abstractschedulerresource.md)

  ↳ **AbstractVirtualTimeSchedulerResource**

## Implements

* SchedulerLike
* SchedulerResourceLike

## Index

### Properties

* [now](abstractvirtualtimeschedulerresource.md#abstract-now)

### Methods

* [next](abstractvirtualtimeschedulerresource.md#next)
* [return](abstractvirtualtimeschedulerresource.md#return)
* [scheduleCallback](abstractvirtualtimeschedulerresource.md#protected-abstract-schedulecallback)
* [shouldCallbackYield](abstractvirtualtimeschedulerresource.md#protected-abstract-shouldcallbackyield)
* [step](abstractvirtualtimeschedulerresource.md#abstract-step)
* [throw](abstractvirtualtimeschedulerresource.md#throw)

## Properties

### `Abstract` now

• **now**: *number*

*Inherited from [AbstractScheduler](abstractscheduler.md).[now](abstractscheduler.md#abstract-now)*

## Methods

###  next

▸ **next**(): *IteratorResult‹void›*

**Returns:** *IteratorResult‹void›*

___

###  return

▸ **return**(): *IteratorResult‹void›*

**Returns:** *IteratorResult‹void›*

___

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

___

### `Abstract` step

▸ **step**(): *boolean*

**Returns:** *boolean*

___

###  throw

▸ **throw**(`e?`: any): *IteratorResult‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`e?` | any |

**Returns:** *IteratorResult‹void›*
