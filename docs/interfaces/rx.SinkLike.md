[Reactive-JS](../README.md) / [rx](../modules/rx.md) / SinkLike

# Interface: SinkLike<T\>

[rx](../modules/rx.md).SinkLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`DisposableLike`](util.DisposableLike.md)

  ↳ **`SinkLike`**

  ↳↳ [`ObserverLike`](rx.ObserverLike.md)

## Table of contents

### Properties

- [[DisposableLike\_exception]](rx.SinkLike.md#[disposablelike_exception])
- [[DisposableLike\_isDisposed]](rx.SinkLike.md#[disposablelike_isdisposed])

### Methods

- [[DisposableLike\_add]](rx.SinkLike.md#[disposablelike_add])
- [[DisposableLike\_dispose]](rx.SinkLike.md#[disposablelike_dispose])
- [[SinkLike\_notify]](rx.SinkLike.md#[sinklike_notify])

## Properties

### [DisposableLike\_exception]

• `Readonly` **[DisposableLike\_exception]**: [`Optional`](../modules/functions.md#optional)<[`Exception`](../modules/util.md#exception)\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[DisposableLike](util.DisposableLike.md).[[DisposableLike_exception]](util.DisposableLike.md#[disposablelike_exception])

___

### [DisposableLike\_isDisposed]

• `Readonly` **[DisposableLike\_isDisposed]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[DisposableLike](util.DisposableLike.md).[[DisposableLike_isDisposed]](util.DisposableLike.md#[disposablelike_isdisposed])

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

[DisposableLike](util.DisposableLike.md).[[DisposableLike_add]](util.DisposableLike.md#[disposablelike_add])

___

### [DisposableLike\_dispose]

▸ **[DisposableLike_dispose]**(`error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | [`Exception`](../modules/util.md#exception) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[DisposableLike](util.DisposableLike.md).[[DisposableLike_dispose]](util.DisposableLike.md#[disposablelike_dispose])

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
