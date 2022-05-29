[Reactive-JS](../README.md) / [observable](../modules/observable.md) / SubjectLike

# Interface: SubjectLike<T\>

## Type parameters

Name |
------ |
`T` |

## Hierarchy

* [*StreamLike*](observable.streamlike.md)<T, T\>

  ↳ **SubjectLike**

## Index

### Properties

* [error](observable.subjectlike.md#error)
* [isDisposed](observable.subjectlike.md#isdisposed)
* [isSynchronous](observable.subjectlike.md#issynchronous)
* [observerCount](observable.subjectlike.md#observercount)

### Methods

* [add](observable.subjectlike.md#add)
* [dispatch](observable.subjectlike.md#dispatch)
* [dispose](observable.subjectlike.md#dispose)
* [observe](observable.subjectlike.md#observe)

## Properties

### error

• `Readonly` **error**: [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\>

The error the `DisposableLike` was disposed with if disposed.

Inherited from: [StreamLike](observable.streamlike.md).[error](observable.streamlike.md#error)

___

### isDisposed

• `Readonly` **isDisposed**: *boolean*

`true` if this resource has been disposed, otherwise false

Inherited from: [StreamLike](observable.streamlike.md).[isDisposed](observable.streamlike.md#isdisposed)

___

### isSynchronous

• `Readonly` **isSynchronous**: *boolean*

Inherited from: [StreamLike](observable.streamlike.md).[isSynchronous](observable.streamlike.md#issynchronous)

___

### observerCount

• `Readonly` **observerCount**: *number*

The number of observers currently observing.

Inherited from: [StreamLike](observable.streamlike.md).[observerCount](observable.streamlike.md#observercount)

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

Inherited from: [StreamLike](observable.streamlike.md)

___

### dispatch

▸ **dispatch**(`req`: T): *void*

Dispatches the next request

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`req` | T |     |

**Returns:** *void*

Inherited from: [StreamLike](observable.streamlike.md)

___

### dispose

▸ **dispose**(`error?`: [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\>): *void*

Dispose the resource. Must be idempotent.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`error?` | [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\> | An optional error that signals the resource is being disposed due to an error.    |

**Returns:** *void*

Inherited from: [StreamLike](observable.streamlike.md)

___

### observe

▸ **observe**(`observer`: [*ObserverLike*](observable.observerlike.md)<T\>): *void*

Subscribes the `ObserverLike` instance to the observable.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`observer` | [*ObserverLike*](observable.observerlike.md)<T\> | The observer which should be notified by the observable source.    |

**Returns:** *void*

Inherited from: [StreamLike](observable.streamlike.md)
