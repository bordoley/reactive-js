[@reactive-js/scheduler](../README.md) › [SchedulerContinuationLike](schedulercontinuationlike.md)

# Interface: SchedulerContinuationLike

A unit of work to be executed by a scheduler.

## Hierarchy

* **SchedulerContinuationLike**

  ↳ [VirtualTimeSchedulerLike](virtualtimeschedulerlike.md)

## Index

### Properties

* [delay](schedulercontinuationlike.md#optional-delay)

### Methods

* [run](schedulercontinuationlike.md#run)

## Properties

### `Optional` delay

• **delay**? : *undefined | number*

An optional delay in ms that the scheduler should wait
before invoking the continuation's `run` function.

## Methods

###  run

▸ **run**(`shouldYield?`: undefined | function): *[SchedulerContinuationLike](schedulercontinuationlike.md) | void*

Work function to be invoked by the scheduler after the specified delay.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`shouldYield?` | undefined &#124; function | An optional function that should be periodically checked when defined. If `shouldYield` returns true the continuation should return, yielding control back to the scheduler.  |

**Returns:** *[SchedulerContinuationLike](schedulercontinuationlike.md) | void*

either a continuation to be scheduled in the future
or void if the work is done.
