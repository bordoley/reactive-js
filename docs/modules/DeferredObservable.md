[Reactive-JS](../README.md) / DeferredObservable

# Module: DeferredObservable

## Table of contents

### Interfaces

- [Signature](../interfaces/DeferredObservable.Signature.md)
- [Type](../interfaces/DeferredObservable.Type.md)

### Functions

- [multicast](DeferredObservable.md#multicast)
- [share](DeferredObservable.md#share)

## Functions

### multicast

▸ **multicast**<`T`\>(`schedulerOrFactory`, `options?`): [`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) \| [`Factory`](functions.md#factory)<[`SchedulerLike`](../interfaces/types.SchedulerLike.md) & [`DisposableLike`](../interfaces/types.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.replay?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, [`MulticastObservableLike`](../interfaces/types.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

___

### share

▸ **share**<`T`\>(`schedulerOrFactory`, `options?`): [`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](../interfaces/types.SchedulerLike.md) \| [`Factory`](functions.md#factory)<[`SchedulerLike`](../interfaces/types.SchedulerLike.md) & [`DisposableLike`](../interfaces/types.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.replay?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>, [`SharedObservableLike`](../interfaces/types.SharedObservableLike.md)<`T`\>\>
