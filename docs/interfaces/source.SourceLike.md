[Reactive-JS](../README.md) / [source](../modules/source.md) / SourceLike

# Interface: SourceLike

[source](../modules/source.md).SourceLike

## Hierarchy

- [`LiftableLike`](liftable.LiftableLike.md)

  ↳ **`SourceLike`**

  ↳↳ [`ObservableLike`](observable.ObservableLike.md)

  ↳↳ [`RunnableLike`](runnable.RunnableLike.md)

## Implemented by

- [`AbtractDisposableSource`](../classes/source.AbtractDisposableSource.md)

## Table of contents

### Properties

- [T](source.SourceLike.md#t)
- [TContainerOf](source.SourceLike.md#tcontainerof)
- [TLiftableState](source.SourceLike.md#tliftablestate)

### Methods

- [sink](source.SourceLike.md#sink)

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
