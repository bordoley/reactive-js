[Reactive-JS](../README.md) / [liftable](../modules/liftable.md) / AbtractDisposableLiftable

# Class: AbtractDisposableLiftable<TState\>

[liftable](../modules/liftable.md).AbtractDisposableLiftable

## Type parameters

| Name | Type |
| :------ | :------ |
| `TState` | extends [`LiftableStateLike`](../interfaces/liftable.LiftableStateLike.md) |

## Hierarchy

- [`AbstractDisposableContainer`](container.AbstractDisposableContainer.md)

  ↳ **`AbtractDisposableLiftable`**

  ↳↳ [`AsyncEnumerator`](asyncEnumerator.AsyncEnumerator.md)

  ↳↳ [`AbtractDisposableSource`](source.AbtractDisposableSource.md)

## Implements

- [`LiftableLike`](../interfaces/liftable.LiftableLike.md)

## Table of contents

### Constructors

- [constructor](liftable.AbtractDisposableLiftable.md#constructor)

### Accessors

- [T](liftable.AbtractDisposableLiftable.md#t)
- [TContainerOf](liftable.AbtractDisposableLiftable.md#tcontainerof)
- [TLiftableState](liftable.AbtractDisposableLiftable.md#tliftablestate)
- [error](liftable.AbtractDisposableLiftable.md#error)
- [isDisposed](liftable.AbtractDisposableLiftable.md#isdisposed)

### Methods

- [add](liftable.AbtractDisposableLiftable.md#add)
- [dispose](liftable.AbtractDisposableLiftable.md#dispose)

## Constructors

### constructor

• **new AbtractDisposableLiftable**<`TState`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TState` | extends [`LiftableStateLike`](../interfaces/liftable.LiftableStateLike.md)<`TState`\> |

#### Inherited from

[AbstractDisposableContainer](container.AbstractDisposableContainer.md).[constructor](container.AbstractDisposableContainer.md#constructor)

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Implementation of

[LiftableLike](../interfaces/liftable.LiftableLike.md).[T](../interfaces/liftable.LiftableLike.md#t)

#### Inherited from

AbstractDisposableContainer.T

___

### TContainerOf

• `get` **TContainerOf**(): `this`

#### Returns

`this`

#### Implementation of

[LiftableLike](../interfaces/liftable.LiftableLike.md).[TContainerOf](../interfaces/liftable.LiftableLike.md#tcontainerof)

#### Inherited from

AbstractDisposableContainer.TContainerOf

___

### TLiftableState

• `get` **TLiftableState**(): `TState`

#### Returns

`TState`

#### Implementation of

[LiftableLike](../interfaces/liftable.LiftableLike.md).[TLiftableState](../interfaces/liftable.LiftableLike.md#tliftablestate)

___

### error

• `get` **error**(): [`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Returns

[`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

#### Inherited from

AbstractDisposableContainer.error

___

### isDisposed

• `get` **isDisposed**(): `boolean`

`true` if this resource has been disposed, otherwise false

#### Returns

`boolean`

#### Inherited from

AbstractDisposableContainer.isDisposed

## Methods

### add

▸ **add**(`this`, `disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`AbtractDisposableLiftable`](liftable.AbtractDisposableLiftable.md)<`TState`\> |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Inherited from

[AbstractDisposableContainer](container.AbstractDisposableContainer.md).[add](container.AbstractDisposableContainer.md#add)

___

### dispose

▸ **dispose**(`this`, `error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`AbtractDisposableLiftable`](liftable.AbtractDisposableLiftable.md)<`TState`\> | - |
| `error?` | [`Error`](../interfaces/disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[AbstractDisposableContainer](container.AbstractDisposableContainer.md).[dispose](container.AbstractDisposableContainer.md#dispose)
