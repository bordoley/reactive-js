[Reactive-JS](../README.md) / [streamable](../modules/streamable.md) / FlowableLike

# Interface: FlowableLike<T\>

[streamable](../modules/streamable.md).FlowableLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`StreamableLike`](streamable.StreamableLike.md)<[`FlowMode`](../modules/streamable.md#flowmode), `T`, [`FlowableStreamLike`](streamable.FlowableStreamLike.md)<`T`\>\>

  ↳ **`FlowableLike`**

## Table of contents

### Methods

- [stream](streamable.FlowableLike.md#stream)

## Methods

### stream

▸ **stream**(`this`, `scheduler`, `options?`): [`FlowableStreamLike`](streamable.FlowableStreamLike.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StreamableLike`](streamable.StreamableLike.md)<[`FlowMode`](../modules/streamable.md#flowmode), `T`, [`FlowableStreamLike`](streamable.FlowableStreamLike.md)<`T`\>\> |
| `scheduler` | [`SchedulerLike`](scheduler.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`FlowableStreamLike`](streamable.FlowableStreamLike.md)<`T`\>

#### Inherited from

[StreamableLike](streamable.StreamableLike.md).[stream](streamable.StreamableLike.md#stream)
