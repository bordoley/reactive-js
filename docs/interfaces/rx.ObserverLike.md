[Reactive-JS](../README.md) / [rx](../modules/rx.md) / ObserverLike

# Interface: ObserverLike<T\>

[rx](../modules/rx.md).ObserverLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`SinkLike`](rx.SinkLike.md)<`T`\>

  ↳ **`ObserverLike`**

## Table of contents

### Properties

- [[DisposableLike\_exception]](rx.ObserverLike.md#[disposablelike_exception])
- [[DisposableLike\_isDisposed]](rx.ObserverLike.md#[disposablelike_isdisposed])
- [[ObserverLike\_dispatcher]](rx.ObserverLike.md#[observerlike_dispatcher])
- [[ObserverLike\_scheduler]](rx.ObserverLike.md#[observerlike_scheduler])

### Methods

- [[DisposableLike\_add]](rx.ObserverLike.md#[disposablelike_add])
- [[DisposableLike\_dispose]](rx.ObserverLike.md#[disposablelike_dispose])
- [[SinkLike\_notify]](rx.ObserverLike.md#[sinklike_notify])

## Properties

### [DisposableLike\_exception]

• `Readonly` **[DisposableLike\_exception]**: [`Option`](../modules/functions.md#option)<[`Exception`](../modules/util.md#exception)\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[SinkLike](rx.SinkLike.md).[[DisposableLike_exception]](rx.SinkLike.md#[disposablelike_exception])

___

### [DisposableLike\_isDisposed]

• `Readonly` **[DisposableLike\_isDisposed]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[SinkLike](rx.SinkLike.md).[[DisposableLike_isDisposed]](rx.SinkLike.md#[disposablelike_isdisposed])

___

### [ObserverLike\_dispatcher]

• `Readonly` **[ObserverLike\_dispatcher]**: [`DispatcherLike`](scheduling.DispatcherLike.md)<`T`\>

___

### [ObserverLike\_scheduler]

• `Readonly` **[ObserverLike\_scheduler]**: [`SchedulerLike`](scheduling.SchedulerLike.md)

## Methods

### [DisposableLike\_add]

▸ **[DisposableLike_add]**(`disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableOrTeardown`](../modules/util.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Inherited from

[SinkLike](rx.SinkLike.md).[[DisposableLike_add]](rx.SinkLike.md#[disposablelike_add])

___

### [DisposableLike\_dispose]

▸ **[DisposableLike_dispose]**(`error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | [`Exception`](../modules/util.md#exception) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[SinkLike](rx.SinkLike.md).[[DisposableLike_dispose]](rx.SinkLike.md#[disposablelike_dispose])

___

### [SinkLike\_notify]

▸ **[SinkLike_notify]**(`next`): `void`

Notifies the the sink of the next notification produced by the observable source.

Note: The `notify` method must be called from within a `SchedulerContinuationLike`
scheduled using the sink's `schedule` method.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `next` | `T` | The next notification value. |

#### Returns

`void`

#### Inherited from

[SinkLike](rx.SinkLike.md).[[SinkLike_notify]](rx.SinkLike.md#[sinklike_notify])
