[@reactive-js/core - v0.0.39](../README.md) › ["observable"](../modules/_observable_.md) › [ObservableLike](_observable_.observablelike.md)

# Interface: ObservableLike <**T**>

The source of notifications which notifies a `ObserverLike` instance.

## Type parameters

▪ **T**

## Hierarchy

* **ObservableLike**

  ↳ [MulticastObservableLike](_observable_.multicastobservablelike.md)

## Index

### Properties

* [isSynchronous](_observable_.observablelike.md#issynchronous)

### Methods

* [observe](_observable_.observablelike.md#observe)

## Properties

###  isSynchronous

• **isSynchronous**: *boolean*

## Methods

###  observe

▸ **observe**(`observer`: [ObserverLike](_observable_.observerlike.md)‹T›): *void*

Subscribes the `ObserverLike` instance to the observable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`observer` | [ObserverLike](_observable_.observerlike.md)‹T› | The observer which should be notified by the observable source.  |

**Returns:** *void*
