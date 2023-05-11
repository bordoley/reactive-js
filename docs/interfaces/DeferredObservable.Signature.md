[Reactive-JS](../README.md) / [DeferredObservable](../modules/DeferredObservable.md) / Signature

# Interface: Signature

[DeferredObservable](../modules/DeferredObservable.md).Signature

## Table of contents

### Methods

- [multicast](DeferredObservable.Signature.md#multicast)
- [share](DeferredObservable.Signature.md#share)

## Methods

### multicast

▸ **multicast**<`T`\>(`schedulerOrFactory`, `options?`): [`Function1`](../modules/functions.md#function1)<[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](types.SchedulerLike.md) \| [`Factory`](../modules/functions.md#factory)<[`SchedulerLike`](types.SchedulerLike.md) & [`DisposableLike`](types.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.replay?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

___

### share

▸ **share**<`T`\>(`schedulerOrFactory`, `options?`): [`Function1`](../modules/functions.md#function1)<[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, [`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schedulerOrFactory` | [`SchedulerLike`](types.SchedulerLike.md) \| [`Factory`](../modules/functions.md#factory)<[`SchedulerLike`](types.SchedulerLike.md) & [`DisposableLike`](types.DisposableLike.md)\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.replay?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`DeferredObservableLike`](types.DeferredObservableLike.md)<`T`\>, [`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>\>
