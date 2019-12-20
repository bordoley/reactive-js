[@reactive-js/rx](../README.md) › [SubscriberLike](subscriberlike.md)

# Interface: SubscriberLike <**T**>

A SubscriberLike represents the underlying mechanism for receiving notifications from
an ObservableLike. A SubscriberLike composes an observer with a
scheduler and disposable subscription. Subscribers may only be notified
after they have been subscribeed and must be notified from a SchedulerContinuation
executing on the subscriber's scheduler.

## Type parameters

▪ **T**

## Hierarchy

* SchedulerResourceLike

  ↳ **SubscriberLike**

## Implemented by

* [AbstractDelegatingSubscriber](../classes/abstractdelegatingsubscriber.md)

## Index

### Methods

* [complete](subscriberlike.md#complete)
* [next](subscriberlike.md#next)

## Methods

###  complete

▸ **complete**(`error?`: [ErrorLike](errorlike.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [ErrorLike](errorlike.md) |

**Returns:** *void*

___

###  next

▸ **next**(`data`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | T |

**Returns:** *void*
