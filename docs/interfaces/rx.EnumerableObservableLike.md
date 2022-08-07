[Reactive-JS](../README.md) / [rx](../modules/rx.md) / EnumerableObservableLike

# Interface: EnumerableObservableLike<T\>

[rx](../modules/rx.md).EnumerableObservableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`RunnableObservableLike`](rx.RunnableObservableLike.md)<`T`\>

  ↳ **`EnumerableObservableLike`**

## Table of contents

### Properties

- [T](rx.EnumerableObservableLike.md#t)
- [TContainerOf](rx.EnumerableObservableLike.md#tcontainerof)
- [TStatefulContainerState](rx.EnumerableObservableLike.md#tstatefulcontainerstate)
- [[ObservableLike\_isEnumerable]](rx.EnumerableObservableLike.md#[observablelike_isenumerable])
- [[ObservableLike\_isRunnable]](rx.EnumerableObservableLike.md#[observablelike_isrunnable])

## Properties

### T

• `Optional` `Readonly` **T**: `unknown`

#### Inherited from

[RunnableObservableLike](rx.RunnableObservableLike.md).[T](rx.RunnableObservableLike.md#t)

___

### TContainerOf

• `Optional` **TContainerOf**: [`EnumerableObservableLike`](rx.EnumerableObservableLike.md)<`unknown`\>

#### Overrides

[RunnableObservableLike](rx.RunnableObservableLike.md).[TContainerOf](rx.RunnableObservableLike.md#tcontainerof)

___

### TStatefulContainerState

• `Optional` `Readonly` **TStatefulContainerState**: [`ObserverLike`](scheduling.ObserverLike.md)<`unknown`\>

#### Inherited from

[RunnableObservableLike](rx.RunnableObservableLike.md).[TStatefulContainerState](rx.RunnableObservableLike.md#tstatefulcontainerstate)

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
