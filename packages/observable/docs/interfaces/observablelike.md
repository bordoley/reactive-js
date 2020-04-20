[@reactive-js/observable - v0.0.35](../README.md) › [ObservableLike](observablelike.md)

# Interface: ObservableLike <**T**>

The source of notifications which notifies a `SubscriberLike` instance.

## Type parameters

▪ **T**

## Hierarchy

* **ObservableLike**

  ↳ [MulticastObservableLike](multicastobservablelike.md)

## Index

### Properties

* [isSynchronous](observablelike.md#issynchronous)

### Methods

* [subscribe](observablelike.md#subscribe)

## Properties

###  isSynchronous

• **isSynchronous**: *boolean*

## Methods

###  subscribe

▸ **subscribe**(`subscriber`: [SubscriberLike](subscriberlike.md)‹T›): *void*

Subscribes the `SubscriberLike` instance to the observable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`subscriber` | [SubscriberLike](subscriberlike.md)‹T› | The subscriber which should be notified by the observable source.  |

**Returns:** *void*
