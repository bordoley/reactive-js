[Reactive-JS](../README.md) / streaming/Stream

# Module: streaming/Stream

## Table of contents

### Functions

- [syncState](streaming_Stream.md#syncstate)

## Functions

### syncState

▸ **syncState**<`T`\>(`onInit`, `onChange`, `options?`): [`Function1`](functions.md#function1)<[`StreamLike`](../interfaces/streaming.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<[`StreamLike`](../interfaces/streaming.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>
