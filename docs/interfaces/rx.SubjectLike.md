[Reactive-JS](../README.md) / [rx](../modules/rx.md) / SubjectLike

# Interface: SubjectLike<T\>

[rx](../modules/rx.md).SubjectLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`MulticastObservableLike`](rx.MulticastObservableLike.md)<`T`\>

  ↳ **`SubjectLike`**

## Table of contents

### Properties

- [T](rx.SubjectLike.md#t)
- [TContainerOf](rx.SubjectLike.md#tcontainerof)
- [TStatefulContainerState](rx.SubjectLike.md#tstatefulcontainerstate)
- [[DisposableLike\_error]](rx.SubjectLike.md#[disposablelike_error])
- [[DisposableLike\_isDisposed]](rx.SubjectLike.md#[disposablelike_isdisposed])
- [[MulticastObservableLike\_observerCount]](rx.SubjectLike.md#[multicastobservablelike_observercount])
- [[MulticastObservableLike\_replay]](rx.SubjectLike.md#[multicastobservablelike_replay])
- [[ObservableLike\_observableType]](rx.SubjectLike.md#[observablelike_observabletype])

### Methods

- [[DisposableLike\_add]](rx.SubjectLike.md#[disposablelike_add])
- [[DisposableLike\_dispose]](rx.SubjectLike.md#[disposablelike_dispose])
- [[SubjectLike\_publish]](rx.SubjectLike.md#[subjectlike_publish])

## Properties

### T

• `Optional` `Readonly` **T**: `unknown`

#### Inherited from

[MulticastObservableLike](rx.MulticastObservableLike.md).[T](rx.MulticastObservableLike.md#t)

___

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: [`ObservableLike`](rx.ObservableLike.md)<`unknown`\>

#### Inherited from

[MulticastObservableLike](rx.MulticastObservableLike.md).[TContainerOf](rx.MulticastObservableLike.md#tcontainerof)

___

### TStatefulContainerState

• `Optional` `Readonly` **TStatefulContainerState**: [`ObserverLike`](scheduling.ObserverLike.md)<`unknown`\>

#### Inherited from

[MulticastObservableLike](rx.MulticastObservableLike.md).[TStatefulContainerState](rx.MulticastObservableLike.md#tstatefulcontainerstate)

___

### [DisposableLike\_error]

• `Readonly` **[DisposableLike\_error]**: [`Option`](../modules/functions.md#option)<[`Error`](../modules/util.md#error)\>

The error the `Disposable` was disposed with if disposed.

#### Inherited from

[MulticastObservableLike](rx.MulticastObservableLike.md).[[DisposableLike_error]](rx.MulticastObservableLike.md#[disposablelike_error])

___

### [DisposableLike\_isDisposed]

• `Readonly` **[DisposableLike\_isDisposed]**: `boolean`

`true` if this resource has been disposed, otherwise false

#### Inherited from

[MulticastObservableLike](rx.MulticastObservableLike.md).[[DisposableLike_isDisposed]](rx.MulticastObservableLike.md#[disposablelike_isdisposed])

___

### [MulticastObservableLike\_observerCount]

• `Readonly` **[MulticastObservableLike\_observerCount]**: `number`

The number of observers currently observing.

#### Inherited from

[MulticastObservableLike](rx.MulticastObservableLike.md).[[MulticastObservableLike_observerCount]](rx.MulticastObservableLike.md#[multicastobservablelike_observercount])

___

### [MulticastObservableLike\_replay]

• `Readonly` **[MulticastObservableLike\_replay]**: `number`

#### Inherited from

[MulticastObservableLike](rx.MulticastObservableLike.md).[[MulticastObservableLike_replay]](rx.MulticastObservableLike.md#[multicastobservablelike_replay])

___

### [ObservableLike\_observableType]

• `Readonly` **[ObservableLike\_observableType]**: ``0`` \| ``2`` \| ``1``

#### Inherited from

[MulticastObservableLike](rx.MulticastObservableLike.md).[[ObservableLike_observableType]](rx.MulticastObservableLike.md#[observablelike_observabletype])

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

[MulticastObservableLike](rx.MulticastObservableLike.md).[[DisposableLike_add]](rx.MulticastObservableLike.md#[disposablelike_add])

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

[MulticastObservableLike](rx.MulticastObservableLike.md).[[DisposableLike_dispose]](rx.MulticastObservableLike.md#[disposablelike_dispose])

___

### [SubjectLike\_publish]

▸ **[SubjectLike_publish]**(`next`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `next` | `T` |

#### Returns

`void`
