[@reactive-js/rx](../README.md) › [SubscriberLike](subscriberlike.md)

# Interface: SubscriberLike <**T**>

The underlying mechanism for receiving and transforming notifications from an
observable source. The `SubscriberLike` interface composes the `SchedulerLike` and
`DisposableLike` interfaces into a single unified type, while adding the capability
to receive notifications.

## Type parameters

▪ **T**

## Hierarchy

* DisposableLike

* SchedulerLike

  ↳ **SubscriberLike**

  ↳ [SafeSubscriberLike](safesubscriberlike.md)

  ↳ [SubjectLike](subjectlike.md)

## Implemented by

* [AbstractDelegatingSubscriber](../classes/abstractdelegatingsubscriber.md)

## Index

### Methods

* [notify](subscriberlike.md#notify)

## Methods

###  notify

▸ **notify**(`next`: T): *void*

Notifies the the subscriber of the next notification produced by the observable source.

Note: The `notify` method must be called from within a `SchedulerContinuationLike`
scheduled using the subscriber's `schedule` method.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`next` | T | The next notification value.  |

**Returns:** *void*
