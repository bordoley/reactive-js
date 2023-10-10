[Reactive-JS](../README.md) / [concurrent/PauseableObservable](../modules/concurrent_PauseableObservable.md) / PauseableObservableModule

# Interface: PauseableObservableModule

[concurrent/PauseableObservable](../modules/concurrent_PauseableObservable.md).PauseableObservableModule

## Table of contents

### Methods

- [buffer](concurrent_PauseableObservable.PauseableObservableModule.md#buffer)
- [distinctUntilChanged](concurrent_PauseableObservable.PauseableObservableModule.md#distinctuntilchanged)
- [keep](concurrent_PauseableObservable.PauseableObservableModule.md#keep)
- [map](concurrent_PauseableObservable.PauseableObservableModule.md#map)
- [pairwise](concurrent_PauseableObservable.PauseableObservableModule.md#pairwise)
- [scan](concurrent_PauseableObservable.PauseableObservableModule.md#scan)
- [sinkInto](concurrent_PauseableObservable.PauseableObservableModule.md#sinkinto)
- [skipFirst](concurrent_PauseableObservable.PauseableObservableModule.md#skipfirst)
- [takeFirst](concurrent_PauseableObservable.PauseableObservableModule.md#takefirst)
- [takeLast](concurrent_PauseableObservable.PauseableObservableModule.md#takelast)
- [takeWhile](concurrent_PauseableObservable.PauseableObservableModule.md#takewhile)

## Methods

### buffer

▸ **buffer**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<readonly `T`[]\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<readonly `T`[]\>\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](../modules/functions.md#equality)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`TA`\>, [`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`TA`\>, [`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`TB`\>\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`T`, `T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`T`, `T`\>\>\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`TAcc`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`TAcc`\>\>

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

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |
| `options?` | `Object` |
| `options.inclusive?` | `boolean` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](concurrent.PauseableObservableLike.md)<`T`\>\>
