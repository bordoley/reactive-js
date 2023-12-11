[Reactive-JS](../README.md) / concurrent/PauseableObservable

# Module: concurrent/PauseableObservable

## Table of contents

### Interfaces

- [PauseableObservableModule](../interfaces/concurrent_PauseableObservable.PauseableObservableModule.md)

### Type Aliases

- [Signature](concurrent_PauseableObservable.md#signature)

### Functions

- [fromAsyncIterable](concurrent_PauseableObservable.md#fromasynciterable)
- [sinkInto](concurrent_PauseableObservable.md#sinkinto)

## Type Aliases

### Signature

Ƭ **Signature**: [`PauseableObservableModule`](../interfaces/concurrent_PauseableObservable.PauseableObservableModule.md)

## Functions

### fromAsyncIterable

▸ **fromAsyncIterable**<`T`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<`AsyncIterable`<`T`\>, [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/concurrent.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<`AsyncIterable`<`T`\>, [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>\>

___

### sinkInto

▸ **sinkInto**<`T`\>(`sink`): [`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`void`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | [`DispatcherLike`](../interfaces/concurrent.DispatcherLike.md)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`void`\>\>
