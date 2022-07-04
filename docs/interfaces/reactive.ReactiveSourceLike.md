[Reactive-JS](../README.md) / [reactive](../modules/reactive.md) / ReactiveSourceLike

# Interface: ReactiveSourceLike

[reactive](../modules/reactive.md).ReactiveSourceLike

## Hierarchy

- [`LiftableLike`](liftable.LiftableLike.md)

  ↳ **`ReactiveSourceLike`**

  ↳↳ [`ObservableLike`](observable.ObservableLike.md)

  ↳↳ [`RunnableLike`](runnable.RunnableLike.md)

## Implemented by

- [`AbtractDisposableReactiveSource`](../classes/reactive.AbtractDisposableReactiveSource.md)

## Table of contents

### Properties

- [T](reactive.ReactiveSourceLike.md#t)
- [TContainerOf](reactive.ReactiveSourceLike.md#tcontainerof)
- [TLiftableState](reactive.ReactiveSourceLike.md#tliftablestate)

### Methods

- [sink](reactive.ReactiveSourceLike.md#sink)

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
