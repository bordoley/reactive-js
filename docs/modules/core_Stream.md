[Reactive-JS](../README.md) / core/Stream

# Module: core/Stream

## Table of contents

### Functions

- [syncState](core_Stream.md#syncstate)

## Functions

### syncState

▸ **syncState**<`T`\>(`onInit`, `onChange`, `options?`): [`Function1`](functions.md#function1)<[`StreamLike`](../interfaces/core.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>, [`DisposableLike`](../interfaces/core.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onInit` | (`initialValue`: `T`) => [`ObservableLike`](../interfaces/core.ObservableLike.md)<[`Updater`](functions.md#updater)<`T`\>\> |
| `onChange` | (`oldValue`: `T`, `newValue`: `T`) => [`ObservableLike`](../interfaces/core.ObservableLike.md)<[`Updater`](functions.md#updater)<`T`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.scheduler` | [`SchedulerLike`](../interfaces/core.SchedulerLike.md) |
| `options.throttleDuration?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`StreamLike`](../interfaces/core.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>, [`DisposableLike`](../interfaces/core.DisposableLike.md)\>
