[Reactive-JS](../README.md) / [rx](../modules/rx.md) / ReactiveContainerLike

# Interface: ReactiveContainerLike<TSink\>

[rx](../modules/rx.md).ReactiveContainerLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `TSink` | extends [`DisposableLike`](util.DisposableLike.md) |

## Hierarchy

- [`StatefulContainerLike`](containers.StatefulContainerLike.md)

  ↳ **`ReactiveContainerLike`**

  ↳↳ [`ObservableLike`](rx.ObservableLike.md)

  ↳↳ [`RunnableLike`](rx.RunnableLike.md)

## Table of contents

### Properties

- [T](rx.ReactiveContainerLike.md#t)
- [TContainerOf](rx.ReactiveContainerLike.md#tcontainerof)
- [TStatefulContainerState](rx.ReactiveContainerLike.md#tstatefulcontainerstate)

### Methods

- [[ReactiveContainerLike\_sinkInto]](rx.ReactiveContainerLike.md#[reactivecontainerlike_sinkinto])

## Properties

### T

• `Optional` `Readonly` **T**: `unknown`

#### Inherited from

[StatefulContainerLike](containers.StatefulContainerLike.md).[T](containers.StatefulContainerLike.md#t)

___

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `unknown`

#### Inherited from

[StatefulContainerLike](containers.StatefulContainerLike.md).[TContainerOf](containers.StatefulContainerLike.md#tcontainerof)

___

### TStatefulContainerState

• `Optional` `Readonly` **TStatefulContainerState**: [`DisposableLike`](util.DisposableLike.md)

#### Inherited from

[StatefulContainerLike](containers.StatefulContainerLike.md).[TStatefulContainerState](containers.StatefulContainerLike.md#tstatefulcontainerstate)

## Methods

### [ReactiveContainerLike\_sinkInto]

▸ **[ReactiveContainerLike_sinkInto]**(`sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | `TSink` |

#### Returns

`void`
