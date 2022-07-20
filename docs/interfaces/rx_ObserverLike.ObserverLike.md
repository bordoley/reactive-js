[Reactive-JS](../README.md) / [rx/ObserverLike](../modules/rx_ObserverLike.md) / ObserverLike

# Interface: ObserverLike<T\>

[rx/ObserverLike](../modules/rx_ObserverLike.md).ObserverLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ReactiveSinkLike`](rx_ReactiveSinkLike.ReactiveSinkLike.md)<`T`\>

  ↳ **`ObserverLike`**

## Table of contents

### Properties

- [[DisposableLike\_error]](rx_ObserverLike.ObserverLike.md#[disposablelike_error])
- [[DisposableLike\_isDisposed]](rx_ObserverLike.ObserverLike.md#[disposablelike_isdisposed])
- [[ObserverLike\_dispatcher]](rx_ObserverLike.ObserverLike.md#[observerlike_dispatcher])
- [[ObserverLike\_scheduler]](rx_ObserverLike.ObserverLike.md#[observerlike_scheduler])

### Methods

- [[DisposableLike\_add]](rx_ObserverLike.ObserverLike.md#[disposablelike_add])
- [[DisposableLike\_dispose]](rx_ObserverLike.ObserverLike.md#[disposablelike_dispose])
- [[ReactiveSinkLike\_notify]](rx_ObserverLike.ObserverLike.md#[reactivesinklike_notify])

## Properties

### [DisposableLike\_error]

• `Readonly` **[DisposableLike\_error]**: [`Option`](../modules/util_Option.md#option)<[`Error`](../modules/util_DisposableLike.md#error)\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[ReactiveSinkLike](rx_ReactiveSinkLike.ReactiveSinkLike.md).[[DisposableLike_error]](rx_ReactiveSinkLike.ReactiveSinkLike.md#[disposablelike_error])

___

### [DisposableLike\_isDisposed]

• `Readonly` **[DisposableLike\_isDisposed]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[ReactiveSinkLike](rx_ReactiveSinkLike.ReactiveSinkLike.md).[[DisposableLike_isDisposed]](rx_ReactiveSinkLike.ReactiveSinkLike.md#[disposablelike_isdisposed])

___

### [ObserverLike\_dispatcher]

• `Readonly` **[ObserverLike\_dispatcher]**: [`DispatcherLike`](scheduling_DispatcherLike.DispatcherLike.md)<`T`\>

___

### [ObserverLike\_scheduler]

• `Readonly` **[ObserverLike\_scheduler]**: [`SchedulerLike`](scheduling_SchedulerLike.SchedulerLike.md)

## Methods

### [DisposableLike\_add]

▸ **[DisposableLike_add]**(`disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableOrTeardown`](../modules/util_DisposableLike.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Inherited from

[ReactiveSinkLike](rx_ReactiveSinkLike.ReactiveSinkLike.md).[[DisposableLike_add]](rx_ReactiveSinkLike.ReactiveSinkLike.md#[disposablelike_add])

___

### [DisposableLike\_dispose]

▸ **[DisposableLike_dispose]**(`error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | [`Error`](../modules/util_DisposableLike.md#error) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[ReactiveSinkLike](rx_ReactiveSinkLike.ReactiveSinkLike.md).[[DisposableLike_dispose]](rx_ReactiveSinkLike.ReactiveSinkLike.md#[disposablelike_dispose])

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

[ReactiveSinkLike](rx_ReactiveSinkLike.ReactiveSinkLike.md).[[ReactiveSinkLike_notify]](rx_ReactiveSinkLike.ReactiveSinkLike.md#[reactivesinklike_notify])
