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

The error the `DisposableLike` was disposed with if disposed.

Inherited from: [DisposableLike](disposable.disposablelike.md).[error](disposable.disposablelike.md#error)

___

### isDisposed

• `Readonly` **isDisposed**: *boolean*

`true` if this resource has been disposed, otherwise false

Inherited from: [DisposableLike](disposable.disposablelike.md).[isDisposed](disposable.disposablelike.md#isdisposed)

___

### value

• `Readonly` **value**: T

The underlying resource

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
