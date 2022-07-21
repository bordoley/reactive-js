[Reactive-JS](../README.md) / [rx/SubjectLike](../modules/rx_SubjectLike.md) / SubjectLike

# Interface: SubjectLike<T\>

[rx/SubjectLike](../modules/rx_SubjectLike.md).SubjectLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`MulticastObservableLike`](rx_MulticastObservableLike.MulticastObservableLike.md)<`T`\>

  ↳ **`SubjectLike`**

## Table of contents

### Properties

- [T](rx_SubjectLike.SubjectLike.md#t)
- [TStatefulContainerState](rx_SubjectLike.SubjectLike.md#tstatefulcontainerstate)
- [[DisposableLike\_error]](rx_SubjectLike.SubjectLike.md#[disposablelike_error])
- [[DisposableLike\_isDisposed]](rx_SubjectLike.SubjectLike.md#[disposablelike_isdisposed])
- [[MulticastObservableLike\_observerCount]](rx_SubjectLike.SubjectLike.md#[multicastobservablelike_observercount])
- [[MulticastObservableLike\_replay]](rx_SubjectLike.SubjectLike.md#[multicastobservablelike_replay])
- [[ObservableLike\_observableType]](rx_SubjectLike.SubjectLike.md#[observablelike_observabletype])

### Methods

- [[DisposableLike\_add]](rx_SubjectLike.SubjectLike.md#[disposablelike_add])
- [[DisposableLike\_dispose]](rx_SubjectLike.SubjectLike.md#[disposablelike_dispose])
- [[SubjectLike\_publish]](rx_SubjectLike.SubjectLike.md#[subjectlike_publish])

## Properties

### T

• `Optional` `Readonly` **T**: `unknown`

#### Inherited from

[MulticastObservableLike](rx_MulticastObservableLike.MulticastObservableLike.md).[T](rx_MulticastObservableLike.MulticastObservableLike.md#t)

___

### TStatefulContainerState

• `Optional` `Readonly` **TStatefulContainerState**: [`ObserverLike`](rx_ObserverLike.ObserverLike.md)<`T`\>

#### Inherited from

[MulticastObservableLike](rx_MulticastObservableLike.MulticastObservableLike.md).[TStatefulContainerState](rx_MulticastObservableLike.MulticastObservableLike.md#tstatefulcontainerstate)

___

### [DisposableLike\_error]

• `Readonly` **[DisposableLike\_error]**: [`Option`](../modules/util_Option.md#option)<[`Error`](../modules/util_DisposableLike.md#error)\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[MulticastObservableLike](rx_MulticastObservableLike.MulticastObservableLike.md).[[DisposableLike_error]](rx_MulticastObservableLike.MulticastObservableLike.md#[disposablelike_error])

___

### [DisposableLike\_isDisposed]

• `Readonly` **[DisposableLike\_isDisposed]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[MulticastObservableLike](rx_MulticastObservableLike.MulticastObservableLike.md).[[DisposableLike_isDisposed]](rx_MulticastObservableLike.MulticastObservableLike.md#[disposablelike_isdisposed])

___

### [MulticastObservableLike\_observerCount]

• `Readonly` **[MulticastObservableLike\_observerCount]**: `number`

The number of observers currently observing.

#### Inherited from

[MulticastObservableLike](rx_MulticastObservableLike.MulticastObservableLike.md).[[MulticastObservableLike_observerCount]](rx_MulticastObservableLike.MulticastObservableLike.md#[multicastobservablelike_observercount])

___

### [MulticastObservableLike\_replay]

• `Readonly` **[MulticastObservableLike\_replay]**: `number`

#### Inherited from

[MulticastObservableLike](rx_MulticastObservableLike.MulticastObservableLike.md).[[MulticastObservableLike_replay]](rx_MulticastObservableLike.MulticastObservableLike.md#[multicastobservablelike_replay])

___

### [ObservableLike\_observableType]

• `Readonly` **[ObservableLike\_observableType]**: ``0`` \| ``2`` \| ``1``

#### Inherited from

[MulticastObservableLike](rx_MulticastObservableLike.MulticastObservableLike.md).[[ObservableLike_observableType]](rx_MulticastObservableLike.MulticastObservableLike.md#[observablelike_observabletype])

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

[MulticastObservableLike](rx_MulticastObservableLike.MulticastObservableLike.md).[[DisposableLike_add]](rx_MulticastObservableLike.MulticastObservableLike.md#[disposablelike_add])

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

[MulticastObservableLike](rx_MulticastObservableLike.MulticastObservableLike.md).[[DisposableLike_dispose]](rx_MulticastObservableLike.MulticastObservableLike.md#[disposablelike_dispose])

___

### [SubjectLike\_publish]

▸ **[SubjectLike_publish]**(`next`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `next` | `T` |

#### Returns

`void`
