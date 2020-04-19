[@reactive-js/scheduler - v0.0.34](../README.md) › [SchedulerContinuationLike](schedulercontinuationlike.md)

# Interface: SchedulerContinuationLike

A unit of work to be executed by a scheduler.

## Hierarchy

* DisposableLike

  ↳ **SchedulerContinuationLike**

  ↳ [VirtualTimeSchedulerLike](virtualtimeschedulerlike.md)

## Implemented by

* [AbstractSchedulerContinuation](../classes/abstractschedulercontinuation.md)

## Index

### Methods

* [addListener](schedulercontinuationlike.md#addlistener)
* [removeListener](schedulercontinuationlike.md#removelistener)
* [run](schedulercontinuationlike.md#run)

## Methods

###  addListener

▸ **addListener**(`ev`: "onRunStatusChanged", `listener`: [SchedulerContinuationRunStatusChangedListenerLike](schedulercontinuationrunstatuschangedlistenerlike.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`ev` | "onRunStatusChanged" |
`listener` | [SchedulerContinuationRunStatusChangedListenerLike](schedulercontinuationrunstatuschangedlistenerlike.md) |

**Returns:** *void*

___

###  removeListener

▸ **removeListener**(`ev`: "onRunStatusChanged", `listener`: [SchedulerContinuationRunStatusChangedListenerLike](schedulercontinuationrunstatuschangedlistenerlike.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`ev` | "onRunStatusChanged" |
`listener` | [SchedulerContinuationRunStatusChangedListenerLike](schedulercontinuationrunstatuschangedlistenerlike.md) |

**Returns:** *void*

___

###  run

▸ **run**(`shouldYield?`: undefined | function): *number*

Work function to be invoked by the scheduler after the specified delay.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`shouldYield?` | undefined &#124; function | An optional function that should be periodically checked when defined. If `shouldYield` returns true the continuation should return, yielding control back to the scheduler.  |

**Returns:** *number*
