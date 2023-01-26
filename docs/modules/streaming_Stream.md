[Reactive-JS](../README.md) / streaming/Stream

# Module: streaming/Stream

## Table of contents

### Functions

- [sourceFrom](streaming_Stream.md#sourcefrom)

## Functions

### sourceFrom

▸ **sourceFrom**<`TReq`, `T`, `TSinkStream`\>(`streamable`): [`Function1`](functions.md#function1)<`TSinkStream`, `TSinkStream`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TReq` | `TReq` |
| `T` | `T` |
| `TSinkStream` | extends [`StreamLike`](../interfaces/streaming.StreamLike.md)<`T`, `TReq`, `TSinkStream`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamable` | [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`TReq`, `T`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TSinkStream`, `TSinkStream`\>
