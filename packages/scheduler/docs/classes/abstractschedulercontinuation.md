[@reactive-js/scheduler](../README.md) › [AbstractSchedulerContinuation](abstractschedulercontinuation.md)

# Class: AbstractSchedulerContinuation

## Hierarchy

* AbstractDisposable

  ↳ **AbstractSchedulerContinuation**

## Implements

* DisposableLike
* [SchedulerContinuationLike](../interfaces/schedulercontinuationlike.md)

## Index

### Constructors

* [constructor](abstractschedulercontinuation.md#constructor)

### Methods

* [addListener](abstractschedulercontinuation.md#addlistener)
* [produce](abstractschedulercontinuation.md#abstract-produce)
* [removeListener](abstractschedulercontinuation.md#removelistener)
* [run](abstractschedulercontinuation.md#run)

## Constructors

###  constructor

\+ **new AbstractSchedulerContinuation**(): *[AbstractSchedulerContinuation](abstractschedulercontinuation.md)*

**Returns:** *[AbstractSchedulerContinuation](abstractschedulercontinuation.md)*

## Methods

###  addListener

▸ **addListener**(`_ev`: "onRunStatusChanged", `listener`: [SchedulerContinuationRunStatusChangedListenerLike](../interfaces/schedulercontinuationrunstatuschangedlistenerlike.md)): *void*

*Implementation of [SchedulerContinuationLike](../interfaces/schedulercontinuationlike.md)*

**Parameters:**

Name | Type |
------ | ------ |
`_ev` | "onRunStatusChanged" |
`listener` | [SchedulerContinuationRunStatusChangedListenerLike](../interfaces/schedulercontinuationrunstatuschangedlistenerlike.md) |

**Returns:** *void*

___

### `Abstract` produce

▸ **produce**(`shouldYield?`: undefined | function): *number*

Return < 0 to signal done.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`shouldYield?` | undefined &#124; function |   |

**Returns:** *number*

___

###  removeListener

▸ **removeListener**(`_ev`: "onRunStatusChanged", `listener`: [SchedulerContinuationRunStatusChangedListenerLike](../interfaces/schedulercontinuationrunstatuschangedlistenerlike.md)): *void*

*Implementation of [SchedulerContinuationLike](../interfaces/schedulercontinuationlike.md)*

**Parameters:**

Name | Type |
------ | ------ |
`_ev` | "onRunStatusChanged" |
`listener` | [SchedulerContinuationRunStatusChangedListenerLike](../interfaces/schedulercontinuationrunstatuschangedlistenerlike.md) |

**Returns:** *void*

___

###  run

▸ **run**(`shouldYield?`: undefined | function): *number*

**Parameters:**

Name | Type |
------ | ------ |
`shouldYield?` | undefined &#124; function |

**Returns:** *number*
