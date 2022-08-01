[Reactive-JS](../README.md) / rx/RunnableObservableLike

# Module: rx/RunnableObservableLike

## Table of contents

### Variables

- [decodeWithCharsetT](rx_RunnableObservableLike.md#decodewithcharsett)
- [distinctUntilChangedT](rx_RunnableObservableLike.md#distinctuntilchangedt)
- [forEachT](rx_RunnableObservableLike.md#foreacht)
- [keepT](rx_RunnableObservableLike.md#keept)
- [mapT](rx_RunnableObservableLike.md#mapt)
- [pairwiseT](rx_RunnableObservableLike.md#pairwiset)
- [reduceT](rx_RunnableObservableLike.md#reducet)
- [scanT](rx_RunnableObservableLike.md#scant)
- [skipFirstT](rx_RunnableObservableLike.md#skipfirstt)
- [takeFirstT](rx_RunnableObservableLike.md#takefirstt)
- [takeLastT](rx_RunnableObservableLike.md#takelastt)
- [takeWhileT](rx_RunnableObservableLike.md#takewhilet)
- [throwIfEmptyT](rx_RunnableObservableLike.md#throwifemptyt)
- [toReadonlyArrayT](rx_RunnableObservableLike.md#toreadonlyarrayt)

### Functions

- [decodeWithCharset](rx_RunnableObservableLike.md#decodewithcharset)
- [distinctUntilChanged](rx_RunnableObservableLike.md#distinctuntilchanged)
- [forEach](rx_RunnableObservableLike.md#foreach)
- [keep](rx_RunnableObservableLike.md#keep)
- [map](rx_RunnableObservableLike.md#map)
- [pairwise](rx_RunnableObservableLike.md#pairwise)
- [reduce](rx_RunnableObservableLike.md#reduce)
- [scan](rx_RunnableObservableLike.md#scan)
- [skipFirst](rx_RunnableObservableLike.md#skipfirst)
- [takeFirst](rx_RunnableObservableLike.md#takefirst)
- [takeLast](rx_RunnableObservableLike.md#takelast)
- [takeUntil](rx_RunnableObservableLike.md#takeuntil)
- [takeWhile](rx_RunnableObservableLike.md#takewhile)
- [throwIfEmpty](rx_RunnableObservableLike.md#throwifempty)
- [toReadonlyArray](rx_RunnableObservableLike.md#toreadonlyarray)

## Variables

### decodeWithCharsetT

• `Const` **decodeWithCharsetT**: [`DecodeWithCharset`](containers.md#decodewithcharset)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### distinctUntilChangedT

• `Const` **distinctUntilChangedT**: [`DistinctUntilChanged`](containers.md#distinctuntilchanged)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### forEachT

• `Const` **forEachT**: [`ForEach`](containers.md#foreach)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### keepT

• `Const` **keepT**: [`Keep`](containers.md#keep)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### mapT

• `Const` **mapT**: [`Map`](containers.md#map)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### pairwiseT

• `Const` **pairwiseT**: [`Pairwise`](containers.md#pairwise)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### reduceT

• `Const` **reduceT**: [`Reduce`](containers.md#reduce)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### scanT

• `Const` **scanT**: [`Scan`](containers.md#scan)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### skipFirstT

• `Const` **skipFirstT**: [`SkipFirst`](containers.md#skipfirst)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### takeFirstT

• `Const` **takeFirstT**: [`TakeFirst`](containers.md#takefirst)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### takeLastT

• `Const` **takeLastT**: [`TakeLast`](containers.md#takelast)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### takeWhileT

• `Const` **takeWhileT**: [`TakeWhile`](containers.md#takewhile)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### throwIfEmptyT

• `Const` **throwIfEmptyT**: [`ThrowIfEmpty`](containers.md#throwifempty)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)\>

___

### toReadonlyArrayT

• `Const` **toReadonlyArrayT**: [`ToReadonlyArray`](containers.md#toreadonlyarray)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md), { `schedulerFactory`: [`Factory`](functions.md#factory)<[`VirtualTimeSchedulerLike`](../interfaces/scheduling.VirtualTimeSchedulerLike.md)\>  }\>

## Functions

### decodeWithCharset

▸ **decodeWithCharset**(`charset?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `charset?` | `string` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `ArrayBuffer`, `string`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, readonly [`T`, `T`]\>

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeUntil

▸ **takeUntil**<`T`\>(`notifier`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`): [`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<`unknown`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`RunnableObservableLike`](../interfaces/rx.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<{ `schedulerFactory`: [`Factory`](functions.md#factory)<[`VirtualTimeSchedulerLike`](../interfaces/scheduling.VirtualTimeSchedulerLike.md)\>  }\> |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>
