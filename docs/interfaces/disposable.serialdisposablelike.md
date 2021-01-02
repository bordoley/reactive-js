[Reactive-JS](../README.md) / [disposable](../modules/disposable.md) / SerialDisposableLike

# Interface: SerialDisposableLike

A `DisposableLike` container that allows replacing an inner `DisposableLike` with another,
disposing the previous inner `DisposableLike` in the process. Disposing the
container also disposes the inner `DisposableLike`. Disposing the inner `DisposableLike`
with an error, disposes the container with the error.

## Hierarchy

* [*DisposableLike*](disposable.disposablelike.md)

  ↳ **SerialDisposableLike**

## Implemented by

* [*AbstractSerialDisposable*](../classes/disposable.abstractserialdisposable.md)

## Index

### Properties

* [error](disposable.serialdisposablelike.md#error)
* [inner](disposable.serialdisposablelike.md#inner)
* [isDisposed](disposable.serialdisposablelike.md#isdisposed)

### Methods

* [add](disposable.serialdisposablelike.md#add)
* [dispose](disposable.serialdisposablelike.md#dispose)

## Properties

### error

• `Readonly` **error**: [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\>

Inherited from: [DisposableLike](disposable.disposablelike.md).[error](disposable.disposablelike.md#error)

The error the `DisposableLike` was disposed with if disposed.

___

### inner

• **inner**: [*DisposableLike*](disposable.disposablelike.md)

 The inner `DisposableLike` that may be get or set. Setting the inner
 `DisposableLike` disposes the old `DisposableLike` unless it is strictly equal
 to the new one.

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

### dispose

▸ **dispose**(`error?`: [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\>): *void*

Inherited from: [DisposableLike](disposable.disposablelike.md)

Dispose the resource. Must be idempotent.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`error?` | [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\> | An optional error that signals the resource is being disposed due to an error.    |

**Returns:** *void*
