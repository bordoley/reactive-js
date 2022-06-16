[Reactive-JS](../README.md) / [disposable](../modules/disposable.md) / DisposableLike

# Interface: DisposableLike

[disposable](../modules/disposable.md).DisposableLike

Represents an unmanaged resource that can be disposed.

## Hierarchy

- **`DisposableLike`**

  ↳ [`DisposableValueLike`](disposable.DisposableValueLike.md)

  ↳ [`SerialDisposableLike`](disposable.SerialDisposableLike.md)

  ↳ [`EnumeratorLike`](enumerable.EnumeratorLike.md)

  ↳ [`DispatcherLike`](observable.DispatcherLike.md)

  ↳ [`MulticastObservableLike`](observable.MulticastObservableLike.md)

  ↳ [`ObserverLike`](observable.ObserverLike.md)

  ↳ [`PrioritySchedulerLike`](scheduler.PrioritySchedulerLike.md)

  ↳ [`SchedulerContinuationLike`](scheduler.SchedulerContinuationLike.md)

  ↳ [`SchedulerLike`](scheduler.SchedulerLike.md)

## Implemented by

- [`AbstractDisposable`](../classes/disposable.AbstractDisposable.md)

## Table of contents

### Properties

- [error](disposable.DisposableLike.md#error)
- [isDisposed](disposable.DisposableLike.md#isdisposed)

### Methods

- [add](disposable.DisposableLike.md#add)
- [dispose](disposable.DisposableLike.md#dispose)

## Properties

### error

• `Readonly` **error**: [`Option`](../modules/option.md#option)<[`Error`](disposable.Error.md)\>

The error the `DisposableLike` was disposed with if disposed.

___

### isDisposed

• `Readonly` **isDisposed**: `boolean`

`true` if this resource has been disposed, otherwise false

## Methods

### add

▸ **add**(`this`, `disposable`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`DisposableLike`](disposable.DisposableLike.md) |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |

#### Returns

`void`

`this`

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
