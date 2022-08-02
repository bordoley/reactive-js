[Reactive-JS](../README.md) / streaming/StreamableLike

# Module: streaming/StreamableLike

## Table of contents

### Functions

- [sinkInto](streaming_StreamableLike.md#sinkinto)
- [stream](streaming_StreamableLike.md#stream)

## Functions

### sinkInto

▸ **sinkInto**<`TReq`, `T`, `TSinkStream`\>(`dest`): (`src`: [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`TReq`, `T`\>\>) => [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`TReq`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TReq` | `TReq` |
| `T` | `T` |
| `TSinkStream` | extends [`StreamLike`](../interfaces/streaming.StreamLike.md)<`T`, `TReq`, `TSinkStream`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | `TSinkStream` |

#### Returns

`fn`

▸ (`src`): [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`TReq`, `T`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `src` | [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`TReq`, `T`\>\> |

##### Returns

[`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`TReq`, `T`\>\>

___

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
