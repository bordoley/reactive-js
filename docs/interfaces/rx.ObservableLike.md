[Reactive-JS](../README.md) / [rx](../modules/rx.md) / ObservableLike

# Interface: ObservableLike<T\>

[rx](../modules/rx.md).ObservableLike

The source of notifications which notifies a `ObserverLike` instance.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ReactiveContainerLike`](rx.ReactiveContainerLike.md)

  ↳ **`ObservableLike`**

  ↳↳ [`MulticastObservableLike`](rx.MulticastObservableLike.md)

  ↳↳ [`RunnableObservableLike`](rx.RunnableObservableLike.md)

## Table of contents

### Properties

- [TStatefulContainerState](rx.ObservableLike.md#tstatefulcontainerstate)
- [[ObservableLike\_observableType]](rx.ObservableLike.md#[observablelike_observabletype])

## Properties

### TStatefulContainerState

• `Optional` `Readonly` **TStatefulContainerState**: [`ObserverLike`](scheduling.ObserverLike.md)<`T`\>

#### Overrides

[ReactiveContainerLike](rx.ReactiveContainerLike.md).[TStatefulContainerState](rx.ReactiveContainerLike.md#tstatefulcontainerstate)

___

### [ObservableLike\_observableType]

• `Readonly` **[ObservableLike\_observableType]**: ``0`` \| ``2`` \| ``1``
