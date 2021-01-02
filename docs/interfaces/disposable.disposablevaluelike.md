[Reactive-JS](../README.md) / [disposable](../modules/disposable.md) / DisposableValueLike

# Interface: DisposableValueLike<T\>

A `DisposableLike` that provides disposable semantics to an underlying resource.

## Type parameters

Name |
------ |
`T` |

## Hierarchy

* [*DisposableLike*](disposable.disposablelike.md)

  ↳ **DisposableValueLike**

## Index

### Properties

* [error](disposable.disposablevaluelike.md#error)
* [isDisposed](disposable.disposablevaluelike.md#isdisposed)
* [value](disposable.disposablevaluelike.md#value)

### Methods

* [add](disposable.disposablevaluelike.md#add)
* [dispose](disposable.disposablevaluelike.md#dispose)

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

___

### value

• `Readonly` **value**: T

The underlying resource

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
