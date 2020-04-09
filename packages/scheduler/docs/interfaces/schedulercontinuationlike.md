[@reactive-js/scheduler](../README.md) › [SchedulerContinuationLike](schedulercontinuationlike.md)

# Interface: SchedulerContinuationLike

A unit of work to be executed by a scheduler.

## Hierarchy

* DisposableLike

  ↳ **SchedulerContinuationLike**

  ↳ [VirtualTimeSchedulerLike](virtualtimeschedulerlike.md)

## Index

### Methods

* [run](schedulercontinuationlike.md#run)

## Methods

###  run

▸ **run**(`shouldYield?`: undefined | function): *number*

Work function to be invoked by the scheduler after the specified delay.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`shouldYield?` | undefined &#124; function | An optional function that should be periodically checked when defined. If `shouldYield` returns true the continuation should return, yielding control back to the scheduler.  |

**Returns:** *number*
