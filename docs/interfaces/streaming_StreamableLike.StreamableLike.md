[Reactive-JS](../README.md) / [streaming/StreamableLike](../modules/streaming_StreamableLike.md) / StreamableLike

# Interface: StreamableLike<TReq, T, TStream\>

[streaming/StreamableLike](../modules/streaming_StreamableLike.md).StreamableLike

## Type parameters

| Name | Type |
| :------ | :------ |
| `TReq` | `TReq` |
| `T` | `T` |
| `TStream` | extends [`StreamLike`](streaming_StreamLike.StreamLike.md)<`TReq`, `T`\> = [`StreamLike`](streaming_StreamLike.StreamLike.md)<`TReq`, `T`\> |

## Hierarchy

- **`StreamableLike`**

  ↳ [`AsyncEnumerableLike`](ix_AsyncEnumerableLike.AsyncEnumerableLike.md)

  ↳ [`FlowableLike`](streaming_FlowableLike.FlowableLike.md)

## Table of contents

### Methods

- [[StreamableLike\_stream]](streaming_StreamableLike.StreamableLike.md#[streamablelike_stream])

## Methods

### [StreamableLike\_stream]

▸ **[StreamableLike_stream]**(`scheduler`, `options?`): `TStream`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](scheduling_SchedulerLike.SchedulerLike.md)<[`SchedulerOptions`](../modules/scheduling_SchedulerLike.md#scheduleroptions)\> |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

`TStream`
