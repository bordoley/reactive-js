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

The error the `DisposableLike` was disposed with if disposed.

Inherited from: [DisposableLike](disposable.disposablelike.md).[error](disposable.disposablelike.md#error)

___

### inner

• **inner**: [*DisposableLike*](disposable.disposablelike.md)

 The inner `DisposableLike` that may be get or set. Setting the inner
 `DisposableLike` disposes the old `DisposableLike` unless it is strictly equal
 to the new one.

___

### isDisposed

• `Readonly` **isDisposed**: *boolean*

`true` if this resource has been disposed, otherwise false

Inherited from: [DisposableLike](disposable.disposablelike.md).[isDisposed](disposable.disposablelike.md#isdisposed)

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
