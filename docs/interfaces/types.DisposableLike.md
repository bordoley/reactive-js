[Reactive-JS](../README.md) / [types](../modules/types.md) / DisposableLike

# Interface: DisposableLike

[types](../modules/types.md).DisposableLike

Represents an unmanaged resource that can be disposed.

## Hierarchy

- **`DisposableLike`**

  ↳ [`EventListenerLike`](types.EventListenerLike.md)

  ↳ [`VirtualTimeSchedulerLike`](types.VirtualTimeSchedulerLike.md)

  ↳ [`ObserverLike`](types.ObserverLike.md)

## Table of contents

### Properties

- [[\_\_\_DisposableLike\_error]](types.DisposableLike.md#[___disposablelike_error])
- [[\_\_\_DisposableLike\_isDisposed]](types.DisposableLike.md#[___disposablelike_isdisposed])

### Methods

- [[\_\_\_DisposableLike\_add]](types.DisposableLike.md#[___disposablelike_add])
- [[\_\_\_DisposableLike\_dispose]](types.DisposableLike.md#[___disposablelike_dispose])

## Properties

### [\_\_\_DisposableLike\_error]

• `Readonly` **[\_\_\_DisposableLike\_error]**: [`Optional`](../modules/functions.md#optional)<`Error`\>

The error the `Disposable` was disposed with if disposed.

___

### [\_\_\_DisposableLike\_isDisposed]

• `Readonly` **[\_\_\_DisposableLike\_isDisposed]**: `boolean`

`true` if this resource has been disposed, otherwise false

## Methods

### [\_\_\_DisposableLike\_add]

▸ **[___DisposableLike_add]**(`disposable`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `disposable` | [`DisposableOrTeardown`](../modules/types.md#disposableorteardown) | The disposable to add. |

#### Returns

`void`

___

### [\_\_\_DisposableLike\_dispose]

▸ **[___DisposableLike_dispose]**(`error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | `Error` | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`
