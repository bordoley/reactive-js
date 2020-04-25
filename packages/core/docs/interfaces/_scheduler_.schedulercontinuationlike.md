[@reactive-js/core - v0.0.37](../README.md) › ["scheduler"](../modules/_scheduler_.md) › [SchedulerContinuationLike](_scheduler_.schedulercontinuationlike.md)

# Interface: SchedulerContinuationLike

A unit of work to be executed by a scheduler.

## Hierarchy

* [DisposableLike](_disposable_.disposablelike.md)

  ↳ **SchedulerContinuationLike**

  ↳ [VirtualTimeSchedulerLike](_scheduler_.virtualtimeschedulerlike.md)

## Implemented by

* [AbstractSchedulerContinuation](../classes/_scheduler_.abstractschedulercontinuation.md)

## Index

### Methods

* [addListener](_scheduler_.schedulercontinuationlike.md#addlistener)
* [removeListener](_scheduler_.schedulercontinuationlike.md#removelistener)
* [run](_scheduler_.schedulercontinuationlike.md#run)

## Methods

###  addListener

▸ **addListener**(`ev`: "onRunStatusChanged", `listener`: [SchedulerContinuationRunStatusChangedListenerLike](_scheduler_.schedulercontinuationrunstatuschangedlistenerlike.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`ev` | "onRunStatusChanged" |
`listener` | [SchedulerContinuationRunStatusChangedListenerLike](_scheduler_.schedulercontinuationrunstatuschangedlistenerlike.md) |

**Returns:** *void*

___

###  removeListener

▸ **removeListener**(`ev`: "onRunStatusChanged", `listener`: [SchedulerContinuationRunStatusChangedListenerLike](_scheduler_.schedulercontinuationrunstatuschangedlistenerlike.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`ev` | "onRunStatusChanged" |
`listener` | [SchedulerContinuationRunStatusChangedListenerLike](_scheduler_.schedulercontinuationrunstatuschangedlistenerlike.md) |

**Returns:** *void*

___

###  run

▸ **run**(`shouldYield?`: function): *number*

Work function to be invoked by the scheduler after the specified delay.

**Parameters:**

▪`Optional`  **shouldYield**: *function*

An optional function that should be periodically checked
when defined. If `shouldYield` returns true the continuation should return,
yielding control back to the scheduler.

▸ (): *boolean*

**Returns:** *number*
