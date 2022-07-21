[Reactive-JS](../README.md) / [rx/RunnableLike](../modules/rx_RunnableLike.md) / RunnableLike

# Interface: RunnableLike<T\>

[rx/RunnableLike](../modules/rx_RunnableLike.md).RunnableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ReactiveContainerLike`](rx_ReactiveContainerLike.ReactiveContainerLike.md)

  ↳ **`RunnableLike`**

## Table of contents

### Properties

- [T](rx_RunnableLike.RunnableLike.md#t)
- [TContainerOf](rx_RunnableLike.RunnableLike.md#tcontainerof)
- [TStatefulContainerState](rx_RunnableLike.RunnableLike.md#tstatefulcontainerstate)

### Methods

- [[ReactiveContainerLike\_sinkInto]](rx_RunnableLike.RunnableLike.md#[reactivecontainerlike_sinkinto])

## Properties

### T

• `Optional` `Readonly` **T**: `unknown`

#### Inherited from

[ReactiveContainerLike](rx_ReactiveContainerLike.ReactiveContainerLike.md).[T](rx_ReactiveContainerLike.ReactiveContainerLike.md#t)

___

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: [`RunnableLike`](rx_RunnableLike.RunnableLike.md)<`T`\>

#### Inherited from

[ReactiveContainerLike](rx_ReactiveContainerLike.ReactiveContainerLike.md).[TContainerOf](rx_ReactiveContainerLike.ReactiveContainerLike.md#tcontainerof)

___

### TStatefulContainerState

• `Optional` `Readonly` **TStatefulContainerState**: [`ReactiveSinkLike`](rx_ReactiveSinkLike.ReactiveSinkLike.md)<`unknown`\>

#### Overrides

[ReactiveContainerLike](rx_ReactiveContainerLike.ReactiveContainerLike.md).[TStatefulContainerState](rx_ReactiveContainerLike.ReactiveContainerLike.md#tstatefulcontainerstate)

## Methods

### [ReactiveContainerLike\_sinkInto]

▸ **[ReactiveContainerLike_sinkInto]**(`sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | [`ReactiveSinkLike`](rx_ReactiveSinkLike.ReactiveSinkLike.md)<`T`\> |

#### Returns

`void`

#### Overrides

[ReactiveContainerLike](rx_ReactiveContainerLike.ReactiveContainerLike.md).[[ReactiveContainerLike_sinkInto]](rx_ReactiveContainerLike.ReactiveContainerLike.md#[reactivecontainerlike_sinkinto])
