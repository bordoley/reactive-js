[Reactive-JS](../README.md) / [PauseableObservable](../modules/PauseableObservable.md) / PauseableObservableModule

# Interface: PauseableObservableModule

[PauseableObservable](../modules/PauseableObservable.md).PauseableObservableModule

## Hierarchy

- [`ContainerTypeClass`](types.ContainerTypeClass.md)<[`Type`](../modules/PauseableObservable.md#type)\>

  ↳ **`PauseableObservableModule`**

## Table of contents

### Operator Methods

- [flatMapIterable](PauseableObservable.PauseableObservableModule.md#flatmapiterable)

### Other Methods

- [dispatchTo](PauseableObservable.PauseableObservableModule.md#dispatchto)
- [enqueue](PauseableObservable.PauseableObservableModule.md#enqueue)
- [sinkInto](PauseableObservable.PauseableObservableModule.md#sinkinto)

## Operator Methods

### flatMapIterable

▸ **flatMapIterable**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `Iterable`<`TB`\>\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `TA`, `TB`\>

___

## Other Methods

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](types.DispatcherLike.md)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, `T`\>

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](types.QueueableLike.md)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<[`PauseableObservableContainer`](PauseableObservable.PauseableObservableContainer.md), `T`, `T`\>

___

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
