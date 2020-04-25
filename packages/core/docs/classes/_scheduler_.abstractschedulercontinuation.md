[@reactive-js/core - v0.0.37](../README.md) › ["scheduler"](../modules/_scheduler_.md) › [AbstractSchedulerContinuation](_scheduler_.abstractschedulercontinuation.md)

# Class: AbstractSchedulerContinuation

## Hierarchy

* [AbstractDisposable](_disposable_.abstractdisposable.md)

  ↳ **AbstractSchedulerContinuation**

## Implements

* [DisposableLike](../interfaces/_disposable_.disposablelike.md)
* [SchedulerContinuationLike](../interfaces/_scheduler_.schedulercontinuationlike.md)

## Index

### Constructors

* [constructor](_scheduler_.abstractschedulercontinuation.md#constructor)

### Methods

* [addListener](_scheduler_.abstractschedulercontinuation.md#addlistener)
* [produce](_scheduler_.abstractschedulercontinuation.md#abstract-produce)
* [removeListener](_scheduler_.abstractschedulercontinuation.md#removelistener)
* [run](_scheduler_.abstractschedulercontinuation.md#run)

## Constructors

###  constructor

\+ **new AbstractSchedulerContinuation**(): *[AbstractSchedulerContinuation](_scheduler_.abstractschedulercontinuation.md)*

**Returns:** *[AbstractSchedulerContinuation](_scheduler_.abstractschedulercontinuation.md)*

## Methods

###  addListener

▸ **addListener**(`_ev`: "onRunStatusChanged", `listener`: [SchedulerContinuationRunStatusChangedListenerLike](../interfaces/_scheduler_.schedulercontinuationrunstatuschangedlistenerlike.md)): *void*

*Implementation of [SchedulerContinuationLike](../interfaces/_scheduler_.schedulercontinuationlike.md)*

**Parameters:**

Name | Type |
------ | ------ |
`_ev` | "onRunStatusChanged" |
`listener` | [SchedulerContinuationRunStatusChangedListenerLike](../interfaces/_scheduler_.schedulercontinuationrunstatuschangedlistenerlike.md) |

**Returns:** *void*

___

### `Abstract` produce

▸ **produce**(`shouldYield?`: function): *number*

Return < 0 to signal done.

**Parameters:**

▪`Optional`  **shouldYield**: *function*

▸ (): *boolean*

**Returns:** *number*

___

###  removeListener

▸ **removeListener**(`_ev`: "onRunStatusChanged", `listener`: [SchedulerContinuationRunStatusChangedListenerLike](../interfaces/_scheduler_.schedulercontinuationrunstatuschangedlistenerlike.md)): *void*

*Implementation of [SchedulerContinuationLike](../interfaces/_scheduler_.schedulercontinuationlike.md)*

**Parameters:**

Name | Type |
------ | ------ |
`_ev` | "onRunStatusChanged" |
`listener` | [SchedulerContinuationRunStatusChangedListenerLike](../interfaces/_scheduler_.schedulercontinuationrunstatuschangedlistenerlike.md) |

**Returns:** *void*

___

###  run

▸ **run**(`shouldYield?`: function): *number*

**Parameters:**

▪`Optional`  **shouldYield**: *function*

▸ (): *boolean*

**Returns:** *number*
