[Reactive-JS](../README.md) / [rx](../modules/rx.md) / EnumerableObservableLike

# Interface: EnumerableObservableLike<T\>

[rx](../modules/rx.md).EnumerableObservableLike

The source of notifications which notifies a `ObserverLike` instance.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`RunnableObservableLike`](rx.RunnableObservableLike.md)<`T`\>

  ↳ **`EnumerableObservableLike`**

## Table of contents

### Properties

- [[ContainerLike\_type]](rx.EnumerableObservableLike.md#[containerlike_type])
- [[ObservableLike\_isEnumerable]](rx.EnumerableObservableLike.md#[observablelike_isenumerable])
- [[ObservableLike\_isRunnable]](rx.EnumerableObservableLike.md#[observablelike_isrunnable])
- [[StatefulContainerLike\_state]](rx.EnumerableObservableLike.md#[statefulcontainerlike_state])

## Properties

### [ContainerLike\_type]

• `Optional` `Readonly` **[ContainerLike\_type]**: [`EnumerableObservableLike`](rx.EnumerableObservableLike.md)<`unknown`\>

#### Overrides

[RunnableObservableLike](rx.RunnableObservableLike.md).[[ContainerLike_type]](rx.RunnableObservableLike.md#[containerlike_type])

___

### [ObservableLike\_isEnumerable]

• `Readonly` **[ObservableLike\_isEnumerable]**: ``true``

#### Overrides

[RunnableObservableLike](rx.RunnableObservableLike.md).[[ObservableLike_isEnumerable]](rx.RunnableObservableLike.md#[observablelike_isenumerable])

___

### [ObservableLike\_isRunnable]

• `Readonly` **[ObservableLike\_isRunnable]**: ``true``

#### Inherited from

[RunnableObservableLike](rx.RunnableObservableLike.md).[[ObservableLike_isRunnable]](rx.RunnableObservableLike.md#[observablelike_isrunnable])

___

### [StatefulContainerLike\_state]

• `Optional` `Readonly` **[StatefulContainerLike\_state]**: [`ObserverLike`](rx.ObserverLike.md)<`unknown`\>

#### Inherited from

[RunnableObservableLike](rx.RunnableObservableLike.md).[[StatefulContainerLike_state]](rx.RunnableObservableLike.md#[statefulcontainerlike_state])
