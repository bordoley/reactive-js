[Reactive-JS](../README.md) / [rx/ReactiveContainerLike](../modules/rx_ReactiveContainerLike.md) / ReactiveContainerLike

# Interface: ReactiveContainerLike<T\>

[rx/ReactiveContainerLike](../modules/rx_ReactiveContainerLike.md).ReactiveContainerLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`StatefulContainerLike`](containers_StatefulContainerLike.StatefulContainerLike.md)<`T`\>

  ↳ **`ReactiveContainerLike`**

  ↳↳ [`ObservableLike`](rx_ObservableLike.ObservableLike.md)

  ↳↳ [`RunnableLike`](rx_RunnableLike.RunnableLike.md)

## Table of contents

### Properties

- [T](rx_ReactiveContainerLike.ReactiveContainerLike.md#t)
- [TContainerOf](rx_ReactiveContainerLike.ReactiveContainerLike.md#tcontainerof)
- [TStatefulContainerState](rx_ReactiveContainerLike.ReactiveContainerLike.md#tstatefulcontainerstate)

### Methods

- [[ReactiveContainerLike\_sinkInto]](rx_ReactiveContainerLike.ReactiveContainerLike.md#[reactivecontainerlike_sinkinto])

## Properties

### T

• **T**: `undefined` \| `T`

#### Inherited from

[StatefulContainerLike](containers_StatefulContainerLike.StatefulContainerLike.md).[T](containers_StatefulContainerLike.StatefulContainerLike.md#t)

___

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: [`ReactiveContainerLike`](rx_ReactiveContainerLike.ReactiveContainerLike.md)<`T`\>

#### Inherited from

[StatefulContainerLike](containers_StatefulContainerLike.StatefulContainerLike.md).[TContainerOf](containers_StatefulContainerLike.StatefulContainerLike.md#tcontainerof)

___

### TStatefulContainerState

• `Optional` `Readonly` **TStatefulContainerState**: [`ReactiveSinkLike`](rx_ReactiveSinkLike.ReactiveSinkLike.md)<`unknown`\>

#### Overrides

[StatefulContainerLike](containers_StatefulContainerLike.StatefulContainerLike.md).[TStatefulContainerState](containers_StatefulContainerLike.StatefulContainerLike.md#tstatefulcontainerstate)

## Methods

### [ReactiveContainerLike\_sinkInto]

▸ **[ReactiveContainerLike_sinkInto]**(`sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | [`ReactiveSinkLike`](rx_ReactiveSinkLike.ReactiveSinkLike.md)<`unknown`\> |

#### Returns

`void`
