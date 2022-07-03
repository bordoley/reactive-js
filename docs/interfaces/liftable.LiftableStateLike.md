[Reactive-JS](../README.md) / [liftable](../modules/liftable.md) / LiftableStateLike

# Interface: LiftableStateLike

[liftable](../modules/liftable.md).LiftableStateLike

## Hierarchy

- [`Disposable`](../classes/disposable.Disposable.md)

- [`ContainerLike`](container.ContainerLike.md)

  ↳ **`LiftableStateLike`**

## Table of contents

### Properties

- [T](liftable.LiftableStateLike.md#t)
- [TContainerOf](liftable.LiftableStateLike.md#tcontainerof)

### Accessors

- [error](liftable.LiftableStateLike.md#error)
- [isDisposed](liftable.LiftableStateLike.md#isdisposed)

### Methods

- [add](liftable.LiftableStateLike.md#add)
- [dispose](liftable.LiftableStateLike.md#dispose)

## Properties

### T

• `Optional` `Readonly` **T**: `unknown`

#### Inherited from

[ContainerLike](container.ContainerLike.md).[T](container.ContainerLike.md#t)

___

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `unknown`

#### Inherited from

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
| `this` | [`LiftableStateLike`](liftable.LiftableStateLike.md) |
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
| `this` | [`LiftableStateLike`](liftable.LiftableStateLike.md) | - |
| `error?` | [`Error`](disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[Disposable](../classes/disposable.Disposable.md).[dispose](../classes/disposable.Disposable.md#dispose)
