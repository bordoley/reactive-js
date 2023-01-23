[Reactive-JS](../README.md) / [rx](../modules/rx.md) / RunnableObservableLike

# Interface: RunnableObservableLike<T\>

[rx](../modules/rx.md).RunnableObservableLike

The source of notifications which notifies a `ObserverLike` instance.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ObservableLike`](rx.ObservableLike.md)<`T`\>

  ↳ **`RunnableObservableLike`**

  ↳↳ [`EnumerableObservableLike`](rx.EnumerableObservableLike.md)

## Table of contents

### Properties

- [[ContainerLike\_type]](rx.RunnableObservableLike.md#[containerlike_type])
- [[ObservableLike\_isEnumerable]](rx.RunnableObservableLike.md#[observablelike_isenumerable])
- [[ObservableLike\_isRunnable]](rx.RunnableObservableLike.md#[observablelike_isrunnable])
- [[StatefulContainerLike\_state]](rx.RunnableObservableLike.md#[statefulcontainerlike_state])

## Properties

### [ContainerLike\_type]

• `Optional` `Readonly` **[ContainerLike\_type]**: [`RunnableObservableLike`](rx.RunnableObservableLike.md)<`unknown`\>

#### Overrides

[ObservableLike](rx.ObservableLike.md).[[ContainerLike_type]](rx.ObservableLike.md#[containerlike_type])

___

### [ObservableLike\_isEnumerable]

• `Readonly` **[ObservableLike\_isEnumerable]**: `boolean`

#### Inherited from

[ObservableLike](rx.ObservableLike.md).[[ObservableLike_isEnumerable]](rx.ObservableLike.md#[observablelike_isenumerable])

___

### [ObservableLike\_isRunnable]

• `Readonly` **[ObservableLike\_isRunnable]**: ``true``

#### Overrides

[ObservableLike](rx.ObservableLike.md).[[ObservableLike_isRunnable]](rx.ObservableLike.md#[observablelike_isrunnable])

___

### [StatefulContainerLike\_state]

• `Optional` `Readonly` **[StatefulContainerLike\_state]**: [`ObserverLike`](rx.ObserverLike.md)<`unknown`\>

#### Inherited from

[ObservableLike](rx.ObservableLike.md).[[StatefulContainerLike_state]](rx.ObservableLike.md#[statefulcontainerlike_state])
