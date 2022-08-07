[Reactive-JS](../README.md) / [rx](../modules/rx.md) / RunnableObservableLike

# Interface: RunnableObservableLike<T\>

[rx](../modules/rx.md).RunnableObservableLike

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

- [T](rx.RunnableObservableLike.md#t)
- [TContainerOf](rx.RunnableObservableLike.md#tcontainerof)
- [TStatefulContainerState](rx.RunnableObservableLike.md#tstatefulcontainerstate)
- [[ObservableLike\_isEnumerable]](rx.RunnableObservableLike.md#[observablelike_isenumerable])
- [[ObservableLike\_isRunnable]](rx.RunnableObservableLike.md#[observablelike_isrunnable])

## Properties

### T

• `Optional` `Readonly` **T**: `unknown`

#### Inherited from

ObservableLike.T

___

### TContainerOf

• `Optional` **TContainerOf**: [`RunnableObservableLike`](rx.RunnableObservableLike.md)<`unknown`\>

#### Overrides

[ObservableLike](rx.ObservableLike.md).[TContainerOf](rx.ObservableLike.md#tcontainerof)

___

### TStatefulContainerState

• `Optional` `Readonly` **TStatefulContainerState**: [`ObserverLike`](scheduling.ObserverLike.md)<`unknown`\>

#### Inherited from

[ObservableLike](rx.ObservableLike.md).[TStatefulContainerState](rx.ObservableLike.md#tstatefulcontainerstate)

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
