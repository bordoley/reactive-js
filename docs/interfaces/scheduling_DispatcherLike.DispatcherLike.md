[Reactive-JS](../README.md) / [scheduling/DispatcherLike](../modules/scheduling_DispatcherLike.md) / DispatcherLike

# Interface: DispatcherLike<T\>

[scheduling/DispatcherLike](../modules/scheduling_DispatcherLike.md).DispatcherLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`DisposableLike`](util_DisposableLike.DisposableLike.md)

  ↳ **`DispatcherLike`**

  ↳↳ [`StreamLike`](streaming_StreamLike.StreamLike.md)

## Table of contents

### Properties

- [[DispatcherLike\_scheduler]](scheduling_DispatcherLike.DispatcherLike.md#[dispatcherlike_scheduler])
- [[DisposableLike\_error]](scheduling_DispatcherLike.DispatcherLike.md#[disposablelike_error])
- [[DisposableLike\_isDisposed]](scheduling_DispatcherLike.DispatcherLike.md#[disposablelike_isdisposed])

### Methods

- [[DispatcherLike\_dispatch]](scheduling_DispatcherLike.DispatcherLike.md#[dispatcherlike_dispatch])
- [[DisposableLike\_add]](scheduling_DispatcherLike.DispatcherLike.md#[disposablelike_add])
- [[DisposableLike\_dispose]](scheduling_DispatcherLike.DispatcherLike.md#[disposablelike_dispose])

## Properties

### [DispatcherLike\_scheduler]

• `Readonly` **[DispatcherLike\_scheduler]**: [`SchedulerLike`](scheduling_SchedulerLike.SchedulerLike.md)

___

### [DisposableLike\_error]

• `Readonly` **[DisposableLike\_error]**: [`Option`](../modules/util_Option.md#option)<[`Error`](../modules/util_DisposableLike.md#error)\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[DisposableLike](util_DisposableLike.DisposableLike.md).[[DisposableLike_error]](util_DisposableLike.DisposableLike.md#[disposablelike_error])

___

### [DisposableLike\_isDisposed]

• `Readonly` **[DisposableLike\_isDisposed]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[DisposableLike](util_DisposableLike.DisposableLike.md).[[DisposableLike_isDisposed]](util_DisposableLike.DisposableLike.md#[disposablelike_isdisposed])

## Methods

### [DispatcherLike\_dispatch]

▸ **[DispatcherLike_dispatch]**(`req`): `void`

Dispatches the next request

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `T` |

#### Returns

`void`

___

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

[DisposableLike](util_DisposableLike.DisposableLike.md).[[DisposableLike_add]](util_DisposableLike.DisposableLike.md#[disposablelike_add])

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

[DisposableLike](util_DisposableLike.DisposableLike.md).[[DisposableLike_dispose]](util_DisposableLike.DisposableLike.md#[disposablelike_dispose])
