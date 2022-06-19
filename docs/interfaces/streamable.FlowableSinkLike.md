[Reactive-JS](../README.md) / [streamable](../modules/streamable.md) / FlowableSinkLike

# Interface: FlowableSinkLike<T\>

[streamable](../modules/streamable.md).FlowableSinkLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`StreamableLike`](streamable.StreamableLike.md)<`T`, [`FlowMode`](../modules/streamable.md#flowmode)\>

  ↳ **`FlowableSinkLike`**

## Table of contents

### Methods

- [stream](streamable.FlowableSinkLike.md#stream)

## Methods

### stream

▸ **stream**(`this`, `scheduler`, `options?`): [`StreamLike`](observable.StreamLike.md)<`T`, [`FlowMode`](../modules/streamable.md#flowmode)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StreamableLike`](streamable.StreamableLike.md)<`T`, [`FlowMode`](../modules/streamable.md#flowmode)\> |
| `scheduler` | [`SchedulerLike`](scheduler.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`StreamLike`](observable.StreamLike.md)<`T`, [`FlowMode`](../modules/streamable.md#flowmode)\>

#### Inherited from

[StreamableLike](streamable.StreamableLike.md).[stream](streamable.StreamableLike.md#stream)
