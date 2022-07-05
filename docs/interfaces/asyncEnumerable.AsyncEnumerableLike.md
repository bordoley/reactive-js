[Reactive-JS](../README.md) / [asyncEnumerable](../modules/asyncEnumerable.md) / AsyncEnumerableLike

# Interface: AsyncEnumerableLike<T\>

[asyncEnumerable](../modules/asyncEnumerable.md).AsyncEnumerableLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`StreamableLike`](streamable.StreamableLike.md)<`void`, [`T`](asyncEnumerable.AsyncEnumerableLike.md#t), [`AsyncEnumerator`](../classes/asyncEnumerator.AsyncEnumerator.md)<[`T`](asyncEnumerable.AsyncEnumerableLike.md#t)\>\>

- [`InteractiveContainerLike`](interactive.InteractiveContainerLike.md)

  ↳ **`AsyncEnumerableLike`**

## Table of contents

### Properties

- [T](asyncEnumerable.AsyncEnumerableLike.md#t)
- [TContainerOf](asyncEnumerable.AsyncEnumerableLike.md#tcontainerof)
- [TCtx](asyncEnumerable.AsyncEnumerableLike.md#tctx)
- [TLiftableState](asyncEnumerable.AsyncEnumerableLike.md#tliftablestate)

### Methods

- [source](asyncEnumerable.AsyncEnumerableLike.md#source)
- [stream](asyncEnumerable.AsyncEnumerableLike.md#stream)

## Properties

### T

• **T**: `unknown`

#### Overrides

[InteractiveContainerLike](interactive.InteractiveContainerLike.md).[T](interactive.InteractiveContainerLike.md#t)

___

### TContainerOf

• `Readonly` **TContainerOf**: [`AsyncEnumerableLike`](asyncEnumerable.AsyncEnumerableLike.md)<`unknown`\>

#### Overrides

[InteractiveContainerLike](interactive.InteractiveContainerLike.md).[TContainerOf](interactive.InteractiveContainerLike.md#tcontainerof)

___

### TCtx

• `Readonly` **TCtx**: [`SchedulerLike`](scheduler.SchedulerLike.md)

#### Overrides

[InteractiveContainerLike](interactive.InteractiveContainerLike.md).[TCtx](interactive.InteractiveContainerLike.md#tctx)

___

### TLiftableState

• `Readonly` **TLiftableState**: [`AsyncEnumerator`](../classes/asyncEnumerator.AsyncEnumerator.md)<`unknown`\>

#### Overrides

[InteractiveContainerLike](interactive.InteractiveContainerLike.md).[TLiftableState](interactive.InteractiveContainerLike.md#tliftablestate)

## Methods

### source

▸ **source**(`this`, `_`): [`InteractiveSourceLike`](interactiveSource.InteractiveSourceLike.md)<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`AsyncEnumerableLike`](asyncEnumerable.AsyncEnumerableLike.md)<[`T`](asyncEnumerable.AsyncEnumerableLike.md#t)\> |
| `_` | [`SchedulerLike`](scheduler.SchedulerLike.md) |

#### Returns

[`InteractiveSourceLike`](interactiveSource.InteractiveSourceLike.md)<`unknown`\>

#### Inherited from

[InteractiveContainerLike](interactive.InteractiveContainerLike.md).[source](interactive.InteractiveContainerLike.md#source)

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
