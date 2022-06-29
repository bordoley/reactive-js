[Reactive-JS](../README.md) / [liftable](../modules/liftable.md) / LiftableStateLike

# Interface: LiftableStateLike

[liftable](../modules/liftable.md).LiftableStateLike

## Hierarchy

- [`DisposableLike`](disposable.DisposableLike.md)

- [`ContainerLike`](container.ContainerLike.md)

  ↳ **`LiftableStateLike`**

  ↳↳ [`SinkLike`](source.SinkLike.md)

## Implemented by

- [`AsyncEnumerator`](../classes/asyncEnumerator.AsyncEnumerator.md)
- [`Enumerator`](../classes/enumerator.Enumerator.md)

## Table of contents

### Properties

- [T](liftable.LiftableStateLike.md#t)
- [error](liftable.LiftableStateLike.md#error)
- [isDisposed](liftable.LiftableStateLike.md#isdisposed)
- [type](liftable.LiftableStateLike.md#type)

### Methods

- [add](liftable.LiftableStateLike.md#add)
- [dispose](liftable.LiftableStateLike.md#dispose)

## Properties

### T

• `Optional` `Readonly` **T**: `unknown`

#### Inherited from

[ContainerLike](container.ContainerLike.md).[T](container.ContainerLike.md#t)

___

### error

• `Readonly` **error**: [`Option`](../modules/option.md#option)<[`Error`](disposable.Error.md)\>

The error the `DisposableLike` was disposed with if disposed.

#### Inherited from

[DisposableLike](disposable.DisposableLike.md).[error](disposable.DisposableLike.md#error)

___

### isDisposed

• `Readonly` **isDisposed**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[DisposableLike](disposable.DisposableLike.md).[isDisposed](disposable.DisposableLike.md#isdisposed)

___

### type

• `Optional` `Readonly` **type**: `unknown`

#### Inherited from

[ContainerLike](container.ContainerLike.md).[type](container.ContainerLike.md#type)

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

[DisposableLike](disposable.DisposableLike.md).[add](disposable.DisposableLike.md#add)

___

### dispose

▸ **dispose**(`this`, `error?`): `void`

Dispose the resource. Must be idempotent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`DisposableLike`](disposable.DisposableLike.md) | - |
| `error?` | [`Error`](disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[DisposableLike](disposable.DisposableLike.md).[dispose](disposable.DisposableLike.md#dispose)
