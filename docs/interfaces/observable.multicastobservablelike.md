[Reactive-JS](../README.md) / [observable](../modules/observable.md) / MulticastObservableLike

# Interface: MulticastObservableLike<T\>

An `ObservableLike` that shares a common subscription to an underlying observable source.

## Type parameters

Name |
------ |
`T` |

## Hierarchy

* [*ObservableLike*](observable.observablelike.md)<T\>

* [*DisposableLike*](disposable.disposablelike.md)

  ↳ **MulticastObservableLike**

  ↳↳ [*IOSinkAccumulatorLike*](io.iosinkaccumulatorlike.md)

  ↳↳ [*StreamLike*](observable.streamlike.md)

## Index

### Properties

* [error](observable.multicastobservablelike.md#error)
* [isDisposed](observable.multicastobservablelike.md#isdisposed)
* [isSynchronous](observable.multicastobservablelike.md#issynchronous)
* [observerCount](observable.multicastobservablelike.md#observercount)

### Methods

* [add](observable.multicastobservablelike.md#add)
* [dispose](observable.multicastobservablelike.md#dispose)
* [observe](observable.multicastobservablelike.md#observe)

## Properties

### error

• `Readonly` **error**: [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\>

The error the `DisposableLike` was disposed with if disposed.

Inherited from: [DisposableLike](disposable.disposablelike.md).[error](disposable.disposablelike.md#error)

___

### isDisposed

• `Readonly` **isDisposed**: *boolean*

`true` if this resource has been disposed, otherwise false

Inherited from: [DisposableLike](disposable.disposablelike.md).[isDisposed](disposable.disposablelike.md#isdisposed)

___

### isSynchronous

• `Readonly` **isSynchronous**: *boolean*

Inherited from: [ObservableLike](observable.observablelike.md).[isSynchronous](observable.observablelike.md#issynchronous)

___

### observerCount

• `Readonly` **observerCount**: *number*

The number of observers currently observing.

## Methods

### add

▸ **add**(`disposable`: [*DisposableOrTeardown*](../modules/disposable.md#disposableorteardown)): *void*

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters:

Name | Type |
------ | ------ |
`disposable` | [*DisposableOrTeardown*](../modules/disposable.md#disposableorteardown) |

**Returns:** *void*

`this`

Inherited from: [DisposableLike](disposable.disposablelike.md)

___

### dispose

▸ **dispose**(`error?`: [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\>): *void*

Dispose the resource. Must be idempotent.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`error?` | [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\> | An optional error that signals the resource is being disposed due to an error.    |

**Returns:** *void*

Inherited from: [DisposableLike](disposable.disposablelike.md)

___

### observe

▸ **observe**(`observer`: [*ObserverLike*](observable.observerlike.md)<T\>): *void*

Subscribes the `ObserverLike` instance to the observable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`observer` | [*ObserverLike*](observable.observerlike.md)<T\> | The observer which should be notified by the observable source.    |

**Returns:** *void*

Inherited from: [ObservableLike](observable.observablelike.md)
