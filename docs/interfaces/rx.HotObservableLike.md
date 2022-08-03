[Reactive-JS](../README.md) / [rx](../modules/rx.md) / HotObservableLike

# Interface: HotObservableLike<T\>

[rx](../modules/rx.md).HotObservableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ObservableLike`](rx.ObservableLike.md)<`T`\>

  ↳ **`HotObservableLike`**

  ↳↳ [`MulticastObservableLike`](rx.MulticastObservableLike.md)

## Table of contents

### Properties

- [T](rx.HotObservableLike.md#t)
- [TContainerOf](rx.HotObservableLike.md#tcontainerof)
- [TStatefulContainerState](rx.HotObservableLike.md#tstatefulcontainerstate)
- [[ObservableLike\_observableType]](rx.HotObservableLike.md#[observablelike_observabletype])

## Properties

### T

• `Optional` `Readonly` **T**: `unknown`

#### Inherited from

ObservableLike.T

___

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: [`HotObservableLike`](rx.HotObservableLike.md)<`unknown`\>

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
