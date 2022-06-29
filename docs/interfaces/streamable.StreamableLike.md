[Reactive-JS](../README.md) / [streamable](../modules/streamable.md) / StreamableLike

# Interface: StreamableLike<TReq, T, TStream\>

[streamable](../modules/streamable.md).StreamableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `TReq` | `TReq` |
| `T` | `T` |
| `TStream` | extends [`StreamLike`](streamable.StreamLike.md)<`TReq`, `T`\> |

## Hierarchy

- **`StreamableLike`**

  ↳ [`AsyncEnumerableLike`](asyncEnumerable.AsyncEnumerableLike.md)

  ↳ [`FlowableLike`](streamable.FlowableLike.md)

  ↳ [`FlowableSinkLike`](streamable.FlowableSinkLike.md)

  ↳ [`StreamableStateLike`](streamable.StreamableStateLike.md)

  ↳ [`WindowLocationStreamableLike`](web.WindowLocationStreamableLike.md)

## Table of contents

### Methods

- [stream](streamable.StreamableLike.md#stream)

## Methods

### stream

▸ **stream**(`this`, `scheduler`, `options?`): `TStream`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`StreamableLike`](streamable.StreamableLike.md)<`TReq`, `T`, `TStream`\> |
| `scheduler` | [`SchedulerLike`](scheduler.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

`TStream`
