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

Inherited from: [MulticastObservableLike](observable.multicastobservablelike.md).[error](observable.multicastobservablelike.md#error)

The error the `DisposableLike` was disposed with if disposed.

___

### isDisposed

• `Readonly` **isDisposed**: *boolean*

Inherited from: [MulticastObservableLike](observable.multicastobservablelike.md).[isDisposed](observable.multicastobservablelike.md#isdisposed)

`true` if this resource has been disposed, otherwise false

___

### isSynchronous

• `Readonly` **isSynchronous**: *boolean*

Inherited from: [MulticastObservableLike](observable.multicastobservablelike.md).[isSynchronous](observable.multicastobservablelike.md#issynchronous)

___

### observerCount

• `Readonly` **observerCount**: *number*

Inherited from: [MulticastObservableLike](observable.multicastobservablelike.md).[observerCount](observable.multicastobservablelike.md#observercount)

The number of observers currently observing.

## Methods

### add

▸ **add**(`disposable`: [*DisposableOrTeardown*](../modules/disposable.md#disposableorteardown)): *void*

Inherited from: [MulticastObservableLike](observable.multicastobservablelike.md)

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters:

Name | Type |
------ | ------ |
`disposable` | [*DisposableOrTeardown*](../modules/disposable.md#disposableorteardown) |

**Returns:** *void*

`this`

___

### dispatch

▸ **dispatch**(`req`: TReq): *void*

Inherited from: [DispatcherLike](observable.dispatcherlike.md)

Dispatches the next request

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`req` | TReq |     |

**Returns:** *void*

___

### dispose

▸ **dispose**(`error?`: [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\>): *void*

Inherited from: [MulticastObservableLike](observable.multicastobservablelike.md)

Dispose the resource. Must be idempotent.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`error?` | [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\> | An optional error that signals the resource is being disposed due to an error.    |

**Returns:** *void*

___

### observe

▸ **observe**(`observer`: [*ObserverLike*](observable.observerlike.md)<T\>): *void*

Inherited from: [MulticastObservableLike](observable.multicastobservablelike.md)

Subscribes the `ObserverLike` instance to the observable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`observer` | [*ObserverLike*](observable.observerlike.md)<T\> | The observer which should be notified by the observable source.    |

**Returns:** *void*
