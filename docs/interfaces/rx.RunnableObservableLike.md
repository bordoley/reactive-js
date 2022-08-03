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

• `Optional` `Readonly` **TContainerOf**: [`RunnableObservableLike`](rx.RunnableObservableLike.md)<`unknown`\>

#### Overrides

[ObservableLike](rx.ObservableLike.md).[TContainerOf](rx.ObservableLike.md#tcontainerof)

___

### TStatefulContainerState

• `Optional` `Readonly` **TStatefulContainerState**: [`ObserverLike`](scheduling.ObserverLike.md)<`unknown`\>

#### Inherited from

[ObservableLike](rx.ObservableLike.md).[TStatefulContainerState](rx.ObservableLike.md#tstatefulcontainerstate)

___

### [ObservableLike\_observableType]

• `Readonly` **[ObservableLike\_observableType]**: [`ObservableType`](../modules/rx.md#observabletype)

#### Overrides

[ObservableLike](rx.ObservableLike.md).[[ObservableLike_observableType]](rx.ObservableLike.md#[observablelike_observabletype])
