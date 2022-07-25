[Reactive-JS](../README.md) / [rx](../modules/rx.md) / RunnableLike

# Interface: RunnableLike<T\>

[rx](../modules/rx.md).RunnableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`ReactiveContainerLike`](rx.ReactiveContainerLike.md)

  ↳ **`RunnableLike`**

## Table of contents

### Properties

- [T](rx.RunnableLike.md#t)
- [TContainerOf](rx.RunnableLike.md#tcontainerof)
- [TStatefulContainerState](rx.RunnableLike.md#tstatefulcontainerstate)

### Methods

- [[ReactiveContainerLike\_sinkInto]](rx.RunnableLike.md#[reactivecontainerlike_sinkinto])

## Properties

### T

• `Optional` `Readonly` **T**: `unknown`

#### Inherited from

[ReactiveContainerLike](rx.ReactiveContainerLike.md).[T](rx.ReactiveContainerLike.md#t)

___

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: [`RunnableLike`](rx.RunnableLike.md)<`T`\>

#### Inherited from

[ReactiveContainerLike](rx.ReactiveContainerLike.md).[TContainerOf](rx.ReactiveContainerLike.md#tcontainerof)

___

### TStatefulContainerState

• `Optional` `Readonly` **TStatefulContainerState**: [`ReactiveSinkLike`](rx.ReactiveSinkLike.md)<`unknown`\>

#### Overrides

[ReactiveContainerLike](rx.ReactiveContainerLike.md).[TStatefulContainerState](rx.ReactiveContainerLike.md#tstatefulcontainerstate)

## Methods

### [ReactiveContainerLike\_sinkInto]

▸ **[ReactiveContainerLike_sinkInto]**(`sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | [`ReactiveSinkLike`](rx.ReactiveSinkLike.md)<`T`\> |

#### Returns

`void`

#### Overrides

[ReactiveContainerLike](rx.ReactiveContainerLike.md).[[ReactiveContainerLike_sinkInto]](rx.ReactiveContainerLike.md#[reactivecontainerlike_sinkinto])
