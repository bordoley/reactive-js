[Reactive-JS](../README.md) / [reactiveContainer](../modules/reactiveContainer.md) / ReactiveContainerLike

# Interface: ReactiveContainerLike

[reactiveContainer](../modules/reactiveContainer.md).ReactiveContainerLike

## Hierarchy

- [`LiftableContainerLike`](liftableContainer.LiftableContainerLike.md)

  ↳ **`ReactiveContainerLike`**

  ↳↳ [`ObservableLike`](observable.ObservableLike.md)

  ↳↳ [`RunnableLike`](runnable.RunnableLike.md)

## Table of contents

### Properties

- [T](reactiveContainer.ReactiveContainerLike.md#t)
- [TContainerOf](reactiveContainer.ReactiveContainerLike.md#tcontainerof)
- [TLiftableContainerState](reactiveContainer.ReactiveContainerLike.md#tliftablecontainerstate)

### Methods

- [sinkInto](reactiveContainer.ReactiveContainerLike.md#sinkinto)

## Properties

### T

• `Optional` `Readonly` **T**: `unknown`

#### Inherited from

[LiftableContainerLike](liftableContainer.LiftableContainerLike.md).[T](liftableContainer.LiftableContainerLike.md#t)

___

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `unknown`

#### Inherited from

[LiftableContainerLike](liftableContainer.LiftableContainerLike.md).[TContainerOf](liftableContainer.LiftableContainerLike.md#tcontainerof)

___

### TLiftableContainerState

• `Readonly` **TLiftableContainerState**: [`ReactiveSinkLike`](reactiveSink.ReactiveSinkLike.md)<`unknown`\>

#### Overrides

[LiftableContainerLike](liftableContainer.LiftableContainerLike.md).[TLiftableContainerState](liftableContainer.LiftableContainerLike.md#tliftablecontainerstate)

## Methods

### sinkInto

▸ **sinkInto**(`this`, `sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`ReactiveContainerLike`](reactiveContainer.ReactiveContainerLike.md) |
| `sink` | [`ReactiveSinkLike`](reactiveSink.ReactiveSinkLike.md)<`unknown`\> |

#### Returns

`void`
