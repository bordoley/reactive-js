[@reactive-js/core - v0.0.42](../README.md) › ["scheduler"](../modules/_scheduler_.md) › [SchedulerContinuationLike](_scheduler_.schedulercontinuationlike.md)

# Interface: SchedulerContinuationLike

A unit of work to be executed by a scheduler.

## Hierarchy

* [DisposableLike](_disposable_.disposablelike.md)

  ↳ **SchedulerContinuationLike**

## Index

### Methods

* [addListener](_scheduler_.schedulercontinuationlike.md#addlistener)
* [continue](_scheduler_.schedulercontinuationlike.md#continue)
* [removeListener](_scheduler_.schedulercontinuationlike.md#removelistener)

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

###  continue

▸ **continue**(): *void*

Work function to be invoked by the scheduler after the specified delay.

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
