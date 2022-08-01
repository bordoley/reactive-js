[Reactive-JS](../README.md) / [streaming](../modules/streaming.md) / StreamableLike

# Interface: StreamableLike<TReq, T, TStream\>

[streaming](../modules/streaming.md).StreamableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `TReq` | `TReq` |
| `T` | `T` |
| `TStream` | extends [`StreamLike`](streaming.StreamLike.md)<`TReq`, `T`\> = [`StreamLike`](streaming.StreamLike.md)<`TReq`, `T`\> |

## Hierarchy

- **`StreamableLike`**

  ↳ [`AsyncEnumerableLike`](ix.AsyncEnumerableLike.md)

  ↳ [`FlowableLike`](streaming.FlowableLike.md)

  ↳ [`StreamableStateLike`](streaming.StreamableStateLike.md)

## Table of contents

### Methods

- [[StreamableLike\_stream]](streaming.StreamableLike.md#[streamablelike_stream])

## Methods

### [StreamableLike\_stream]

▸ **[StreamableLike_stream]**(`scheduler`, `options?`): `TStream`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](scheduling.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

`TStream`
