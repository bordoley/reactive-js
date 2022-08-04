[Reactive-JS](../README.md) / [rx](../modules/rx.md) / ObservableLike

# Interface: ObservableLike<T\>

[rx](../modules/rx.md).ObservableLike

The source of notifications which notifies a `ObserverLike` instance.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ReactiveContainerLike`](rx.ReactiveContainerLike.md)<[`ObserverLike`](scheduling.ObserverLike.md)<`T`\>\>

  ↳ **`ObservableLike`**

  ↳↳ [`EnumerableObservableLike`](rx.EnumerableObservableLike.md)

  ↳↳ [`MulticastObservableLike`](rx.MulticastObservableLike.md)

  ↳↳ [`RunnableObservableLike`](rx.RunnableObservableLike.md)

## Table of contents

### Properties

- [TContainerOf](rx.ObservableLike.md#tcontainerof)
- [TStatefulContainerState](rx.ObservableLike.md#tstatefulcontainerstate)
- [[ObservableLike\_observableType]](rx.ObservableLike.md#[observablelike_observabletype])

## Properties

### TContainerOf

• `Optional` **TContainerOf**: [`ObservableLike`](rx.ObservableLike.md)<`unknown`\>

#### Overrides

[ReactiveContainerLike](rx.ReactiveContainerLike.md).[TContainerOf](rx.ReactiveContainerLike.md#tcontainerof)

___

### TStatefulContainerState

• `Optional` `Readonly` **TStatefulContainerState**: [`ObserverLike`](scheduling.ObserverLike.md)<`unknown`\>

#### Overrides

[ReactiveContainerLike](rx.ReactiveContainerLike.md).[TStatefulContainerState](rx.ReactiveContainerLike.md#tstatefulcontainerstate)

___

### [ObservableLike\_observableType]

• `Readonly` **[ObservableLike\_observableType]**: [`ObservableType`](../modules/rx.md#observabletype)
