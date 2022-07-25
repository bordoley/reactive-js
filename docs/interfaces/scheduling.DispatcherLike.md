[Reactive-JS](../README.md) / [scheduling](../modules/scheduling.md) / DispatcherLike

# Interface: DispatcherLike<T\>

[scheduling](../modules/scheduling.md).DispatcherLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`DisposableLike`](util.DisposableLike.md)

  ↳ **`DispatcherLike`**

  ↳↳ [`StreamLike`](streaming.StreamLike.md)

## Table of contents

### Properties

- [[DispatcherLike\_scheduler]](scheduling.DispatcherLike.md#[dispatcherlike_scheduler])
- [[DisposableLike\_error]](scheduling.DispatcherLike.md#[disposablelike_error])
- [[DisposableLike\_isDisposed]](scheduling.DispatcherLike.md#[disposablelike_isdisposed])

### Methods

- [[DispatcherLike\_dispatch]](scheduling.DispatcherLike.md#[dispatcherlike_dispatch])
- [[DisposableLike\_add]](scheduling.DispatcherLike.md#[disposablelike_add])
- [[DisposableLike\_dispose]](scheduling.DispatcherLike.md#[disposablelike_dispose])

## Properties

### [DispatcherLike\_scheduler]

• `Readonly` **[DispatcherLike\_scheduler]**: [`SchedulerLike`](scheduling.SchedulerLike.md)

___

### [DisposableLike\_error]

• `Readonly` **[DisposableLike\_error]**: [`Option`](../modules/util.md#option)<[`Error`](../modules/util.md#error)\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[DisposableLike](util.DisposableLike.md).[[DisposableLike_error]](util.DisposableLike.md#[disposablelike_error])

___

### [DisposableLike\_isDisposed]

• `Readonly` **[DisposableLike\_isDisposed]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[DisposableLike](util.DisposableLike.md).[[DisposableLike_isDisposed]](util.DisposableLike.md#[disposablelike_isdisposed])

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
| `disposable` | [`DisposableOrTeardown`](../modules/util.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Inherited from

[DisposableLike](util.DisposableLike.md).[[DisposableLike_add]](util.DisposableLike.md#[disposablelike_add])

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

[DisposableLike](util.DisposableLike.md).[[DisposableLike_dispose]](util.DisposableLike.md#[disposablelike_dispose])
