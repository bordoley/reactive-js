[Reactive-JS](../README.md) / [util](../modules/util.md) / DisposableLike

# Interface: DisposableLike

[util](../modules/util.md).DisposableLike

Represents an unmanaged resource that can be disposed.

## Hierarchy

- **`DisposableLike`**

  ↳ [`ObserverLike`](rx.ObserverLike.md)

  ↳ [`MulticastObservableLike`](rx.MulticastObservableLike.md)

  ↳ [`SchedulerLike`](scheduling.SchedulerLike.md)

  ↳ [`EventListenerLike`](util.EventListenerLike.md)

  ↳ [`MulticastedEventSourceLike`](util.MulticastedEventSourceLike.md)

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `disposable` | [`DisposableOrTeardown`](../modules/util.md#disposableorteardown) | The disposable to add. |
| `ignoreChildErrors` | `boolean` | Indicates that the parent should not auto dispose if the child disposed with an error. |

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
