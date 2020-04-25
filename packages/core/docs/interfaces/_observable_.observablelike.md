[@reactive-js/core - v0.0.37](../README.md) › ["observable"](../modules/_observable_.md) › [ObservableLike](_observable_.observablelike.md)

# Interface: ObservableLike <**T**>

The source of notifications which notifies a `SubscriberLike` instance.

## Type parameters

▪ **T**

## Hierarchy

* **ObservableLike**

  ↳ [MulticastObservableLike](_observable_.multicastobservablelike.md)

## Index

### Properties

* [isSynchronous](_observable_.observablelike.md#issynchronous)

### Methods

* [subscribe](_observable_.observablelike.md#subscribe)

## Properties

###  isSynchronous

• **isSynchronous**: *boolean*

## Methods

###  subscribe

▸ **subscribe**(`subscriber`: [SubscriberLike](_observable_.subscriberlike.md)‹T›): *void*

Subscribes the `SubscriberLike` instance to the observable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`subscriber` | [SubscriberLike](_observable_.subscriberlike.md)‹T› | The subscriber which should be notified by the observable source.  |

**Returns:** *void*
