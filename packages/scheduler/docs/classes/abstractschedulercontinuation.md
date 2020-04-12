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

### Accessors

* [error](abstractschedulercontinuation.md#error)
* [isDisposed](abstractschedulercontinuation.md#isdisposed)

### Methods

* [add](abstractschedulercontinuation.md#add)
* [addListener](abstractschedulercontinuation.md#addlistener)
* [dispose](abstractschedulercontinuation.md#dispose)
* [produce](abstractschedulercontinuation.md#abstract-produce)
* [removeListener](abstractschedulercontinuation.md#removelistener)
* [run](abstractschedulercontinuation.md#run)

## Constructors

###  constructor

\+ **new AbstractSchedulerContinuation**(): *[AbstractSchedulerContinuation](abstractschedulercontinuation.md)*

**Returns:** *[AbstractSchedulerContinuation](abstractschedulercontinuation.md)*

## Accessors

###  error

• **get error**(): *ErrorLike | undefined*

*Inherited from void*

**Returns:** *ErrorLike | undefined*

___

###  isDisposed

• **get isDisposed**(): *boolean*

*Inherited from void*

**Returns:** *boolean*

## Methods

###  add

▸ **add**(`disposable`: DisposableOrTeardown): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`disposable` | DisposableOrTeardown |

**Returns:** *this*

___

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

###  dispose

▸ **dispose**(`error?`: ErrorLike): *void*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | ErrorLike |

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
