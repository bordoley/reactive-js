[Reactive-JS](../README.md) / [streamable](../modules/streamable.md) / FlowableLike

# Interface: FlowableLike<T, TStream\>

[streamable](../modules/streamable.md).FlowableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TStream` | extends [`FlowableStreamLike`](streamable.FlowableStreamLike.md)<`T`\> = [`FlowableStreamLike`](streamable.FlowableStreamLike.md)<`T`\> |

## Hierarchy

- [`StreamableLike`](streamable.StreamableLike.md)<[`FlowMode`](../modules/streamable.md#flowmode), `T`, `TStream`\>

  ↳ **`FlowableLike`**

## Table of contents

### Methods

- [stream](streamable.FlowableLike.md#stream)

## Methods

### stream

▸ **stream**(`this`, `scheduler`, `options?`): `TStream`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StreamableLike`](streamable.StreamableLike.md)<[`FlowMode`](../modules/streamable.md#flowmode), `T`, `TStream`\> |
| `scheduler` | [`SchedulerLike`](scheduler.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

`TStream`

#### Inherited from

[StreamableLike](streamable.StreamableLike.md).[stream](streamable.StreamableLike.md#stream)
