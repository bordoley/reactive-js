[Reactive-JS](../README.md) / [container](../modules/container.md) / AbstractDisposableContainer

# Class: AbstractDisposableContainer

[container](../modules/container.md).AbstractDisposableContainer

## Hierarchy

- [`Disposable`](disposable.Disposable.md)

  ↳ **`AbstractDisposableContainer`**

  ↳↳ [`Enumerator`](enumerator.Enumerator.md)

  ↳↳ [`AbtractDisposableLiftable`](liftable.AbtractDisposableLiftable.md)

  ↳↳ [`Observer`](observer.Observer.md)

  ↳↳ [`RunnableSink`](runnableSink.RunnableSink.md)

## Implements

- [`ContainerLike`](../interfaces/container.ContainerLike.md)

## Table of contents

### Constructors

- [constructor](container.AbstractDisposableContainer.md#constructor)

### Accessors

- [T](container.AbstractDisposableContainer.md#t)
- [TContainerOf](container.AbstractDisposableContainer.md#tcontainerof)
- [error](container.AbstractDisposableContainer.md#error)
- [isDisposed](container.AbstractDisposableContainer.md#isdisposed)

### Methods

- [add](container.AbstractDisposableContainer.md#add)
- [dispose](container.AbstractDisposableContainer.md#dispose)

## Constructors

### constructor

• **new AbstractDisposableContainer**()

#### Inherited from

[Disposable](disposable.Disposable.md).[constructor](disposable.Disposable.md#constructor)

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Implementation of

[ContainerLike](../interfaces/container.ContainerLike.md).[T](../interfaces/container.ContainerLike.md#t)

___

### TContainerOf

• `get` **TContainerOf**(): `this`

#### Returns

`this`

#### Implementation of

[ContainerLike](../interfaces/container.ContainerLike.md).[TContainerOf](../interfaces/container.ContainerLike.md#tcontainerof)

___

### error

• `get` **error**(): [`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Returns

[`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

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
| `this` | [`AbstractDisposableContainer`](container.AbstractDisposableContainer.md) |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Inherited from

[Disposable](disposable.Disposable.md).[add](disposable.Disposable.md#add)

___

### dispose

▸ **dispose**(`this`, `error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`AbstractDisposableContainer`](container.AbstractDisposableContainer.md) | - |
| `error?` | [`Error`](../interfaces/disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[Disposable](disposable.Disposable.md).[dispose](disposable.Disposable.md#dispose)
