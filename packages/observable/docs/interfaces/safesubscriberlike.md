[@reactive-js/observable - v0.0.35](../README.md) › [SafeSubscriberLike](safesubscriberlike.md)

# Interface: SafeSubscriberLike <**T**>

A variant of the `SubscriberLike` interface that can be used to safely notify
a backing subscriber from any context.

## Type parameters

▪ **T**

## Hierarchy

  ↳ [SubscriberLike](subscriberlike.md)‹T›

  ↳ **SafeSubscriberLike**

## Index

### Methods

* [dispatch](safesubscriberlike.md#dispatch)

## Methods

###  dispatch

▸ **dispatch**(`next`: T): *void*

Notifies the the subscriber of the next notification produced by the observable source.

Notifications are queued and scheduled to be dispatched to the underlying subscriber
on a `SchedulerContinuationLike` run on the underlying subscriber's `schedule` method.
Hence, it is safe to call `notifyNext` from any context.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`next` | T | The next notification value.  |

**Returns:** *void*
