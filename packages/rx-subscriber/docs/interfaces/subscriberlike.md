[@reactive-js/rx-subscriber](../README.md) › [SubscriberLike](subscriberlike.md)

# Interface: SubscriberLike <**T**>

A SubscriberLike represents the underlying mechanism for receiving notifications from
an ObservableLike. A SubscriberLike composes an observer with a
scheduler and disposable subscription. Subscribers may only be notified
after they have been connected and must be notified from a SchedulerContinuation
executing on the subscriber's scheduler. Not doing so is a runtime error and will
result in errors being throw in DEV mode (these checks are disabled in production mode
for performance reasons).

## Type parameters

▪ **T**

## Hierarchy

* ObserverLike‹T›

* DisposableLike

* SchedulerResourceLike

  ↳ **SubscriberLike**

  ↳ [ConnectableSubscriberLike](connectablesubscriberlike.md)

## Implemented by

* [DelegatingSubscriber](../classes/delegatingsubscriber.md)

## Index

### Properties

* [isConnected](subscriberlike.md#isconnected)

## Properties

###  isConnected

• **isConnected**: *boolean*

Returns true if the subscriber is connected.
