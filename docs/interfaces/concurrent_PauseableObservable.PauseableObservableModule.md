[Reactive-JS](../README.md) / [concurrent/PauseableObservable](../modules/concurrent_PauseableObservable.md) / PauseableObservableModule

# Interface: PauseableObservableModule

[concurrent/PauseableObservable](../modules/concurrent_PauseableObservable.md).PauseableObservableModule

## Table of contents

### Methods

- [fromAsyncIterable](concurrent_PauseableObservable.PauseableObservableModule.md#fromasynciterable)
- [sinkInto](concurrent_PauseableObservable.PauseableObservableModule.md#sinkinto)

## Methods

### fromAsyncIterable

▸ **fromAsyncIterable**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](concurrent.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>\>

___

### sinkInto

▸ **sinkInto**<`T`\>(`sink`): [`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`void`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | [`DispatcherLike`](concurrent.DispatcherLike.md)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<`void`\>\>
