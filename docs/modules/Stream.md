[Reactive-JS](../README.md) / Stream

# Module: Stream

## Table of contents

### Interfaces

- [Signature](../interfaces/Stream.Signature.md)

### Functions

- [syncState](Stream.md#syncstate)

## Functions

### syncState

▸ **syncState**<`T`\>(`onInit`, `onChange`, `options?`): [`Function1`](functions.md#function1)<[`StreamLike`](../interfaces/types.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onInit` | [`Function1`](functions.md#function1)<`T`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<[`Updater`](functions.md#updater)<`T`\>\>\> |
| `onChange` | [`Function2`](functions.md#function2)<`T`, `T`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<[`Updater`](functions.md#updater)<`T`\>\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.scheduler` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) |
| `options.throttleDuration?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`StreamLike`](../interfaces/types.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>
