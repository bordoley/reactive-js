[@reactive-js/rx](../README.md) › [SubscriberLike](subscriberlike.md)

# Interface: SubscriberLike <**T**>

A SubscriberLike represents the underlying mechanism for receiving notifications from
an ObservableLike. A SubscriberLike composes an observer with a
scheduler and disposable subscription. Subscribers may only be notified
after they have been subscribeed and must be notified from a SchedulerContinuation
executing on the subscriber's scheduler. Not doing so is a runtime error and will
result in errors being throw in DEV mode (these checks are disabled in production mode
for performance reasons).

## Type parameters

▪ **T**

## Hierarchy

* [ObserverLike](observerlike.md)‹T›

* DisposableLike

* SchedulerResourceLike

  ↳ **SubscriberLike**

## Implemented by

* [AbstractDelegatingSubscriber](../classes/abstractdelegatingsubscriber.md)

## Index

### Properties

* [isSubscribed](subscriberlike.md#issubscribed)

## Properties

###  isSubscribed

• **isSubscribed**: *boolean*

Returns true if the subscriber has been subscribed to an observable.
