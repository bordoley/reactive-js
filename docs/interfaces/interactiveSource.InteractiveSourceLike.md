[Reactive-JS](../README.md) / [interactiveSource](../modules/interactiveSource.md) / InteractiveSourceLike

# Interface: InteractiveSourceLike

[interactiveSource](../modules/interactiveSource.md).InteractiveSourceLike

## Hierarchy

- [`Disposable`](../classes/disposable.Disposable.md)

  ↳ **`InteractiveSourceLike`**

## Implemented by

- [`AsyncEnumerator`](../classes/asyncEnumerator.AsyncEnumerator.md)
- [`Enumerator`](../classes/enumerator.Enumerator.md)

## Table of contents

### Accessors

- [error](interactiveSource.InteractiveSourceLike.md#error)
- [isDisposed](interactiveSource.InteractiveSourceLike.md#isdisposed)

### Methods

- [add](interactiveSource.InteractiveSourceLike.md#add)
- [dispose](interactiveSource.InteractiveSourceLike.md#dispose)
- [move](interactiveSource.InteractiveSourceLike.md#move)

## Accessors

### error

• `get` **error**(): [`Option`](../modules/option.md#option)<[`Error`](disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Returns

[`Option`](../modules/option.md#option)<[`Error`](disposable.Error.md)\>

#### Inherited from

Disposable.error

___

### isDisposed

• `get` **isDisposed**(): `boolean`

`true` if this resource has been disposed, otherwise false

#### Returns

`boolean`

#### Inherited from

Disposable.isDisposed

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

[Disposable](../classes/disposable.Disposable.md).[add](../classes/disposable.Disposable.md#add)

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

[Disposable](../classes/disposable.Disposable.md).[dispose](../classes/disposable.Disposable.md#dispose)

___

### move

▸ **move**(`this`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`InteractiveSourceLike`](interactiveSource.InteractiveSourceLike.md) |

#### Returns

`void`
