[Reactive-JS](../README.md) / concurrent/PauseableObservable

# Module: concurrent/PauseableObservable

## Table of contents

### Module Interfaces

- [PauseableObservableModule](../interfaces/concurrent_PauseableObservable.PauseableObservableModule.md)

### Type Aliases

- [Signature](concurrent_PauseableObservable.md#signature)

### Functions

- [buffer](concurrent_PauseableObservable.md#buffer)
- [distinctUntilChanged](concurrent_PauseableObservable.md#distinctuntilchanged)
- [keep](concurrent_PauseableObservable.md#keep)
- [map](concurrent_PauseableObservable.md#map)
- [pairwise](concurrent_PauseableObservable.md#pairwise)
- [scan](concurrent_PauseableObservable.md#scan)
- [sinkInto](concurrent_PauseableObservable.md#sinkinto)
- [skipFirst](concurrent_PauseableObservable.md#skipfirst)
- [takeFirst](concurrent_PauseableObservable.md#takefirst)
- [takeLast](concurrent_PauseableObservable.md#takelast)
- [takeWhile](concurrent_PauseableObservable.md#takewhile)

## Type Aliases

### Signature

Ƭ **Signature**: [`PauseableObservableModule`](../interfaces/concurrent_PauseableObservable.PauseableObservableModule.md)

## Functions

### buffer

▸ **buffer**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<readonly `T`[]\>\>

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

[`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<readonly `T`[]\>\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](functions.md#equality)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`TA`\>, [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`TA`\>, [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`TB`\>\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<[`Tuple2`](functions.md#tuple2)<`T`, `T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<[`Tuple2`](functions.md#tuple2)<`T`, `T`\>\>\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`TAcc`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`TAcc`\>\>

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
| `sink` | [`DispatcherLike`](../interfaces/rx.DispatcherLike.md)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<`void`\>\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>\>

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

[`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |
| `options?` | `Object` |
| `options.inclusive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>, [`PauseableObservableLike`](../interfaces/concurrent.PauseableObservableLike.md)<`T`\>\>
