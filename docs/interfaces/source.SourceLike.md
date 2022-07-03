[Reactive-JS](../README.md) / [source](../modules/source.md) / SourceLike

# Interface: SourceLike

[source](../modules/source.md).SourceLike

## Hierarchy

- [`LiftableLike`](liftable.LiftableLike.md)

  ↳ **`SourceLike`**

  ↳↳ [`ObservableLike`](observable.ObservableLike.md)

  ↳↳ [`RunnableLike`](runnable.RunnableLike.md)

## Implemented by

- [`AbstractSource`](../classes/source.AbstractSource.md)
- [`AbtractDisposableSource`](../classes/source.AbtractDisposableSource.md)

## Table of contents

### Properties

- [T](source.SourceLike.md#t)
- [TContainerOf](source.SourceLike.md#tcontainerof)
- [liftableStateType](source.SourceLike.md#liftablestatetype)

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

### liftableStateType

• `Readonly` **liftableStateType**: [`SinkLike`](source.SinkLike.md)<`unknown`\>

#### Overrides

[LiftableLike](liftable.LiftableLike.md).[liftableStateType](liftable.LiftableLike.md#liftablestatetype)

## Methods

### sink

▸ **sink**(`this`, `sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `unknown` |
| `sink` | [`SinkLike`](source.SinkLike.md)<`unknown`\> |

#### Returns

`void`
