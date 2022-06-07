[Reactive-JS](../README.md) / [observable](../modules/observable.md) / ObservableLike

# Interface: ObservableLike<T\>

The source of notifications which notifies a `ObserverLike` instance.

## Type parameters

Name |
------ |
`T` |

## Hierarchy

* **ObservableLike**

  ↳ [*MulticastObservableLike*](observable.multicastobservablelike.md)

## Index

### Properties

* [isSynchronous](observable.observablelike.md#issynchronous)

### Methods

* [observe](observable.observablelike.md#observe)

## Properties

### isSynchronous

• `Readonly` **isSynchronous**: *boolean*

## Methods

### observe

▸ **observe**(`observer`: [*ObserverLike*](observable.observerlike.md)<T\>): *void*

Subscribes the `ObserverLike` instance to the observable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`observer` | [*ObserverLike*](observable.observerlike.md)<T\> | The observer which should be notified by the observable source.    |

**Returns:** *void*
