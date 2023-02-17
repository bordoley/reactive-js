[Reactive-JS](../README.md) / [scheduling](../modules/scheduling.md) / PauseableLike

# Interface: PauseableLike

[scheduling](../modules/scheduling.md).PauseableLike

Represents an unmanaged resource that can be disposed.

## Hierarchy

- [`DispatcherLike`](scheduling.DispatcherLike.md)<[`Updater`](../modules/functions.md#updater)<[`PauseableState`](../modules/scheduling.md#pauseablestate)\>\>

  ↳ **`PauseableLike`**

  ↳↳ [`PauseableSchedulerLike`](scheduling.PauseableSchedulerLike.md)

  ↳↳ [`FlowableStreamLike`](streaming.FlowableStreamLike.md)

## Table of contents

### Properties

- [[DispatcherLike\_scheduler]](scheduling.PauseableLike.md#[dispatcherlike_scheduler])
- [[DisposableLike\_error]](scheduling.PauseableLike.md#[disposablelike_error])
- [[DisposableLike\_isDisposed]](scheduling.PauseableLike.md#[disposablelike_isdisposed])

### Methods

- [[DispatcherLike\_dispatch]](scheduling.PauseableLike.md#[dispatcherlike_dispatch])
- [[DisposableLike\_add]](scheduling.PauseableLike.md#[disposablelike_add])
- [[DisposableLike\_dispose]](scheduling.PauseableLike.md#[disposablelike_dispose])

## Properties

### [DispatcherLike\_scheduler]

• `Readonly` **[DispatcherLike\_scheduler]**: [`SchedulerLike`](scheduling.SchedulerLike.md)

#### Inherited from

[DispatcherLike](scheduling.DispatcherLike.md).[[DispatcherLike_scheduler]](scheduling.DispatcherLike.md#[dispatcherlike_scheduler])

___

### [DisposableLike\_error]

• `Readonly` **[DisposableLike\_error]**: [`Optional`](../modules/functions.md#optional)<`Error`\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[DispatcherLike](scheduling.DispatcherLike.md).[[DisposableLike_error]](scheduling.DispatcherLike.md#[disposablelike_error])

___

### [DisposableLike\_isDisposed]

• `Readonly` **[DisposableLike\_isDisposed]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[DispatcherLike](scheduling.DispatcherLike.md).[[DisposableLike_isDisposed]](scheduling.DispatcherLike.md#[disposablelike_isdisposed])

## Methods

### [DispatcherLike\_dispatch]

▸ **[DispatcherLike_dispatch]**(`req`): `void`

Dispatches the next request

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`Updater`](../modules/functions.md#updater)<[`PauseableState`](../modules/scheduling.md#pauseablestate)\> |

#### Returns

`void`

#### Inherited from

[DispatcherLike](scheduling.DispatcherLike.md).[[DispatcherLike_dispatch]](scheduling.DispatcherLike.md#[dispatcherlike_dispatch])

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

[DispatcherLike](scheduling.DispatcherLike.md).[[DisposableLike_add]](scheduling.DispatcherLike.md#[disposablelike_add])

___

### [DisposableLike\_dispose]

▸ **[DisposableLike_dispose]**(`error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | `Error` | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[DispatcherLike](scheduling.DispatcherLike.md).[[DisposableLike_dispose]](scheduling.DispatcherLike.md#[disposablelike_dispose])
