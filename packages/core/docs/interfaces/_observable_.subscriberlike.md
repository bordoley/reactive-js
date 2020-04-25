[@reactive-js/core - v0.0.37](../README.md) › ["observable"](../modules/_observable_.md) › [SubscriberLike](_observable_.subscriberlike.md)

# Interface: SubscriberLike <**T**>

The underlying mechanism for receiving and transforming notifications from an
observable source. The `SubscriberLike` interface composes the `SchedulerLike` and
`DisposableLike` interfaces into a single unified type, while adding the capability
to receive notifications.

## Type parameters

▪ **T**

## Hierarchy

* [DisposableLike](_disposable_.disposablelike.md)

* [SchedulerLike](_scheduler_.schedulerlike.md)

  ↳ **SubscriberLike**

  ↳ [SafeSubscriberLike](_observable_.safesubscriberlike.md)

## Implemented by

* [AbstractDelegatingSubscriber](../classes/_observable_.abstractdelegatingsubscriber.md)

## Index

### Methods

* [notify](_observable_.subscriberlike.md#notify)

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
