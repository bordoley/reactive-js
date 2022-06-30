[Reactive-JS](../README.md) / [streamable](../modules/streamable.md) / FlowableSinkLike

# Interface: FlowableSinkLike<T, TStream\>

[streamable](../modules/streamable.md).FlowableSinkLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TStream` | extends [`FlowableSinkStreamLike`](streamable.FlowableSinkStreamLike.md)<`T`\> = [`FlowableSinkStreamLike`](streamable.FlowableSinkStreamLike.md)<`T`\> |

## Hierarchy

- [`StreamableLike`](streamable.StreamableLike.md)<`T`, [`FlowMode`](../modules/streamable.md#flowmode), `TStream`\>

  ↳ **`FlowableSinkLike`**

## Table of contents

### Methods

- [stream](streamable.FlowableSinkLike.md#stream)

## Methods

### stream

▸ **stream**(`this`, `scheduler`, `options?`): `TStream`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StreamableLike`](streamable.StreamableLike.md)<`T`, [`FlowMode`](../modules/streamable.md#flowmode), `TStream`\> |
| `scheduler` | [`SchedulerLike`](scheduler.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

`TStream`

#### Inherited from

[StreamableLike](streamable.StreamableLike.md).[stream](streamable.StreamableLike.md#stream)
