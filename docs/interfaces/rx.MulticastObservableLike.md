[Reactive-JS](../README.md) / [rx](../modules/rx.md) / MulticastObservableLike

# Interface: MulticastObservableLike<T\>

[rx](../modules/rx.md).MulticastObservableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ObservableLike`](rx.ObservableLike.md)<`T`\>

- [`DisposableLike`](util.DisposableLike.md)

  ↳ **`MulticastObservableLike`**

  ↳↳ [`SubjectLike`](rx.SubjectLike.md)

  ↳↳ [`StreamLike`](streaming.StreamLike.md)

## Table of contents

### Properties

- [T](rx.MulticastObservableLike.md#t)
- [TContainerOf](rx.MulticastObservableLike.md#tcontainerof)
- [TStatefulContainerState](rx.MulticastObservableLike.md#tstatefulcontainerstate)
- [[DisposableLike\_error]](rx.MulticastObservableLike.md#[disposablelike_error])
- [[DisposableLike\_isDisposed]](rx.MulticastObservableLike.md#[disposablelike_isdisposed])
- [[MulticastObservableLike\_observerCount]](rx.MulticastObservableLike.md#[multicastobservablelike_observercount])
- [[MulticastObservableLike\_replay]](rx.MulticastObservableLike.md#[multicastobservablelike_replay])
- [[ObservableLike\_observableType]](rx.MulticastObservableLike.md#[observablelike_observabletype])

### Methods

- [[DisposableLike\_add]](rx.MulticastObservableLike.md#[disposablelike_add])
- [[DisposableLike\_dispose]](rx.MulticastObservableLike.md#[disposablelike_dispose])

## Properties

### T

• `Optional` `Readonly` **T**: `unknown`

#### Inherited from

ObservableLike.T

___

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: [`ObservableLike`](rx.ObservableLike.md)<`unknown`\>

#### Inherited from

[ObservableLike](rx.ObservableLike.md).[TContainerOf](rx.ObservableLike.md#tcontainerof)

___

### TStatefulContainerState

• `Optional` `Readonly` **TStatefulContainerState**: [`ObserverLike`](scheduling.ObserverLike.md)<`T`\>

#### Inherited from

[ObservableLike](rx.ObservableLike.md).[TStatefulContainerState](rx.ObservableLike.md#tstatefulcontainerstate)

___

### [DisposableLike\_error]

• `Readonly` **[DisposableLike\_error]**: [`Option`](../modules/functions.md#option)<[`Error`](../modules/util.md#error)\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[DisposableLike](util.DisposableLike.md).[[DisposableLike_error]](util.DisposableLike.md#[disposablelike_error])

___

### [DisposableLike\_isDisposed]

• `Readonly` **[DisposableLike\_isDisposed]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[DisposableLike](util.DisposableLike.md).[[DisposableLike_isDisposed]](util.DisposableLike.md#[disposablelike_isdisposed])

___

### [MulticastObservableLike\_observerCount]

• `Readonly` **[MulticastObservableLike\_observerCount]**: `number`

The number of observers currently observing.

___

### [MulticastObservableLike\_replay]

• `Readonly` **[MulticastObservableLike\_replay]**: `number`

___

### [ObservableLike\_observableType]

• `Readonly` **[ObservableLike\_observableType]**: ``0`` \| ``2`` \| ``1``

#### Inherited from

[ObservableLike](rx.ObservableLike.md).[[ObservableLike_observableType]](rx.ObservableLike.md#[observablelike_observabletype])

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
| `error?` | [`Error`](../modules/util.md#error) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[DisposableLike](util.DisposableLike.md).[[DisposableLike_dispose]](util.DisposableLike.md#[disposablelike_dispose])
