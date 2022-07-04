[Reactive-JS](../README.md) / [reactive](../modules/reactive.md) / ReactiveContainerLike

# Interface: ReactiveContainerLike

[reactive](../modules/reactive.md).ReactiveContainerLike

## Hierarchy

- [`LiftableLike`](liftable.LiftableLike.md)

  ↳ **`ReactiveContainerLike`**

  ↳↳ [`ObservableLike`](observable.ObservableLike.md)

  ↳↳ [`RunnableLike`](runnable.RunnableLike.md)

## Table of contents

### Properties

- [T](reactive.ReactiveContainerLike.md#t)
- [TContainerOf](reactive.ReactiveContainerLike.md#tcontainerof)
- [TLiftableState](reactive.ReactiveContainerLike.md#tliftablestate)

### Methods

- [sink](reactive.ReactiveContainerLike.md#sink)

## Properties

### T

• `Optional` `Readonly` **T**: `unknown`

#### Inherited from

[LiftableLike](liftable.LiftableLike.md).[T](liftable.LiftableLike.md#t)

___

### TContainerOf

• `Optional` `Readonly` **TContainerOf**: `unknown`

#### Inherited from

[LiftableLike](liftable.LiftableLike.md).[TContainerOf](liftable.LiftableLike.md#tcontainerof)

___

### TLiftableState

• `Readonly` **TLiftableState**: [`SinkLike`](sink.SinkLike.md)<`unknown`\>

#### Overrides

[LiftableLike](liftable.LiftableLike.md).[TLiftableState](liftable.LiftableLike.md#tliftablestate)

## Methods

### sink

▸ **sink**(`this`, `sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `unknown` |
| `sink` | [`SinkLike`](sink.SinkLike.md)<`unknown`\> |

#### Returns

`void`
