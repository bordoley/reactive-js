[Reactive-JS](../README.md) / [types](../modules/types.md) / SinkLike

# Interface: SinkLike<T\>

[types](../modules/types.md).SinkLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`DisposableLike`](types.DisposableLike.md)

  ↳ **`SinkLike`**

  ↳↳ [`EventListenerLike`](types.EventListenerLike.md)

  ↳↳ [`ObserverLike`](types.ObserverLike.md)

## Table of contents

### Properties

- [[\_\_\_DisposableLike\_error]](types.SinkLike.md#[___disposablelike_error])
- [[\_\_\_DisposableLike\_isDisposed]](types.SinkLike.md#[___disposablelike_isdisposed])

### Methods

- [[\_\_\_DisposableLike\_add]](types.SinkLike.md#[___disposablelike_add])
- [[\_\_\_DisposableLike\_dispose]](types.SinkLike.md#[___disposablelike_dispose])
- [[\_\_\_SinkLike\_notify]](types.SinkLike.md#[___sinklike_notify])

## Properties

### [\_\_\_DisposableLike\_error]

• `Readonly` **[\_\_\_DisposableLike\_error]**: [`Optional`](../modules/functions.md#optional)<`Error`\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[DisposableLike](types.DisposableLike.md).[[___DisposableLike_error]](types.DisposableLike.md#[___disposablelike_error])

___

### [\_\_\_DisposableLike\_isDisposed]

• `Readonly` **[\_\_\_DisposableLike\_isDisposed]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[DisposableLike](types.DisposableLike.md).[[___DisposableLike_isDisposed]](types.DisposableLike.md#[___disposablelike_isdisposed])

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

#### Inherited from

[DisposableLike](types.DisposableLike.md).[[___DisposableLike_add]](types.DisposableLike.md#[___disposablelike_add])

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

#### Inherited from

[DisposableLike](types.DisposableLike.md).[[___DisposableLike_dispose]](types.DisposableLike.md#[___disposablelike_dispose])

___

### [\_\_\_SinkLike\_notify]

▸ **[___SinkLike_notify]**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |

#### Returns

`void`
