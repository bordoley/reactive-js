[Reactive-JS](../README.md) / [rx/MulticastObservableLike](../modules/rx_MulticastObservableLike.md) / MulticastObservableLike

# Interface: MulticastObservableLike<T\>

[rx/MulticastObservableLike](../modules/rx_MulticastObservableLike.md).MulticastObservableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ObservableLike`](rx_ObservableLike.ObservableLike.md)<`T`\>

- [`DisposableLike`](util_DisposableLike.DisposableLike.md)

  ↳ **`MulticastObservableLike`**

  ↳↳ [`SubjectLike`](rx_SubjectLike.SubjectLike.md)

  ↳↳ [`StreamLike`](streaming_StreamLike.StreamLike.md)

## Table of contents

### Properties

- [T](rx_MulticastObservableLike.MulticastObservableLike.md#t)
- [TStatefulContainerState](rx_MulticastObservableLike.MulticastObservableLike.md#tstatefulcontainerstate)
- [[DisposableLike\_error]](rx_MulticastObservableLike.MulticastObservableLike.md#[disposablelike_error])
- [[DisposableLike\_isDisposed]](rx_MulticastObservableLike.MulticastObservableLike.md#[disposablelike_isdisposed])
- [[MulticastObservableLike\_observerCount]](rx_MulticastObservableLike.MulticastObservableLike.md#[multicastobservablelike_observercount])
- [[MulticastObservableLike\_replay]](rx_MulticastObservableLike.MulticastObservableLike.md#[multicastobservablelike_replay])
- [[ObservableLike\_observableType]](rx_MulticastObservableLike.MulticastObservableLike.md#[observablelike_observabletype])

### Methods

- [[DisposableLike\_add]](rx_MulticastObservableLike.MulticastObservableLike.md#[disposablelike_add])
- [[DisposableLike\_dispose]](rx_MulticastObservableLike.MulticastObservableLike.md#[disposablelike_dispose])

## Properties

### T

• **T**: `undefined` \| `T`

#### Inherited from

ObservableLike.T

___

### TStatefulContainerState

• `Optional` `Readonly` **TStatefulContainerState**: [`ObserverLike`](rx_ObserverLike.ObserverLike.md)<`T`\>

#### Inherited from

[ObservableLike](rx_ObservableLike.ObservableLike.md).[TStatefulContainerState](rx_ObservableLike.ObservableLike.md#tstatefulcontainerstate)

___

### [DisposableLike\_error]

• `Readonly` **[DisposableLike\_error]**: [`Option`](../modules/util_Option.md#option)<[`Error`](../modules/util_DisposableLike.md#error)\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[DisposableLike](util_DisposableLike.DisposableLike.md).[[DisposableLike_error]](util_DisposableLike.DisposableLike.md#[disposablelike_error])

___

### [DisposableLike\_isDisposed]

• `Readonly` **[DisposableLike\_isDisposed]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[DisposableLike](util_DisposableLike.DisposableLike.md).[[DisposableLike_isDisposed]](util_DisposableLike.DisposableLike.md#[disposablelike_isdisposed])

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

[ObservableLike](rx_ObservableLike.ObservableLike.md).[[ObservableLike_observableType]](rx_ObservableLike.ObservableLike.md#[observablelike_observabletype])

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

#### Inherited from

[DisposableLike](util_DisposableLike.DisposableLike.md).[[DisposableLike_add]](util_DisposableLike.DisposableLike.md#[disposablelike_add])

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

#### Inherited from

[DisposableLike](util_DisposableLike.DisposableLike.md).[[DisposableLike_dispose]](util_DisposableLike.DisposableLike.md#[disposablelike_dispose])
