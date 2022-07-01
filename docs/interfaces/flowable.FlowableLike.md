[Reactive-JS](../README.md) / [flowable](../modules/flowable.md) / FlowableLike

# Interface: FlowableLike<T, TStream\>

[flowable](../modules/flowable.md).FlowableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TStream` | extends [`FlowableStreamLike`](flowable.FlowableStreamLike.md)<`T`\> = [`FlowableStreamLike`](flowable.FlowableStreamLike.md)<`T`\> |

## Hierarchy

- [`StreamableLike`](streamable.StreamableLike.md)<[`FlowMode`](../modules/flowable.md#flowmode), `T`, `TStream`\>

  ↳ **`FlowableLike`**

## Table of contents

### Methods

- [stream](flowable.FlowableLike.md#stream)

## Methods

### stream

▸ **stream**(`this`, `scheduler`, `options?`): `TStream`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StreamableLike`](streamable.StreamableLike.md)<[`FlowMode`](../modules/flowable.md#flowmode), `T`, `TStream`\> |
| `scheduler` | [`SchedulerLike`](scheduler.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

`TStream`

#### Inherited from

[StreamableLike](streamable.StreamableLike.md).[stream](streamable.StreamableLike.md#stream)
