[@reactive-js/scheduler](../README.md) › [AbstractSchedulerContinuation](abstractschedulercontinuation.md)

# Class: AbstractSchedulerContinuation

## Hierarchy

* **AbstractSchedulerContinuation**

## Implements

* [SchedulerContinuationLike](../interfaces/schedulercontinuationlike.md)

## Index

### Properties

* [add](abstractschedulercontinuation.md#add)
* [disposable](abstractschedulercontinuation.md#disposable)
* [dispose](abstractschedulercontinuation.md#dispose)

### Accessors

* [isDisposed](abstractschedulercontinuation.md#isdisposed)

### Methods

* [addListener](abstractschedulercontinuation.md#addlistener)
* [produce](abstractschedulercontinuation.md#abstract-produce)
* [removeListener](abstractschedulercontinuation.md#removelistener)
* [run](abstractschedulercontinuation.md#run)

## Properties

###  add

• **add**: *add* =  add

___

###  disposable

• **disposable**: *DisposableLike‹›* =  createDisposable(() => {
    if (!this.isActive) {
      this.listeners.clear();
    }
  })

___

###  dispose

• **dispose**: *dispose* =  dispose

## Accessors

###  isDisposed

• **get isDisposed**(): *boolean*

**Returns:** *boolean*

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
