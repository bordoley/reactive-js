[@reactive-js/scheduler](../README.md) › [SchedulerContinuation](schedulercontinuation.md)

# Interface: SchedulerContinuation

A unit of work which executes on a scheduler. Implementations should
periodically check whether they should yield, and return
a SchedulerContinuationResult if there is additional
work to be performed.

## Hierarchy

* **SchedulerContinuation**

## Callable

▸ (`shouldYield`: function): *[SchedulerContinuationResult](schedulercontinuationresult.md) | void*

A unit of work which executes on a scheduler. Implementations should
periodically check whether they should yield, and return
a SchedulerContinuationResult if there is additional
work to be performed.

**Parameters:**

▪ **shouldYield**: *function*

▸ (): *boolean*

**Returns:** *[SchedulerContinuationResult](schedulercontinuationresult.md) | void*
