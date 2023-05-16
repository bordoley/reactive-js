[Reactive-JS](../README.md) / [Stream](../modules/Stream.md) / StreamModule

# Interface: StreamModule

[Stream](../modules/Stream.md).StreamModule

## Table of contents

### Methods

- [syncState](Stream.StreamModule.md#syncstate)

## Methods

### syncState

▸ **syncState**<`T`\>(`onInit`, `onChange`, `options?`): [`Function1`](../modules/functions.md#function1)<[`StreamLike`](types.StreamLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`\>, [`DisposableLike`](types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onInit` | [`Function1`](../modules/functions.md#function1)<`T`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>\>\> |
| `onChange` | [`Function2`](../modules/functions.md#function2)<`T`, `T`, [`DeferredObservableLike`](types.DeferredObservableLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.scheduler` | [`SchedulerLike`](types.SchedulerLike.md) |
| `options.throttleDuration?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`StreamLike`](types.StreamLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`\>, [`DisposableLike`](types.DisposableLike.md)\>
