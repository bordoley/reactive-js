[Reactive-JS](../README.md) / [streamable](../modules/streamable.md) / StreamableLike

# Interface: StreamableLike<TReq, T\>

[streamable](../modules/streamable.md).StreamableLike

## Type parameters

| Name |
| :------ |
| `TReq` |
| `T` |

## Hierarchy

- **`StreamableLike`**

  ↳ [`AsyncEnumerableLike`](asyncEnumerable.AsyncEnumerableLike.md)

  ↳ [`IOSinkAccumulatorLike`](streamable.IOSinkAccumulatorLike.md)

  ↳ [`WindowLocationStreamableLike`](web.WindowLocationStreamableLike.md)

## Table of contents

### Methods

- [stream](streamable.StreamableLike.md#stream)

## Methods

### stream

▸ **stream**(`this`, `scheduler`, `options?`): [`StreamLike`](observable.StreamLike.md)<`TReq`, `T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StreamableLike`](streamable.StreamableLike.md)<`TReq`, `T`\> |
| `scheduler` | [`SchedulerLike`](scheduler.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`StreamLike`](observable.StreamLike.md)<`TReq`, `T`\>
