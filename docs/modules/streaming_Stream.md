[Reactive-JS](../README.md) / streaming/Stream

# Module: streaming/Stream

## Table of contents

### Functions

- [sourceFrom](streaming_Stream.md#sourcefrom)
- [syncState](streaming_Stream.md#syncstate)

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

___

### syncState

▸ **syncState**<`T`\>(`onInit`, `onChange`, `options?`): [`Function1`](functions.md#function1)<[`StreamLike`](../interfaces/streaming.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>, [`StreamLike`](../interfaces/streaming.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onInit` | (`initialValue`: `T`) => [`ObservableLike`](../interfaces/rx.ObservableLike.md)<[`Updater`](functions.md#updater)<`T`\>\> |
| `onChange` | (`oldValue`: `T`, `newValue`: `T`) => [`ObservableLike`](../interfaces/rx.ObservableLike.md)<[`Updater`](functions.md#updater)<`T`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.scheduler` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) |
| `options.throttleDuration?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`StreamLike`](../interfaces/streaming.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>, [`StreamLike`](../interfaces/streaming.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>\>
