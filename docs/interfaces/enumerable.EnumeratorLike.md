[Reactive-JS](../README.md) / [enumerable](../modules/enumerable.md) / EnumeratorLike

# Interface: EnumeratorLike<T\>

[enumerable](../modules/enumerable.md).EnumeratorLike

Inteface that enables iteration over a collection.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`DisposableLike`](disposable.DisposableLike.md)

  ↳ **`EnumeratorLike`**

## Table of contents

### Properties

- [current](enumerable.EnumeratorLike.md#current)
- [error](enumerable.EnumeratorLike.md#error)
- [hasCurrent](enumerable.EnumeratorLike.md#hascurrent)
- [isDisposed](enumerable.EnumeratorLike.md#isdisposed)

### Methods

- [add](enumerable.EnumeratorLike.md#add)
- [dispose](enumerable.EnumeratorLike.md#dispose)
- [move](enumerable.EnumeratorLike.md#move)

## Properties

### current

• `Readonly` **current**: `T`

The current item, if present, at the current position of the enumerator.

___

### error

• `Readonly` **error**: [`Option`](../modules/option.md#option)<[`Error`](../modules/disposable.md#error)\>

The error the `DisposableLike` was disposed with if disposed.

#### Inherited from

[DisposableLike](disposable.DisposableLike.md).[error](disposable.DisposableLike.md#error)

___

### hasCurrent

• `Readonly` **hasCurrent**: `boolean`

`true` if the current the enumerator has a current value, otherwise `false`.

___

### isDisposed

• `Readonly` **isDisposed**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[DisposableLike](disposable.DisposableLike.md).[isDisposed](disposable.DisposableLike.md#isdisposed)

## Methods

### add

▸ **add**(`disposable`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |

#### Returns

`void`

`this`

#### Inherited from

[DisposableLike](disposable.DisposableLike.md).[add](disposable.DisposableLike.md#add)

___

### dispose

▸ **dispose**(`error?`): `void`

Dispose the resource. Must be idempotent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | [`Error`](../modules/disposable.md#error) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[DisposableLike](disposable.DisposableLike.md).[dispose](disposable.DisposableLike.md#dispose)

___

### move

▸ **move**(): `boolean`

Advances the enumerator to the next item.

#### Returns

`boolean`

`true` if the enumerator was successfully advanced to the next item, otherwise `false`.
