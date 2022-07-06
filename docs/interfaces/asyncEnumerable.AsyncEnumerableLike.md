[Reactive-JS](../README.md) / [asyncEnumerable](../modules/asyncEnumerable.md) / AsyncEnumerableLike

# Interface: AsyncEnumerableLike<T\>

[asyncEnumerable](../modules/asyncEnumerable.md).AsyncEnumerableLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`StreamableLike`](streamable.StreamableLike.md)<`void`, [`T`](asyncEnumerable.AsyncEnumerableLike.md#t), [`AsyncEnumerator`](../classes/asyncEnumerator.AsyncEnumerator.md)<[`T`](asyncEnumerable.AsyncEnumerableLike.md#t)\>\>

- [`InteractiveContainerLike`](interactiveContainer.InteractiveContainerLike.md)

  ↳ **`AsyncEnumerableLike`**

## Table of contents

### Properties

- [T](asyncEnumerable.AsyncEnumerableLike.md#t)
- [TContainerOf](asyncEnumerable.AsyncEnumerableLike.md#tcontainerof)
- [TCtx](asyncEnumerable.AsyncEnumerableLike.md#tctx)
- [TLiftableContainerState](asyncEnumerable.AsyncEnumerableLike.md#tliftablecontainerstate)

### Methods

- [source](asyncEnumerable.AsyncEnumerableLike.md#source)
- [stream](asyncEnumerable.AsyncEnumerableLike.md#stream)

## Properties

### T

• **T**: `unknown`

#### Overrides

[InteractiveContainerLike](interactiveContainer.InteractiveContainerLike.md).[T](interactiveContainer.InteractiveContainerLike.md#t)

___

### TContainerOf

• `Readonly` **TContainerOf**: [`AsyncEnumerableLike`](asyncEnumerable.AsyncEnumerableLike.md)<`unknown`\>

#### Overrides

[InteractiveContainerLike](interactiveContainer.InteractiveContainerLike.md).[TContainerOf](interactiveContainer.InteractiveContainerLike.md#tcontainerof)

___

### TCtx

• `Readonly` **TCtx**: [`SchedulerLike`](scheduler.SchedulerLike.md)

#### Overrides

[InteractiveContainerLike](interactiveContainer.InteractiveContainerLike.md).[TCtx](interactiveContainer.InteractiveContainerLike.md#tctx)

___

### TLiftableContainerState

• `Readonly` **TLiftableContainerState**: [`AsyncEnumerator`](../classes/asyncEnumerator.AsyncEnumerator.md)<`unknown`\>

#### Overrides

[InteractiveContainerLike](interactiveContainer.InteractiveContainerLike.md).[TLiftableContainerState](interactiveContainer.InteractiveContainerLike.md#tliftablecontainerstate)

## Methods

### source

▸ **source**(`this`, `_`): [`InteractiveSourceLike`](interactiveSource.InteractiveSourceLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`AsyncEnumerableLike`](asyncEnumerable.AsyncEnumerableLike.md)<[`T`](asyncEnumerable.AsyncEnumerableLike.md#t)\> |
| `_` | [`SchedulerLike`](scheduler.SchedulerLike.md) |

#### Returns

[`InteractiveSourceLike`](interactiveSource.InteractiveSourceLike.md)

#### Inherited from

[InteractiveContainerLike](interactiveContainer.InteractiveContainerLike.md).[source](interactiveContainer.InteractiveContainerLike.md#source)

___

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
