[Reactive-JS](../README.md) / [reactiveSink](../modules/reactiveSink.md) / ReactiveSinkLike

# Interface: ReactiveSinkLike<T\>

[reactiveSink](../modules/reactiveSink.md).ReactiveSinkLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`DisposableLike`](disposable.DisposableLike.md)

  ↳ **`ReactiveSinkLike`**

  ↳↳ [`ObserverLike`](observer.ObserverLike.md)

## Table of contents

### Properties

- [error](reactiveSink.ReactiveSinkLike.md#error)
- [isDisposed](reactiveSink.ReactiveSinkLike.md#isdisposed)

### Methods

- [add](reactiveSink.ReactiveSinkLike.md#add)
- [dispose](reactiveSink.ReactiveSinkLike.md#dispose)
- [notify](reactiveSink.ReactiveSinkLike.md#notify)

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
| `this` | [`ReactiveSinkLike`](reactiveSink.ReactiveSinkLike.md)<`T`\> |
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
| `this` | [`ReactiveSinkLike`](reactiveSink.ReactiveSinkLike.md)<`T`\> | - |
| `error?` | [`Error`](disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[DisposableLike](disposable.DisposableLike.md).[dispose](disposable.DisposableLike.md#dispose)

___

### notify

▸ **notify**(`this`, `next`): `void`

Notifies the the sink of the next notification produced by the observable source.

Note: The `notify` method must be called from within a `SchedulerContinuationLike`
scheduled using the sink's `schedule` method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`ReactiveSinkLike`](reactiveSink.ReactiveSinkLike.md)<`T`\> | - |
| `next` | `T` | The next notification value. |

#### Returns

`void`
