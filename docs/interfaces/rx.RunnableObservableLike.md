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
- [[ObservableLike\_observableType]](rx.RunnableObservableLike.md#[observablelike_observabletype])

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

• `Optional` `Readonly` **TStatefulContainerState**: [`ObserverLike`](scheduling.ObserverLike.md)<`unknown`\>

#### Inherited from

[ObservableLike](rx.ObservableLike.md).[TStatefulContainerState](rx.ObservableLike.md#tstatefulcontainerstate)

___

### [ObservableLike\_observableType]

• `Optional` `Readonly` **[ObservableLike\_observableType]**: [`RunnableObservableType`](../modules/rx.md#runnableobservabletype)
