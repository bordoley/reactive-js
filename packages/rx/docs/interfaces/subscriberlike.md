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

  ↳ [SubjectLike](subjectlike.md)

## Implemented by

* [AbstractDelegatingSubscriber](../classes/abstractdelegatingsubscriber.md)

## Index

### Methods

* [notifyNext](subscriberlike.md#notifynext)

## Methods

###  notifyNext

▸ **notifyNext**(`data`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`data` | T |

**Returns:** *void*
