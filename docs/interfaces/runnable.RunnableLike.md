[Reactive-JS](../README.md) / [runnable](../modules/runnable.md) / RunnableLike

# Interface: RunnableLike<T\>

[runnable](../modules/runnable.md).RunnableLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`ReactiveContainerLike`](reactiveContainer.ReactiveContainerLike.md)

  ↳ **`RunnableLike`**

## Table of contents

### Properties

- [T](runnable.RunnableLike.md#t)
- [TContainerOf](runnable.RunnableLike.md#tcontainerof)
- [TLiftableContainerState](runnable.RunnableLike.md#tliftablecontainerstate)

### Methods

- [sinkInto](runnable.RunnableLike.md#sinkinto)

## Properties

### T

• **T**: `unknown`

#### Overrides

[ReactiveContainerLike](reactiveContainer.ReactiveContainerLike.md).[T](reactiveContainer.ReactiveContainerLike.md#t)

___

### TContainerOf

• `Readonly` **TContainerOf**: [`RunnableLike`](runnable.RunnableLike.md)<`unknown`\>

#### Overrides

[ReactiveContainerLike](reactiveContainer.ReactiveContainerLike.md).[TContainerOf](reactiveContainer.ReactiveContainerLike.md#tcontainerof)

___

### TLiftableContainerState

• `Readonly` **TLiftableContainerState**: [`ReactiveSinkLike`](reactiveSink.ReactiveSinkLike.md)<`unknown`\>

#### Overrides

[ReactiveContainerLike](reactiveContainer.ReactiveContainerLike.md).[TLiftableContainerState](reactiveContainer.ReactiveContainerLike.md#tliftablecontainerstate)

## Methods

### sinkInto

▸ **sinkInto**(`this`, `sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`RunnableLike`](runnable.RunnableLike.md)<[`T`](runnable.RunnableLike.md#t)\> |
| `sink` | [`ReactiveSinkLike`](reactiveSink.ReactiveSinkLike.md)<[`T`](runnable.RunnableLike.md#t)\> |

#### Returns

`void`

#### Overrides

[ReactiveContainerLike](reactiveContainer.ReactiveContainerLike.md).[sinkInto](reactiveContainer.ReactiveContainerLike.md#sinkinto)
