[Reactive-JS](../README.md) / [util](../modules/util.md) / DisposableLike

# Interface: DisposableLike

[util](../modules/util.md).DisposableLike

Represents an unmanaged resource that can be disposed.

## Hierarchy

- **`DisposableLike`**

  ↳ [`EnumeratorLike`](ix.EnumeratorLike.md)

  ↳ [`ObserverLike`](rx.ObserverLike.md)

  ↳ [`MulticastObservableLike`](rx.MulticastObservableLike.md)

  ↳ [`ContinuationLike`](scheduling.ContinuationLike.md)

  ↳ [`SchedulerLike`](scheduling.SchedulerLike.md)

  ↳ [`DispatcherLike`](scheduling.DispatcherLike.md)

## Table of contents

### Properties

- [[DisposableLike\_error]](util.DisposableLike.md#[disposablelike_error])
- [[DisposableLike\_isDisposed]](util.DisposableLike.md#[disposablelike_isdisposed])

### Methods

- [[DisposableLike\_add]](util.DisposableLike.md#[disposablelike_add])
- [[DisposableLike\_dispose]](util.DisposableLike.md#[disposablelike_dispose])

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
