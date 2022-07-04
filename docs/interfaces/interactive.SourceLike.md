[Reactive-JS](../README.md) / [interactive](../modules/interactive.md) / SourceLike

# Interface: SourceLike<T\>

[interactive](../modules/interactive.md).SourceLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Disposable`](../classes/disposable.Disposable.md)

- [`ContainerLike`](container.ContainerLike.md)

  ↳ **`SourceLike`**

## Implemented by

- [`AsyncEnumerator`](../classes/asyncEnumerator.AsyncEnumerator.md)
- [`Enumerator`](../classes/enumerator.Enumerator.md)

## Table of contents

### Properties

- [T](interactive.SourceLike.md#t)
- [TContainerOf](interactive.SourceLike.md#tcontainerof)

### Accessors

- [error](interactive.SourceLike.md#error)
- [isDisposed](interactive.SourceLike.md#isdisposed)

### Methods

- [add](interactive.SourceLike.md#add)
- [dispose](interactive.SourceLike.md#dispose)
- [move](interactive.SourceLike.md#move)

## Properties

### T

• **T**: `T`

#### Overrides

[ContainerLike](container.ContainerLike.md).[T](container.ContainerLike.md#t)

___

### TContainerOf

• `Readonly` **TContainerOf**: [`SourceLike`](interactive.SourceLike.md)<`T`\>

#### Overrides

[ContainerLike](container.ContainerLike.md).[TContainerOf](container.ContainerLike.md#tcontainerof)

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
| `this` | [`SourceLike`](interactive.SourceLike.md)<`T`\> |
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
| `this` | [`SourceLike`](interactive.SourceLike.md)<`T`\> | - |
| `error?` | [`Error`](disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[Disposable](../classes/disposable.Disposable.md).[dispose](../classes/disposable.Disposable.md#dispose)

___

### move

▸ **move**(): `void`

#### Returns

`void`
