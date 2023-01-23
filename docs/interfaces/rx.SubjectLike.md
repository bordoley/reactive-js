[Reactive-JS](../README.md) / [rx](../modules/rx.md) / SubjectLike

# Interface: SubjectLike<T\>

[rx](../modules/rx.md).SubjectLike

The source of notifications which notifies a `ObserverLike` instance.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`MulticastObservableLike`](rx.MulticastObservableLike.md)<`T`\>

  ↳ **`SubjectLike`**

## Table of contents

### Properties

- [[ContainerLike\_type]](rx.SubjectLike.md#[containerlike_type])
- [[DisposableLike\_error]](rx.SubjectLike.md#[disposablelike_error])
- [[DisposableLike\_isDisposed]](rx.SubjectLike.md#[disposablelike_isdisposed])
- [[MulticastObservableLike\_observerCount]](rx.SubjectLike.md#[multicastobservablelike_observercount])
- [[MulticastObservableLike\_replay]](rx.SubjectLike.md#[multicastobservablelike_replay])
- [[ObservableLike\_isEnumerable]](rx.SubjectLike.md#[observablelike_isenumerable])
- [[ObservableLike\_isRunnable]](rx.SubjectLike.md#[observablelike_isrunnable])
- [[StatefulContainerLike\_state]](rx.SubjectLike.md#[statefulcontainerlike_state])

### Methods

- [[DisposableLike\_add]](rx.SubjectLike.md#[disposablelike_add])
- [[DisposableLike\_dispose]](rx.SubjectLike.md#[disposablelike_dispose])
- [[SubjectLike\_publish]](rx.SubjectLike.md#[subjectlike_publish])

## Properties

### [ContainerLike\_type]

• `Optional` `Readonly` **[ContainerLike\_type]**: [`ObservableLike`](rx.ObservableLike.md)<`unknown`\>

#### Inherited from

[MulticastObservableLike](rx.MulticastObservableLike.md).[[ContainerLike_type]](rx.MulticastObservableLike.md#[containerlike_type])

___

### [DisposableLike\_error]

• `Readonly` **[DisposableLike\_error]**: [`Optional`](../modules/functions.md#optional)<`Error`\>

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

### [ObservableLike\_isEnumerable]

• `Readonly` **[ObservableLike\_isEnumerable]**: `boolean`

#### Inherited from

[MulticastObservableLike](rx.MulticastObservableLike.md).[[ObservableLike_isEnumerable]](rx.MulticastObservableLike.md#[observablelike_isenumerable])

___

### [ObservableLike\_isRunnable]

• `Readonly` **[ObservableLike\_isRunnable]**: `boolean`

#### Inherited from

[MulticastObservableLike](rx.MulticastObservableLike.md).[[ObservableLike_isRunnable]](rx.MulticastObservableLike.md#[observablelike_isrunnable])

___

### [StatefulContainerLike\_state]

• `Optional` `Readonly` **[StatefulContainerLike\_state]**: [`ObserverLike`](rx.ObserverLike.md)<`unknown`\>

#### Inherited from

[MulticastObservableLike](rx.MulticastObservableLike.md).[[StatefulContainerLike_state]](rx.MulticastObservableLike.md#[statefulcontainerlike_state])

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
| `error?` | `Error` | An optional error that signals the resource is being disposed due to an error. |

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
