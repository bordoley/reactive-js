[Reactive-JS](../README.md) / [concurrent/PauseableObservable](../modules/concurrent_PauseableObservable.md) / PauseableObservableModule

# Interface: PauseableObservableModule

[concurrent/PauseableObservable](../modules/concurrent_PauseableObservable.md).PauseableObservableModule

## Table of contents

### Methods

- [sinkInto](concurrent_PauseableObservable.PauseableObservableModule.md#sinkinto)

## Methods

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
