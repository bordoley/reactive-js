[Reactive-JS](../README.md) / [asyncEnumerable](../modules/asyncEnumerable.md) / AsyncEnumerableLike

# Interface: AsyncEnumerableLike<T\>

[asyncEnumerable](../modules/asyncEnumerable.md).AsyncEnumerableLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`StreamableLike`](streamable.StreamableLike.md)<`void`, [`T`](asyncEnumerable.AsyncEnumerableLike.md#t), [`AsyncEnumerator`](../classes/asyncEnumerator.AsyncEnumerator.md)<[`T`](asyncEnumerable.AsyncEnumerableLike.md#t)\>\>

- [`LiftableLike`](liftable.LiftableLike.md)

  ↳ **`AsyncEnumerableLike`**

## Table of contents

### Properties

- [T](asyncEnumerable.AsyncEnumerableLike.md#t)
- [TContainerOf](asyncEnumerable.AsyncEnumerableLike.md#tcontainerof)
- [TLiftableState](asyncEnumerable.AsyncEnumerableLike.md#tliftablestate)

### Methods

- [stream](asyncEnumerable.AsyncEnumerableLike.md#stream)

## Properties

### T

• **T**: `unknown`

#### Overrides

[LiftableLike](liftable.LiftableLike.md).[T](liftable.LiftableLike.md#t)

___

### TContainerOf

• `Readonly` **TContainerOf**: [`AsyncEnumerableLike`](asyncEnumerable.AsyncEnumerableLike.md)<`unknown`\>

#### Overrides

[LiftableLike](liftable.LiftableLike.md).[TContainerOf](liftable.LiftableLike.md#tcontainerof)

___

### TLiftableState

• `Readonly` **TLiftableState**: [`AsyncEnumerator`](../classes/asyncEnumerator.AsyncEnumerator.md)<`unknown`\>

#### Overrides

[LiftableLike](liftable.LiftableLike.md).[TLiftableState](liftable.LiftableLike.md#tliftablestate)

## Methods

### stream

▸ **stream**(`this`, `scheduler`, `options?`): [`AsyncEnumerator`](../classes/asyncEnumerator.AsyncEnumerator.md)<[`T`](asyncEnumerable.AsyncEnumerableLike.md#t)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StreamableLike`](streamable.StreamableLike.md)<`void`, [`T`](asyncEnumerable.AsyncEnumerableLike.md#t), [`AsyncEnumerator`](../classes/asyncEnumerator.AsyncEnumerator.md)<[`T`](asyncEnumerable.AsyncEnumerableLike.md#t)\>\> |
| `scheduler` | [`SchedulerLike`](scheduler.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`AsyncEnumerator`](../classes/asyncEnumerator.AsyncEnumerator.md)<[`T`](asyncEnumerable.AsyncEnumerableLike.md#t)\>

#### Inherited from

[StreamableLike](streamable.StreamableLike.md).[stream](streamable.StreamableLike.md#stream)
