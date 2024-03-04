[Reactive-JS](../README.md) / [utils](../modules/utils.md) / DisposableLike

# Interface: DisposableLike

[utils](../modules/utils.md).DisposableLike

## Hierarchy

- [`DisposableContainerLike`](utils.DisposableContainerLike.md)

- `Disposable`

  ↳ **`DisposableLike`**

  ↳↳ [`DispatcherLike`](concurrent.DispatcherLike.md)

  ↳↳ [`PauseableLike`](concurrent.PauseableLike.md)

  ↳↳ [`VirtualTimeSchedulerLike`](concurrent.VirtualTimeSchedulerLike.md)

  ↳↳ [`EventListenerLike`](events.EventListenerLike.md)

  ↳↳ [`WritableStoreLike`](events.WritableStoreLike.md)

  ↳↳ [`SerialDisposableLike`](utils.SerialDisposableLike.md)

## Table of contents

### Properties

- [[DisposableLike\_error]](utils.DisposableLike.md#[disposablelike_error])
- [[DisposableLike\_isDisposed]](utils.DisposableLike.md#[disposablelike_isdisposed])

### Methods

- [[dispose]](utils.DisposableLike.md#[dispose])

## Properties

### [DisposableLike\_error]

• `Readonly` **[DisposableLike\_error]**: [`Optional`](../modules/functions.md#optional)\<`Error`\>

The error the `Disposable` was disposed with if disposed.

___

### [DisposableLike\_isDisposed]

• `Readonly` **[DisposableLike\_isDisposed]**: `boolean`

`true` if this resource has been disposed, otherwise false

## Methods

### [dispose]

▸ **[dispose]**(`error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | `Error` | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Overrides

Disposable.[dispose]
