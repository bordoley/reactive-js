[Reactive-JS](../README.md) / [observable](../modules/observable.md) / DispatcherLike

# Interface: DispatcherLike<T\>

## Type parameters

Name |
------ |
`T` |

## Hierarchy

* [*DisposableLike*](disposable.disposablelike.md)

  ↳ **DispatcherLike**

  ↳↳ [*StreamLike*](observable.streamlike.md)

## Index

### Properties

* [error](observable.dispatcherlike.md#error)
* [isDisposed](observable.dispatcherlike.md#isdisposed)

### Methods

* [add](observable.dispatcherlike.md#add)
* [dispatch](observable.dispatcherlike.md#dispatch)
* [dispose](observable.dispatcherlike.md#dispose)

## Properties

### error

• `Readonly` **error**: [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\>

Inherited from: [DisposableLike](disposable.disposablelike.md).[error](disposable.disposablelike.md#error)

The error the `DisposableLike` was disposed with if disposed.

___

### isDisposed

• `Readonly` **isDisposed**: *boolean*

Inherited from: [DisposableLike](disposable.disposablelike.md).[isDisposed](disposable.disposablelike.md#isdisposed)

`true` if this resource has been disposed, otherwise false

## Methods

### add

▸ **add**(`disposable`: [*DisposableOrTeardown*](../modules/disposable.md#disposableorteardown)): *void*

Inherited from: [DisposableLike](disposable.disposablelike.md)

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters:

Name | Type |
------ | ------ |
`disposable` | [*DisposableOrTeardown*](../modules/disposable.md#disposableorteardown) |

**Returns:** *void*

`this`

___

### dispatch

▸ **dispatch**(`req`: T): *void*

Dispatches the next request

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`req` | T |     |

**Returns:** *void*

___

### dispose

▸ **dispose**(`error?`: [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\>): *void*

Inherited from: [DisposableLike](disposable.disposablelike.md)

Dispose the resource. Must be idempotent.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`error?` | [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\> | An optional error that signals the resource is being disposed due to an error.    |

**Returns:** *void*
