[Reactive-JS](../README.md) / [utils](../modules/utils.md) / DisposableLike

# Interface: DisposableLike

[utils](../modules/utils.md).DisposableLike

## Hierarchy

- **`DisposableLike`**

  ↳ [`DispatcherLike`](concurrent.DispatcherLike.md)

  ↳ [`PauseableLike`](concurrent.PauseableLike.md)

  ↳ [`VirtualTimeSchedulerLike`](concurrent.VirtualTimeSchedulerLike.md)

  ↳ [`SinkLike`](events.SinkLike.md)

  ↳ [`WritableStoreLike`](events.WritableStoreLike.md)

  ↳ [`SerialDisposableLike`](utils.SerialDisposableLike.md)

## Table of contents

### Properties

- [[DisposableLike\_error]](utils.DisposableLike.md#[disposablelike_error])
- [[DisposableLike\_isDisposed]](utils.DisposableLike.md#[disposablelike_isdisposed])

### Methods

- [[DisposableLike\_add]](utils.DisposableLike.md#[disposablelike_add])
- [[DisposableLike\_dispose]](utils.DisposableLike.md#[disposablelike_dispose])

## Properties

### [DisposableLike\_error]

• `Readonly` **[DisposableLike\_error]**: [`Optional`](../modules/functions.md#optional)<`Error`\>

The error the `Disposable` was disposed with if disposed.

___

### [DisposableLike\_isDisposed]

• `Readonly` **[DisposableLike\_isDisposed]**: `boolean`

`true` if this resource has been disposed, otherwise false

## Methods

### [DisposableLike\_add]

▸ **[DisposableLike_add]**(`disposable`): `void`

Adds the given `DisposableLike` or teardown function to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `disposable` | [`DisposableLike`](utils.DisposableLike.md) | The disposable to add. |

#### Returns

`void`

▸ **[DisposableLike_add]**(`teardown`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `teardown` | [`SideEffect1`](../modules/functions.md#sideeffect1)<[`Optional`](../modules/functions.md#optional)<`Error`\>\> |

#### Returns

`void`

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
