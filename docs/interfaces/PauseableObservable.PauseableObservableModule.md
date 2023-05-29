[Reactive-JS](../README.md) / [PauseableObservable](../modules/PauseableObservable.md) / PauseableObservableModule

# Interface: PauseableObservableModule

[PauseableObservable](../modules/PauseableObservable.md).PauseableObservableModule

## Hierarchy

- [`ReactiveContainerModule`](types.ReactiveContainerModule.md)<[`Type`](../modules/PauseableObservable.md#type)\>

  ↳ **`PauseableObservableModule`**

## Table of contents

### Methods

- [sinkInto](PauseableObservable.PauseableObservableModule.md#sinkinto)

## Methods

### sinkInto

▸ **sinkInto**<`T`\>(`sink`): [`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`void`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | [`DispatcherLike`](types.DispatcherLike.md)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, [`DeferredObservableLike`](types.DeferredObservableLike.md)<`void`\>\>
