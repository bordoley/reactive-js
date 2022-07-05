[Reactive-JS](../README.md) / [interactiveSource](../modules/interactiveSource.md) / InteractiveSourceLike

# Interface: InteractiveSourceLike<T\>

[interactiveSource](../modules/interactiveSource.md).InteractiveSourceLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Disposable`](../classes/disposable.Disposable.md)

- [`ContainerLike`](container.ContainerLike.md)

  ↳ **`InteractiveSourceLike`**

## Implemented by

- [`AsyncEnumerator`](../classes/asyncEnumerator.AsyncEnumerator.md)
- [`Enumerator`](../classes/enumerator.Enumerator.md)

## Table of contents

### Properties

- [T](interactiveSource.InteractiveSourceLike.md#t)
- [TContainerOf](interactiveSource.InteractiveSourceLike.md#tcontainerof)

### Accessors

- [error](interactiveSource.InteractiveSourceLike.md#error)
- [isDisposed](interactiveSource.InteractiveSourceLike.md#isdisposed)

### Methods

- [add](interactiveSource.InteractiveSourceLike.md#add)
- [dispose](interactiveSource.InteractiveSourceLike.md#dispose)
- [move](interactiveSource.InteractiveSourceLike.md#move)

## Properties

### T

• **T**: `T`

#### Overrides

[ContainerLike](container.ContainerLike.md).[T](container.ContainerLike.md#t)

___

### TContainerOf

• `Readonly` **TContainerOf**: [`InteractiveSourceLike`](interactiveSource.InteractiveSourceLike.md)<`T`\>

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
| `this` | [`InteractiveSourceLike`](interactiveSource.InteractiveSourceLike.md)<`T`\> |
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
| `this` | [`InteractiveSourceLike`](interactiveSource.InteractiveSourceLike.md)<`T`\> | - |
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
