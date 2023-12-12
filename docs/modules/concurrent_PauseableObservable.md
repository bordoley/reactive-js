[Reactive-JS](../README.md) / concurrent/PauseableObservable

# Module: concurrent/PauseableObservable

## Table of contents

### Interfaces

- [PauseableObservableModule](../interfaces/concurrent_PauseableObservable.PauseableObservableModule.md)

### Type Aliases

- [Signature](concurrent_PauseableObservable.md#signature)

### Functions

- [sinkInto](concurrent_PauseableObservable.md#sinkinto)

## Type Aliases

### Signature

Ƭ **Signature**: [`PauseableObservableModule`](../interfaces/concurrent_PauseableObservable.PauseableObservableModule.md)

## Functions

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
