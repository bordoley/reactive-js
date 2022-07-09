[Reactive-JS](../README.md) / [observable](../modules/observable.md) / ObservableLike

# Interface: ObservableLike<T\>

[observable](../modules/observable.md).ObservableLike

The source of notifications which notifies a `ObserverLike` instance.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`ReactiveContainerLike`](reactiveContainer.ReactiveContainerLike.md)

  ↳ **`ObservableLike`**

  ↳↳ [`MulticastObservableLike`](observable.MulticastObservableLike.md)

  ↳↳ [`RunnableObservableLike`](observable.RunnableObservableLike.md)

## Table of contents

### Properties

- [T](observable.ObservableLike.md#t)
- [TContainerOf](observable.ObservableLike.md#tcontainerof)
- [TLiftableContainerState](observable.ObservableLike.md#tliftablecontainerstate)
- [observableType](observable.ObservableLike.md#observabletype)

### Methods

- [sinkInto](observable.ObservableLike.md#sinkinto)

## Properties

### T

• **T**: `unknown`

#### Overrides

[ReactiveContainerLike](reactiveContainer.ReactiveContainerLike.md).[T](reactiveContainer.ReactiveContainerLike.md#t)

___

### TContainerOf

• `Readonly` **TContainerOf**: [`ObservableLike`](observable.ObservableLike.md)<`unknown`\>

#### Overrides

[ReactiveContainerLike](reactiveContainer.ReactiveContainerLike.md).[TContainerOf](reactiveContainer.ReactiveContainerLike.md#tcontainerof)

___

### TLiftableContainerState

• `Readonly` **TLiftableContainerState**: [`ObserverLike`](observer.ObserverLike.md)<`unknown`\>

#### Overrides

[ReactiveContainerLike](reactiveContainer.ReactiveContainerLike.md).[TLiftableContainerState](reactiveContainer.ReactiveContainerLike.md#tliftablecontainerstate)

___

### observableType

• `Readonly` **observableType**: ``0`` \| ``2`` \| ``1``

## Methods

### sinkInto

▸ **sinkInto**(`this`, `sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`ObservableLike`](observable.ObservableLike.md)<[`T`](flowable.FlowableStreamLike.md#t)\> |
| `sink` | [`ObserverLike`](observer.ObserverLike.md)<[`T`](flowable.FlowableStreamLike.md#t)\> |

#### Returns

`void`

#### Overrides

[ReactiveContainerLike](reactiveContainer.ReactiveContainerLike.md).[sinkInto](reactiveContainer.ReactiveContainerLike.md#sinkinto)
