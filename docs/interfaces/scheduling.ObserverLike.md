[Reactive-JS](../README.md) / [scheduling](../modules/scheduling.md) / ObserverLike

# Interface: ObserverLike<T\>

[scheduling](../modules/scheduling.md).ObserverLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`SinkLike`](util.SinkLike.md)<`T`\>

  ↳ **`ObserverLike`**

## Table of contents

### Properties

- [[DisposableLike\_error]](scheduling.ObserverLike.md#[disposablelike_error])
- [[DisposableLike\_isDisposed]](scheduling.ObserverLike.md#[disposablelike_isdisposed])
- [[ObserverLike\_dispatcher]](scheduling.ObserverLike.md#[observerlike_dispatcher])
- [[ObserverLike\_scheduler]](scheduling.ObserverLike.md#[observerlike_scheduler])

### Methods

- [[DisposableLike\_add]](scheduling.ObserverLike.md#[disposablelike_add])
- [[DisposableLike\_dispose]](scheduling.ObserverLike.md#[disposablelike_dispose])
- [[SinkLike\_notify]](scheduling.ObserverLike.md#[sinklike_notify])

## Properties

### [DisposableLike\_error]

• `Readonly` **[DisposableLike\_error]**: [`Option`](../modules/functions.md#option)<[`Error`](../modules/util.md#error)\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[SinkLike](util.SinkLike.md).[[DisposableLike_error]](util.SinkLike.md#[disposablelike_error])

___

### [DisposableLike\_isDisposed]

• `Readonly` **[DisposableLike\_isDisposed]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[SinkLike](util.SinkLike.md).[[DisposableLike_isDisposed]](util.SinkLike.md#[disposablelike_isdisposed])

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

[SinkLike](util.SinkLike.md).[[DisposableLike_add]](util.SinkLike.md#[disposablelike_add])

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

[SinkLike](util.SinkLike.md).[[DisposableLike_dispose]](util.SinkLike.md#[disposablelike_dispose])

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

[SinkLike](util.SinkLike.md).[[SinkLike_notify]](util.SinkLike.md#[sinklike_notify])
