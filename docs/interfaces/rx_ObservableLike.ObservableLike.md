[Reactive-JS](../README.md) / [rx/ObservableLike](../modules/rx_ObservableLike.md) / ObservableLike

# Interface: ObservableLike<T\>

[rx/ObservableLike](../modules/rx_ObservableLike.md).ObservableLike

The source of notifications which notifies a `ObserverLike` instance.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ReactiveContainerLike`](rx_ReactiveContainerLike.ReactiveContainerLike.md)<`T`\>

  ↳ **`ObservableLike`**

  ↳↳ [`MulticastObservableLike`](rx_MulticastObservableLike.MulticastObservableLike.md)

  ↳↳ [`RunnableObservableLike`](rx_RunnableObservableLike.RunnableObservableLike.md)

## Table of contents

### Properties

- [TStatefulContainerState](rx_ObservableLike.ObservableLike.md#tstatefulcontainerstate)
- [[ObservableLike\_observableType]](rx_ObservableLike.ObservableLike.md#[observablelike_observabletype])

## Properties

### TStatefulContainerState

• `Optional` `Readonly` **TStatefulContainerState**: [`ObserverLike`](rx_ObserverLike.ObserverLike.md)<`T`\>

#### Overrides

[ReactiveContainerLike](rx_ReactiveContainerLike.ReactiveContainerLike.md).[TStatefulContainerState](rx_ReactiveContainerLike.ReactiveContainerLike.md#tstatefulcontainerstate)

___

### [ObservableLike\_observableType]

• `Readonly` **[ObservableLike\_observableType]**: ``0`` \| ``2`` \| ``1``
