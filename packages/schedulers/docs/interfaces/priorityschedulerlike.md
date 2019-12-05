[@reactive-js/schedulers](../README.md) › [PrioritySchedulerLike](priorityschedulerlike.md)

# Interface: PrioritySchedulerLike

## Hierarchy

* **PrioritySchedulerLike**

  ↳ [PrioritySchedulerResourceLike](priorityschedulerresourcelike.md)

## Index

### Properties

* [now](priorityschedulerlike.md#now)
* [shouldYield](priorityschedulerlike.md#shouldyield)

### Methods

* [schedule](priorityschedulerlike.md#schedule)

## Properties

###  now

• **now**: *number*

___

###  shouldYield

• **shouldYield**: *boolean*

## Methods

###  schedule

▸ **schedule**(`continuation`: function, `priority`: number, `delay?`: undefined | number): *DisposableLike*

**Parameters:**

▪ **continuation**: *function*

▸ (): *void*

▪ **priority**: *number*

▪`Optional`  **delay**: *undefined | number*

**Returns:** *DisposableLike*
