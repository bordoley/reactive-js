[Reactive-JS](../README.md) / [observable](../modules/observable.md) / StreamLike

# Interface: StreamLike<TReq, T\>

Represents a duplex stream

## Type parameters

Name |
------ |
`TReq` |
`T` |

## Hierarchy

* [*DispatcherLike*](observable.dispatcherlike.md)<TReq\>

* [*MulticastObservableLike*](observable.multicastobservablelike.md)<T\>

  ↳ **StreamLike**

  ↳↳ [*SubjectLike*](observable.subjectlike.md)

## Index

### Properties

* [error](observable.streamlike.md#error)
* [isDisposed](observable.streamlike.md#isdisposed)
* [isSynchronous](observable.streamlike.md#issynchronous)
* [observerCount](observable.streamlike.md#observercount)

### Methods

* [add](observable.streamlike.md#add)
* [dispatch](observable.streamlike.md#dispatch)
* [dispose](observable.streamlike.md#dispose)
* [observe](observable.streamlike.md#observe)

## Properties

### error

• `Readonly` **error**: [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\>

The error the `DisposableLike` was disposed with if disposed.

Inherited from: [MulticastObservableLike](observable.multicastobservablelike.md).[error](observable.multicastobservablelike.md#error)

___

### isDisposed

• `Readonly` **isDisposed**: *boolean*

`true` if this resource has been disposed, otherwise false

Inherited from: [MulticastObservableLike](observable.multicastobservablelike.md).[isDisposed](observable.multicastobservablelike.md#isdisposed)

___

### isSynchronous

• `Readonly` **isSynchronous**: *boolean*

Inherited from: [MulticastObservableLike](observable.multicastobservablelike.md).[isSynchronous](observable.multicastobservablelike.md#issynchronous)

___

### observerCount

• `Readonly` **observerCount**: *number*

The number of observers currently observing.

Inherited from: [MulticastObservableLike](observable.multicastobservablelike.md).[observerCount](observable.multicastobservablelike.md#observercount)

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

Inherited from: [MulticastObservableLike](observable.multicastobservablelike.md)

___

### dispatch

▸ **dispatch**(`req`: TReq): *void*

Dispatches the next request

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`req` | TReq |     |

**Returns:** *void*

Inherited from: [DispatcherLike](observable.dispatcherlike.md)

___

### dispose

▸ **dispose**(`error?`: [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\>): *void*

Dispose the resource. Must be idempotent.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`error?` | [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\> | An optional error that signals the resource is being disposed due to an error.    |

**Returns:** *void*

Inherited from: [MulticastObservableLike](observable.multicastobservablelike.md)

___

### observe

▸ **observe**(`observer`: [*ObserverLike*](observable.observerlike.md)<T\>): *void*

Subscribes the `ObserverLike` instance to the observable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`observer` | [*ObserverLike*](observable.observerlike.md)<T\> | The observer which should be notified by the observable source.    |

**Returns:** *void*

Inherited from: [MulticastObservableLike](observable.multicastobservablelike.md)
