[Reactive-JS](../README.md) / [rx](../modules/rx.md) / ObserverLike

# Interface: ObserverLike<T\>

[rx](../modules/rx.md).ObserverLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ReactiveSinkLike`](rx.ReactiveSinkLike.md)<`T`\>

  ↳ **`ObserverLike`**

## Table of contents

### Properties

- [[DisposableLike\_error]](rx.ObserverLike.md#[disposablelike_error])
- [[DisposableLike\_isDisposed]](rx.ObserverLike.md#[disposablelike_isdisposed])
- [[ObserverLike\_dispatcher]](rx.ObserverLike.md#[observerlike_dispatcher])
- [[ObserverLike\_scheduler]](rx.ObserverLike.md#[observerlike_scheduler])

### Methods

- [[DisposableLike\_add]](rx.ObserverLike.md#[disposablelike_add])
- [[DisposableLike\_dispose]](rx.ObserverLike.md#[disposablelike_dispose])
- [[ReactiveSinkLike\_notify]](rx.ObserverLike.md#[reactivesinklike_notify])

## Properties

### [DisposableLike\_error]

• `Readonly` **[DisposableLike\_error]**: [`Option`](../modules/util.md#option)<[`Error`](../modules/util.md#error)\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[ReactiveSinkLike](rx.ReactiveSinkLike.md).[[DisposableLike_error]](rx.ReactiveSinkLike.md#[disposablelike_error])

___

### [DisposableLike\_isDisposed]

• `Readonly` **[DisposableLike\_isDisposed]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[ReactiveSinkLike](rx.ReactiveSinkLike.md).[[DisposableLike_isDisposed]](rx.ReactiveSinkLike.md#[disposablelike_isdisposed])

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

[ReactiveSinkLike](rx.ReactiveSinkLike.md).[[DisposableLike_add]](rx.ReactiveSinkLike.md#[disposablelike_add])

___

### [DisposableLike\_dispose]

▸ **[DisposableLike_dispose]**(`error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | [`Error`](../modules/util.md#error) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[ReactiveSinkLike](rx.ReactiveSinkLike.md).[[DisposableLike_dispose]](rx.ReactiveSinkLike.md#[disposablelike_dispose])

___

### [ReactiveSinkLike\_notify]

▸ **[ReactiveSinkLike_notify]**(`next`): `void`

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

[ReactiveSinkLike](rx.ReactiveSinkLike.md).[[ReactiveSinkLike_notify]](rx.ReactiveSinkLike.md#[reactivesinklike_notify])
