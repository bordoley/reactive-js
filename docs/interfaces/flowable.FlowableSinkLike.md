[Reactive-JS](../README.md) / [flowable](../modules/flowable.md) / FlowableSinkLike

# Interface: FlowableSinkLike<T, TStream\>

[flowable](../modules/flowable.md).FlowableSinkLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TStream` | extends [`FlowableSinkStreamLike`](flowable.FlowableSinkStreamLike.md)<`T`\> = [`FlowableSinkStreamLike`](flowable.FlowableSinkStreamLike.md)<`T`\> |

## Hierarchy

- [`StreamableLike`](streamable.StreamableLike.md)<`T`, [`FlowMode`](../modules/flowable.md#flowmode), `TStream`\>

  ↳ **`FlowableSinkLike`**

## Table of contents

### Methods

- [stream](flowable.FlowableSinkLike.md#stream)

## Methods

### stream

▸ **stream**(`this`, `scheduler`, `options?`): `TStream`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StreamableLike`](streamable.StreamableLike.md)<`T`, [`FlowMode`](../modules/flowable.md#flowmode), `TStream`\> |
| `scheduler` | [`SchedulerLike`](scheduler.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

`TStream`

#### Inherited from

[StreamableLike](streamable.StreamableLike.md).[stream](streamable.StreamableLike.md#stream)
