[Reactive-JS](../README.md) / [reactiveContainer](../modules/reactiveContainer.md) / ReactiveContainerLike

# Interface: ReactiveContainerLike

[reactiveContainer](../modules/reactiveContainer.md).ReactiveContainerLike

## Hierarchy

- [`LiftableContainerLike`](liftable.LiftableContainerLike.md)

  ↳ **`ReactiveContainerLike`**

  ↳↳ [`ObservableLike`](observable.ObservableLike.md)

  ↳↳ [`RunnableLike`](runnable.RunnableLike.md)

## Table of contents

### Properties

- [T](reactiveContainer.ReactiveContainerLike.md#t)
- [TContainerOf](reactiveContainer.ReactiveContainerLike.md#tcontainerof)
- [TLiftableContainerState](reactiveContainer.ReactiveContainerLike.md#tliftablecontainerstate)

### Methods

- [sink](reactiveContainer.ReactiveContainerLike.md#sink)

## Properties

### T

• `Optional` `Readonly` **T**: `unknown`

#### Inherited from

[LiftableContainerLike](liftable.LiftableContainerLike.md).[T](liftable.LiftableContainerLike.md#t)

___

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `unknown`

#### Inherited from

[LiftableContainerLike](liftable.LiftableContainerLike.md).[TContainerOf](liftable.LiftableContainerLike.md#tcontainerof)

___

### TLiftableContainerState

• `Readonly` **TLiftableContainerState**: [`ReactiveSinkLike`](reactiveSink.ReactiveSinkLike.md)<`unknown`\>

#### Overrides

[LiftableContainerLike](liftable.LiftableContainerLike.md).[TLiftableContainerState](liftable.LiftableContainerLike.md#tliftablecontainerstate)

## Methods

### sink

▸ **sink**(`this`, `sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`ReactiveContainerLike`](reactiveContainer.ReactiveContainerLike.md) |
| `sink` | [`ReactiveSinkLike`](reactiveSink.ReactiveSinkLike.md)<`unknown`\> |

#### Returns

`void`
