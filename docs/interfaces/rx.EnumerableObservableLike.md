[Reactive-JS](../README.md) / [rx](../modules/rx.md) / EnumerableObservableLike

# Interface: EnumerableObservableLike<T\>

[rx](../modules/rx.md).EnumerableObservableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ObservableLike`](rx.ObservableLike.md)<`T`\>

  ↳ **`EnumerableObservableLike`**

## Table of contents

### Properties

- [T](rx.EnumerableObservableLike.md#t)
- [TContainerOf](rx.EnumerableObservableLike.md#tcontainerof)
- [TStatefulContainerState](rx.EnumerableObservableLike.md#tstatefulcontainerstate)
- [[ObservableLike\_observableType]](rx.EnumerableObservableLike.md#[observablelike_observabletype])

## Properties

### T

• `Optional` `Readonly` **T**: `unknown`

#### Inherited from

ObservableLike.T

___

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: [`EnumerableObservableLike`](rx.EnumerableObservableLike.md)<`unknown`\>

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
