[Reactive-JS](../README.md) / streaming/StreamableLike

# Module: streaming/StreamableLike

## Table of contents

### Functions

- [stream](streaming_StreamableLike.md#stream)

## Functions

### stream

▸ **stream**<`TReq`, `T`, `TStream`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`TReq`, `T`, `TStream`\>, `TStream`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TReq` | `TReq` |
| `T` | `T` |
| `TStream` | extends [`StreamLike`](../interfaces/streaming.StreamLike.md)<`TReq`, `T`, `TStream`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`TReq`, `T`, `TStream`\>, `TStream`\>
