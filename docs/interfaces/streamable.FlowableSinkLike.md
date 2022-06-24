[Reactive-JS](../README.md) / [streamable](../modules/streamable.md) / FlowableSinkLike

# Interface: FlowableSinkLike<T\>

[streamable](../modules/streamable.md).FlowableSinkLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`StreamableLike`](streamable.StreamableLike.md)<`T`, [`FlowMode`](../modules/streamable.md#flowmode), [`FlowableSinkStreamLike`](streamable.FlowableSinkStreamLike.md)<`T`\>\>

  ↳ **`FlowableSinkLike`**

## Table of contents

### Methods

- [stream](streamable.FlowableSinkLike.md#stream)

## Methods

### stream

▸ **stream**(`this`, `scheduler`, `options?`): [`FlowableSinkStreamLike`](streamable.FlowableSinkStreamLike.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StreamableLike`](streamable.StreamableLike.md)<`T`, [`FlowMode`](../modules/streamable.md#flowmode), [`FlowableSinkStreamLike`](streamable.FlowableSinkStreamLike.md)<`T`\>\> |
| `scheduler` | [`SchedulerLike`](scheduler.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`FlowableSinkStreamLike`](streamable.FlowableSinkStreamLike.md)<`T`\>

#### Inherited from

[StreamableLike](streamable.StreamableLike.md).[stream](streamable.StreamableLike.md#stream)
