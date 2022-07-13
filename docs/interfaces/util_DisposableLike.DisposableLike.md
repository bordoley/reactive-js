[Reactive-JS](../README.md) / [util/DisposableLike](../modules/util_DisposableLike.md) / DisposableLike

# Interface: DisposableLike

[util/DisposableLike](../modules/util_DisposableLike.md).DisposableLike

Represents an unmanaged resource that can be disposed.

## Hierarchy

- **`DisposableLike`**

  ↳ [`AsyncEnumeratorLike`](ix_AsyncEnumeratorLike.AsyncEnumeratorLike.md)

  ↳ [`InteractiveSourceLike`](ix_InteractiveSourceLike.InteractiveSourceLike.md)

  ↳ [`MulticastObservableLike`](rx_MulticastObservableLike.MulticastObservableLike.md)

  ↳ [`ReactiveSinkLike`](rx_ReactiveSinkLike.ReactiveSinkLike.md)

  ↳ [`ContinuationLike`](scheduling_ContinuationLike.ContinuationLike.md)

  ↳ [`DispatcherLike`](scheduling_DispatcherLike.DispatcherLike.md)

  ↳ [`SchedulerLike`](scheduling_SchedulerLike.SchedulerLike.md)

## Table of contents

### Properties

- [[DisposableLike\_error]](util_DisposableLike.DisposableLike.md#[disposablelike_error])
- [[DisposableLike\_isDisposed]](util_DisposableLike.DisposableLike.md#[disposablelike_isdisposed])

### Methods

- [[DisposableLike\_add]](util_DisposableLike.DisposableLike.md#[disposablelike_add])
- [[DisposableLike\_dispose]](util_DisposableLike.DisposableLike.md#[disposablelike_dispose])

## Properties

### [DisposableLike\_error]

• `Readonly` **[DisposableLike\_error]**: [`Option`](../modules/util_Option.md#option)<[`Error`](../modules/util_DisposableLike.md#error)\>

The error the `Disposable` was disposed with if disposed.

___

### [DisposableLike\_isDisposed]

• `Readonly` **[DisposableLike\_isDisposed]**: `boolean`

`true` if this resource has been disposed, otherwise false

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
