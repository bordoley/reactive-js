[Reactive-JS](../README.md) / [streamable](../modules/streamable.md) / IOSourceLike

# Interface: IOSourceLike<T\>

[streamable](../modules/streamable.md).IOSourceLike

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`StreamableLike`](streamable.StreamableLike.md)<[`FlowMode`](../modules/streamable.md#flowmode), [`IOEvent`](../modules/streamable.md#ioevent)<`T`\>\>

  ↳ **`IOSourceLike`**

## Table of contents

### Methods

- [stream](streamable.IOSourceLike.md#stream)

## Methods

### stream

▸ **stream**(`this`, `scheduler`, `options?`): [`StreamLike`](observable.StreamLike.md)<[`FlowMode`](../modules/streamable.md#flowmode), [`IOEvent`](../modules/streamable.md#ioevent)<`T`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StreamableLike`](streamable.StreamableLike.md)<[`FlowMode`](../modules/streamable.md#flowmode), [`IOEvent`](../modules/streamable.md#ioevent)<`T`\>\> |
| `scheduler` | [`SchedulerLike`](scheduler.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`StreamLike`](observable.StreamLike.md)<[`FlowMode`](../modules/streamable.md#flowmode), [`IOEvent`](../modules/streamable.md#ioevent)<`T`\>\>

#### Inherited from

[StreamableLike](streamable.StreamableLike.md).[stream](streamable.StreamableLike.md#stream)
