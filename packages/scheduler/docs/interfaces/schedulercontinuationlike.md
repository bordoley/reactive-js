[@reactive-js/scheduler](../README.md) › [SchedulerContinuationLike](schedulercontinuationlike.md)

# Interface: SchedulerContinuationLike

A unit of work which executes on a scheduler. Implementations should
periodically check whether they should yield, and return
a SchedulerContinuationResult if there is additional
work to be performed.

## Hierarchy

* **SchedulerContinuationLike**

## Index

### Methods

* [run](schedulercontinuationlike.md#run)

## Methods

###  run

▸ **run**(`shouldYield`: function): *[SchedulerContinuationResultLike](schedulercontinuationresultlike.md) | void*

**Parameters:**

▪ **shouldYield**: *function*

▸ (): *boolean*

**Returns:** *[SchedulerContinuationResultLike](schedulercontinuationresultlike.md) | void*
