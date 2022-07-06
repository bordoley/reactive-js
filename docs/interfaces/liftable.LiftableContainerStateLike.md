[Reactive-JS](../README.md) / [liftable](../modules/liftable.md) / LiftableContainerStateLike

# Interface: LiftableContainerStateLike

[liftable](../modules/liftable.md).LiftableContainerStateLike

## Hierarchy

- [`Disposable`](../classes/disposable.Disposable.md)

  ↳ **`LiftableContainerStateLike`**

## Table of contents

### Properties

- [TLiftableContainerStateType](liftable.LiftableContainerStateLike.md#tliftablecontainerstatetype)

### Accessors

- [error](liftable.LiftableContainerStateLike.md#error)
- [isDisposed](liftable.LiftableContainerStateLike.md#isdisposed)

### Methods

- [add](liftable.LiftableContainerStateLike.md#add)
- [dispose](liftable.LiftableContainerStateLike.md#dispose)

## Properties

### TLiftableContainerStateType

• `Readonly` **TLiftableContainerStateType**: ``0`` \| ``1``

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
| `this` | [`LiftableContainerStateLike`](liftable.LiftableContainerStateLike.md) |
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
| `this` | [`LiftableContainerStateLike`](liftable.LiftableContainerStateLike.md) | - |
| `error?` | [`Error`](disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[Disposable](../classes/disposable.Disposable.md).[dispose](../classes/disposable.Disposable.md#dispose)
