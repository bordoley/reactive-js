[@reactive-js/scheduler](../README.md) › [SchedulerContinuationLike](schedulercontinuationlike.md)

# Interface: SchedulerContinuationLike

A unit of work which executes on a scheduler. Implementations should
periodically check whether they should yield, and return
a SchedulerContinuationResult if there is additional
work to be performed.

## Hierarchy

* **SchedulerContinuationLike**

## Callable

▸ (`shouldYield`: function): *[[SchedulerContinuationLike](schedulercontinuationlike.md), number | void] | undefined*

A unit of work which executes on a scheduler. Implementations should
periodically check whether they should yield, and return
a SchedulerContinuationResult if there is additional
work to be performed.

**Parameters:**

▪ **shouldYield**: *function*

▸ (): *boolean*

**Returns:** *[[SchedulerContinuationLike](schedulercontinuationlike.md), number | void] | undefined*
