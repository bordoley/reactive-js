[Reactive-JS](../README.md) / [interactiveSource](../modules/interactiveSource.md) / InteractiveSourceLike

# Interface: InteractiveSourceLike

[interactiveSource](../modules/interactiveSource.md).InteractiveSourceLike

## Hierarchy

- [`DisposableLike`](disposable.DisposableLike.md)

  ↳ **`InteractiveSourceLike`**

  ↳↳ [`AsyncEnumeratorLike`](asyncEnumerator.AsyncEnumeratorLike.md)

  ↳↳ [`EnumeratorLike`](enumerator.EnumeratorLike.md)

## Table of contents

### Properties

- [error](interactiveSource.InteractiveSourceLike.md#error)
- [isDisposed](interactiveSource.InteractiveSourceLike.md#isdisposed)

### Methods

- [add](interactiveSource.InteractiveSourceLike.md#add)
- [dispose](interactiveSource.InteractiveSourceLike.md#dispose)
- [move](interactiveSource.InteractiveSourceLike.md#move)

## Properties

### error

• `Readonly` **error**: [`Option`](../modules/option.md#option)<[`Error`](disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[DisposableLike](disposable.DisposableLike.md).[error](disposable.DisposableLike.md#error)

___

### isDisposed

• `Readonly` **isDisposed**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[DisposableLike](disposable.DisposableLike.md).[isDisposed](disposable.DisposableLike.md#isdisposed)

## Methods

### add

▸ **add**(`this`, `disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`InteractiveSourceLike`](interactiveSource.InteractiveSourceLike.md) |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Inherited from

[DisposableLike](disposable.DisposableLike.md).[add](disposable.DisposableLike.md#add)

___

### dispose

▸ **dispose**(`this`, `error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`InteractiveSourceLike`](interactiveSource.InteractiveSourceLike.md) | - |
| `error?` | [`Error`](disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[DisposableLike](disposable.DisposableLike.md).[dispose](disposable.DisposableLike.md#dispose)

___

### move

▸ **move**(`this`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`InteractiveSourceLike`](interactiveSource.InteractiveSourceLike.md) |

#### Returns

`void`
